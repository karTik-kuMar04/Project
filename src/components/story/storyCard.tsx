"use client";

import { Cinzel, Cormorant_Garamond } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["700"], variable: "--font-cinzel" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-cormorant" });

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

interface StoryCardProps {
  data: Civilization;
  index: number;
}

export default function StoryCard({ data, index }: StoryCardProps) {
  return (
    <div className="story-card-wrapper absolute inset-0 w-full h-screen opacity-0 pointer-events-none z-40 overflow-hidden">

      {/* 1. CINEMATIC IMAGE */}
      <div className="card-image-container absolute inset-0 w-full h-full z-10 origin-center overflow-hidden">
        <Image
          src={data.image}
          alt={data.name}
          onError={(e) => {
            e.currentTarget.src = "./image.jpg";
          }}
          fill
          sizes="100vw"
          className="w-full h-full object-cover filter brightness-[0.6] contrast-[1.1]"
        />
      </div>

      {/* 2. TEXT PANEL CONTAINER */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full z-20 flex flex-col justify-center items-start px-8 md:px-16 text-left overflow-hidden">

        {/* GROUP 1: Period & Name */}
        <div className="card-group-1 w-full opacity-0 translate-x-[400px]">
          <span className="text-xs tracking-[0.4em] text-[#d16c3d] uppercase font-bold mb-3 block">
            Chapter 0{index + 1} &nbsp;•&nbsp; {data.period}
          </span>
          <h3
            style={{ fontFamily: "var(--font-cinzel), serif" }}
            className={`${cinzel.variable} text-4xl md:text-5xl text-[#FFF0D4] tracking-wider font-bold mb-6 leading-tight`}
          >
            {data.name}
          </h3>
        </div>

        {/* GROUP 2: Region, Cities, and Tags */}
        <div className="card-group-2 w-full opacity-0 translate-x-[400px] mb-6">
          <div className="flex flex-col gap-2 mb-4 text-stone-400 text-sm font-medium tracking-wide">
            <p><strong className="text-[#a38560] uppercase text-[10px] tracking-widest mr-2">Region:</strong> {data.region}</p>
            <p><strong className="text-[#a38560] uppercase text-[10px] tracking-widest mr-2">Major Cities:</strong> {data.majorCities.join(", ")}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {data.knownFor.map((tag, i) => (
              <span key={i} className="rounded bg-black/50 border border-[#a38560]/30 px-2.5 py-1 text-[10px] font-medium tracking-wider text-stone-300 uppercase shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* GROUP 3: Summary & Achievements */}
        <div className="card-group-3 w-full max-w-lg opacity-0 translate-x-[400px] mb-8">
          <p
            style={{ fontFamily: "var(--font-cormorant), serif" }}
            className={`${cormorant.variable} text-lg md:text-xl text-stone-300 leading-relaxed font-light italic mb-6`}
          >
            {data.summary}
          </p>

          <div className="border-l-2 border-[#D4AF37]/50 pl-4 bg-linear-to-r from-[#D4AF37]/5 to-transparent py-2">
            <span className="block text-[10px] font-bold uppercase tracking-widest text-[#a38560] mb-1">
              Pinnacle Achievement
            </span>
            <span style={{ fontFamily: "var(--font-cormorant), serif" }} className={`${cormorant.variable} text-[1.1rem] text-[#ebd6bd] font-medium`}>
              {data.greatestAchievement}
            </span>
          </div>
        </div>

        {/* ACTION BUTTON */}
        <Link href={`/${data.id}`} className="inline-block card-button opacity-0 translate-x-[400px]">
          <button
            style={{ fontFamily: "var(--font-cinzel), serif" }}
            className={`${cinzel.variable} w-full border border-[#a38560]/50 px-8 py-3.5 text-[#ebd6bd] tracking-[0.2em] text-xs font-bold uppercase backdrop-blur-md transition-colors duration-300 hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] shadow-[0_0_15px_rgba(0,0,0,0.5)] cursor-pointer`}
          >
            Explore Era
          </button>
        </Link>

      </div>
    </div>
  );
}
