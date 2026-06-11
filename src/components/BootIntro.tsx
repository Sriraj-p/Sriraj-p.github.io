import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootLines = [
  { text: "> initializing sriraj.sys", ok: false },
  { text: "> mounting neural mesh ............ ok", ok: true },
  { text: "> loading hackathon trophies ...... ok", ok: true },
  { text: "> status: open_to_work ............ true", ok: true },
  { text: "> welcome.", ok: false },
];

export function BootIntro() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
    return !sessionStorage.getItem("booted");
  });
  const [lineCount, setLineCount] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const timers: number[] = [];
    bootLines.forEach((_, i) => {
      timers.push(window.setTimeout(() => setLineCount(i + 1), 180 + i * 240));
    });
    timers.push(window.setTimeout(() => dismiss(), 180 + bootLines.length * 240 + 450));
    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  const dismiss = () => {
    sessionStorage.setItem("booted", "1");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="boot-overlay"
          onClick={dismiss}
          exit={{ y: "-100%", transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
        >
          <div className="boot-lines">
            {bootLines.slice(0, lineCount).map((line) => (
              <div key={line.text}>
                {line.ok ? (
                  <>
                    {line.text.replace(/ ok$/, " ")}
                    <span className="ok">ok</span>
                  </>
                ) : (
                  line.text
                )}
              </div>
            ))}
            <span className="term-cursor-block" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
