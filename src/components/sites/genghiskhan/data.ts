export const SOURCE = "https://genghiskhangrilltenerife.com";
export const ASSETS = "/sites/genghiskhan";

export const BOOKING_WIDGET_URL =
  "https://reservation.dish.co/widget/hydra-fa44740e-87ce-4424-9090-8615f9788f9c";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Menu", href: `${SOURCE}/menu/` },
  { label: "Bookings", href: `${SOURCE}/bookings/` },
  { label: "Lamb Shoulder", href: `${SOURCE}/lamb-shoulder/` },
  { label: "About", href: `${SOURCE}/about/` },
  { label: "Awards", href: `${SOURCE}/awards/` },
  { label: "Contact", href: `${SOURCE}/contact/` },
];

export const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Bookings", href: `${SOURCE}/bookings/` },
  { label: "Menu", href: `${SOURCE}/menu/` },
  { label: "Gift Card", href: `${SOURCE}/giftcard/` },
  { label: "About", href: `${SOURCE}/about/` },
  { label: "T&C", href: `${SOURCE}/tc/` },
  { label: "Careers", href: `${SOURCE}/waiter-waitress-job-in-tenerife-south-november/` },
  { label: "Contact", href: `${SOURCE}/contact/` },
];

export const SOCIAL = {
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

export const FEATURES = [
  {
    image: `${ASSETS}/images/Untitled-5.jpg`,
    text: "Experience the sensation of reaching a unique destination as you are warmly greeted into our grill restaurant.",
  },
  {
    image: `${ASSETS}/images/Untitled-5-1.jpg`,
    text: "Savor our luxurious range of top-tier meats, meticulously dry-aged by our Chef",
  },
  {
    image: `${ASSETS}/images/Untitled-5-2.jpg`,
    text: "Indulge in an unforgettable dining experience marked by superior quality and exceptional service that will linger in your memories long after your meal is over.",
  },
];

export const STEPS = [
  "Choose the number of guests that will take part of the experience.",
  "Book your table and get ready for an exceptional culinary delight.",
  "Allow our experienced team to lead you on a remarkable sensory adventure.",
];

export const REVIEWS = [
  {
    name: "Blurry Ohm",
    date: "November 18, 2022",
    avatar: `${ASSETS}/reviews/avatar-blurry-ohm.png`,
    text: "The place serves a good selection of meat, cooked as you wish! There is a service were you can cook your meat as you like, directly on the table, ????amazing right? I truly recommend this place! Nice staff and good prices!",
  },
  {
    name: "Eibhlin Lehane",
    date: "August 18, 2023",
    avatar: `${ASSETS}/reviews/avatar-eibhlin-lehane.png`,
    text: "Best meal of our holiday , kids absolutely loved cooking their own steaks.  Service from Yin and Ivan was  great",
  },
  {
    name: "Steve Jain",
    date: "June 18, 2023",
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
