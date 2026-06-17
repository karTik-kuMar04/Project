"use client";

import { motion } from "motion/react";
import { Cinzel, Cormorant_Garamond } from "next/font/google";
import AncientWheel from "./AncientWheel";
import DustParticles from "./DustPartical";



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
      className={`relative flex min-h-screen items-center justify-center overflow-hidden bg-[#090604] ${cinzel.variable} ${cormorant.variable}`}
    >
      {/* Ambient Radial background mixing Bronze and Dark Copper notes */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#21130b_0%,#110804_50%,#090604_100%)] pointer-events-none" />

      {/* Central Ethereal Copper Aura */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b25329]/5 blur-[160px] pointer-events-none" />

      {/* Fixed Background Ancient Wheel */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, rotate: -10 }}
        animate={{ opacity: 0.32, scale: 1, rotate: 0 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 z-0 w-[130vw] max-w-[850px] -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-screen"
      >
        <div className="aspect-square w-full h-full">
          <AncientWheel />
        </div>
      </motion.div>

      {/* Enhanced Multi-Tone Dust & Embers */}
      <DustParticles />

      {/* Main Foreground Layout */}
      <div className="relative z-20 mx-auto flex w-full max-w-5xl flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="flex flex-col items-center"
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

          {/* HEADINGS: Silver vs Burnished Bronze Gradients */}
          {/* HEADING: Silver vs Burnished Bronze Gradients */}
          <h1 
            style={{ fontFamily: "var(--font-cinzel), serif" }}
            // CHANGED: Added gap-4 md:gap-6 and removed leading-tight
            className="flex flex-col items-center justify-center gap-4 md:gap-6 font-extrabold leading-none tracking-widest text-5xl md:text-8xl drop-shadow-[0_8px_24px_rgba(0,0,0,0.9)]"
          >
            {/* PLATINUM / SILVER */}
            <span className="block bg-linear-to-b from-[#FFFFFF] via-[#E2E8F0] to-[#8a9db4] bg-clip-text text-transparent select-none pb-2">
              DISCOVER
            </span>
            {/* DEEP GOLD / ANTIQUE BRONZE */}
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
          // CHANGED: Increased top margin from mt-8 to mt-12 for better pacing
          className="mt-12 max-w-2xl text-xl md:text-2xl leading-relaxed text-stone-300/85 font-semibold italic font-light drop-shadow-md"
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
          className="mt-12 border border-[#a38560]/40 px-12 py-5 text-[#ebd6bd] backdrop-blur-md uppercase tracking-[0.25em] text-xs font-bold transition-all duration-300 cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
        >
          Begin Exploration
        </motion.button>
      </div>


      {/* Screen Edge Vignette */}
      
    </section>
  );
}