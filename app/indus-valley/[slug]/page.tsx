import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond } from "next/font/google";
import { indusValleySubpages } from "@/data/indusValleyData";
import { ArchivePageShell } from "@/src/components/era/ArchivePageShell";

// Next.js 16/React 19 Instant Navigation configuration
export const unstable_instant = {
  prefetch: "runtime",
  samples: [
    { params: { slug: "city-life" } },
    { params: { slug: "leadership" } },
    { params: { slug: "trade" } },
    { params: { slug: "religion-legacy" } },
    { params: { slug: "bronze-age-world" } },
    { params: { slug: "decline" } },
  ],
};

export async function generateStaticParams() {
  return indusValleySubpages.map((subpage) => ({
    slug: subpage.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const subpage = indusValleySubpages.find((p) => p.id === slug);
  return {
    title: subpage ? `${subpage.title} | Indus Valley Civilization` : "Indus Valley Archive",
    description: subpage ? subpage.hook : "Detailed archaeological registry of the Harappan era.",
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

export default async function IndusValleySubpage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const subpageIndex = indusValleySubpages.findIndex((p) => p.id === slug);

  if (subpageIndex === -1) {
    notFound();
  }

  const subpage = indusValleySubpages[subpageIndex];
  const nextSubpage =
    subpageIndex < indusValleySubpages.length - 1 ? indusValleySubpages[subpageIndex + 1] : null;

  const sections = subpage.sections.map((section) => ({
    title: section.title,
    content: section.content,
    bulletPoints: section.bulletPoints,
  }));

  return (
    <div className={`${cinzel.variable} ${cormorant.variable}`}>
      <ArchivePageShell
        title={subpage.title}
        eraLabel="Indus Valley"
        eraHref="/indus-valley"
        hook={subpage.hook}
        image={subpage.image}
        recordNumber={subpageIndex + 1}
        sections={sections}
        alertText="The Indus Valley evidence is reconstructed from archaeological, environmental, and comparative material. This archive keeps interpretive claims clearly separated from direct evidence so the reader can assess scholarly confidence and uncertainty."
        footerPrevious={{ href: "/indus-valley", label: "All Records" }}
        footerNext={
          nextSubpage
            ? { href: `/indus-valley/${nextSubpage.id}`, label: nextSubpage.title }
            : { href: "/vedic-period/origins", label: "The Vedic Period" }
        }
        footerNextLabel={nextSubpage ? "Next Record" : "Continue Reading"}
        footerNextDetail={nextSubpage ? nextSubpage.title : "The Vedic Period"}
        variant="archive"
      />
    </div>
  );
}
