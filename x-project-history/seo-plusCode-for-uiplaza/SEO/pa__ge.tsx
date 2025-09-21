import Childrens from "./Childrens";

export const metadata = {
  title: "UI Plaza - Home",
  description:
    "Explore the latest UI designs, free resources, and inspiration at UI Plaza. Perfect for designers and developers.",
  keywords: [
    "UI", "UX", "Design", "Frontend", "React", "Next.js", "Tailwind", "Web Design"
  ],
  openGraph: {
    title: "UI Plaza - Home",
    description:
      "Explore the latest UI designs, free resources, and inspiration at UI Plaza. Perfect for designers and developers.",
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
    title: "UI Plaza - Home",
    description:
      "Explore the latest UI designs, free resources, and inspiration at UI Plaza. Perfect for designers and developers.",
    images: ["https://uiplaza.vercel.app/og-image.png"],
  },
};

export default function Home() {
  return (
    <main>
      <Childrens />
    </main>
  );
}
