import Image from "next/image";

export default function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image: string;
}) {
  return (
    <section className="border-b border-white/10 pt-16">
      <div className="wrap grid items-center gap-10 py-14 md:py-20 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div>
          <p className="eyebrow text-amber">{eyebrow}</p>
          <h1 className="display mt-5 text-[clamp(2.6rem,6.5vw,5.5rem)]">{title}</h1>
          {intro && <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">{intro}</p>}
        </div>
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="(min-width:1024px) 40vw, 100vw"
            className="object-cover grayscale contrast-110"
          />
          <div className="absolute inset-x-0 bottom-0 h-1 bg-amber" />
        </div>
      </div>
    </section>
  );
}
