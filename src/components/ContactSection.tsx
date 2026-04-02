import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="contact" className="section-full py-32 grid-bg relative overflow-hidden">
      {/* Large ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "800px",
          height: "800px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="max-w-[1600px] mx-auto px-8 md:px-16" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="section-label">Get in Touch</span>
          <div className="h-px w-16 bg-white/10" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="heading-xl text-white mb-12"
          style={{ fontSize: "clamp(3rem, 10vw, 12rem)" }}
        >
          Let's
          <br />
          <span style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)", color: "transparent" }}>
            Build.
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-12"
        >
          <div className="max-w-md">
            <p className="text-white/40 text-base leading-relaxed mb-8">
              Open to ML engineering roles, product strategy, and ambitious projects at the intersection of machine learning and product engineering.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:sriraj.paruchuru@gmail.com"
                data-magnetic
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300 cursor-none group"
              >
                <span className="text-white/20 group-hover:text-white/40 transition-colors">→</span>
                <span className="text-sm tracking-wide">sriraj.paruchuru@gmail.com</span>
              </a>
              <a
                href="https://linkedin.com/in/srirajparuchuru"
                target="_blank"
                rel="noopener noreferrer"
                data-magnetic
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300 cursor-none group"
              >
                <span className="text-white/20 group-hover:text-white/40 transition-colors">→</span>
                <span className="text-sm tracking-wide">LinkedIn</span>
              </a>
              <a
                href="https://github.com/Sriraj-p"
                target="_blank"
                rel="noopener noreferrer"
                data-magnetic
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300 cursor-none group"
              >
                <span className="text-white/20 group-hover:text-white/40 transition-colors">→</span>
                <span className="text-sm tracking-wide">GitHub</span>
              </a>
            </div>
          </div>

          <motion.a
            href="mailto:sriraj.paruchuru@gmail.com"
            data-magnetic
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-4 bg-white text-black px-10 py-5 font-bold text-sm tracking-[0.15em] uppercase cursor-none hover:bg-white/90 transition-colors"
          >
            Start a Conversation
            <svg width="20" height="8" viewBox="0 0 20 8" fill="none">
              <path d="M0 4H18M18 4L14 1M18 4L14 7" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-between mt-24 pt-8 border-t"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <span className="text-white/15 text-xs tracking-[0.2em] uppercase">
            Sriraj Paruchuru © 2025
          </span>
          <span className="text-white/15 text-xs tracking-[0.15em] uppercase">
            MSc AI & ML · Full-Stack Architect
          </span>
        </motion.div>
      </div>
    </section>
  );
}
