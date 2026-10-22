import type { Metadata } from "next";

export const siteName = "5As";
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://5astechnologies.com";

export function pageMeta(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName,
      locale: "en_NG",
      url: path,
      title: `${title} | ${siteName}`,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
    },
  };
}
