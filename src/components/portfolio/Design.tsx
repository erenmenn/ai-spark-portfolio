import { Reveal } from "./Reveal";

const items = [
  {
    n: "01", kind: "🖥️ Web Design", title: "EcoLink UI/UX Dashboard",
    sub: "Figma · Design System · Web Dashboard",
    body: "Pixel-perfect UI/UX design for a professional environmental management dashboard.",
    tags: ["Figma", "UI/UX", "Dashboard"],
    grad: "linear-gradient(135deg,#4300FF,#0065F8)",
  },
  {
    n: "02", kind: "🎨 Graphic Design", title: "Colour Theory & Branding Kit",
    sub: "Canva · Brand Guidelines · Poster",
    body: "Brand identity leveraging colour harmonies — triadic, split-complementary, monochromatic.",
    tags: ["Canva", "Branding", "Colour Theory"],
    grad: "linear-gradient(135deg,#0065F8,#00CAFF)",
  },
  {
    n: "03", kind: "🖌️ Fine Art", title: "Bloodline Fine Art & Illustration",
    sub: "Manual Painting · Sketching · Line Art",
    body: "Personal collection rooted in artistic heritage — manual illustration, line art, acrylic and watercolour.",
    tags: ["Fine Art", "Illustration", "Painting"],
    grad: "linear-gradient(135deg,#00CAFF,#00FFDE)",
  },
];

export function Design() {
  return (
    <section id="design" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            ✨ creative works 🎨
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-3 text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95]">
            Design <span className="text-gradient-brand">Portfolio</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Where code meets fine art ✦ branding, UI systems & hand-crafted illustrations.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <Reveal key={it.n} delay={i * 0.1}>
              <article className="group rounded-3xl overflow-hidden border border-border bg-white shadow-card hover:shadow-glow hover:-translate-y-1 transition-all duration-300">
                <div className="aspect-[4/3] relative" style={{ background: it.grad }}>
                  <div className="absolute inset-0 bg-grid opacity-20" />
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-white/90 text-xs font-mono">
                    {it.n} · {it.kind}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold tracking-tight">{it.title}</h3>
                  <div className="mt-1 text-xs text-muted-foreground">{it.sub}</div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.body}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {it.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-secondary text-foreground/70">
                        {t}
                      </span>
                    ))}
                  </div>
                  <button className="mt-5 text-sm font-medium text-[#0065F8] hover:text-[#4300FF] transition">
                    View gallery →
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.4}>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            🎨 crafted with colour theory & artistic instinct ✨
          </p>
        </Reveal>
      </div>
    </section>
  );
}