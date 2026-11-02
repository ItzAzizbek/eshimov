const PRINCIPLES = [
  {
    title: "Models are a means",
    body: "The model is never the product. The engineering is in context, memory, and routing.",
  },
  {
    title: "AI writes, I decide",
    body: "I hand off the generation and keep the judgment. I hold the architecture and the taste; the model holds the keyboard.",
  },
  {
    title: "Velocity",
    body: "Ship a working surface in a day, then iterate with real users.",
  },
  {
    title: "Useful on day one",
    body: "Tools should earn their keep right away. I show links you can click, not decks.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="tile-field relative"
    >
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
      <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
        <div className="flex flex-col gap-10">
          <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.98] text-lapis">
            Fifteen, and already shipping AI to real users.
          </h2>
          <p className="font-display text-2xl leading-tight text-cobalt md:text-3xl">
            IELTS 8.0. SAT 1370.
            <br />
            Based in Samarkand, Uzbekistan.
          </p>
        </div>

        <div className="flex flex-col gap-6 text-base leading-[1.7] text-ink-dim md:text-lg">
          <p>
            I&apos;m an AI engineer. My main project, Portail, puts every
            frontier model behind one thread of context and carries a $450K
            valuation. I direct the architecture and the taste, and AI writes
            the code.
          </p>
          <p>
            I build tools that take over work that used to be tedious,
            expensive, or impossible, without cutting corners on the craft.
          </p>
        </div>
      </div>

      <ul className="mt-24 grid gap-x-16 gap-y-12 border-t-[3px] border-lapis pt-12 md:grid-cols-2">
        {PRINCIPLES.map((p) => (
          <li key={p.title} className="group flex gap-5">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mt-1.5 size-7 shrink-0 text-turquoise transition-transform duration-500 ease-out group-hover:rotate-45 group-hover:text-gold-deep"
              aria-hidden
            >
              <rect x="5" y="5" width="14" height="14" />
              <rect x="5" y="5" width="14" height="14" transform="rotate(45 12 12)" />
            </svg>
            <div className="flex flex-col gap-2">
              <h3 className="font-display text-3xl text-lapis">{p.title}</h3>
              <p className="max-w-md text-base leading-relaxed text-ink-dim">
                {p.body}
              </p>
            </div>
          </li>
        ))}
      </ul>
      </div>
    </section>
  );
}
