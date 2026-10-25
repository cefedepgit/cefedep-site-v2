import Image from "next/image";
import { ButtonLink, ContactBanner } from "@/components/ui";
import { HomeHero } from "@/components/home-hero";
import { Endorsement } from "@/components/endorsement";
import { TrainingGallery } from "@/components/training-gallery";
import { servicePages as services } from "@/content/service-pages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Educación, investigación y consultoría",
  "CEFEDEP Ecuador: acompañamiento académico, consultoría institucional y cursos con aval de la Universidad Israel.",
  "/",
);
export default function Home() {
  return (
    <>
      <HomeHero />
      <Endorsement />
      <section className="wrap section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Un camino para cada objetivo</p>
            <h2>¿Qué quieres impulsar?</h2>
          </div>
          <p>
            De tu proyecto de investigación al desarrollo de una institución
            educativa.
          </p>
        </div>
        <div className="grid-three">
          {services.slice(0, 3).map((service) => (
            <article className="service-card" key={service.number}>
              {service.image && (
                <Image
                  src={service.image}
                  alt="Ilustración ensayo"
                  width={320}
                  height={320}
                  className="service-icon"
                />
              )}
              <span className="card-number">{service.number} /</span>
              <p className="eyebrow">{service.tag}</p>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ButtonLink href={"/servicios/" + service.slug} secondary>
                Conocer servicio
              </ButtonLink>
            </article>
          ))}
        </div>
        <div className="section-action">
          <ButtonLink href="/servicios" secondary>
            Ver todos los servicios
          </ButtonLink>
        </div>
      </section>
      <section className="wrap ehep-feature">
        <div>
          <p className="eyebrow">Preparación EHEP</p>
          <h2>
            Un objetivo claro.
            <br />
            <em>Un paso a la vez.</em>
          </h2>
          <p>
            Organiza tu estudio y conoce nuestra propuesta de preparación para
            tu siguiente etapa profesional.
          </p>
          <ButtonLink href="/ehep">Conocer la propuesta EHEP</ButtonLink>
        </div>
        <div className="study-list">
          <p>
            <span>01</span> Organización del estudio por áreas
          </p>
          <p>
            <span>02</span> Práctica con preguntas y explicaciones
          </p>
          <p>
            <span>03</span> Seguimiento de tu aprendizaje
          </p>
          <small>La plataforma EHEP de esta V2 está en desarrollo.</small>
        </div>
      </section>
      <TrainingGallery />
      <ContactBanner />
    </>
  );
}
