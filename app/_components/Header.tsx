"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "../_content";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink">
        <div className="wrap flex h-16 items-center justify-between">
          <Link href="/" className="relative z-[60] text-2xl font-semibold tracking-tight" aria-label="5As home">
            5As
          </Link>
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {nav.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                aria-current={pathname === href ? "page" : undefined}
                className="eyebrow text-white/60 transition hover:text-white aria-[current=page]:text-amber"
              >
                {label}
              </Link>
            ))}
            <Link href="/contact" className="btn btn-solid !py-2.5">
              Contact
            </Link>
          </nav>
          <button
            type="button"
            className="relative z-[60] flex h-11 w-11 flex-col items-center justify-center gap-[7px] lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`h-px w-6 bg-white transition-transform ${open ? "translate-y-[4px] rotate-45" : ""}`} />
            <span className={`h-px w-6 bg-white transition-transform ${open ? "-translate-y-[4px] -rotate-45" : ""}`} />
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        aria-hidden={!open}
        inert={!open}
        className={`fixed inset-0 z-[55] flex flex-col bg-ink px-5 pb-10 pt-24 transition-opacity duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav className="flex flex-1 flex-col justify-center" aria-label="Mobile" onClick={() => setOpen(false)}>
          {[...nav, ["Contact", "/contact"] as const].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={`display border-b border-white/10 py-4 text-5xl ${pathname === href ? "text-amber" : ""}`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <p className="eyebrow text-white/50">Build · Power · Connect · Automate</p>
      </div>
    </>
  );
}
