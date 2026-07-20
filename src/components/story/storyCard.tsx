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
    <div className="story-card-wrapper absolute inset-0 opacity-0 pointer-events-none z-40 overflow-hidden">

      {/* 1. CINEMATIC IMAGE — GSAP animates this to a top banner on mobile, a left box on desktop */}
      <div className="card-image-container absolute inset-0 w-full h-full z-10 origin-center overflow-hidden">
        <Image
          src={data.image}
          alt={data.name}
          onError={(e) => {
            e.currentTarget.src = "./image.jpg";
          }}
          fill
          sizes="(max-width: 767px) 100vw, 40vw"
          className="w-full h-full object-cover filter brightness-[0.6] contrast-[1.1]"
        />
      </div>

      {/* 2. TEXT PANEL — sits below the image on mobile, right half on desktop */}
      <div className="absolute inset-x-0 bottom-0 h-[64%] z-20 flex flex-col justify-start items-start px-5 pt-2 pb-4 text-left overflow-hidden md:inset-x-auto md:top-0 md:right-0 md:bottom-auto md:left-auto md:w-1/2 md:h-full md:justify-center md:px-16 md:pt-0 md:pb-0">

        {/* GROUP 1: Period & Name */}
        <div className="card-group-1 w-full opacity-0 translate-y-10 md:translate-y-0 md:translate-x-[400px]">
          <span className="text-[9px] md:text-xs tracking-[0.2em] md:tracking-[0.4em] text-[#d16c3d] uppercase font-bold mb-2 md:mb-3 block">
            Chapter 0{index + 1} &nbsp;•&nbsp; {data.period}
          </span>
          <h3
            style={{ fontFamily: "var(--font-cinzel), serif" }}
            className={`${cinzel.variable} text-2xl sm:text-3xl md:text-5xl text-[#FFF0D4] tracking-wide md:tracking-wider font-bold mb-3 md:mb-6 leading-tight line-clamp-2 md:line-clamp-none`}
          >
            {data.name}
          </h3>
        </div>

        {/* GROUP 2: Region, Cities, and Tags */}
        <div className="card-group-2 w-full opacity-0 translate-y-10 md:translate-y-0 md:translate-x-[400px] mb-3 md:mb-6">
          <div className="flex flex-col gap-1 md:gap-2 mb-2 md:mb-4 text-stone-400 text-xs md:text-sm font-medium tracking-wide">
            <p className="line-clamp-1 md:line-clamp-none">
              <strong className="text-[#a38560] uppercase text-[9px] md:text-[10px] tracking-widest mr-2">Region:</strong> {data.region}
            </p>
            <p className="line-clamp-1 md:line-clamp-none">
              <strong className="text-[#a38560] uppercase text-[9px] md:text-[10px] tracking-widest mr-2">Major Cities:</strong> {data.majorCities.join(", ")}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 md:gap-2 max-h-7 md:max-h-none overflow-hidden">
            {data.knownFor.map((tag, i) => (
              <span key={i} className="rounded bg-black/50 border border-[#a38560]/30 px-2 md:px-2.5 py-0.5 md:py-1 text-[9px] md:text-[10px] font-medium tracking-wider text-stone-300 uppercase shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* GROUP 3: Summary & Achievements */}
        <div className="card-group-3 w-full max-w-lg opacity-0 translate-y-10 md:translate-y-0 md:translate-x-[400px] mb-4 md:mb-8">
          <p
            style={{ fontFamily: "var(--font-cormorant), serif" }}
            className={`${cormorant.variable} text-sm md:text-xl text-stone-300 leading-relaxed font-light italic mb-3 md:mb-6 line-clamp-3 md:line-clamp-none`}
          >
            {data.summary}
          </p>

          <div className="border-l-2 border-[#D4AF37]/50 pl-3 md:pl-4 bg-linear-to-r from-[#D4AF37]/5 to-transparent py-1.5 md:py-2">
            <span className="block text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-[#a38560] mb-1">
              Pinnacle Achievement
            </span>
            <span style={{ fontFamily: "var(--font-cormorant), serif" }} className={`${cormorant.variable} text-sm md:text-[1.1rem] text-[#ebd6bd] font-medium`}>
              {data.greatestAchievement}
            </span>
          </div>
        </div>

        {/* ACTION BUTTON */}
        <Link href={`/${data.id}`} className="inline-block card-button opacity-0 translate-y-10 md:translate-y-0 md:translate-x-[400px] w-full md:w-auto">
          <button
            style={{ fontFamily: "var(--font-cinzel), serif" }}
            className={`${cinzel.variable} w-full border border-[#a38560]/50 px-6 md:px-8 py-3 md:py-3.5 text-[#ebd6bd] tracking-[0.2em] text-[10px] md:text-xs font-bold uppercase backdrop-blur-md transition-colors duration-300 hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] shadow-[0_0_15px_rgba(0,0,0,0.5)] cursor-pointer`}
          >
            Explore Era
          </button>
        </Link>

      </div>
    </div>
  );
}