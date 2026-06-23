import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal } from "./Reveal";
import {
  ExternalLink, Brain, Eye, Film, BarChart3, Target, Wrench,
  Star, MessageSquare, Calendar, Layers, Crown, Sparkles, Code2, Github
} from "lucide-react";

type Concept = "Production" | "ML/DL";
type Category = "All" | "NLP" | "Computer Vision" | "Recommendation" | "Regression" | "LLM";

interface Project {
  n: string;
  title: string;
  description: string;
  tech: string[];
  concepts: Concept[];
  category: Category;
  icon: any;
  image: string;
  github: string;
  demoUrl?: string;
}

const projects: Project[] = [
  {
    n: "01",
    title: "InvestAI: Platform Edukasi & Simulasi Saham",
    description: "Mengembangkan platform edukasi investasi berbasis AI yang menggabungkan XGBoost, LangGraph Agent, dan Large Language Models (LLM). Membangun sistem prediksi arah harga saham, analisis sentimen berita keuangan, dan AI Mentor.",
    tech: ["XGBoost", "LangGraph", "LLM", "Next.js"],
    concepts: ["Production", "ML/DL"],
    category: "LLM",
    icon: Brain,
    image: "/asset_proyek/investai.png",
    github: "#",
    demoUrl: "#",
  },
  {
    n: "02",
    title: "Sisibuk AI: Intelligent Scheduling Assistant",
    description: "Mengembangkan AI Scheduling Assistant berbasis Next.js 15 dengan natural language understanding menggunakan LLaMA 3.3. Membangun pipeline intent classification dan automated scheduling engine real-time.",
    tech: ["Next.js", "LLaMA 3.3", "Groq", "Supabase"],
    concepts: ["Production", "ML/DL"],
    category: "LLM",
    icon: Calendar,
    image: "/asset_proyek/scentara.png",
    github: "https://github.com/erenmenn/Sisibuk-AI-PenjadwalanOtomatis",
    demoUrl: "#",
  },
  {
    n: "03",
    title: "SatuTani - Intelligent Agricultural Agent System",
    description: "AI Agent untuk sektor pertanian berbasis LangChain dengan multi-tool orchestration. Sistem prediksi cuaca real-time dan analisis panen.",
    tech: ["LangChain", "RAG", "BMKG API", "Python"],
    concepts: ["Production", "ML/DL"],
    category: "LLM",
    icon: Brain,
    image: "/asset_proyek/satutani.png",
    github: "https://github.com/erenmenn/SatuTani-AgriAI",
    demoUrl: "#",
  },
  {
    n: "04",
    title: "JavaMart AI - Governed Chatbot",
    description: "Chatbot berbasis LangGraph dengan governance dan controlled agent workflow untuk skala enterprise.",
    tech: ["LangGraph", "LLM", "Guardrails", "Python"],
    concepts: ["Production", "ML/DL"],
    category: "LLM",
    icon: MessageSquare,
    image: "/asset/poster/lang.png",
    github: "https://github.com/erenmenn/JavaMart-GovernedChatbot",
  },
  {
    n: "05",
    title: "WangkuAI: Asisten Keuangan Pintar",
    description: "Finance tracker dengan NLP pipeline untuk chat sehari-hari menggunakan model IndoBERT.",
    tech: ["Next.js", "IndoBERT", "Prisma"],
    concepts: ["Production", "ML/DL"],
    category: "NLP",
    icon: Brain,
    image: "/asset_proyek/wangku.png",
    github: "https://github.com/erenmenn/WangkuAI-FinanceBot",
  },
  {
    n: "06",
    title: "MovieRec: Sistem Rekomendasi Film",
    description: "Hybrid recommendation model memakai 25 juta rating yang mengombinasikan Content-Based dan Collaborative Filtering.",
    tech: ["TensorFlow", "Scikit", "NMF"],
    concepts: ["ML/DL"],
    category: "Recommendation",
    icon: Film,
    image: "/asset_proyek/recomendation.png",
    github: "https://github.com/erenmenn/RekomendasiFILM-collaborative-content",
  },
  {
    n: "07",
    title: "MADUW: Prediksi Harga Madu",
    description: "Memprediksi harga madu dengan pemodelan Regresi menggunakan Random Forest, AdaBoost, dan arsitektur regresi linear.",
    tech: ["Scikit-Learn", "Regression", "Data Viz"],
    concepts: ["ML/DL"],
    category: "Regression",
    icon: BarChart3,
    image: "/asset_proyek/honeyprice.png",
    github: "https://github.com/erenmenn/PrediksiHarga-MADUW",
  },
  {
    n: "08",
    title: "EMIR: Emotion Image Classifier",
    description: "Deteksi ekspresi human dari foto dalam 200 milisekon dengan MTCNN crop layer dan TensorFlow Lite inference.",
    tech: ["TFLite", "MTCNN", "Flask"],
    concepts: ["ML/DL"],
    category: "Computer Vision",
    icon: Eye,
    image: "/asset_proyek/emotion.png",
    github: "https://github.com/erenmenn/ImageClassification-EmosiMU",
  },
  {
    n: "09",
    title: "PlantCare: Scan Penyakit Daun",
    description: "Klasifikasi 35 tipe penyakit tanaman secara akurat menggunakan CNN MobileNet transfer learning via Keras.",
    tech: ["CNN", "Keras", "Flask"],
    concepts: ["ML/DL"],
    category: "Computer Vision",
    icon: Eye,
    image: "/asset_proyek/plantdesease.png",
    github: "https://github.com/erenmenn/ImageClassification-PlantCare",
  },
  {
    n: "10",
    title: "CS Intent: Intelligent Router",
    description: "Benchmark Intent-Router bot menggunakan DistilBERT, BiLSTM, dan Classical ML untuk routing customer service 24/7.",
    tech: ["DistilBERT", "BiLSTM", "Naive Bayes"],
    concepts: ["ML/DL"],
    category: "NLP",
    icon: Wrench,
    image: "/asset_proyek/customerchatbot.png",
    github: "https://github.com/erenmenn/IntentClass-CustomerServiceBOT",
  }
];

const categories: Category[] = ["All", "NLP", "Computer Vision", "Recommendation", "Regression", "LLM"];

export function Works() {
  const [cat, setCat] = useState("All");
  
  const filtered = cat === "All" ? projects : projects.filter((p) => p.category === cat);
  const prodCount = projects.filter(p => p.concepts.includes("Production")).length;

  return (
    <section id="works" className="py-28 px-6 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #f8faff 0%, #f0f4ff 50%, #f8faff 100%)" }}>
      {/* Blue ambient glows */}
      <div className="absolute top-0 left-[15%] w-[500px] h-[500px] bg-[#0065F8]/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-[10%] w-[400px] h-[400px] bg-[#4300FF]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#00CAFF]/3 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* ── Richer Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="flex-1">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#0065F8]/20 bg-[#0065F8]/5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0065F8] animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#0065F8]">PORTFOLIO_EXPLORER_V3</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95]">
                <span className="font-serif italic font-normal text-foreground/80">Featured</span>{" "}
                <span className="text-gradient-brand">Works</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 text-muted-foreground max-w-lg leading-relaxed">
                Dari riset akademik hingga sistem AI production-ready — setiap proyek adalah bukti nyata dari kemampuan dan dedikasi dalam membangun solusi berbasis kecerdasan buatan.
              </p>
            </Reveal>
          </div>

          {/* Stats panel */}
          <Reveal delay={0.2}>
            <div className="flex gap-4 lg:gap-6 shrink-0">
              <div className="text-center p-4 rounded-2xl border border-[#0065F8]/15 bg-white/80 backdrop-blur shadow-sm min-w-[80px]">
                <div className="text-3xl font-black tracking-tight text-gradient-brand">{projects.length}</div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mt-1">Projects</div>
              </div>
              <div className="text-center p-4 rounded-2xl border border-[#0065F8]/15 bg-white/80 backdrop-blur shadow-sm min-w-[80px]">
                <div className="text-3xl font-black tracking-tight text-gradient-brand">{prodCount}</div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mt-1">Production</div>
              </div>
              <div className="text-center p-4 rounded-2xl border border-[#0065F8]/15 bg-white/80 backdrop-blur shadow-sm min-w-[80px]">
                <div className="text-3xl font-black tracking-tight text-gradient-brand">{categories.length - 1}</div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mt-1">Domains</div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── Divider with ornament ── */}
        <Reveal delay={0.22}>
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#0065F8]/20 to-transparent" />
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0065F8]/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#0065F8]/60" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#0065F8]/40" />
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#0065F8]/20 to-transparent" />
          </div>
        </Reveal>

        {/* ── Category filter ── */}
        <Reveal delay={0.25}>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                  cat === c
                    ? "bg-[#0065F8] text-white border-[#0065F8] shadow-[0_4px_14px_rgba(0,101,248,0.35)]"
                    : "bg-white border-border text-muted-foreground hover:border-[#0065F8]/40 hover:text-[#0065F8]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        {/* ── Cards Grid (Clean Design) ── */}
        <motion.div layout className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: (i % 6) * 0.05 }}
                className="flex flex-col bg-white rounded-3xl border border-[#0065F8]/10 shadow-[0_4px_20px_rgba(0,101,248,0.05)] hover:shadow-[0_12px_40px_rgba(0,101,248,0.12)] transition-all duration-300 overflow-hidden group relative"
              >
                {/* Image Header Area */}
                <div className="relative w-full h-[220px] bg-slate-100 overflow-hidden shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {project.concepts.includes("Production") && (
                    <div className="absolute top-4 right-4 bg-[#0065F8] text-white text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md tracking-widest uppercase">
                      <Star className="w-3 h-3 fill-white" />
                      FEATURED
                    </div>
                  )}
                  
                  <div className="absolute bottom-4 left-4">
                    <span className="font-mono text-[10px] font-bold bg-white/90 backdrop-blur text-[#0065F8] px-2 py-1 rounded shadow-sm">
                      {project.n} / {project.category}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-800 leading-tight mb-3">
                    <span className="font-serif italic font-normal opacity-80">{project.title.split(/[:\-]/)[0]}</span>{" "}
                    {project.title.split(/[:\-]/).slice(1).join(" ").trim()}
                  </h3>
                  
                  <p className="text-[14px] text-slate-500 leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mt-auto">
                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.slice(0, 3).map((t) => (
                        <span key={t} className="px-3 py-1 bg-[#0065F8]/5 border border-[#0065F8]/10 text-[#0065F8] text-[10px] font-mono font-bold rounded-full uppercase tracking-wider">
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 bg-slate-50 border border-slate-100 text-slate-500 text-[10px] font-mono font-bold rounded-full">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-end border-t border-slate-100 pt-4">
                      <a 
                        href={project.demoUrl || project.github} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center gap-2 text-[13px] font-bold text-slate-600 hover:text-[#0065F8] transition-colors"
                      >
                        Live Demo
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}