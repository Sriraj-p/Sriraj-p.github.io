import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { identity } from "../data/content";

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="contact" className="py-32 md:py-44 grid-bg relative overflow-hidden">
      <div
        className="absolute pointer-events-none"
        style={{
          width: "900px",
          height: "900px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(200,255,0,0.05) 0%, transparent 65%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="max-w-[1600px] mx-auto px-6 md:px-16 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-10"
        >
          <span className="mono-label"><span className="tick">06</span> / Transmission</span>
          <div className="h-px flex-1" style={{ background: "var(--line-soft)" }} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="heading-giant mb-14"
        >
          Let's build
          <br />
          something <span className="serif-it" style={{ color: "var(--acc)", letterSpacing: "-0.02em" }}>rare.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-12"
        >
          <div className="max-w-md">
            <p className="text-base leading-relaxed font-light mb-8" style={{ color: "var(--ink-dim)" }}>
              Open to ML engineering, product, and software roles — and to ambitious
              projects at the intersection of machine learning and product engineering.
              I reply fast.
            </p>
            <div className="flex flex-col gap-3">
              {[
                { href: `mailto:${identity.email}`, label: identity.email },
                { href: identity.linkedin, label: "LinkedIn", external: true },
                { href: identity.github, label: "GitHub", external: true },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  data-magnetic
                  className="flex items-center gap-3 group font-mono text-sm transition-colors"
                  style={{ color: "var(--ink-dim)" }}
                >
                  <span style={{ color: "var(--acc-dim)" }} className="transition-transform group-hover:translate-x-1">→</span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <motion.a
            href={`mailto:${identity.email}`}
            data-magnetic
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="btn-acc"
          >
            Start a conversation
            <svg width="20" height="8" viewBox="0 0 20 8" fill="none">
              <path d="M0 4H18M18 4L14 1M18 4L14 7" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-28 pt-8"
          style={{ borderTop: "1px solid var(--line-soft)" }}
        >
          <span className="mono-label">Sriraj Paruchuru © 2026 — Birmingham, UK</span>
          <span className="mono-label">
            designed & engineered by hand · react + canvas · press <span className="tick">`</span> for terminal
          </span>
        </motion.div>
      </div>
    </section>
  );
}
