/* Menu data for /menu/, recovered from the source page's inline carta widget.
 * Spanish comes from the widget's HTML; EN/DE/FR/IT/NL come from its inline I18N script.
 * Prices are not translated. A missing translation falls back to Spanish (as on the source). */

import type { Lang } from "../i18n/config";

/** The menu speaks the site languages. */
export type MenuLang = Lang;


export const CATEGORY_IDS = ["sopas","frias","calientes","ensaladas","fuego-sabor","pollo","brochetas","cordero","cerdo","chuleton","ternera","mar","acompanamientos","salsas","ninos"] as const;
export type CategoryId = (typeof CATEGORY_IDS)[number];

export type MenuDish = {
  /** Dish number printed before the name; also the key into the translated `dishes`/`descs`. */
  num: number;
  price: string;
  badge?: string;
};

export type MenuCategory = {
  id: CategoryId;
  /** Original photo on the old site; the same Magnific stock photo is served as public/sites/genghiskhan/menu/<id>-{400,1200}.webp. */
  sourcePhoto?: string;
  dishes: MenuDish[];
};

export type MenuStrings = {
  title: string;
  subtitle: string;
  igic: string;
  menu: string;
  closeAll: string;
  allergenTitle: string;
  allergenText: string;
  cats: Record<CategoryId, string>;
  subs: Partial<Record<CategoryId, string>>;
  notes: Partial<Record<CategoryId, string>>;
  alts: Partial<Record<CategoryId, string>>;
  dishes: Partial<Record<number, string>>;
  descs: Partial<Record<number, string>>;
};

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "sopas",
    sourcePhoto: "/wp-content/uploads/2026/09/top-view-tomato-soup-left-side-black-surface.jpg",
    dishes: [
      { num: 1, price: "9 €" },
      { num: 2, price: "13 €" },
      { num: 3, price: "8,5 €" },
    ],
  },
  {
    id: "frias",
    sourcePhoto: "/wp-content/uploads/2026/09/california-salad-mix-avocado-grapefruit-shrimp-seasoned-with-cayenne-pepper-yogurt.jpg",
    dishes: [
      { num: 10, price: "14,5 €" },
      { num: 11, price: "14,5 €" },
      { num: 12, price: "9 €" },
      { num: 13, price: "14,5 €" },
    ],
  },
  {
    id: "calientes",
    sourcePhoto: "/wp-content/uploads/2026/09/grilled-shrimp-with-herbs-dark-plate.jpg",
    dishes: [
      { num: 30, price: "8,5 €" },
      { num: 31, price: "6,5 €" },
      { num: 32, price: "15 €" },
      { num: 33, price: "14,5 €" },
      { num: 34, price: "12 €" },
      { num: 35, price: "12,5 €" },
      { num: 36, price: "16,5 €" },
      { num: 37, price: "15,5 €" },
      { num: 38, price: "15,5 €" },
      { num: 39, price: "12,5 €" },
      { num: 40, price: "12 €" },
      { num: 41, price: "10,5 €" },
      { num: 42, price: "8 €" },
      { num: 43, price: "8 €" },
    ],
  },
  {
    id: "ensaladas",
    sourcePhoto: "/wp-content/uploads/2026/09/fresh-green-salad-black-bowl-dark-background.jpg",
    dishes: [
      { num: 20, price: "9 €" },
      { num: 21, price: "11,5 €" },
      { num: 22, price: "14,5 €" },
      { num: 23, price: "14,5 €" },
    ],
  },
  {
    id: "fuego-sabor",
    sourcePhoto: "/wp-content/uploads/2026/09/tasty-fresh-appetizing-meat-beef-grill-cooking-open-fire-grill-grid-nature-background-closeup.jpg",
    dishes: [
      { num: 50, price: "25,5 €" },
      { num: 51, price: "12,5 €" },
      { num: 100, price: "55 €", badge: "TOP #1" },
    ],
  },
  {
    id: "pollo",
    sourcePhoto: "/wp-content/uploads/2026/09/delicious-grilled-chicken-wings-with-dipping-sauces-dark-background.jpg",
    dishes: [
      { num: 60, price: "12,5 €" },
      { num: 61, price: "14,5 €" },
    ],
  },
  {
    id: "brochetas",
    sourcePhoto: "/wp-content/uploads/2026/09/side-view-meat-kebab-skewers-with-salt-slice-lemon-board.jpg",
    dishes: [
      { num: 70, price: "19,5 €" },
      { num: 71, price: "22,5 €" },
      { num: 72, price: "16 €" },
    ],
  },
  {
    id: "cordero",
    sourcePhoto: "/wp-content/uploads/2026/09/hot-steaming-grilled-lamb-chops-with-rosemary.jpg",
    dishes: [
      { num: 80, price: "29,5 €" },
    ],
  },
  {
    id: "cerdo",
    sourcePhoto: "/wp-content/uploads/2026/09/rib-rib-restaurant-process-preparing-pork-ribs-open-fire.jpg",
    dishes: [
      { num: 90, price: "19,5 €" },
      { num: 91, price: "24 €" },
      { num: 92, price: "12,5 €" },
      { num: 93, price: "26 €" },
    ],
  },
  {
    id: "chuleton",
    sourcePhoto: "/wp-content/uploads/2026/09/well-done-t-bone-steak-pineapple.jpg",
    dishes: [
      { num: 114, price: "52 €/kg" },
      { num: 115, price: "62 €/kg" },
      { num: 116, price: "108 €/kg" },
    ],
  },
  {
    id: "ternera",
    sourcePhoto: "/wp-content/uploads/2026/09/grilled-ribeye-steak-with-rosemary-sea-salt.jpg",
    dishes: [
      { num: 110, price: "21 €/300g" },
      { num: 111, price: "27 €/300g" },
      { num: 112, price: "32,8 €/300g" },
    ],
  },
  {
    id: "mar",
    sourcePhoto: "/wp-content/uploads/2026/09/seafood-plate-with-fried-salmon-mussels-shrimps-calamari-lemon.jpg",
    dishes: [
      { num: 140, price: "26,5 €" },
      { num: 141, price: "24 €" },
      { num: 142, price: "26 €" },
      { num: 143, price: "26 €" },
      { num: 144, price: "28 €" },
      { num: 145, price: "28 €" },
      { num: 146, price: "24,5 €" },
      { num: 147, price: "21 €" },
    ],
  },
  {
    id: "acompanamientos",
    sourcePhoto: "/wp-content/uploads/2026/09/golden-french-fries-black-basket-dark-background.jpg",
    dishes: [
      { num: 130, price: "5 €" },
      { num: 131, price: "7 €" },
      { num: 132, price: "7 €" },
      { num: 133, price: "4 €" },
      { num: 134, price: "7,5 €" },
    ],
  },
  {
    id: "salsas",
    sourcePhoto: "/wp-content/uploads/2026/09/variations-dip-sauces-barbeque-including-yogurt-tomato-olive-oil-sauces.jpg",
    dishes: [
      { num: 120, price: "3 €" },
      { num: 121, price: "3 €" },
      { num: 122, price: "3 €" },
      { num: 123, price: "4 €" },
      { num: 124, price: "4 €" },
      { num: 125, price: "4,5 €" },
      { num: 126, price: "5 €" },
    ],
  },
  {
    id: "ninos",
    sourcePhoto: "/wp-content/uploads/2026/09/chicken-nuggets-black-plate-fork-wooden-board-tomatoes-ketchup-dark-surface.jpg",
    dishes: [
      { num: 150, price: "8,5 €" },
      { num: 151, price: "8,5 €" },
      { num: 152, price: "9 €" },
      { num: 153, price: "11,5 €" },
    ],
  },
];
