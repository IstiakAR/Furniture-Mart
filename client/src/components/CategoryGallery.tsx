import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import type { Product } from "@/lib/constants";

export function CategoryGallery({
  category,
  products,
  onClose,
  onOpenProduct,
}: {
  category: string;
  products: Product[];
  onClose: () => void;
  onOpenProduct: (p: Product) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.stopPropagation();
      el.scrollTop += e.deltaY;
    };
    window.addEventListener("wheel", onWheel, { passive: false, capture: true });
    return () => window.removeEventListener("wheel", onWheel, { capture: true });
  }, []);

  return (
    <>
      <motion.div
        className="fixed inset-0 z-[95] bg-charcoal/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      />

      <div
        className="fixed top-0 right-0 z-[96] flex flex-col bg-[#FCFBF8] shadow-2xl sm:rounded-l-2xl"
        style={{ height: "100dvh", width: "min(560px, 100vw)" }}
      >
        <div className="flex items-start justify-between border-b border-charcoal/10 px-7 py-5 shrink-0">
          <div>
            <div className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-wood">{category}</div>
            <div className="display-serif mt-1 text-[2rem] leading-none text-charcoal">{products.length} pieces</div>
          </div>
          <button
            onClick={onClose}
            className="grid h-10 w-10 shrink-0 place-items-center border border-charcoal/10 text-charcoal transition-colors hover:bg-charcoal hover:text-ivory"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6">
          <div className="flex flex-col gap-6">
            {products.map((p, i) => (
              <motion.button
                key={p.id}
                onClick={() => onOpenProduct(p)}
                className="group text-left"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
              >
                <div className="image-lux relative aspect-[16/9] overflow-hidden bg-[#E9E3D8]">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="meta text-brass">{p.category}</span>
                    <p className="display-serif text-lg text-ivory mt-1">{p.title}</p>
                  </div>
                </div>
                <div className="mt-3 flex items-baseline justify-between">
                  <div>
                    <p className="display-serif text-base text-charcoal">{p.title}</p>
                    <p className="meta text-charcoal/50 mt-1">{p.subtitle}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-charcoal/30 group-hover:text-brass transition-colors" />
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
