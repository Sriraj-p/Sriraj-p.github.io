import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    company: "Norstella",
    role: "Software Developer",
    period: "Apr 2024 — Sep 2025",
    location: "Remote",
    description:
      "Developed and delivered full-stack pharmaceutical analytics applications in collaboration with multi-team verticals, handling all phases from requirements to deployment — serving Fortune 500 clients across Strategic Intelligence & Enterprise Value Platform teams.",
    highlights: [
      "Architected scalable React.js, TypeScript, Node.js, and AWS Lambda microservices with PostgreSQL backends",
      "Automated reporting and analytics features including Excel export, S3 file handling, and Lambda-based integrations",
      "Enhanced security with Auth0 SSO, JWT token management, and role-based access controls for pharmaceutical standards",
      "Led CI/CD and QA automation using Docker, Azure DevOps, Playwright, and Jest — supporting 3-4 day release cycles",
    ],
    tech: ["React", "TypeScript", "Node.js", "AWS Lambda", "PostgreSQL", "Auth0", "Docker", "Azure DevOps"],
    type: "work",
  },
  {
    company: "University of Birmingham",
    role: "MSc AI & Machine Learning",
    period: "Sep 2025 — Sep 2026",
    location: "Birmingham, UK",
    description:
      "Pursuing a Master's degree in Artificial Intelligence and Machine Learning — combining deep academic study with practical hackathon competition, building production-grade AI systems alongside coursework.",
    highlights: [
      "4th place at Google AI Playground Hackathon, London (December 2025)",
      "5th place at Google Cloud Agentic AI Hackathon as solo competitor (March 2026)",
      "LangChain, LangGraph & LangSmith Workshop — PwC, University of Birmingham (February 2026)",
      "Built 3 production AI projects: TalentLens, Medhealth, and CrackD",
    ],
    tech: ["Python", "PyTorch", "TensorFlow", "Gemini 2.5", "Google ADK", "Vertex AI", "LangChain"],
    type: "education",
  },
  {
    company: "Vellore Institute of Technology",
    role: "B.Tech Computer Science & Engineering",
    period: "Jul 2019 — Sep 2023",
    location: "Andhra Pradesh, India",
    description:
      "Bachelor's degree in Computer Science and Engineering, building a strong foundation in algorithms, data structures, and software engineering principles that underpins the full-stack and ML work today.",
    highlights: [
      "Core CS fundamentals: algorithms, data structures, OS, networks",
      "Specialisation in software engineering and system design",
      "Graduated and immediately joined Norstella as a Software Developer",
    ],
    tech: ["Java", "Python", "C++", "SQL", "Data Structures", "Algorithms"],
    type: "education",
  },
];

export function ExperienceLog() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="experience" className="section-full py-32">
      <div className="max-w-[1600px] mx-auto px-8 md:px-16">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="section-label">Background</span>
            <div className="h-px w-16 bg-white/10" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="heading-lg text-white mb-24"
          >
            Experience
            <br />
            <span style={{ WebkitTextStroke: "1px rgba(255,255,255,0.25)", color: "transparent" }}>
              Log
            </span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-0 bottom-0 origin-top"
            style={{
              width: "1px",
              background: "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%)",
              marginLeft: "3px",
            }}
          />

          <div className="flex flex-col gap-20 pl-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* Timeline dot */}
                <div
                  className="timeline-dot absolute"
                  style={{ left: "-48px", top: "8px" }}
                />

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                  {/* Left meta */}
                  <div className="lg:col-span-3">
                    <div className="text-white/25 text-xs tracking-[0.2em] uppercase mb-2">{exp.period}</div>
                    <div className="text-white/20 text-xs tracking-[0.15em] uppercase">{exp.location}</div>
                    <div className="mt-4">
                      <span
                        className="text-xs tracking-[0.15em] uppercase px-2 py-1"
                        style={{
                          border: "1px solid rgba(255,255,255,0.1)",
                          color: "rgba(255,255,255,0.3)",
                          fontSize: "0.6rem",
                        }}
                      >
                        {exp.type === "work" ? "Industry" : "Academia"}
                      </span>
                    </div>
                  </div>

                  {/* Right content */}
                  <div className="lg:col-span-9">
                    <h3 className="text-white text-2xl font-bold mb-1">{exp.company}</h3>
                    <p className="text-white/40 text-sm tracking-[0.1em] uppercase mb-6">{exp.role}</p>
                    <p className="text-white/50 text-base leading-relaxed mb-6">{exp.description}</p>

                    <ul className="flex flex-col gap-3 mb-6">
                      {exp.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-3 text-white/40 text-sm">
                          <span className="text-white/20 mt-0.5 flex-shrink-0">—</span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span key={t} className="tech-tag">{t}</span>
                      ))}
                    </div>
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
