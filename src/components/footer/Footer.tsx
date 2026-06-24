"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";


const reveal = {
  initial: { opacity: 0, y: 50, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const panelReveal = {
  initial: { opacity: 0, x: -80, scale: 0.96 },
  whileInView: { opacity: 1, x: 0, scale: 1 },
};

const contentReveal = {
  initial: { opacity: 0, x: 80 },
  whileInView: { opacity: 1, x: 0 },
};

export default function Footer() {

  const pathname = usePathname();

  if (pathname !== "/") return null;

  return (
      <motion.footer
        variants={reveal}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full min-h-screen overflow-hidden bg-[#070504] border-t border-[#c3a075]/10 select-none"
      >
        {/* Background Ornaments */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(181,130,83,0.08),transparent_12%),radial-gradient(circle_at_80%_88%,rgba(195,110,68,0.06),transparent_15%),linear-gradient(90deg,#060402_0%,#0b0805_50%,#050403_100%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-5 pointer-events-none" />
        <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-[#c3a075]/5 blur-[140px] pointer-events-none" />
        
        <motion.div
          animate={{ x: [0, 12, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 h-[70vh] w-[1px] bg-gradient-to-b from-transparent via-[#c3a075]/15 to-transparent pointer-events-none"
        />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-6 py-16 md:px-[5%] md:py-0">
          <div className="flex w-full flex-col gap-10 md:flex-row md:items-center">
            
            {/* LEFT PANEL */}
            <motion.div
              variants={panelReveal}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="w-full md:w-[42%]"
            >
              <div className="relative h-[74vh] overflow-hidden rounded-[32px] border border-[#c3a075]/15 bg-[linear-gradient(135deg,rgba(17,11,7,0.98),rgba(8,6,4,0.94))] shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_50px_100px_rgba(0,0,0,0.55)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(228,202,154,0.10),transparent_10%),radial-gradient(circle_at_70%_80%,rgba(181,119,68,0.08),transparent_22%),radial-gradient(circle_at_50%_50%,rgba(195,160,95,0.04),transparent_35%)]" />
                <div className="absolute left-10 top-10 h-24 w-24 rounded-full border border-[#c3a075]/10" />
                <div className="absolute right-10 top-24 h-48 w-48 rounded-full bg-[#c3a075]/4 blur-3xl" />
                <div className="absolute inset-x-1/4 top-0 h-px bg-gradient-to-r from-transparent via-[#f0d7a7]/75 to-transparent" />
                
                <motion.div
                  animate={{ rotate: [0, 5, 0], scale: [1, 1.02, 1] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#e6c89b]/80 to-transparent"
                />

                <div className="absolute left-1/2 top-1/2 h-[68%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c3a075]/10" />
                <div className="absolute left-1/2 top-1/2 h-[52%] w-[52%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c3a075]/5" />
                
                <motion.div
                  animate={{ opacity: [0.15, 0.4, 0.15], scale: [0.9, 1.05, 0.9] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(239,212,157,0.22),rgba(195,160,94,0.08),transparent_70%)] blur-xl"
                />

                <div className="relative z-10 flex h-full flex-col justify-between p-10 md:p-12">
                  <div>
                    <p className="font-[family-name:var(--font-cinzel)] text-[10px] uppercase tracking-[0.6em] text-[#c3a075]">
                      Final Chapter
                    </p>
                    <div className="mt-8 flex items-center gap-4">
                      <div className="h-px w-14 bg-gradient-to-r from-[#c3a075] to-transparent" />
                      <div className="h-2 w-2 rotate-45 bg-[#c3a075] shadow-[0_0_12px_rgba(195,160,94,0.7)]" />
                      <div className="h-px w-14 bg-gradient-to-l from-[#c3a075] to-transparent" />
                    </div>
                    <div className="mt-6 space-y-2">
                      <h3 className="font-[family-name:var(--font-cinzel)] text-5xl md:text-6xl font-black uppercase leading-none text-[#f4edd7]">
                        Ancient
                      </h3>
                      <h3 className="font-[family-name:var(--font-cinzel)] text-5xl md:text-6xl font-black uppercase leading-none text-[#c3a075]">
                        India
                      </h3>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-sm"
                  >
                    <p className="font-[family-name:var(--font-cormorant)] text-2xl leading-relaxed italic text-[#9a8d7a]">
                      “A digital gateway to the forgotten chapters of India's glorious past.”
                    </p>
                  </motion.div>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#030302] via-[#030302]/80 to-transparent" />
              </div>
            </motion.div>

            {/* RIGHT PANEL */}
            <motion.div
              variants={contentReveal}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="w-full md:w-[58%] md:pl-12 lg:pl-16"
            >
              <div className="max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.9, delay: 0.1 }}
                >
                  <p className="font-[family-name:var(--font-cinzel)] text-xs uppercase tracking-[0.55em] text-[#c3a075]">
                    The Archive
                  </p>
                  <h2 className="font-[family-name:var(--font-cinzel)] mt-4 text-4xl font-black uppercase tracking-[0.18em] text-[#f4edd7] md:text-5xl">
                    Legacy Continues
                  </h2>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.9, delay: 0.2 }}
                  className="mt-6"
                >
                  <p className="font-[family-name:var(--font-cormorant)] text-lg leading-8 text-[#9a8d7a]">
                    A curated collection of dynasties, philosophy, and forgotten brilliance — designed to guide the reader through India’s enduring civilizational memory.
                  </p>
                </motion.div>

              </div>

              {/* Bottom Footer Section */}
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, delay: 0.5 }}
                className="mt-14 border-t border-[#c3a075]/10 pt-6"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-[11px] uppercase tracking-[0.45em] text-[#7a7167]">
                    Crafted by <span className="ml-2 text-[#f4edd7]">Kartik Kumar</span>
                  </p>
                  <span className="font-[family-name:var(--font-cinzel)] text-[10px] uppercase tracking-[0.4em] text-[#c3a075]">
                    Registry Secure
                  </span>
                </div>
              </motion.div>
            </motion.div>
            
          </div>
        </div>
      </motion.footer>

  );
}