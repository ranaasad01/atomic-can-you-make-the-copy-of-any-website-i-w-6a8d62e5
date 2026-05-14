import { Link, Eye, Download, ArrowRight } from 'lucide-react';

const steps = [
  {
    step: "01",
    icon: Link,
    title: "Paste the URL",
    description:
      "Copy any website URL — a landing page, SaaS product, portfolio, or e-commerce store — and paste it into CloneAI.",
    iconBg: "linear-gradient(135deg, #6366f1, #3b82f6)",
    glow: "rgba(99,102,241,0.3)",
  },
  {
    step: "02",
    icon: Eye,
    title: "AI Analyzes the Site",
    description:
      "Our AI engine crawls the page, extracts layout, typography, colors, sections, and content — building a complete design map.",
    iconBg: "linear-gradient(135deg, #a855f7, #ec4899)",
    glow: "rgba(139,92,246,0.3)",
  },
  {
    step: "03",
    icon: Download,
    title: "Get Your Clone",
    description:
      "Receive a pixel-perfect Next.js 14 project with Tailwind CSS, fully responsive, and ready to deploy on Vercel in one click.",
    iconBg: "linear-gradient(135deg, #06b6d4, #14b8a6)",
    glow: "rgba(6,182,212,0.3)",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(99,102,241,0.08), transparent)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-6">
            Simple Process
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            From URL to production-ready Next.js code in three simple steps. No configuration, no
            design tools, no hassle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.step} className="relative">
                <div
                  className="card p-8 h-full relative overflow-hidden"
                  style={{ background: "rgba(18,18,26,0.8)" }}
                >
                  <div className="text-6xl font-black text-white/5 absolute top-6 right-6 leading-none select-none">
                    {step.step}
                  </div>

                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{ background: step.iconBg, boxShadow: "0 8px 24px " + step.glow }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{step.description}</p>

                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-6">
                      <ArrowRight className="w-5 h-5 text-indigo-500 rotate-90" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
