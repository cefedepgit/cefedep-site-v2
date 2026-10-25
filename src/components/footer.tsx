import Link from "next/link";
import Image from "next/image";
import { navigation, socialNetworks } from "@/lib/site";

function SocialIcon({
  icon,
}: {
  icon: (typeof socialNetworks)[number]["icon"];
}) {
  if (icon === "facebook")
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v1.9H7v3.1h2.8v8z" />
      </svg>
    );
  if (icon === "instagram")
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="17.5" cy="6.5" r="1.25" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16.6 3c.4 2.2 1.6 3.5 3.4 3.7v3.2a8.4 8.4 0 0 1-3.4-1.1v6.8a6.3 6.3 0 1 1-5.4-6.2v3.4a2.9 2.9 0 1 0 2 2.8V3h3.4Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <Link href="/" className="footer-brand">
            <Image
              src="/brand/cefedepLogoV2.png"
              alt="CEFEDEP Ecuador"
              width={500}
              height={500}
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
        <section className="footer-social" aria-labelledby="footer-social-title">
          <h2 id="footer-social-title">Nuestras redes</h2>
          <div className="footer-social-links">
            {socialNetworks.map((network) => (
              <a
                href={network.href}
                key={network.icon}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${network.label} (se abre en una pestaña nueva)`}
              >
                <SocialIcon icon={network.icon} />
              </a>
            ))}
          </div>
        </section>
      </div>
      <div className="wrap footer-bottom">
        <p>© {new Date().getFullYear()} CEFEDEP · V2</p>
      </div>
    </footer>
  );
}
