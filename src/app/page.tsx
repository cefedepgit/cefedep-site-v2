import Image from "next/image";
import { ButtonLink, ContactBanner } from "@/components/ui";
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
      <section className="hero wrap">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="dot" /> Educación · Investigación · Consultoría
          </p>
          <h1>
            Impulsa tus ideas.
            <br />
            Transforma tu
            <br />
            <em>futuro.</em>
          </h1>
          <p className="hero-description">
            Acompañamos tu proyecto académico e institucional. Aprende,
            investiga y desarrolla nuevas competencias con CEFEDEP Ecuador.
          </p>
          <div className="actions">
            <ButtonLink href="/cursos">Explorar cursos</ButtonLink>
            <ButtonLink href="/servicios" secondary>
              Conocer servicios
            </ButtonLink>
          </div>
          <p className="hero-note">
            Formación para personas. Soluciones para instituciones.
          </p>
        </div>
        <figure className="hero-photo">
          <Image
            src="/photos/capacitacion-taller.jpeg"
            alt="Jornada de capacitación de CEFEDEP con facilitadores y participantes compartiendo conocimientos"
            fill
            sizes="(max-width: 760px) 100vw, 50vw"
            preload
          />
          <figcaption>
            <span>EXPERIENCIA CEFEDEP</span>
            <strong>
              Aprender juntos.
              <br />
              Crecer en comunidad.
            </strong>
          </figcaption>
        </figure>
      </section>
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
              <Image
                src={service.image}
                alt="Ilustración ensayo"
                width={320}
                height={320}
                className="service-icon"
              />
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
