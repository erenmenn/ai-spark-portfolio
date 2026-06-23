import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal } from "./Reveal";

const categories = ["All", "Professional", "LLM", "NLP", "Computer Vision", "Recommendation", "Regression"];

const projects = [
  { n: "01", tags: ["Professional", "LLM"], pro: true, title: "SatuTani — Intelligent Agricultural Agent System", desc: "AI Agent untuk sektor pertanian berbasis LangChain dengan multi-tool orchestration.", stack: ["LangChain", "RAG", "BMKG API", "Python"] },
  { n: "02", tags: ["Professional", "LLM"], pro: true, title: "JavaMart AI — Governed Chatbot (LangGraph)", desc: "Chatbot berbasis LangGraph dengan governance dan controlled agent workflow.", stack: ["LangGraph", "LLM", "Guardrails", "Python"] },
  { n: "03", tags: ["Professional", "LLM"], pro: true, title: "Sisibuk AI — Asisten Jadwal Cerdas", desc: "Asisten manajemen jadwal bertenaga Groq AI (LLaMA 3.3).", stack: ["Next.js", "Groq AI", "Supabase"] },
  { n: "04", tags: ["Professional", "NLP"], pro: true, title: "WangkuAI — Asisten Keuangan Pintar", desc: "Finance tracker dengan NLP pipeline untuk chat sehari-hari.", stack: ["Next.js", "IndoBERT", "Prisma"] },
  { n: "05", tags: ["Recommendation"], title: "MovieRec — Sistem Rekomendasi Film", desc: "Hybrid recommendation model memakai 25 juta rating.", stack: ["TensorFlow", "Scikit", "NMF"] },
  { n: "06", tags: ["Regression"], title: "MADUW — Prediksi Harga Madu", desc: "Memprediksi harga madu dengan pemodelan Regresi.", stack: ["Scikit-Learn", "Regression", "Data Viz"] },
  { n: "07", tags: ["NLP"], title: "FirstAid.ID — NLP Chunking Strategy", desc: "Analisis riset strategik RAG di buku Panduan P3K.", stack: ["RAG", "IndoBERT", "Python"] },
  { n: "08", tags: ["Computer Vision"], title: "EMIR — Emotion Image Classifier", desc: "Deteksi ekspresi human dari foto dalam 200ms.", stack: ["TFLite", "MTCNN", "Flask"] },
  { n: "09", tags: ["Computer Vision"], title: "PlantCare — Scan Penyakit Daun", desc: "Klasifikasi 35 tipe penyakit tanaman secara akurat.", stack: ["CNN", "Keras", "Flask"] },
  { n: "10", tags: ["NLP"], title: "Taylor Ophelia — Mass Sentiment", desc: "Membedah emosi belasan ribu komen via API scraping.", stack: ["NLP", "SVM", "YouTube API"] },
  { n: "11", tags: ["NLP"], title: "CS Intent — Intelligent Router", desc: "Benchmark Intent-Router bot pake 3 paradigma ML.", stack: ["DistilBERT", "BiLSTM", "Naive Bayes"] },
];

export function Works() {
  const [cat, setCat] = useState("All");
  const filtered = cat === "All" ? projects : projects.filter((p) => p.tags.includes(cat));

  return (
    <section id="works" className="py-28 px-6 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <Reveal>
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                PORTFOLIO_EXPLORER_V3
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-3 text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95]">
                Featured <span className="text-gradient-brand">Works</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 text-muted-foreground">
                11 projects — click any card to explore the case study.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition ${
                  cat === c
                    ? "bg-foreground text-background border-foreground"
                    : "bg-white border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.article
                key={p.n}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
                className="group relative rounded-3xl border border-border bg-white p-6 shadow-card hover:shadow-glow hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div
                  aria-hidden
                  className="absolute -top-20 -right-20 size-48 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity"
                  style={{ background: "var(--gradient-brand)" }}
                />
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-muted-foreground">{p.n}</span>
                  {p.pro && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] uppercase tracking-widest bg-gradient-brand text-white">
                      ⭐ Professional
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-xl font-bold tracking-tight leading-snug">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-secondary text-foreground/70"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <button className="relative mt-6 text-sm font-medium text-[#0065F8] hover:text-[#4300FF] transition">
                  View case study ↗
                </button>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}