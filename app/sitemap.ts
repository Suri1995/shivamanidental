import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://shivamanidental.vercel.app",
      lastModified: new Date(),
    },
  ];
}