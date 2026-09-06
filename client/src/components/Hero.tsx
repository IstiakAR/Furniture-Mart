import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { animate } from "animejs";
import { AnimeSplitText } from "@/components/AnimeSplitText";
import { Cta } from "@/components/Cta";
import { P, CTA_LABEL } from "@/lib/constants";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scaleRaw = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const scale = useSpring(scaleRaw, { stiffness: 40, damping: 22, mass: 0.8 });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.62], [1, 0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => {
      animate(".hero-kicker", { opacity: [0, 1], translateY: [8, 0], duration: 900, ease: "outExpo" });
      animate(".hero-copy", { opacity: [0, 1], translateY: [18, 0], duration: 1000, delay: 180, ease: "outExpo" });
      animate(".hero-cta", { opacity: [0, 1], translateY: [14, 0], duration: 900, delay: 360, ease: "outExpo" });
      animate(".hero-scroll", { opacity: [0, 1], duration: 1100, delay: 700, ease: "outExpo" });
      animate(
        ".hero-scroll-dot",
        { translateY: ["-120%", "320%"], duration: 2200, delay: 500, loop: true, ease: "inOutSine" }
      );
    }, 1000);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="hero" ref={ref} className="relative h-screen min-h-[640px] overflow-hidden bg-charcoal">
      <motion.div className="absolute inset-0 will-change-transform" style={{ scale }}>
        <motion.div
          className="absolute inset-0 will-change-transform"
          initial={reduceMotion ? false : { scale: 1.14 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: [0.16, 1, 0.3, 1], delay: 0.85 }}
        >
          <motion.img
            src={P.hero}
            alt="Heaven Furniture Mart showroom"
            className="h-full w-full object-cover will-change-transform"
            style={{ y: imgY }}
            fetchPriority="high"
          />
        </motion.div>
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(16,35,33,0.28)_70%,rgba(16,35,33,0.62)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/25 to-charcoal/35" />
      <div className="film-grain pointer-events-none absolute inset-0" />

      <div className="pointer-events-none absolute inset-4 z-10 hidden sm:block lg:inset-6">
        <span className="absolute left-0 top-0 h-4 w-4 border-l border-t border-ivory/20" />
        <span className="absolute right-0 top-0 h-4 w-4 border-r border-t border-ivory/20" />
        <span className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-ivory/20" />
        <span className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-ivory/20" />
      </div>
      <motion.div
        className="container relative z-10 flex h-full flex-col justify-end pb-20 lg:pb-24"
        style={{ y: textY, opacity: textOpacity }}
      >
        <p className="hero-kicker eyebrow mb-7 text-brass" style={{ opacity: 0 }}>
          Est. 2020 · Agrabad · Chattogram
        </p>
        <AnimeSplitText
          text="Furniture,<br/>Crafted<br/>Around You."
          as="h1"
          className="display-serif text-[clamp(3.2rem,9vw,7.5rem)] leading-[0.86] text-ivory"
          delay={1120}
          staggerDelay={28}
          duration={820}
          renderEm={(w) => w === "Crafted" || w === "Around" || w === "You."}
        />
        <motion.p className="hero-copy mt-8 max-w-[42ch] text-[clamp(0.95rem,1.35vw,1.08rem)] leading-relaxed text-ivory/68" style={{ opacity: 0 }}>
          Bespoke furniture and interior styling, designed around your space — not pulled off a shelf.
        </motion.p>
        <div className="hero-cta mt-11" style={{ opacity: 0 }}>
          <Cta label={CTA_LABEL} solid />
        </div>
      </motion.div>

      <div className="hero-scroll absolute bottom-8 right-6 z-10 hidden flex-col items-end gap-3 text-ivory/45 sm:flex lg:right-12" style={{ opacity: 0 }}>
        <span className="text-[0.58rem] font-semibold uppercase tracking-[0.22em]">Walk the studio</span>
        <span className="relative block h-10 w-px overflow-hidden bg-ivory/15">
          <span className="hero-scroll-dot absolute left-0 top-0 block h-4 w-px bg-brass" style={{ transform: "translateY(-120%)" }} />
        </span>
      </div>
    </section>
  );
}
