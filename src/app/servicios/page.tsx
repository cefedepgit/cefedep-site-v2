import { PageIntro, ContactBanner, ButtonLink } from "@/components/ui";
import { TrainingGallery } from "@/components/training-gallery";
import { servicePages as services } from "@/content/service-pages";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Servicios académicos e institucionales",
  "Asesoría de tesis, creación de institutos, consultoría educativa, investigación y capacitación institucional con CEFEDEP Ecuador.",
  "/servicios",
);
export default function Services() {
  return (
    <>
      <PageIntro
        eyebrow="Educación · Investigación · Consultoría"
        title="Tu proyecto merece un buen acompañamiento."
      >
        <p>
          Soluciones para estudiantes, profesionales, docentes e instituciones.
          Encuentra el apoyo que necesitas para tu siguiente etapa.
        </p>
      </PageIntro>
      <section className="wrap section-topless">
        <div className="service-rows">
          {services.map((s) => (
            <article key={s.number}>
              <span className="card-number">{s.number}</span>
              <div>
                <p className="eyebrow">{s.tag}</p>
                <h2>{s.title}</h2>
              </div>
              <div>
                <p>{s.description}</p>
                <ul className="service-details">
                  {s.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <ButtonLink href={"/servicios/" + s.slug} secondary>
                  Conocer el servicio
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
        <p className="content-note">
          El acompañamiento académico respeta la autoría y promueve el
          aprendizaje. El alcance de cada servicio se acuerda según las
          necesidades del proyecto.
        </p>
      </section>
      <TrainingGallery />
      <ContactBanner />
    </>
  );
}
