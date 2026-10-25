"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui";

const videoId = "fjiOqLF6lac";
const slideDuration = 25500;
const transitionDuration = 450;

export function HomeHero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [videoAutoplay, setVideoAutoplay] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current === 0 ? 1 : 0));
      setVideoAutoplay(true);
    }, slideDuration);
    return () => window.clearInterval(interval);
  }, [paused, reducedMotion]);

  useEffect(() => {
    if (activeSlide === 1) return;
    const timeout = window.setTimeout(
      () => setVideoAutoplay(false),
      transitionDuration,
    );
    return () => window.clearTimeout(timeout);
  }, [activeSlide]);

  return (
    <section className="home-hero-carousel" aria-label="Presentación de CEFEDEP">
      <div
        className={`home-hero-slide${activeSlide === 0 ? " is-active" : ""}`}
        role="group"
        aria-label="Presentación de CEFEDEP"
        aria-roledescription="diapositiva"
        aria-hidden={activeSlide !== 0}
        inert={activeSlide !== 0}
      >
        <section className="hero wrap">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="dot" /> Educación · Investigación · Consultoría
            </p>
            <h1>
              Impulsa tus ideas.
              <br />
              Transforma tu
              <br />
              <em>futuro.</em>
            </h1>
            <p className="hero-description">
              Acompañamos tu proyecto académico e institucional. Aprende,
              investiga y desarrolla nuevas competencias con CEFEDEP Ecuador.
            </p>
            <div className="actions">
              <ButtonLink href="/cursos">Explorar cursos</ButtonLink>
              <ButtonLink href="/servicios" secondary>
                Conocer servicios
              </ButtonLink>
            </div>
            <p className="hero-note">
              Formación para personas. Soluciones para instituciones.
            </p>
          </div>
          <figure className="hero-photo">
            <Image
              src="/photos/capacitacion-taller.jpeg"
              alt="Jornada de capacitación de CEFEDEP con facilitadores y participantes compartiendo conocimientos"
              fill
              sizes="(max-width: 760px) 100vw, 50vw"
              preload
            />
            <figcaption>
              <span>EXPERIENCIA CEFEDEP</span>
              <strong>
                Aprender juntos.
                <br />
                Crecer en comunidad.
              </strong>
            </figcaption>
          </figure>
        </section>
      </div>
      <div
        className={`home-hero-video${activeSlide === 1 ? " is-active" : ""}`}
        role="group"
        aria-label="Video de CEFEDEP"
        aria-roledescription="diapositiva"
        aria-hidden={activeSlide !== 1}
        inert={activeSlide !== 1}
      >
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=${videoAutoplay ? 1 : 0}&mute=0&controls=0&disablekb=1&fs=0&loop=1&playlist=${videoId}&playsinline=1&rel=0&iv_load_policy=3`}
          title="Video de CEFEDEP"
          allow="autoplay; encrypted-media"
          referrerPolicy="strict-origin-when-cross-origin"
          loading="lazy"
        />
      </div>
      <div
        className="home-hero-controls"
        role="group"
        aria-label="Controles de la presentación"
      >
        <button
          type="button"
          aria-label="Mostrar la presentación de CEFEDEP"
          aria-pressed={activeSlide === 0}
          onClick={() => setActiveSlide(0)}
        >
          1
        </button>
        <button
          type="button"
          aria-label="Mostrar el video"
          aria-pressed={activeSlide === 1}
          onClick={() => {
            setVideoAutoplay(true);
            setActiveSlide(1);
          }}
        >
          2
        </button>
        <button
          type="button"
          aria-label={
            reducedMotion
              ? "Rotación automática desactivada por preferencia de movimiento"
              : paused
                ? "Reanudar presentación"
                : "Pausar presentación"
          }
          aria-pressed={paused}
          disabled={reducedMotion}
          onClick={() => setPaused((current) => !current)}
        >
          {paused ? "Reanudar" : "Pausar"}
        </button>
      </div>
    </section>
  );
}
