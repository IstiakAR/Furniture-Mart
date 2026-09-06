import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { P, MATERIALS, WHATSAPP } from "@/lib/constants";

const TRAVERTINE_PHOTO = P.bespoke5;

const DEFAULT_PHOTO = P.bespoke2;

export function Bespoke() {
  const [active, setActive] = useState<string | null>(null);

  const photo = active ?? DEFAULT_PHOTO;

  return (
    <section
      id="bespoke"
      className="relative grid min-h-[94vh] items-stretch overflow-hidden"
      style={{ gridTemplateColumns: "56% 44%", background: "#16302c", color: "#f4f0e8" }}
    >
      {/* ── LEFT: copy + materials ── */}
      <div className="flex flex-col justify-center px-12 py-24 max-w-[620px] max-lg:px-7 max-lg:py-16 max-lg:max-w-none max-md:px-7 max-md:py-10" style={{ gap: "1.5rem" }}>
        <p className="m-0 text-[0.9rem]" style={{ color: "#d9c39a", letterSpacing: "0.02em" }}>
          Bespoke studio
        </p>

        <h2
          id="bespoke-heading"
          className="m-0 font-[family-name:'Cormorant_Garamond',Georgia,serif] font-medium leading-[1.08] tracking-[-0.01em]"
          style={{ fontSize: "clamp(2.5rem, 4vw, 3.6rem)", color: "#f4f0e8" }}
        >
          Furniture, built
          <br />
          around you.
        </h2>

        <p className="m-0 max-w-[46ch] text-[1.05rem] leading-[1.65]" style={{ color: "#cfc9ba" }}>
          Every dimension, material, and finish is chosen for your room, not
          pulled from a shelf. Free design consultation, premium wood, and an
          in-house workshop that builds it exactly as drawn.
        </p>

        <ul className="m-0 flex flex-wrap list-none p-0 pt-2" style={{ gap: "1rem" }}>
          {MATERIALS.map((m) => {
            const isActive = active === m.photo;
            return (
              <li
                key={m.name}
                className="flex items-center text-[0.9rem] cursor-pointer transition-all duration-200"
                style={{
                  gap: "0.6rem",
                  color: isActive ? "#f4f0e8" : "#cfc9ba",
                  padding: "0.4rem 0.7rem",
                  borderRadius: "4px",
                  background: isActive ? "rgba(244,240,232,0.08)" : "transparent",
                  border: `1px solid ${isActive ? "rgba(183,154,103,0.5)" : "rgba(244,240,232,0.2)"}`,
                }}
                onClick={() => setActive(isActive ? null : m.photo)}
              >
                <span
                  className="inline-block h-6 w-6 shrink-0 rounded-full transition-transform duration-200"
                  style={{
                    backgroundColor: m.color,
                    boxShadow: "0 0 0 2px rgba(244,240,232,0.25)",
                  }}
                  aria-hidden="true"
                />
                <span>{m.name}</span>
              </li>
            );
          })}
        </ul>

        <div className="mt-3">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center rounded-[2px] px-8 py-3.5 text-[0.95rem] font-medium no-underline transition-colors duration-200"
            style={{ background: "#b79a67", color: "#0f211f" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#d9c39a")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#b79a67")}
          >
            Start your bespoke project
          </a>
        </div>
      </div>

      {/* ── RIGHT: single tall craft photograph ── */}
      <div className="relative min-h-[320px] max-md:min-h-[260px] max-md:order-first">
        <AnimatePresence mode="wait">
          <motion.img
            key={photo}
            src={photo}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0, scale: photo === TRAVERTINE_PHOTO ? 1.02 : 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: photo === TRAVERTINE_PHOTO ? 0.99 : 0.98 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>
    </section>
  );
}
