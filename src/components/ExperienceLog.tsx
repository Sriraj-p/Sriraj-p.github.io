import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiences } from "../data/content";

export function ExperienceLog() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="log" className="py-28 md:py-40">
      <div className="max-w-[1600px] mx-auto px-6 md:px-16" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="mono-label"><span className="tick">05</span> / The Log</span>
          <div className="h-px flex-1" style={{ background: "var(--line-soft)" }} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="heading-lg mb-20 md:mb-28"
        >
          Where I've
          <br />
          <span className="outline-text">been building.</span>
        </motion.h2>

        <div className="relative">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1 top-0 bottom-0 origin-top w-px"
            style={{ background: "linear-gradient(180deg, var(--acc-dim) 0%, var(--line-soft) 100%)" }}
          />

          <div className="flex flex-col gap-20 pl-10 md:pl-14">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="timeline-dot absolute" style={{ left: i === 0 ? "-40px" : "-40px", top: "8px", marginLeft: "0px" }} />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16">
                  <div className="lg:col-span-3 flex flex-col gap-2">
                    <span className="mono-label" style={{ color: "var(--ink-dim)" }}>{exp.period}</span>
                    <span className="mono-label">{exp.location}</span>
                    <span
                      className="mono-label w-fit mt-2 px-2 py-1"
                      style={{
                        border: i === 0 ? "1px solid rgba(200,255,0,0.3)" : "1px solid var(--line)",
                        color: i === 0 ? "var(--acc)" : "var(--ink-faint)",
                      }}
                    >
                      {exp.type}
                    </span>
                  </div>

                  <div className="lg:col-span-9">
                    <h3 className="text-2xl md:text-3xl font-bold mb-1" style={{ color: "var(--ink)" }}>{exp.company}</h3>
                    <p className="serif-it text-lg mb-6" style={{ color: "var(--ink-faint)" }}>{exp.role}</p>
                    <p className="text-sm md:text-base leading-relaxed font-light mb-6 max-w-3xl" style={{ color: "var(--ink-dim)" }}>
                      {exp.description}
                    </p>
                    <ul className="flex flex-col gap-3">
                      {exp.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-3 text-sm font-light" style={{ color: "var(--ink-dim)" }}>
                          <span style={{ color: "var(--acc-dim)" }} className="mt-0.5 shrink-0 font-mono">→</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
