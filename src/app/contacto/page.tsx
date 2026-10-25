import { PageIntro } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Contacto",
  "Prepara una consulta sobre formación, servicios académicos o EHEP. Formulario de demostración sin envío de datos.",
  "/contacto",
);
export default function Contact() {
  return (
    <>
      <PageIntro
        eyebrow="Conversemos sobre tu próximo paso"
        title="Todo comienza con una pregunta."
      >
        <p>
          Cuéntanos qué te gustaría aprender o qué acompañamiento necesitas.
        </p>
      </PageIntro>
      <section className="wrap contact-grid section-topless">
        <aside>
          <h2>Prepara tu consulta.</h2>
          <p>
            En esta vista puedes probar y validar el formulario.{" "}
            <strong>No se envían ni se guardan tus datos.</strong>
          </p>
          <p>
            Utiliza datos ficticios. El canal de atención se habilitará cuando
            la integración esté lista.
          </p>
          <div className="contact-aside">
            <span aria-hidden="true">↗</span>
            <p>
              Un nuevo camino
              <br />
              empieza contigo.
            </p>
          </div>
        </aside>
        <ContactForm />
      </section>
    </>
  );
}
