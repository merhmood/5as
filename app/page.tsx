import Image from "next/image";
import Link from "next/link";
import BenefitsSlider from "./_components/BenefitsSlider";
import Cta from "./_components/Cta";
import Hero from "./_components/Hero";
import { whyOnePartner } from "./_content";

const cards = [
  ["01", "Build", "Construction & general contracting", "/img/construction.jpg", "/services#construction"],
  ["02", "Power", "Electrical & critical power", "/img/solar.jpg", "/services#power"],
  ["03", "Connect", "IT, connectivity, cloud & smart systems", "/img/datacenter.jpg", "/services#it"],
  ["04", "Automate", "Healthcare technology & medical systems", "/img/clinic.jpg", "/services#healthcare-tech"],
] as const;

export default function Home() {
  return (
    <>
      <Hero />

      <section className="wrap py-20 md:py-28">
        <p className="eyebrow text-white/50">Who we are</p>
        <p className="display mt-6 max-w-4xl text-[clamp(1.8rem,4vw,3.2rem)]">
          Most building projects juggle separate contractors for the structure, the power and the technology. 5As brings them together, under one plan, one team and one point of accountability.
        </p>
        <Link href="/about" className="eyebrow mt-8 inline-block border-b border-white/40 pb-1 hover:border-amber hover:text-amber">
          About 5As
        </Link>
      </section>

      <section className="border-t border-white/10">
        <div className="wrap py-20">
          <p className="eyebrow text-amber">Four disciplines, one team</p>
          <div className="mt-10 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map(([n, word, desc, img, href]) => (
              <Link key={n} href={href} className="group relative isolate flex min-h-[24rem] lg:min-h-[30rem] flex-col justify-between overflow-hidden bg-ink p-6">
                <Image src={img} alt="" fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="-z-20 object-cover opacity-60 grayscale transition duration-500 group-hover:scale-105 group-hover:opacity-90" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                <span className="eyebrow text-white/60">{n}</span>
                <div>
                  <h2 className="display text-5xl">{word}</h2>
                  <p className="mt-3 text-white/70">{desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BenefitsSlider />

      <section className="light">
        <div className="wrap grid gap-12 py-24 md:grid-cols-2">
          <div>
            <p className="eyebrow text-ink/50">Why one partner works better</p>
            <h2 className="display mt-4 text-[clamp(2.2rem,5vw,4rem)]">Problems surface on paper, not on site.</h2>
          </div>
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
