import { useRef } from "react";
import { motion } from "motion/react";
import { Reveal } from "./Reveal";

const tools = [
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "TensorFlow", icon: "https://cdn.simpleicons.org/tensorflow/FF6F00" },
  { name: "PyTorch", icon: "https://cdn.simpleicons.org/pytorch/EE4C2C" },
  { name: "Scikit-Learn", icon: "https://cdn.simpleicons.org/scikitlearn/F7931E" },
  { name: "Keras", icon: "https://cdn.simpleicons.org/keras/D00000" },
  { name: "OpenCV", icon: "https://cdn.simpleicons.org/opencv/5C3EE8" },
  { name: "LangChain", icon: "https://cdn.simpleicons.org/langchain/1C3C3C" },
  { name: "HuggingFace", icon: "https://cdn.simpleicons.org/huggingface/FFD21E" },
  { name: "LangGraph", icon: "https://cdn.simpleicons.org/langchain/1C3C3C" },
  { name: "Groq", icon: "https://cdn.simpleicons.org/groq/F55036" },
  { name: "OpenAI", icon: "https://cdn.simpleicons.org/openai/412991" },
  { name: "FAISS", icon: "https://cdn.simpleicons.org/meta/0467DF" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
  { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi/009688" },
  { name: "Flask", icon: "https://cdn.simpleicons.org/flask/000000" },
  { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3ECF8E" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma/2D3748" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
  { name: "Canva", icon: "https://cdn.simpleicons.org/canva/00C4CC" },
  { name: "Pandas", icon: "https://cdn.simpleicons.org/pandas/150458" },
  { name: "Jupyter", icon: "https://cdn.simpleicons.org/jupyter/F37626" },
];

export function Arsenal() {
  const containerRef = useRef(null);

  return (
    <section id="arsenal" className="relative py-28 px-6 bg-secondary/40 overflow-hidden">
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
              <div className="text-4xl font-bold tracking-tight text-gradient-brand">{tools.length}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Tools in the arsenal
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.25}>
          <div ref={containerRef} className="mt-12 rounded-3xl border border-border bg-white p-8 shadow-card relative">
            <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-muted-foreground mb-8">
              <span>Drag the tools around — physics playground 🎮</span>
              <span className="hidden md:inline">INTERACTIVE</span>
            </div>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 pb-4">
              {tools.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, scale: 0.8, y: 15 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03, type: "spring", stiffness: 200, damping: 15 }}
                  whileHover={{ scale: 1.05, y: -5, rotate: (i % 2 === 0 ? 3 : -3) }}
                  whileTap={{ scale: 0.95, cursor: "grabbing" }}
                  drag
                  dragConstraints={containerRef}
                  dragElastic={0.6}
                  dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
                  className="flex items-center gap-2.5 px-5 py-2.5 rounded-2xl border border-border bg-white cursor-grab shadow-sm hover:shadow-md transition-shadow relative z-10 hover:z-50"
                >
                  <div className="w-6 h-6 flex items-center justify-center shrink-0">
                    <img src={t.icon} alt={t.name} className="max-w-full max-h-full object-contain pointer-events-none" />
                  </div>
                  <span className="text-[13px] font-semibold text-foreground/80 pointer-events-none">{t.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}