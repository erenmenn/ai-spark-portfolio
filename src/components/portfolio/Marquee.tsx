const tokens = [
  "AI ENGINEER", "AI CONSULTANT", "TECH LOVER", "MACHINE LEARNING",
  "DEEP LEARNING", "LLMs & RAG", "NLP", "COMPUTER VISION",
];

export function Marquee() {
  const row = [...tokens, ...tokens];
  return (
    <section className="relative py-6 border-y border-border bg-gradient-brand overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="mx-8 text-white font-display font-semibold text-xl tracking-tight">
            {t} <span className="opacity-60 mx-2">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}