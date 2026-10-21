"use client";
import { useState } from "react";
import { categories, courses } from "@/content/catalog";
import { ButtonLink } from "./ui";
export function CourseCatalog() {
  const [category, setCategory] = useState<string>("Todos");
  const filtered = courses.filter(
    (course) => category === "Todos" || course.category === category,
  );
  return (
    <>
      <div className="catalog-toolbar">
        <div
          className="course-filters"
          role="group"
          aria-label="Filtrar cursos por área"
        >
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <p role="status">{filtered.length} cursos</p>
      </div>
      <div className="grid-three course-grid">
        {filtered.map((course, index) => (
          <article className="course-card" key={course.slug} id={course.slug}>
            <div className="course-card-top">
              <p className="eyebrow">{course.category}</p>
              <span aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="course-body">
              <h2>{course.title}</h2>
              <p>{course.description}</p>
              <div className="course-facts">
                <span>{course.duration}</span>
                <span>{course.modality}</span>
              </div>
              <details>
                <summary>Requisitos e información</summary>
                <p>
                  <strong>Requisito:</strong> {course.requirement}.
                </p>
                <p>
                  <strong>Aval académico:</strong> Universidad Israel (UISRAEL).
                </p>
                <p>
                  Consulta la próxima convocatoria, costo y condiciones de
                  certificación. Esta vista no recibe inscripciones.
                </p>
              </details>
              <ButtonLink
                href={
                  course.slug === "curso-farmacia"
                    ? "/cursos/auxiliar-farmacia"
                    : `/cursos/${course.slug}`
                }
                secondary
              >
                Ver programa completo
              </ButtonLink>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
