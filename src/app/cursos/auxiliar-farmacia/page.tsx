import { courses } from "@/content/catalog";
import { pageMetadata } from "@/lib/seo";
import { PageIntro, ButtonLink } from "@/components/ui";
import { Breadcrumbs, Questions } from "@/components/detail-ui";
import { Endorsement } from "@/components/endorsement";
const course = courses.find((c) => c.slug === "curso-farmacia")!;
export const metadata = pageMetadata(
  "Curso de Auxiliar en Farmacia",
  "Formación de CEFEDEP en farmacología, dispensación e inventarios. Modalidad híbrida, 8 semanas y aval académico de UISRAEL.",
  "/cursos/auxiliar-farmacia",
);
const modules = [
  [
    "Farmacología aplicada",
    "Estudio de vías de administración y familias de medicamentos como parte de la formación académica.",
  ],
  [
    "Recetas y medicamentos controlados",
    "Revisión de aspectos técnicos de las recetas y del marco de dispensación que se estudia en el programa.",
  ],
  [
    "Atención y comunicación en farmacia",
    "Atención al usuario, farmacovigilancia y organización comercial con criterios éticos.",
  ],
  [
    "Logística y gestión de inventarios",
    "Almacenamiento, rotación, proveedores y reposición de productos.",
  ],
  [
    "Normativa sanitaria",
    "Documentación de establecimientos, responsabilidades y preparación de ejercicios de inspección.",
  ],
];
export default function Pharmacy() {
  return (
    <>
      <Breadcrumbs section="Cursos" href="/cursos" title={course.title} />
      <PageIntro
        eyebrow="Salud / Formación continua"
        title="Auxiliar en Farmacia"
      >
        <p>
          {course.description} Un programa para fortalecer tus conocimientos
          sobre el trabajo en establecimientos farmacéuticos.
        </p>
      </PageIntro>
      <Endorsement />
      <section className="wrap detail-layout section">
        <div>
          <section className="detail-section">
            <h2>Una formación orientada a la práctica</h2>
            <p>
              El programa combina contenidos virtuales y un componente práctico.
              Su objetivo es desarrollar conocimientos de normativa,
              almacenamiento, dispensación y atención farmacéutica.
            </p>
            <h3>¿A quién está dirigido?</h3>
            <p>
              A jóvenes y adultos con título de bachiller interesados en esta
              área de formación.
            </p>
          </section>
          <section className="detail-section">
            <h2>Qué estudiarás</h2>
            <div className="module-list">
              {modules.map(([title, description], i) => (
                <article key={title}>
                  <span className="card-number">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
          <section className="detail-section">
            <h2>Cómo se desarrolla</h2>
            <p>
              La ficha publicada contempla discusión de casos, evaluaciones por
              módulo y actividades de simulación. El lugar, cronograma y
              condiciones del componente práctico deben confirmarse para cada
              convocatoria.
            </p>
            <h3>Aval y certificación</h3>
            <p>
              Curso con aval académico de la Universidad Israel (UISRAEL),
              confirmado por CEFEDEP. Consulta los requisitos de asistencia y
              evaluación, el tipo de certificado y sus condiciones antes de
              inscribirte.
            </p>
          </section>
          <Questions
            items={[
              [
                "¿Cuánto dura?",
                "La duración publicada es de dos meses, equivalentes a ocho semanas.",
              ],
              [
                "¿Es completamente virtual?",
                "No. La modalidad publicada es híbrida: 80% virtual y 20% práctico. Consulta la ubicación y organización del componente práctico.",
              ],
              [
                "¿Qué requisito de ingreso tiene?",
                "La ficha del programa indica título de bachiller.",
              ],
              [
                "¿Cuándo empieza y cuánto cuesta?",
                "La próxima fecha, el costo y los cupos están pendientes de confirmación para esta V2. No se recibe ningún pago aquí.",
              ],
              [
                "¿Quién imparte el curso?",
                "El perfil docente de la próxima convocatoria está pendiente de publicación.",
              ],
              [
                "¿Este curso equivale a una carrera universitaria?",
                "Se presenta como formación continua con aval académico, no como una carrera universitaria. No se promete habilitación profesional ni empleo.",
              ],
            ]}
          />
        </div>
        <aside className="detail-aside">
          <p className="eyebrow">Ficha del programa</p>
          <h2>Tu próximo aprendizaje</h2>
          <dl className="course-specs">
            <dt>Duración</dt>
            <dd>{course.duration}</dd>
            <dt>Modalidad</dt>
            <dd>{course.modality}</dd>
            <dt>Requisito</dt>
            <dd>{course.requirement}</dd>
            <dt>Aval académico</dt>
            <dd>Universidad Israel · UISRAEL</dd>
            <dt>Próxima convocatoria</dt>
            <dd>Por confirmar</dd>
            <dt>Inversión</dt>
            <dd>Por confirmar</dd>
          </dl>
          <ButtonLink href="/contacto">Preparar consulta</ButtonLink>
          <p className="content-note">
            Vista de pruebas. El formulario no envía datos y las inscripciones
            no están habilitadas.
          </p>
        </aside>
      </section>
      <section className="wrap section-topless">
        <ButtonLink href="/cursos" secondary>
          Ver todos los cursos
        </ButtonLink>
      </section>
    </>
  );
}
