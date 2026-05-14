import { Check, Sparkles, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    description: "Perfect for trying out CloneAI and personal projects.",
    cta: "Get Started Free",
    ctaStyle: "btn-secondary",
    featured: false,
    features: [
      "3 clones per month",
      "Public websites only",
      "Next.js 14 output",
      "Tailwind CSS",
      "Community support",
      "Basic responsive design",
    ],
    missing: ["Custom domains", "Private repos", "Priority processing", "Team access"],
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "For developers and freelancers who ship fast.",
    cta: "Start Pro Trial",
    ctaStyle: "btn-primary",
    featured: true,
    badge: "Most Popular",
    features: [
      "50 clones per month",
      "Public & private sites",
      "Next.js 14 + TypeScript",
      "Tailwind CSS + animations",
      "GitHub export",
      "One-click Vercel deploy",
      "Priority processing",
      "Email support",
    ],
    missing: ["Team access", "White-label output"],
  },
  {
    name: "Team",
    price: "$99",
    period: "per month",
    description: "For agencies and teams building at scale.",
    cta: "Contact Sales",
    ctaStyle: "btn-secondary",
    featured: false,
    features: [
      "Unlimited clones",
      "All Pro features",
      "Team workspace (10 seats)",
      "White-label output",
      "Custom component library",
      "API access",
      "Dedicated Slack support",
      "SLA guarantee",
    ],
    missing: [],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(99,102,241,0.07), transparent)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-6">
            Simple Pricing
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
            Start Free, <span className="gradient-text">Scale Fast</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            No hidden fees. No credit card required to start. Upgrade when you need more clones.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative rounded-2xl border p-8 flex flex-col gap-6"
              style={{
                background: plan.featured
                  ? "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.15))"
                  : "rgba(18,18,26,0.8)",
                borderColor: plan.featured ? "rgba(99,102,241,0.5)" : "rgba(255,255,255,0.08)",
                boxShadow: plan.featured ? "0 0 60px rgba(99,102,241,0.2)" : "none",
              }}
            >
              {plan.featured && plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-bold shadow-lg">
                    <Sparkles className="w-3 h-3" />
                    {plan.badge}
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-slate-400 text-sm">{plan.description}</p>
              </div>

              <div className="flex items-end gap-2">
                <span className="text-5xl font-black text-white">{plan.price}</span>
                <span className="text-slate-500 text-sm mb-2">/{plan.period}</span>
              </div>

              <a
                href="#hero"
                className={plan.ctaStyle + " text-sm justify-center"}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="border-t border-white/5 pt-6 space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-sm text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-emerald-400" />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-500 text-sm mt-8">
          All plans include SSL, CDN delivery, and 99.9% uptime SLA. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
