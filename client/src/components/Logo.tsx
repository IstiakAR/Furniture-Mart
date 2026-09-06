import { P } from "@/lib/constants";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#hero" className={`flex items-center gap-3 ${light ? "text-ivory" : "text-charcoal"}`}>
      <img src={P.logo} alt="" className="h-9 w-9 object-contain" />
      <span className="flex flex-col leading-none">
        <span className="text-[1.2rem] font-bold uppercase tracking-[0.04em]">
          HE<span className="text-brass">A</span>VEN
        </span>
        <span className="mt-0.5 text-[0.48rem] font-bold uppercase tracking-[0.22em] opacity-60">Furniture Mart</span>
      </span>
    </a>
  );
}
