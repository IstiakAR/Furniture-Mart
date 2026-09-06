import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { animate, createTimeline, stagger } from "animejs";

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [curtainOpen, setCurtainOpen] = useState(false);
  const logoRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const lineLeftRef = useRef<HTMLDivElement>(null);
  const lineRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setVisible(false);
      return;
    }

    const tl = createTimeline({ defaults: { ease: "outExpo" } });

    // Logo: subtle scale + opacity
    if (logoRef.current) {
      tl.add(logoRef.current, {
        scale: [0.92, 1],
        opacity: [0, 1],
        duration: 350,
      });
    }

    // Brand text: char-by-char reveal
    if (textRef.current) {
      const chars = textRef.current.querySelectorAll(".pre-char");
      tl.add(
        chars,
        {
          translateY: ["100%", "0%"],
          opacity: [0, 1],
          duration: 400,
          delay: stagger(16),
          ease: "outExpo",
        },
        "-=150"
      );
    }

    // Brass lines extend outward
    if (lineLeftRef.current) {
      tl.add(lineLeftRef.current, { scaleX: [0, 1], duration: 500, ease: "inOutExpo" }, "-=350");
    }
    if (lineRightRef.current) {
      tl.add(lineRightRef.current, { scaleX: [0, 1], duration: 500, ease: "inOutExpo" }, "-=500");
    }

    // Curtain reveal at 550ms
    const curtainTimer = setTimeout(() => setCurtainOpen(true), 550);

    // Remove preloader at 1050ms
    const removeTimer = setTimeout(() => setVisible(false), 1050);

    return () => {
      clearTimeout(curtainTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      id="preloader"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal"
      initial={{ clipPath: "inset(0 0 0% 0)" }}
      animate={{
        clipPath: curtainOpen ? "inset(0 0 100% 0)" : "inset(0 0 0% 0)",
      }}
      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      style={{ pointerEvents: curtainOpen ? "none" : "auto" }}
    >
      <div className="relative flex flex-col items-center gap-5">
        {/* Logo */}
        <img
          ref={logoRef}
          src="/manus-storage/logo.jpg"
          alt="Heaven Furniture Mart"
          className="h-20 w-20 object-contain"
          style={{ opacity: 0 }}
        />

        {/* Brand name with extending brass lines */}
        <div className="flex items-center gap-3 overflow-hidden">
          <div
            ref={lineLeftRef}
            className="h-px w-10 bg-brass/40"
            style={{ transformOrigin: "right", transform: "scaleX(0)" }}
          />
          <span
            ref={textRef}
            className="inline-flex overflow-hidden text-[0.62rem] font-bold uppercase tracking-[0.18em] text-brass"
          >
            {"HEAVEN FURNITURE MART".split("").map((c, i) => (
              <span
                key={i}
                className="pre-char inline-block"
                style={{ opacity: 0, transform: "translateY(100%)" }}
              >
                {c === " " ? "\u00A0" : c}
              </span>
            ))}
          </span>
          <div
            ref={lineRightRef}
            className="h-px w-10 bg-brass/40"
            style={{ transformOrigin: "left", transform: "scaleX(0)" }}
          />
        </div>
      </div>
    </motion.div>
  );
}
