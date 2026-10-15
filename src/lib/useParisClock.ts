"use client";

import { useSyncExternalStore } from "react";

/** Current day/time in Paris, regardless of the visitor's timezone. */
export function parisNow() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Paris",
    year: "numeric",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  return {
    year: Number(get("year")),
    day: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday")),
    minutes: (Number(get("hour")) % 24) * 60 + Number(get("minute")),
  };
}

export type ParisClock = ReturnType<typeof parisNow>;

let cached: { key: string; value: ParisClock } | null = null;

function getSnapshot() {
  const now = parisNow();
  const key = `${now.year}-${now.day}-${now.minutes}`;
  if (cached?.key !== key) cached = { key, value: now };
  return cached.value;
}

function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 30_000);
  return () => clearInterval(id);
}

/** Null during server render and hydration, then the live Paris clock. */
export function useParisClock(): ParisClock | null {
  return useSyncExternalStore(subscribe, getSnapshot, () => null);
}
