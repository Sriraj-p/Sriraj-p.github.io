import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { projects, type Project } from "../data/content";

const Arrow = () => (
  <svg width="20" height="8" viewBox="0 0 20 8" fill="none">
    <path d="M0 4H18M18 4L14 1M18 4L14 7" stroke="currentColor" strokeWidth="1" />
  </svg>
);

// Each card is sticky; as the next one scrolls over it, the one
// underneath scales down and dims — a deck-of-cards narrative.
function StackCard({ project, index, total }: { project: Project; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const brightness = useTransform(scrollYProgress, [0, 1], [1, 0.4]);
  const filter = useTransform(brightness, (b) => `brightness(${b})`);
  const isLast = index === total - 1;

  return (
    <div
      ref={ref}
      className="sticky"
      style={{ top: "84px", zIndex: index + 1, marginBottom: isLast ? 0 : "12vh" }}
    >
      <motion.article
        style={{
          scale: isLast ? 1 : scale,
          filter: isLast ? undefined : filter,
          // uniform height so a covered card never peeks out below the next one
          minHeight: "min(660px, 82vh)",
        }}
        className="panel-card relative overflow-hidden"
      >
        {/* giant ghost index */}
        <span
          className="absolute -top-6 right-4 md:right-10 font-bold select-none pointer-events-none stat-num"
          style={{
            fontSize: "clamp(8rem, 18vw, 16rem)",
            lineHeight: 1,
            WebkitTextStroke: "1px var(--line)",
            color: "transparent",
          }}
        >
          {project.index}
        </span>

        <div className="relative p-7 md:p-14 flex flex-col gap-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              {project.badge && (
                <span
                  className="inline-block mb-4 px-3 py-1.5 font-mono text-[0.62rem] tracking-[0.18em] uppercase font-bold"
                  style={{ background: "var(--acc)", color: "#000" }}
                >
                  {project.badge}
                </span>
              )}
              <h3 className="heading-md" style={{ color: "var(--ink)" }}>{project.name}</h3>
              <p className="serif-it text-lg md:text-2xl mt-1" style={{ color: "var(--ink-faint)" }}>
                {project.tagline}
              </p>
            </div>
            <span className="mono-label pt-2">{project.index} / {String(total).padStart(2, "0")}</span>
          </div>

          <p className="text-sm md:text-base leading-relaxed font-light max-w-3xl" style={{ color: "var(--ink-dim)" }}>
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="tech-tag">{t}</span>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-8 pt-6 max-w-2xl" style={{ borderTop: "1px solid var(--line-soft)" }}>
            {project.stats.map((stat, i) => (
              <div key={stat.label}>
                <div
                  className="stat-num text-2xl md:text-4xl font-bold"
                  style={{ color: project.badge && i === 0 ? "var(--acc)" : "var(--ink)" }}
                >
                  {stat.value}
                </div>
                <div className="mono-label mt-2" style={{ letterSpacing: "0.14em" }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {(project.repo || project.live) && (
            <div className="flex flex-wrap gap-8 pt-2">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-magnetic
                  className="flex items-center gap-3 font-mono text-[0.68rem] tracking-[0.18em] uppercase transition-colors"
                  style={{ color: "var(--acc)" }}
                >
                  Live demo <Arrow />
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-magnetic
                  className="flex items-center gap-3 font-mono text-[0.68rem] tracking-[0.18em] uppercase nav-link"
                >
                  Source <Arrow />
                </a>
              )}
            </div>
          )}
        </div>
      </motion.article>
    </div>
  );
}

export function ProjectStack() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true });

  return (
    <section id="work" className="py-28 md:py-40">
      <div className="max-w-[1600px] mx-auto px-6 md:px-16">
        <div ref={headerRef} className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="mono-label"><span className="tick">02</span> / Selected Work</span>
            <div className="h-px flex-1" style={{ background: "var(--line-soft)" }} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="heading-lg"
          >
            Things I've <span className="serif-it" style={{ color: "var(--acc)" }}>shipped</span>
            <br />
            <span className="outline-text">& sweated over.</span>
          </motion.h2>
        </div>

        <div className="relative">
          {projects.map((project, i) => (
            <StackCard key={project.name} project={project} index={i} total={projects.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
