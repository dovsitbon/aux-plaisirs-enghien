import Image from "next/image";
import { Star } from "lucide-react";
import { mapsLink, photos, restaurant, reviews } from "@/lib/restaurant";
import { Reveal } from "./Reveal";

export function Avis() {
  return (
    <section id="avis" aria-labelledby="avis-title" className="border-y border-line bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <p className="label text-gold-text">Avis clients</p>
            <h2 id="avis-title" className="mt-4 text-balance font-serif text-4xl leading-[1.1] sm:text-5xl">
              Ils en parlent mieux que nous
            </h2>
            <div className="mt-8 flex items-end gap-4">
              <p className="font-serif text-7xl leading-none">4,5</p>
              <div className="pb-1.5">
                <p className="flex gap-0.5" role="img" aria-label="4,5 sur 5">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      aria-hidden
                      className={`size-4 ${i < 4 ? "fill-gold text-gold" : "fill-gold/35 text-gold/35"}`}
                    />
                  ))}
                </p>
                <p className="mt-1 text-sm text-muted">
                  sur Google · plus de {restaurant.reviewCount} avis
                </p>
              </div>
            </div>
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-11 items-center text-sm font-medium underline decoration-ink/30 underline-offset-4 hover:decoration-ink"
            >
              Voir tous les avis sur Google
            </a>
          </Reveal>

          <div className="lg:col-span-8">
            <div className="grid gap-px overflow-hidden rounded-[6px] border border-line bg-line md:grid-cols-2">
              {reviews.map((review, i) => (
                <Reveal as="figure" key={i} index={i + 1} className="flex flex-col justify-between bg-cream p-7 sm:p-10">
                  <blockquote className="font-serif text-2xl leading-snug sm:text-[1.65rem]">
                    <p>«&nbsp;{review.quote}&nbsp;»</p>
                  </blockquote>
                  <figcaption className="mt-8 flex items-center justify-between text-sm text-muted">
                    <span>Avis Google</span>
                    <span className="flex gap-0.5" role="img" aria-label={`${review.rating} sur 5`}>
                      {Array.from({ length: review.rating }, (_, s) => (
                        <Star key={s} aria-hidden className="size-3.5 fill-gold text-gold" />
                      ))}
                    </span>
                  </figcaption>
                </Reveal>
              ))}
            </div>

            <Reveal index={3} className="mt-5 grid overflow-hidden rounded-[6px] border border-line bg-cream sm:grid-cols-[13rem_1fr]">
              <div className="relative aspect-[16/9] sm:aspect-auto">
                <Image src={photos.table.src} alt={photos.table.alt} fill sizes="(min-width: 640px) 208px, 100vw" className="object-cover" />
              </div>
              <p className="p-7 text-ink-soft sm:p-8">
                <span className="font-serif text-xl text-ink">En plein centre-ville.</span>{" "}
                À quelques minutes à pied de la gare SNCF d&apos;Enghien-les-Bains : idéal pour une pause
                déjeuner comme pour un dîner entre amis ou en famille.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
