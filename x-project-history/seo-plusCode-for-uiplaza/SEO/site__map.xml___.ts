import { NextResponse } from "next/server";

export async function GET() {
  const pages = [
    { url: "/", priority: 1.0 },
    // Add other pages here if you have more, e.g.,
    // { url: "/about", priority: 0.8 },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
  <url>
    <loc>https://uiplaza.vercel.app${page.url}</loc>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join("")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
