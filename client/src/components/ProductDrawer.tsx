import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, X, Phone } from "lucide-react";
import { WHATSAPP, PHONE_TEL, type Product } from "@/lib/constants";

export function ProductDrawer({
  product,
  onClose,
  onBack,
}: {
  product: Product | null;
  onClose: () => void;
  onBack?: () => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !product) return;
    const onWheel = (e: WheelEvent) => {
      e.stopPropagation();
      el.scrollTop += e.deltaY;
    };
    window.addEventListener("wheel", onWheel, { passive: false, capture: true });
    return () => window.removeEventListener("wheel", onWheel, { capture: true });
  }, [product]);
  return (
    <AnimatePresence>
      {product && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-charcoal/50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-y-0 right-0 z-50 flex h-full w-full max-w-[560px] flex-col bg-[#FCFBF8] shadow-2xl sm:rounded-l-2xl"
          >
            <div className="flex items-start justify-between border-b border-charcoal/10 px-7 py-5">
              <div className="flex items-start gap-3">
                {onBack && (
                  <button
                    onClick={onBack}
                    className="grid h-10 w-10 shrink-0 place-items-center border border-charcoal/10 text-charcoal transition-colors hover:bg-charcoal hover:text-ivory mt-0.5"
                    aria-label="Back to gallery"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                )}
                <div>
                  <div className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-wood">{product.category}</div>
                  <div className="display-serif mt-1 text-[2rem] leading-none text-charcoal">{product.title}</div>
                </div>
              </div>
              <button onClick={onClose} className="grid h-10 w-10 shrink-0 place-items-center border border-charcoal/10 text-charcoal transition-colors hover:bg-charcoal hover:text-ivory" aria-label="Close">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto overscroll-contain">
              <div className="aspect-[16/10] bg-[#E9E3D8]">
                <img src={product.image} alt={product.title} className="h-full w-full object-cover" />
              </div>

              <div className="px-7 py-7">
                <p className="display-serif text-xl italic text-charcoal/70">{product.subtitle}</p>

                <div className="mt-7 divide-y divide-charcoal/10 border-y border-charcoal/10">
                  {[
                    ["Dimensions", product.dims],
                    ["Material", product.material],
                    ["Finish", product.finish],
                    ["Availability", product.note],
                  ].map(([k, v]) => (
                    <div key={k} className="grid grid-cols-[8ch_1fr] gap-3 py-4 text-sm sm:grid-cols-[10ch_1fr] sm:gap-4">
                      <span className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-charcoal/40">{k}</span>
                      <span className="text-charcoal">{v}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-[0.85rem] leading-6 text-charcoal/50">
                  Bespoke sizing &amp; finish available — send us your room dimensions and we adapt this piece to your niche, no extra design fee.
                </p>

                <div className="mt-7 grid gap-2.5">
                  <a
                    href={`${WHATSAPP}?text=Hi%20Heaven%20Furniture%20Mart,%20I'm%20interested%20in%20${encodeURIComponent(product.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-charcoal px-5 py-4 text-xs font-bold uppercase tracking-[0.14em] text-ivory transition-colors hover:bg-teal"
                  >
                    Inquire About This Piece <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a href={PHONE_TEL} className="flex items-center justify-between border border-charcoal/15 px-5 py-4 text-xs font-bold uppercase tracking-[0.14em] text-charcoal transition-colors hover:border-charcoal">
                    Call the showroom <Phone className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
