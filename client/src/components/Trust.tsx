import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HeritageVideo } from "@/components/HeritageVideo";
import { Testimonials } from "@/components/Testimonials";

const MILESTONES = [
  { year: "2020", line: "Founded by Abul Kalam Bhuiyan" },
  { year: "2021", line: "Showroom opened in Agrabad" },
  { year: "2024–25", line: "International Furniture Fair" },
  { year: "2025", line: "Expanded collections & operations" },
  { year: "2026", line: "BFIOA recognition" },
];

export function Trust() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 0.25], [0.97, 1]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.08], [0, 1]);
  const quoteOpacity = useTransform(scrollYProgress, [0.08, 0.18], [0, 1]);
  const quoteY = useTransform(scrollYProgress, [0.08, 0.18], [20, 0]);
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.12], [0.35, 1]);
  const sectionY = useTransform(scrollYProgress, [0, 0.12], [30, 0]);

  return (
    <section id="heritage" ref={sectionRef} className="relative bg-charcoal py-24 text-ivory lg:py-32">
      <motion.div style={{ opacity: sectionOpacity, y: sectionY }}>
          <div className="container grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-center lg:gap-16">

            {/* LEFT — heading + quote */}
            <div className="flex flex-col justify-center">
              <div className="eyebrow text-brass">Heritage</div>
              <h2 className="display-serif mt-4 text-[clamp(2.6rem,5vw,4.2rem)] leading-[0.9] text-ivory">
                Chattogram
                <span className="block text-base font-sans font-medium normal-case tracking-wide text-ivory/50">
                  Crafted in · Since 2020
                </span>
              </h2>

              <motion.figure className="mt-6 max-w-[34ch]" style={{ opacity: quoteOpacity, y: quoteY }}>
                <blockquote className="display-serif text-[clamp(1.1rem,1.7vw,1.5rem)] leading-snug text-ivory/85">
                  "Furniture is more than function; it is a reflection of lifestyle, taste, and comfort."
                </blockquote>
                <figcaption className="mt-3">
                  <div className="text-sm font-bold tracking-wide text-brass">Abul Kalam Bhuiyan</div>
                  <div className="text-[0.65rem] uppercase tracking-[0.16em] text-ivory/40">Managing Director</div>
                </figcaption>
              </motion.figure>
            </div>

            {/* RIGHT — video + timeline */}
            <div className="flex flex-col">
              <motion.div className="overflow-hidden" style={{ scale: videoScale, opacity: videoOpacity }}>
                <HeritageVideo />
              </motion.div>

              {/* Horizontal timeline — desktop */}
              <div className="mt-6 hidden lg:block">
                <div className="relative h-px bg-ivory/10">
                  <motion.div
                    className="absolute left-0 top-0 h-full bg-brass/40"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 1.6, ease: [0.23, 1, 0.32, 1] }}
                  />
                </div>
                <div className="relative mt-4 flex justify-between">
                  {MILESTONES.map((m, i) => (
                    <motion.div
                      key={m.year}
                      className="flex flex-col items-center text-center"
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.7, delay: 0.15 * i, ease: [0.23, 1, 0.32, 1] }}
                    >
                      <div className="h-1.5 w-1.5 rounded-full border border-brass bg-charcoal" />
                      <div className="mt-2 display-serif text-base text-brass">{m.year}</div>
                      <div className="mt-1 max-w-[11ch] text-xs leading-4 text-ivory/45">{m.line}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Vertical timeline — mobile */}
              <div className="mt-5 lg:hidden">
                <div className="eyebrow mb-3 text-brass/70">Crafted since 2020</div>
                <div className="relative flex flex-col gap-0 border-l border-ivory/15 pl-6">
                  {MILESTONES.map((m, i) => (
                    <motion.div
                      key={m.year}
                      className="relative pb-4 last:pb-0"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{ duration: 0.6, delay: 0.1 * i, ease: [0.23, 1, 0.32, 1] }}
                    >
                      <div className="absolute -left-[calc(1.5rem+3px)] top-1 h-1.5 w-1.5 rounded-full border border-brass bg-charcoal" />
                      <div className="display-serif text-base text-brass">{m.year}</div>
                      <p className="mt-0.5 text-sm leading-5 text-ivory/55">{m.line}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials — full width below the grid */}
          <div className="container mt-8 border-t border-ivory/10 pt-6">
            <Testimonials />
          </div>
      </motion.div>
    </section>
  );
}
