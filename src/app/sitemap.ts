import type { MetadataRoute } from "next";
import { navigation, resolveSiteUrl } from "@/lib/site";
import { servicePages } from "@/content/service-pages";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...navigation.map((item) => item.href),
    ...servicePages.map((item) => "/servicios/" + item.slug),
    "/cursos/auxiliar-farmacia",
  ].map((href) => ({
    url: new URL(href, resolveSiteUrl()).href,
  }));
}
