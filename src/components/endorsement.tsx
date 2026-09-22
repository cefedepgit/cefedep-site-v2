import Image from "next/image";
export function Endorsement() {
  return (
    <section className="wrap" aria-label="Aval académico">
      <div className="endorsement">
        <div>
          <p className="eyebrow">Formación con respaldo académico</p>
          <h2>Cursos con aval de la Universidad Israel.</h2>
          <p>
            Desarrolla tus competencias con la formación de CEFEDEP y el aval
            académico de UISRAEL.
          </p>
        </div>
        <div className="endorsement-logo">
          <Image
            src="/brand/uisrael.png"
            alt="UISRAEL · Universidad Israel"
            width={3409}
            height={1186}
            sizes="(max-width: 760px) 240px, 290px"
          />
        </div>
      </div>
    </section>
  );
}
