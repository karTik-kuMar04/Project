"use client";

import { Cinzel } from "next/font/google";
import CivilizationCard from "./CivilizationCard";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["700"], variable: "--font-cinzel" });

// Your data array goes here, or you can import it from a separate data file
import { civilizations } from "@/data/civilizations"; 

export default function CivilizationsGrid() {
  return (
    <section className="relative w-full bg-[#090604] py-24 px-6 md:px-12">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-[#b25329]/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.4em] text-[#d16c3d]">
            The Archives
          </span>
          <h2 
            style={{ fontFamily: "var(--font-cinzel), serif" }} 
            className={`${cinzel.variable} text-4xl md:text-6xl tracking-widest text-[#FFF0D4]`}
          >
            Legendary Epochs
          </h2>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {civilizations.map((civ) => (
            <CivilizationCard key={civ.id} data={civ} />
          ))}
        </div>

      </div>
    </section>
  );
}