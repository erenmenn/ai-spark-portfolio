import { useState, useRef, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Send, Bot, Loader2, MessageCircle, Sparkles,
  ChevronDown, ExternalLink, ArrowRight,
} from "lucide-react";
import { useChatbot } from "./ChatbotContext";

// ── SYSTEM PROMPT (exact as specified — do not modify) ─────────────────────────
const SYSTEM_PROMPT = `===SYSTEM PROMPT START===

# 1. ROLE
Kamu adalah "Asisten Karir Emirsyah Rafsanjani" — chatbot yang berperan sebagai
representasi digital Emirsyah di website portofolionya. Kamu BUKAN asisten AI
generik; kamu adalah juru bicara khusus untuk satu orang: Emirsyah Rafsanjani.

# 2. CONTEXT
Pengguna chatbot ini adalah recruiter, hiring manager, atau pihak lain yang
sedang mengevaluasi Emirsyah sebagai kandidat untuk posisi AI Engineer dan/atau
Project Manager/Project Lead. Mereka punya waktu terbatas dan ingin cepat
menilai kecocokan Emirsyah dengan kebutuhan mereka.

# 3. TASK / OBJECTIVE
Tugasmu:
a) Menjawab pertanyaan tentang Emirsyah secara akurat berdasarkan KNOWLEDGE BASE
   di bagian 6.
b) Menonjolkan dual-identity Emirsyah: AI Engineer hands-on teknis (LLM, RAG,
   LangChain/LangGraph, Agentic AI) SEKALIGUS Project Manager/Leader yang
   terbukti memimpin tim dan program nyata.
c) Mengarahkan recruiter ke langkah lanjutan: lihat GitHub/portofolio, atau
   kontak langsung (WhatsApp/email) untuk diskusi lebih lanjut atau interview.

# 4. CONSTRAINTS & ANTI-HALLUCINATION RULES (HARD RULES — tidak bisa dilanggar)
- GROUNDING RULE: Jawab HANYA berdasarkan informasi yang ada di bagian
  "6. KNOWLEDGE BASE" di bawah. Jangan pernah menambahkan detail, angka,
  tanggal, nama proyek, atau klaim yang tidak tertulis eksplisit di sana,
  meskipun kedengarannya masuk akal atau "kemungkinan benar".
- NO FABRICATION: Jika sebuah pertanyaan butuh data yang TIDAK ada di
  Knowledge Base (misal: gaji yang diharapkan, riwayat kerja sebelum 2023,
  nomor sertifikat, tanggal lahir, status hubungan, dll), JANGAN MENGARANG
  jawaban apapun. Gunakan FALLBACK RESPONSE (lihat bagian 9).
- NO EXTRAPOLATION: Jangan menyimpulkan skill atau pengalaman yang tidak
  disebutkan secara langsung. Contoh: jika ditanya "apakah Emirsyah bisa Go
  programming language?" dan itu tidak ada di Knowledge Base, jawab tidak
  tahu — jangan menebak berdasarkan "karena dia programmer pasti bisa".
- NO OVERCLAIMING: Jangan melebih-lebihkan pencapaian melebihi apa yang
  tertulis. "Top 20%" tidak boleh dibahasakan ulang jadi "salah satu yang
  terbaik" atau "juara". "Top 10 Nasional" tidak boleh dibahasakan jadi
  "ranking 1" kecuali memang tertulis sebagai ranking 1.
- SELF-CHECK SEBELUM MENJAWAB: sebelum mengirim jawaban, cek ulang — apakah
  setiap fakta dalam jawaban ini bisa ditemukan/ditelusuri kalimatnya di
  Knowledge Base? Jika ada satu klaim yang tidak bisa ditelusuri sumbernya,
  hapus atau ganti dengan fallback.
- TIDAK membahas kompensasi/gaji spesifik — arahkan ke kontak langsung.
- TIDAK menjelekkan kompetitor, kampus lain, atau pihak lain.
- TIDAK keluar dari topik karir Emirsyah (lihat bagian 9 untuk pertanyaan
  di luar topik).
- TIDAK pernah mengaku sebagai "AI generik" tanpa konteks — selalu
  posisikan diri sebagai asisten karir Emirsyah secara spesifik.

# 5. TONE & STYLE
- Bahasa Indonesia casual — gaya Emirsyah ngobrol langsung, bukan bahasa
  korporat kaku ("Sehubungan dengan...", "Sesuai dengan...").
- Boleh pakai "aku" seolah representasi Emirsyah.
- Percaya diri, ramah, sopan — bukan alay/berlebihan.
- Ringkas dulu, elaborasi kalau ditanya lebih lanjut. Recruiter sibuk.
- Emoji secukupnya untuk poin penting (✅ 🚀 💡), jangan berlebihan.

# 6. KNOWLEDGE BASE (satu-satunya sumber kebenaran — lihat Constraints di atas)

## Identitas & Kontak
- Nama: Emirsyah Rafsanjani
- Lokasi: Jawa Barat, Indonesia
- WhatsApp: 089523290770
- Email: emirune2@gmail.com
- Instagram: @emirzyah
- GitHub: github.com/erenmenn
- LinkedIn: linkedin.com/in/emirsyah-rafsanjani
- Portofolio: emirsyah.my.id

## Ringkasan Profil
Mahasiswa Sistem Informasi dengan fokus pada Artificial Intelligence dan
Generative AI. Berpengalaman membangun solusi berbasis LLM, RAG, dan Agentic
AI untuk kebutuhan nyata di sektor pertanian, finansial, dan edukasi.
Berpengalaman memimpin tim cross-functional dan menjadi Project Manager
dalam berbagai inisiatif AI, dengan pendekatan Design Thinking dan Agile.
Aktif sebagai mentor dan pembicara nasional di bidang Generative AI.

## Pendidikan
- Universitas Singaperbangsa Karawang (UNSIKA) — S1 Sistem Informasi,
  2023–Sekarang, IPK 3,93

## Pengalaman Profesional

### BLOCKDEV - Builder Program (2026–Sekarang)
Role: AI Representative & Generative AI Leader (Bekasi Representation)
- Terpilih sebagai AI Leader Representative wilayah Bekasi dalam program AI
  Builder Lead; resmi menjadi Generative AI Mentor setelah pelatihan
  intensif Generative AI selama 1,5 bulan.
- Memimpin 8 sesi workshop hands-on: LLM, Transformer Architecture, RAG,
  Agent RAG, LangChain, LangGraph, Agentic AI — pendekatan learning-by-
  building di setiap sesi.
- Berperan sebagai Project Manager bagi tim-tim peserta sepanjang program:
  mendampingi dari ideation sampai deployment, membantu breakdown task,
  menjaga timeline tiap tim, memastikan kesiapan produk.
- Mengembangkan kemampuan komunikasi teknis dan mentoring dengan pendekatan
  kolaboratif dan problem-solving.
- Berperan sebagai asesor pada tahap screening dan wawancara kandidat
  program.

### National Edufair 2026 — "Generative AI for Digital Business"
Role: Workshop Speaker
- Pemateri utama di hadapan ±200 peserta tingkat nasional; membawakan
  strategi integrasi Generative AI untuk bisnis digital modern.
- Memandu sesi hands-on interaktif: peserta membangun chatbot fungsional
  berbasis automation tool n8n dari nol.
- Menerapkan metode learning-by-doing — peserta paham konsep DAN mampu
  implementasi AI secara mandiri.

### AI Innovation & National Competitive Experience (2026–Sekarang)

**Generative AI Engineer | Hackathon X Digdaya - Bank Indonesia**
- Top 20% peserta terbaik nasional; diundang ke acara peluncuran QRIS dan
  inisiatif pembayaran lintas negara Indonesia–Tiongkok.
- Menyelesaikan Digdaya Essential Training (6 jam intensif): design
  thinking, leadership, collaborative problem solving, product development
  management.
- Merancang dan mengembangkan solusi Generative AI berbasis data-driven
  melalui kolaborasi lintas disiplin di bawah tekanan kompetisi nasional.

**Team Lead & Project Manager | AI Impact Challenge (Dicoding × Microsoft Azure)**
- Memimpin tim sekaligus menjabat Project Manager dalam pengembangan
  InvestAI (platform asisten edukasi & investasi berbasis AI untuk literasi
  keuangan digital).
- Membawa tim meraih Top 10 Nasional dari ribuan peserta se-Indonesia,
  lewat kepemimpinan teknis dan koordinasi lintas fungsi (AI engineering,
  product, business).
- Mengakselerasi produk ke tahap lanjutan: optimasi model, eksperimen
  implementasi, strategi skalabilitas dengan ekosistem Microsoft Azure AI.

**First Place Winner – Islamic Business Category | Nexora Business Society**
- Juara 1 kompetisi inovasi & pengembangan bisnis tingkat nasional, kategori
  Bisnis Syariah.
- Merancang strategi bisnis syariah modern: value-driven entrepreneurship,
  financial sustainability, inovasi digital.

## Project Portofolio

**SatuTani — Intelligent Agricultural Agent System**
AI Agent pertanian berbasis LangChain. Integrasi data cuaca real-time BMKG,
data agrikultur FAO & Kementerian Pertanian, RAG knowledge base untuk hama/
pupuk/pestisida. Ada AI Pricing & Yield Advisor untuk rekomendasi komoditas
berdasarkan lokasi, prediksi cuaca, estimasi hasil panen, potensi keuntungan.
Core decision engine: Gaussian Scoring Engine, dijalankan via workflow
agentic AI.

**InvestAI — AI Investment Mentor**
Platform edukasi investasi berbasis AI menggabungkan XGBoost, LangGraph
Agent, dan LLM. Fitur: prediksi arah harga saham, analisis sentimen berita
keuangan via LLM, AI Mentor interaktif, simulator trading, modul
pembelajaran terstruktur untuk investor pemula.
(Project ini yang membawa Top 10 Nasional di AI Impact Challenge.)
GitHub: github.com/Couraa0/Invest

**Sisibuk AI — Intelligent Scheduling Assistant**
AI Scheduling Assistant berbasis Next.js 15, NLU pakai LLaMA 3.3 via Groq.
Pipeline: intent classification, entity validation, conflict detection,
automated scheduling engine real-time. Gamifikasi, autentikasi, database
real-time pakai Supabase.
GitHub: github.com/erenmenn/Sisibuk-AI-PenjadwalanOtomatis

**Wangku.AI — AI-Powered Private Finance Assistant**
Asisten keuangan pribadi berbasis AI — user catat pemasukan/pengeluaran/
target tabungan lewat chat natural language. Pakai Gemini 2.5 Flash,
IndoBERT, Next.js, Prisma, PostgreSQL. Fitur: klasifikasi intent, ekstraksi
transaksi otomatis, analisis pola pengeluaran, prediksi kondisi keuangan,
deteksi anomali, rekomendasi finansial personal real-time.
GitHub: github.com/erenmenn/WangkuAI-FinanceBot

**Other AI & Machine Learning Projects**
Project lain pakai Python, TensorFlow, Scikit-Learn, LangChain, NLP —
mencakup Sentiment Analysis, Computer Vision, Recommendation System,
Semantic Search, Predictive Analytics, Customer Service Bot, Intelligent
Agent berbasis RAG & workflow automation.

## Skills
- **AI & Machine Learning:** Generative AI, LLM Integration, Prompt
  Engineering, RAG, Model Evaluation & Fine-tuning, Computer Vision, NLP,
  Agentic AI, AI Agents, LangChain, LangGraph, Deep Learning (CNN,
  Transformer)
- **Project & Product Management:** Agile & Scrum Methodology, Design
  Thinking, Sprint Planning, Task Breakdown & Timeline Management,
  Cross-functional Team Leadership, Stakeholder Communication
- **Programming & Development:** Python (TensorFlow, Scikit-Learn,
  Pandas), TypeScript, React.js, Next.js, REST API, OpenCV, HTML, CSS,
  Tailwind CSS
- **Design & Product Thinking:** Design Thinking, Creative Product
  Development, Innovation Solution Design, UI/UX Design, Wireframing,
  Prototyping, Visual Communication, Digital Illustration, Sketching,
  Painting, Photo & Visual Editing
- **Soft Skills:** Leadership & Team Coordination, Strategic Planning,
  Project Management, Problem Solving & Analytical Thinking, Creative
  Thinking, Innovation Mindset, Adaptability & Continuous Learning

## Sertifikasi
- Siswa Terbaik 1 — SMAN 16 Bekasi
- 1st Place Winner Islamic Business Category — Nexora Society
- Machine Learning Terapan — Dicoding Indonesia
- Deep Learning Advanced — Dicoding Indonesia
- Generative AI / Prompt Fundamentals — Dicoding Indonesia

## Bahasa
- English — TOEFL Prediction Score: 530
- French — Basic Conversational Proficiency

# 7. OUTPUT FORMAT
- Default: paragraf singkat (2-4 kalimat) untuk pertanyaan umum.
- Kalau diminta "list" / "skill apa aja" / pertanyaan enumeratif → gunakan
  bullet point singkat, maksimal 5-7 poin, jangan menyalin seluruh
  Knowledge Base mentah-mentah.
- Selalu tutup jawaban dengan soft-CTA jika relevan dan natural (bukan di
  SETIAP balasan, supaya tidak berkesan dipaksa) — misalnya mengarahkan ke
  GitHub, portofolio, atau kontak langsung.
- Jangan gunakan format markdown heading (#, ##) di dalam balasan chat;
  cukup teks biasa dan bullet "-" jika perlu.

# 8. FEW-SHOT EXAMPLES (kalibrasi nada — ikuti pola ini)

Q: "Emirsyah ini lebih condong jadi AI Engineer atau PM?"
A: "Bagus nih pertanyaannya — jujur aku didesain buat dua-duanya sih 😄.
Secara teknis aku aktif di LLM, RAG, LangChain/LangGraph (lihat project
InvestAI atau SatuTani). Tapi aku juga punya track record mimpin tim — di
BlockDev aku jadi PM buat tim-tim peserta sekaligus mimpin 8 sesi workshop
teknis, dan di AI Impact Challenge aku jadi Team Lead & PM yang bawa tim ke
Top 10 Nasional. Kalau butuh orang yang ngerti teknis tapi juga bisa pegang
eksekusi project, itu cocok sama aku."

Q: "Pengalaman RAG-nya kayak gimana?"
A: "Paling kelihatan di SatuTani — aku bangun RAG knowledge base soal hama,
pupuk, dan pestisida buat AI Agent pertanian. Aku juga ngajarin RAG
(termasuk Agent RAG) di workshop BlockDev yang aku pimpin. Detail teknisnya
bisa dicek di GitHub-ku: github.com/erenmenn."

Q: "Berapa gaji yang diharapkan?"
A: "Untuk diskusi kompensasi, aku rasa paling pas langsung ngobrol sama
Emirsyah ya — bisa hubungi dia di WhatsApp 089523290770 atau email
emirune2@gmail.com."

Q: "Apakah Emirsyah punya pengalaman kerja sebagai backend engineer di
perusahaan sebelum 2023?" (TIDAK ADA di Knowledge Base)
A: "Aku nggak punya data soal itu di sini — yang tercatat pengalaman
Emirsyah dimulai dari masa kuliahnya di UNSIKA (2023) lewat BlockDev, project
kompetisi, dan project-project AI-nya. Kalau butuh riwayat lebih detail,
paling akurat tanya langsung ke Emirsyah di kontaknya ya."

# 9. FALLBACK BEHAVIOR
- Jika pertanyaan butuh data yang tidak ada di Knowledge Base: akui dengan
  jujur ("aku nggak punya data soal itu di sini"), JANGAN mengarang, lalu
  arahkan ke kontak langsung (WhatsApp/email).
- Jika pertanyaan di luar topik karir (cuaca, gosip, hal pribadi yang tidak
  relevan): jawab ramah tapi arahkan balik ke topik karir, contoh:
  "Wah itu di luar keahlianku nih 😅 — aku di sini fokus bantu jelasin soal
  karir dan project-project Emirsyah. Ada yang mau ditanyain soal pengalaman
  atau skill-nya?"
- Jika diminta melakukan sesuatu di luar kapasitas chatbot (misal "jadwalkan
  interview sekarang", "kirim CV ke email saya"): jelaskan kamu tidak bisa
  melakukan aksi tersebut, lalu arahkan ke kontak langsung Emirsyah untuk
  proses lanjutan.

===SYSTEM PROMPT END===`;

// ── Groq API ───────────────────────────────────────────────────────────────────
const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY as string;
const GROQ_MODEL = "llama-3.3-70b-versatile";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

async function callGroq(messages: Message[]): Promise<string> {
  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages.map((m) => ({ role: m.role, content: m.content })),
      ],
      max_tokens: 600,
      temperature: 0.4,
      stream: false,
    }),
  });

  if (!response.ok) throw new Error(`Groq API error: ${response.status}`);
  const data = await response.json();
  return data.choices?.[0]?.message?.content ?? "Maaf, ada kendala teknis. Coba lagi ya!";
}

// ── Project map — for "View Card" deep links ───────────────────────────────────
type ProjectLink = {
  keywords: string[];
  label: string;
  scrollTarget: string; // article title partial match
  github?: string;
};

const PROJECT_LINKS: ProjectLink[] = [
  {
    keywords: ["investai", "invest ai", "investasi ai"],
    label: "InvestAI",
    scrollTarget: "InvestAI",
    github: "https://github.com/Couraa0/Invest",
  },
  {
    keywords: ["satutani", "satu tani", "agricultural", "pertanian"],
    label: "SatuTani",
    scrollTarget: "SatuTani",
    github: "https://github.com/erenmenn/SatuTani-AgriAI",
  },
  {
    keywords: ["sisibuk", "scheduling", "penjadwalan"],
    label: "Sisibuk AI",
    scrollTarget: "Sisibuk AI",
    github: "https://github.com/erenmenn/Sisibuk-AI-PenjadwalanOtomatis",
  },
  {
    keywords: ["wangku", "keuangan", "finance"],
    label: "WangkuAI",
    scrollTarget: "WangkuAI",
    github: "https://github.com/erenmenn/WangkuAI-FinanceBot",
  },
  {
    keywords: ["javamart", "java mart", "chatbot"],
    label: "JavaMart AI",
    scrollTarget: "JavaMart",
    github: "https://github.com/erenmenn/JavaMart-GovernedChatbot",
  },
];

function detectProjects(text: string): ProjectLink[] {
  const lower = text.toLowerCase();
  const found: ProjectLink[] = [];
  for (const p of PROJECT_LINKS) {
    if (p.keywords.some((kw) => lower.includes(kw))) {
      found.push(p);
    }
  }
  return found;
}

function scrollToProject(scrollTarget: string) {
  // First scroll to #works
  const worksSection = document.getElementById("works");
  if (worksSection) {
    worksSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  // Find and highlight the card after scroll completes
  setTimeout(() => {
    const articles = document.querySelectorAll("article");
    for (const card of articles) {
      const titleEl = card.querySelector("h3");
      if (titleEl && titleEl.textContent?.toLowerCase().includes(scrollTarget.toLowerCase())) {
        card.scrollIntoView({ behavior: "smooth", block: "center" });
        // Apply highlight ring
        (card as HTMLElement).style.transition = "box-shadow 0.4s ease, border-color 0.4s ease";
        (card as HTMLElement).style.boxShadow =
          "0 0 0 3px rgba(0,101,248,0.7), 0 16px 48px rgba(0,101,248,0.3)";
        (card as HTMLElement).style.borderColor = "rgba(0,101,248,0.6)";
        setTimeout(() => {
          (card as HTMLElement).style.boxShadow = "";
          (card as HTMLElement).style.borderColor = "";
        }, 2800);
        break;
      }
    }
  }, 750);
}

// ── Rich message renderer ──────────────────────────────────────────────────────
function RichText({ text }: { text: string }) {
  // Split into lines, handle - bullet points and **bold**
  const lines = text.split("\n");

  return (
    <div className="space-y-1.5">
      {lines.map((line, i) => {
        const trimmed = line.trim();
        if (!trimmed) return <div key={i} className="h-1" />;

        // Bullet line
        if (trimmed.startsWith("- ") || trimmed.startsWith("• ")) {
          const content = trimmed.slice(2);
          return (
            <div key={i} className="flex gap-2 items-start">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0065F8] shrink-0" />
              <span className="text-sm leading-relaxed">{renderInline(content)}</span>
            </div>
          );
        }

        return (
          <p key={i} className="text-sm leading-relaxed">
            {renderInline(trimmed)}
          </p>
        );
      })}
    </div>
  );
}

function renderInline(text: string): React.ReactNode {
  // Handle **bold** markdown
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-slate-800">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

// ── Quick suggestions ──────────────────────────────────────────────────────────
const QUICK_SUGGESTIONS = [
  "Emirsyah AI Engineer atau PM?",
  "Ceritain InvestAI dong",
  "Pengalaman RAG-nya gimana?",
  "Skill teknis AI apa aja?",
  "Cara kontak Emirsyah?",
];

// ── Chatbot component ──────────────────────────────────────────────────────────
export function Chatbot() {
  const { isOpen, openChat, closeChat, prefillMessage, clearPrefill } = useChatbot();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasSentFirst, setHasSentFirst] = useState(false);
  const [unread, setUnread] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Focus on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
      setUnread(0);
    }
  }, [isOpen]);

  // Handle prefill from skill badges
  useEffect(() => {
    if (prefillMessage && isOpen) {
      setInput(prefillMessage);
      clearPrefill();
      setTimeout(() => inputRef.current?.focus(), 350);
    }
  }, [prefillMessage, isOpen, clearPrefill]);

  // Unread badge
  useEffect(() => {
    if (!isOpen && messages.length > 0) {
      const last = messages[messages.length - 1];
      if (last.role === "assistant") setUnread((n) => n + 1);
    }
  }, [messages, isOpen]);

  const sendMessage = useCallback(
    async (text?: string) => {
      const userText = (text ?? input).trim();
      if (!userText || isLoading) return;
      setInput("");
      setHasSentFirst(true);

      const userMsg: Message = { id: Date.now().toString(), role: "user", content: userText };
      setMessages((prev) => [...prev, userMsg]);
      setIsLoading(true);

      try {
        const history = [...messages, userMsg];
        const reply = await callGroq(history);
        setMessages((prev) => [
          ...prev,
          { id: (Date.now() + 1).toString(), role: "assistant", content: reply },
        ]);
      } catch {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: "assistant",
            content:
              "Waduh ada gangguan teknis nih 😅 Coba lagi ya, atau kontak Emirsyah langsung di WA 089523290770.",
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    },
    [input, isLoading, messages],
  );

  return (
    <>
      {/* ── FAB ── */}
      <motion.button
        onClick={() => { openChat(); setUnread(0); }}
        className="fixed bottom-6 right-6 z-[150] w-14 h-14 rounded-full shadow-[0_8px_32px_rgba(0,101,248,0.4)] flex items-center justify-center overflow-visible"
        style={{ background: "linear-gradient(135deg, #4300FF 0%, #0065F8 50%, #00CAFF 100%)" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={isOpen ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.4 }}
        aria-label="Open AI career assistant"
      >
        <MessageCircle className="w-6 h-6 text-white relative z-10" />
        <span className="absolute inset-0 rounded-full animate-ping opacity-20 bg-[#0065F8]" />
        {unread > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center z-20">
            {unread}
          </span>
        )}
      </motion.button>

      {/* ── Chat panel ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.94 }}
            transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
            className="fixed bottom-6 right-6 z-[150] w-[390px] max-w-[calc(100vw-24px)] rounded-3xl overflow-hidden flex flex-col"
            style={{
              height: "min(620px, calc(100vh - 96px))",
              background: "rgba(255,255,255,0.99)",
              border: "1px solid rgba(0,101,248,0.12)",
              boxShadow: "0 32px 80px rgba(0,101,248,0.18), 0 8px 24px rgba(0,0,0,0.07)",
            }}
          >
            {/* ── Header ── */}
            <div
              className="flex items-center gap-3 px-5 py-4 shrink-0"
              style={{ background: "linear-gradient(135deg, #4300FF 0%, #0065F8 60%, #00CAFF 100%)" }}
            >
              <div className="relative shrink-0">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center ring-2 ring-white/30">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <p className="text-sm font-bold text-white truncate">Asisten Karir Emirsyah</p>
                  <Sparkles className="w-3.5 h-3.5 text-yellow-300 shrink-0" />
                </div>
                <p className="text-[11px] text-white/70 font-mono">AI Representative • online</p>
              </div>
              <button
                onClick={closeChat}
                className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 transition-colors flex items-center justify-center"
              >
                <ChevronDown className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* ── Messages ── */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 min-h-0">
              {/* Welcome */}
              {messages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2.5 items-start"
                >
                  <AvatarBot />
                  <BubbleAssistant>
                    <p className="text-sm leading-relaxed">
                      Halo! 👋 Aku asisten karir <strong className="font-semibold">Emirsyah Rafsanjani</strong>.
                      Tanya apapun soal pengalaman, skill, atau project-nya — aku jawab ringkas & to the point.
                    </p>
                  </BubbleAssistant>
                </motion.div>
              )}

              {messages.map((msg) => {
                const detectedProjects = msg.role === "assistant" ? detectProjects(msg.content) : [];
                return (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex gap-2.5 items-start ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                  >
                    {msg.role === "assistant" && <AvatarBot />}

                    <div className="flex flex-col gap-2 max-w-[84%]">
                      {msg.role === "assistant" ? (
                        <BubbleAssistant>
                          <RichText text={msg.content} />
                        </BubbleAssistant>
                      ) : (
                        <div
                          className="px-4 py-3 rounded-2xl rounded-br-sm text-sm leading-relaxed text-white"
                          style={{ background: "linear-gradient(135deg, #4300FF, #0065F8)" }}
                        >
                          {msg.content}
                        </div>
                      )}

                      {/* Project deep-link cards */}
                      {detectedProjects.length > 0 && (
                        <div className="flex flex-col gap-1.5 mt-0.5">
                          {detectedProjects.map((p) => (
                            <div
                              key={p.label}
                              className="flex items-center gap-2"
                            >
                              <button
                                onClick={() => { closeChat(); scrollToProject(p.scrollTarget); }}
                                className="flex items-center gap-1.5 text-[11px] font-bold px-3 py-1.5 rounded-full border transition-all hover:-translate-y-0.5 hover:shadow-sm"
                                style={{
                                  color: "#0065F8",
                                  borderColor: "rgba(0,101,248,0.25)",
                                  background: "rgba(0,101,248,0.05)",
                                }}
                              >
                                <ArrowRight className="w-3 h-3" />
                                Lihat card {p.label}
                              </button>
                              {p.github && p.github !== "#" && (
                                <a
                                  href={p.github}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="flex items-center gap-1 text-[11px] font-bold px-3 py-1.5 rounded-full border transition-all hover:-translate-y-0.5"
                                  style={{
                                    color: "#6366f1",
                                    borderColor: "rgba(99,102,241,0.25)",
                                    background: "rgba(99,102,241,0.05)",
                                  }}
                                >
                                  <ExternalLink className="w-3 h-3" />
                                  GitHub
                                </a>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}

              {/* Loading */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2.5 items-start"
                >
                  <AvatarBot />
                  <BubbleAssistant>
                    <div className="flex items-center gap-2">
                      <Loader2 className="w-3.5 h-3.5 text-[#0065F8] animate-spin" />
                      <span className="text-xs text-slate-400 font-mono">Emir lagi mikir...</span>
                    </div>
                  </BubbleAssistant>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* ── Quick suggestions (only before first message) ── */}
            <AnimatePresence>
              {!hasSentFirst && (
                <motion.div
                  initial={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-4 pb-3 shrink-0 overflow-hidden"
                >
                  <p className="text-[9px] font-mono uppercase tracking-widest text-slate-300 mb-2">
                    Pertanyaan populer
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {QUICK_SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        onClick={() => sendMessage(s)}
                        className="text-[11px] font-medium px-3 py-1.5 rounded-full border transition-all hover:-translate-y-0.5 hover:shadow-sm"
                        style={{
                          borderColor: "rgba(0,101,248,0.22)",
                          color: "#0065F8",
                          background: "rgba(0,101,248,0.04)",
                        }}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ── Input ── */}
            <div
              className="px-4 py-3 border-t shrink-0 flex items-center gap-2"
              style={{ borderColor: "rgba(0,101,248,0.08)", background: "rgba(248,250,255,0.95)" }}
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); }
                }}
                placeholder="Tanya soal Emirsyah..."
                className="flex-1 text-sm bg-transparent outline-none placeholder:text-slate-300 text-slate-800"
                disabled={isLoading}
              />
              <motion.button
                onClick={() => sendMessage()}
                disabled={!input.trim() || isLoading}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.93 }}
                className="w-9 h-9 rounded-full flex items-center justify-center disabled:opacity-35"
                style={{ background: "linear-gradient(135deg, #4300FF, #0065F8)" }}
              >
                <Send className="w-4 h-4 text-white" />
              </motion.button>
            </div>

            {/* ── Footer ── */}
            <div className="text-center pb-2.5 shrink-0">
              <span className="text-[9px] font-mono text-slate-200 tracking-wide">
                Powered by Groq × LLaMA 3.3 · emirsyah.my.id
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ── Sub-components ─────────────────────────────────────────────────────────────
function AvatarBot() {
  return (
    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#0065F8] to-[#00CAFF] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
      <Bot className="w-3.5 h-3.5 text-white" />
    </div>
  );
}

function BubbleAssistant({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="px-4 py-3 rounded-2xl rounded-bl-sm text-slate-700"
      style={{ background: "rgba(0,101,248,0.06)", border: "1px solid rgba(0,101,248,0.08)" }}
    >
      {children}
    </div>
  );
}
