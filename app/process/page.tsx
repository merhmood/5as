import type { Metadata } from "next";
import Cta from "../_components/Cta";
import PageHero from "../_components/PageHero";
import { steps, whyOnePartner } from "../_content";

export const metadata: Metadata = { title: "Process" };

export default function Process() {
  return (
    <>
      <PageHero
        eyebrow="05 / How we work"
        title="Six steps. One plan."
        intro="Every project follows the same disciplined path, from the first site visit to long-term support after handover."
        image="/img/engineers.jpg"
      />

      <section className="wrap py-24">
        <ol className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map(([title, body], i) => (
            <li key={title} className="bg-ink p-8">
              <span className="display text-6xl text-amber">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="display mt-6 text-3xl">{title}</h2>
              <p className="mt-3 text-white/65">{body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="light">
        <div className="wrap grid gap-12 py-24 md:grid-cols-2">
          <h2 className="display text-[clamp(2.2rem,5vw,4rem)]">Why one partner works better</h2>
          <ul className="divide-y divide-ink/15 border-y border-ink/15">
            {whyOnePartner.map((t) => (
              <li key={t} className="py-5 text-lg">{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <Cta />
    </>
  );
}
