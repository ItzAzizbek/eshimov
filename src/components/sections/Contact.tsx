import { ArrowOut } from "@/components/ArrowOut";
import { links } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className="on-dark relative bg-lapis text-white">
      <div className="tile-band" aria-hidden />
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-28 md:px-10 md:pt-40">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
          <div className="flex flex-col gap-8">
            <h2 className="font-display text-[clamp(3.25rem,9vw,6rem)] leading-[0.92] text-white">
              Let&apos;s build something<span className="text-gold">.</span>
            </h2>
            <p className="max-w-lg text-lg leading-relaxed text-white/85">
              Working on something ambitious in AI, investing, or want to
              compare notes on shipping? My inbox is open.
            </p>

            <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <a
                href="mailto:info@portail.cc"
                className="group inline-flex items-center gap-3 self-start bg-gold px-8 py-4 text-base font-semibold text-lapis transition-colors duration-300 hover:bg-white"
              >
                info@portail.cc
                <ArrowOut />
              </a>
              <a
                href="https://portail.cc"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 self-start border-2 border-white/70 px-8 py-4 text-base font-semibold text-white transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                Main project: Portail
                <ArrowOut />
              </a>
            </div>

            <ul className="flex flex-wrap gap-x-8 gap-y-3 pt-2">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline inline-flex items-center gap-2 text-base font-semibold text-white"
                  >
                    {l.label}
                    <ArrowOut size={12} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <dl className="grid self-end">
            <Meta label="Region" value="Samarkand" />
            <Meta label="Focus" value="AI Engineering" />
            <Meta label="Status" value="Deep in the build" />
          </dl>
        </div>

        <div className="mt-24 flex flex-col items-start justify-between gap-3 border-t border-white/25 pt-8 text-sm text-white/75 sm:flex-row sm:items-center">
          <span>© 2026 · Eshimov Azizbek</span>
          <span>Directed by me, written with AI. Built with Next.js.</span>
        </div>
      </div>
    </section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-t border-white/25 py-5 first:border-t-0">
      <dt className="text-base text-white/75">{label}</dt>
      <dd className="font-display text-3xl text-white">{value}</dd>
    </div>
  );
}

