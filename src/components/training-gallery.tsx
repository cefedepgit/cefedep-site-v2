import Image from "next/image";
export function TrainingGallery() {
  return (
    <section className="wrap section training-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Nuestra experiencia, en imágenes</p>
          <h2>Conocimiento que se comparte.</h2>
        </div>
        <p>
          Capacitaciones impartidas por CEFEDEP para el desarrollo de equipos
          académicos.
        </p>
      </div>
      <div className="training-gallery">
        <figure>
          <Image
            src="/photos/capacitacion-taller.jpeg"
            alt="Participantes y facilitadores durante una capacitación de CEFEDEP en una sala de reuniones"
            width={1280}
            height={963}
            sizes="(max-width: 760px) 100vw, 50vw"
          />
          <figcaption>
            Intercambio de ideas y aprendizaje colaborativo.
          </figcaption>
        </figure>
        <figure>
          <Image
            src="/photos/capacitacion-auditorio.webp"
            alt="Facilitador de CEFEDEP impartiendo una capacitación con participantes en un auditorio"
            width={1280}
            height={963}
            sizes="(max-width: 760px) 100vw, 50vw"
          />
          <figcaption>Espacios de formación para seguir creciendo.</figcaption>
        </figure>
      </div>
    </section>
  );
}
