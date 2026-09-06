/* ── Image paths ── */
export const P = {
  hero: "/manus-storage/hero.webp",
  hero2: "/manus-storage/hero_2.webp",
  living: "/manus-storage/living_1.webp",
  sofa1: "/manus-storage/sofa_1.webp",
  sofa2: "/manus-storage/sofa_2.webp",
  sofa3: "/manus-storage/sofa_3.webp",
  sofa4: "/manus-storage/sofa_4.webp",
  sofa5: "/manus-storage/sofa_5.webp",
  bedroom1: "/manus-storage/bedroom_1.webp",
  bedroom2: "/manus-storage/bedroom_2.webp",
  bedroom3: "/manus-storage/bedroom_3.webp",
  dining1: "/manus-storage/dining_1.webp",
  dining2: "/manus-storage/dining_2.webp",
  dining3: "/manus-storage/dining_3.webp",
  office1: "/manus-storage/office_1.webp",
  office2: "/manus-storage/office_2.webp",
  office3: "/manus-storage/office_3.webp",
  bespoke1: "/manus-storage/bespoke_1.webp",
  bespoke2: "/manus-storage/bespoke_2.webp",
  bespoke3: "/manus-storage/bespoke_3.webp",
  bespoke4: "/manus-storage/bespoke_4.webp",
  bespoke5: "/manus-storage/bespoke_5.webp",
  bespoke6: "/manus-storage/bespoke_6.webp",
  logo: "/manus-storage/logo.webp",
} as const;

/* ── Contact / link constants ── */
export const WHATSAPP = "https://wa.me/8801960481983";
export const PHONE = "+880 1960-481983";
export const PHONE_TEL = "tel:+8801960481983";
export const EMAIL = "heavenfurnituremart@gmail.com";
export const MAILTO = "mailto:heavenfurnituremart@gmail.com";
export const MAPS =
  "https://www.google.com/maps/place/Heaven+Furniture+Mart/@22.3296222,91.7905104,1090m/data=!3m1!1e3!4m14!1m7!3m6!1s0x30acd999401bf62b:0xcd9639571c8d5c27!2sHeaven+Furniture+Mart!8m2!3d22.3296222!4d91.7930853!16s%2Fg%2F11n06prddd!3m5!1s0x30acd999401bf62b:0xcd9639571c8d5c27!8m2!3d22.3296222!4d91.7930853!16s%2Fg%2F11n06prddd!5m1!1e1?entry=ttu";
export const ADDRESS =
  "House #4, Road #2, Lane #1, Block #L · Halishahar Housing Estate, Agrabad Access Road, Chattogram";
export const CTA_LABEL = "Request a Consultation";

/* ── Product type + data ── */
export type Product = {
  id: string;
  category: "Living" | "Bedroom" | "Dining" | "Office" | "Bespoke";
  title: string;
  subtitle: string;
  image: string;
  hoverImage?: string;
  dims: string;
  material: string;
  finish: string;
  note: string;
};

export const PRODUCTS: Product[] = [
  { id: "liora", category: "Living", title: "Liora Sofa", subtitle: "Walnut frame · Bouclé", image: P.sofa1, hoverImage: P.sofa2, dims: "W 240 × D 95 × H 78 cm", material: "Solid walnut, HR foam", finish: "Natural oil", note: "Made to order · 5-6 weeks" },
  { id: "aura", category: "Living", title: "Aura Lounge", subtitle: "Low profile · Linen", image: P.sofa3, hoverImage: P.sofa4, dims: "W 210 × D 92 × H 72 cm", material: "Oak, linen blend", finish: "Matte lacquer", note: "Configurable length" },
  { id: "terra", category: "Living", title: "Terra Coffee Table", subtitle: "Travertine top · Oak", image: P.living, hoverImage: P.sofa5, dims: "W 120 × D 70 × H 35 cm", material: "Travertine + oak", finish: "Oiled", note: "Stone options" },
  { id: "haven", category: "Bedroom", title: "Haven Bed", subtitle: "Channel headboard", image: P.bedroom1, hoverImage: P.bedroom2, dims: "Queen · W 168 × L 214 cm", material: "Walnut + fabric", finish: "Dark walnut", note: "King / Queen" },
  { id: "noir", category: "Bedroom", title: "Noir Bed", subtitle: "Floating plinth", image: P.bedroom2, hoverImage: P.bedroom3, dims: "King · W 185 × L 218 cm", material: "Oak, upholstered", finish: "Smoked oak", note: "Storage option" },
  { id: "luna", category: "Bedroom", title: "Luna Wardrobe", subtitle: "Fluted doors", image: P.bedroom3, hoverImage: P.bedroom1, dims: "W 220 × D 62 × H 215 cm", material: "Oak + rattan", finish: "Natural", note: "Custom widths" },
  { id: "sora", category: "Dining", title: "Sora Table", subtitle: "Oval · 6-seat", image: P.dining1, hoverImage: P.dining2, dims: "W 200 × D 100 × H 75 cm", material: "Solid oak", finish: "White oil", note: "Seats 6–8" },
  { id: "mensa", category: "Dining", title: "Mensa Chairs · Set of 4", subtitle: "Curved back · Cane", image: P.dining2, hoverImage: P.dining3, dims: "W 48 × D 56 × H 82 cm", material: "Oak + cane", finish: "Natural", note: "Fabric or cane" },
  { id: "edge", category: "Dining", title: "Edge Sideboard", subtitle: "Push-open · 180cm", image: P.dining3, hoverImage: P.dining1, dims: "W 180 × D 45 × H 75 cm", material: "Walnut", finish: "Oiled walnut", note: "2-3 doors" },
  { id: "atelier", category: "Office", title: "Atelier Desk", subtitle: "Executive · Drawer", image: P.office1, hoverImage: P.office2, dims: "W 180 × D 80 × H 75 cm", material: "Walnut + leather", finish: "Oiled", note: "Cable management" },
  { id: "vault", category: "Office", title: "Vault Shelving", subtitle: "Modular · 240cm", image: P.office2, hoverImage: P.office3, dims: "W 240 × D 38 × H 200 cm", material: "Oak + brass", finish: "Natural", note: "Configurable bays" },
  { id: "cove", category: "Office", title: "Cove Console", subtitle: "Made for your niche", image: P.office3, hoverImage: P.office1, dims: "Custom — to your wall", material: "To spec", finish: "To spec", note: "Bespoke lead 4 weeks" },
];

export const COLLECTIONS: {
  key: string;
  title: string;
  pieces: string;
  image: string;
  category: Product["category"];
}[] = [
  { key: "living", title: "Living", pieces: "Sofas · Coffee Tables · Consoles", image: P.sofa1, category: "Living" },
  { key: "bedroom", title: "Bedroom", pieces: "Beds · Wardrobes · Dressing Tables", image: P.bedroom1, category: "Bedroom" },
  { key: "dining", title: "Dining", pieces: "Tables · Chairs · Cabinets", image: P.dining1, category: "Dining" },
  { key: "office", title: "Office", pieces: "Executive Desks · Shelving", image: P.office1, category: "Office" },
];

export const MATERIALS = [
  { name: "Walnut", color: "#5C3A1E", photo: P.bespoke2, caption: "Solid walnut — hand-oiled in our Agrabad workshop" },
  { name: "White oak", color: "#D4B896", photo: P.bespoke6, caption: "White oak grain — precision-joined on site" },
  { name: "Travertine", color: "#E8DCC8", photo: P.bespoke5, caption: "Travertine slab — selected for natural veining" },
  { name: "Bouclé", color: "#F0EBE0", photo: P.bespoke4, caption: "Bouclé upholstery — hand-stretched and tufted" },
  { name: "Brass", color: "#B79A67", photo: P.bespoke3, caption: "Brushed brass hardware — fitted in-house" },
];

export const PROOF = [
  { year: "2020", line: "Founded by Abul Kalam Bhuiyan" },
  { year: "2021", line: "Showroom opened in Agrabad" },
  { year: "2024–25", line: "International Furniture Fair" },
  { year: "2025", line: "Expanded collections & operations" },
  { year: "2026", line: "BFIOA recognition" },
];

/* ── Testimonials ── */
export const COMMENTS = [
  {
    text: "They tailored our sofa around a really odd living room layout, and now the room looks like it was built around the sofa. Very happy with it.",
    author: "Nusrat Jahan",
    time: "2d",
    platform: "Facebook",
    likes: 12,
    color: "#3B82F6",
  },
  {
    text: "Quality is unreal for the price tbh. The walnut finish looks even better in person than in the photos.",
    author: "Rafiqul Islam",
    time: "5d",
    platform: "Facebook",
    likes: 7,
    color: "#10B981",
  },
  {
    text: "Delivery was quick and the installers were careful with our floors. They even helped us pick the fabric for the kids' room.",
    author: "Sadia Rahman",
    time: "1w",
    platform: "Facebook",
    likes: 4,
    color: "#F43F5E",
  },
  {
    text: "Our bespoke dining table is the centre of the house now. Every single guest asks about it 😄",
    author: "Tanvir Hossain",
    time: "3d",
    platform: "YouTube",
    likes: 21,
    color: "#EC4899",
  },
  {
    text: "They turned a tiny awkward niche into a bookshelf we get compliments on. Pricing was honest from the first quote.",
    author: "Mahfuz Alam",
    time: "2w",
    platform: "Facebook",
    likes: 3,
    color: "#8B5CF6",
  },
  {
    text: "Beautiful finish, fair pricing, and the whole process felt personal. You can tell they actually care about the details.",
    author: "Farhana Kabir",
    time: "4d",
    platform: "Facebook",
    likes: 9,
    color: "#F59E0B",
  },
];

/* ── Navigation ── */
export const NAV = [
  ["Studio", "#hero"],
  ["Collections", "#collections"],
  ["Bespoke", "#bespoke"],
  ["Heritage", "#heritage"],
] as const;
