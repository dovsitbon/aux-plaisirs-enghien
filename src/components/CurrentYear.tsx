"use client";

import { useParisClock } from "@/lib/useParisClock";

export function CurrentYear() {
  return <>{useParisClock()?.year ?? 2026}</>;
}
