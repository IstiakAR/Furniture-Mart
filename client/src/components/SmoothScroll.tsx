import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        // Calibrated glide: responsive enough to feel precise, soft enough to feel expensive.
        lerp: 0.092,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.35,
        autoRaf: true,
        anchors: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
