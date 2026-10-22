"use client";

import { useSyncExternalStore } from "react";

const dateFmt = new Intl.DateTimeFormat("en-GB", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 60_000);
  return () => clearInterval(id);
}

const getDate = () => dateFmt.format(new Date());
const getServerDate = () => "";

export default function FooterDate() {
  const date = useSyncExternalStore(subscribe, getDate, getServerDate);
  const year = date.slice(-4);

  return (
    <p className="eyebrow flex flex-wrap justify-between gap-x-6 gap-y-2 text-white/40">
      <span>{year && `© ${year} `}5As. Photography via Pexels.</span>
      <span>{date}</span>
    </p>
  );
}
