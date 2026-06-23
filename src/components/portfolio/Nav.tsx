import { motion } from "motion/react";

const links = [
  { href: "#about", label: "About" },
  { href: "#arsenal", label: "Arsenal" },
  { href: "#journey", label: "Journey" },
  { href: "#works", label: "Works" },
  { href: "#design", label: "Design" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 inset-x-4 z-50 flex justify-center"
    >
      <nav className="flex items-center gap-1 px-2 py-2 rounded-full border border-border bg-white/80 backdrop-blur-xl shadow-card">
        <a href="#top" className="px-4 py-1.5 text-sm font-semibold tracking-tight">
          <span className="text-gradient-brand">EMIR.</span>
          <span className="text-foreground/60 font-normal">portfolio</span>
        </a>
        <div className="hidden md:flex items-center">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="ml-1 px-4 py-1.5 rounded-full text-sm font-medium text-white bg-gradient-brand shadow-glow hover:opacity-95 transition"
        >
          Hire me ↗
        </a>
      </nav>
    </motion.header>
  );
}