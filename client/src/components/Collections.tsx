import { useRef, useMemo, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Cta } from "@/components/Cta";
import { PRODUCTS, COLLECTIONS, CTA_LABEL, type Product } from "@/lib/constants";

export function Collections({
  onOpenCategory,
}: {
  onOpenCategory: (category: Product["category"], products: Product[]) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [shiftPx, setShiftPx] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 0.2, 1], [0, 0, -shiftPx]);

  // Measure the real track overhang so the horizontal drift ends exactly on
  // the last card at every breakpoint (vw-based card widths vary a lot).
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => {
      setShiftPx(Math.max(0, track.scrollWidth - window.innerWidth));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const byCat = useMemo(() => {
    const map: Record<string, Product[]> = {};
    PRODUCTS.forEach((p) => {
      (map[p.category] ||= []).push(p);
    });
    return map;
  }, []);

  return (
    <section id="collections" className="relative bg-charcoal text-ivory">
      <div ref={ref} className="relative h-[340vh]">
        <div className="sticky top-0 flex h-svh flex-col justify-start overflow-hidden pt-20 sm:pt-24">
          <div className="container mb-6 flex items-end justify-between sm:mb-8">
            <div>
              <div className="eyebrow text-brass">Collections</div>
              <h2 className="display-serif mt-4 text-[clamp(2.4rem,5.5vw,4.4rem)] leading-[0.9] text-ivory">A snapshot of the studio.</h2>
            </div>
          </div>

          <motion.div ref={trackRef} className="flex w-max items-stretch gap-5 px-5 sm:gap-6 sm:px-8 lg:gap-12" style={{ x }}>
            {COLLECTIONS.map((c, i) => {
              const pieces = byCat[c.category] || [];
              return (
                <button
                  key={c.key}
                  onClick={() => onOpenCategory(c.category, pieces)}
                  className="group relative flex w-[70vw] shrink-0 flex-col justify-end text-left sm:w-[52vw] lg:w-[42vw] xl:w-[34vw]"
                >
                  <span className="mb-4 flex items-baseline gap-4">
                    <span className="chapter-number text-brass/50">{String(i + 1).padStart(2, "0")}</span>
                    <span className="meta text-ivory/60">{c.title}</span>
                  </span>
                  <div className="image-frame relative aspect-[4/5] overflow-hidden bg-[#263E39]">
                    <img src={c.image} alt={c.title} className="h-full w-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                    <div className="absolute bottom-5 left-5 z-10 translate-y-2 text-ivory opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="meta text-brass">{pieces.length} pieces</span>
                    </div>
                  </div>
                  <div className="mt-5 flex items-baseline justify-between border-b border-ivory/15 pb-5">
                    <p className="text-[0.7rem] uppercase tracking-[0.14em] text-ivory/50">{c.pieces}</p>
                    <ArrowUpRight className="h-4 w-4 text-brass/70 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </button>
              );
            })}
            <div className="flex w-[70vw] shrink-0 flex-col justify-center px-2 sm:w-[46vw]">
              <div className="eyebrow text-brass">Not sure where to start?</div>
              <h3 className="display-serif mt-5 max-w-[16ch] text-[clamp(2.2rem,4vw,3.4rem)] leading-[0.95] text-ivory">Tell us about your space — we'll shape the collection around it.</h3>
              <div className="mt-8"><Cta label={CTA_LABEL} dark /></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
