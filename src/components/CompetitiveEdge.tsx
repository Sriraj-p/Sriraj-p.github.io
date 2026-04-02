import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const hackathons = [
  {
    rank: "4th",
    rankOrdinal: "Place",
    event: "Google AI Playground",
    location: "London, UK",
    year: "Dec 2025",
    description:
      "Placed 4th of 15 teams at Google's London office. Built a multimodal AI application using Google Gemini and Cloud tools in a hands-on team challenge — competing against teams from across Europe in a real-time engineering sprint.",
    tech: ["Gemini 2.5 Flash", "Google AI Studio", "Multimodal AI", "Python", "WebRTC"],
    organizer: "Google",
    icon: "🏆",
  },
  {
    rank: "5th",
    rankOrdinal: "Place",
    event: "Google Cloud Agentic AI",
    location: "University of Birmingham",
    year: "Mar 2026",
    description:
      "Placed 5th of 40+ teams as a solo competitor. Built CrackD — a multi-agent interview prep platform using Google ADK, Vertex AI (Gemini 2.5 Flash), and BigQuery, implementing tool-calling agents for resume analysis and mock interviews with RAG-based policy retrieval.",
    tech: ["Google ADK", "Vertex AI", "Gemini 2.5 Flash", "BigQuery", "Cloud Run", "FastAPI"],
    organizer: "Google Cloud",
    icon: "🥇",
  },
];

const capabilities = [
  { label: "Large Language Models", detail: "GPT-4o, Gemini 2.5, LLaMA" },
  { label: "Computer Vision", detail: "Medical imaging, real-time detection" },
  { label: "MLOps & Deployment", detail: "Docker, Kubernetes, GCP" },
  { label: "Agentic Systems", detail: "LangChain, Google ADK, Vertex AI" },
  { label: "Deep Learning", detail: "PyTorch, TensorFlow, Keras" },
  { label: "Full-Stack Arch", detail: "React, FastAPI, Node.js" },
];

export function CompetitiveEdge() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="edge" className="section-full py-32">
      <div className="max-w-[1600px] mx-auto px-8 md:px-16">
        {/* Header */}
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="section-label">Recognition</span>
            <div className="h-px w-16 bg-white/10" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="heading-lg text-white mb-20"
          >
            Competitive
            <br />
            <span style={{ WebkitTextStroke: "1px rgba(255,255,255,0.25)", color: "transparent" }}>
              Edge
            </span>
          </motion.h2>
        </div>

        {/* Hackathon cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">
          {hackathons.map((hack, i) => (
            <motion.div
              key={hack.event}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="edge-card p-8 flex flex-col gap-6"
              data-magnetic
            >
              {/* Rank display */}
              <div className="flex items-start justify-between">
                <div>
                  <div className="rank-badge">{hack.rank}</div>
                  <div className="text-white/30 text-xs tracking-[0.2em] uppercase -mt-1">{hack.rankOrdinal}</div>
                </div>
                <div className="text-right">
                  <div className="text-white/20 text-xs tracking-[0.15em] uppercase">{hack.organizer}</div>
                  <div className="text-white/15 text-xs">{hack.year}</div>
                </div>
              </div>

              {/* Event info */}
              <div>
                <h3 className="text-white text-xl font-bold mb-1">{hack.event}</h3>
                <p className="text-white/30 text-sm tracking-wide">{hack.location}</p>
              </div>

              <p className="text-white/45 text-sm leading-relaxed">{hack.description}</p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                {hack.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Capabilities grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="section-label">Core Capabilities</span>
            <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.05)" }} />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.07 }}
                className="border-l border-t p-6 hover:bg-white/[0.02] transition-colors duration-300"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
                data-magnetic
              >
                <div className="text-white text-sm font-semibold mb-2 leading-tight">{cap.label}</div>
                <div className="text-white/30 text-xs leading-relaxed">{cap.detail}</div>
              </motion.div>
            ))}
          </div>
          <div className="border-l border-b" style={{ borderColor: "rgba(255,255,255,0.06)", height: "1px", marginTop: "-1px" }} />
        </motion.div>
      </div>
    </section>
  );
}
