"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer({year} : {year: number}) {
  const pathname = usePathname();
  if (pathname !== "/") return null;


  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full border-t border-[#c3a075]/15 bg-[#070504]"
    >
      {/* quiet static wash, no motion */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(195,160,117,0.05),transparent_45%)]" />

      {/* hairline + printer's ornament */}
      <div className="relative flex justify-center pt-10 md:pt-14">
        <div className="flex items-center gap-3">
          <span className="h-px w-14 bg-gradient-to-r from-transparent to-[#c3a075]/50" />
          <span className="h-1.5 w-1.5 rotate-45 bg-[#c3a075]" />
          <span className="h-px w-14 bg-gradient-to-l from-transparent to-[#c3a075]/50" />
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-12 pt-8 md:pb-16">
        {/* Brand */}
        <div className="flex flex-col items-center gap-4 border-b border-[#c3a075]/10 pb-12 text-center">
          <span
            className="font-[family-name:var(--font-cinzel)] text-2xl font-bold uppercase tracking-[0.25em] text-[#f4edd7] md:text-3xl"
          >
            Ancient India
          </span>
          <p className="font-[family-name:var(--font-cormorant)] max-w-md text-base italic leading-relaxed text-[#9a8d7a] md:text-lg">
            A digital gateway to the forgotten chapters of India&apos;s glorious past.
          </p>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-12 sm:grid-cols-4">
          <div>
            <h4 className="font-[family-name:var(--font-cinzel)] mb-4 text-[11px] uppercase tracking-[0.35em] text-[#c3a075]">
              Explore
            </h4>
            <ul className="font-[family-name:var(--font-cormorant)] space-y-2.5 text-[15px] text-[#9a8d7a]">
              <li><Link href="/" className="transition-colors hover:text-[#f4edd7]">Home</Link></li>
              <li><a href="#coming-soon" className="transition-colors hover:text-[#f4edd7]">Coming soon</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-cinzel)] mb-4 text-[11px] uppercase tracking-[0.35em] text-[#c3a075]">
              Archive
            </h4>
            <ul className="font-[family-name:var(--font-cormorant)] space-y-2.5 text-[15px] text-[#9a8d7a]">
              <li><a href="#" className="transition-colors hover:text-[#f4edd7]">The project</a></li>
              <li><a href="#" className="transition-colors hover:text-[#f4edd7]">Sources &amp; credits</a></li>
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-2">
            <h4 className="font-[family-name:var(--font-cinzel)] mb-4 text-[11px] uppercase tracking-[0.35em] text-[#c3a075]">
              Connect
            </h4>
            <ul className="font-[family-name:var(--font-cormorant)] space-y-2.5 text-[15px] text-[#9a8d7a]">
              <li><a href="mailto:kartik.k2639@gmail.com" className="transition-colors hover:text-[#f4edd7]">kartik.k2639@gmail.com</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 border-t border-[#c3a075]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#7a7167]">
            © {year} Ancient India &nbsp;·&nbsp; Crafted by <span className="text-[#f4edd7]">Kartik Kumar</span>
          </p>
        </div>
      </div>
    </motion.footer>
  );
}