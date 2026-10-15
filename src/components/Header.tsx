"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { navLinks, restaurant } from "@/lib/restaurant";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("top-sentinel");
    if (!sentinel) return;
    const observer = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting));
    observer.observe(sentinel);
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
    <header
      className={`sticky top-0 z-50 bg-cream/95 backdrop-blur transition-[border-color] duration-300 ${
        scrolled || open ? "border-b border-line" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-8 md:h-[4.5rem]">
        <a href="#accueil" onClick={() => setOpen(false)} translate="no" className="leading-none">
          <span className="block font-serif text-[1.35rem] sm:text-2xl">Aux Plaisirs d&apos;Enghien</span>
          <span className="mt-1 hidden text-[0.7rem] tracking-[0.12em] text-muted uppercase sm:block">
            {restaurant.cuisine}
          </span>
        </a>

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-9 text-[0.95rem] text-ink-soft">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="py-2 transition-colors hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <a
            href={restaurant.phoneHref}
            className="hidden h-11 items-center gap-2.5 rounded-[4px] bg-ink px-5 text-sm font-medium text-cream transition-colors hover:bg-ink-soft sm:inline-flex"
          >
            <Phone className="size-4" strokeWidth={1.75} aria-hidden />
            Appeler pour Réserver
          </a>
          <a
            href={restaurant.phoneHref}
            aria-label={`Appeler pour réserver : ${restaurant.phone}`}
            className="inline-flex size-11 items-center justify-center rounded-[4px] text-ink sm:hidden"
          >
            <Phone className="size-5" strokeWidth={1.75} aria-hidden />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="inline-flex size-11 items-center justify-center rounded-[4px] text-ink lg:hidden"
          >
            {open ? (
              <X className="size-6" strokeWidth={1.5} aria-hidden />
            ) : (
              <Menu className="size-6" strokeWidth={1.5} aria-hidden />
            )}
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Navigation mobile"
        hidden={!open}
        className="h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain bg-cream px-4 pb-10 sm:px-8 lg:hidden"
      >
        <ul className="border-t border-line">
          {navLinks.map((link) => (
            <li key={link.href} className="border-b border-line">
              <a href={link.href} onClick={() => setOpen(false)} className="block py-5 font-serif text-3xl">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={restaurant.phoneHref}
          onClick={() => setOpen(false)}
          className="mt-8 flex h-14 items-center justify-center gap-2.5 rounded-[4px] bg-ink font-medium text-cream"
        >
          <Phone className="size-5" strokeWidth={1.75} aria-hidden />
          Appeler · {restaurant.phone}
        </a>
        <p className="mt-6 text-center text-sm text-muted">
          Lun – Sam 12h–15h, 19h–22h30 · Dim 12h–15h
        </p>
      </nav>
    </header>
  );
}
