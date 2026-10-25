import type { Metadata } from "next";
import { resolveSiteUrl } from "./site";
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title: { absolute: `${title} | CEFEDEP` },
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | CEFEDEP`,
      description,
      url: new URL(path, resolveSiteUrl()).href,
      siteName: "CEFEDEP",
      locale: "es_EC",
      type: "website",
    },
    twitter: { card: "summary", title: `${title} | CEFEDEP`, description },
  };
}
