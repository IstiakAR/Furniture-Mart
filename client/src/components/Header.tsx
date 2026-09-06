import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Menu } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Cta } from "@/components/Cta";
import { NAV, WHATSAPP, CTA_LABEL } from "@/lib/constants";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled ? "border-b border-charcoal/10 bg-[#FCFBF8]/92 backdrop-blur-xl" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between gap-6 md:h-[68px]">
        <Logo light={!scrolled} />
        <nav className="hidden flex-1 items-center justify-center gap-10 lg:flex">
          {NAV.map(([label, href]) => (
            <a key={label} href={href} className={`text-[0.62rem] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 ${scrolled ? "text-charcoal/55 hover:text-charcoal" : "text-ivory/65 hover:text-ivory"}`}>
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-5">
          <Cta label={CTA_LABEL} dark={!scrolled} className={`hidden lg:inline-flex ${scrolled ? "text-charcoal/70 hover:text-charcoal" : "text-ivory/80 hover:text-ivory"}`} />
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className={`grid h-9 w-9 place-items-center lg:hidden ${scrolled ? "text-charcoal" : "text-ivory"}`}
            aria-label="Menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden border-t border-charcoal/10 bg-[#FCFBF8]/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container flex flex-col gap-1 py-5">
              {NAV.map(([label, href]) => (
                <a key={label} href={href} onClick={() => setMenuOpen(false)} className="display-serif py-3 text-3xl leading-none text-charcoal transition-colors hover:text-wood">
                  {label}
                </a>
              ))}
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="mt-4 editorial-link text-charcoal">
                {CTA_LABEL} <ArrowUpRight className="btn-arrow h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
