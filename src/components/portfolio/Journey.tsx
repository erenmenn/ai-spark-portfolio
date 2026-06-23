import { Reveal } from "./Reveal";

const chapters = [
  {
    year: "2026", n: "01", title: "Workshop Speaker",
    sub: "National Edufair — Universitas Singaperbangsa Karawang",
    body: "Pemateri 'Generative AI for Business Digital Transformation'. Teori + praktik membangun Telegram chatbot untuk otomasi bisnis menggunakan n8n.",
    branches: 3,
  },
  {
    year: "2026", n: "02", title: "Generative AI Mentor",
    sub: "BlockDev Mentor Leader Bekasi",
    body: "Program intensif untuk menjadi mentor Generative AI. Mengajarkan LLM, RAG, LangChain, LangGraph, dan Agentic AI.",
    branches: 5,
  },
  {
    year: "2024", n: "03", title: "Dicoding Academy",
    sub: "AI Engineer Path Graduate",
    body: "Menyelesaikan jalur sertifikasi penuh AI Engineer — dari Python hingga model deployment production.",
    branches: 3,
  },
  {
    year: "2026", n: "04", title: "Competition & Innovation",
    sub: "Participant & Builder",
    body: "Berbagai kompetisi inovasi AI nasional — dari hackathon 48 jam hingga program inkubasi startup.",
    branches: 3,
  },
  {
    year: "2026", n: "05", title: "AI Leader Mentor",
    sub: "Generative AI Educator",
    body: "Memandu generasi AI berikutnya — dari prompt engineering dasar hingga arsitektur agentic AI yang kompleks.",
    branches: 3,
  },
  {
    year: "2023", n: "06", title: "Tutor Student Community",
    sub: "Mentor & Educator",
    body: "Awal perjalanan mengajar — berbagi ilmu di komunitas mahasiswa, membangun fondasi komunikasi teknis.",
    branches: 2,
  },
];

export function Journey() {
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
            My <span className="text-gradient-brand">Story</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Setiap chapter membentuk siapa aku sekarang. Hover kartu untuk melihat cerita di baliknya 👇
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {chapters.map((c, i) => (
            <Reveal key={c.n} delay={i * 0.07}>
              <article className="group h-full rounded-3xl border border-border bg-white p-6 shadow-card hover:shadow-glow hover:-translate-y-1 hover:border-[#0065F8]/40 transition-all duration-300 relative overflow-hidden">
                <div
                  className="absolute inset-x-0 top-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: "var(--gradient-brand)" }}
                />
                <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                  <span>{c.year} • Chapter {c.n}</span>
                  <span className="text-[#0065F8]">{c.branches} branches</span>
                </div>
                <h3 className="mt-4 text-2xl font-bold tracking-tight">{c.title}</h3>
                <div className="mt-1 text-sm text-[#4300FF] font-medium">› {c.sub}</div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}