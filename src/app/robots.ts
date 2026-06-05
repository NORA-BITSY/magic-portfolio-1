import { baseURL } from "@/resources";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/work", "/work/", "/gallery", "/api/"],
      },
    ],
    sitemap: `${baseURL}/sitemap.xml`,
  };
}
