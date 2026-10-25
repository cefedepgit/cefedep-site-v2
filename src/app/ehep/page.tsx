import { ButtonLink, PageIntro } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Preparación EHEP",
  "Conoce la propuesta de preparación de CEFEDEP para el Examen de Habilitación para el Ejercicio Profesional. Plataforma en desarrollo.",
  "/ehep",
);
export default function Ehep() {
  return (
    <>
      <PageIntro
        eyebrow="Tu siguiente etapa profesional"
        title="Prepárate con un objetivo claro."
      >
        <p>
          Una propuesta de preparación para el Examen de Habilitación para el
          Ejercicio Profesional (EHEP), pensada para acompañar tu organización y
          aprendizaje.
        </p>
      </PageIntro>
      <section className="wrap section-topless">
        <div className="ehep-panel">
          <div>
            <p className="eyebrow">Plataforma en desarrollo</p>
            <h2>El primer paso es un buen plan.</h2>
            <p>
              Estamos diseñando un espacio de estudio con contenidos
              organizados, práctica y seguimiento de avances.
            </p>
            <ButtonLink href="/contacto" secondary>
              Preparar una consulta
            </ButtonLink>
          </div>
          <ul>
            <li>Ruta de estudio por áreas</li>
            <li>Práctica con preguntas y explicaciones</li>
            <li>Seguimiento del aprendizaje</li>
            <li>Acceso personal, en una fase futura</li>
          </ul>
        </div>
        <p className="content-note">
          Funcionalidades previstas, aún no disponibles. CEFEDEP no representa
          al organismo evaluador. La preparación no garantiza aprobar el examen
          ni sustituye información oficial.
        </p>
      </section>
    </>
  );
}
