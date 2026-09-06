import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { P } from "@/lib/constants";

export function BrandIntro() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const o0 = useTransform(scrollYProgress, [0, 0.08, 0.26, 0.31], [0, 1, 1, 0]);
  const o1 = useTransform(scrollYProgress, [0.31, 0.385, 0.535, 0.575], [0, 1, 1, 0]);
  const o2 = useTransform(scrollYProgress, [0.575, 0.65, 0.88, 0.94], [0, 1, 1, 0]);
  const opacities = [o0, o1, o2];

  const y0 = useTransform(scrollYProgress, [0, 0.08, 0.26, 0.31], [40, 0, 0, -40]);
  const y1 = useTransform(scrollYProgress, [0.31, 0.385, 0.535, 0.575], [40, 0, 0, -40]);
  const y2 = useTransform(scrollYProgress, [0.575, 0.65, 0.88, 0.94], [40, 0, 0, -40]);
  const yOffsets = [y0, y1, y2];

  const im0 = useTransform(scrollYProgress, [0, 0.26, 0.31], [1, 1, 0]);
  const im1 = useTransform(scrollYProgress, [0.26, 0.31, 0.535, 0.575], [0, 1, 1, 0]);
  const im2 = useTransform(scrollYProgress, [0.535, 0.575], [0, 1]);
  const imgOpacities = [im0, im1, im2];

  const images = [P.office2, P.dining2, P.bedroom2];
  const words = [
    { word: "Designed.", desc: "Free design consultation" },
    { word: "Crafted.", desc: "Premium wood & in-house craft" },
    { word: "Customized.", desc: "Fully bespoke — built to your space" },
  ];

  return (
    <section ref={ref} className="relative bg-ivory" style={{ minHeight: "280vh" }}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="container grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="order-2 lg:order-1">
            <div className="eyebrow text-wood">Our approach</div>
            <div className="relative mt-6 overflow-hidden lg:mt-8 lg:h-[34rem]">
              {images.map((src, i) => (
                <motion.img
                  key={i}
                  src={src}
                  alt={words[i].word}
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ opacity: imgOpacities[i] }}
                  loading="lazy"
                />
              ))}

            </div>
          </div>
          <div className="order-1 flex flex-col justify-center lg:order-2 lg:pl-12">
            <div className="relative min-h-[12rem] sm:min-h-[14rem]">
              {words.map((w, i) => (
                <motion.div
                  key={w.word}
                  className="absolute inset-0 flex flex-col justify-center"
                  style={{ opacity: opacities[i], y: yOffsets[i] }}
                >
                  <h2 className="display-serif text-[clamp(2.8rem,9vw,7.5rem)] leading-[0.88] text-charcoal">{w.word}</h2>
                  <p className="display-serif mt-3 text-[clamp(1rem,2.5vw,1.3rem)] leading-snug text-charcoal/60 sm:mt-4">{w.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
