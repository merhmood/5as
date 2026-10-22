import type { Metadata } from "next";
import Image from "next/image";
import Cta from "../_components/Cta";
import PageHero from "../_components/PageHero";
import { divisions } from "../_content";

export const metadata: Metadata = { title: "Services" };

const images = ["/img/construction.jpg", "/img/solar.jpg", "/img/servers.jpg", "/img/clinic.jpg"];

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="03 / What we do"
        title="Four disciplines, one team"
        intro="Construction, power, networks and healthcare technology, planned together and delivered by one team."
        image="/img/construction.jpg"
      />

      <div className="sticky top-16 z-40 border-b border-white/10 bg-ink">
        <nav className="wrap flex gap-6 overflow-x-auto py-4" aria-label="Divisions">
          {divisions.map((d, i) => (
            <a key={d.id} href={`#${d.id}`} className="eyebrow shrink-0 text-white/60 hover:text-amber">
              {i + 1} / {d.title.split(" & ")[0].split(",")[0]}
            </a>
          ))}
        </nav>
      </div>

      {divisions.map((d, i) => (
        <section key={d.id} id={d.id} className={`scroll-mt-28 border-b border-white/10 ${i % 2 ? "light" : ""}`}>
          <div className="wrap grid gap-12 py-20 lg:grid-cols-2 lg:gap-16">
            <div className={i % 2 ? "lg:order-2" : ""}>
              <p className={`eyebrow ${i % 2 ? "text-ink/50" : "text-amber"}`}>Division {i + 1}</p>
              <h2 className="display mt-4 text-[clamp(2rem,4.5vw,3.5rem)]">{d.title}</h2>
              <p className={`mt-5 text-xl leading-relaxed ${i % 2 ? "muted" : "text-white/70"}`}>{d.tagline}</p>
              <ul className={`mt-8 divide-y ${i % 2 ? "divide-ink/15 border-y border-ink/15" : "divide-white/10 border-y border-white/10"}`}>
                {d.items.map((item) => (
                  <li key={item} className="py-3.5">{item}</li>
                ))}
              </ul>
              {"note" in d && (
                <div className="mt-6 bg-paper-2 p-5 text-ink">
                  <p className="eyebrow text-ink/50">Our scope in healthcare</p>
                  <p className="mt-2 text-sm leading-relaxed">{d.note}</p>
                </div>
              )}
            </div>
            <div className={`relative aspect-[4/3] lg:sticky lg:top-32 lg:aspect-[4/5] lg:self-start ${i % 2 ? "lg:order-1" : ""}`}>
              <Image src={images[i]} alt="" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover grayscale contrast-110" />
            </div>
          </div>
        </section>
      ))}

      <Cta />
    </>
  );
}
