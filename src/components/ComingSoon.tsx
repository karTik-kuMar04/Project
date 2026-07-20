"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cinzel, Cormorant_Garamond } from "next/font/google";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700", "800"], variable: "--font-cinzel" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-cormorant" });

const upcomingChapters = [
  {
    era: "1526 – 1707",
    title: "Throne of the Mughals",
    teaser: "Marble, miniature art, and an empire built on conquest and courtly splendour.",
  },
  {
    era: "1600s – 1818",
    title: "The Great Resistance",
    teaser: "Marathas, Rajputs, and Sikh warriors who refused to bow before an empire.",
  },
  {
    era: "1757 – 1947",
    title: "The Company Raj",
    teaser: "A trading company becomes a crown, and a subcontinent is remade in chains.",
  },
  {
    era: "1857 – 1947",
    title: "The Fire of Swaraj",
    teaser: "Ordinary people, extraordinary courage — the long march to freedom.",
  },
];

function ClockIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

export default function ComingSoon() {
  const sectionRef = useRef<HTMLElement>(null);
  const muralRevealRef = useRef<HTMLDivElement>(null);
  const muralParallaxRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const muralReveal = muralRevealRef.current;
    const muralParallax = muralParallaxRef.current;
    const timelineBlock = timelineRef.current;

    if (!section || !muralReveal || !muralParallax || !timelineBlock) return;

    const lineDesktop = timelineBlock.querySelector(".chapter-line-desktop");
    const lineMobile = timelineBlock.querySelector(".chapter-line-mobile");
    const dotEls = timelineBlock.querySelectorAll(".chapter-dot");
    const contentEls = timelineBlock.querySelectorAll(".chapter-content");

    const ctx = gsap.context(() => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReduced) {
        gsap.set(muralReveal, { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 });
        gsap.set(muralParallax, { y: 0, scale: 1 });
        gsap.set([lineDesktop, lineMobile], { scaleX: 1, scaleY: 1 });
        gsap.set(dotEls, { backgroundColor: "#D4AF37", borderColor: "#D4AF37" });
        gsap.set(contentEls, { opacity: 1, y: 0 });
        return;
      }

      // Mural: clip-path wipe reveal, tied to scroll (reversible)
      gsap.fromTo(muralReveal,
        { clipPath: "inset(0% 100% 0% 0%)", opacity: 0.4 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: muralReveal,
            start: "top 90%",
            end: "top 40%",
            scrub: 1,
          },
        }
      );

      // Mural: continuous parallax + settle drift across the whole pass
      gsap.fromTo(muralParallax,
        { y: 60, scale: 1.12 },
        {
          y: -40,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: muralReveal,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );

      // Timeline: line draws + dots light up + content reveals, in one scrubbed sequence
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: timelineBlock,
          start: "top 75%",
          end: "bottom 65%",
          scrub: 1,
        },
      });

      tl.fromTo(lineDesktop, { scaleX: 0 }, { scaleX: 1, duration: 1, ease: "none" }, 0)
        .fromTo(lineMobile, { scaleY: 0 }, { scaleY: 1, duration: 1, ease: "none" }, 0);

      dotEls.forEach((dot, i) => {
        const pos = dotEls.length > 1 ? (i / (dotEls.length - 1)) * 0.85 : 0;
        tl.to(dot, {
          backgroundColor: "#D4AF37",
          borderColor: "#D4AF37",
          boxShadow: "0 0 12px rgba(212,175,55,0.7)",
          duration: 0.15,
          ease: "none",
        }, pos);
      });

      contentEls.forEach((content, i) => {
        const pos = contentEls.length > 1 ? (i / (contentEls.length - 1)) * 0.85 : 0;
        tl.fromTo(content,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.2, ease: "none" },
          pos
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden bg-[#090604] px-4 sm:px-6 py-24 md:py-32 ${cinzel.variable} ${cormorant.variable}`}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[#a38560]/40 to-transparent" />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <span className="mb-5 text-[10px] sm:text-xs uppercase font-bold tracking-[0.35em] sm:tracking-[0.45em] bg-linear-to-r from-[#d16c3d] via-[#f3a97e] to-[#b05224] bg-clip-text text-transparent">
          Coming Soon &nbsp;·&nbsp; New Chapters
        </span>

        <h2
          style={{ fontFamily: "var(--font-cinzel), serif" }}
          className="flex flex-col items-center gap-2 md:gap-3 font-extrabold leading-tight tracking-wide text-4xl sm:text-5xl md:text-7xl drop-shadow-[0_6px_20px_rgba(0,0,0,0.9)]"
        >
          <span className="bg-linear-to-b from-[#FFFFFF] via-[#E2E8F0] to-[#8a9db4] bg-clip-text text-transparent">
            CONQUEST
          </span>
          <span className="bg-linear-to-b from-[#FFF0D4] via-[#D4AF37] to-[#7A5C13] bg-clip-text text-transparent">
            TO FREEDOM
          </span>
        </h2>

        <p
          style={{ fontFamily: "var(--font-cormorant), serif" }}
          className="mt-5 md:mt-6 max-w-xl text-base sm:text-lg md:text-xl italic font-light leading-relaxed text-stone-300/80"
        >
          From the fall of Delhi&apos;s throne to the fire of Swaraj — the next four sagas
          of Forgotten Heroes of India are being written.
        </p>
      </motion.div>

      {/* FRAMED MURAL */}
      <div className="relative z-10 mx-auto mt-14 md:mt-20 max-w-5xl">
        <div className="relative rounded-sm border border-[#a38560]/30 bg-black/40 p-2 sm:p-3 shadow-[0_0_60px_rgba(0,0,0,0.55)]">
          <span className="absolute -top-1.5 -left-1.5 h-2.5 w-2.5 rotate-45 bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]" />
          <span className="absolute -top-1.5 -right-1.5 h-2.5 w-2.5 rotate-45 bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]" />
          <span className="absolute -bottom-1.5 -left-1.5 h-2.5 w-2.5 rotate-45 bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]" />
          <span className="absolute -bottom-1.5 -right-1.5 h-2.5 w-2.5 rotate-45 bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]" />

          <div
            ref={muralRevealRef}
            className="relative w-full aspect-[1024/572] overflow-hidden rounded-sm opacity-0"
            style={{ clipPath: "inset(0% 100% 0% 0%)" }}
          >
            <div ref={muralParallaxRef} className="absolute inset-0 scale-[1.12]">
              <Image
                src="/images/coming_soon2.png"
                alt="A watercolor mural depicting Mughal-era battles, Rajput and Sikh resistance, British colonization, and the Indian freedom movement"
                fill
                sizes="(max-width: 768px) 100vw, 1024px"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
            <p
              style={{ fontFamily: "var(--font-cormorant), serif" }}
              className="absolute bottom-3 left-4 right-4 sm:bottom-5 sm:left-6 sm:right-6 text-xs sm:text-sm md:text-base italic text-stone-200/90 drop-shadow-md"
            >
              One mural, four centuries — Mughal thrones to the march for Swaraj.
            </p>
          </div>
        </div>
      </div>

      {/* TIMELINE */}
      <div ref={timelineRef} className="relative z-10 mx-auto mt-16 md:mt-24 max-w-5xl">
        <div className="chapter-line-desktop hidden md:block absolute top-[13px] left-[12.5%] right-[12.5%] h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-[#a38560]/60 to-transparent" />
        <div className="chapter-line-mobile md:hidden absolute left-3.5 top-2 bottom-2 w-px origin-top scale-y-0 bg-gradient-to-b from-[#a38560]/60 via-[#a38560]/20 to-transparent" />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
          {upcomingChapters.map((chapter) => (
            <div
              key={chapter.title}
              className="relative flex items-start gap-4 md:flex-col md:items-center md:gap-0 md:text-center"
            >
              <div className="chapter-dot relative z-10 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-stone-700 bg-stone-800/40 md:mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-stone-500" />
              </div>

              <div className="chapter-content flex-1 opacity-0 md:flex-none">
                <span className="mb-1 block text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#d16c3d]">
                  {chapter.era}
                </span>
                <h3
                  style={{ fontFamily: "var(--font-cinzel), serif" }}
                  className="text-lg md:text-xl font-bold tracking-wide text-[#FFF0D4]"
                >
                  {chapter.title}
                </h3>
                <p
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                  className="mt-2 text-sm md:text-base italic leading-relaxed text-stone-400"
                >
                  {chapter.teaser}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CLOSING NOTE */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-auto mt-16 md:mt-24 flex max-w-md flex-col items-center gap-3 text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-[#a38560]/30 bg-white/[0.02] px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-stone-400">
          <ClockIcon />
          Currently being written
        </span>
        <p
          style={{ fontFamily: "var(--font-cormorant), serif" }}
          className="text-base md:text-lg italic text-stone-400"
        >
          Return soon — the next saga awaits its telling.
        </p>
      </motion.div>
    </section>
  );
}