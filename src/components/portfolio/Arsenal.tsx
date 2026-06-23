import { motion } from "motion/react";
import { Reveal } from "./Reveal";

const tools = [
  "Python", "TensorFlow", "PyTorch", "Scikit-Learn", "Keras", "OpenCV",
  "LangChain", "HuggingFace", "LangGraph", "Groq", "OpenAI", "FAISS",
  "Next.js", "FastAPI", "Flask", "Supabase", "PostgreSQL", "Prisma",
  "Git", "Docker", "Figma", "Canva", "Pandas", "Jupyter",
];

const colors = ["#4300FF", "#0065F8", "#00CAFF", "#00FFDE"];

export function Arsenal() {
  return (
    <section id="arsenal" className="relative py-28 px-6 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <Reveal>
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                // my playground
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-3 text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95]">
                <span className="font-serif italic font-normal text-foreground/80">Technical</span>
                <br />
                <span className="text-gradient-brand">Arsenal.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="rounded-2xl border border-border bg-white px-5 py-4 shadow-card">
              <div className="text-4xl font-bold tracking-tight text-gradient-brand">24</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Tools in the arsenal
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.25}>
          <div className="mt-12 rounded-3xl border border-border bg-white p-8 shadow-card">
            <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">
              <span>Drag through them — every chip is a tool I ship with 🎮</span>
              <span className="hidden md:inline">PHYSICS PLAYGROUND</span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {tools.map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.025, type: "spring", stiffness: 200, damping: 16 }}
                  whileHover={{ y: -3, rotate: (i % 2 ? 1 : -1) * 2 }}
                  className="px-4 py-2 rounded-full text-sm font-medium border bg-white cursor-grab active:cursor-grabbing"
                  style={{
                    borderColor: colors[i % colors.length] + "60",
                    color: colors[i % colors.length],
                  }}
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}