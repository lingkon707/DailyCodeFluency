import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UI Plaza - Free UI Resources & Inspiration",
  description:
    "UI Plaza offers free UI resources, design inspiration, and tools for designers and developers.",
  keywords: [
    "UI", "UX", "Design", "Frontend", "React", "Next.js", "Tailwind", "Web Design"
  ],
  authors: [{ name: "MD Lingkon Islam", url: "https://uiplaza.vercel.app" }],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "UI Plaza - Free UI Resources & Inspiration",
    description:
      "UI Plaza offers free UI resources, design inspiration, and tools for designers and developers.",
    url: "https://uiplaza.vercel.app",
    siteName: "UI Plaza",
    type: "website",
    images: [
      {
        url: "https://uiplaza.vercel.app/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UI Plaza - Free UI Resources & Inspiration",
    description:
      "UI Plaza offers free UI resources, design inspiration, and tools for designers and developers.",
    images: ["https://uiplaza.vercel.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
