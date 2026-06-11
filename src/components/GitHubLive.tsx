import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { identity } from "../data/content";

type Contribution = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };
type Repo = {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  pushed_at: string;
  fork: boolean;
};

const LEVEL_COLORS = [
  "rgba(240,239,233,0.07)",
  "rgba(200,255,0,0.22)",
  "rgba(200,255,0,0.45)",
  "rgba(200,255,0,0.7)",
  "rgba(200,255,0,1)",
];

// Repos that are just iterations of this site — not worth showcasing.
const HIDDEN_REPOS = new Set(["portfolio", "portfolio-v2", "portfolio-v3", "sriraj-p.github.io"]);

function useGitHubData() {
  const [contributions, setContributions] = useState<Contribution[] | null>(null);
  const [total, setTotal] = useState<number | null>(null);
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetch(`https://github-contributions-api.jogruber.de/v4/${identity.githubUser}?y=last`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data: { total: Record<string, number>; contributions: Contribution[] }) => {
        if (cancelled) return;
        setContributions(data.contributions);
        setTotal(data.total["lastYear"] ?? Object.values(data.total).reduce((a, b) => a + b, 0));
      })
      .catch(() => !cancelled && setFailed(true));

    fetch(`https://api.github.com/users/${identity.githubUser}/repos?sort=pushed&per_page=30`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data: Repo[]) => {
        if (cancelled) return;
        setRepos(
          data
            .filter((r) => !r.fork && !HIDDEN_REPOS.has(r.name.toLowerCase()))
            .slice(0, 4)
        );
      })
      .catch(() => !cancelled && setFailed(true));

    return () => {
      cancelled = true;
    };
  }, []);

  return { contributions, total, repos, failed };
}

export function GitHubLive() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const { contributions, total, repos, failed } = useGitHubData();

  return (
    <section id="github" className="py-28 md:py-40">
      <div className="max-w-[1600px] mx-auto px-6 md:px-16" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="mono-label"><span className="tick">04</span> / Live from GitHub</span>
          <div className="h-px flex-1" style={{ background: "var(--line-soft)" }} />
          <span className="mono-label hidden md:flex items-center gap-2">
            <span className="status-dot" style={{ width: 5, height: 5 }} />
            fetched at runtime
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="heading-lg mb-16"
        >
          Proof of <span className="serif-it" style={{ color: "var(--acc)" }}>work.</span>
        </motion.h2>

        {/* contributions heatmap */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="panel-card p-6 md:p-8 mb-6 overflow-x-auto"
        >
          <div className="flex items-center justify-between mb-6 min-w-[640px]">
            <span className="mono-label" style={{ color: "var(--ink-dim)" }}>
              {identity.githubUser} — last 12 months
            </span>
            {total !== null && (
              <span className="font-mono text-sm" style={{ color: "var(--acc)" }}>
                {total.toLocaleString()} contributions
              </span>
            )}
          </div>

          {contributions ? (
            <div className="contrib-grid min-w-[640px]">
              {contributions.map((day) => (
                <div
                  key={day.date}
                  className="contrib-cell"
                  title={`${day.date}: ${day.count} contributions`}
                  style={{ background: LEVEL_COLORS[day.level] }}
                />
              ))}
            </div>
          ) : (
            <div className="font-mono text-xs py-8 text-center" style={{ color: "var(--ink-faint)" }}>
              {failed ? (
                <a href={identity.github} target="_blank" rel="noopener noreferrer" style={{ color: "var(--acc)" }}>
                  view activity on github.com →
                </a>
              ) : (
                "loading contribution graph…"
              )}
            </div>
          )}
        </motion.div>

        {/* recent repos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {(repos ?? []).map((repo, i) => (
            <motion.a
              key={repo.name}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              data-magnetic
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 + i * 0.08 }}
              className="repo-card"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold" style={{ color: "var(--ink)" }}>{repo.name}</span>
                <span className="mono-label" style={{ color: "var(--acc)" }}>↗</span>
              </div>
              <p className="text-xs leading-relaxed flex-1" style={{ color: "var(--ink-faint)" }}>
                {repo.description ?? "No description — the code speaks for itself."}
              </p>
              <div className="flex items-center gap-4 pt-2" style={{ borderTop: "1px solid var(--line-soft)" }}>
                {repo.language && (
                  <span className="mono-label" style={{ color: "var(--ink-dim)" }}>{repo.language}</span>
                )}
                {repo.stargazers_count > 0 && (
                  <span className="mono-label" style={{ color: "var(--ink-dim)" }}>★ {repo.stargazers_count}</span>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
