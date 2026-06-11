import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { wins } from "../data/content";

export function Recognition() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const champion = wins.find((w) => w.headline)!;
  const others = wins.filter((w) => !w.headline);

  return (
    <section id="wins" className="py-28 md:py-40 grid-bg">
      <div className="max-w-[1600px] mx-auto px-6 md:px-16" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="mono-label"><span className="tick">03</span> / Trophy Cabinet</span>
          <div className="h-px flex-1" style={{ background: "var(--line-soft)" }} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="heading-lg mb-16 md:mb-24"
        >
          Tested against
          <br />
          <span className="outline-acc">the best.</span>
        </motion.h2>

        {/* champion headline card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="champion-card p-8 md:p-14 mb-6"
          data-magnetic
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-3 flex flex-col gap-1">
              <span
                className="stat-num font-bold leading-none"
                style={{ fontSize: "clamp(5rem, 10vw, 9rem)", color: "var(--acc)" }}
              >
                1<span style={{ fontSize: "0.4em" }}>ST</span>
              </span>
              <span className="mono-label mt-2">{champion.date} · {champion.org}</span>
            </div>
            <div className="lg:col-span-9 flex flex-col gap-5">
              <h3 className="text-2xl md:text-4xl font-bold leading-tight" style={{ color: "var(--ink)" }}>
                Champion <span className="serif-it font-normal" style={{ color: "var(--acc)" }}>+</span> Most Valuable Product
                <span className="block text-base md:text-xl font-normal mt-2" style={{ color: "var(--ink-dim)" }}>
                  Boffin's Den Final — Google Cloud Agentic AI Hackathon
                </span>
              </h3>
              <p className="text-sm md:text-base leading-relaxed font-light max-w-3xl" style={{ color: "var(--ink-dim)" }}>
                {champion.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {champion.tags.map((t) => (
                  <span key={t} className="tech-tag" style={{ borderColor: "rgba(200,255,0,0.3)", color: "var(--acc-dim)" }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* the rest */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {others.map((win, i) => (
            <motion.div
              key={win.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="panel-card p-8 flex flex-col gap-5"
              data-magnetic
            >
              <div className="flex items-start justify-between">
                <span className="stat-num text-5xl md:text-6xl font-bold outline-text">{win.rank}</span>
                <div className="text-right">
                  <div className="mono-label">{win.org}</div>
                  <div className="mono-label mt-1" style={{ color: "var(--ink-ghost)" }}>{win.date}</div>
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold" style={{ color: "var(--ink)" }}>{win.title}</h3>
              <p className="text-sm leading-relaxed font-light" style={{ color: "var(--ink-dim)" }}>{win.description}</p>
              <div className="flex flex-wrap gap-2 pt-3 mt-auto" style={{ borderTop: "1px solid var(--line-soft)" }}>
                {win.tags.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
