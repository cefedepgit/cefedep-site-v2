"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation } from "@/lib/site";
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="site-header">
        <div className="wrap header-inner">
          <Link
            href="/"
            className="brand"
            aria-label="CEFEDEP, inicio"
            onClick={() => setOpen(false)}
          >
            <Image
              className="brand-logo"
              src="/brand/cefedep.png"
              alt="CEFEDEP Ecuador"
              width={500}
              height={500}
              sizes="110px"
              preload
            />
            <span className="brand-description">
              Educación e investigación<small>Formación que transforma.</small>
            </span>
          </Link>
          <button
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? "Cerrar" : "Menú"}{" "}
            <span aria-hidden="true">{open ? "×" : "☰"}</span>
          </button>
          <nav
            id="main-nav"
            aria-label="Navegación principal"
            className={open ? "nav nav-open" : "nav"}
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href + "/"))
                    ? "page"
                    : undefined
                }
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
