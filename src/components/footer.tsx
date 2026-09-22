import Link from "next/link";
import Image from "next/image";
import { navigation } from "@/lib/site";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <Link href="/" className="footer-brand">
            <Image
              src="/brand/cefedep.png"
              alt="CEFEDEP Ecuador"
              width={500}
              height={500}
              sizes="110px"
              className="footer-logo"
            />
          </Link>
          <p>Conocimiento que abre posibilidades.</p>
        </div>
        <nav aria-label="Navegación del pie de página">
          {navigation.slice(1).map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="wrap footer-bottom">
        <p>© {new Date().getFullYear()} CEFEDEP · V2</p>
        <p>Vista de pruebas · Sin inscripciones ni pagos activos.</p>
      </div>
    </footer>
  );
}
