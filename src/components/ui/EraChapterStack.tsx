"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { title } from "process";

gsap.registerPlugin(ScrollTrigger);

type Chapter = {
  id: string;
  title: string;
  image: string;
  hook: string;
};

type Props = {
  chapters?: Chapter[];
  era?: string;
  title: string;
};

export default function EraChapterStack({ chapters = [], era, title }: Props) {
  const rootRef = useRef<HTMLElement | null>(null);
  const progressFillRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!rootRef.current || !chapters.length) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".era-chapter-card");

      gsap.set(progressFillRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.to(progressFillRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      cards.forEach((card, index) => {
        const media = card.querySelector(".era-media") as HTMLElement | null;
        const overlay = card.querySelector(
          ".era-overlay",
        ) as HTMLElement | null;
        const title = card.querySelector(".era-title") as HTMLElement | null;
        const text = card.querySelector(".era-text") as HTMLElement | null;
        const meta = card.querySelector(".era-meta") as HTMLElement | null;
        const cta = card.querySelector(".era-cta") as HTMLElement | null;
        const chips = card.querySelectorAll(".era-chip");

        gsap.fromTo(
          card,
          { y: 120, opacity: 0, scale: 0.96, filter: "blur(10px)" },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
              end: "top 30%",
              scrub: 1,
              onEnter: () => setActiveIndex(index),
              onEnterBack: () => setActiveIndex(index),
            },
          },
        );

        if (media) {
          gsap.fromTo(
            media,
            { scale: 1.18, y: 30 },
            {
              scale: 1,
              y: 0,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "bottom 15%",
                scrub: true,
              },
            },
          );
        }

        if (overlay) {
          gsap.fromTo(
            overlay,
            { opacity: 0.95 },
            {
              opacity: 0.72,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "bottom 15%",
                scrub: true,
              },
            },
          );
        }

        if (title) {
          gsap.fromTo(
            title,
            { y: 35, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 78%",
                end: "top 36%",
                scrub: 1,
              },
            },
          );
        }

        if (text) {
          gsap.fromTo(
            text,
            { y: 24, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 74%",
                end: "top 34%",
                scrub: 1,
              },
            },
          );
        }

        if (meta) {
          gsap.fromTo(
            meta,
            { y: 18, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 75%",
                end: "top 35%",
                scrub: 1,
              },
            },
          );
        }

        if (cta) {
          gsap.fromTo(
            cta,
            { x: -10, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 70%",
                end: "top 30%",
                scrub: 1,
              },
            },
          );
        }

        if (chips.length) {
          gsap.fromTo(
            chips,
            { y: 14, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.08,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 72%",
                end: "top 34%",
                scrub: 1,
              },
            },
          );
        }
      });

      ScrollTrigger.refresh();
    }, rootRef);

    return () => ctx.revert();
  }, [chapters]);

  if (!chapters.length) return null;

  const activeChapter = chapters[activeIndex];

  return (
    <section ref={rootRef} className="relative">
      {/* Sticky top chronicle header */}
      <div className="sticky top-0 z-40 mb-12 border-b border-white/10 bg-[#090604]/95 backdrop-blur-xl">
        <div className="flex items-center justify-between py-4">
          <div
            style={{ fontFamily: "var(--font-cinzel), serif" }}
            className="text-lg font-bold text-[#FFF0D4]"
          >
            {title}
          </div>

          <div className="flex gap-4 text-xs uppercase tracking-[0.25em]">
            {chapters.map((_, index) => (
              <div
                key={index}
                className={`transition-all duration-300 ${
                  activeIndex === index ? "text-[#D4AF37]" : "text-stone-500"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </div>
            ))}
          </div>
        </div>

        <div className="h-[2px] bg-white/10">
          <div
            className="h-full bg-[#D4AF37] transition-all duration-500"
            style={{
              width: `${((activeIndex + 1) / chapters.length) * 100}%`,
            }}
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl space-y-10 md:space-y-16">
        {chapters.map((chapter, index) => (
          <article
            key={chapter.id}
            className="era-chapter-card overflow-hidden rounded-[2rem] border border-[#2a2a2a] bg-[#0d0d0d]"
          >
            <Link
              href={`/${era}/${chapter.id}`}
              className="group relative grid overflow-hidden lg:grid-cols-[1.12fr_0.88fr]"
            >
              <div className="relative h-[320px] overflow-hidden sm:h-[380px] lg:h-[560px]">
                <Image
                  src={chapter.image}
                  alt={chapter.title}
                  fill
                  priority={index < 2}
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="era-media object-cover"
                />

                <div className="absolute left-5 top-5">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#d16c3d]/35 bg-[#090604]/80 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#d16c3d] backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                    Chapter {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5 lg:hidden">
                  <h3
                    style={{ fontFamily: "var(--font-cinzel), serif" }}
                    className="mb-2 text-2xl font-bold tracking-wide text-[#FFF0D4]"
                  >
                    {chapter.title}
                  </h3>
                  <p
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                    className="max-w-2xl text-base leading-relaxed text-stone-200/90"
                  >
                    {chapter.hook}
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                <div>
                  <div className="era-meta mb-5 flex items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#a38560]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-gradient-to-r from-[#d16c3d]/60 to-transparent" />
                  </div>

                  <h3
                    style={{ fontFamily: "var(--font-cinzel), serif" }}
                    className="era-title mb-5 hidden text-3xl font-bold leading-tight tracking-wide text-[#FFF0D4] transition-colors duration-300 group-hover:text-amber-200 lg:block"
                  >
                    {chapter.title}
                  </h3>

                  <p
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                    className="era-text hidden max-w-prose text-lg leading-relaxed text-stone-300/90 lg:block"
                  >
                    {chapter.hook}
                  </p>

                  <div className="mt-8 grid grid-cols-3 gap-3">
                    {["Evidence", "Context", "Sources"].map((label) => (
                      <div
                        key={label}
                        className="era-chip rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-center text-[10px] uppercase tracking-[0.25em] text-stone-300/80 backdrop-blur-sm"
                      >
                        {label}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="era-cta mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                  <div className="text-xs uppercase tracking-[0.3em] text-[#a38560]">
                    Open chapter
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-1">
                    Explore
                    <span>→</span>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
