import assert from "node:assert/strict";
import test from "node:test";
import { courseService, CourseService } from "../src/services/course.service";
import { courses, categories, baseCourses } from "../src/content/catalog";
import { courseDetails } from "../src/content/course-details";
import fs from "node:fs";
import path from "node:path";

test("courseService lists course-details JSON files accurately", () => {
  const files = courseService.listCourseDetailFiles();
  assert.ok(Array.isArray(files));
  assert.ok(files.length >= 19);
  assert.ok(files.includes("curso-farmacia.json"));
  assert.ok(files.includes("curso-enfermeria.json"));
});

test("courseService loads course detail by slug or filename", () => {
  const bySlug = courseService.getCourseDetail("curso-farmacia");
  const byFilename = courseService.getCourseDetail("curso-farmacia.json");

  assert.ok(bySlug);
  assert.ok(byFilename);
  assert.equal(bySlug.eyebrow, byFilename.eyebrow);
  assert.ok(bySlug.modules.length > 0);
  assert.ok(bySlug.questions.length > 0);
});

test("courseService getAllCourseDetails maps all detail files by slug", () => {
  const allDetails = courseService.getAllCourseDetails();
  assert.ok(typeof allDetails === "object");
  assert.ok(allDetails["curso-farmacia"]);
  assert.ok(allDetails["curso-salud-ocupacional"]);
  assert.ok(Object.keys(allDetails).length >= 19);
});

test("courseDetails Proxy supports both static and dynamic lookups", () => {
  assert.ok(courseDetails["curso-farmacia"]);
  assert.equal(courseDetails["curso-farmacia"].eyebrow, "Salud / Formación continua");
  assert.equal(courseDetails["curso-no-existe"], undefined);
  assert.ok("curso-farmacia" in courseDetails);
  assert.ok(!("curso-no-existe" in courseDetails));
  assert.ok(Object.keys(courseDetails).includes("curso-farmacia"));
});

test("catalog.ts preserves all 19 base courses and exposes categories with Todos first", () => {
  assert.equal(baseCourses.length, 19);
  assert.ok(courses.length >= 19);
  assert.equal(categories[0], "Todos");
  assert.ok(categories.includes("Salud"));
  assert.ok(categories.includes("Humana y educación"));
  assert.ok(categories.includes("Tecnología"));
});

test("CourseService can be instantiated with custom directory following SOLID principles", () => {
  const tempDir = path.join(process.cwd(), "node_modules", ".temp_course_service_test");
  try {
    fs.mkdirSync(tempDir, { recursive: true });
    const mockDetail = {
      eyebrow: "Innovación / Pruebas",
      intro: "Curso de prueba dinámica",
      overviewTitle: "Visión del curso",
      overview: "Resumen de prueba",
      audienceTitle: "Audiencia",
      audience: "Público general",
      modules: [{ title: "Módulo 1", description: "Intro" }],
      development: "Desarrollo",
      certification: "Certificado",
      questions: [{ question: "¿Cuánto dura?", answer: "20 horas." }],
    };
    fs.writeFileSync(
      path.join(tempDir, "curso-dinamico-test.json"),
      JSON.stringify(mockDetail),
      "utf-8",
    );

    const customService = new CourseService(tempDir);
    const files = customService.listCourseDetailFiles();
    assert.deepEqual(files, ["curso-dinamico-test.json"]);

    const loaded = customService.getCourseDetail("curso-dinamico-test");
    assert.ok(loaded);
    assert.equal(loaded.intro, "Curso de prueba dinámica");

    const allCourses = customService.getAllCourses();
    const dynamicFound = allCourses.find((c) => c.slug === "curso-dinamico-test");
    assert.ok(dynamicFound);
    assert.equal(dynamicFound.courseDetail, "curso-dinamico-test.json");
    assert.equal(dynamicFound.duration, "20 horas");
  } finally {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
});
