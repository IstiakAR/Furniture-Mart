import { useState } from "react";

export function HeritageVideo() {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="relative aspect-video w-full">
        <iframe
          src="https://www.youtube.com/embed/qEwoJWbXSTs?autoplay=1&rel=0&modestbranding=1&playsinline=1&enablejsapi=1"
          title="Heaven Furniture Mart — Showroom"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      className="group relative aspect-video w-full overflow-hidden bg-charcoal"
      aria-label="Play showroom video"
    >
      <img
        src="https://img.youtube.com/vi/qEwoJWbXSTs/hqdefault.jpg"
        alt="Heaven Furniture Mart showroom"
        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-charcoal/10 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-ivory/30 bg-ivory/10 backdrop-blur-sm transition-all duration-500 group-hover:border-brass group-hover:bg-brass/20 group-hover:scale-110">
          <svg className="ml-1 h-5 w-5 text-ivory" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="6,3 20,12 6,21" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-4 left-5 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-ivory/60">
        Watch our story
      </div>
    </button>
  );
}
