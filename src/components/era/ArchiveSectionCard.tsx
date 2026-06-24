import { BookOpenText, ScrollText } from "lucide-react";

type ArchiveSectionCardProps = {
  title: string;
  content: string;
  bulletPoints: string[];
  evidenceLabel?: string;
  researchLabel?: string;
  sectionLabel?: string;
};

export function ArchiveSectionCard({
  title,
  content,
  bulletPoints,
  evidenceLabel = "Key Evidence",
  researchLabel = "Research Log",
  sectionLabel = "Historical Record",
}: ArchiveSectionCardProps) {
  return (
    <section className="grid grid-cols-1 gap-8 rounded-[28px] border border-stone-800/80 bg-[linear-gradient(135deg,rgba(15,10,7,0.96),rgba(25,18,13,0.92))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] lg:grid-cols-[1.25fr_0.75fr] lg:p-8">
      <div className="space-y-5">
        <div className="flex items-start gap-3">
          <span className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#d16c3d]/35 bg-[#d16c3d]/10 text-[#f2bb81]">
            <BookOpenText className="h-5 w-5" />
          </span>
          <div>
            <p
              style={{ fontFamily: "var(--font-cinzel), serif" }}
              className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#d16c3d]"
            >
              {sectionLabel}
            </p>
            <h2
              style={{ fontFamily: "var(--font-cinzel), serif" }}
              className="mt-2 text-xl font-semibold tracking-[0.16em] text-[#f7ead4] sm:text-2xl"
            >
              {title}
            </h2>
          </div>
        </div>

        <div
          style={{ fontFamily: "var(--font-cormorant), serif" }}
          className="max-w-3xl space-y-4 text-[1.04rem] leading-8 text-stone-200/95 sm:text-lg"
        >
          <p>{content}</p>
        </div>
      </div>

      <aside className="rounded-3xl border border-[#d16c3d]/20 bg-stone-950/75 p-5 shadow-inner">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p
              style={{ fontFamily: "var(--font-cinzel), serif" }}
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#a38560]"
            >
              {researchLabel}
            </p>
            <h3
              style={{ fontFamily: "var(--font-cinzel), serif" }}
              className="mt-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#f4e2c2]"
            >
              {evidenceLabel}
            </h3>
          </div>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 text-[#f4d47a]">
            <ScrollText className="h-4 w-4" />
          </span>
        </div>

        <ul className="mt-5 space-y-3">
          {bulletPoints.map((bullet, index) => (
            <li key={index} className="flex gap-3 rounded-xl border border-stone-800/70 bg-stone-900/60 p-3">
              <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#d4af37]" />
              <span className="text-sm leading-7 text-stone-300">{bullet}</span>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
}
