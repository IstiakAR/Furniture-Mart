/*
  HEAVEN FURNITURE MART — Cinematic Luxury Studio (Design 4)
  Editorial, architectural, tactile — "walking slowly through a high-end studio."
  Orchestrator: imports scene components, manages drawers + scroll lock.
*/
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";

import { ScrollProgress } from "@/components/ScrollProgress";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BrandIntro } from "@/components/BrandIntro";
import { Collections } from "@/components/Collections";
import { Bespoke } from "@/components/Bespoke";
import { Trust } from "@/components/Trust";
import { FinalCta } from "@/components/FinalCta";
import { ProductDrawer } from "@/components/ProductDrawer";
import { CategoryGallery } from "@/components/CategoryGallery";

import { P, PHONE, type Product } from "@/lib/constants";

export default function Home() {
  const [selected, setSelected] = useState<Product | null>(null);
  const [categoryGallery, setCategoryGallery] = useState<{
    category: Product["category"];
    products: Product[];
  } | null>(null);
  const [lastGallery, setLastGallery] = useState<{
    category: Product["category"];
    products: Product[];
  } | null>(null);
  const lenis = useLenis();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selected) setSelected(null);
        else if (categoryGallery) setCategoryGallery(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected, categoryGallery]);

  useEffect(() => {
    const isOpen = !!(selected || categoryGallery);
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      lenis?.stop();
    } else {
      document.documentElement.style.overflow = "";
      lenis?.start();
    }
    return () => {
      document.documentElement.style.overflow = "";
      lenis?.start();
    };
  }, [selected, categoryGallery, lenis]);

  const openCategory = (category: Product["category"], products: Product[]) => {
    setCategoryGallery({ category, products });
  };

  return (
    <div className="min-h-screen bg-[#FCFBF8] text-charcoal">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <BrandIntro />
        <Collections onOpenCategory={openCategory} />
        <Bespoke />
        <Trust />
        <FinalCta />
      </main>

      <footer className="border-t border-ivory/10 bg-charcoal py-8 text-ivory/40">
        <div className="container flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <img src={P.logo} alt="" className="h-7 w-7 object-contain opacity-50" />
            <span className="flex flex-col leading-none">
              <span className="text-[1rem] font-bold uppercase tracking-[0.04em] text-ivory/60">
                HE<span className="text-brass/60">A</span>VEN
              </span>
              <span className="mt-0.5 text-[0.42rem] font-bold uppercase tracking-[0.22em] text-ivory/30">Furniture Mart</span>
            </span>
            <span className="ml-2 hidden text-[0.56rem] text-ivory/25 sm:inline">© 2026 · {PHONE}</span>
          </div>
          <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-6">
            <span className="text-[0.56rem] text-ivory/25 sm:hidden">© 2026 · {PHONE}</span>
            <span className="flex gap-6 text-[0.62rem] font-bold uppercase tracking-[0.14em]">
              <a href="https://www.facebook.com/HeavenFurnitureMart" target="_blank" rel="noopener noreferrer" className="hover:text-ivory">Facebook</a>
              <a href="https://www.instagram.com/heaven_furniture_ltd" target="_blank" rel="noopener noreferrer" className="hover:text-ivory">Instagram</a>
              <a href="https://www.youtube.com/@HeavenFurnitureMart" target="_blank" rel="noopener noreferrer" className="hover:text-ivory">YouTube</a>
            </span>
          </div>
        </div>
      </footer>

      <ProductDrawer
        product={selected}
        onClose={() => setSelected(null)}
        onBack={lastGallery ? () => {
          setSelected(null);
          setCategoryGallery(lastGallery);
        } : undefined}
      />
      <AnimatePresence>
        {categoryGallery && (
          <CategoryGallery
            category={categoryGallery.category}
            products={categoryGallery.products}
            onClose={() => setCategoryGallery(null)}
            onOpenProduct={(p) => {
              setLastGallery(categoryGallery);
              setCategoryGallery(null);
              setSelected(p);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
