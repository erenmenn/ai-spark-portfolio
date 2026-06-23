import { motion } from "motion/react";
import { useEffect, useState } from "react";

const roles = ["AI Engineer", "AI Consultant", "Problem Solver", "AI Evaluator"];

function useTypewriter(words: string[]) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i];
    const t = setTimeout(
      () => {
        if (!del) {
          setText(w.slice(0, text.length + 1));
          if (text.length + 1 === w.length) setTimeout(() => setDel(true), 1400);
        } else {
          setText(w.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDel(false);
            setI((p) => (p + 1) % words.length);
          }
        }
      },
      del ? 40 : 80,
    );
    return () => clearTimeout(t);
  }, [text, del, i, words]);
  return text;
}

export function Hero() {
  const typed = useTypewriter(roles);
  return (
    <section
      id="top"
      className="relative pt-36 pb-24 px-6 overflow-hidden"
    >
      {/* background field */}
      <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
        className="absolute -top-40 -right-40 size-[600px] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, #00CAFF 0%, transparent 70%)" }}
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.2 }}
        className="absolute -bottom-40 -left-40 size-[600px] rounded-full blur-3xl opacity-25"
        style={{ background: "radial-gradient(circle, #4300FF 0%, transparent 70%)" }}
      />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground"
        >
          <span className="size-1.5 rounded-full bg-[#00FFDE]" />
          Universitas Singaperbangsa · Sistem Informasi · Active Student
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 text-[14vw] md:text-[8.5vw] lg:text-[7.5rem] leading-[0.92] font-bold tracking-tighter"
        >
          EMIRSYAH
          <br />
          <span className="text-gradient-brand">RAFSANJANI</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 grid md:grid-cols-2 gap-10 items-end"
        >
          <div>
            <p className="text-3xl md:text-4xl font-semibold tracking-tight">
              I am an <span className="text-gradient-brand">{typed}</span>
              <span className="animate-blink text-[#4300FF]">|</span>
            </p>
            <p className="mt-6 text-base text-muted-foreground max-w-lg leading-relaxed">
              An innovative leader who understands real-world problems and identifies where AI can be
              applied effectively. Creative, analytical, and solution-oriented — I build intelligent
              systems and act as a light AI consultant, translating problems into impactful AI solutions.
            </p>
            <p className="mt-4 text-sm italic text-foreground/70 border-l-2 border-[#0065F8] pl-3">
              "If you never bleed, you never gonna grow."
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-gradient-brand text-white font-medium shadow-glow hover:translate-y-[-1px] transition"
              >
                Hire me ↗
              </a>
              <a
                href="#cv"
                className="px-6 py-3 rounded-full border border-border bg-white font-medium hover:border-foreground/40 transition"
              >
                Download CV ↓
              </a>
            </div>
          </div>

          {/* stat grid */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { k: "GAI", v: "Engineer" },
              { k: "3.90+", v: "IPK Score" },
              { k: "Leader", v: "🔹" },
              { k: "Innovator", v: "💡" },
              { k: "Builder", v: "⚙️" },
              { k: "24", v: "Tools mastered" },
            ].map((s, idx) => (
              <motion.div
                key={s.k}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + idx * 0.06 }}
                className="rounded-2xl border border-border bg-white p-4 shadow-card hover:shadow-glow hover:-translate-y-0.5 transition"
              >
                <div className="text-2xl font-bold tracking-tight text-foreground">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}