import { marqueeItems } from "../data/content";

export function Marquee() {
  const row = (key: string) => (
    <div key={key} className="flex shrink-0">
      {marqueeItems.map((item) => (
        <span key={item} className="marquee-item">
          {item}
          <span className="marquee-sep">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="py-14 overflow-hidden" aria-hidden>
      <div className="marquee-band">
        <div className="marquee-track">
          {row("a")}
          {row("b")}
        </div>
      </div>
    </div>
  );
}
