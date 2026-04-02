import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    index: "01",
    name: "TalentLens",
    tagline: "AI Resume Screener",
    description:
      "An intelligent recruitment acceleration platform powered by GPT-4o-mini and FastAPI. Parses, ranks, and explains resume-to-job-description fit with structured reasoning chains — reducing screening time by 80% while surfacing signal human reviewers miss.",
    tech: ["GPT-4o-mini", "FastAPI", "Python", "React", "LangChain", "PostgreSQL"],
    stats: [
      { label: "Screening Time", value: "↓80%" },
      { label: "Accuracy", value: "96.2%" },
      { label: "API Calls/min", value: "1.2K" },
    ],
    accentColor: "rgba(255,255,255,0.06)",
    borderColor: "rgba(255,255,255,0.1)",
    hasVideo: true,
  },
  {
    index: "02",
    name: "Medhealth",
    tagline: "Deep Learning Medical Imaging",
    description:
      "End-to-end deep learning pipelines for clinical-grade brain-tumor segmentation and pneumonia detection from chest X-rays. Achieves 94.1% diagnostic accuracy with 66% model compression for efficient Android deployment — enabling AI-assisted diagnostics in low-resource settings.",
    tech: ["PyTorch", "TensorFlow Lite", "OpenCV", "Android", "U-Net", "DICOM"],
    stats: [
      { label: "Segmentation Accuracy", value: "94.1%" },
      { label: "Model Compression", value: "66%" },
      { label: "Inference Time", value: "23ms" },
    ],
    accentColor: "rgba(255,255,255,0.04)",
    borderColor: "rgba(255,255,255,0.08)",
    hasVideo: false,
  },
  {
    index: "03",
    name: "Retail Anomaly Detection",
    tagline: "Causal Churn Intelligence",
    description:
      "A causal churn prediction pipeline processing 78,000 retail transactions to surface anomalous behavioral patterns before they become attrition. Combines structural causal models with gradient boosting — moving beyond correlation to expose the actual mechanisms driving customer departure.",
    tech: ["CausalML", "XGBoost", "Pandas", "Spark", "Airflow", "Plotly"],
    stats: [
      { label: "Transactions", value: "78K" },
      { label: "Churn Recall", value: "91%" },
      { label: "Causal Features", value: "34" },
    ],
    accentColor: "rgba(255,255,255,0.03)",
    borderColor: "rgba(255,255,255,0.07)",
    hasVideo: false,
  },
  {
    index: "04",
    name: "CrackD",
    tagline: "AI Interview Prep Platform",
    description:
      "Built solo at the Google Cloud Agentic AI Hackathon. Upload your CV + job description and get a brutally honest analysis plus a realistic mock interview with an AI that stays in character as a senior professional. Multi-agent system on Google ADK with Vertex AI RAG, Gemini 2.5 Flash, and BigQuery persistence.",
    tech: ["Google ADK", "Gemini 2.5 Flash", "Vertex AI", "BigQuery", "FastAPI", "Cloud Run"],
    stats: [
      { label: "Hackathon Rank", value: "5th" },
      { label: "Score Dimensions", value: "4" },
      { label: "Teams Beaten", value: "35+" },
    ],
    accentColor: "rgba(255,255,255,0.03)",
    borderColor: "rgba(255,255,255,0.07)",
    hasVideo: false,
    link: "https://crackd-737587697972.europe-west2.run.app",
  },
  {
    index: "05",
    name: "Find a Friend",
    tagline: "Optimal Travel Companion System",
    description:
      "Full-stack matching platform scoring compatibility across 6 dimensions including route/waypoint overlap for shared itinerary optimisation. Uses a genetic algorithm optimising companion pairings over ~150 profiles — applying evolutionary computation principles to explore the global solution space beyond greedy baselines.",
    tech: ["React", "Node.js", "AWS Lambda", "PostgreSQL", "Genetic Algorithm"],
    stats: [
      { label: "Profiles", value: "~150" },
      { label: "Dimensions", value: "6" },
      { label: "Algorithm", value: "GA" },
    ],
    accentColor: "rgba(255,255,255,0.03)",
    borderColor: "rgba(255,255,255,0.07)",
    hasVideo: false,
  },
];

function VideoPlaceholder({ isActive }: { isActive: boolean }) {
  return (
    <div className="video-placeholder">
      <div className="scanline" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 flex flex-col items-center gap-3"
      >
        <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center">
          <motion.div
            animate={isActive ? { scale: [1, 1.2, 1] } : { scale: 1 }}
            transition={{ duration: 1, repeat: Infinity }}
            className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-white/60 ml-1"
            style={{ borderLeftWidth: "14px" }}
          />
        </div>
        <span className="text-white/30 text-xs tracking-[0.2em] uppercase">60fps Demo Reel</span>
      </motion.div>
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="project-card"
      data-magnetic
    >
      <div
        className="relative border-t border-b"
        style={{
          borderColor: project.borderColor,
          background: hovered ? project.accentColor : "transparent",
          transition: "background 0.5s ease",
          padding: "clamp(40px, 6vw, 80px) 0",
        }}
      >
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: content */}
            <div className="lg:col-span-6 xl:col-span-5 flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <span className="counter-prefix pt-1">{project.index}</span>
                <div>
                  <h3 className="heading-md text-white mb-1">{project.name}</h3>
                  <p className="text-white/40 text-sm tracking-[0.1em] uppercase">{project.tagline}</p>
                </div>
              </div>

              <p className="text-white/50 text-base leading-relaxed font-light">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-6 pt-4 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                {project.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-black text-white stat-num">{stat.value}</div>
                    <div className="text-white/30 text-xs tracking-[0.15em] uppercase mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              {project.link ? (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-magnetic
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-3 text-sm text-white/40 hover:text-white/80 transition-colors cursor-none w-fit"
                >
                  <span className="tracking-[0.15em] uppercase text-xs">View Live</span>
                  <svg width="20" height="8" viewBox="0 0 20 8" fill="none">
                    <path d="M0 4H18M18 4L14 1M18 4L14 7" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </motion.a>
              ) : (
                <motion.button
                  data-magnetic
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-3 text-sm text-white/40 hover:text-white/80 transition-colors cursor-none w-fit"
                >
                  <span className="tracking-[0.15em] uppercase text-xs">View Project</span>
                  <svg width="20" height="8" viewBox="0 0 20 8" fill="none">
                    <path d="M0 4H18M18 4L14 1M18 4L14 7" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </motion.button>
              )}
            </div>

            {/* Right: visual */}
            <div className="lg:col-span-6 xl:col-span-7">
              {project.hasVideo ? (
                <VideoPlaceholder isActive={hovered} />
              ) : (
                <div
                  className="aspect-video relative overflow-hidden"
                  style={{
                    background: "#0a0a0a",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {/* Decorative code-like visual */}
                  <div className="absolute inset-0 p-6 font-mono text-xs text-white/10 leading-loose overflow-hidden select-none">
                    {project.index === "02" && (
                      <>
                        <div className="text-white/20">{"# Brain Tumor Segmentation"}</div>
                        <div>{"model = UNet(in_channels=1, out_channels=4)"}</div>
                        <div>{"optimizer = Adam(lr=1e-4, weight_decay=1e-5)"}</div>
                        <div className="mt-2">{"# Training loop"}</div>
                        <div>{"for epoch in range(200):"}</div>
                        <div className="pl-4">{"loss = dice_loss(pred, target)"}</div>
                        <div className="pl-4">{"accuracy = iou_score(pred, target)"}</div>
                        <div className="pl-4 text-white/30">{"# → 94.1% Dice coefficient"}</div>
                        <div className="mt-2">{"# Model compression"}</div>
                        <div>{"quantized = torch.quantization.quantize_dynamic("}</div>
                        <div className="pl-4">{"model, {nn.Linear}, dtype=torch.qint8"}</div>
                        <div>{")"}</div>
                        <div className="text-white/30">{"# 66% size reduction → Android ready"}</div>
                      </>
                    )}
                    {project.index === "03" && (
                      <>
                        <div className="text-white/20">{"# Causal Churn Pipeline"}</div>
                        <div>{"df = load_transactions(n=78_000)"}</div>
                        <div>{"causal_graph = build_dag(df)"}</div>
                        <div className="mt-2">{"# Structural Causal Model"}</div>
                        <div>{"scm = CausalModel("}</div>
                        <div className="pl-4">{"data=df, treatment='purchase_freq',"}</div>
                        <div className="pl-4">{"outcome='churn', graph=causal_graph"}</div>
                        <div>{")"}</div>
                        <div className="text-white/30">{"# ATE = -0.34 (p < 0.001)"}</div>
                        <div className="mt-2">{"model = XGBClassifier(n_estimators=500)"}</div>
                        <div>{"model.fit(X_causal, y_churn)"}</div>
                        <div className="text-white/30">{"# Recall: 91.3% | Precision: 88.7%"}</div>
                      </>
                    )}
                    {project.index === "04" && (
                      <>
                        <div className="text-white/20">{"# CrackD — Multi-Agent System"}</div>
                        <div>{"root_agent = Agent("}</div>
                        <div className="pl-4">{"model='gemini-2.5-flash',"}</div>
                        <div className="pl-4">{"sub_agents=[resume_analyst, interview_coach]"}</div>
                        <div>{")"}</div>
                        <div className="mt-2">{"# RAG corpus: STAR framework + ATS criteria"}</div>
                        <div>{"corpus = VertexAIRAG.create('crackd-knowledge')"}</div>
                        <div>{"corpus.upload(['star_framework.pdf', 'ats_guide.pdf'])"}</div>
                        <div className="mt-2 text-white/30">{"# BigQuery persistence"}</div>
                        <div>{"bq.insert('analysis_sessions', session_data)"}</div>
                        <div className="text-white/30">{"# Deployed on Cloud Run (min-instances=1)"}</div>
                      </>
                    )}
                    {project.index === "05" && (
                      <>
                        <div className="text-white/20">{"# Genetic Algorithm — Travel Matching"}</div>
                        <div>{"population = encode_pairings(profiles[:150])"}</div>
                        <div>{"fitness_fn = lambda p: compatibility_score(p, dims=6)"}</div>
                        <div className="mt-2">{"for generation in range(MAX_GEN):"}</div>
                        <div className="pl-4">{"selected = tournament_selection(population)"}</div>
                        <div className="pl-4">{"offspring = crossover(selected, rate=0.8)"}</div>
                        <div className="pl-4">{"mutated = mutate(offspring, rate=0.05)"}</div>
                        <div className="pl-4">{"population = elitism_replace(population, mutated)"}</div>
                        <div className="mt-2 text-white/30">{"# Dimensions: route, schedule, budget,"}</div>
                        <div className="text-white/30">{"# interests, pace, accommodation"}</div>
                      </>
                    )}
                  </div>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectVault() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="projects" className="section-full py-32">
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 mb-20">
        <div ref={headerRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="section-label">Selected Work</span>
            <div className="h-px w-16 bg-white/10" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="heading-lg text-white"
          >
            Project
            <br />
            <span style={{ WebkitTextStroke: "1px rgba(255,255,255,0.25)", color: "transparent" }}>
              Vault
            </span>
          </motion.h2>
        </div>
      </div>

      <div className="flex flex-col gap-0">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
