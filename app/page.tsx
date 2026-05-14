export const dynamic = "force-dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Examples from "@/components/Examples";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "CloneAI — Clone Any Website Into Next.js in Seconds",
  description:
    "Paste any URL and get a pixel-perfect Next.js 14 clone with Tailwind CSS, TypeScript, and responsive design. No design skills needed.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <Header />
      <Hero />
      <HowItWorks />
      <Features />
      <Examples />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
