import { notFound } from "next/navigation";
import { CourseDetail } from "@/components/course-detail";
import { courses } from "@/content/catalog";
import { courseDetails } from "@/content/course-details";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);
  const content = courseDetails[slug];

  if (!course || !content) notFound();

  return pageMetadata(
    course.title,
    `${course.description} ${content.intro}`,
    `/cursos/${course.slug}`,
  );
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);
  const content = courseDetails[slug];

  if (!course || !content) notFound();

  return <CourseDetail course={course} content={content} />;
}
