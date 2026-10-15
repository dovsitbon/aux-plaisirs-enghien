import Image from "next/image";
import { Phone } from "lucide-react";
import { menu, restaurant, signatures } from "@/lib/restaurant";
import { Ornament } from "./Ornament";
import { Reveal } from "./Reveal";

export function Carte() {
  return (
    <section id="carte" aria-labelledby="carte-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="label text-gold-text">La carte</p>
            <h2 id="carte-title" className="mt-4 text-balance font-serif text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
              Nos incontournables
            </h2>
          </Reveal>
          <Reveal index={1} as="p" className="max-w-sm text-ink-soft">
            Une sélection des plats les plus demandés. La carte complète vous attend au restaurant.
          </Reveal>
        </div>

        {/* Signature dishes: swipeable row on mobile, grid on desktop */}
        <ul
          aria-label="Plats signatures"
          className="-mx-4 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4 lg:gap-5"
        >
          {signatures.map((dish, i) => (
            <Reveal as="li" key={dish.name} index={i} className="w-[72%] shrink-0 snap-start sm:w-auto">
              <figure className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[6px] bg-paper">
                  <Image
                    src={dish.photo.src}
                    alt={dish.photo.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 72vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="mt-4 flex items-baseline justify-between gap-3">
                  <span className="font-serif text-xl transition-colors group-hover:text-cherry">{dish.name}</span>
                  <span className="shrink-0 text-sm text-muted tabular-nums">{dish.price}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>

        {/* Printed-menu style list */}
        <Ornament className="mx-auto mt-16 max-w-xs md:mt-20" />

        <Reveal className="mt-10 overflow-hidden rounded-[6px] border border-line bg-card px-5 pb-10 sm:px-10 md:pb-14 lg:px-16">
          <div aria-hidden className="trim -mx-5 mb-10 opacity-70 sm:-mx-10 md:mb-12 lg:-mx-16" />
          <div className="grid gap-12 md:grid-cols-2 md:gap-x-16 lg:grid-cols-3">
            {menu.map((cat) => (
              <section key={cat.id} aria-labelledby={`cat-${cat.id}`}>
                <h3 id={`cat-${cat.id}`} className="label border-b border-gold/70 pb-3 text-cherry">
                  {cat.label}
                </h3>
                <ul>
                  {cat.items.map((item) => (
                    <li key={item.name} className="border-b border-line py-5 last:border-0">
                      <div className="flex items-baseline gap-3">
                        <span className="font-serif text-xl leading-snug">{item.name}</span>
                        <span aria-hidden className="mb-1 min-w-4 flex-1 border-b border-dotted border-gold/50" />
                        <span className="shrink-0 tabular-nums">
                          {item.price}&nbsp;€
                        </span>
                      </div>
                      {(item.detail || item.homemade) && (
                        <p className="mt-1 text-sm text-muted">
                          {item.detail}
                          {item.detail && item.homemade && " · "}
                          {item.homemade && (
                            <span className="inline-block rounded-full bg-cherry-pale px-2 py-px text-[0.68rem] font-semibold tracking-wider text-cherry uppercase">
                              Fait maison
                            </span>
                          )}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-ink-soft">
              Sur place ou à emporter : commandez par téléphone, on prépare tout à l&apos;heure dite.
            </p>
            <a
              href={restaurant.phoneHref}
              className="inline-flex h-12 shrink-0 items-center justify-center gap-2.5 rounded-[4px] bg-cherry px-6 text-sm font-medium text-cream transition-colors hover:bg-cherry-deep"
            >
              <Phone className="size-4" strokeWidth={1.75} aria-hidden />
              {restaurant.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
