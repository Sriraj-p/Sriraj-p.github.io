import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { identity } from "../data/content";

function Headshot() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="photo-frame aspect-[4/5] relative" data-magnetic>
      {/* accent corner brackets */}
      <span className="photo-corner" style={{ top: -1, left: -1, borderTopWidth: 2, borderLeftWidth: 2 }} />
      <span className="photo-corner" style={{ top: -1, right: -1, borderTopWidth: 2, borderRightWidth: 2 }} />
      <span className="photo-corner" style={{ bottom: -1, left: -1, borderBottomWidth: 2, borderLeftWidth: 2 }} />
      <span className="photo-corner" style={{ bottom: -1, right: -1, borderBottomWidth: 2, borderRightWidth: 2 }} />

      {!failed ? (
        <img src="/headshot.jpg" alt="Sriraj Paruchuru" onError={() => setFailed(true)} />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 overflow-hidden">
          <div className="scanline" />
          <span
            className="font-mono font-bold leading-none"
            style={{ fontSize: "clamp(4rem, 8vw, 7rem)", color: "var(--acc)" }}
          >
            S/P
          </span>
          <span className="mono-label">portrait loading…</span>
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 px-4 py-3 flex items-center justify-between" style={{ background: "rgba(6,6,6,0.7)", backdropFilter: "blur(8px)" }}>
        <span className="mono-label" style={{ color: "var(--ink-dim)" }}>fig. 01 — the engineer</span>
        <span className="mono-label tick" style={{ color: "var(--acc)" }}>52.45°N, 1.93°W</span>
      </div>
    </div>
  );
}

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section id="about" className="py-28 md:py-40">
      <div className="max-w-[1600px] mx-auto px-6 md:px-16" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="mono-label"><span className="tick">01</span> / About</span>
          <div className="h-px flex-1" style={{ background: "var(--line-soft)" }} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 max-w-sm lg:max-w-none w-full mx-auto lg:mx-0"
          >
            <Headshot />
          </motion.div>

          {/* bio */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="heading-md"
            >
              Production engineer by trade,{" "}
              <span className="serif-it" style={{ color: "var(--acc)" }}>competitor</span> by instinct.
            </motion.h2>

            {identity.bio.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="text-base md:text-lg leading-relaxed font-light max-w-3xl"
                style={{ color: "var(--ink-dim)" }}
              >
                {para}
              </motion.p>
            ))}

            {/* facts */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-px"
              style={{ background: "var(--line-soft)", border: "1px solid var(--line-soft)" }}
            >
              {identity.facts.map((fact) => (
                <div key={fact.label} className="p-5 flex flex-col gap-1.5" style={{ background: "var(--bg)" }}>
                  <span className="mono-label">{fact.label}</span>
                  <span className="text-sm font-medium" style={{ color: "var(--ink)" }}>{fact.value}</span>
                </div>
              ))}
            </motion.div>

            {/* stacks */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-4"
            >
              {identity.stacks.map((stack) => (
                <div key={stack.label} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 pb-4" style={{ borderBottom: "1px solid var(--line-soft)" }}>
                  <span className="mono-label w-28 shrink-0" style={{ color: "var(--acc)" }}>{stack.label}</span>
                  <span className="font-mono text-xs leading-relaxed" style={{ color: "var(--ink-dim)" }}>{stack.items}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
