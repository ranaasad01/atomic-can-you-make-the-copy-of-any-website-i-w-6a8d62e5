import { Sparkles, Layout, FileCode, Activity, Star, Lock, ArrowRight, Check } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Analysis",
    description:
      "Advanced computer vision and NLP models analyze every pixel, font, color, and layout pattern on the source site.",
    tag: "Core",
    tagColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
  },
  {
    icon: Layout,
    title: "Pixel-Perfect Layout",
    description:
      "Every section, grid, card, and spacing value is faithfully reproduced using Tailwind CSS utility classes.",
    tag: "Design",
    tagColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
  },
  {
    icon: FileCode,
    title: "Clean Next.js 14 Code",
    description:
      "Output is App Router-ready TypeScript with server components, proper file structure, and zero dead code.",
    tag: "Code",
    tagColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  },
  {
    icon: Activity,
    title: "Fully Responsive",
    description:
      "Mobile, tablet, and desktop breakpoints are automatically detected and translated into responsive Tailwind classes.",
    tag: "Responsive",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    icon: Star,
    title: "Animations & Interactions",
    description:
      "Hover states, transitions, scroll animations, and micro-interactions are captured and recreated faithfully.",
    tag: "UX",
    tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
  {
    icon: Lock,
    title: "Private & Secure",
    description:
      "Your cloned code is never stored or shared. All processing happens in isolated sandboxes that are destroyed after delivery.",
    tag: "Security",
    tagColor: "text-rose-400 bg-rose-500/10 border-rose-500/20",
  },
];

const highlights = [
  "Supports SPAs, static sites, and server-rendered pages",
  "Extracts real copy, headings, and CTAs",
  "Preserves brand colors and typography",
  "One-click Vercel deployment",
  "GitHub export with full commit history",
  "Component-level code splitting",
];

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 80% 50%, rgba(139,92,246,0.06), transparent)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-6">
            Everything You Need
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            CloneAI goes beyond simple screenshots — it understands design systems, component
            patterns, and modern web architecture.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="card p-6 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-indigo-500/30 transition-all">
                    <Icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <span className={"text-xs font-semibold px-2.5 py-1 rounded-full border " + feature.tagColor}>
                    {feature.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Highlights banner */}
        <div
          className="rounded-2xl border border-white/10 p-8 lg:p-12"
          style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.08))" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
                Everything a developer needs,{" "}
                <span className="gradient-text">nothing they don&apos;t</span>
              </h3>
              <p className="text-slate-400 mb-6">
                CloneAI produces clean, maintainable code that your team can immediately build on
                top of — not a tangled mess of inline styles and div soup.
              </p>
              <a href="#pricing" className="btn-primary inline-flex">
                Start Cloning
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-emerald-400" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
