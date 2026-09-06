import { ArrowUpRight } from "lucide-react";
import { WHATSAPP, CTA_LABEL } from "@/lib/constants";

export function Cta({
  dark = false,
  solid = false,
  label = CTA_LABEL,
  className = "",
}: {
  dark?: boolean;
  solid?: boolean;
  label?: string;
  className?: string;
}) {
  const base = solid
    ? `btn-lift inline-flex items-center gap-2.5 px-6 py-3.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] ${dark ? "bg-brass text-charcoal hover:bg-[#c8aa79]" : "bg-charcoal text-ivory hover:bg-teal"}`
    : `editorial-link ${dark ? "text-ivory" : "text-charcoal"}`;
  return (
    <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className={`${base} ${className}`}>
      {label} <ArrowUpRight className="btn-arrow h-3.5 w-3.5" />
    </a>
  );
}
