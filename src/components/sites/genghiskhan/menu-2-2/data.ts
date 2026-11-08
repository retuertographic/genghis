/**
 * Content for /menu-2-2/ (standalone "Menu" page), copied verbatim from
 * https://genghiskhangrilltenerife.com/menu-2-2/ — including the source's
 * spelling ("Caesarsalad", "Menchego") and the duplicated pork/chicken block.
 */

/** A numbered dish. Renders as `num····name | price note`. */
export type MenuItem = {
  kind: "item";
  num: string;
  name: string;
  /** Price shown after the name (or after the description when present). */
  price?: string;
  /** Extra text after the price, e.g. "(Veal, 2 pax, Top #1)". */
  note?: string;
  /** Second paragraph under the dish name; the price then follows it. */
  description?: string;
};

/** A plain un-numbered paragraph inside a list (e.g. "Grilled Pork Rib"). */
export type MenuPlain = { kind: "plain"; text: string };

export type MenuLine = MenuItem | MenuPlain;

export type MenuSection = {
  id: string;
  title: string;
  lines: MenuLine[];
};

/** Widgets stacked in the centred "Fire & Flavour" column. */
export type FireBlock =
  | { kind: "label"; text: string }
  | { kind: "note"; text: string }
  | { kind: "list"; lines: MenuLine[] };

const item = (
  num: string,
  name: string,
  price?: string,
  extra: Partial<Pick<MenuItem, "note" | "description">> = {},
): MenuItem => ({ kind: "item", num, name, price, ...extra });

const plain = (text: string): MenuPlain => ({ kind: "plain", text });

export const MENU_LINKS = [
  { label: "Soups", id: "soups" },
  { label: "Salad", id: "salad" },
  { label: "Cold Delights", id: "colddelights" },
  { label: "Hot appetisers", id: "hotappetisers" },
  { label: "Fire & Flavour", id: "fireflavour" },
  { label: "Skewers", id: "skewers" },
  { label: "Seafood specialties", id: "seafoodspecialties" },
  { label: "Side dishes", id: "sidedishes" },
  { label: "Exquisite Sauces", id: "exquisitesauces" },
  { label: "Children’s menu", id: "childrensmenu" },
] as const;

export const SOUPS: MenuSection = {
  id: "soups",
  title: "Soups",
  lines: [
    item("1", "Chicken soup", "6,5"),
    item("2", "Shellfish soup", "10,5"),
    item("3", "Tomato soup", "6,5"),
  ],
};

export const SALAD: MenuSection = {
  id: "salad",
  title: "Salad",
  lines: [
    item("4", "Tomato and seasoned onion", "7,5"),
    item("5", "Mixed salad", "10,5", {
      description:
        "Lettuce, Cucumber, Tomato, Corn, Carrot, Green and Red Peppers, Red Onion, Asparagus, Boiled Egg",
    }),
    item("6", "Caesarsalad", "11,5", {
      description:
        "Lettuce, Grated Cheese, White Cheese, Cucumber, Cherry Tomato, Carrot, Red Onion, Green and Red Peppers, Toasted Bread, Breaded Chicken Breast, Caesar Sauce",
    }),
    item("7", "Tuna salad", "11,5", {
      description:
        "Lettuce, Cucumber, Tomato, Carrot, Red Onion, Red and Green Peppers, Asparagus, Olives, Tuna",
    }),
    item("8", "Genghis Khan Salad", "13,5", {
      description:
        "Lettuce, Cherry Tomato, Carrot, Red Onion, Red and Green Peppers, Diced White Cheese, Menchego Cheese, Boiled Egg, Avocado, Prawns, Pink Sauce",
    }),
  ],
};

export const COLD_DELIGHTS: MenuSection = {
  id: "colddelights",
  title: "Cold Delights",
  lines: [
    item("10", "King prawn cocktail", "13,5"),
    item("11", "Mussels with vinaigrette", "9,5"),
    item("12", "Melon with acorn-fed Iberian ham", "13"),
    item("13", "White cheese", "9"),
    item("14", "Avocado with prawns", "13,5"),
  ],
};

export const HOT_APPETISERS: MenuSection = {
  id: "hotappetisers",
  title: "Hot appetisers",
  lines: [
    item("20", "Edamame with sea salt", "6,5"),
    item("21", "Fried chicken rolls", "5,5"),
    item("22", "Candied duck rolls", "6,5"),
    item("23", "Garlic king prawns", "14"),
    item("24", "Fried shrimp", "13,5"),
    item("25", "Garlic mushrooms", "10,5"),
    item("26", "Mushrooms in cream", "11"),
    item("27", "Roquefort mussels", "14"),
    item("28", "Mussels in a marinara sauce", "13,5"),
    item("29", "Roman squid", "14"),
    item("30", "Fried Camembert with cranberry sauce"),
    item("31", "Grilled white cheese", "10", {
      description: "With cranberry sauce",
    }),
    item("32", "Padrón Pepper", "9"),
    item("33", "Mixed’s Chef", "18,5"),
    item("34", "Chicken gyozas", "7"),
    item("35", "Vegetable gyozas", "6,5"),
  ],
};

const PORK_RIB: MenuLine[] = [
  item("56", "Grilled Pork Rib", "18"),
  item("57", "Grilled extra Iberian secreto", "21,5"),
  item("58", "Grilled Iberian chorizo", "11"),
  item("59", "Iberian acorn-fed tenderloin", "26"),
];

const CHICKEN: MenuLine[] = [
  item("60", "Smoked chicken wings", "11"),
  item("61", "Grilled chicken breast", "13"),
];

export const FIRE_AND_FLAVOUR = {
  id: "fireflavour",
  title: "Fire & Flavour",
  blocks: [
    { kind: "label", text: "Grilled Meat Tower" },
    { kind: "list", lines: [item("40", "Grilled Meat Tower", "22,5")] },
    { kind: "label", text: "Vegetarian barbecue" },
    { kind: "list", lines: [item("41", "Grilled vegetables", "12")] },
    { kind: "label", text: "Lamb" },
    {
      kind: "list",
      lines: [
        item("42", "Grilled tomahawk lamb", "28,5"),
        item("43", "Shoulder of ”Genghis Khan”", "49,5", {
          note: "(Veal, 2 pax, Top #1)",
        }),
      ],
    },
    { kind: "label", text: "Veal" },
    {
      kind: "list",
      lines: [
        item("44", "Grilled rib", "18"),
        item("45", "Grilled ribeye steak", "19,5"),
        item("46", "Ribeye steak with mushroom sauce", "22"),
        item("47", "Ribeye with pepper sauce", "22"),
        item("48", "Ribeye steak with Roquefort sauce", "23"),
        item("49", "Grilled tenderloin steak", "29"),
        item("50", "Tenderloin steak with mushroom sauce", "31,5"),
        item("51", "Tenderloin steak with pepper sauce", "31,5"),
        item("52", "Tenderloin steak with Roquefort sauce", "32,5"),
      ],
    },
    { kind: "label", text: "T-bone steak" },
    {
      kind: "list",
      lines: [
        item("53", "National veal", "46/kg"),
        item("54", "Selection “Rosada Real”", "60/kg"),
        item("55", "Simmental Premium", "88/kg", {
          note: "(Recommended for 2 people | Prices per Kg, choose weight from 1 Kg)",
        }),
        plain("Grilled Pork Rib"),
        ...PORK_RIB,
        plain("Chicken"),
        ...CHICKEN,
      ],
    },
    {
      kind: "note",
      text: "Recommended for 2 people | Prices per Kg, choose weight from 1 Kg",
    },
    { kind: "label", text: "Grilled Pork Rib" },
    { kind: "list", lines: PORK_RIB },
    { kind: "label", text: "Chicken" },
    { kind: "list", lines: CHICKEN },
  ] satisfies FireBlock[],
};

export const SKEWERS: MenuSection = {
  id: "skewers",
  title: "Skewers",
  lines: [
    item("70", "Grilled skewers of entrecote (2 pcs)", "17"),
    item("71", "Grilled sea skewers (2 pcs)", "18"),
    item("72", "Mixed selection with chicken and entrecote (2 pcs)"),
  ],
};

export const SEAFOOD: MenuSection = {
  id: "seafoodspecialties",
  title: "Seafood specialties",
  lines: [
    item("80", "Grilled choco", "21,5"),
    item("81", "Grilled prawns", "23"),
    item("82", "Sea bass fillet", "21"),
    item("83", "Dorada fillet", "20"),
    item("84", "Salmon Filet", "24,5"),
    item("85", "Tuna steak", "25"),
    item("86", "Charcoal-grilled octopus", "23,5"),
    item("87", "Grilled scallops", "21"),
    item("88", "Seafood of the Day", "AM"),
    item("89", "Fish of the Day", "AM"),
  ],
};

export const SIDE_DISHES: MenuSection = {
  id: "sidedishes",
  title: "Side dishes",
  lines: [
    item("100", "French fries", "3,5"),
    item("101", "Deluxe gajo potatoes", "6"),
    item("102", "Crinkle-cut potatoes with mojo sauces", "6"),
    item("103", "White rice", "3"),
    item("104", "Sautéed mixed vegetables", "6"),
  ],
};

export const SAUCES: MenuSection = {
  id: "exquisitesauces",
  title: "Exquisite Sauces",
  lines: [
    item("110", "Chimichurri sauce", "3"),
    item("111", "Mint sauce", "3"),
    item("112", "Barbeque sauce", "3"),
    item("113", "Mushroom sauce", "4"),
    item("114", "Green pepper sauce", "4"),
    item("115", "Bearnaise sauce", "4"),
    item("116", "Roquefort Sauce", "5"),
  ],
};

export const CHILDRENS_MENU: MenuSection = {
  id: "childrensmenu",
  title: "Children’s menu",
  lines: [
    item("120", "Chicken nuggets", "7,5"),
    item("121", "Fish fingers", "7,5"),
    item("122", "Sausage with egg", "7,5"),
    item("123", "Steak with French fries", "9,5"),
  ],
};

/** Two-column rows in source order; `null` is an empty column. */
export const MENU_ROWS: [MenuSection, MenuSection | null][] = [
  [SOUPS, SALAD],
  [COLD_DELIGHTS, HOT_APPETISERS],
];

export const MENU_ROWS_AFTER_FIRE: [MenuSection, MenuSection | null][] = [
  [SKEWERS, SEAFOOD],
  [SIDE_DISHES, SAUCES],
  [CHILDRENS_MENU, null],
];
