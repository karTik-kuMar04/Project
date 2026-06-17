"use client";

import { Cinzel, Cormorant_Garamond } from "next/font/google";
import Image from "next/image";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-cinzel" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-cormorant" });

interface Civilization {
  id: string;
  name: string;
  period: string;
  region: string;
  majorCities: string[];
  knownFor: string[];
  summary: string;
  greatestAchievement: string;
  image: string;
}

export default function CivilizationCard({ data }: { data: Civilization }) {
  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-[#a38560]/20 bg-stone-950/60 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/60 hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)]">
      
      {/* Top Image Section */}
      <div className="relative h-48 w-full overflow-hidden border-b border-[#a38560]/20">
        <Image 
          src={data.image} 
          alt={data.name} 
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-110 opacity-70 group-hover:opacity-100"
        />
        {/* Gradient overlay to blend image into the dark card */}
        <div className="absolute inset-0 bg-linear-to-t from-stone-950/90 to-transparent" />
        
        {/* Period Badge */}
        <div className="absolute bottom-4 left-6">
          <span className="bg-[#090604]/80 border border-[#d16c3d]/40 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#d16c3d] backdrop-blur-sm rounded-sm">
            {data.period}
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col p-6 flex-grow">
        <h3 
          style={{ fontFamily: "var(--font-cinzel), serif" }} 
          className={`${cinzel.variable} mb-1 text-2xl tracking-wide text-[#FFF0D4]`}
        >
          {data.name}
        </h3>
        
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-stone-500">
          {data.region}
        </p>

        <p 
          style={{ fontFamily: "var(--font-cormorant), serif" }} 
          className={`${cormorant.variable} mb-6 flex-grow text-lg italic leading-relaxed text-stone-300 font-light`}
        >
          {data.summary}
        </p>

        {/* Greatest Achievement Highlight */}
        <div className="mb-6 border-l-2 border-[#D4AF37]/40 pl-4">
          <span className="block text-[10px] font-bold uppercase tracking-widest text-[#a38560]">
            Pinnacle Achievement
          </span>
          <span 
            style={{ fontFamily: "var(--font-cormorant), serif" }}
            className={`${cormorant.variable} text-[1.1rem] text-[#ebd6bd] font-medium`}
          >
            {data.greatestAchievement}
          </span>
        </div>

        {/* Tags / Known For */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {data.knownFor.map((tag, i) => (
            <span 
              key={i} 
              className="rounded bg-black/40 border border-stone-800 px-2.5 py-1 text-[10px] font-medium tracking-wider text-stone-400 uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}