import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "./Reveal";
import { Calendar, MapPin, X, GitBranch, ChevronRight } from "lucide-react";

type Experience = {
  id: string;
  n: string;
  year: string;
  company: string;
  role: string;
  date: string;
  location: string;
  image: string;
  color: string;
  gradFrom: string;
  gradTo: string;
  description: string[];
};

const experiences: Experience[] = [
  {
    id: "ai-leader-mentor",
    n: "01",
    year: "2026",
    company: "BLOCKDEV - Builder Program",
    role: "AI Representative & Generative AI Leader",
    date: "2026 — Sekarang",
    location: "Bekasi",
    image: "/asset/story/mentor-blockdev.jpeg",
    color: "#ec4899",
    gradFrom: "#ec4899",
    gradTo: "#a855f7",
    description: [
      "Terpilih sebagai AI Leader Representative wilayah Bekasi dalam program AI Builder Lead dan resmi ditunjuk sebagai Generative AI Mentor setelah menyelesaikan pelatihan intensif Generative AI selama lebih dari 1,5 bulan.",
      "Memimpin 8 sesi workshop hands-on mencakup Large Language Models (LLM), Transformer Architecture, Retrieval-Augmented Generation (RAG), Agent RAG, LangChain, LangGraph, dan Agentic AI, dengan pendekatan praktik langsung (learning-by-building) di setiap sesi.",
      "Berperan sebagai Project Manager bagi tim-tim peserta sepanjang program, mendampingi proses pembangunan final project dari tahap ideation hingga deployment. termasuk membantu breakdown task, menjaga timeline tiap tim, serta memastikan kesiapan produk yang dibangun.",
      "Mengembangkan kemampuan komunikasi teknis, mentoring, serta penyampaian materi AI dengan pendekatan kolaboratif, problem-solving, dan inovasi berbasis teknologi.",
      "Berperan sebagai asesor dalam tahap screening dan wawancara kandidat, memastikan kesesuaian profil dan kesiapan peserta dalam menerima materi Generative AI secara intensif."
    ],
  },
  {
    id: "workshop-speaker",
    n: "02",
    year: "2026",
    company: "National Edufair 2026",
    role: "Workshop Speaker — Generative AI for Digital Business",
    date: "2026",
    location: "Universitas Singaperbangsa Karawang",
    image: "/asset/story/edufair-seminar.jpeg",
    color: "#0065F8",
    gradFrom: "#0065F8",
    gradTo: "#00CAFF",
    description: [
      "Menjadi pemateri utama di hadapan ±200 peserta tingkat nasional, membawakan strategi integrasi Generative AI untuk kebutuhan bisnis digital modern.",
      "Memandu sesi hands-on secara interaktif, membimbing seluruh peserta membangun chatbot fungsional berbasis automation tool n8n secara langsung dari nol.",
      "Menerapkan metode learning-by-doing untuk memastikan ±200 peserta tidak hanya memahami konsep, tetapi juga mampu mengimplementasikan AI secara teknis dan mandiri."
    ],
  },
  {
    id: "competitions-2026",
    n: "03",
    year: "2026",
    company: "AI Innovation & Competitive Experience",
    role: "Generative AI Engineer & Project Manager",
    date: "2026 — Sekarang",
    location: "National Level Competitions",
    image: "/asset/story/hackaton.jpeg",
    color: "#10b981",
    gradFrom: "#10b981",
    gradTo: "#34d399",
    description: [
      "Generative AI Engineer | Hackathon X Digdaya - Bank Indonesia: Terpilih sebagai Top 20% peserta terbaik nasional; diundang ke acara peluncuran QRIS dan inisiatif pembayaran lintas negara Indonesia–Tiongkok.",
      "Menyelesaikan Digdaya Essential Training (program intensif 6 jam) yang mencakup design thinking, leadership, dan collaborative problem solving, serta product development management untuk membentuk kompetensi sebagai inovator dan future product leader.",
      "Merancang dan mengembangkan solusi Generative AI berbasis data-driven melalui kolaborasi lintas disiplin di bawah tekanan kompetisi tingkat nasional.",
      "Team Lead & Project Manager | AI Impact Challenge (Dicoding × Microsoft Azure): Memimpin tim sekaligus menjabat sebagai Project Manager dalam pengembangan InvestAI, platform asisten edukasi dan investasi berbasis AI untuk peningkatan literasi keuangan digital.",
      "Membawa tim meraih Top 10 Nasional dari ribuan peserta se-Indonesia melalui kepemimpinan teknis dan koordinasi lintas fungsi (AI engineering, product, business).",
      "Mengakselerasi pengembangan produk ke tahap lanjutan, termasuk optimasi model, eksperimen implementasi, dan strategi skalabilitas menggunakan ekosistem Microsoft Azure AI.",
      "First Place Winner | Nexora Business Society: Meraih Juara 1 pada kompetisi inovasi dan pengembangan bisnis tingkat nasional, kategori Bisnis Syariah, merancang strategi bisnis syariah modern yang mengintegrasikan value-driven entrepreneurship, financial sustainability, dan inovasi digital."
    ],
  },
  {
    id: "tutor-student-community",
    n: "04",
    year: "2023",
    company: "Tutor Student Community",
    role: "Tutor — Fisika, Matematika, Biologi",
    date: "2023",
    location: "High School",
    image: "/asset/story/tutor student.jpeg",
    color: "#8b5cf6",
    gradFrom: "#8b5cf6",
    gradTo: "#6366f1",
    description: [
      "Terpilih secara selektif dan dipercaya oleh tiga guru mata pelajaran untuk mengikuti program tutor — program pembelajaran tambahan di mana peserta bertugas membagikan kembali materi kepada siswa lain.",
      "Menyelenggarakan sesi bimbingan belajar bagi teman sebaya sebagai wadah untuk bertanya, berdiskusi, dan memperdalam pemahaman materi yang sulit.",
      "Membangun komunikasi empatik dan lingkungan belajar yang suportif, serta berkontribusi pada peningkatan pemahaman dan performa akademik siswa secara kolektif.",
    ],
  },
  {
    id: "english-club",
    n: "05",
    year: "2022",
    company: "English Club",
    role: "Pemateri & Organizer",
    date: "2022 – 2023",
    location: "High School",
    image: "/asset/story/english.jpeg",
    color: "#ea580c",
    gradFrom: "#ea580c",
    gradTo: "#ec4899",
    description: [
      "Menyusun dan mengembangkan materi pembelajaran bahasa Inggris sebagai panduan utama bagi anggota dalam meningkatkan kemampuan dasar hingga menengah.",
      "Memfasilitasi sesi pembelajaran dengan pendekatan interaktif berbasis permainan, menciptakan suasana belajar yang aktif dan menyenangkan.",
      "Mendukung peningkatan kepercayaan diri anggota dalam menggunakan bahasa Inggris melalui lingkungan belajar yang suportif dan partisipatif.",
    ],
  }
];

// ── Detail Modal ─────────────────────────────────────────────────────────────────────
function DetailModal({ exp, onClose }: { exp: Experience; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-xl" />

      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 24 }}
        transition={{ duration: 0.35, type: "spring", bounce: 0.35 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white flex flex-col shadow-[0_0_80px_rgba(0,101,248,0.25)] border border-[#0065F8]/15"
      >
        {/* Glow orbs */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#0065F8]/8 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00CAFF]/8 blur-[80px] rounded-full pointer-events-none" />

        {/* Top bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-7 py-4 rounded-t-3xl backdrop-blur-sm border-b border-border bg-white/90">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">{exp.year} • Chapter {exp.n}</span>
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: exp.color }} />
            <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: exp.color }}>{exp.date}</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-border transition-colors"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>

        {/* Image */}
        <div className="relative w-full h-52 overflow-hidden">
          <img src={exp.image} alt={exp.company} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
          <div className="absolute bottom-4 left-7 flex items-center gap-2">
            <GitBranch className="w-3.5 h-3.5" style={{ color: exp.color }} />
            <span className="text-xs font-mono font-bold" style={{ color: exp.color }}>{exp.description.length} branches</span>
          </div>
        </div>

        {/* Body */}
        <div className="px-7 pb-8 pt-2 space-y-6 relative z-10">
          <div>
            <h3 className="text-3xl font-bold tracking-tight leading-tight">
              <span className="font-serif italic font-normal text-foreground/70">{exp.company.split(" ")[0]}</span>{" "}
              {exp.company.split(" ").slice(1).join(" ")}
            </h3>
            <div className="mt-2 flex items-center gap-2 flex-wrap">
              <span className="text-sm font-semibold px-3 py-1 rounded-full" style={{ color: exp.color, background: `${exp.color}15` }}>
                {exp.role}
              </span>
            </div>
            <div className="mt-3 flex items-center gap-4 text-xs font-mono text-muted-foreground">
              <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" style={{ color: exp.color }} />{exp.date}</span>
              <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3" style={{ color: exp.color }} />{exp.location}</span>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px" style={{ background: `linear-gradient(90deg, ${exp.color}50, transparent)` }} />

          {/* Description */}
          <div className="space-y-4">
            {exp.description.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="flex gap-3 items-start p-3 rounded-xl hover:bg-secondary/60 transition-colors"
              >
                <div className="mt-1.5 w-4 h-4 rounded-full shrink-0 flex items-center justify-center" style={{ background: `${exp.color}20`, border: `1.5px solid ${exp.color}50` }}>
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: exp.color }} />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Timeline Item ───────────────────────────────────────────────────────────────────
function TimelineItem({ exp, idx, onOpen }: { exp: Experience; idx: number; onOpen: () => void }) {
  const isLeft = idx % 2 === 0;

  return (
    <div className="relative flex items-center justify-center min-h-[340px] mb-8">
      {/* Center line dot */}
      <div className="absolute left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1, type: "spring", bounce: 0.5 }}
          className="w-5 h-5 rounded-full border-4 border-white shadow-[0_0_20px_rgba(0,101,248,0.6)]"
          style={{ background: `linear-gradient(135deg, ${exp.gradFrom}, ${exp.gradTo})` }}
        />
      </div>

      {/* Year badge on center line */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: idx * 0.1 + 0.15 }}
        className="absolute left-1/2 -translate-x-1/2 -top-4 z-30"
      >
        <span
          className="text-[9px] font-mono font-bold px-2.5 py-1 rounded-full text-white shadow-[0_4px_16px_rgba(0,101,248,0.4)]"
          style={{ background: `linear-gradient(135deg, ${exp.gradFrom}, ${exp.gradTo})` }}
        >
          {exp.year}
        </span>
      </motion.div>

      {/* Left side */}
      <div className="w-[calc(50%-36px)] pr-6 flex justify-end">
        {isLeft ? (
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.5, ease: "easeOut" }}
            className="w-full max-w-sm"
          >
            <Card exp={exp} onOpen={onOpen} />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.5 }}
            className="w-full max-w-sm overflow-hidden rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.08)]"
          >
            <img src={exp.image} alt={exp.company} className="w-full h-52 object-cover" />
          </motion.div>
        )}
      </div>

      {/* Right side */}
      <div className="w-[calc(50%-36px)] pl-6 flex justify-start">
        {!isLeft ? (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.5, ease: "easeOut" }}
            className="w-full max-w-sm"
          >
            <Card exp={exp} onOpen={onOpen} />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.5 }}
            className="w-full max-w-sm overflow-hidden rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.08)]"
          >
            <img src={exp.image} alt={exp.company} className="w-full h-52 object-cover" />
          </motion.div>
        )}
      </div>
    </div>
  );
}

function Card({ exp, onOpen }: { exp: Experience; onOpen: () => void }) {
  return (
    <div
      className="relative rounded-2xl p-5 overflow-hidden cursor-pointer group hover:-translate-y-1 transition-all duration-300"
      style={{
        background: "rgba(255,255,255,0.95)",
        border: `1px solid ${exp.color}20`,
        boxShadow: `0 4px 24px rgba(0,0,0,0.04), 0 0 0 1px ${exp.color}10`,
      }}
      onClick={onOpen}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: `linear-gradient(90deg, transparent, ${exp.gradFrom}, ${exp.gradTo}, transparent)` }}
      />
      <div
        className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none"
        style={{ background: exp.gradFrom }}
      />

      {/* Top meta */}
      <div className="flex items-center justify-between mb-3 relative z-10">
        <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
          {exp.year} • CHAPTER {exp.n}
        </span>
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center"
          style={{ background: `${exp.color}15` }}
        >
          <GitBranch className="w-3.5 h-3.5" style={{ color: exp.color }} />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold tracking-tight leading-tight relative z-10">
        <span className="font-serif italic font-normal text-foreground/70">{exp.company.split(" ")[0]}</span>{" "}
        {exp.company.split(" ").slice(1).join(" ")}
      </h3>

      {/* Subtitle */}
      <div className="mt-1 text-sm font-medium relative z-10" style={{ color: exp.color }}>
        › {exp.role}
      </div>

      {/* Description preview */}
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3 relative z-10">
        {exp.description[0]}
      </p>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-muted-foreground">
          <GitBranch className="w-3 h-3" />
          {exp.description.length} BRANCHES
        </div>
        <button
          className="flex items-center gap-1 text-xs font-bold transition-colors"
          style={{ color: exp.color }}
        >
          Open <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

export function Journey() {
  const [active, setActive] = useState<Experience | null>(null);

  return (
    <section id="journey" className="py-28 px-6 overflow-hidden relative">
      {/* Blue ambient glows */}
      <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-[#0065F8]/6 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-[#00CAFF]/6 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4300FF]/4 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
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
            Setiap chapter membentuk siapa aku sekarang. Klik kartu untuk membuka branch-nya.
          </p>
        </Reveal>

        {/* Timeline */}
        <div className="mt-20 relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-[#0065F8]/30 to-transparent" />
          {/* Glowing center line overlay */}
          <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-px shadow-[0_0_8px_2px_rgba(0,101,248,0.2)]" />

          {experiences.map((exp, idx) => (
            <TimelineItem
              key={exp.id}
              exp={exp}
              idx={idx}
              onOpen={() => setActive(exp)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <DetailModal exp={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}