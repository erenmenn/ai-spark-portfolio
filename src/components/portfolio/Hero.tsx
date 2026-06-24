import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import portraitTransparent from "@/assets/emir-transparent.png";

const roles = ["AI Engineer", "AI Consultant", "Problem Solver", "AI Evaluator"];

function useTypewriter(words: string[]) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i];
    const t = setTimeout(
      () => {
        if (!del) {
          setText(w.slice(0, text.length + 1));
          if (text.length + 1 === w.length) setTimeout(() => setDel(true), 1400);
        } else {
          setText(w.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDel(false);
            setI((p) => (p + 1) % words.length);
          }
        }
      },
      del ? 40 : 80,
    );
    return () => clearTimeout(t);
  }, [text, del, i, words]);
  return text;
}

export function Hero() {
  const typed = useTypewriter(roles);
  
  return (
    <section
      id="top"
      className="relative pt-36 pb-24 px-6 overflow-hidden min-h-screen flex items-center"
    >
      {/* ── Background & Ambient Glows ── */}
      <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      
      {/* Large ambient lights */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
        className="absolute -top-40 -right-40 size-[600px] rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, #00CAFF 0%, transparent 70%)" }}
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.2 }}
        className="absolute -bottom-40 -left-40 size-[600px] rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{ background: "radial-gradient(circle, #4300FF 0%, transparent 70%)" }}
      />

      {/* ── Floating Glow Orbs ── */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[10%] size-32 rounded-full blur-2xl opacity-60 pointer-events-none"
        style={{ background: "radial-gradient(circle, #0065F8, transparent)" }}
      />
      <motion.div
        animate={{ y: [0, 40, 0], x: [0, -30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[30%] right-[15%] size-40 rounded-full blur-[40px] opacity-50 pointer-events-none"
        style={{ background: "radial-gradient(circle, #00CAFF, transparent)" }}
      />
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, -20, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[40%] right-[40%] size-24 rounded-full blur-2xl opacity-40 pointer-events-none"
        style={{ background: "radial-gradient(circle, #4300FF, transparent)" }}
      />

      <div className="relative max-w-6xl mx-auto w-full">
        {/* ── Badge ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-2 text-[10px] md:text-xs font-mono uppercase tracking-widest text-muted-foreground"
        >
          <span className="size-1.5 rounded-full bg-[#00FFDE] animate-pulse shadow-[0_0_8px_#00FFDE]" />
          Universitas Singaperbangsa · Sistem Informasi · Active Student
        </motion.div>

        {/* ── Heading ── */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 text-[14vw] md:text-[8vw] lg:text-[7.5rem] leading-[0.92] font-bold tracking-tighter"
        >
          <span className="font-serif italic font-normal text-foreground/90">Emirsyah</span>
          <br />
          <span className="text-gradient-brand">RAFSANJANI</span>
        </motion.h1>

        {/* ── Content Grid ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid md:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center"
        >
          {/* Left Text */}
          <div className="z-10 relative">
            <p className="text-3xl md:text-4xl tracking-tight">
              <span className="font-serif italic text-foreground/70">I am an</span>{" "}
              <span className="font-semibold text-gradient-brand">{typed}</span>
              <span className="animate-blink text-[#4300FF]">|</span>
            </p>
            <p className="mt-6 text-base md:text-lg text-slate-600 max-w-lg leading-relaxed">
              An innovative leader who understands real-world problems and identifies where AI can be
              applied effectively. Creative, analytical, and solution-oriented — I build intelligent
              systems and act as a light AI consultant, translating problems into impactful AI solutions.
            </p>
            <p className="mt-5 text-sm italic text-foreground/70 border-l-4 border-[#0065F8] pl-4 py-1">
              "If you never bleed, you never gonna grow."
            </p>
            
            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-full bg-gradient-brand text-white font-semibold shadow-glow hover:translate-y-[-2px] transition-all duration-300"
              >
                Hire me ↗
              </a>
              <a
                href="#cv"
                className="px-8 py-3.5 rounded-full border border-border bg-white font-semibold hover:border-[#0065F8] hover:text-[#0065F8] transition-all duration-300 shadow-sm"
              >
                Download CV ↓
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex gap-4">
              <a href="https://github.com/erenmenn" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white border border-border text-slate-500 hover:text-[#0065F8] hover:border-[#0065F8]/40 hover:shadow-sm transition-all hover:-translate-y-1">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/emirsyah-rafsanjani" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white border border-border text-slate-500 hover:text-[#0065F8] hover:border-[#0065F8]/40 hover:shadow-sm transition-all hover:-translate-y-1">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/emirzyah" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white border border-border text-slate-500 hover:text-[#E1306C] hover:border-[#E1306C]/40 hover:shadow-sm transition-all hover:-translate-y-1">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:emirune2@gmail.com" className="p-3 rounded-full bg-white border border-border text-slate-500 hover:text-[#EA4335] hover:border-[#EA4335]/40 hover:shadow-sm transition-all hover:-translate-y-1">
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Stat Grid */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              {[
                { k: "3.93", v: "IPK Score" },
                { k: "24+", v: "Tools Mastery" },
                { k: "11+", v: "AI Projects" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="rounded-3xl border border-[#0065F8]/10 bg-white/60 backdrop-blur-md p-5 shadow-[0_4px_24px_rgba(0,101,248,0.04)] hover:shadow-[0_8px_32px_rgba(0,101,248,0.1)] transition-shadow duration-300"
                >
                  <div className="text-3xl font-black tracking-tight text-gradient-brand">{s.k}</div>
                  <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 mt-2">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Portrait (Transparent) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative mx-auto w-full max-w-md lg:max-w-lg z-10"
          >
            {/* Orbiting Glow Orbs around the circle */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-10%] z-0 pointer-events-none"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 size-24 rounded-full bg-[#00CAFF] blur-[30px] opacity-70" />
              <div className="absolute bottom-10 right-0 size-32 rounded-full bg-[#4300FF] blur-[40px] opacity-60" />
              <div className="absolute top-1/3 -left-8 size-20 rounded-full bg-[#0065F8] blur-[25px] opacity-70" />
            </motion.div>

            {/* Circular Frame */}
            <div className="relative z-10 aspect-square rounded-full overflow-hidden border-[6px] border-white/60 shadow-[0_20px_60px_-15px_rgba(0,101,248,0.4)] bg-gradient-to-b from-blue-50/80 to-indigo-100/80 backdrop-blur-md flex items-end justify-center pt-8">
              <img
                src={portraitTransparent}
                alt="Emirsyah Rafsanjani — AI Engineer"
                className="w-[125%] max-w-none h-auto block object-contain hover:scale-[1.05] transition-transform duration-500 drop-shadow-2xl translate-y-[2%]"
              />
            </div>

            {/* Floating Tags */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 -left-4 px-4 py-2 rounded-full bg-white/95 backdrop-blur shadow-lg border border-[#0065F8]/10 text-xs font-mono font-bold text-[#0065F8] z-20"
            >
              <span className="inline-block size-2 rounded-full bg-[#00FFDE] mr-2 animate-pulse shadow-[0_0_8px_#00FFDE]" />
              Available for work
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-1/4 -right-4 px-5 py-2.5 rounded-2xl bg-[#0065F8] shadow-glow text-xs font-mono text-white z-20 font-medium"
            >
              @emirzyah
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full bg-white border border-border shadow-[0_8px_32px_rgba(0,101,248,0.15)] text-sm font-bold z-20 whitespace-nowrap"
            >
              <span className="font-serif italic text-base text-[#4300FF] font-normal">AI</span> Engineer ✦ PM
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}