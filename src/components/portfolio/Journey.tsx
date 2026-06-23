import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "./Reveal";

type Chapter = {
  year: string;
  n: string;
  title: string;
  sub: string;
  body: string;
  branches: string[];
};

const chapters: Chapter[] = [
  {
    year: "2026", n: "01", title: "Workshop Speaker",
    sub: "National Edufair — Universitas Singaperbangsa Karawang",
    body: "Pemateri 'Generative AI for Business Digital Transformation'. Teori + praktik membangun Telegram chatbot untuk otomasi bisnis menggunakan n8n.",
    branches: ["GenAI keynote", "n8n workflow demo", "Telegram bot live build"],
  },
  {
    year: "2026", n: "02", title: "Generative AI Mentor",
    sub: "BlockDev Mentor Leader Bekasi",
    body: "Program intensif untuk menjadi mentor Generative AI. Mengajarkan LLM, RAG, LangChain, LangGraph, dan Agentic AI.",
    branches: ["LLM fundamentals", "Retrieval-Augmented Generation", "LangChain pipelines", "LangGraph orchestration", "Agentic AI patterns"],
  },
  {
    year: "2024", n: "03", title: "Dicoding Academy",
    sub: "AI Engineer Path Graduate",
    body: "Menyelesaikan jalur sertifikasi penuh AI Engineer — dari Python hingga model deployment production.",
    branches: ["Python & data foundations", "ML / DL modeling", "Production deployment"],
  },
  {
    year: "2026", n: "04", title: "Competition & Innovation",
    sub: "Participant & Builder",
    body: "Berbagai kompetisi inovasi AI nasional — dari hackathon 48 jam hingga program inkubasi startup.",
    branches: ["48h Hackathon builds", "AI startup incubation", "National innovation contest"],
  },
  {
    year: "2026", n: "05", title: "AI Leader Mentor",
    sub: "Generative AI Educator",
    body: "Memandu generasi AI berikutnya — dari prompt engineering dasar hingga arsitektur agentic AI yang kompleks.",
    branches: ["Prompt engineering 101", "RAG system design", "Agentic AI architecture"],
  },
  {
    year: "2023", n: "06", title: "Tutor Student Community",
    sub: "Mentor & Educator",
    body: "Awal perjalanan mengajar — berbagi ilmu di komunitas mahasiswa, membangun fondasi komunikasi teknis.",
    branches: ["Peer tutoring sessions", "Technical communication"],
  },
];

const colors = ["#4300FF", "#0065F8", "#00CAFF", "#00FFDE"];

function BranchTree({ chapter }: { chapter: Chapter }) {
  // simple SVG tree: trunk on left, branches on right
  const H = 90;
  const total = chapter.branches.length;
  const height = Math.max(260, total * H + 40);
  const rootX = 60;
  const rootY = height / 2;
  return (
    <div className="relative w-full">
      <svg viewBox={`0 0 520 ${height}`} className="w-full h-auto">
        {/* trunk dot */}
        <circle cx={rootX} cy={rootY} r="10" fill="url(#brand)" />
        <circle cx={rootX} cy={rootY} r="20" fill="none" stroke="url(#brand)" strokeOpacity="0.3" />
        <defs>
          <linearGradient id="brand" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4300FF" />
            <stop offset="50%" stopColor="#0065F8" />
            <stop offset="100%" stopColor="#00FFDE" />
          </linearGradient>
        </defs>
        {chapter.branches.map((b, i) => {
          const y = 30 + i * H + H / 2;
          const cx = 200;
          const ex = 240;
          const color = colors[i % colors.length];
          return (
            <g key={i}>
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: "easeOut" }}
                d={`M ${rootX + 10} ${rootY} C ${cx} ${rootY}, ${cx} ${y}, ${ex} ${y}`}
                stroke={color}
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
              <motion.circle
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.12 }}
                cx={ex}
                cy={y}
                r="6"
                fill={color}
                style={{ transformOrigin: `${ex}px ${y}px` }}
              />
              <motion.text
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.12 }}
                x={ex + 16}
                y={y + 5}
                fontSize="15"
                fill="currentColor"
                className="font-mono"
              >
                {b}
              </motion.text>
            </g>
          );
        })}
        <text x={rootX - 30} y={rootY + 40} fontSize="12" fill="currentColor" opacity="0.5" className="font-mono">
          root
        </text>
      </svg>
    </div>
  );
}

export function Journey() {
  const [active, setActive] = useState<Chapter | null>(null);
  return (
    <section id="journey" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            MY_JOURNEY.EXE
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-3 text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95]">
            <span className="font-serif italic font-normal text-foreground/80">My</span>{" "}
            <span className="text-gradient-brand">Story</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Setiap chapter membentuk siapa aku sekarang. Klik kartu untuk membuka branch-nya 👇
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {chapters.map((c, i) => (
            <Reveal key={c.n} delay={i * 0.07}>
              <button
                type="button"
                onClick={() => setActive(c)}
                className="group h-full w-full text-left rounded-3xl border border-border bg-white p-6 shadow-card hover:shadow-glow hover:-translate-y-1 hover:border-[#0065F8]/40 transition-all duration-300 relative overflow-hidden"
              >
                <div
                  className="absolute inset-x-0 top-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: "var(--gradient-brand)" }}
                />
                <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                  <span>{c.year} • Chapter {c.n}</span>
                  <span className="text-[#0065F8]">{c.branches.length} branches</span>
                </div>
                <h3 className="mt-4 text-2xl font-bold tracking-tight">
                  <span className="font-serif italic font-normal">{c.title.split(" ")[0]}</span>{" "}
                  {c.title.split(" ").slice(1).join(" ")}
                </h3>
                <div className="mt-1 text-sm text-[#4300FF] font-medium">› {c.sub}</div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-mono text-foreground/60 group-hover:text-[#0065F8] transition">
                  view branches →
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 10 }}
              transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-auto rounded-3xl bg-white border border-border shadow-glow p-8 md:p-10"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 size-9 grid place-items-center rounded-full border border-border hover:bg-secondary transition text-foreground/70"
                aria-label="Close"
              >
                ✕
              </button>
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                {active.year} • Chapter {active.n} • branch-tree
              </div>
              <h3 className="mt-3 text-3xl md:text-5xl font-bold tracking-tighter leading-tight">
                <span className="font-serif italic font-normal text-foreground/80">
                  {active.title.split(" ")[0]}
                </span>{" "}
                <span className="text-gradient-brand">
                  {active.title.split(" ").slice(1).join(" ")}
                </span>
              </h3>
              <div className="mt-1 text-sm text-[#4300FF] font-medium">› {active.sub}</div>
              <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">
                {active.body}
              </p>
              <div className="mt-8 rounded-2xl border border-border bg-secondary/40 p-4 md:p-6">
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                  $ git log --graph --branches
                </div>
                <BranchTree chapter={active} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}