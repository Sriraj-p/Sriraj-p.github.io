import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { identity, projects, wins, experiences } from "../data/content";

type Line = { text: string; kind?: "cmd" | "acc" | "dim" };

const banner: Line[] = [
  { text: "sriraj.sys v2.0 — interactive shell", kind: "acc" },
  { text: 'type "help" for available commands.', kind: "dim" },
  { text: "" },
];

function runCommand(raw: string): Line[] {
  const cmd = raw.trim().toLowerCase();
  switch (cmd) {
    case "":
      return [];
    case "help":
      return [
        { text: "available commands:", kind: "acc" },
        { text: "  whoami        — who is this guy" },
        { text: "  projects      — selected work" },
        { text: "  wins          — hackathon record" },
        { text: "  skills        — the stack" },
        { text: "  experience    — work history" },
        { text: "  contact       — reach out" },
        { text: "  hire          — the important one" },
        { text: "  github        — open github profile" },
        { text: "  clear         — wipe the screen" },
        { text: "  exit          — close terminal" },
        { text: "" },
      ];
    case "whoami":
      return [
        { text: "sriraj paruchuru", kind: "acc" },
        ...identity.bio.map((b) => ({ text: b, kind: "dim" as const })),
        { text: "" },
      ];
    case "projects":
      return [
        ...projects.flatMap((p) => [
          { text: `${p.index}  ${p.name} — ${p.tagline}`, kind: "acc" as const },
          ...(p.live ? [{ text: `    live: ${p.live}`, kind: "dim" as const }] : []),
          ...(p.repo ? [{ text: `    src:  ${p.repo}`, kind: "dim" as const }] : []),
        ]),
        { text: "" },
      ];
    case "wins":
      return [
        ...wins.map((w) => ({
          text: `${w.rank.padEnd(5)} ${w.title} (${w.date})`,
          kind: w.headline ? ("acc" as const) : undefined,
        })),
        { text: "" },
      ];
    case "skills":
      return [
        ...identity.stacks.map((s) => ({ text: `${s.label.padEnd(12)} ${s.items}` })),
        { text: "" },
      ];
    case "experience":
      return [
        ...experiences.map((e) => ({ text: `${e.period.padEnd(22)} ${e.role} @ ${e.company}` })),
        { text: "" },
      ];
    case "contact":
      return [
        { text: `email:    ${identity.email}`, kind: "acc" },
        { text: `linkedin: ${identity.linkedin}` },
        { text: `github:   ${identity.github}` },
        { text: "" },
      ];
    case "hire":
      return [
        { text: "EXCELLENT DECISION.", kind: "acc" },
        { text: "status: open to ML engineering / product / SWE roles" },
        { text: `next step: ${identity.email}` },
        { text: "response time: faster than your ATS.", kind: "dim" },
        { text: "" },
      ];
    case "github":
      window.open(identity.github, "_blank", "noopener");
      return [{ text: "opening github…", kind: "dim" }, { text: "" }];
    case "sudo":
    case "sudo hire":
    case "sudo rm -rf /":
      return [
        { text: "nice try. this incident will be reported", kind: "acc" },
        { text: "(to my future employer, as a fun anecdote).", kind: "dim" },
        { text: "" },
      ];
    case "coffee":
      return [{ text: "c[_] brewing… ok. back to shipping.", kind: "acc" }, { text: "" }];
    case "ls":
      return [{ text: "projects/  wins/  skills/  experience/  contact.txt  hire.exe", kind: "dim" }, { text: "" }];
    default:
      return [
        { text: `command not found: ${cmd}`, kind: "dim" },
        { text: 'type "help" for the menu.', kind: "dim" },
        { text: "" },
      ];
  }
}

export function Terminal() {
  const [open, setOpen] = useState(false);
  const [lines, setLines] = useState<Line[]>(banner);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const typing = target.tagName === "INPUT" || target.tagName === "TEXTAREA";
      if (e.key === "`" && !typing) {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [lines]);

  const submit = () => {
    const cmd = input.trim();
    if (cmd.toLowerCase() === "exit") {
      setOpen(false);
      setInput("");
      return;
    }
    if (cmd.toLowerCase() === "clear") {
      setLines(banner);
      setInput("");
      return;
    }
    setLines((prev) => [...prev, { text: `visitor@sriraj.sys:~$ ${cmd}`, kind: "cmd" }, ...runCommand(cmd)]);
    if (cmd) {
      setHistory((h) => [cmd, ...h]);
    }
    setHistoryIdx(-1);
    setInput("");
  };

  const onInputKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") submit();
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const idx = Math.min(historyIdx + 1, history.length - 1);
      if (history[idx]) {
        setHistoryIdx(idx);
        setInput(history[idx]);
      }
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const idx = historyIdx - 1;
      setHistoryIdx(idx);
      setInput(idx >= 0 ? history[idx] : "");
    }
  };

  return (
    <>
      <button className="term-fab" data-magnetic onClick={() => setOpen(true)} aria-label="Open terminal">
        <span style={{ color: "var(--acc)" }}>&gt;_</span> terminal
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="term-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.target === e.currentTarget && setOpen(false)}
          >
            <motion.div
              className="term-window"
              initial={{ scale: 0.96, y: 16 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 16 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => inputRef.current?.focus()}
            >
              <div className="term-bar">
                <span>visitor@sriraj.sys — interactive</span>
                <button onClick={() => setOpen(false)} data-magnetic style={{ color: "var(--ink-faint)" }} aria-label="Close terminal">
                  [esc] close
                </button>
              </div>
              <div className="term-body" ref={bodyRef}>
                {lines.map((line, i) => (
                  <div
                    key={i}
                    style={{
                      color:
                        line.kind === "acc" ? "var(--acc)"
                        : line.kind === "cmd" ? "var(--ink)"
                        : line.kind === "dim" ? "var(--ink-faint)"
                        : undefined,
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {line.text || " "}
                  </div>
                ))}
              </div>
              <div className="term-input-row">
                <span style={{ color: "var(--acc)" }}>$</span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onInputKey}
                  spellCheck={false}
                  autoComplete="off"
                  aria-label="Terminal input"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
