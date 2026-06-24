import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond } from "next/font/google";
import { vijayanagaraSubpages } from "@/data/vijayanagaraEmpireData";
import { ArchivePageShell } from "@/src/components/era/ArchivePageShell";

// Next.js 16/React 19 Instant Navigation configuration
export const unstable_instant = {
  prefetch: "runtime",
  samples: [
    { params: { slug: "capital" } },
    { params: { slug: "rulers" } },
    { params: { slug: "military" } },
    { params: { slug: "economy" } },
    { params: { slug: "arts" } },
    { params: { slug: "decline" } },
  ],
};

export async function generateStaticParams() {
  return vijayanagaraSubpages.map((subpage) => ({
    slug: subpage.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const subpage = vijayanagaraSubpages.find((p) => p.id === slug);
  return {
    title: subpage ? `${subpage.title} | Vijayanagara Empire` : "Vijayanagara Empire Archive",
    description: subpage ? subpage.hook : "Detailed historical registry of the Vijayanagara Empire.",
  };
}

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-cinzel",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
});

export default async function VijayanagaraEmpireSubpage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const subpageIndex = vijayanagaraSubpages.findIndex((p) => p.id === slug);

  if (subpageIndex === -1) {
    notFound();
  }

  const subpage = vijayanagaraSubpages[subpageIndex];
  const nextSubpage =
    subpageIndex < vijayanagaraSubpages.length - 1 ? vijayanagaraSubpages[subpageIndex + 1] : null;

  const sections = subpage.sections.map((section) => ({
    title: section.title,
    content: section.content,
    bulletPoints: section.bulletPoints,
  }));

  return (
    <div className={`${cinzel.variable} ${cormorant.variable}`}>
      <ArchivePageShell
        title={subpage.title}
        eraLabel="Vijayanagara Empire"
        eraHref="/vijayanagara-empire"
        hook={subpage.hook}
        image={subpage.image}
        recordNumber={subpageIndex + 1}
        sections={sections}
        alertText="Warning: The following items represent historical anachronisms for the Vijayanagara era and must be excluded from reconstructions: Mughal court dress, Rajput-style forts, 17th-century Maratha-style architecture, or any implication that the empire fell to the Mughals (it did not). Note on Gunpowder: Firearm and artillery adoption is documented only from the 16th century (Krishnadevaraya's era onwards). Do not project matchlocks or cannons into the Sangama or early Saluva phases (before c. 1500 CE). Islamic architectural fusions (such as the Queen's Bath pointed arches or Elephant Stables domes) are historically verified and authentic."
        footerPrevious={
          slug === "capital"
            ? { href: "/chola-empire/economy", label: "Previous Era: Economy (Chola Empire)" }
            : { href: "/vijayanagara-empire", label: "All Records" }
        }
        footerNext={
          nextSubpage
            ? { href: `/vijayanagara-empire/${nextSubpage.id}`, label: nextSubpage.title }
            : undefined
        }
        footerNextLabel="End of Timeline"
        footerNextDetail="No Later Eras Compiled"
        variant="archive"
      >
        {(slug === "capital" || slug === "economy") ? (
          <div className="rounded-[24px] border border-[#a38560]/20 bg-stone-950/70 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
            <span
              style={{ fontFamily: "var(--font-cinzel), serif" }}
              className="mb-3 block text-[9px] font-bold uppercase tracking-[0.2em] text-[#d16c3d]"
            >
              Eyewitness Chronicles
            </span>
            <h3
              style={{ fontFamily: "var(--font-cinzel), serif" }}
              className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#d16c3d]"
            >
              Accounts of Foreign Observers
            </h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <blockquote className="flex flex-col gap-2 border-l-2 border-[#d16c3d]/40 pl-4">
                <p className="text-sm leading-7 text-stone-300">
                  “The city is circumscribed by a massive stone wall of sixty miles, containing gates of immense strength, and its ruler commands ninety thousand men fit to bear arms.”
                </p>
                <cite className="text-[10px] font-bold uppercase tracking-wider text-stone-400 not-italic">
                  — Niccolò de’ Conti, c. 1420 CE
                </cite>
              </blockquote>
              <blockquote className="flex flex-col gap-2 border-l-2 border-[#d16c3d]/40 pl-4">
                <p className="text-sm leading-7 text-stone-300">
                  “The rose is sold everywhere... I counted seven concentric walls, with markets and bazaars of gold and gems that are the richest in the world.”
                </p>
                <cite className="text-[10px] font-bold uppercase tracking-wider text-stone-400 not-italic">
                  — Abdur Razzaq, 1443 CE
                </cite>
              </blockquote>
            </div>
          </div>
        ) : null}

        {slug === "decline" ? (
          <div className="rounded-[24px] border border-[#a38560]/20 bg-stone-950/70 p-6 text-center shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
            <span
              style={{ fontFamily: "var(--font-cinzel), serif" }}
              className="mb-3 block text-[9px] font-bold uppercase tracking-[0.2em] text-[#d16c3d]"
            >
              Archive End
            </span>
            <h3
              style={{ fontFamily: "var(--font-cinzel), serif" }}
              className="mb-2 text-[10px] font-bold uppercase tracking-widest text-[#ebd6bd]"
            >
              Registry Status
            </h3>
            <p
              style={{ fontFamily: "var(--font-cormorant), serif" }}
              className="text-sm leading-7 text-stone-300"
            >
              Closing Note: The Vijayanagara Empire is the final era currently compiled within this registry. The story of South India continues beyond 1646 CE (into the Nayaka kingdoms, Maratha Thanjavur, and the Mughal and colonial periods) but those pages are not yet built.
            </p>
          </div>
        ) : null}
      </ArchivePageShell>
    </div>
  );
}
