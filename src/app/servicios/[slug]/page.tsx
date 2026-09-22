import { notFound } from "next/navigation";
import { servicePages } from "@/content/service-pages";
import { pageMetadata } from "@/lib/seo";
import { PageIntro, ButtonLink } from "@/components/ui";
import { Breadcrumbs, Questions } from "@/components/detail-ui";
import { TrainingGallery } from "@/components/training-gallery";
export const dynamicParams = false;
export function generateStaticParams() {
  return servicePages.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicePages.find((s) => s.slug === slug);
  if (!service) notFound();
  return pageMetadata(
    service.title + " en Ecuador",
    service.description,
    "/servicios/" + slug,
  );
}
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicePages.find((s) => s.slug === slug);
  if (!service) notFound();
  return (
    <>
      <Breadcrumbs
        section="Servicios"
        href="/servicios"
        title={service.title}
      />
      <PageIntro eyebrow={service.tag} title={service.title}>
        <p>{service.description}</p>
      </PageIntro>
      <section className="wrap detail-layout section-topless">
        <div>
          <section className="detail-section">
            <h2>¿Para quién es?</h2>
            <p>{service.audience}</p>
            <h3>Qué buscamos contigo</h3>
            <p>{service.outcome}</p>
          </section>
          <section className="detail-section">
            <h2>Áreas de acompañamiento</h2>
            <ul className="service-details">
              {service.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <p className="content-note">
              El alcance y los entregables se definen en una propuesta
              específica, después de revisar tu necesidad.
            </p>
          </section>
          <section className="detail-section">
            <h2>Una ruta de trabajo clara</h2>
            <ol className="detail-steps">
              {service.stages.map((stage) => (
                <li key={stage}>{stage}</li>
              ))}
            </ol>
          </section>
          <Questions items={service.questions} />
        </div>
        <aside className="detail-aside">
          <p className="eyebrow">Tu siguiente paso</p>
          <h2>Prepara tu consulta</h2>
          <p>{service.preparation}</p>
          <ButtonLink href="/contacto">Ir al formulario de prueba</ButtonLink>
          <p className="content-note">
            Este formulario no envía datos. La atención y contratación aún no
            están habilitadas en la V2.
          </p>
          {slug === "formacion-profesional" && (
            <ButtonLink href="/cursos" secondary>
              Explorar el catálogo
            </ButtonLink>
          )}
        </aside>
      </section>
      {slug === "capacitacion-institucional" && <TrainingGallery />}
      <section className="wrap section-topless">
        <h2>Otros caminos para crecer</h2>
        <div className="related-links">
          {servicePages
            .filter((s) => s.slug !== slug)
            .slice(0, 3)
            .map((s) => (
              <ButtonLink key={s.slug} href={"/servicios/" + s.slug} secondary>
                {s.title}
              </ButtonLink>
            ))}
        </div>
      </section>
    </>
  );
}
