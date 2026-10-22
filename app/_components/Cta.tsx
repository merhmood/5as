import Link from "next/link";

export default function Cta() {
  return (
    <section className="border-t border-white/10">
      <div className="wrap flex flex-col items-start justify-between gap-8 py-20 md:flex-row md:items-end">
        <h2 className="display tech max-w-2xl text-[clamp(2.1rem,5vw,4.2rem)]">
          Let&rsquo;s build something <span className="text-amber">that works.</span>
        </h2>
        <Link href="/contact" className="btn btn-solid">Start a project</Link>
      </div>
    </section>
  );
}
