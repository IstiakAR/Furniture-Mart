import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { COMMENTS } from "@/lib/constants";

function Avatar({ name, color }: { name: string; color: string }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
  return (
    <div
      className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-sm font-bold text-white"
      style={{ background: `linear-gradient(135deg, ${color}, ${color}99)` }}
    >
      {initials}
    </div>
  );
}

function CommentCard({ c }: { c: (typeof COMMENTS)[number] }) {
  return (
    <div className="rounded-2xl border border-ivory/10 bg-white/[0.06] p-5 backdrop-blur-sm">
      <div className="flex gap-3.5">
        <Avatar name={c.author} color={c.color} />
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-2">
            <span className="text-[0.95rem] font-semibold text-ivory">{c.author}</span>
          </div>
          <p className="mt-1.5 text-[0.92rem] leading-relaxed text-ivory/80">{c.text}</p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);

  const pairs = useMemo(() => {
    const result = [];
    for (let i = 0; i < COMMENTS.length; i += 2) result.push(COMMENTS.slice(i, i + 2));
    return result;
  }, []);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % pairs.length), 5000);
    return () => clearInterval(t);
  }, [pairs.length]);

  const pair = pairs[index];

  return (
    <div className="flex flex-col items-center gap-3">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
          className="grid w-full gap-5 md:grid-cols-2"
        >
          {pair.map((c) => (
            <CommentCard key={c.author} c={c} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
