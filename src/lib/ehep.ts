export type Career = "medicina" | "enfermeria";
export interface Question {
  id: string;
  career: Career;
  prompt: string;
  options: string[];
  correct: number;
  active: boolean;
  explanation: string;
}
export interface Student {
  id: string;
  alias: string;
  career: Career;
  enabled: boolean;
  expires: string;
}
export interface Attempt {
  id: string;
  studentId: string;
  career: Career;
  questions: Question[];
  answers: Record<string, number>;
  flagged: string[];
  index: number;
  startedAt: number;
  deadline: number;
  finishedAt?: number;
  mode: "exam" | "cards";
}
export interface LabState {
  version: 1;
  questions: Question[];
  students: Student[];
  history: Attempt[];
  current: Attempt | null;
}
export function validateBank(value: unknown): value is Question[] {
  if (!Array.isArray(value) || !value.length || value.length > 10000)
    return false;
  const ids = new Set();
  return value.every((q) => {
    if (
      !q ||
      typeof q !== "object" ||
      typeof q.id !== "string" ||
      !/^[a-zA-Z0-9_-]{1,80}$/.test(q.id) ||
      ids.has(q.id)
    )
      return false;
    ids.add(q.id);
    return (
      ["medicina", "enfermeria"].includes(q.career) &&
      typeof q.prompt === "string" &&
      q.prompt.trim().length >= 5 &&
      q.prompt.length <= 15000 &&
      Array.isArray(q.options) &&
      q.options.length >= 2 &&
      q.options.length <= 6 &&
      q.options.every(
        (o: unknown) =>
          typeof o === "string" && o.trim().length && o.length <= 5000,
      ) &&
      Number.isInteger(q.correct) &&
      q.correct >= 0 &&
      q.correct < q.options.length &&
      typeof q.active === "boolean" &&
      typeof q.explanation === "string" &&
      q.explanation.length <= 10000
    );
  });
}
export function eligible(student: Student, now = Date.now()) {
  return (
    student.enabled &&
    Number.isFinite(Date.parse(student.expires)) &&
    Date.parse(student.expires) > now
  );
}
export function sample<T>(
  items: T[],
  count: number,
  random = Math.random,
): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, Math.max(0, Math.min(count, copy.length)));
}
export function secondsLeft(attempt: Attempt, now = Date.now()) {
  return Math.max(0, Math.ceil((attempt.deadline - now) / 1000));
}
export function summarize(attempt: Attempt) {
  const correct = attempt.questions.filter(
    (q) => attempt.answers[q.id] === q.correct,
  ).length;
  const answered = attempt.questions.filter((q) =>
    Number.isInteger(attempt.answers[q.id]),
  ).length;
  const elapsed = Math.max(
    0,
    Math.round(
      (Math.min(attempt.finishedAt ?? Date.now(), attempt.deadline) -
        attempt.startedAt) /
        1000,
    ),
  );
  return {
    correct,
    answered,
    unanswered: attempt.questions.length - answered,
    percentage: Math.round((correct / attempt.questions.length) * 100),
    elapsed,
  };
}
export function initialLab(questions: Question[]): LabState {
  return {
    version: 1,
    questions,
    students: [
      {
        id: "demo-med",
        alias: "Perfil de prueba · Medicina",
        career: "medicina",
        enabled: true,
        expires: "2099-12-31T23:59:59Z",
      },
      {
        id: "demo-enf",
        alias: "Perfil de prueba · Enfermería",
        career: "enfermeria",
        enabled: true,
        expires: "2099-12-31T23:59:59Z",
      },
    ],
    history: [],
    current: null,
  };
}
