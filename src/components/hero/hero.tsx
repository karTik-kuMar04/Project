"use client";

import { motion } from "motion/react";
import { Cinzel, Cormorant_Garamond } from "next/font/google";
import AncientWheel from "./AncientWheel";
import DustParticles from "./DustPartical"; // Fixed typo if needed, or keep your original filename
import Galaxy from "../ui/Galaxybg";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-cinzel",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-cormorant",
});

export default function Hero() {
  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-[#090604] ${cinzel.variable} ${cormorant.variable}`}
    >
      {/* BACKGROUND LAYER (Z-INDEX: 0) */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <Galaxy 
          mouseRepulsion
          mouseInteraction
          density={1}
          glowIntensity={0.3}
          saturation={0}
          hueShift={140}
          twinkleIntensity={0.3}
          rotationSpeed={0.1}
          repulsionStrength={2}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={1}
        />
      </div>

      {/* MIDGROUND LAYER: Ancient Wheel (Z-INDEX: 1) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, rotate: -10 }}
        animate={{ opacity: 0.32, scale: 1, rotate: 0 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 z-10 w-[130vw] max-w-[850px] -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-screen"
      >
        <div className="aspect-square w-full h-full">
          <AncientWheel />
        </div>
      </motion.div>

      {/* FOREGROUND LAYER: Content Layout (Z-INDEX: 20) */}
      <div className="relative z-20 mx-auto flex w-full max-w-5xl flex-col items-center px-6 text-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="flex flex-col items-center pointer-events-auto"
        >
          {/* KICKER: Polished Copper Metallic Accent */}
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.45em" }}
            transition={{ delay: 0.4, duration: 1.2 }}
            className="mb-6 text-xs md:text-sm bg-linear-to-r from-[#d16c3d] via-[#f3a97e] to-[#b05224] bg-clip-text text-transparent uppercase font-bold tracking-[0.45em]"
          >
            The Golden Age Returns
          </motion.span>

          {/* HEADINGS */}
          <h1 
            style={{ fontFamily: "var(--font-cinzel), serif" }}
            className="flex flex-col items-center justify-center gap-4 md:gap-6 font-extrabold leading-none tracking-widest text-5xl md:text-8xl drop-shadow-[0_8px_24px_rgba(0,0,0,0.9)]"
          >
            <span className="block bg-linear-to-b from-[#FFFFFF] via-[#E2E8F0] to-[#8a9db4] bg-clip-text text-transparent select-none pb-2">
              DISCOVER
            </span>
            <span className="block bg-linear-to-b from-[#FFF0D4] via-[#D4AF37] to-[#7A5C13] bg-clip-text text-transparent select-none">
              ANCIENT INDIA
            </span>
          </h1>
        </motion.div>

        {/* PARAGRAPH: Literary Sandstone Finish */}
        <motion.p
          style={{ fontFamily: "var(--font-cormorant), serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1.2 }}
          className="mt-12 max-w-2xl text-xl md:text-2xl leading-relaxed text-stone-300/85 font-semibold italic font-light drop-shadow-md pointer-events-auto"
        >
          Journey through empires, warriors, scholars,
          dynasties and civilizations that made India Great.
        </motion.p>

        {/* BUTTON: Classic Bronze Frame with Hover Glow States */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.02,
            borderColor: "#D4AF37",
            color: "#FFF0D4",
            backgroundColor: "rgba(212, 175, 55, 0.05)",
            boxShadow: "0 0 30px rgba(178, 83, 41, 0.25)",
          }}
          whileTap={{ scale: 0.98 }}
          style={{ fontFamily: "var(--font-cinzel), serif" }}
          className="mt-12 border border-[#a38560]/40 px-12 py-5 text-[#ebd6bd] backdrop-blur-md uppercase tracking-[0.25em] text-xs font-bold transition-all duration-300 cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.4)] pointer-events-auto"
        >
          Begin Exploration
        </motion.button>
      </div>
      
      {/* Screen Edge Vignette */}
    </section>
  );
}