import { CourseDetail } from "@/components/course-detail";
import { courses } from "@/content/catalog";
import { courseDetails } from "@/content/course-details";
import { pageMetadata } from "@/lib/seo";

const course = courses.find((item) => item.slug === "curso-farmacia")!;
const content = courseDetails[course.slug];

export const metadata = pageMetadata(
  "Curso de Auxiliar en Farmacia",
  "Formación de CEFEDEP en farmacología, dispensación e inventarios. Modalidad híbrida, 8 semanas y aval académico de UISRAEL.",
  "/cursos/auxiliar-farmacia",
);

export default function Pharmacy() {
  return <CourseDetail course={course} content={content} />;
}
