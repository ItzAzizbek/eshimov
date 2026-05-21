"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/projects";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export function Projects() {
  return (
    <section
      id="work"
      className="relative mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-48"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.06 } },
        }}
        className="flex flex-col gap-20"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-mute">
            02 — Selected work
          </span>
          <span className="h-px flex-1 bg-line" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-mute">
            {String(projects.length).padStart(2, "0")} projects
          </span>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-24">
          <motion.div variants={fadeUp} className="flex flex-col gap-6">
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] tracking-tight text-ink">
              Things I&apos;ve <span className="italic text-ink-dim">shipped</span>.
            </h2>
            <p className="max-w-md text-base leading-relaxed text-ink-dim md:text-lg">
              A working list of products in active orbit. Each one is live and
              clickable. Hover for the link.
            </p>
          </motion.div>

          <motion.ul
            variants={fadeUp}
            className="border-t border-line"
          >
            {projects.map((proj, i) => (
              <li key={proj.name} className="border-b border-line">
                <a
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 py-6 transition-colors duration-500 md:py-8"
                >
                  <span className="font-mono text-xs text-ink-mute tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="flex min-w-0 flex-col gap-1">
                    <span className="font-display text-2xl tracking-tight text-ink transition-transform duration-500 ease-out group-hover:translate-x-2 md:text-3xl">
                      {proj.name}
                    </span>
                    <span className="truncate text-sm text-ink-dim transition-transform duration-500 ease-out group-hover:translate-x-2">
                      {proj.tagline}
                    </span>
                  </div>

                  <div className="flex items-center gap-6">
                    <span className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-ink-mute md:inline">
                      {proj.category}
                    </span>
                    <span
                      aria-hidden
                      className="inline-block h-4 w-4 translate-x-[-6px] text-ink opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100"
                    >
                      <svg viewBox="0 0 16 16" fill="none">
                        <path
                          d="M3 13 L13 3 M5 3 L13 3 L13 11"
                          stroke="currentColor"
                          strokeWidth="1.25"
                        />
                      </svg>
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
}
