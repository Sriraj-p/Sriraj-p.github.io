// ─────────────────────────────────────────────────────────────
// Single source of truth for everything on the site.
// Edit this file to change copy — no need to touch components.
// ─────────────────────────────────────────────────────────────

export const identity = {
  firstName: "SRIRAJ",
  lastName: "PARUCHURU",
  email: "sriraj.paruchuru@gmail.com",
  github: "https://github.com/Sriraj-p",
  githubUser: "Sriraj-p",
  linkedin: "https://linkedin.com/in/srirajparuchuru",
  location: "Birmingham, UK",
  status: "Open to work",
  roles: [
    "builds multi-agent systems",
    "ships full-stack products",
    "wins Google hackathons",
    "trains deep neural nets",
    "turns ideas into demos",
  ],
  bio: [
    "I'm an AI/ML engineer and full-stack architect. Two years shipping pharmaceutical analytics platforms for Fortune 500 clients at Norstella, now finishing an MSc in AI & Machine Learning at the University of Birmingham.",
    "I compete the way I build: fast, end-to-end, and solo when I have to be. In March 2026 I walked into a Google Cloud hackathon alone, placed 5th of 40+ teams, then came back a week later and won the whole thing — Champion and Most Valuable Product — pitching to senior Google staff.",
  ],
  facts: [
    { label: "Currently", value: "MSc AI & ML — University of Birmingham" },
    { label: "Previously", value: "Software Developer — Norstella" },
    { label: "Based in", value: "Birmingham, United Kingdom" },
    { label: "Looking for", value: "ML Engineering · Product · SWE" },
  ],
  stacks: [
    { label: "AI / ML", items: "PyTorch · TensorFlow · Gemini · GPT-4o · LangChain · Google ADK · Vertex AI · RAG" },
    { label: "Full-Stack", items: "React · TypeScript · Node.js · FastAPI · PostgreSQL · AWS Lambda" },
    { label: "Infra", items: "Docker · GCP · Cloud Run · BigQuery · Azure DevOps · CI/CD" },
  ],
};

export type Project = {
  index: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  stats: { label: string; value: string }[];
  repo?: string;
  live?: string;
  badge?: string;
};

export const projects: Project[] = [
  {
    index: "01",
    name: "CrackD",
    tagline: "AI interview-prep platform",
    badge: "🏆 Hackathon Champion",
    description:
      "Built solo at the Google Cloud Agentic AI Hackathon, then pitched to senior Google staff at the Boffin's Den final — and won Champion + Most Valuable Product. Upload your CV and a job description: a multi-agent system on Google ADK delivers a brutally honest fit analysis, then runs a realistic mock interview with an AI that stays in character as a senior professional.",
    tech: ["Google ADK", "Gemini 2.5 Flash", "Vertex AI RAG", "BigQuery", "FastAPI", "Cloud Run"],
    stats: [
      { label: "Boffin's Den Final", value: "1st" },
      { label: "Qualifier (40+ teams)", value: "5th" },
      { label: "Built by", value: "1 person" },
    ],
    repo: "https://github.com/Sriraj-p/CrackD",
    live: "https://crackd-737587697972.europe-west2.run.app",
  },
  {
    index: "02",
    name: "TalentLens",
    tagline: "AI resume screener",
    description:
      "An intelligent recruitment acceleration platform powered by GPT-4o-mini and FastAPI. Parses, ranks, and explains resume-to-job-description fit with structured reasoning chains — reducing screening time by 80% while surfacing signal human reviewers miss.",
    tech: ["GPT-4o-mini", "FastAPI", "Python", "React", "LangChain", "PostgreSQL"],
    stats: [
      { label: "Screening Time", value: "↓80%" },
      { label: "Accuracy", value: "96.2%" },
      { label: "API Calls/min", value: "1.2K" },
    ],
  },
  {
    index: "03",
    name: "Medhealth",
    tagline: "Deep learning medical imaging",
    description:
      "End-to-end deep learning pipelines for clinical-grade brain-tumor segmentation and pneumonia detection from chest X-rays. Achieves 94.1% diagnostic accuracy with 66% model compression for efficient Android deployment — enabling AI-assisted diagnostics in low-resource settings.",
    tech: ["PyTorch", "TensorFlow Lite", "OpenCV", "U-Net", "Android", "DICOM"],
    stats: [
      { label: "Segmentation Accuracy", value: "94.1%" },
      { label: "Model Compression", value: "66%" },
      { label: "Inference Time", value: "23ms" },
    ],
  },
  {
    index: "04",
    name: "Retail Anomaly Detection",
    tagline: "Causal churn intelligence",
    description:
      "A causal churn prediction pipeline processing 78,000 retail transactions to surface anomalous behavioural patterns before they become attrition. Combines structural causal models with gradient boosting — moving beyond correlation to expose the actual mechanisms driving customer departure.",
    tech: ["CausalML", "XGBoost", "Pandas", "Spark", "Airflow", "Plotly"],
    stats: [
      { label: "Transactions", value: "78K" },
      { label: "Churn Recall", value: "91%" },
      { label: "Causal Features", value: "34" },
    ],
    repo: "https://github.com/Sriraj-p/retail-behavioural-anomaly-detection",
  },
  {
    index: "05",
    name: "Find a Friend",
    tagline: "Optimal travel companion system",
    description:
      "Full-stack matching platform scoring compatibility across 6 dimensions including route and waypoint overlap for shared itinerary optimisation. A genetic algorithm evolves companion pairings over ~150 profiles — evolutionary computation exploring the global solution space beyond greedy baselines.",
    tech: ["React", "Node.js", "AWS Lambda", "PostgreSQL", "Genetic Algorithm"],
    stats: [
      { label: "Profiles", value: "~150" },
      { label: "Dimensions", value: "6" },
      { label: "Algorithm", value: "GA" },
    ],
  },
];

export const wins = [
  {
    rank: "1st",
    title: "Boffin's Den — Champion + Most Valuable Product",
    org: "Google Cloud · University of Birmingham",
    date: "Mar 2026",
    headline: true,
    description:
      "Dragon's-Den-style pitch final of the Google Cloud Agentic AI Hackathon. Pitched CrackD to a panel of senior Google staff and alumni judges — took both the Champion title and the Most Valuable Product award. Solo, against 40+ teams.",
    tags: ["Solo competitor", "Live pitch", "Google judges", "Double award"],
  },
  {
    rank: "5th",
    title: "Google Cloud Agentic AI Hackathon — Qualifier",
    org: "Google Cloud · University of Birmingham",
    date: "Mar 2026",
    headline: false,
    description:
      "Qualifying round, 40+ teams. Built BigQueryBrummies — a multi-agent banking CRM for Cymbal Bank on Google ADK, Vertex AI Gemini 2.5 Flash, BigQuery, RAG, and Google Maps MCP. As a one-person team.",
    tags: ["Google ADK", "Multi-agent", "RAG", "MCP"],
  },
  {
    rank: "4th",
    title: "Google AI Playground Hackathon",
    org: "Google · London Office",
    date: "Dec 2025",
    headline: false,
    description:
      "Placed 4th of 15 teams at Google's London office with team BrumMind — a multimodal Gemini application built in a real-time engineering sprint against teams from across Europe.",
    tags: ["Gemini", "Multimodal", "Team BrumMind"],
  },
];

export const experiences = [
  {
    company: "Norstella",
    role: "Software Developer",
    period: "Apr 2024 — Sep 2025",
    location: "Remote",
    type: "Industry",
    description:
      "Full-stack pharmaceutical analytics applications for Fortune 500 clients across the Strategic Intelligence & Enterprise Value Platform teams — owning features from requirements to deployment.",
    highlights: [
      "Architected scalable React, TypeScript, Node.js, and AWS Lambda microservices with PostgreSQL backends",
      "Automated reporting and analytics: Excel export, S3 file handling, Lambda-based integrations",
      "Hardened security with Auth0 SSO, JWT management, and role-based access for pharma standards",
      "Drove CI/CD and QA automation with Docker, Azure DevOps, Playwright, and Jest — 3–4 day release cycles",
    ],
  },
  {
    company: "University of Birmingham",
    role: "MSc Artificial Intelligence & Machine Learning",
    period: "Sep 2025 — Sep 2026",
    location: "Birmingham, UK",
    type: "Academia",
    description:
      "Deep academic study paired with relentless practical competition — building production-grade AI systems alongside coursework.",
    highlights: [
      "Champion + Most Valuable Product — Boffin's Den final, Google Cloud Agentic AI Hackathon (Mar 2026)",
      "4th place — Google AI Playground Hackathon, Google London (Dec 2025)",
      "LangChain, LangGraph & LangSmith Workshop — PwC × University of Birmingham (Feb 2026)",
      "Shipped TalentLens, Medhealth, and CrackD alongside full-time study",
    ],
  },
  {
    company: "Vellore Institute of Technology",
    role: "B.Tech Computer Science & Engineering",
    period: "Jul 2019 — Sep 2023",
    location: "Andhra Pradesh, India",
    type: "Academia",
    description:
      "Bachelor's in Computer Science — algorithms, data structures, operating systems, networks, and the system-design foundation underneath everything above.",
    highlights: [
      "Core CS fundamentals: algorithms, data structures, OS, networks",
      "Specialisation in software engineering and system design",
      "Graduated straight into Norstella as a Software Developer",
    ],
  },
];

export const marqueeItems = [
  "Google Cloud Hackathon Champion",
  "Most Valuable Product",
  "MSc AI & ML — Birmingham",
  "4th — Google AI Playground, London",
  "Full-Stack Architect",
  "Multi-Agent Systems",
];
