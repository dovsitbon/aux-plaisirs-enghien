export const restaurant = {
  name: "Aux Plaisirs d'Enghien",
  cuisine: "Cuisine chinoise & vietnamienne",
  street: "5 Rue Gaston Israël",
  postalCode: "95880",
  city: "Enghien-les-Bains",
  phone: "01 39 64 15 01",
  phoneHref: "tel:0139641501",
  phoneIntl: "+33139641501",
  rating: 4.5,
  reviewCount: 240,
  mapsQuery: "5 Rue Gaston Israël, 95880 Enghien-les-Bains",
};

export const fullAddress = `${restaurant.street}, ${restaurant.postalCode} ${restaurant.city}`;

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${restaurant.name} ${fullAddress}`,
)}`;

export const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#carte", label: "La Carte" },
  { href: "#avis", label: "Avis" },
  { href: "#contact", label: "Accès & Contact" },
];

const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}`;

export const photos = {
  steam: { src: unsplash("1523905330026-b8bd1f5f320e"), alt: "Paniers vapeur en bambou ouverts sur des bouchées fumantes" },
  table: { src: unsplash("1780375578952-854c9ef62c36"), alt: "Table garnie de plats chinois traditionnels" },
  wok: { src: unsplash("1681889870636-3f58e5288e03"), alt: "Cuisson au wok sur une flamme vive" },
  nems: { src: unsplash("1787273670681-b1886c2807a3"), alt: "Nems dorés et croustillants" },
  dimsum: { src: unsplash("1779333277496-a5106680169c"), alt: "Bouchées vapeur dans un panier en bambou" },
  raviolis: { src: unsplash("1675774644393-7bcfa424dec7"), alt: "Raviolis grillés servis avec une sauce" },
  bobun: { src: unsplash("1784007686775-35f91f0b8654"), alt: "Vermicelles de riz, herbes fraîches et nems" },
  canard: { src: unsplash("1749640566096-5d8098d452b4"), alt: "Canard laqué tranché servi avec du riz" },
  crevettes: { src: unsplash("1750680229961-1b0e607eb2c7"), alt: "Crevettes sautées à l'ail et au piment" },
  riz: { src: unsplash("1603133872878-684f208fb84b"), alt: "Riz cantonais sauté" },
};

export type Photo = (typeof photos)[keyof typeof photos];

export type MenuItem = {
  name: string;
  detail?: string;
  price: string;
  homemade?: boolean;
};

export type MenuCategory = {
  id: string;
  label: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "entrees",
    label: "Entrées & Vapeurs",
    items: [
      { name: "Nems croustillants", detail: "Poulet, porc ou crevettes", price: "dès 6,50", homemade: true },
      { name: "Dim sum & bouchées vapeur", detail: "Assortiment", price: "6,90 – 7,90" },
      { name: "Raviolis grillés", detail: "Porc ou poulet", price: "8,50" },
    ],
  },
  {
    id: "specialites",
    label: "Spécialités du Chef",
    items: [
      {
        name: "Bo bun",
        detail: "Bœuf ou poulet, vermicelles de riz, crudités, nems, cacahuètes",
        price: "12,90",
        homemade: true,
      },
      { name: "Canard laqué", detail: "À la peau croustillante", price: "11,90" },
      { name: "Crevettes sautées sel & poivre", price: "12,90" },
      { name: "Poulet croustillant du Chef", price: "9,90" },
    ],
  },
  {
    id: "accompagnements",
    label: "Accompagnements",
    items: [
      { name: "Riz cantonais tradition", price: "6,90" },
      { name: "Nouilles sautées", detail: "Aux légumes ou au bœuf", price: "dès 6,90" },
    ],
  },
];

export const signatures = [
  { name: "Bo bun maison", price: "12,90 €", photo: photos.bobun },
  { name: "Canard laqué", price: "11,90 €", photo: photos.canard },
  { name: "Crevettes sel & poivre", price: "12,90 €", photo: photos.crevettes },
  { name: "Dim sum vapeur", price: "dès 6,90 €", photo: photos.dimsum },
];

export const reviews = [
  {
    quote: "Cuisine savoureuse, accueil chaleureux et service rapide. Le Bo Bun est une vraie merveille !",
    rating: 5,
  },
  {
    quote: "Un incontournable à Enghien. Les nems maison et le poulet croustillant sont toujours parfaits.",
    rating: 5,
  },
];

/** Day index follows Date.getDay(): 0 = dimanche. Times in minutes since midnight. */
export const schedule: { day: number; label: string; slots: [number, number][] }[] = [
  { day: 1, label: "Lundi", slots: [[720, 900], [1140, 1350]] },
  { day: 2, label: "Mardi", slots: [[720, 900], [1140, 1350]] },
  { day: 3, label: "Mercredi", slots: [[720, 900], [1140, 1350]] },
  { day: 4, label: "Jeudi", slots: [[720, 900], [1140, 1350]] },
  { day: 5, label: "Vendredi", slots: [[720, 900], [1140, 1350]] },
  { day: 6, label: "Samedi", slots: [[720, 900], [1140, 1350]] },
  { day: 0, label: "Dimanche", slots: [[720, 900]] },
];

export function formatTime(minutes: number) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h}h${m === 0 ? "" : String(m).padStart(2, "0")}`;
}
