"use client";

import { formatTime, schedule } from "@/lib/restaurant";
import { useParisClock, type ParisClock } from "@/lib/useParisClock";

type Status = { open: boolean; label: string };

function computeStatus({ day, minutes }: ParisClock): Status {
  const today = schedule.find((d) => d.day === day)!;

  const current = today.slots.find(([start, end]) => minutes >= start && minutes < end);
  if (current) return { open: true, label: `Ouvert · ferme à ${formatTime(current[1])}` };

  const later = today.slots.find(([start]) => minutes < start);
  if (later) return { open: false, label: `Fermé · ouvre à ${formatTime(later[0])}` };

  for (let i = 1; i <= 7; i++) {
    const next = schedule.find((d) => d.day === (day + i) % 7)!;
    if (next.slots.length) {
      const when = i === 1 ? "demain" : next.label.toLowerCase();
      return { open: false, label: `Fermé · ouvre ${when} à ${formatTime(next.slots[0][0])}` };
    }
  }
  return { open: false, label: "Fermé" };
}

export function OpenStatus({ tone = "light" }: { tone?: "light" | "dark" }) {
  const clock = useParisClock();
  const status = clock ? computeStatus(clock) : null;

  return (
    <p
      className={`flex min-h-6 items-center gap-2.5 text-sm font-medium ${
        tone === "dark" ? "text-cream" : "text-ink"
      }`}
      aria-live="polite"
    >
      <span
        aria-hidden
        className={`flex size-2.5 shrink-0 rounded-full ${
          status === null ? "bg-current opacity-30" : status.open ? "bg-emerald-500" : "bg-red-500"
        }`}
      />
      {status?.label ?? "Horaires du jour"}
    </p>
  );
}
