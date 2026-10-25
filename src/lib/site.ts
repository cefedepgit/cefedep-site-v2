export function resolveSiteUrl(
  env: Record<string, string | undefined> = process.env,
): string {
  const raw =
    env.SITE_URL ||
    env.DEPLOY_PRIME_URL ||
    env.URL ||
    (env.VERCEL_URL ? `https://${env.VERCEL_URL}` : "http://localhost:3000");
  const url = new URL(raw);
  const host = url.hostname.toLowerCase().replace(/\.$/, "");
  if (host === "cefedep.com" || host.endsWith(".cefedep.com"))
    throw new Error("Production domain is forbidden in CEFEDEP V2 preview.");
  if (
    !["https:", "http:"].includes(url.protocol) ||
    url.username ||
    url.password ||
    url.pathname !== "/" ||
    url.search ||
    url.hash
  )
    throw new Error(
      "SITE_URL must be an HTTP(S) origin without credentials, path or query.",
    );
  if (
    url.protocol !== "https:" &&
    !["localhost", "127.0.0.1", "[::1]"].includes(host)
  )
    throw new Error("Remote previews require HTTPS.");
  return url.origin;
}
export const navigation = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/cursos", label: "Cursos" },
  { href: "/ehep", label: "EHEP" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
] as const;
