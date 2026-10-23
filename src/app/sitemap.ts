import type { MetadataRoute } from "next";
import { navigation, resolveSiteUrl } from "@/lib/site";
import { servicePages } from "@/content/service-pages";
import { courseService } from "@/services/course.service";
export default function sitemap(): MetadataRoute.Sitemap {
  const allCourses = courseService.getAllCourses();
  return [
    ...navigation.map((item) => item.href),
    ...servicePages.map((item) => "/servicios/" + item.slug),
    ...allCourses.map((item) => "/cursos/" + item.slug),
    "/cursos/auxiliar-farmacia",
  ]
    .filter((href, index, paths) => paths.indexOf(href) === index)
    .map((href) => ({
      url: new URL(href, resolveSiteUrl()).href,
    }));
}
