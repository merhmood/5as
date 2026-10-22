"use client";

import Link from "next/link";
import Typewriter from "./Typewriter";
import { useEffect, useRef, useState } from "react";

const slides = [
  {
    tag: "Build · Power · Connect · Automate",
    title: ["One partner.", "Every system."],
    body: "Construction, power, networks and smart technology, planned together and delivered by one team, for facilities that work from day one.",
  },
  {
    tag: "01 / Build",
    title: ["Spaces built to", "carry the load."],
    body: "Spaces built from the ground up to carry the power, data and operations a modern facility depends on.",
  },
  {
    tag: "02 / Power",
    title: ["Power that keeps", "running."],
    body: "Power designed around how your facility runs, and engineered to keep it running when the grid doesn't.",
  },
  {
    tag: "03 / Connect",
    title: ["The digital", "backbone."],
    body: "Structured cabling, networks, cloud and smart systems that connect your people, devices, applications and buildings.",
  },
  {
    tag: "04 / Automate",
    title: ["Technology that", "keeps care moving."],
    body: "Reliable digital systems for hospitals, clinics, laboratories and diagnostic centres, so clinicians can focus on care.",
  },
] as const;

const INTERVAL_MS = 5500;
export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [userPaused, setUserPaused] = useState(false);
  const [index, setIndex] = useState(0);
  const playing = !userPaused;

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    if (playing) v.play().catch(() => setUserPaused(true));
    else v.pause();
  }, [playing]);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), INTERVAL_MS);
    return () => clearInterval(id);
  }, [playing, index]);

  const slide = slides[index];

  return (
    <section className="relative isolate flex min-h-svh items-end overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-70"
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />

      <div className="wrap w-full pb-14 pt-32 md:pb-20">
        <div key={index} className="hero-slide min-h-[22rem] md:min-h-[26rem]">
          <p className="eyebrow tech-label text-amber">{slide.tag}</p>
          <h1 className="display tech mt-5 max-w-5xl text-[clamp(2.4rem,7.4vw,6.2rem)]">
            <Typewriter text={`${slide.title[0]}
${slide.title[1]}`} speed={45} delay={250} />
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75">{slide.body}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/contact" className="btn btn-solid">Start a project</Link>
            <Link href="/services" className="btn btn-line">Our services</Link>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between gap-6 border-t border-white/15 pt-5">
          <button
            type="button"
            onClick={() => setUserPaused((p) => !p)}
            aria-pressed={!playing}
            className="eyebrow flex items-center gap-3 text-white/80 hover:text-amber"
          >
            <span className="flex h-10 w-10 items-center justify-center border border-white/40">
              {playing ? (
                <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor" aria-hidden>
                  <rect x="3" y="2" width="3.5" height="12" />
                  <rect x="9.5" y="2" width="3.5" height="12" />
                </svg>
              ) : (
                <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor" aria-hidden>
                  <path d="M4 2l10 6-10 6z" />
                </svg>
              )}
            </span>
            {playing ? "Pause" : "Play"}
          </button>

          <div className="flex items-center gap-2" role="group" aria-label="Choose slide">
            {slides.map((s, i) => (
              <button
                key={s.tag}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show slide ${i + 1}`}
                aria-current={i === index}
                className="group flex h-10 w-8 items-center"
              >
                <span className={`h-0.5 w-full transition-colors ${i === index ? "bg-amber" : "bg-white/30 group-hover:bg-white/60"}`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
