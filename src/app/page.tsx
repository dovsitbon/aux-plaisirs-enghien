import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Contact } from "@/components/Contact";
import { Carte } from "@/components/Carte";
import { Maison } from "@/components/Maison";
import { Avis } from "@/components/Avis";
import { mapsLink, menu, restaurant } from "@/lib/restaurant";

const priceValue = (price: string) => price.match(/\d+,\d+/)?.[0].replace(",", ".");

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: restaurant.name,
  servesCuisine: ["Chinoise", "Vietnamienne"],
  telephone: restaurant.phoneIntl,
  priceRange: "€",
  url: "https://aux-plaisirs-enghien.vercel.app",
  acceptsReservations: true,
  hasMap: mapsLink,
  address: {
    "@type": "PostalAddress",
    streetAddress: restaurant.street,
    postalCode: restaurant.postalCode,
    addressLocality: restaurant.city,
    addressCountry: "FR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "12:00",
      closes: "15:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "19:00",
      closes: "22:30",
    },
  ],
  hasMenu: {
    "@type": "Menu",
    hasMenuSection: menu.map((cat) => ({
      "@type": "MenuSection",
      name: cat.label,
      hasMenuItem: cat.items.map((item) => ({
        "@type": "MenuItem",
        name: item.name,
        ...(item.detail && { description: item.detail }),
        offers: { "@type": "Offer", price: priceValue(item.price), priceCurrency: "EUR" },
      })),
    })),
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <span id="top-sentinel" aria-hidden className="absolute top-0 h-4 w-px" />
      <a
        href="#carte"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
      >
        Aller à la carte
      </a>
      <Header />
      <main className="flex-1">
        <Hero />
        <Maison />
        <Carte />
        <Avis />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
