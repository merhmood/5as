import type { Metadata } from "next";
import { pageMeta } from "../_seo";
import Cta from "../_components/Cta";
import PageHero from "../_components/PageHero";
import Rows from "../_components/Rows";
import { reasons, values } from "../_content";

export const metadata: Metadata = pageMeta(
  "Who We Are: Integrated Construction, Power & IT",
  "5As is the single partner behind the structure, power and technology that keep modern facilities running: one plan, one team, one point of accountability.",
  "/about",
);

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="01 / Company overview"
        title="Who we are"
        intro="The single partner behind the structure, power and technology that keep modern facilities running."
        image="/img/blueprint.jpg"
      />

      <section className="wrap grid gap-10 py-24 md:grid-cols-2">
        <p className="text-2xl font-medium leading-snug">
          Most building projects juggle separate contractors for the structure, the power and the technology. 5As brings them together: construction, electrical power, IT networks and smart automation, under one plan, one team and one point of accountability.
        </p>
        <p className="text-lg leading-relaxed text-white/65">
          When the people laying conduit, wiring the panels and pulling the fibre work from the same plan, problems surface on paper instead of on site. You get faster coordination, cleaner installations, clear visibility of progress, and a facility that is easier to run and maintain for years to come.
        </p>
      </section>

      <section className="border-t border-white/10">
        <div className="wrap grid gap-10 py-16 md:grid-cols-3">
          <div>
            <p className="eyebrow text-amber">Our tagline</p>
            <p className="display mt-3 text-3xl">One partner. Every system.</p>
          </div>
          <div>
            <p className="eyebrow text-amber">Our core promise</p>
            <p className="display mt-3 text-3xl">Build. Power. Connect. Automate.</p>
          </div>
          <div>
            <p className="eyebrow text-amber">Our positioning</p>
            <p className="mt-3 text-white/70">The single partner behind the structure, power and technology that keep modern facilities running.</p>
          </div>
        </div>
      </section>

      <section className="light">
        <div className="wrap grid gap-12 py-24 md:grid-cols-2">
          <div>
            <p className="eyebrow text-ink/50">Our mission</p>
            <p className="display mt-4 text-[clamp(1.8rem,3.6vw,3rem)]">
              To design and deliver infrastructure that works as one, so businesses and institutions can build, connect and operate with confidence.
            </p>
          </div>
          <div>
            <p className="eyebrow text-ink/50">Our vision</p>
            <p className="display mt-4 text-[clamp(1.8rem,3.6vw,3rem)]">
              To be the first call for any commercial, industrial, residential or healthcare project that needs every system to work together.
            </p>
          </div>
        </div>
      </section>

      <section className="wrap py-24">
        <p className="eyebrow text-amber">Our values</p>
        <ol className="mt-10 grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {values.map(([title, body], i) => (
            <li key={title} className="bg-ink p-7">
              <span className="eyebrow text-white/40">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="display mt-6 text-3xl">{title}</h2>
              <p className="mt-3 text-white/65">{body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-white/10">
        <div className="wrap py-24">
          <p className="eyebrow text-amber">07 / Our value</p>
          <h2 className="display mb-10 mt-4 text-[clamp(2.5rem,6vw,5rem)]">Why work with 5As?</h2>
          <Rows rows={reasons} />
          <div className="mt-12 grid gap-px bg-white/10 md:grid-cols-2">
            <div className="bg-ink-2 p-8">
              <p className="eyebrow text-amber">Safety, quality &amp; compliance</p>
              <h3 className="display mt-3 text-3xl">Safe, compliant, built to standard</h3>
              <p className="mt-4 text-white/65">
                Every project is delivered to an agreed scope, applicable laws and standards, and strict site-safety requirements. Where the work calls for licensed electrical contractors, registered construction professionals, healthcare specialists, cybersecurity experts or biomedical engineers, we put qualified people on the job.
              </p>
            </div>
            <div className="bg-ink-2 p-8">
              <p className="eyebrow text-amber">Digital services</p>
              <h3 className="display mt-3 text-3xl">Domains, cloud &amp; email</h3>
              <p className="mt-4 text-white/65">
                Domain registration and renewals, DNS configuration, professional business email, website infrastructure and hosting support. The digital essentials, handled.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
