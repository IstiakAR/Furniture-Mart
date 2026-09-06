import { useEffect } from "react";
import { animate, stagger } from "animejs";
import { Phone, Mail, MapPin } from "lucide-react";
import { Cta } from "@/components/Cta";
import { PHONE, PHONE_TEL, EMAIL, MAILTO, MAPS, CTA_LABEL } from "@/lib/constants";

export function FinalCta() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => {
      animate(".final-word", { opacity: [0, 1], translateY: [26, 0], duration: 900, delay: stagger(140), ease: "outExpo" });
    }, 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="consult" className="relative overflow-hidden bg-ivory py-28 lg:py-40">
      <div className="container text-center">
        <div className="eyebrow mb-8 text-wood">Your studio in Agrabad</div>
        <h2 className="display-serif mx-auto max-w-[16ch] text-[clamp(2.6rem,6vw,5.2rem)] leading-[0.92] text-charcoal">
          {"Let's create something made for your space.".split(" ").map((w, i) => (
            <span key={i} className="final-word inline-block will-change-transform mr-[0.25em]" style={{ opacity: 0, transform: "translateY(26px)" }}>
              {w}
            </span>
          ))}
        </h2>
        <div className="mt-12 flex justify-center">
          <Cta label={CTA_LABEL} solid />
        </div>
        <div className="mx-auto mt-14 grid max-w-3xl gap-px border border-charcoal/10 bg-charcoal/10 sm:grid-cols-[1fr_1.4fr_1fr]">
          <a href={PHONE_TEL} className="group flex items-center gap-3 bg-ivory p-5 text-left transition-colors hover:bg-charcoal">
            <Phone className="h-4 w-4 shrink-0 text-brass" />
            <span className="min-w-0">
              <span className="block text-[0.6rem] uppercase tracking-[0.14em] text-charcoal/45">Call</span>
              <span className="block truncate text-sm font-semibold text-charcoal group-hover:text-ivory">{PHONE}</span>
            </span>
          </a>
          <a href={MAILTO} className="group flex items-center gap-3 bg-ivory p-5 text-left transition-colors hover:bg-charcoal">
            <Mail className="h-4 w-4 shrink-0 text-brass" />
            <span className="min-w-0">
              <span className="block text-[0.6rem] uppercase tracking-[0.14em] text-charcoal/45">Email</span>
              <span className="block truncate text-sm font-semibold text-charcoal group-hover:text-ivory">{EMAIL}</span>
            </span>
          </a>
          <a href={MAPS} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 bg-ivory p-5 text-left transition-colors hover:bg-charcoal">
            <MapPin className="h-4 w-4 shrink-0 text-brass" />
            <span className="min-w-0">
              <span className="block text-[0.6rem] uppercase tracking-[0.14em] text-charcoal/45">Showroom</span>
              <span className="block text-sm font-semibold text-charcoal group-hover:text-ivory">Agrabad, Chattogram</span>
              <span className="block text-[0.68rem] text-charcoal/50">10am–8pm</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
