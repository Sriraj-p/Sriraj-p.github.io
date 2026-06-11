import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { identity } from "../data/content";

const links = [
  { href: "#work", label: "Work" },
  { href: "#wins", label: "Wins" },
  { href: "#github", label: "GitHub" },
  { href: "#log", label: "Log" },
  { href: "#contact", label: "Contact" },
];

export function FloatingNav() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav-rail ${scrolled ? "scrolled" : ""}`}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-16 flex items-center justify-between h-16">
        <a href="#top" data-magnetic className="font-mono text-sm font-bold tracking-tight" style={{ color: "var(--ink)" }}>
          SP<span style={{ color: "var(--acc)" }}>_</span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link" data-magnetic>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="status-dot" />
          <span className="mono-label" style={{ color: "var(--ink-dim)" }}>{identity.status}</span>
        </div>
      </div>

      {/* scroll progress */}
      <motion.div
        className="h-px origin-left"
        style={{ scaleX: scrollYProgress, background: "var(--acc)" }}
      />
    </header>
  );
}
