import { PageIntro, ContactBanner } from "@/components/ui";
import { Endorsement } from "@/components/endorsement";
import { CourseCatalog } from "@/components/course-catalog";
import { courseService } from "@/services/course.service";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Cursos con aval de la Universidad Israel",
  "Cursos de CEFEDEP en salud, educación y tecnología, con aval de UISRAEL. Consulta duración, modalidad y requisitos.",
  "/cursos",
);
export default function Courses() {
  const allCourses = courseService.getAllCourses();
  const allCategories = courseService.getCategories();
  return (
    <>
      <PageIntro
        eyebrow="Formación continua / CEFEDEP"
        title="Aprende más. Llega más lejos."
      >
        <p>
          Encuentra tu próxima oportunidad de aprendizaje entre nuestros cursos
          de salud, área humana, educación y tecnología.
        </p>
      </PageIntro>
      <Endorsement />
      <section className="wrap section">
        <CourseCatalog courses={allCourses} categories={allCategories} />
        <p className="content-note">
          Duración y modalidad según el catálogo publicado de CEFEDEP. Próximas
          fechas, cupos y costos por consultar. Las inscripciones y los pagos no
          están habilitados en esta vista de pruebas.
        </p>
      </section>
      <ContactBanner />
    </>
  );
}
