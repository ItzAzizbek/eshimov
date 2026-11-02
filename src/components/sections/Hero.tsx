"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TileWall } from "@/components/TileWall";
import { ArrowDown } from "@/components/ArrowOut";
import { person } from "@/lib/content";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section
      id="hero"
      className="on-dark relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-lapis pt-24"
    >
      <TileWall />

      <motion.div
        initial={{ y: reduce ? 0 : 56 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, ease, delay: 0.25 }}
        className="relative z-10 mx-auto w-[min(94vw,56rem)] [border-radius:50%_50%_0_0_/_18%_18%_0_0] border-[5px] border-b-0 border-gold bg-bg px-6 pb-16 pt-24 text-center text-ink shadow-[0_0_0_10px_var(--lapis),0_0_0_13px_var(--gold-deep)] md:px-16 md:pb-20 md:pt-32"
      >
        <h1 className="font-display text-[clamp(3.25rem,10vw,6rem)] leading-[0.92] text-lapis">
          Eshimov
          <br />
          Azizbek
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-ink-dim md:text-xl">
          AI engineer, {person.age}, from {person.city}. I build{" "}
          <span className="font-semibold text-ink">Portail</span>, a unified
          AI workspace valued at $450,000, and ship the rest fast.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          <a
            href="mailto:info@portail.cc"
            className="bg-gold px-8 py-4 text-base font-semibold text-lapis transition-colors duration-300 hover:bg-lapis hover:text-white"
          >
            Email me
          </a>
          <a
            href="#work"
            className="link-underline inline-flex items-center gap-2 whitespace-nowrap text-base font-semibold text-cobalt"
          >
            See Portail
            <ArrowDown />
          </a>
        </div>
      </motion.div>

      <div className="tile-band relative z-10" aria-hidden />
    </section>
  );
}
