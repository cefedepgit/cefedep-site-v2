import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { resolveSiteUrl } from "@/lib/site";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(resolveSiteUrl()),
  title: {
    default: "CEFEDEP | Formación y desarrollo profesional",
    template: "%s | CEFEDEP",
  },
  description:
    "Explora la propuesta de formación, acompañamiento académico y preparación EHEP de CEFEDEP.",
  icons: { icon: "/brand/cefedep.png", apple: "/brand/cefedep.png" },
  robots: { index: false, follow: false },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
