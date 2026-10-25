import { ButtonLink, PageIntro } from "@/components/ui";
export default function NotFound() {
  return (
    <PageIntro
      eyebrow="404 / Página no encontrada"
      title="Busquemos otro camino."
    >
      <p>La página que buscas no está disponible.</p>
      <ButtonLink href="/">Volver al inicio</ButtonLink>
    </PageIntro>
  );
}
