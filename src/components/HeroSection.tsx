import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const firstName = "SRIRAJ";
const lastName = "PARUCHURU";

function ShatterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const chars = text.split("");
  return (
    <span className="inline-flex">
      {chars.map((char, i) => (
        <motion.span
          key={i}
          className="hero-char"
          initial={{
            y: char === " " ? 0 : Math.random() > 0.5 ? -120 : 120,
            opacity: 0,
            rotateX: Math.random() > 0.5 ? 90 : -90,
            scaleY: 0.3,
          }}
          animate={{ y: 0, opacity: 1, rotateX: 0, scaleY: 1 }}
          transition={{
            duration: 0.9,
            delay: delay + i * 0.04,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      if (glowRef.current) {
        gsap.to(glowRef.current, {
          left: `${x * 100}%`,
          top: `${y * 100}%`,
          duration: 1.2,
          ease: "power2.out",
        });
      }
    };

    hero.addEventListener("mousemove", handleMouseMove);
    return () => hero.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="section-full flex flex-col justify-center relative overflow-hidden grid-bg"
      style={{ minHeight: "100vh", paddingTop: "80px" }}
    >
      {/* Ambient glow */}
      <div
        ref={glowRef}
        className="absolute pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
          left: "50%",
          top: "50%",
        }}
      />

      <div className="max-w-[1600px] mx-auto px-8 md:px-16 w-full">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="section-label">Portfolio 2025</span>
          <div className="h-px flex-1 max-w-16 bg-white/10" />
        </motion.div>

        {/* Main headline */}
        <div className="mb-8 overflow-hidden">
          <h1 className="heading-xl text-white block leading-none">
            <ShatterText text={firstName} delay={0.4} />
          </h1>
          <h1 className="heading-xl text-white block leading-none" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)", color: "transparent" }}>
            <ShatterText text={lastName} delay={0.7} />
          </h1>
        </div>

        {/* Sub headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <p className="text-white/60 text-lg md:text-xl font-light tracking-wide mb-2">
              Master's in AI & ML
            </p>
            <p className="text-white/40 text-base md:text-lg font-light tracking-wide">
              Full-Stack Architect
            </p>
          </div>

          <div className="flex items-center gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="text-right"
            >
              <div className="text-4xl font-black text-white">94.1%</div>
              <div className="text-white/30 text-xs tracking-[0.2em] uppercase mt-1">Model Accuracy</div>
            </motion.div>
            <div className="w-px h-12 bg-white/10" />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.7 }}
              className="text-right"
            >
              <div className="text-4xl font-black text-white">78K</div>
              <div className="text-white/30 text-xs tracking-[0.2em] uppercase mt-1">Transactions</div>
            </motion.div>
            <div className="w-px h-12 bg-white/10" />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="text-right"
            >
              <div className="text-4xl font-black text-white">4th</div>
              <div className="text-white/30 text-xs tracking-[0.2em] uppercase mt-1">Google AI London</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="section-label">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
