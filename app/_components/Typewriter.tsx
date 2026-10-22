"use client";

import { Fragment, useEffect, useRef, useState } from "react";

function withBreaks(s: string) {
  const parts = s.split("\n");
  return parts.map((line, i) => (
    <Fragment key={i}>
      {line}
      {i < parts.length - 1 && <br />}
    </Fragment>
  ));
}

/**
 * Types `text` out character by character once it scrolls into view.
 * The full text is always in the DOM (screen-reader copy + invisible
 * remainder), so layout never shifts while typing. Use "\n" for line breaks.
 */
export default function Typewriter({
  text,
  speed = 40,
  delay = 0,
  className,
}: {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    let timer: number;
    const tick = () => {
      i += 1;
      setCount(i);
      if (i < text.length) {
        const pause = /[.,:;]/.test(text[i - 1]) ? speed * 5 : 0;
        timer = window.setTimeout(tick, speed + pause + Math.random() * speed * 0.5);
      }
    };
    timer = window.setTimeout(tick, delay);
    return () => window.clearTimeout(timer);
  }, [started, text, speed, delay]);

  const done = count >= text.length;

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {withBreaks(text.slice(0, count))}
        <span className={`tw-caret ${done ? "tw-caret-done" : ""}`} />
        <span className="invisible">{withBreaks(text.slice(count))}</span>
      </span>
    </span>
  );
}
