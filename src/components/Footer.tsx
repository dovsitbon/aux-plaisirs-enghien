import { CurrentYear } from "./CurrentYear";
import { fullAddress, navLinks, restaurant } from "@/lib/restaurant";

export function Footer() {
  return (
    <footer className="bg-lacquer text-cream/75">
      <div aria-hidden className="trim opacity-70" />
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-8 md:pt-20">
        <div className="grid gap-10 border-b border-gold/25 pb-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <p translate="no" className="font-serif text-4xl leading-none text-cream sm:text-5xl">
              Aux Plaisirs d&apos;Enghien
            </p>
            <p className="mt-4">{restaurant.cuisine} · Sur place & à emporter</p>
          </div>
          <div className="text-sm md:col-span-3">
            <p className="label text-gold">Horaires</p>
            <p className="mt-3">Lundi – Samedi</p>
            <p>12h–15h · 19h–22h30</p>
            <p className="mt-2">Dimanche</p>
            <p>12h–15h</p>
          </div>
          <div className="text-sm md:col-span-4">
            <p className="label text-gold">Adresse</p>
            <address className="mt-3 not-italic">{fullAddress}</address>
            <a
              href={restaurant.phoneHref}
              className="mt-2 inline-flex min-h-11 items-center font-serif text-2xl text-cream transition-colors hover:text-gold"
            >
              {restaurant.phone}
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4 py-6 text-xs md:flex-row md:items-center md:justify-between">
          <p>
            © <CurrentYear /> {restaurant.name}. Tous droits réservés.
          </p>
          <nav aria-label="Liens du pied de page">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-gold/90 transition-colors hover:text-gold">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
