import Link from "next/link";
export function Breadcrumbs({
  section,
  href,
  title,
}: {
  section: string;
  href: string;
  title: string;
}) {
  return (
    <nav className="wrap breadcrumbs" aria-label="Ruta de navegación">
      <Link href="/">Inicio</Link>
      <span aria-hidden="true">/</span>
      <Link href={href}>{section}</Link>
      <span aria-hidden="true">/</span>
      <span aria-current="page">{title}</span>
    </nav>
  );
}
export function Questions({ items }: { items: string[][] }) {
  return (
    <section className="detail-faq">
      <p className="eyebrow">Resolvemos tus dudas</p>
      <h2>Preguntas frecuentes</h2>
      {items.map(([question, answer]) => (
        <details key={question}>
          <summary>{question}</summary>
          <p>{answer}</p>
        </details>
      ))}
    </section>
  );
}
