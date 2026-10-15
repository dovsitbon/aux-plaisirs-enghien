import Image from "next/image";
import { ArrowRight, Phone, Star } from "lucide-react";
import { photos, restaurant } from "@/lib/restaurant";
import { OpenStatus } from "./OpenStatus";

export function Hero() {
  return (
    <section id="accueil" aria-labelledby="hero-title" className="relative">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-6 sm:px-8 md:pt-10 lg:grid-cols-12 lg:gap-12 lg:pb-24">
        {/* Photo first on mobile, right column on desktop */}
        <div className="relative lg:order-2 lg:col-span-6 xl:col-span-7">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[6px] bg-paper sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[38rem]">
            <Image
              src={photos.steam.src}
              alt={photos.steam.alt}
              fill
              preload
              sizes="(min-width: 1280px) 56vw, (min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-4 hidden w-44 overflow-hidden rounded-[6px] border-[6px] border-cream bg-paper sm:block lg:-left-10 lg:bottom-10 lg:w-56">
            <div className="relative aspect-[4/5]">
              <Image src={photos.nems.src} alt={photos.nems.alt} fill sizes="224px" className="object-cover" />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center lg:order-1 lg:col-span-6 lg:py-10 xl:col-span-5">
          <p className="text-sm text-muted">
            Restaurant chinois & vietnamien · Enghien-les-Bains
          </p>
          <h1
            id="hero-title"
            className="mt-5 text-balance font-serif text-[2.6rem] leading-[1.04] sm:text-6xl lg:text-[3.6rem] xl:text-[4.1rem]"
          >
            L&apos;Authentique Gastronomie Asiatique{" "}
            <em className="text-gold-text">
              au Cœur d&apos;<span className="whitespace-nowrap">Enghien-les-Bains</span>
            </em>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            Une cuisine chinoise et vietnamienne raffinée, préparée avec passion depuis plus de
            20&nbsp;ans.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <a
              href={restaurant.phoneHref}
              className="inline-flex h-14 items-center justify-center gap-2.5 rounded-[4px] bg-ink px-7 font-medium text-cream transition-colors hover:bg-ink-soft"
            >
              <Phone className="size-4" strokeWidth={1.75} aria-hidden />
              Réserver une Table
            </a>
            <a
              href="#carte"
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-[4px] border border-ink/20 px-7 font-medium transition-colors hover:border-ink sm:border-0 sm:px-0"
            >
              Consulter le Menu
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75} aria-hidden />
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-2 border-t border-line pt-6 text-sm">
            <div className="pr-4">
              <dt className="sr-only">Note Google : 4,5 sur 5</dt>
              <dd className="flex items-center gap-2">
                <span className="font-serif text-3xl leading-none">4,5</span>
                <span className="flex" aria-hidden>
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className={`size-3.5 ${i < 4 ? "fill-gold text-gold" : "fill-gold/40 text-gold/40"}`} />
                  ))}
                </span>
              </dd>
              <dd className="mt-1.5 text-muted">Avis Google · {restaurant.reviewCount}+ avis</dd>
            </div>
            <div className="border-l border-line pl-5">
              <dt className="sr-only">Service</dt>
              <dd className="font-serif text-xl leading-tight">Sur place & À emporter</dd>
              <dd className="mt-1.5">
                <OpenStatus />
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
