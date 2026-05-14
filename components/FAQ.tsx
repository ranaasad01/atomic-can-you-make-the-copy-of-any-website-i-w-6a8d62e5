"use client";

import { useState } from "react";
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "What kinds of websites can CloneAI clone?",
    a: "CloneAI works with any publicly accessible website — landing pages, SaaS homepages, portfolios, e-commerce stores, blogs, and more. It handles both static and server-rendered pages. Sites behind authentication or paywalls are not supported on the Starter plan.",
  },
  {
    q: "How accurate is the clone?",
    a: "Our AI achieves 95–99% visual accuracy on most modern websites. Complex canvas-based animations or highly custom WebGL experiences may not be fully replicated, but all standard HTML/CSS layouts, typography, and interactions are faithfully reproduced.",
  },
  {
    q: "What tech stack does the output use?",
    a: "All clones are generated as Next.js 14 App Router projects with TypeScript and Tailwind CSS. The output follows best practices: server components by default, proper file structure, no inline styles, and clean component separation.",
  },
  {
    q: "Can I use the cloned code commercially?",
    a: "CloneAI generates new code inspired by the visual design of the source site. You are responsible for ensuring your use complies with the original site's terms of service and applicable copyright law. We recommend using clones as a starting point for original work.",
  },
  {
    q: "How long does cloning take?",
    a: "Most clones complete in under 2 minutes. Complex multi-section pages with many components may take up to 5 minutes. Pro and Team plans get priority processing queues for faster turnaround.",
  },
  {
    q: "Can I clone multiple pages of a site?",
    a: "Yes! Pro and Team plans support multi-page cloning. You can clone an entire site's navigation structure, including inner pages, blog layouts, and product pages — all wired together with Next.js routing.",
  },
  {
    q: "Is my data private?",
    a: "Absolutely. We never store your cloned code after delivery. All processing happens in isolated, ephemeral sandboxes that are destroyed immediately after your download. We do not share or sell any data.",
  },
  {
    q: "Do you offer refunds?",
    a: "Yes. If you're not satisfied with a clone, contact us within 7 days and we'll either re-run the clone or issue a full refund — no questions asked.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 bg-white/3 text-slate-400 text-sm font-medium mb-6">
            Got Questions?
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-slate-400">
            Everything you need to know about CloneAI. Can&apos;t find your answer?{" "}
            <a href="mailto:hello@cloneai.app" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">
              Email us.
            </a>
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-white/8 overflow-hidden transition-all duration-200"
              style={{
                background: open === index ? "rgba(99,102,241,0.05)" : "rgba(18,18,26,0.6)",
                borderColor: open === index ? "rgba(99,102,241,0.3)" : "rgba(255,255,255,0.06)",
              }}
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-sm sm:text-base font-semibold text-white">{faq.q}</span>
                <ChevronDown
                  className="w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200"
                  style={{ transform: open === index ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>
              {open === index && (
                <div className="px-6 pb-5">
                  <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
