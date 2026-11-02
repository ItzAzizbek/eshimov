import { ArrowOut } from "@/components/ArrowOut";
import { projects, type Project } from "@/lib/projects";

const TONES = [
  "bg-lapis text-white",
  "bg-turquoise text-lapis",
  "bg-bg text-ink",
  "bg-gold text-lapis",
];

export function Projects() {
  return (
    <>
      {projects.map((p, i) => (
        <ProjectSpace key={p.id} project={p} flagship={i === 0} />
      ))}
    </>
  );
}

function ProjectSpace({ project: p, flagship }: { project: Project; flagship: boolean }) {
  const dark = p.tone === "dark";
  const host = p.url ? new URL(p.url).hostname : null;

  return (
    <section
      id={p.id}
      className={`relative ${
        dark ? "on-dark bg-cobalt text-white" : "bg-bg text-ink"
      } ${!dark && p.id === "1600" ? "tile-field" : ""}`}
      style={dark && p.id === "bazaargg" ? { background: "var(--lapis)" } : undefined}
    >
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-28 md:px-10 md:py-40 lg:grid-cols-[1.15fr_1fr] lg:gap-24">
        <div className="flex flex-col gap-8">
          <h2
            className={`font-display text-[clamp(3.5rem,11vw,6rem)] leading-[0.9] ${
              dark ? "text-white" : "text-lapis"
            }`}
          >
            {p.name}
            <span className={dark ? "text-gold" : "text-gold-deep"}>.</span>
          </h2>
          {p.role && (
            <p className={`text-xl font-semibold ${dark ? "text-gold" : "text-cobalt"}`}>
              {p.role}
            </p>
          )}
          <p className={`max-w-xl text-xl leading-snug md:text-2xl ${dark ? "text-white" : "text-ink"}`}>
            {p.tagline}
          </p>
          <p className={`max-w-xl text-base leading-[1.7] md:text-lg ${dark ? "text-white/85" : "text-ink-dim"}`}>
            {p.blurb}
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-x-10 gap-y-5">
            {p.url ? (
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center gap-3 px-8 py-4 text-base font-semibold transition-colors duration-300 ${
                  dark
                    ? "bg-gold text-lapis hover:bg-white"
                    : "bg-lapis text-white hover:bg-cobalt"
                }`}
              >
                Visit {host}
                <ArrowOut />
              </a>
            ) : (
              <a
                href="#work"
                className="link-underline inline-flex items-center gap-2 text-base font-semibold text-gold"
              >
                See what it became: Portail
              </a>
            )}
            {p.meta && <span className="font-display text-2xl text-gold">{p.meta}</span>}
            {p.started && <span className="text-base text-white/85">{p.started}</span>}
          </div>
        </div>

        {flagship && p.models ? (
          <figure className="flex flex-col gap-5 self-center">
            <ol className="relative flex flex-col" aria-label="Models on one thread">
              <span aria-hidden className="absolute bottom-6 left-[1.6rem] top-6 w-[3px] bg-gold" />
              {p.models.map((m, i) => (
                <li
                  key={m}
                  className="relative flex items-center gap-6"
                  style={{ marginLeft: `${i % 2 === 0 ? 0 : 1.5}rem` }}
                >
                  <StarChip />
                  <span
                    className={`font-display flex-1 border border-lapis px-6 py-5 text-3xl ${TONES[i % TONES.length]}`}
                  >
                    {m}
                  </span>
                </li>
              ))}
              {p.modelsMore && (
                <li
                  className="relative flex items-center gap-6"
                  style={{ marginLeft: `${p.models.length % 2 === 0 ? 0 : 1.5}rem` }}
                >
                  <StarChip />
                  <span className="font-display flex-1 border border-white/60 px-6 py-5 text-3xl text-white">
                    {p.modelsMore}
                  </span>
                </li>
              )}
            </ol>
            <figcaption className="max-w-sm pl-[4.9rem] text-sm leading-relaxed text-white/80">
              354 models from 58 labs share one thread.
            </figcaption>
          </figure>
        ) : (
          p.plate && (
            <div
              className={`relative flex min-h-[16rem] flex-col justify-end gap-3 self-center overflow-hidden p-8 md:p-10 ${
                dark ? "bg-turquoise text-lapis" : "bg-lapis text-white"
              }`}
            >
              <Star className="absolute right-6 top-6 size-24 opacity-25" />
              <p className="font-display text-5xl leading-none md:text-6xl">{p.plate[0]}</p>
              <p className="max-w-xs text-lg font-medium">{p.plate[1]}</p>
            </div>
          )
        )}

        {p.image && p.url && (
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative block border-[5px] border-gold shadow-[0_0_0_10px_var(--lapis)] lg:col-span-2 ${
              dark ? "bg-lapis" : "bg-white"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.image}
              alt={p.imageAlt}
              width={1600}
              height={p.image.includes("okayable") ? 690 : 1000}
              loading="lazy"
              className="block h-auto w-full"
            />
            <span className="absolute bottom-0 right-0 inline-flex items-center gap-2 bg-gold px-5 py-3 text-sm font-semibold text-lapis transition-colors group-hover:bg-white">
              Open {host}
              <ArrowOut />
            </span>
          </a>
        )}
      </div>
      <div className="tile-band" aria-hidden />
    </section>
  );
}

function StarChip() {
  return (
    <span aria-hidden className="z-10 grid size-[3.4rem] shrink-0 place-items-center bg-lapis">
      <Star className="size-9 text-gold" />
    </span>
  );
}

function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <rect x="5" y="5" width="14" height="14" />
      <rect x="5" y="5" width="14" height="14" transform="rotate(45 12 12)" />
    </svg>
  );
}
