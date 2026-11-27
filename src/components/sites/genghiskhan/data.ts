export const SOURCE = "https://genghiskhangrilltenerife.com";
/** Set when the site is served from a sub-path (GitHub Pages project site). */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const ASSETS = `${BASE_PATH}/sites/genghiskhan`;
/** Public address of the site (no trailing slash). Set NEXT_PUBLIC_SITE_URL when a custom domain is used. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? `https://retuertographic.github.io${BASE_PATH}`).replace(/\/$/, "");

export const BOOKING_WIDGET_URL =
  "https://reservation.dish.co/widget/hydra-fa44740e-87ce-4424-9090-8615f9788f9c";

/** Navigation entries: `key` names the label in the dictionaries (common.nav). Paths are language-neutral. */
export const NAV_LINKS = [
  { key: "home", href: "/" },
  { key: "menu", href: "/menu/" },
  { key: "bookings", href: "/bookings/" },
  { key: "lambShoulder", href: "/lamb-shoulder/" },
  { key: "about", href: "/about/" },
  { key: "awards", href: "/awards/" },
  { key: "contact", href: "/contact/" },
] as const;

export const QUICK_LINKS = [
  { key: "home", href: "/" },
  { key: "bookings", href: "/bookings/" },
  { key: "menu", href: "/menu/" },
  { key: "about", href: "/about/" },
  { key: "tc", href: "/tc/" },
  { key: "contact", href: "/contact/" },
] as const;

export const SOCIAL = {
  googleReviews: "https://maps.app.goo.gl/RC16CyGnFtKHBpEMA",
  instagram: "https://www.instagram.com/genghiskhan.grill/",
  facebook: "https://www.facebook.com/genghiskhangrill",
  maps: "https://maps.app.goo.gl/RC16CyGnFtKHBpEMA",
  whatsapp: "https://api.whatsapp.com/send/?phone=34694462568&text&type=phone_number&app_absent=0",
  tripadvisor:
    "https://www.tripadvisor.com/Restaurant_Review-g796999-d24156227-Reviews-Genghis_Khan_Grill-La_Caleta_Costa_Adeje_Adeje_Tenerife_Canary_Islands.html",
};

export type GalleryImage = { src: string; width: number; height: number };

const img = (name: string, width: number, height: number): GalleryImage => ({
  src: `${ASSETS}/images/${name}`,
  width,
  height,
});

/** Each group is one Elementor gallery widget: `columns` images per row. */
export const INNOVATION_GALLERIES: { columns: 1 | 2; images: GalleryImage[] }[] = [
  { columns: 2, images: [img("Untitled-2.jpg", 768, 512), img("Untitled-2-1.jpg", 768, 512)] },
  { columns: 1, images: [img("Untitled-3-1.jpg", 959, 1200)] },
];

export const EXPERIENCE_GALLERIES: { columns: 1 | 2; images: GalleryImage[] }[] = [
  { columns: 2, images: [img("Untitled-2-2.jpg", 768, 512), img("Untitled-2-3.jpg", 768, 512)] },
  { columns: 1, images: [img("Untitled-3-2.jpg", 959, 539)] },
  { columns: 2, images: [img("Untitled-2-4.jpg", 768, 512), img("Untitled-2-5.jpg", 768, 512)] },
  { columns: 1, images: [img("Untitled-3-3.jpg", 959, 539)] },
];

/** Image of each feature card; the caption is common.features[i] in the dictionaries. */
export const FEATURE_IMAGES = [
  `${ASSETS}/images/Untitled-5.jpg`,
  `${ASSETS}/images/Untitled-5-1.jpg`,
  `${ASSETS}/images/Untitled-5-2.jpg`,
];

/** Google reviews, quoted as written by the guests (not translated). `date` is ISO, shown in the page language. */
export const REVIEWS = [
  {
    name: "Blurry Ohm",
    date: "2022-11-18",
    avatar: `${ASSETS}/reviews/avatar-blurry-ohm.png`,
    text: "The place serves a good selection of meat, cooked as you wish! There is a service were you can cook your meat as you like, directly on the table, ????amazing right? I truly recommend this place! Nice staff and good prices!",
  },
  {
    name: "Eibhlin Lehane",
    date: "2023-08-18",
    avatar: `${ASSETS}/reviews/avatar-eibhlin-lehane.png`,
    text: "Best meal of our holiday , kids absolutely loved cooking their own steaks.  Service from Yin and Ivan was  great",
  },
  {
    name: "Steve Jain",
    date: "2023-06-18",
    avatar: `${ASSETS}/reviews/avatar-steve-jain.png`,
    text: "Wonderful experience, views of the mountains.  Entrecoute and sirloin were exceptional.  Kid-friendliness: Big space, well behaved kids are no problem",
  },
];

export const INSTAGRAM_POSTS = [
  {
    id: "883299907",
    href: "https://www.instagram.com/reel/DfJ5Dr4iSlD/",
    caption: "🎃👻 A feast so good, it’s scary! This Halloween, the fire is on.",
    likes: 2,
    comments: 0,
  },
  {
    id: "875432010",
    href: "https://www.instagram.com/reel/DfHe1EklRmx/",
    caption: "⏰ Always ready, always at your service. ㅤ No matter when you visit, at Genghis Khan Grill you`ll find our team ready to welcome you.",
    likes: 2,
    comments: 0,
  },
  {
    id: "876480914",
    href: "https://www.instagram.com/reel/DfCVul5kkBy/",
    caption: "😊 A warm welcome makes every meal taste even better.",
    likes: 1,
    comments: 0,
  },
  {
    id: "867376843",
    href: "https://www.instagram.com/reel/DfApAxVlSUb/",
    caption: "✨ **Exceptional dishes begin with exceptional ingredients.**",
    likes: 2,
    comments: 0,
  },
  {
    id: "850007889",
    href: "https://www.instagram.com/reel/Dely6G8lIcM/",
    caption: "🌙 It`s Saturday ㅤ Saturdays are made for letting go of the clock.",
    likes: 4,
    comments: 0,
  },
  {
    id: "844758092",
    href: "https://www.instagram.com/reel/DeZxgouDfWF/",
    caption: "🔥 Start the week with good food and even better company!",
    likes: 3,
    comments: 0,
  },
  {
    id: "825350307",
    href: "https://www.instagram.com/reel/Dd95HyEDef7/",
    caption: "🍸 Good friends + Great food + A stunning terrace = The perfect plan!",
    likes: 0,
    comments: 0,
  },
];
