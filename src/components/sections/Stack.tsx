const STACK = [
  { name: "TypeScript", note: "Language", tone: "bg-lapis text-white" },
  { name: "JavaScript", note: "Language", tone: "bg-lapis text-white" },
  { name: "React", note: "Interface", tone: "bg-lapis text-white" },
  { name: "Next.js", note: "Framework", tone: "bg-lapis text-white" },
  { name: "Tailwind CSS", note: "Styling", tone: "bg-cobalt text-white" },
  { name: "SCSS", note: "Styling", tone: "bg-cobalt text-white" },
  { name: "Framer Motion", note: "Motion", tone: "bg-cobalt text-white" },
  { name: "Three.js", note: "3D", tone: "bg-cobalt text-white" },
  { name: "Node.js", note: "Runtime", tone: "bg-turquoise text-lapis" },
  { name: "Express", note: "APIs", tone: "bg-turquoise text-lapis" },
  { name: "SQL", note: "Data", tone: "bg-turquoise text-lapis" },
  { name: "Supabase", note: "Backend", tone: "bg-turquoise text-lapis" },
  { name: "Firebase", note: "Backend", tone: "bg-turquoise text-lapis" },
  { name: "LLM APIs", note: "AI", tone: "bg-gold text-lapis" },
  { name: "Figma", note: "Design", tone: "bg-bg text-ink" },
];

export function Stack() {
  return (
    <section id="stack" className="tile-field relative bg-bg-soft">
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
          <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.98] text-lapis">
            The tools I build with.
          </h2>
          <p className="self-end text-base leading-[1.7] text-ink-dim md:text-lg">
            What I use day to day, coloured by job: lapis for the
            core, cobalt for look and motion, turquoise for the back end,
            gold for AI.
          </p>
        </div>

        <ul className="mt-16 grid bg-bg grid-cols-2 border-l border-t border-lapis/70 md:grid-cols-3 lg:grid-cols-5">
          {STACK.map((s) => (
            <li
              key={s.name}
              className={`group relative flex aspect-[4/3] flex-col justify-end overflow-hidden border-b border-r border-lapis/70 p-5 ${s.tone}`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="absolute right-3 top-3 size-8 opacity-25 transition-transform duration-700 ease-out group-hover:rotate-45"
                aria-hidden
              >
                <rect x="5" y="5" width="14" height="14" />
                <rect x="5" y="5" width="14" height="14" transform="rotate(45 12 12)" />
              </svg>
              <span className="text-sm font-medium">{s.note}</span>
              <span className="font-display text-2xl leading-none md:text-3xl">
                {s.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
