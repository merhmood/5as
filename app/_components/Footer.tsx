import Image from "next/image";
import Link from "next/link";
import { contact, nav } from "../_content";
import FooterDate from "./FooterDate";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="wrap grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="flex items-center gap-2 text-6xl font-semibold tracking-tight" aria-label="5As">
            <Image src="/logo-mark.png" alt="" width={220} height={299} className="h-20 w-auto" />
            <span aria-hidden>As</span>
          </p>
          <p className="eyebrow tech-label mt-4 leading-7 text-white/50">
            Build · Power · Connect · Automate
            <br />
            <span className="text-amber">One partner. Every system.</span>
          </p>
        </div>
        <div>
          <p className="eyebrow text-white/50">Explore</p>
          <ul className="mt-4 space-y-2">
            {nav.map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="text-white/80 hover:text-amber">{label}</Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="text-white/80 hover:text-amber">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-white/50">Contact</p>
          <address className="mt-4 space-y-1 not-italic text-white/80">
            {contact.address.map((l) => (
              <span key={l} className="block">{l}</span>
            ))}
            <a href={`mailto:${contact.email}`} className="block pt-2 hover:text-amber">{contact.email}</a>
            {contact.phones.map((p) => (
              <a key={p} href={`tel:+234${p.replace(/\s/g, "").slice(1)}`} className="block hover:text-amber">{p}</a>
            ))}
          </address>
        </div>
      </div>
      <div className="wrap border-t border-white/10 py-6">
        <FooterDate />
      </div>
    </footer>
  );
}
