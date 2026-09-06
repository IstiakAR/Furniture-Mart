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
      className="relative grid min-h-[94svh] grid-cols-1 items-stretch overflow-hidden lg:grid-cols-[56%_44%]"
      style={{ background: "#16302c", color: "#f4f0e8" }}
    >
      {/* ── LEFT: copy + materials ── */}
      <div className="flex flex-col justify-center gap-5 px-6 py-10 sm:gap-6 sm:px-10 sm:py-20 lg:max-w-[620px] lg:px-12 lg:py-24">
        <p className="m-0 text-[0.78rem] sm:text-[0.9rem]" style={{ color: "#d9c39a", letterSpacing: "0.02em" }}>
          Bespoke studio
        </p>

        <h2
          id="bespoke-heading"
          className="m-0 font-[family-name:'Cormorant_Garamond',Georgia,serif] font-medium text-[2.05rem] leading-[1.1] tracking-[-0.01em] sm:text-[clamp(2.5rem,4vw,3.6rem)] sm:leading-[1.08]"
          style={{ color: "#f4f0e8" }}
        >
          Furniture, built
          <br />
          around you.
        </h2>

        <p className="m-0 max-w-[46ch] text-[0.92rem] leading-[1.55] sm:text-[1.05rem] sm:leading-[1.65]" style={{ color: "#cfc9ba" }}>
          Every dimension, material, and finish is chosen for your room, not
          pulled from a shelf. Free design consultation, premium wood, and an
          in-house workshop that builds it exactly as drawn.
        </p>

        <ul className="m-0 flex list-none flex-wrap gap-2 p-0 pt-1 sm:gap-4 sm:pt-2">
          {MATERIALS.map((m) => {
            const isActive = active === m.photo;
            return (
              <li
                key={m.name}
                className="flex cursor-pointer items-center text-[0.75rem] transition-all duration-200 sm:text-[0.9rem]"
                style={{
                  gap: "0.5rem",
                  color: isActive ? "#f4f0e8" : "#cfc9ba",
                  padding: "0.35rem 0.6rem",
                  borderRadius: "4px",
                  background: isActive ? "rgba(244,240,232,0.08)" : "transparent",
                  border: `1px solid ${isActive ? "rgba(183,154,103,0.5)" : "rgba(244,240,232,0.2)"}`,
                }}
                onClick={() => setActive(isActive ? null : m.photo)}
              >
                <span
                  className="inline-block h-4 w-4 shrink-0 rounded-full transition-transform duration-200 sm:h-6 sm:w-6"
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

        <div className="mt-1 sm:mt-3">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center rounded-[2px] px-6 py-3 text-[0.82rem] font-medium no-underline transition-colors duration-200 sm:px-8 sm:py-3.5 sm:text-[0.95rem]"
            style={{ background: "#b79a67", color: "#0f211f" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#d9c39a")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#b79a67")}
          >
            Start your bespoke project
          </a>
        </div>
      </div>

      {/* ── RIGHT: single tall craft photograph ── */}
      <div className="relative order-first min-h-[36svh] lg:order-none lg:min-h-0">
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
