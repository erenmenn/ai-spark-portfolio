import { Reveal } from "./Reveal";
import { useChatbot } from "./ChatbotContext";
import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

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

// Each skill maps to a prefill question for the chatbot
const SKILLS_WITH_QUESTIONS: { label: string; question: string }[] = [
  {
    label: "Problem Solving",
    question: "Gimana cara Emirsyah ngadepin masalah teknis yang kompleks? Ceritain contoh nyatanya dong.",
  },
  {
    label: "Leadership",
    question: "Ceritain pengalaman leadership Emirsyah yang paling berkesan — tim, konteks, dan hasilnya gimana?",
  },
  {
    label: "Project Design",
    question: "Emirsyah punya pengalaman merancang arsitektur project AI dari awal? Bisa ceritain prosesnya?",
  },
  {
    label: "Analytical",
    question: "Kemampuan analytical Emirsyah keliatan di project mana aja? Kasih contoh yang konkret dong.",
  },
  {
    label: "Creative Thinking",
    question: "Emirsyah pernah nemuin solusi 'out of the box' di project atau kompetisi? Ceritain dong!",
  },
  {
    label: "Mentorship",
    question: "Pengalaman Emirsyah jadi mentor atau ngajarin orang lain soal AI itu gimana? Di mana aja?",
  },
];

export function About() {
  const { openChat } = useChatbot();

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
            <span className="font-serif italic font-normal text-foreground/80">Passionate</span> about
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

              {/* Skill badges — clickable → open chatbot with prefill */}
              <div className="mt-8">
                <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-1.5">
                  <MessageCircle className="w-3 h-3" />
                  Klik untuk tanya langsung ke AI Emir
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {SKILLS_WITH_QUESTIONS.map(({ label, question }, i) => (
                    <motion.button
                      key={label}
                      onClick={() => openChat(question)}
                      whileHover={{ y: -2, scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 * i, duration: 0.35 }}
                      className="group relative px-3 py-2.5 rounded-xl border text-sm font-medium text-left overflow-hidden transition-all duration-200 hover:border-[#0065F8] hover:text-[#0065F8] hover:shadow-sm"
                      style={{ background: "white" }}
                    >
                      {/* Hover glow fill */}
                      <span
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                        style={{ background: "rgba(0,101,248,0.04)" }}
                      />
                      <span className="relative flex items-center justify-between gap-2">
                        {label}
                        <MessageCircle className="w-3 h-3 opacity-0 group-hover:opacity-60 transition-opacity shrink-0" />
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Chat preview panel — clicking opens chatbot */}
          <Reveal delay={0.25}>
            <div
              className="rounded-3xl border border-border bg-white p-6 shadow-card cursor-pointer group transition-all hover:border-[#0065F8]/40 hover:shadow-[0_8px_32px_rgba(0,101,248,0.12)]"
              onClick={() => openChat()}
            >
              <div className="flex items-center gap-2 pb-4 border-b border-border">
                <div className="size-2 rounded-full bg-[#00FFDE] animate-pulse" />
                <span className="text-sm font-medium">Chat with Emir</span>
                <span className="ml-auto text-xs font-mono text-muted-foreground">online</span>
                <span
                  className="text-[10px] font-mono px-2 py-0.5 rounded-full text-white ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: "linear-gradient(135deg,#4300FF,#0065F8)" }}
                >
                  Open ↗
                </span>
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
              <div className="mt-4 flex items-center gap-2 px-3 py-2 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground group-hover:border-[#0065F8]/30 transition-colors">
                💬 Klik untuk ngobrol langsung...
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}