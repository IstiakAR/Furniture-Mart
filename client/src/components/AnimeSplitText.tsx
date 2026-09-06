import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

type Props = {
  text: string;
  as?: "h1" | "h2" | "p" | "div";
  className?: string;
  delay?: number;
  staggerDelay?: number;
  duration?: number;
  renderEm?: (word: string) => boolean; // if true wrap in <em>
};

// Splits text by chars preserving <br/> and spaces, animates each char
export function AnimeSplitText({ text, as = "div", className = "", delay = 0, staggerDelay = 18, duration = 700, renderEm }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const chars = el.querySelectorAll(".char");
    if (chars.length === 0) return;
    animate(chars, {
      translateY: ["110%", "0%"],
      opacity: [0, 1],
      duration,
      delay: stagger(staggerDelay, { start: delay }),
      ease: "outExpo",
    });
  }, [delay, staggerDelay, duration, text]);

  const Tag: any = as;

  // build spans: keep spaces as &nbsp; char
  const parts = text.split(/(\s|<br\s*\/?>)/g).filter(Boolean);

  return (
    <Tag ref={ref} className={className} aria-label={text.replace(/<br\s*\/?>/g, " ")}>
      {parts.map((part, i) => {
        if (/^<br/.test(part)) return <br key={i} />;
        if (/^\s+$/.test(part)) return <span key={i} className="inline-block">&nbsp;</span>;
        const isEm = renderEm ? renderEm(part) : false;
        const chars = part.split("");
        return (
          <span key={i} className="inline-block overflow-hidden align-baseline pr-[0.12em] -mr-[0.12em]">
            {chars.map((c, j) => (
              <span
                key={j}
                className={`char inline-block will-change-transform ${isEm ? "text-brass italic" : ""}`}
                style={{ transform: "translateY(110%)", opacity: 0 }}
              >
                {c}
              </span>
            ))}
          </span>
        );
      })}
    </Tag>
  );
}
