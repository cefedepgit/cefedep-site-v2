"use client";
import { useEffect, useState } from "react";
import {
  eligible,
  initialLab,
  sample,
  secondsLeft,
  summarize,
  validateBank,
  type Question,
  type LabState,
  type Career,
} from "@/lib/ehep";

const field =
  "w-full rounded-lg border border-stone-300 bg-white p-3 text-stone-900";
const button =
  "rounded-lg border border-stone-400 px-4 py-2 disabled:opacity-40 hover:bg-stone-100";
export function EhepLab({
  initialQuestions,
}: {
  initialQuestions: Question[];
}) {
  const [state, setState] = useState<LabState>(() =>
    initialLab(initialQuestions),
  );
  const [tab, setTab] = useState("simulador");
  const [profile, setProfile] = useState("demo-med");
  const [count, setCount] = useState(20);
  const [minutes, setMinutes] = useState(120);
  const [mode, setMode] = useState<"exam" | "cards">("exam");
  const [now, setNow] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [notice, setNotice] = useState("");
  const [search, setSearch] = useState("");
  const [career, setCareer] = useState<Career>("medicina");
  const [page, setPage] = useState(0);
  const [edit, setEdit] = useState<Question | null>(null);
  const [alias, setAlias] = useState("");
  const [expires, setExpires] = useState("2027-12-31");
  const student = state.students.find((s) => s.id === profile);
  const attempt = state.current;
  const question = attempt?.questions[attempt.index];
  const available = state.questions.filter(
    (q) => q.active && q.career === student?.career,
  );
  function update(next: LabState) {
    setState(next);
  }
  useEffect(() => {
    const timer = window.setInterval(() => {
      const time = Date.now();
      setNow(time);
      setState((previous) =>
        previous.current &&
        !previous.current.finishedAt &&
        previous.current.mode === "exam" &&
        time >= previous.current.deadline
          ? {
              ...previous,
              current: {
                ...previous.current,
                finishedAt: previous.current.deadline,
              },
            }
          : previous,
      );
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  function finish() {
    if (attempt)
      update({
        ...state,
        current: {
          ...attempt,
          finishedAt: Math.min(Date.now(), attempt.deadline),
        },
      });
    setConfirm(false);
  }
  function closeAttempt() {
    if (attempt)
      update({
        ...state,
        history: attempt.finishedAt
          ? [attempt, ...state.history].slice(0, 10)
          : state.history,
        current: null,
      });
  }
  function download() {
    const url = URL.createObjectURL(
      new Blob([JSON.stringify(state.questions)], { type: "application/json" }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = "banco-ehep.json";
    link.click();
    URL.revokeObjectURL(url);
  }
  const filtered = state.questions.filter(
    (q) =>
      q.career === career &&
      q.prompt.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
  );
  return (
    <main className="mx-auto max-w-6xl space-y-8 px-4 py-10">
      <header>
        <p className="font-semibold text-amber-800">
          Laboratorio local · CEFEDEP V2
        </p>
        <h1 className="text-3xl font-bold">Simulador EHEP y administración</h1>
        <p className="mt-3 rounded-xl bg-amber-50 p-4">
          Modo de prueba sin autenticación: usa únicamente alias ficticios. Los
          cambios duran hasta recargar esta página; exporta el banco para
          conservarlo. No se conecta a alumnos, pagos ni bases reales. Las
          claves de respuesta están disponibles en este laboratorio; no es un
          entorno de evaluación segura.
        </p>
      </header>
      <nav aria-label="Área del laboratorio" className="flex flex-wrap gap-3">
        {["simulador", "administración"].map((t) => (
          <button
            key={t}
            className={button}
            aria-pressed={tab === t}
            onClick={() => setTab(t)}
          >
            {t === "simulador" ? "Simulador" : "Administración"}
          </button>
        ))}
      </nav>
      {notice && (
        <p role="status" className="rounded-lg bg-stone-100 p-3">
          {notice}
        </p>
      )}
      {tab === "simulador" && (
        <section className="space-y-5">
          {!attempt && (
            <>
              <h2 className="text-2xl font-semibold">Prepara tu práctica</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <label>
                  Perfil de prueba
                  <select
                    className={field}
                    value={profile}
                    onChange={(e) => setProfile(e.target.value)}
                  >
                    {state.students.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.alias}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  Modalidad
                  <select
                    className={field}
                    value={mode}
                    onChange={(e) => setMode(e.target.value as typeof mode)}
                  >
                    <option value="exam">Examen cronometrado</option>
                    <option value="cards">Tarjetas de estudio</option>
                  </select>
                </label>
                <label>
                  Número de preguntas (5–100)
                  <input
                    className={field}
                    type="number"
                    min={5}
                    max={100}
                    value={count}
                    onChange={(e) => setCount(Number(e.target.value))}
                  />
                </label>
                {mode === "exam" && (
                  <label>
                    Tiempo en minutos (1–240)
                    <input
                      className={field}
                      type="number"
                      min={1}
                      max={240}
                      value={minutes}
                      onChange={(e) => setMinutes(Number(e.target.value))}
                    />
                  </label>
                )}
              </div>
              <p>
                {available.length} preguntas activas para este perfil. El
                resultado es orientativo y no equivale a una calificación
                oficial.
              </p>
              <button
                className={button}
                disabled={
                  !student ||
                  !eligible(student) ||
                  available.length < 5 ||
                  count < 5 ||
                  count > 100 ||
                  !Number.isInteger(count) ||
                  minutes < 1 ||
                  minutes > 240 ||
                  !Number.isInteger(minutes)
                }
                onClick={() => {
                  if (!student || !eligible(student)) return;
                  const startedAt = Date.now();
                  setRevealed(false);
                  update({
                    ...state,
                    current: {
                      id: crypto.randomUUID(),
                      studentId: student.id,
                      career: student.career,
                      questions: sample(available, count),
                      answers: {},
                      flagged: [],
                      index: 0,
                      startedAt,
                      deadline:
                        startedAt + (mode === "exam" ? minutes : 1440) * 60000,
                      mode,
                    },
                  });
                }}
              >
                Comenzar práctica
              </button>
              {student && !eligible(student) && (
                <p role="status">
                  Este perfil tiene el acceso desactivado o vencido.
                </p>
              )}
            </>
          )}
          {attempt && !attempt.finishedAt && question && (
            <>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-xl font-semibold">
                  Pregunta {attempt.index + 1} de {attempt.questions.length}
                </h2>
                {attempt.mode === "exam" && (
                  <p aria-label="Tiempo restante">
                    Tiempo:{" "}
                    {Math.floor(
                      secondsLeft(attempt, now || attempt.startedAt) / 60,
                    )}
                    :
                    {String(
                      secondsLeft(attempt, now || attempt.startedAt) % 60,
                    ).padStart(2, "0")}
                  </p>
                )}
              </div>
              <p className="whitespace-pre-wrap text-lg">{question.prompt}</p>
              <div className="grid gap-3">
                {question.options.map((option, i) => (
                  <button
                    key={i}
                    className={`${button} text-left ${attempt.answers[question.id] === i ? "bg-amber-100 ring-2 ring-amber-700" : ""}`}
                    aria-pressed={attempt.answers[question.id] === i}
                    onClick={() =>
                      update({
                        ...state,
                        current: {
                          ...attempt,
                          answers: { ...attempt.answers, [question.id]: i },
                        },
                      })
                    }
                  >
                    {String.fromCharCode(65 + i)}. {option}
                  </button>
                ))}
              </div>
              {attempt.mode === "cards" && (
                <>
                  <button
                    className={button}
                    onClick={() => setRevealed(!revealed)}
                  >
                    Mostrar / ocultar respuesta
                  </button>
                  {revealed && (
                    <p className="rounded-xl bg-green-50 p-4">
                      Respuesta del banco: {question.options[question.correct]}
                      <br />
                      {question.explanation ||
                        "Esta pregunta todavía no tiene una explicación revisada."}
                    </p>
                  )}
                </>
              )}
              <div className="flex flex-wrap gap-3">
                <button
                  className={button}
                  disabled={attempt.index === 0}
                  onClick={() => {
                    setRevealed(false);
                    update({
                      ...state,
                      current: { ...attempt, index: attempt.index - 1 },
                    });
                  }}
                >
                  Anterior
                </button>
                <button
                  className={button}
                  disabled={attempt.index === attempt.questions.length - 1}
                  onClick={() => {
                    setRevealed(false);
                    update({
                      ...state,
                      current: { ...attempt, index: attempt.index + 1 },
                    });
                  }}
                >
                  Siguiente
                </button>
                <button
                  className={button}
                  aria-pressed={attempt.flagged.includes(question.id)}
                  onClick={() =>
                    update({
                      ...state,
                      current: {
                        ...attempt,
                        flagged: attempt.flagged.includes(question.id)
                          ? attempt.flagged.filter((id) => id !== question.id)
                          : [...attempt.flagged, question.id],
                      },
                    })
                  }
                >
                  Marcar para revisar
                </button>
              </div>
              <nav aria-label="Preguntas" className="flex flex-wrap gap-2">
                {attempt.questions.map((q, i) => (
                  <button
                    key={q.id}
                    className={button}
                    aria-current={i === attempt.index ? "step" : undefined}
                    aria-label={`Ir a pregunta ${i + 1}${attempt.answers[q.id] !== undefined ? ", respondida" : ", pendiente"}${attempt.flagged.includes(q.id) ? ", marcada" : ""}`}
                    onClick={() => {
                      setRevealed(false);
                      update({ ...state, current: { ...attempt, index: i } });
                    }}
                  >
                    {i + 1}
                    {attempt.flagged.includes(q.id)
                      ? " ★"
                      : attempt.answers[q.id] !== undefined
                        ? " ✓"
                        : ""}
                  </button>
                ))}
              </nav>
              <button className={button} onClick={() => setConfirm(true)}>
                Finalizar práctica
              </button>
              {confirm && (
                <div role="alert" className="rounded-xl border p-4">
                  <p>
                    Quedan {summarize(attempt).unanswered} preguntas sin
                    responder. ¿Finalizar?
                  </p>
                  <button className={button} onClick={finish}>
                    Confirmar finalización
                  </button>{" "}
                  <button className={button} onClick={() => setConfirm(false)}>
                    Seguir practicando
                  </button>
                </div>
              )}
            </>
          )}
          {attempt?.finishedAt && (
            <>
              <h2 className="text-2xl font-semibold">Resultados de práctica</h2>
              <p>
                {summarize(attempt).correct} de {attempt.questions.length}{" "}
                correctas · {summarize(attempt).percentage}% ·{" "}
                {summarize(attempt).unanswered} sin responder ·{" "}
                {summarize(attempt).elapsed} segundos
              </p>
              <p>
                Resultado según las claves del banco original, pendiente de
                validación académica.
              </p>
              {attempt.questions.map((q, i) => (
                <details key={q.id} className="rounded-lg border p-4">
                  <summary>
                    Pregunta {i + 1} ·{" "}
                    {attempt.answers[q.id] === q.correct
                      ? "Correcta"
                      : "Por revisar"}
                  </summary>
                  <p className="my-3">{q.prompt}</p>
                  <p>
                    Tu respuesta:{" "}
                    {q.options[attempt.answers[q.id]] ?? "Sin responder"}
                  </p>
                  <p>Respuesta del banco: {q.options[q.correct]}</p>
                  <p>{q.explanation || "Sin explicación revisada."}</p>
                </details>
              ))}
              <button className={button} onClick={closeAttempt}>
                Guardar resultado y volver
              </button>
            </>
          )}
          {!!state.history.length && (
            <details>
              <summary>
                Historial de esta sesión ({state.history.length})
              </summary>
              {state.history.map((a) => (
                <p key={a.id}>
                  {a.career} · {a.mode === "exam" ? "Examen" : "Tarjetas"} ·{" "}
                  {summarize(a).percentage}%
                </p>
              ))}
            </details>
          )}
        </section>
      )}
      {tab === "administración" && (
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">Administración de prueba</h2>
          <p>
            Acceso abierto únicamente para evaluar los flujos. El panel real
            necesitará autenticación y permisos verificados en el servidor.
          </p>
          <section className="space-y-3">
            <h3 className="text-xl font-semibold">Perfiles y accesos</h3>
            {state.students.map((s) => (
              <div
                key={s.id}
                className="flex flex-wrap items-center justify-between gap-3 rounded-lg border p-3"
              >
                <p>
                  {s.alias} · {s.career} · vence {s.expires.slice(0, 10)}
                </p>
                <button
                  className={button}
                  onClick={() => {
                    update({
                      ...state,
                      students: state.students.map((x) =>
                        x.id === s.id ? { ...x, enabled: !x.enabled } : x,
                      ),
                      current:
                        state.current?.studentId === s.id
                          ? null
                          : state.current,
                    });
                  }}
                >
                  {s.enabled ? "Desactivar" : "Activar"} {s.alias}
                </button>
              </div>
            ))}
            <form
              className="grid gap-3 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                update({
                  ...state,
                  students: [
                    ...state.students,
                    {
                      id: crypto.randomUUID(),
                      alias: alias.trim(),
                      career,
                      enabled: true,
                      expires: expires + "T23:59:59-05:00",
                    },
                  ],
                });
                setAlias("");
              }}
            >
              <label>
                Alias ficticio
                <input
                  className={field}
                  required
                  minLength={2}
                  maxLength={80}
                  value={alias}
                  onChange={(e) => setAlias(e.target.value)}
                />
              </label>
              <label>
                Carrera
                <select
                  className={field}
                  value={career}
                  onChange={(e) => {
                    setCareer(e.target.value as Career);
                    setPage(0);
                  }}
                >
                  <option value="medicina">Medicina</option>
                  <option value="enfermeria">Enfermería</option>
                </select>
              </label>
              <label>
                Vencimiento
                <input
                  required
                  className={field}
                  type="date"
                  value={expires}
                  onChange={(e) => setExpires(e.target.value)}
                />
              </label>
              <button className={button}>Crear perfil de prueba</button>
            </form>
          </section>
          <section className="space-y-4">
            <h3 className="text-xl font-semibold">Banco de preguntas</h3>
            <div className="flex flex-wrap gap-3">
              <button className={button} onClick={download}>
                Exportar banco JSON
              </button>
              <button
                className={button}
                onClick={() =>
                  setEdit({
                    id: crypto.randomUUID(),
                    career,
                    prompt: "",
                    options: ["", "", "", ""],
                    correct: 0,
                    active: true,
                    explanation: "",
                  })
                }
              >
                Nueva pregunta
              </button>
              <label className={button}>
                Importar banco JSON
                <input
                  className="block max-w-full"
                  type="file"
                  accept="application/json,.json"
                  onChange={async (e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    try {
                      if (file.size > 8_000_000) throw Error();
                      const data: unknown = JSON.parse(await file.text());
                      if (!validateBank(data)) throw Error();
                      setState((previous) => ({
                        ...previous,
                        questions: data,
                      }));
                      setPage(0);
                      setNotice(
                        "Banco importado. Reemplaza las preguntas de esta sesión; las prácticas iniciadas conservan su copia.",
                      );
                    } catch {
                      setNotice(
                        "No se importó: archivo inválido o mayor a 8 MB. El banco anterior se conserva.",
                      );
                    }
                    e.target.value = "";
                  }}
                />
              </label>
            </div>
            <label className="block">
              Buscar preguntas
              <input
                className={field}
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(0);
                }}
              />
            </label>
            <p>
              {filtered.length} preguntas de {career}. La carrera se selecciona
              arriba.
            </p>
            {edit && (
              <form
                className="space-y-3 rounded-xl border p-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!validateBank([edit])) {
                    setNotice("Revisa el enunciado y las opciones.");
                    return;
                  }
                  update({
                    ...state,
                    questions: state.questions.some((q) => q.id === edit.id)
                      ? state.questions.map((q) =>
                          q.id === edit.id ? edit : q,
                        )
                      : [...state.questions, edit],
                  });
                  setEdit(null);
                  setNotice("Pregunta guardada en esta sesión.");
                }}
              >
                <h4 className="font-semibold">Editar pregunta</h4>
                <label className="block">
                  Enunciado
                  <textarea
                    required
                    className={field}
                    value={edit.prompt}
                    onChange={(e) =>
                      setEdit({ ...edit, prompt: e.target.value })
                    }
                  />
                </label>
                {edit.options.map((o, i) => (
                  <label className="block" key={i}>
                    Opción {i + 1}
                    <textarea
                      required
                      className={field}
                      value={o}
                      onChange={(e) =>
                        setEdit({
                          ...edit,
                          options: edit.options.map((v, n) =>
                            n === i ? e.target.value : v,
                          ),
                        })
                      }
                    />
                  </label>
                ))}
                <label className="block">
                  Respuesta correcta
                  <select
                    className={field}
                    value={edit.correct}
                    onChange={(e) =>
                      setEdit({ ...edit, correct: Number(e.target.value) })
                    }
                  >
                    {edit.options.map((_, i) => (
                      <option key={i} value={i}>
                        Opción {i + 1}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  Explicación revisada
                  <textarea
                    className={field}
                    value={edit.explanation}
                    onChange={(e) =>
                      setEdit({ ...edit, explanation: e.target.value })
                    }
                  />
                </label>
                <button className={button}>Guardar pregunta</button>{" "}
                <button
                  type="button"
                  className={button}
                  onClick={() => setEdit(null)}
                >
                  Cancelar edición
                </button>
              </form>
            )}
            {filtered.slice(page * 10, page * 10 + 10).map((q) => (
              <article key={q.id} className="space-y-2 rounded-lg border p-4">
                <p>{q.prompt}</p>
                <p>
                  {q.active ? "Activa" : "Archivada"} · {q.id}
                </p>
                <button
                  className={button}
                  onClick={() => setEdit({ ...q, options: [...q.options] })}
                >
                  Editar {q.id}
                </button>{" "}
                <button
                  className={button}
                  onClick={() =>
                    update({
                      ...state,
                      questions: state.questions.map((x) =>
                        x.id === q.id ? { ...x, active: !x.active } : x,
                      ),
                    })
                  }
                >
                  {q.active ? "Archivar" : "Restaurar"} {q.id}
                </button>
              </article>
            ))}
            <div className="flex gap-3">
              <button
                className={button}
                disabled={page === 0}
                onClick={() => setPage(page - 1)}
              >
                Página anterior
              </button>
              <span>Página {page + 1}</span>
              <button
                className={button}
                disabled={(page + 1) * 10 >= filtered.length}
                onClick={() => setPage(page + 1)}
              >
                Página siguiente
              </button>
            </div>
          </section>
        </section>
      )}
    </main>
  );
}
