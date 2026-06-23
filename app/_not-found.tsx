"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { Cinzel, Cormorant_Garamond } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-cinzel",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
});

/* ---------- Broken Dharma Wheel SVG ---------- */
function BrokenWheel() {
  const spokes = 12;
  const cx = 80;
  const cy = 80;
  const innerR = 20;
  const outerR = 64;

  return (
    <svg
      viewBox="0 0 160 160"
      width={160}
      height={160}
      style={{ animation: "slowSpin 30s linear infinite" }}
    >
      {/* Outer ring — partially dashed to signal incompleteness */}
      <circle
        cx={cx} cy={cy} r={outerR}
        fill="none"
        stroke="#D4AF37"
        strokeWidth={1}
        strokeOpacity={0.25}
        strokeDasharray="3 6"
      />
      {/* Solid arc overlay (the "completed" portion) */}
      <circle
        cx={cx} cy={cy} r={outerR}
        fill="none"
        stroke="#D4AF37"
        strokeWidth={1.2}
        strokeOpacity={0.55}
        strokeDasharray={`${outerR * 2 * Math.PI * 0.55} ${outerR * 2 * Math.PI * 0.45}`}
        strokeDashoffset={outerR * 2 * Math.PI * 0.1}
      />

      {/* Mid ring */}
      <circle
        cx={cx} cy={cy} r={38}
        fill="none"
        stroke="#b25329"
        strokeWidth={0.6}
        strokeOpacity={0.3}
      />

      {/* Inner ring */}
      <circle
        cx={cx} cy={cy} r={innerR}
        fill="none"
        stroke="#D4AF37"
        strokeWidth={1}
        strokeOpacity={0.5}
      />

      {/* Spokes — some solid, some faded/dotted (missing) */}
      {Array.from({ length: spokes }).map((_, i) => {
        const angle = (i * Math.PI * 2) / spokes - Math.PI / 2;
        const x1 = cx + Math.cos(angle) * (innerR + 2);
        const y1 = cy + Math.sin(angle) * (innerR + 2);
        const x2 = cx + Math.cos(angle) * (outerR - 4);
        const y2 = cy + Math.sin(angle) * (outerR - 4);

        // Spokes 4, 7, 10 are "missing" — dotted & faded
        const missing = [4, 7, 10].includes(i);
        return (
          <line
            key={i}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={missing ? "#8a7a5c" : "#D4AF37"}
            strokeWidth={missing ? 0.7 : 1}
            strokeOpacity={missing ? 0.2 : 0.5}
            strokeDasharray={missing ? "2 3" : undefined}
          />
        );
      })}

      {/* Glowing center hub */}
      <circle cx={cx} cy={cy} r={6}  fill="#D4AF37" fillOpacity={0.15} />
      <circle cx={cx} cy={cy} r={3}  fill="#D4AF37" fillOpacity={0.7}  />
      <circle cx={cx} cy={cy} r={1.2} fill="#FFF0D4" fillOpacity={0.9} />
    </svg>
  );
}

/* ---------- Page ---------- */
export default function NotFound() {
  const router = useRouter();
  return (
    <main
      className={`relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#090604] ${cinzel.variable} ${cormorant.variable}`}
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,#21130b_0%,#110804_55%,#090604_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b25329]/6 blur-[120px]" />

      {/* Slow-spin keyframe */}
      <style>{`@keyframes slowSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>

      <div className="relative z-10 flex flex-col items-center px-6 text-center max-w-xl">

        {/* Broken wheel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="mb-10"
        >
          <BrokenWheel />
        </motion.div>

        {/* Kicker */}
        <motion.span
          initial={{ opacity: 0, letterSpacing: "0.15em" }}
          animate={{ opacity: 1, letterSpacing: "0.45em" }}
          transition={{ delay: 0.4, duration: 1.2 }}
          style={{ fontFamily: "var(--font-cinzel), serif" }}
          className="mb-5 block text-[10px] uppercase tracking-[0.45em] text-amber-600/60"
        >
          The Path Is Lost
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
          style={{ fontFamily: "var(--font-cinzel), serif" }}
          className="mb-6 text-4xl font-extrabold leading-tight tracking-wide text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)] md:text-5xl"
        >
          This Scroll Has{" "}
          <span className="bg-gradient-to-b from-[#FFF0D4] via-[#D4AF37] to-[#7A5C13] bg-clip-text text-transparent">
            Not Been Written
          </span>
        </motion.h1>

        {/* Decorative divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.85, duration: 0.9 }}
          className="mb-7 flex items-center gap-4"
        >
          <div className="h-px w-14 bg-gradient-to-r from-transparent to-amber-700/40" />
          <span className="text-amber-700/60 text-xs">✦</span>
          <div className="h-px w-14 bg-gradient-to-l from-transparent to-amber-700/40" />
        </motion.div>

        {/* Body text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.2 }}
          style={{ fontFamily: "var(--font-cormorant), serif" }}
          className="mb-3 text-xl leading-relaxed text-stone-300/80 italic md:text-2xl"
        >
          You&apos;ve wandered beyond the known scrolls.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.2 }}
          style={{ fontFamily: "var(--font-cormorant), serif" }}
          className="mb-12 text-base leading-loose text-stone-500 md:text-lg"
        >
          The URL you followed may no longer exist — or our craftsmen
          are still shaping this page into existence. Return, and explore
          the chapters that are ready.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.45, duration: 1 }}
          className="flex flex-col items-center gap-4 sm:flex-row"
        >
          {/* Goes back to whichever page the user came from */}
          <motion.button
            onClick={() => router.back()}
            whileHover={{
              scale: 1.02,
              borderColor: "#D4AF37",
              color: "#FFF0D4",
              backgroundColor: "rgba(212,175,55,0.05)",
              boxShadow: "0 0 28px rgba(178,83,41,0.22)",
            }}
            whileTap={{ scale: 0.97 }}
            style={{ fontFamily: "var(--font-cinzel), serif" }}
            className="cursor-pointer border border-[#a38560]/40 px-8 py-4 text-[10px] font-bold uppercase tracking-[0.28em] text-[#ebd6bd] shadow-[0_4px_20px_rgba(0,0,0,0.4)] backdrop-blur-md transition-colors duration-300"
          >
            Return to the Known World
          </motion.button>

          {/* Always goes to / */}
          <Link href="/">
            <motion.span
              whileHover={{
                scale: 1.02,
                borderColor: "#D4AF37",
                color: "#FFF0D4",
                backgroundColor: "rgba(212,175,55,0.05)",
                boxShadow: "0 0 28px rgba(178,83,41,0.22)",
              }}
              whileTap={{ scale: 0.97 }}
              style={{ fontFamily: "var(--font-cinzel), serif" }}
              className="inline-block cursor-pointer border border-[#a38560]/40 px-8 py-4 text-[10px] font-bold uppercase tracking-[0.28em] text-[#ebd6bd] shadow-[0_4px_20px_rgba(0,0,0,0.4)] backdrop-blur-md transition-colors duration-300"
            >
              Find the Good Path
            </motion.span>
          </Link>
        </motion.div>

      </div>

      {/* Bottom vignette */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#090604] to-transparent" />
    </main>
  );
}
