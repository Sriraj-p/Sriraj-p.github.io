import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Edge", href: "#edge" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function FloatingNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
      className={`nav-dock px-8 py-3 ${scrolled ? "scrolled" : ""}`}
    >
      <div className="flex items-center gap-8">
        <span
          className="text-xs font-bold tracking-[0.2em] text-white uppercase cursor-none"
          style={{ letterSpacing: "0.2em" }}
        >
          SP
        </span>
        <div className="w-px h-4 bg-white/10" />
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              data-magnetic
              onClick={(e) => handleClick(e, item.href)}
              className="text-[0.7rem] tracking-[0.15em] uppercase text-white/50 hover:text-white/90 transition-colors duration-300 font-medium cursor-none"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="w-px h-4 bg-white/10" />
        <a
          href="mailto:sriraj.paruchuru@gmail.com"
          data-magnetic
          className="text-[0.7rem] tracking-[0.15em] uppercase bg-white text-black px-4 py-1.5 font-semibold hover:bg-white/90 transition-colors cursor-none"
        >
          Hire Me
        </a>
      </div>
    </motion.nav>
  );
}
