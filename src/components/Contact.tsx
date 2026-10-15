"use client";

import { ArrowUpRight, Phone } from "lucide-react";
import { formatTime, fullAddress, mapsLink, restaurant, schedule } from "@/lib/restaurant";
import { useParisClock } from "@/lib/useParisClock";
import { OpenStatus } from "./OpenStatus";
import { Reveal } from "./Reveal";

export function Contact() {
  const today = useParisClock()?.day ?? null;
  const embed = `https://www.google.com/maps?q=${encodeURIComponent(restaurant.mapsQuery)}&z=16&output=embed`;

  return (
    <section id="contact" aria-labelledby="contact-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal>
          <p className="label text-gold-text">Accès & Contact</p>
          <h2 id="contact-title" className="mt-4 text-balance font-serif text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
            Venez nous voir
          </h2>
        </Reveal>

        <div className="mt-12 grid border-t border-ink md:grid-cols-3">
          <Reveal className="border-b border-line py-8 md:border-b-0 md:border-r md:pr-10">
            <h3 className="label text-muted">Adresse</h3>
            <address className="mt-4 font-serif text-2xl not-italic leading-snug">
              {restaurant.street}
              <br />
              {restaurant.postalCode} {restaurant.city}
            </address>
            <p className="mt-3 text-ink-soft">Près de la gare SNCF, en centre-ville.</p>
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium underline decoration-ink/30 underline-offset-4 hover:decoration-ink"
            >
              Itinéraire
              <ArrowUpRight className="size-4" strokeWidth={1.75} aria-hidden />
            </a>
          </Reveal>

          <Reveal index={1} className="border-b border-line py-8 md:border-b-0 md:border-r md:px-10">
            <div className="flex items-center justify-between gap-4">
              <h3 className="label text-muted">Horaires</h3>
              <OpenStatus />
            </div>
            <table className="mt-4 w-full text-[0.95rem]">
              <caption className="sr-only">Horaires d&apos;ouverture</caption>
              <tbody>
                {schedule.map((d) => {
                  const isToday = d.day === today;
                  return (
                    <tr key={d.day} className={isToday ? "font-semibold text-ink" : "text-ink-soft"}>
                      <th scope="row" className="py-1.5 pr-4 text-left font-[inherit]">
                        {d.label}
                        {isToday && <span className="sr-only"> (aujourd&apos;hui)</span>}
                      </th>
                      <td className="py-1.5 text-right tabular-nums">
                        {d.slots.map(([s, e]) => `${formatTime(s)}–${formatTime(e)}`).join(", ")}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Reveal>

          <Reveal index={2} className="py-8 md:pl-10">
            <h3 className="label text-muted">Réservation</h3>
            <a href={restaurant.phoneHref} className="mt-4 block font-serif text-4xl leading-none hover:text-gold-text">
              {restaurant.phone}
            </a>
            <p className="mt-3 text-ink-soft">Pour réserver une table ou commander à emporter.</p>
            <a
              href={restaurant.phoneHref}
              className="mt-6 flex h-14 items-center justify-center gap-2.5 rounded-[4px] bg-ink font-medium text-cream transition-colors hover:bg-ink-soft"
            >
              <Phone className="size-4" strokeWidth={1.75} aria-hidden />
              Appeler maintenant
            </a>
          </Reveal>
        </div>

        <Reveal className="mt-6 overflow-hidden rounded-[6px] border border-line bg-paper">
          <iframe
            title={`Plan d'accès : ${restaurant.name}, ${fullAddress}`}
            src={embed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block h-80 w-full border-0 grayscale-[0.6] sm:h-[28rem]"
          />
        </Reveal>
      </div>
    </section>
  );
}
