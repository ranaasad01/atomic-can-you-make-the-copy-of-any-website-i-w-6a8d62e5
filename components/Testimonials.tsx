import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Frontend Engineer",
    company: "Acme Corp",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Sarah_Chen_%E9%99%88%E6%B7%91%E6%A1%A6_1986_Malaysia_Concert_Live_Photo_Original_%28cropped%29.jpg",
    rating: 5,
    text: "CloneAI saved us 3 weeks of design work. We cloned our competitor's landing page, customized it with our branding, and shipped in 2 days. The code quality is surprisingly clean.",
  },
  {
    name: "Marcus Williams",
    role: "Indie Hacker",
    company: "BuildFast",
    avatar: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3122882.png",
    rating: 5,
    text: "I've been using CloneAI to rapidly prototype new SaaS ideas. I clone a site I like, swap in my copy, and have a landing page live in under an hour. It's a game changer.",
  },
  {
    name: "Priya Patel",
    role: "Product Designer",
    company: "DesignStudio",
    avatar: "https://s.yimg.com/ny/api/res/1.2/hpSf1XHDmToH6R5HEHv2qg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTIwNDg7aD0xODU4O2NmPXdlYnA-/https://media.zenfs.com/en/where_is_the_buzz_814/37f4180215a0ca436f4b375464b2fa92",
    rating: 5,
    text: "The pixel accuracy is insane. I cloned a Figma-designed marketing site and the output matched the original down to the border-radius values. My developers were shocked.",
  },
  {
    name: "James O'Brien",
    role: "CTO",
    company: "LaunchPad",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/James_O%E2%80%99Brien_%2853996110046%29_%28cropped%29.jpg/250px-James_O%E2%80%99Brien_%2853996110046%29_%28cropped%29.jpg",
    rating: 5,
    text: "We use CloneAI to onboard new clients faster. Instead of starting from scratch, we clone a reference site they love and iterate from there. Cuts our project kickoff time in half.",
  },
  {
    name: "Yuki Tanaka",
    role: "Full-Stack Developer",
    company: "Freelance",
    avatar: "https://cdn-test.poetryfoundation.org/cdn-cgi/image/w=2292,h=3438,q=80/content/images/Yuki-Tanaka-c-Ippei-and-Janine-Photography.jpg",
    rating: 5,
    text: "The Next.js 14 output is exactly what I'd write myself — App Router, TypeScript, Tailwind. No cleanup needed. I just drop it into my monorepo and start customizing.",
  },
  {
    name: "Amara Osei",
    role: "Growth Lead",
    company: "ScaleUp",
    avatar: "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=26184535474516139",
    rating: 5,
    text: "A/B testing landing pages used to take weeks. Now I clone a high-converting reference, tweak the copy, and have a new variant live in hours. Our conversion rate is up 40%.",
  },
];

const stats = [
  { value: "12,000+", label: "Sites Cloned" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "98%", label: "Accuracy Score" },
  { value: "< 2 min", label: "Average Clone Time" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 40% at 50% 100%, rgba(99,102,241,0.06), transparent)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl border border-white/5 bg-white/3"
            >
              <div className="text-3xl sm:text-4xl font-black gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-sm font-medium mb-6">
            Loved by Developers
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
            What People <span className="gradient-text">Are Saying</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Thousands of developers, designers, and founders use CloneAI to ship faster.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="card p-6 flex flex-col gap-4">
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-300 text-sm leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 flex-shrink-0">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-slate-500">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
