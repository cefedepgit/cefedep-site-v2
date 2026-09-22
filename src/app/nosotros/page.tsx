import { PageIntro, ContactBanner } from "@/components/ui";
import { TrainingGallery } from "@/components/training-gallery";
import { Endorsement } from "@/components/endorsement";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Nosotros",
  "CEFEDEP Ecuador: educación, investigación, consultoría y formación con aval académico de la Universidad Israel.",
  "/nosotros",
);
export default function About() {
  return (
    <>
      <PageIntro
        eyebrow="Somos CEFEDEP Ecuador"
        title="El conocimiento nos mueve."
      >
        <p>
          Acompañamos a estudiantes, profesionales y organizaciones en sus
          proyectos académicos, de investigación y de desarrollo institucional.
        </p>
      </PageIntro>
      <section className="wrap about-grid section-topless">
        <div className="quote-panel">
          <p>
            Ideas que crecen.
            <br />
            Personas que
            <br />
            <em>transforman.</em>
          </p>
          <span>EDUCACIÓN · INVESTIGACIÓN · CONSULTORÍA</span>
        </div>
        <div>
          <p className="eyebrow">Nuestra labor</p>
          <h2>Aprendizaje con propósito.</h2>
          <p>
            Integramos asesoría de tesis, análisis de datos, creación de
            institutos, consultoría educativa y capacitación.
          </p>
          <h3>Para personas</h3>
          <p>
            Formación continua y acompañamiento académico para fortalecer
            conocimientos y desarrollar competencias.
          </p>
          <h3>Para instituciones</h3>
          <p>
            Consultoría, planificación y talleres para docentes, directivos y
            equipos académicos.
          </p>
          <h3>Desde la experiencia</h3>
          <p>
            Compartimos nuestras jornadas de capacitación como parte del trabajo
            que realizamos con comunidades educativas.
          </p>
        </div>
      </section>
      <Endorsement />
      <TrainingGallery />
      <ContactBanner />
    </>
  );
}
