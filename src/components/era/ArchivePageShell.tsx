import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

type Section = {
  title: string;
  content: string;
  bulletPoints: string[];
};

type ArchivePageShellProps = {
  title: string;
  eraLabel: string;
  hook: string;
  image: string;
  recordNumber: number;
  sections: Section[];
  alertTitle?: string;
  alertText?: string;
  footerPrevious?: { href: string; label: string };
  footerNext?: { href: string; label: string };
  footerNextLabel?: string;
  footerPreviousLabel?: string;
  footerNextDetail?: string;
  footerPreviousDetail?: string;
  variant?: "default" | "timeline" | "archive";
  children?: ReactNode;
  className?: string;
  eraHref?: string;
  period?: string;
};

const cinzel = { fontFamily: "var(--font-cinzel), serif" } as const;
const cormorant = { fontFamily: "var(--font-cormorant), serif" } as const;

export function ArchivePageShell({
  title,
  eraLabel,
  hook,
  image,
  recordNumber,
  sections,
  alertTitle = "Historical Note",
  alertText,
  footerPrevious,
  footerNext,
  footerNextLabel = "Next",
  footerPreviousLabel = "Previous",
  footerNextDetail,
  footerPreviousDetail,
  variant = "default",
  children,
  className,
  eraHref,
  period,
}: ArchivePageShellProps) {
  const formattedRecord = recordNumber.toString().padStart(2, "0");

  return (
    <main className={`min-h-screen bg-[#0A0A0A] text-[#F2EAE0] ${className ?? ""}`}>

      {/* ─── HERO: Full-bleed cinematic entry ──────────────────────────── */}
      <section className="relative h-[90svh] min-h-[580px] max-h-[860px] overflow-hidden flex flex-col justify-end">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />

        {/* Bottom-up gradient: text lives here against guaranteed dark */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent" />
        {/* Left-side vignette for extra text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/55 via-transparent to-transparent" />

        {/* Breadcrumb */}
        <nav className=" absolute top-7 left-7 md:top-10 md:left-10 z-10 flex justify-center items-center gap-2 text-xs text-white/45">
          <Link href="/" style={cinzel} className="hover:text-[#ff7936] transition-colors tracking-widest text-[20px] uppercase font-black">
            Home
          </Link>
          <span className="text-black font-black text-[20px] pb-1">/</span>
          {eraHref ? (
            <Link href={eraHref} style={cinzel} className="hover:text-[#ff7936] transition-colors tracking-widest text-[20px] uppercase font-black">
              {eraLabel}
            </Link>
          ) : (
            <span style={cinzel} className="tracking-widest text-[10px] uppercase">{eraLabel}</span>
          )}
        </nav>

        {/* Hero content: anchored to the bottom */}
        <div className="relative z-10 px-7 pb-12 md:px-14 md:pb-18 max-w-5xl">
          <p style={cinzel} className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#C26E45]">
            {eraLabel}
          </p>
          <h1
            style={cinzel}
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.02] tracking-wide uppercase text-[#F2EAE0] mb-5 md:mb-6"
          >
            {title}
          </h1>
          <p style={cormorant} className="text-xl md:text-2xl font-light italic leading-relaxed text-[#D4C3AB] max-w-[580px]">
            {hook}
          </p>
        </div>
      </section>

      {/* ─── ARTICLE BODY ──────────────────────────────────────────────── */}
      <article className="mx-auto max-w-[700px] px-6 md:px-8 pt-14 md:pt-20 pb-24">

        {/* Meta strip */}
        <div className="flex flex-wrap items-center gap-5 pb-7 border-b border-[#2A2018] mb-14">
          <span style={cinzel} className="text-[10px] uppercase tracking-[0.18em] text-[#4A3B2C]">Record</span>
          <span style={cinzel} className="text-[10px] uppercase tracking-[0.18em] text-[#8C7760]">No. {formattedRecord}</span>
          <span className="text-[#2A2018]">·</span>
          <span style={cinzel} className="text-[10px] uppercase tracking-[0.18em] text-[#8C7760]">{eraLabel}</span>
          {period && (
            <>
              <span className="text-[#2A2018]">·</span>
              <span style={cinzel} className="text-[10px] uppercase tracking-[0.18em] text-[#8C7760]">{period}</span>
            </>
          )}
          {variant === "timeline" && (
            <>
              <span className="text-[#2A2018]">·</span>
              <span style={cinzel} className="text-[10px] uppercase tracking-[0.18em] text-[#C26E45]">Chronological</span>
            </>
          )}
        </div>

        {/* Dynamic slot */}
        {children ? <div className="mb-14">{children}</div> : null}

        {/* ─── SECTIONS ─────────────────────────────────────────────────── */}
        <div className="space-y-16 md:space-y-20 mb-16 md:mb-20">
          {sections.map((section, index) => (
            <section key={`${section.title}-${index}`}>

              {/* Section marker: number + thin rule */}
              <div className="flex items-center gap-4 mb-7">
                <span style={cinzel} className="text-[10px] font-bold tracking-[0.1em] text-[#C26E45]/40 flex-shrink-0">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <div className="h-px flex-1 bg-[#2A2018]" />
                <div className="w-[5px] h-[5px] rounded-full bg-[#3A3228] flex-shrink-0" />
              </div>

              <h2 style={cinzel} className="text-2xl md:text-[1.85rem] font-bold text-[#F2EAE0] leading-[1.2] mb-6">
                {section.title}
              </h2>

              <p style={cormorant} className="text-[1.2rem] md:text-[1.25rem] leading-[1.8] text-[#D4C3AB] mb-7">
                {section.content}
              </p>

              {section.bulletPoints.length > 0 && (
                <ul className="space-y-4">
                  {section.bulletPoints.map((point, i) => (
                    <li key={i} className="flex gap-5" style={cormorant}>
                      <span className="text-[#C26E45] flex-shrink-0 mt-[5px] text-[10px]">◆</span>
                      <span className="text-[1.15rem] leading-[1.75] text-[#C4B5A0]">{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* ─── ALERT: Left-border callout ───────────────────────────────── */}
        {alertText ? (
          <div className="mb-16 md:mb-20 border-l-2 border-[#7A4A2C] pl-7 md:pl-8 py-1">
            <p style={cinzel} className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C26E45] mb-3">
              {alertTitle}
            </p>
            <p style={cormorant} className="text-[1.2rem] leading-[1.75] text-[#D4C3AB] italic font-light">
              {alertText}
            </p>
          </div>
        ) : null}

        {/* ─── FOOTER NAVIGATION ────────────────────────────────────────── */}
        <footer className="mt-20 pt-10 border-t border-[#2A2018] grid grid-cols-1 md:grid-cols-2 gap-4">
          {footerPrevious ? (
            <Link
              href={footerPrevious.href}
              className="group p-5 md:p-6 border border-[#2A2018] hover:border-[#7A4A2C] bg-[#0D0C0A] hover:bg-[#111009] transition-all duration-300"
            >
              <span style={cinzel} className="block mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#6B5540] group-hover:text-[#C26E45] transition-colors">
                ← {footerPreviousLabel}
              </span>
              <span style={cinzel} className="block text-xl md:text-2xl font-bold text-[#D4C3AB] group-hover:text-[#F2EAE0] transition-colors leading-[1.2]">
                {footerPreviousDetail ?? footerPrevious.label}
              </span>
            </Link>
          ) : <div className="hidden md:block" />}

          {footerNext ? (
            <Link
              href={footerNext.href}
              className="group p-5 md:p-6 border border-[#2A2018] hover:border-[#7A4A2C] bg-[#0D0C0A] hover:bg-[#111009] transition-all duration-300 md:text-right"
            >
              <span style={cinzel} className="block mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#6B5540] group-hover:text-[#C26E45] transition-colors">
                {footerNextLabel} →
              </span>
              <span style={cinzel} className="block text-xl md:text-2xl font-bold text-[#D4C3AB] group-hover:text-[#F2EAE0] transition-colors leading-[1.2]">
                {footerNextDetail ?? footerNext.label}
              </span>
            </Link>
          ) : null}
        </footer>
      </article>
    </main>
  );
}