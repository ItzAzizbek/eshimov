"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [now, setNow] = useState("");

  useEffect(() => {
    const tick = () => {
      setNow(
        new Date().toLocaleTimeString("en-GB", {
          timeZone: "Asia/Samarkand",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
      );
    };
    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <header
      className="on-dark fixed inset-x-0 top-0 z-50 bg-lapis text-white"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#hero"
          className="font-display text-2xl text-white"
          aria-label="Eshimov Azizbek, back to top"
        >
          Eshimov<span className="text-gold">.</span>
        </a>

        <nav aria-label="Sections" className="hidden items-center gap-10 md:flex">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="link-underline inline-block text-base font-medium text-white/90 transition-colors hover:text-white"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <div className="tnum hidden text-sm text-white/75 lg:block">
            Samarkand {now || "--:--"}
          </div>
          <a
            href="#contact"
            className="bg-gold px-4 py-2 text-sm font-semibold text-lapis transition-colors duration-300 hover:bg-white md:hidden"
          >
            Contact
          </a>
        </div>
      </div>
      <div className="tile-band h-[10px]" aria-hidden />
    </header>
  );
}
