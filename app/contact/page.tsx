import type { Metadata } from "next";
import { pageMeta } from "../_seo";
import PageHero from "../_components/PageHero";
import { contact } from "../_content";

export const metadata: Metadata = pageMeta(
  "Contact 5As in Lokoja, Kogi State",
  "Plan a fit-out, power upgrade, network, smart facility or healthcare technology project with 5As. Call, email or visit our Lokoja office.",
  "/contact",
);

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="08 / Get in touch"
        title="Let's build something that works."
        intro="Planning a fit-out, a power upgrade, a new network, a smart facility or a healthcare technology project? Talk to us. We'll bring every system together under one plan, with one team accountable for delivering it."
        image="/img/technician.jpg"
      />
      <section className="wrap py-20">
        <div className="grid gap-px bg-white/10 md:grid-cols-2">
          <div className="bg-ink p-8">
            <p className="eyebrow text-white/50">Office</p>
            <address className="mt-3 text-2xl not-italic">
              {contact.address.map((l) => (
                <span key={l} className="block">{l}</span>
              ))}
            </address>
          </div>
          <div className="bg-ink p-8">
            <p className="eyebrow text-white/50">Telephone</p>
            <div className="mt-3 text-2xl">
              {contact.phones.map((p) => (
                <a key={p} href={`tel:+234${p.replace(/\s/g, "").slice(1)}`} className="block hover:text-amber">{p}</a>
              ))}
            </div>
          </div>
          <div className="bg-ink p-8">
            <p className="eyebrow text-white/50">Email</p>
            <a href={`mailto:${contact.email}`} className="mt-3 block break-all text-2xl text-amber hover:underline">{contact.email}</a>
          </div>
          <div className="bg-ink p-8">
            <p className="eyebrow text-white/50">Website</p>
            <a href={`https://${contact.website}`} className="mt-3 block text-2xl text-amber hover:underline">{contact.website}</a>
          </div>
        </div>
      </section>
    </>
  );
}
