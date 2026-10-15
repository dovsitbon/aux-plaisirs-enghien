import Image from "next/image";
import { photos } from "@/lib/restaurant";
import { Reveal } from "./Reveal";

export function Maison() {
  return (
    <section aria-labelledby="maison-title" className="bg-espresso text-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-8 md:grid-cols-2 md:gap-16 md:py-28">
        <Reveal className="relative aspect-[4/5] overflow-hidden rounded-[6px] bg-ink-soft md:aspect-[5/6]">
          <Image src={photos.wok.src} alt={photos.wok.alt} fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
        </Reveal>
        <Reveal index={1}>
          <p className="label text-gold">La maison</p>
          <h2 id="maison-title" className="mt-5 text-balance font-serif text-4xl leading-[1.1] sm:text-5xl">
            Plus de vingt ans de cuisine, à deux pas de la gare
          </h2>
          <div className="mt-7 max-w-lg space-y-4 text-lg leading-relaxed text-cream/75">
            <p>
              Chez Aux Plaisirs d&apos;Enghien, on cuisine les recettes traditionnelles de Chine et du
              Vietnam : nems roulés maison, bo bun généreux, canard laqué à la peau croustillante,
              bouchées vapeur.
            </p>
            <p>
              En plein centre-ville, la table se prête aussi bien à un déjeuner rapide qu&apos;à un
              dîner sans se presser. Et tout se commande aussi à emporter.
            </p>
          </div>
          <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-gold/30 pt-6">
            <div>
              <dt className="text-sm text-cream/60">Depuis</dt>
              <dd className="mt-1 font-serif text-3xl">20+ ans</dd>
            </div>
            <div>
              <dt className="text-sm text-cream/60">Note Google</dt>
              <dd className="mt-1 font-serif text-3xl">4,5/5</dd>
            </div>
            <div>
              <dt className="text-sm text-cream/60">Avis</dt>
              <dd className="mt-1 font-serif text-3xl">240+</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
