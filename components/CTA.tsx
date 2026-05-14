"use client";

import { useState } from "react";
import { ArrowRight, Sparkles, Check } from 'lucide-react';

export default function CTA() {
  const [url, setUrl] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(99,102,241,0.12), transparent)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Floating icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-2xl shadow-indigo-500/40 mb-8 animate-float">
          <Sparkles className="w-10 h-10 text-white" />
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
          Ready to Clone
          <br />
          <span className="gradient-text">Your First Site?</span>
        </h2>

        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          Join 12,000+ developers who use CloneAI to ship faster. Start free — no credit card
          required.
        </p>

        {/* URL Form */}
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto mb-8">
          <div className="flex flex-col sm:flex-row gap-3 p-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://yourfavoritesite.com"
              className="flex-1 px-4 py-3 bg-transparent text-white placeholder-slate-500 text-sm focus:outline-none"
            />
            <button type="submit" className="btn-primary px-6 py-3 text-sm whitespace-nowrap">
              {submitted ? (
                <>
                  <Check className="w-4 h-4" />
                  Received!
                </>
              ) : (
                <>
                  Clone It Free
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-400" />
            No credit card
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-400" />
            3 free clones
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-400" />
            Cancel anytime
          </span>
        </div>
      </div>
    </section>
  );
}
