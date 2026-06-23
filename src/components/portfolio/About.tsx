import { Reveal } from "./Reveal";

const chat = [
  { from: "user", text: "Halo Emir! Ceritain dong, kamu tuh orangnya gimana sih dalam bekerja? 🤔" },
  {
    from: "emir",
    text:
      "Halo! 👋 Aku tipe orang yang gatel kalau lihat masalah. Fokus utamaku di Problem Solving — menganalisis isu kompleks dan merancang solusi yang praktis tapi punya impact nyata.",
  },
  { from: "user", text: "Wah, mantap! Kalau lagi kerja bareng tim, peran kamu biasanya sebagai apa?" },
  {
    from: "emir",
    text:
      "Aku sering ambil peran Leadership & Project Designer. Aku suka bangun visi yang jelas buat tim, memimpin eksekusi, sekaligus ngerancang workflow dari konsep awal sampai jadi produk! ⚙️",
  },
  { from: "user", text: "Gimana cara kamu ngadepin data yang rumit atau situasi yang mentok?" },
  {
    from: "emir",
    text:
      "Nah, di situ kombinasi Analytical & Creative Thinking kepake banget! Aku biasa interpretasi data pakai logika buat nemuin pola, tapi aku juga suka kasih perspektif 'out of the box' buat nemuin ide segar. 💡",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            ✨ softskills & roles ⚡
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-3 text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95]">
            Passionate about
            <br />
            <span className="text-gradient-brand">intelligence.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-2 gap-10 items-start">
          <Reveal delay={0.15}>
            <div className="rounded-3xl border border-border bg-white p-8 shadow-card">
              <p className="text-lg leading-relaxed text-foreground/80">
                Kita hidup di era AI, dan kuncinya adalah <strong>adaptasi</strong>. AI bukanlah alat
                penghancur karir, melainkan partner kolaborasi. Manusia kini perlu berevolusi menjadi{" "}
                <span className="text-gradient-brand font-semibold">AI Evaluator</span> — sutradara yang
                mengarahkan kecerdasan buatan untuk menciptakan dampak nyata.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {["Problem Solving", "Leadership", "Project Design", "Analytical", "Creative Thinking", "Mentorship"].map(
                  (s) => (
                    <div
                      key={s}
                      className="px-3 py-2 rounded-xl border border-border text-sm font-medium bg-white hover:border-[#0065F8] hover:text-[#0065F8] transition"
                    >
                      {s}
                    </div>
                  ),
                )}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="rounded-3xl border border-border bg-white p-6 shadow-card">
              <div className="flex items-center gap-2 pb-4 border-b border-border">
                <div className="size-2 rounded-full bg-[#00FFDE]" />
                <span className="text-sm font-medium">Chat with Emir</span>
                <span className="ml-auto text-xs font-mono text-muted-foreground">online</span>
              </div>
              <div className="mt-4 space-y-3 max-h-[460px] overflow-hidden">
                {chat.map((m, i) => (
                  <div
                    key={i}
                    className={`flex ${m.from === "emir" ? "justify-start" : "justify-end"}`}
                  >
                    <div
                      className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                        m.from === "emir"
                          ? "bg-secondary text-foreground rounded-bl-sm"
                          : "bg-gradient-brand text-white rounded-br-sm"
                      }`}
                    >
                      {m.text}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 px-3 py-2 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground">
                💬 Kepo lagi yuk...
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}