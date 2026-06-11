import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NeuralCanvas } from "./NeuralCanvas";
import { identity } from "../data/content";

function KineticText({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) {
  return (
    <span className={`inline-flex ${className}`}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="hero-char"
          initial={{ y: "110%", rotateX: -80, opacity: 0 }}
          animate={{ y: "0%", rotateX: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: delay + i * 0.035, ease: [0.22, 1, 0.36, 1] }}
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </span>
  );
}

function RoleRotator() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % identity.roles.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="inline-block relative h-[1.4em] overflow-hidden align-bottom" style={{ minWidth: "12ch" }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="serif-it block whitespace-nowrap"
          style={{ color: "var(--acc)" }}
        >
          {identity.roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const heroStats = [
  { value: "1st", label: "Boffin's Den · Champion + MVP" },
  { value: "5th/40+", label: "Agentic AI Hackathon · Solo" },
  { value: "4th/15", label: "Google AI Playground · London" },
];

export function HeroSection() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <NeuralCanvas />
      {/* bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(transparent, var(--bg))" }}
      />

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-16 w-full pt-28 pb-24">
        {/* top meta row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-between mb-10 md:mb-14"
        >
          <span className="mono-label">
            <span className="tick">●</span>&nbsp;&nbsp;AI/ML Engineer — {identity.location}
          </span>
          <span className="mono-label hidden md:block">SHIPPING SINCE 2024</span>
        </motion.div>

        {/* name */}
        <h1 className="heading-giant block" style={{ perspective: "800px" }}>
          <span className="block overflow-hidden pb-1">
            <KineticText text={identity.firstName} delay={0.35} />
          </span>
          <span className="block overflow-hidden pb-2 outline-text">
            <KineticText text={identity.lastName} delay={0.6} />
          </span>
        </h1>

        {/* role line */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 md:mt-12 text-xl md:text-3xl font-light"
          style={{ color: "var(--ink-dim)" }}
        >
          He <RoleRotator />
          <span className="hidden sm:inline"> — end to end, idea to production.</span>
        </motion.p>

        {/* stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-px"
          style={{ background: "var(--line-soft)", border: "1px solid var(--line-soft)" }}
        >
          {heroStats.map((stat, i) => (
            <div key={stat.label} className="flex flex-col gap-2 p-6 md:p-8" style={{ background: "var(--bg)" }}>
              <span
                className="stat-num text-4xl md:text-5xl font-bold"
                style={{ color: i === 0 ? "var(--acc)" : "var(--ink)" }}
              >
                {stat.value}
              </span>
              <span className="mono-label" style={{ letterSpacing: "0.18em" }}>{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span className="mono-label">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10"
          style={{ background: "linear-gradient(var(--acc-dim), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
