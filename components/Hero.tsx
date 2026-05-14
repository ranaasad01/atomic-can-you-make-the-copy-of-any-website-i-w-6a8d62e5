"use client";

import { useState } from "react";
import { ArrowRight, Sparkles, Check, Star } from 'lucide-react';

const badges = [
  "Pixel-perfect clones",
  "Next.js 14 output",
  "Fully responsive",
  "Production ready",
];

export default function Hero() {
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
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Background blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #6366f1, transparent)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #8b5cf6, transparent)" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #06b6d4, transparent)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-8">
          <Sparkles className="w-4 h-4" />
          AI-Powered Website Cloning
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6">
          Clone Any Website
          <br />
          <span className="gradient-text">In Seconds</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Paste any URL and get a pixel-perfect Next.js 14 clone — complete with responsive design,
          all sections, and production-ready code. No design skills needed.
        </p>

        {/* URL Input Form */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-8">
          <div className="flex flex-col sm:flex-row gap-3 p-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com — paste any URL here"
              className="flex-1 px-4 py-3 bg-transparent text-white placeholder-slate-500 text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="btn-primary px-6 py-3 text-sm whitespace-nowrap"
            >
              {submitted ? (
                <>
                  <Check className="w-4 h-4" />
                  URL Received!
                </>
              ) : (
                <>
                  Clone Now
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            Try: stripe.com, vercel.com, linear.app, notion.so
          </p>
        </form>

        {/* Feature badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {badges.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-medium"
            >
              <Check className="w-3 h-3 text-emerald-400" />
              {badge}
            </span>
          ))}
        </div>

        {/* Social proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-[#0a0a0f] bg-gradient-to-br from-indigo-400 to-purple-600"
                  style={{ zIndex: 5 - i }}
                />
              ))}
            </div>
            <span>12,000+ sites cloned</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/10" />
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-1">4.9/5 from 2,400+ reviews</span>
          </div>
        </div>
      </div>

      {/* Browser mockup preview */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="rounded-2xl border border-white/10 bg-[#12121a] overflow-hidden shadow-2xl shadow-black/50">
          {/* Browser chrome */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5 bg-[#0d0d17]">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-white/5 rounded-md px-3 py-1.5 text-xs text-slate-500 text-center">
                cloneai.app/preview — your-website.com
              </div>
            </div>
          </div>
          {/* Preview content */}
          <div className="p-6 space-y-4">
            <div className="flex gap-4">
              <div className="w-1/3 space-y-2">
                <div className="h-4 bg-indigo-500/20 rounded-md w-3/4" />
                <div className="h-3 bg-white/5 rounded-md" />
                <div className="h-3 bg-white/5 rounded-md w-5/6" />
                <div className="h-3 bg-white/5 rounded-md w-4/6" />
                <div className="h-8 bg-indigo-500/30 rounded-lg w-1/2 mt-4" />
              </div>
              <div className="flex-1 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-white/5 h-40 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/20 mx-auto mb-2 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div className="text-xs text-slate-500">Live Preview</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-xl bg-white/3 border border-white/5 p-3 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/20" />
                  <div className="h-3 bg-white/10 rounded w-3/4" />
                  <div className="h-2 bg-white/5 rounded" />
                  <div className="h-2 bg-white/5 rounded w-5/6" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
