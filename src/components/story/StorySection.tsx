"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cinzel, Cormorant_Garamond } from "next/font/google";
import StoryCard from "./storyCard";
import { civilizations } from "@/data/civilizations"; // Ensure this matches your file path

gsap.registerPlugin(ScrollTrigger);

const cinzel = Cinzel({ subsets: ["latin"], weight: ["700"], variable: "--font-cinzel" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-cormorant" });

export default function StorySection({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroWrapperRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const introTextRef = useRef<HTMLDivElement>(null);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const heroWrapper = heroWrapperRef.current;
    const overlay = overlayRef.current;
    const introText = introTextRef.current;
    const cardsWrapper = cardsWrapperRef.current;

    if (!container || !heroWrapper || !overlay || !introText || !cardsWrapper) return;

    const cardWrappers = cardsWrapper.querySelectorAll(".story-card-wrapper");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        // Increased scroll multiplier to 3.5 to accommodate the longer sequential steps
        end: `+=${window.innerHeight * (civilizations.length * 3.5)}px`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      },
    });

    // 1. Hero Blackout
    tl.to(heroWrapper, { filter: "blur(30px)", opacity: 0, ease: "power1.inOut", duration: 1.5 }, 0)
      .fromTo(overlay, { yPercent: 100 }, { yPercent: 0, ease: "power1.inOut", duration: 1.5 }, 0);

    tl.to({}, { duration: 0.4 }); // Pause

    // 2. Intro Text Sequence
    tl.fromTo(introText, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" })
      .to(introText, { opacity: 0, y: -40, duration: 1, delay: 0.8 });

    // 3. Dynamic Card Mapping Sequence (The "Train" Effect)
    cardWrappers.forEach((card, index) => {
      const imgContainer = card.querySelector(".card-image-container");
      
      // Target the new sequential groups
      const group1 = card.querySelector(".card-group-1");
      const group2 = card.querySelector(".card-group-2");
      const group3 = card.querySelector(".card-group-3");
      const button = card.querySelector(".card-button");

      tl.set(card, { opacity: 1, pointerEvents: "auto" });

      // Step A: Image shrinks to the left to make room
      tl.fromTo(imgContainer, 
        { top: "0%", left: "0%", width: "100%", height: "100%", borderRadius: "0px" },
        { top: "12%", left: "6%", width: "40%", height: "76%", borderRadius: "16px", duration: 1.8, ease: "power2.inOut" }
      );

      // Step B: The Train Arrival (Elements slide in horizontally from the right)
      // `x: 300` acts as the right-side starting point (off-screen/edge of screen).
      tl.fromTo(group1, { opacity: 0, x: 300 }, { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
        .fromTo(group2, { opacity: 0, x: 300 }, { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
        .fromTo(group3, { opacity: 0, x: 300 }, { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
        .fromTo(button, { opacity: 0, x: 300 }, { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }, "-=0.5");

      // Step C: Hold screen for reading time
      tl.to({}, { duration: 1.5 });

      // Step D: Vanish & Transition
      if (index < cardWrappers.length - 1) {
        // Blur and fade out completely to black
        tl.to(card, {
          opacity: 0,
          filter: "blur(15px)",
          duration: 1.2,
          ease: "power2.inOut"
        });
        tl.set(card, { pointerEvents: "none" });

        // THE GAP: A brief moment of pure darkness before the next card triggers
        tl.to({}, { duration: 0.4 });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-transparent select-none">
      
      <div ref={heroWrapperRef} className="absolute inset-0 w-full h-screen z-10 pointer-events-none">
        {children}
      </div>

      <div ref={overlayRef} className="absolute inset-0 bg-black z-20 flex flex-col items-center justify-center px-6">
        
        <div ref={introTextRef} className="absolute text-center max-w-3xl px-4 pointer-events-none opacity-0">
          <h2 style={{ fontFamily: "var(--font-cinzel), serif" }} className={`${cinzel.variable} text-3xl md:text-5xl text-[#ebd6bd] tracking-widest uppercase mb-6`}>
            Time Devours Empires
          </h2>
          <p style={{ fontFamily: "var(--font-cormorant), serif" }} className={`${cormorant.variable} text-xl md:text-2xl text-stone-400 italic font-light leading-relaxed`}>
            But the echoes of truth, knowledge, and extraordinary spirits survive through centuries. Peer into the registry of legendary eras...
          </p>
        </div>

        {/* Render Sub-components */}
        <div ref={cardsWrapperRef} className="absolute inset-0 w-full h-full">
          {civilizations.map((civ, index) => (
            <StoryCard 
              key={civ.id}
              data={civ}
              index={index}
            />
          ))}
        </div>

      </div>
    </div>
  );
}