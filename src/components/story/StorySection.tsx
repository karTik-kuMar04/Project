"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cinzel, Cormorant_Garamond } from "next/font/google";
import StoryCard from "./storyCard";
import { civilizations } from "@/data/civilizations";

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

    // Stops ScrollTrigger from recalculating mid-scroll when the mobile
    // address bar shows/hides — this was the main cause of scroll "jumps".
    ScrollTrigger.config({ ignoreMobileResize: true });

    const title = introText.querySelector("h2");
    const subtitle = introText.querySelector("p");
    const divider = introText.querySelector(".intro-divider");
    const dividerLines = introText.querySelectorAll(".divider-line");
    const dividerDiamonds = introText.querySelectorAll(".divider-diamond");
    const cardWrappers = cardsWrapper.querySelectorAll(".story-card-wrapper");

    const mm = gsap.matchMedia();

    mm.add(
      {
        isMobile: "(max-width: 767px)",
        isDesktop: "(min-width: 768px)",
      },
      (context) => {
        const { isMobile } = context.conditions as { isMobile: boolean; isDesktop: boolean };

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: () => `+=${window.innerHeight * (civilizations.length * 3.5)}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // 1. Hero Blackout
        tl.to(heroWrapper, { filter: "blur(30px)", opacity: 0, ease: "power1.inOut", duration: 1.5 }, 0)
          .fromTo(overlay, { yPercent: 100 }, { yPercent: 0, ease: "power1.inOut", duration: 1.5 }, 0);

        tl.to({}, { duration: 0.4 });

        // 2. Cinematic Intro Text Sequence (same on all screens, sizing handled by CSS)
        tl.set(introText, { opacity: 1, y: 0 });

        tl.fromTo(title,
          { opacity: 0, scale: isMobile ? 1.2 : 1.4, filter: "blur(20px)", y: 20 },
          { opacity: 1, scale: 1, filter: "blur(0px)", y: 0, duration: 2.5, ease: "power4.out" }
        )
        .set(divider, { opacity: 1 }, "-=1.8")
        .fromTo(dividerLines,
          { scaleX: 0 },
          { scaleX: 1, transformOrigin: "center", duration: 1.6, ease: "power3.inOut" },
          "-=1.8"
        )
        .fromTo(dividerDiamonds,
          { scale: 0, rotate: 0 },
          { scale: 1, rotate: 45, duration: 1.2, ease: "back.out(2)" },
          "-=1.4"
        )
        .fromTo(subtitle,
          { opacity: 0, y: 30, filter: "blur(10px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.8, ease: "power2.out" },
          "-=1.0"
        )
        .to({}, { duration: 1.5 })
        .to(title, { opacity: 0, scale: 1.1, filter: "blur(15px)", duration: 1.2, ease: "power2.inOut" })
        .to(dividerLines, { scaleX: 0, opacity: 0, duration: 1.0, ease: "power3.inOut" }, "-=1.2")
        .to(dividerDiamonds, { scale: 0, opacity: 0, duration: 0.8, ease: "power3.in" }, "-=1.2")
        .to(subtitle, { opacity: 0, y: -20, filter: "blur(10px)", duration: 1.0, ease: "power2.inOut" }, "-=1.0");

        // 3. Card sequence — geometry & slide direction differ per breakpoint
        cardWrappers.forEach((card, index) => {
          const imgContainer = card.querySelector(".card-image-container");
          const group1 = card.querySelector(".card-group-1");
          const group2 = card.querySelector(".card-group-2");
          const group3 = card.querySelector(".card-group-3");
          const button = card.querySelector(".card-button");

          tl.set(card, { opacity: 1, pointerEvents: "auto" });

          if (isMobile) {
            // Image becomes a top banner, text panel lives below it (see StoryCard.tsx classes)
            tl.fromTo(imgContainer,
              { top: "0%", left: "0%", width: "100%", height: "100%", borderRadius: "0px" },
              { top: "4%", left: "4%", width: "92%", height: "32%", borderRadius: "20px", duration: 1.8, ease: "power2.inOut" }
            );

            // Slide up from below instead of in from the right — avoids horizontal overflow
            tl.fromTo(group1, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.4")
              .fromTo(group2, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.5")
              .fromTo(group3, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.5")
              .fromTo(button, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.5");
          } else {
            tl.fromTo(imgContainer,
              { top: "0%", left: "0%", width: "100%", height: "100%", borderRadius: "0px" },
              { top: "12%", left: "6%", width: "40%", height: "76%", borderRadius: "16px", duration: 1.8, ease: "power2.inOut" }
            );

            tl.fromTo(group1, { opacity: 0, x: 300 }, { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
              .fromTo(group2, { opacity: 0, x: 300 }, { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
              .fromTo(group3, { opacity: 0, x: 300 }, { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
              .fromTo(button, { opacity: 0, x: 300 }, { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }, "-=0.5");
          }

          tl.to({}, { duration: 1.5 });

          if (index < cardWrappers.length - 1) {
            tl.to(card, { opacity: 0, filter: "blur(15px)", duration: 1.2, ease: "power2.inOut" });
            tl.set(card, { pointerEvents: "none" });
            tl.to({}, { duration: 0.4 });
          } else {
            tl.to(card, { opacity: 0, filter: "blur(18px)", duration: 1.4, ease: "power2.inOut" });
            tl.set(card, { pointerEvents: "none" });
            tl.to({}, { duration: 0.6 });
          }
        });
      }
    );

    // mm.revert() reverts + kills every tween/ScrollTrigger created inside mm.add,
    // for both breakpoints, on unmount or breakpoint switch.
    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-dvh overflow-hidden bg-transparent select-none">

      <div ref={heroWrapperRef} className="absolute inset-0 z-10 pointer-events-none">
        {children}
      </div>

      <div ref={overlayRef} className="absolute inset-0 bg-black z-20 flex flex-col items-center justify-center px-4 sm:px-6">

        <div ref={introTextRef} className="absolute text-center max-w-4xl px-4 sm:px-6 pointer-events-none opacity-0 select-none flex flex-col items-center">

          <h2
            style={{ fontFamily: "var(--font-cinzel), serif" }}
            className={`${cinzel.variable} text-2xl sm:text-4xl md:text-6xl tracking-[0.08em] sm:tracking-[0.15em] md:tracking-[0.25em] uppercase font-bold mb-2 bg-gradient-to-b from-[#ffffff] via-[#ebd6bd] to-[#b09678] bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(235,214,189,0.25)]`}
          >
            Time Devours Empires
          </h2>

          <div className="intro-divider flex items-center justify-center w-full max-w-lg my-6 md:my-10 opacity-0 select-none">
            <div className="divider-line h-[2px] flex-1 bg-gradient-to-r from-transparent via-[#ebd6bd] to-[#ebd6bd] shadow-[0_0_10px_rgba(235,214,189,0.6)]" />
            <div className="relative mx-3 md:mx-4 flex items-center justify-center">
              <div className="divider-diamond absolute rotate-45 w-4 h-4 md:w-5 md:h-5 border border-[#ebd6bd]/40 animate-pulse" />
              <div className="divider-diamond rotate-45 w-2.5 h-2.5 md:w-3 md:h-3 bg-[#ebd6bd] shadow-[0_0_15px_#ebd6bd,0_0_30px_rgba(235,214,189,0.4)]" />
            </div>
            <div className="divider-line h-[2px] flex-1 bg-gradient-to-l from-transparent via-[#ebd6bd] to-[#ebd6bd] shadow-[0_0_10px_rgba(235,214,189,0.6)]" />
          </div>

          <p
            style={{ fontFamily: "var(--font-cormorant), serif" }}
            className={`${cormorant.variable} text-lg sm:text-xl md:text-3xl text-stone-300 italic font-light leading-relaxed max-w-2xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]`}
          >
            But the echoes of <span className="text-[#ebd6bd] font-normal not-italic">truth</span>,
            knowledge, and extraordinary spirits survive through centuries.
            <span className="block mt-3 md:mt-4 text-sm sm:text-base md:text-xl text-stone-400 font-serif tracking-wide not-italic uppercase opacity-80">
              Peer into the registry of legendary eras...
            </span>
          </p>

        </div>

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