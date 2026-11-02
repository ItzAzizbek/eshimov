const SCHOOLING = [
  {
    when: "2017 to 2025",
    what: "Public school",
    note: "",
  },
  {
    when: "2021",
    what: "First frontend courses",
    note: "Finished them at 10/11 years old.",
  },
  {
    when: "2025 to now",
    what: "Sodiq School",
    note: "A private boarding school, on a full scholarship.",
  },
];

const PROGRAMS = [
  { name: "IT Park Incubation Program", by: "" },
  { name: "Startup Booster", by: "Acceleration program by United Ventures" },
];

export function Education() {
  return (
    <section id="education" className="on-dark relative bg-lapis text-white">
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
        <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.98] text-white">
          Where I&apos;ve learned<span className="text-gold">.</span>
        </h2>

        <div className="mt-16 grid gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-24">
          <ol className="border-t-[3px] border-turquoise">
            {SCHOOLING.map((s) => (
              <li
                key={s.what}
                className="grid gap-x-8 gap-y-1 border-b border-white/20 py-7 md:grid-cols-[11rem_1fr] md:items-baseline"
              >
                <p className="tnum text-lg font-semibold text-turquoise">{s.when}</p>
                <div>
                  <h3 className="font-display text-3xl text-white md:text-4xl">{s.what}</h3>
                  {s.note && <p className="mt-1 text-base text-white/85">{s.note}</p>}
                </div>
              </li>
            ))}
          </ol>

          <div>
            <h3 className="border-t-[3px] border-gold pt-5 font-display text-3xl text-white md:text-4xl">
              Programs
            </h3>
            <ul>
              {PROGRAMS.map((p) => (
                <li key={p.name} className="border-b border-white/20 py-6">
                  <p className="font-display text-2xl text-white md:text-3xl">{p.name}</p>
                  {p.by && <p className="mt-1 text-base text-white/85">{p.by}</p>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="tile-band" aria-hidden />
    </section>
  );
}
