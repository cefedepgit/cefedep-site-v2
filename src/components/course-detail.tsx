import { ButtonLink, PageIntro } from "@/components/ui";
import { Breadcrumbs, Questions } from "@/components/detail-ui";
import { Endorsement } from "@/components/endorsement";
import type { CourseDetailContent } from "@/content/course-details";
import type { courses } from "@/content/catalog";

type Course = (typeof courses)[number];

export function CourseDetail({
  course,
  content,
}: {
  course: Course;
  content: CourseDetailContent;
}) {
  return (
    <>
      <Breadcrumbs section="Cursos" href="/cursos" title={course.title} />
      <PageIntro eyebrow={content.eyebrow} title={course.title}>
        <p>
          {course.description} {content.intro}
        </p>
      </PageIntro>
      <Endorsement />
      <section className="wrap detail-layout section">
        <div>
          <section className="detail-section">
            <h2>{content.overviewTitle}</h2>
            <p>{content.overview}</p>
            <h3>{content.audienceTitle}</h3>
            <p>{content.audience}</p>
          </section>
          <section className="detail-section">
            <h2>Qué estudiarás</h2>
            <div className="module-list">
              {content.modules.map((module, index) => (
                <article key={module.title}>
                  <span className="card-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{module.title}</h3>
                    <p>{module.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
          <section className="detail-section">
            <h2>Cómo se desarrolla</h2>
            <p>{content.development}</p>
            <h3>Aval y certificación</h3>
            <p>{content.certification}</p>
          </section>
          <Questions
            items={content.questions.map(({ question, answer }) => [
              question,
              answer,
            ])}
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
            <dd>Por confirmar</dd>
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
