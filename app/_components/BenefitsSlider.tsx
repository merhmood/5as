"use client";

import { useState } from "react";

const benefits = [
  ["One point of accountability", "One plan, one team and one point of contact, from the first site visit to final sign-off."],
  ["Problems caught on paper", "Routing, power and space clashes are caught early in planning, not discovered on site."],
  ["Joined-up design", "Building, electrical and IT requirements are designed together from day one, so every system fits the others."],
  ["Progress you can track", "Clear ownership, timelines and handovers, with every work package planned around its dependencies."],
  ["Flexible delivery", "Full projects, specialist packages or ongoing support, whatever the job needs."],
  ["Safe and compliant", "Delivered to an agreed scope, applicable laws and standards, with qualified professionals on every task."],
  ["Built to last", "Maintenance, documentation, security and continuity planned in from the start, with room to grow."],
  ["The digital essentials, handled", "Domains, DNS, business email, cloud hosting and backup, all under the same roof."],
] as const;

function Cards({ hidden }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0" aria-hidden={hidden || undefined}>
      {benefits.map(([title, body]) => (
        <li key={title} className="pr-5">
          <article className="benefit-card flex min-h-[26rem] w-[17.5rem] flex-col justify-between border-l-2 border-amber bg-white/[0.06] p-6 text-white transition-colors hover:bg-white/10 md:w-[19rem]">
            <h3 className="eyebrow pr-8 !text-sm leading-6 text-amber">{title}</h3>
            <p className="text-lg leading-snug text-white/80">{body}</p>
          </article>
        </li>
      ))}
    </ul>
  );
}

export default function BenefitsSlider() {
  const [paused, setPaused] = useState(false);

  return (
    <section
      className="relative overflow-hidden border-t border-white/10 bg-ink py-20 md:py-28"
      aria-roledescription="carousel"
      aria-label="Benefits of working with 5As"
    >
      <div className="wrap flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow text-amber">Why clients choose 5As</p>
          <h2 className="display mt-4 max-w-2xl text-[clamp(2rem,4.5vw,3.5rem)]">
            The benefits of one partner for every system.
          </h2>
        </div>
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
          className="eyebrow flex items-center gap-3 text-white/70 hover:text-amber"
        >
          <span className="flex h-10 w-10 items-center justify-center border border-white/30">
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor" aria-hidden>
              {paused ? (
                <path d="M4 2l10 6-10 6z" />
              ) : (
                <>
                  <rect x="3" y="2" width="3.5" height="12" />
                  <rect x="9.5" y="2" width="3.5" height="12" />
                </>
              )}
            </svg>
          </span>
          {paused ? "Play" : "Pause"}
        </button>
      </div>

      <div className="benefit-marquee mt-10 overflow-hidden">
        <div className={`benefit-track flex w-max ${paused ? "is-paused" : ""}`}>
          <Cards />
          <Cards hidden />
        </div>
      </div>
    </section>
  );
}
