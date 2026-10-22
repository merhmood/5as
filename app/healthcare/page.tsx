import type { Metadata } from "next";
import { pageMeta } from "../_seo";
import Cta from "../_components/Cta";
import PageHero from "../_components/PageHero";
import { clinicSteps } from "../_content";

export const metadata: Metadata = pageMeta(
  "Healthcare Technology & Medical Systems",
  "Facility, power, connectivity and clinical software delivered as one project for hospitals, clinics, laboratories and diagnostic centres.",
  "/healthcare",
);

export default function Healthcare() {
  return (
    <>
      <PageHero
        eyebrow="06 / Feature"
        title="Technology that keeps care moving"
        intro="A hospital can't afford a power cut, a dropped network or a missing patient record. 5As brings the facility, power, connectivity and clinical software together in one coordinated project, so healthcare teams can focus on patients, not systems."
        image="/img/clinic.jpg"
      />

      <section className="wrap py-24">
        <blockquote className="display max-w-4xl text-[clamp(1.8rem,4vw,3.2rem)]">
          &ldquo;Great care depends on what&rsquo;s behind the walls: power, networks and data clinicians can count on.&rdquo;
        </blockquote>
      </section>

      <section className="border-t border-white/10">
        <div className="wrap py-20">
          <p className="eyebrow text-amber">What a clinic project looks like</p>
          <ol className="mt-10 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {clinicSteps.map((t, i) => (
              <li key={t} className="bg-ink p-6">
                <span className="display text-5xl text-amber">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-6 text-white/75">{t}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="light">
        <div className="wrap grid gap-10 py-20 md:grid-cols-2">
          <div>
            <p className="eyebrow text-ink/50">Protecting patient data</p>
            <p className="mt-4 text-xl leading-relaxed">
              Patient information is handled in line with applicable privacy, security and healthcare regulations. Data roles, hosting location, access controls and incident responsibilities are agreed with you before any work begins.
            </p>
          </div>
          <div>
            <p className="eyebrow text-ink/50">Our scope in healthcare</p>
            <p className="muted mt-4 text-xl leading-relaxed">
              We deliver the technology and infrastructure behind care, not clinical services. Regulated medical-equipment work and specialist activities are carried out only with the required approvals and qualified partners in place.
            </p>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
