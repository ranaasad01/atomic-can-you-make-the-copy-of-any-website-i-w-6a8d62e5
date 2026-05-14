import { ArrowRight, Eye } from 'lucide-react';

const examples = [
  {
    name: "Stripe",
    category: "Fintech / SaaS",
    description: "Full homepage clone with animated hero, product cards, and enterprise section.",
    image: "https://i.ytimg.com/vi/e13-s0p1tfE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDPhpywO0zW-YQqFBfGs682ChSO1A",
    tags: ["Hero", "Cards", "Animations", "Footer"],
    accent: "#635bff",
  },
  {
    name: "Vercel",
    category: "Developer Tools",
    description: "Dark-mode developer landing page with code previews and deployment stats.",
    image: "https://salesforceventures.com/wp-content/uploads/2022/05/Vercel-e1652981744227.png?w=1024",
    tags: ["Dark Mode", "Code Blocks", "Stats", "Nav"],
    accent: "#ffffff",
  },
  {
    name: "Linear",
    category: "Productivity SaaS",
    description: "Minimal SaaS homepage with feature grid, testimonials, and pricing table.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Linear_Function_Graph.svg/1280px-Linear_Function_Graph.svg.png",
    tags: ["Minimal", "Pricing", "Testimonials", "CTA"],
    accent: "#5e6ad2",
  },
  {
    name: "Notion",
    category: "Productivity",
    description: "Content-rich landing page with use-case sections and template gallery.",
    image: "https://images.ctfassets.net/spoqsaf9291f/4WMSDtdzR2zyWWByTFT4vE/13d2321d5d2671bce13e2285d823a2f3/Notion_for_desktop_-_hero.png",
    tags: ["Gallery", "Use Cases", "Templates", "CTA"],
    accent: "#ffffff",
  },
  {
    name: "Framer",
    category: "Design Tools",
    description: "Motion-heavy design tool site with interactive demos and showcase grid.",
    image: "https://framerusercontent.com/images/sP3gAaMlvfbnhJDgPxYmzCT4Y.jpg?width=2320&height=1800",
    tags: ["Motion", "Showcase", "Interactive", "Grid"],
    accent: "#0099ff",
  },
  {
    name: "Loom",
    category: "Video SaaS",
    description: "Video-first SaaS with embedded player, social proof, and enterprise CTA.",
    image: "http://harrisville.com/cdn/shop/files/black.jpg?v=1721160068",
    tags: ["Video", "Social Proof", "Enterprise", "Nav"],
    accent: "#625df5",
  },
];

export default function Examples() {
  return (
    <section id="examples" className="py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 20% 50%, rgba(6,182,212,0.05), transparent)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-medium mb-6">
            Real Clones
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
            See It In <span className="gradient-text">Action</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Browse clones of popular websites built with CloneAI. Each one is a fully functional
            Next.js project you can fork and deploy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {examples.map((example) => (
            <div key={example.name} className="card group overflow-hidden">
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-[#0d0d17]">
                <img
                  src={example.image}
                  alt={example.name + " clone preview"}
                  className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12121a] via-transparent to-transparent" />
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-medium border border-white/10">
                    <Eye className="w-3 h-3" />
                    Preview
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white">{example.name}</h3>
                  <span className="text-xs text-slate-500 font-medium">{example.category}</span>
                </div>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{example.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {example.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium text-indigo-400 border border-indigo-500/20 bg-indigo-500/5 hover:bg-indigo-500/10 hover:border-indigo-500/40 transition-all">
                  View Clone
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#hero" className="btn-secondary inline-flex">
            Clone Your Own Site
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
