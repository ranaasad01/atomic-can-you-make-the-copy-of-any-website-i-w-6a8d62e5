import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CloneAI — Clone Any Website Into Next.js in Seconds",
  description:
    "Paste any URL and get a pixel-perfect Next.js 14 clone with Tailwind CSS, TypeScript, and responsive design. No design skills needed.",
  keywords: ["website cloner", "Next.js clone", "AI website copy", "pixel perfect clone"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
