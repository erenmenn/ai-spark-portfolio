import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-white p-12 md:p-20 shadow-card text-center">
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.06]"
              style={{ background: "var(--gradient-brand)" }}
            />
            <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
            <div className="relative">
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                // let's build
              </div>
              <h2 className="mt-4 text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95]">
                <span className="font-serif italic font-normal text-foreground/80">We are</span>{" "}
                <span className="text-gradient-brand">creators</span>,
                <br />
                innovators & storytellers.
              </h2>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href="mailto:hello@emirsyah.dev"
                  className="px-6 py-3 rounded-full bg-gradient-brand text-white font-medium shadow-glow hover:-translate-y-0.5 transition"
                >
                  Hire me →
                </a>
                <a
                  id="cv"
                  href="#"
                  className="px-6 py-3 rounded-full border border-border bg-white font-medium hover:border-foreground/40 transition"
                >
                  Download CV ↓
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}