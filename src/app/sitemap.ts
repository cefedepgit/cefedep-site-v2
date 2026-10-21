import type { MetadataRoute } from "next";
import { navigation, resolveSiteUrl } from "@/lib/site";
import { servicePages } from "@/content/service-pages";
import { courses } from "@/content/catalog";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...navigation.map((item) => item.href),
    ...servicePages.map((item) => "/servicios/" + item.slug),
    ...courses.map((item) => "/cursos/" + item.slug),
    "/cursos/auxiliar-farmacia",
  ]
    .filter((href, index, paths) => paths.indexOf(href) === index)
    .map((href) => ({
      url: new URL(href, resolveSiteUrl()).href,
    }));
}
