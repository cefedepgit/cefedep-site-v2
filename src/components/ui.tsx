import Link from "next/link";
import type { ReactNode } from "react";
export function ButtonLink({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link
      className={`button ${secondary ? "button-secondary" : "button-primary"}`}
      href={href}
    >
      {children}
      <span aria-hidden="true">↗</span>
    </Link>
  );
}
export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="page-intro wrap">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <div className="intro-copy">{children}</div>
    </section>
  );
}
export function ContactBanner() {
  return (
    <section className="wrap">
      <div className="contact-banner">
        <div>
          <p className="eyebrow">Tu siguiente paso</p>
          <h2>Construyamos tu camino de aprendizaje.</h2>
        </div>
        <ButtonLink href="/contacto" secondary>
          Conoce el formulario
        </ButtonLink>
      </div>
    </section>
  );
}
