// REFERENCE ONLY — this file is not built, imported, or served.
//
// This site is static HTML + CSS with no bundler, so a .tsx component cannot
// run here. The effect is ported to vanilla in ../index.html (the .hero-paths
// SVG) and ../styles.css (the .hero-paths rules + ev-path-flow keyframes).
// This copy is kept verbatim as the source of truth for that port.
//
// If the site is ever migrated to Next.js + shadcn + Tailwind, this belongs at
// components/ui/floating-paths.tsx and needs: `npm i motion`, plus the `cn`
// helper at lib/utils.ts that `npx shadcn@latest init` generates.
//
// Two things to know before using it as-is (both are fixed in the vanilla port,
// see README "Floating paths background"):
//   1. `color: rgba(15,23,42,...)` in the paths array is dead code. The render
//      uses stroke="currentColor", so that value never reaches the DOM. On the
//      edithverse near-black background, slate-950 would be invisible anyway.
//   2. It animates unconditionally, with no prefers-reduced-motion opt-out,
//      which brand guideline section 12 requires.

"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function FloatingPathsBackground({
  position,
  children,
  className,
}: {
  position: number;
  className?: string;
  children: React.ReactNode;
}) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className={cn("w-full relative", className)}>
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="w-full h-full text-slate-950 dark:text-white"
          viewBox="0 0 696 316"
          fill="none"
        >
          {paths.map((path) => (
            <motion.path
              key={path.id}
              d={path.d}
              stroke="currentColor"
              strokeWidth={path.width}
              strokeOpacity={0.1 + path.id * 0.03}
              initial={{ pathLength: 0.3, opacity: 0.6 }}
              animate={{
                pathLength: 1,
                opacity: [0.3, 0.6, 0.3],
                pathOffset: [0, 1, 0],
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          ))}
        </svg>
      </div>
      {children}
    </div>
  );
}
