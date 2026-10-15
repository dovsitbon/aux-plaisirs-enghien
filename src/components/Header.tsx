"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { navLinks, restaurant } from "@/lib/restaurant";

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#accueil");

  // Highlight the nav link of the section currently in view
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-espresso text-cream">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-8 md:h-[4.5rem]">
        <a href="#accueil" onClick={() => setOpen(false)} translate="no" className="leading-none">
          <span className="block font-serif text-[1.35rem] sm:text-2xl">Aux Plaisirs d&apos;Enghien</span>
          <span className="mt-1 hidden text-[0.7rem] tracking-[0.12em] text-gold uppercase sm:block">
            {restaurant.cuisine}
          </span>
        </a>

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-9 text-[0.95rem]">
            {navLinks.map((link) => {
              const current = active === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={current ? "location" : undefined}
                    className={`relative py-2 transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-gold after:transition-transform after:duration-300 ${
                      current
                        ? "text-gold after:scale-x-100"
                        : "text-cream/80 after:scale-x-0 hover:text-gold"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <a
            href={restaurant.phoneHref}
            className="hidden h-11 items-center gap-2.5 rounded-[4px] bg-gold px-5 text-sm font-medium text-espresso transition-colors hover:bg-cherry hover:text-cream sm:inline-flex"
          >
            <Phone className="size-4" strokeWidth={1.75} aria-hidden />
            Appeler pour Réserver
          </a>
          <a
            href={restaurant.phoneHref}
            aria-label={`Appeler pour réserver : ${restaurant.phone}`}
            className="inline-flex size-11 items-center justify-center rounded-[4px] text-gold sm:hidden"
          >
            <Phone className="size-5" strokeWidth={1.75} aria-hidden />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="inline-flex size-11 items-center justify-center rounded-[4px] text-cream lg:hidden"
          >
            {open ? (
              <X className="size-6" strokeWidth={1.5} aria-hidden />
            ) : (
              <Menu className="size-6" strokeWidth={1.5} aria-hidden />
            )}
          </button>
        </div>
      </div>
      <div aria-hidden className="trim opacity-60" />

      <nav
        id="mobile-nav"
        aria-label="Navigation mobile"
        hidden={!open}
        className="h-[calc(100dvh-4rem-10px)] overflow-y-auto overscroll-contain bg-espresso px-4 pb-10 sm:px-8 lg:hidden"
      >
        <ul>
          {navLinks.map((link) => (
            <li key={link.href} className="border-b border-cream/10">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={active === link.href ? "location" : undefined}
                className={`block py-5 font-serif text-3xl ${active === link.href ? "text-gold" : "text-cream"}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={restaurant.phoneHref}
          onClick={() => setOpen(false)}
          className="mt-8 flex h-14 items-center justify-center gap-2.5 rounded-[4px] bg-gold font-medium text-espresso"
        >
          <Phone className="size-5" strokeWidth={1.75} aria-hidden />
          Appeler · {restaurant.phone}
        </a>
        <p className="mt-6 text-center text-sm text-cream/60">
          Lun – Sam 12h–15h, 19h–22h30 · Dim 12h–15h
        </p>
      </nav>
    </header>
  );
}
