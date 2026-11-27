/**
 * English texts: the reference dictionary. Every other language file has the same shape (type `Dictionary`).
 *
 * Inline markup understood by <Rich>: **bold** and [label](href). An href starting with "/" is a page of this
 * site and is localised automatically; mailto:, tel: and https: links are kept as they are.
 */
export const en = {
  meta: {
    siteName: "Genghis Khan, Innovative Grill",
    description:
      "Premium grill in La Caleta, Costa Adeje (Tenerife). Cook prime meats and seafood at your own tabletop grill.",
    pages: {
      home: { title: "Genghis Khan, Innovative Grill", description: "Premium grill in La Caleta, Costa Adeje (Tenerife). Cook prime meats and seafood at your own tabletop grill." },
      menu: { title: "Menu", description: "Our full menu with prices: soups, starters, salads, grilled meats, skewers, T-bone, seafood, sides, sauces and kids' menu." },
      bookings: { title: "Bookings", description: "Book your table at Genghis Khan, Innovative Grill in La Caleta, Tenerife." },
      lambShoulder: { title: "Lamb Shoulder", description: "Our signature Charcoal Grilled Lamb Shoulder, prepared in the authentic Mongolian style." },
      about: { title: "About", description: "The story of cooking with fire and charcoal that inspires Genghis Khan, Innovative Grill." },
      awards: { title: "Awards", description: "Genghis Khan Grill has earned the TripAdvisor Travellers' Choice Award 2025." },
      contact: { title: "Contact", description: "Address, opening hours, phones, email, map and frequently asked questions." },
      tc: { title: "Terms and Conditions", description: "Terms and conditions of our discount coupons and gift cards." },
      notFound: { title: "Page not found", description: "The page you were looking for doesn't exist." },
    },
  },

  /** Texts used on every page (header, footer, buttons). Sent to the browser for interactive parts. */
  common: {
    nav: {
      home: "Home",
      menu: "Menu",
      bookings: "Bookings",
      lambShoulder: "Lamb Shoulder",
      about: "About",
      awards: "Awards",
      contact: "Contact",
      tc: "T&C",
    },
    header: {
      tagline: "Genghis Khan, Innovative Grill",
      hours: "Mon-Sun / 13:30 - 23:00",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      language: "Language",
      logoAlt: "Genghis Khan Grill logo",
      mapLabel: "Location on Google Maps",
    },
    footer: {
      visitUs: "VISIT US",
      address: "ADDRESS",
      addressText: "Centro Comercial San Sebastián, Calle la Enramada, Local 21, 38679 La Caleta, Santa Cruz de Tenerife",
      openingTimes: "OPENING TIMES",
      openingTimesText: "Mon - Sun / 13:30 - 23:00",
      sharePage: "SHARE THIS PAGE",
      shareOn: "Share on",
      quickLinks: "QUICK LINKS",
      contact: "CONTACT",
      telephones: "TELEPHONES",
      email: "EMAIL",
      rights: "All rights reserved.",
      developedBy: "Developed by",
    },
    bookNow: "Book Now",
    bookingDialog: "Book a table",
    bookingFrameTitle: "Genghis Khan Grill reservations",
    close: "Close",
    readMore: "Read More",
    collapse: "Collapse",
    openImage: "Open image",
    imageGallery: "Image gallery",
    previous: "Previous",
    next: "Next",
    instagram: {
      connect: "Connect with us",
      title: "Instagram",
      loadMore: "Load More",
      follow: "Follow on Instagram",
    },
    reviews: {
      seeAll: "See all reviews on Google",
      readOnGoogle: "Read this review on Google",
      stars: "5 stars",
    },
    location: {
      title: "Located in the stylish fishing village of La Caleta, you will find Genghis Khan, Innovative Grill.",
      phoneTitle: "Reserve by Phone",
      phoneIntro: "Please reach us at",
      phoneOr: "or",
      emailTitle: "Reserve by Email",
      emailIntro: "You can also contact us via email at",
      groupTitle: "Event & Group Booking",
      groupText:
        "If you wish to make a booking for a larger group, please get in touch with us directly at [bookings@genghiskhangrilltenerife.com](mailto:bookings@genghiskhangrilltenerife.com). Our reservations team will be delighted to help you with your request.",
      hoursTitle: "Opening Times:",
      days: "Monday to Sunday",
      hours: "13:30 - 23:00",
      placeTitle: "Location",
      place: "Centro Comercial San Sebastián, C. la Enramada, Local 21, 38679 La Caleta, Santa Cruz de Tenerife",
    },
    award: {
      year: "2025",
      title: "Travellers' Choice Award",
      subtitle: "Best of the Best · Restaurants · 2025",
      badgeAlt: "TripAdvisor Travellers' Choice 2025",
      text: "Recognised among the world's finest dining experiences, Genghis Khan Grill has earned the TripAdvisor Travellers' Choice Award 2025 — a tribute to every guest who shared their moment with us.",
    },
    features: [
      "Experience the sensation of reaching a unique destination as you are warmly greeted into our grill restaurant.",
      "Savor our luxurious range of top-tier meats, meticulously dry-aged by our Chef",
      "Indulge in an unforgettable dining experience marked by superior quality and exceptional service that will linger in your memories long after your meal is over.",
    ],
    gourmet: {
      before: "We firmly believe in offering nothing less than a world-class",
      highlight: "gourmet",
      after: "experience for your events, which is why we consistently invest in top-notch services.",
    },
  },

  home: {
    heroScript: "Welcome to the",
    heroLine1: "innovative",
    heroLine2: "grill experience",
    premium: "Premium Grill in La Caleta",
    innovation: { line1: "Innovation", script: "Meets", line2: "tradition" },
    intro: "Imagine a restaurant where **innovation** and respect for **ancestral** techniques combine to create a unique gastronomic experience.",
    story: [
      "In this place, the story of the discovery of **cooking with fire** is told in an original and captivating way. A prominent part of this story is how the use of charcoal in the kitchen becomes a key element to enhance the **flavors of the dishes.**",
      "The restaurant features tables inspired by the time of the great conqueror Genghis Khan, **a key feature of the culinary experience** that you can enjoy while cooking a wide variety of fresh meats such as beef, lamb, pork, chicken, and seafood to your preferred doneness.",
      "A place in Costa Adeje designed for those who seek to **delight not only in food but also in unique stories and moments.**",
      "With its innovative approach and return to origins with charcoal cooking, it is able to transport you to another era while enjoying the most **exquisite flavors and textures.**",
    ],
    lambTeaser: "As you anticipate your upcoming meal, discover the secrets behind the accolades of our Shoulder of “Genghis Khan”.",
    discover: "Discover",
    time: { script: "Time", line: "to experience" },
    steps: [
      "Choose the number of guests that will take part of the experience.",
      "Book your table and get ready for an exceptional culinary delight.",
      "Allow our experienced team to lead you on a remarkable sensory adventure.",
    ],
  },

  bookings: {
    script: "Take part of the experience",
    line1: "Place your",
    line2: "Booking",
  },

  lambShoulder: {
    script: "We present: Our menu star",
    line1: "Charcoal grilled",
    line2: "Lamb shoulder",
    title: { line1: "in the heart", script: "of our kitchen", line2: "a spectacle" },
    story:
      "Unfolds as we proudly present the masterpiece of our menu: the **Charcoal Grilled Lamb Shoulder**, prepared in the authentic Mongolian style. This exceptional dish begins its journey in the verdant landscapes of **New Zealand**, where the finest lamb shoulders are handpicked and sent to our exclusive Spanish establishment. Before the lamb shoulder meets the scorching heat of charcoal, it is bathed in an exclusive mixture of herbs and spices – a closely guarded secret honed over years. This marinade seeps into the very essence of the lamb, casting a spell of irresistible flavors that dance on your tastebuds. The performance doesn’t end there. Each succulent piece, tender and adorned with a smoky crust, is treated to our unique in-house ageing techniques. Borrowing from traditional Mongolian practices, these techniques serve to enhance and intensify the lamb shoulder’s flavors with each passing moment. Thus, in a world teeming with lamb shoulder dishes, our **Charcoal Grilled Lamb Shoulder** steals the limelight. It’s more than just a dish; it’s an unforgettable culinary voyage that can only be embarked in **Spain** within the walls of our restaurant. We eagerly await to guide you on this gastronomic odyssey. So it is, the **Charcoal Grilled Lamb Shoulder** takes center stage in our menu, promising not just a meal, but an unforgettable gastronomic adventure that we are thrilled to share with you.",
    menuLinks: {
      hotStarters: "Hot appetisers",
      skewers: "Skewers",
      fireFlavour: "Fire & Flavour",
      seafood: "Seafood specialties",
    },
  },

  about: {
    script: "Discover",
    line1: "Flavours of",
    line2: "unique moments",
    title: { line1: "Innovation", script: "Meets", line2: "tradition" },
    story: [
      "In this place, the story of the discovery of **cooking with fire** is told in an original and captivating way. A prominent part of this story is how the use of charcoal in the kitchen becomes a key element to enhance the **flavors of the dishes.**",
      "The restaurant features tables inspired by the time of the great conqueror Genghis Khan, **a key feature of the culinary experience** that you can enjoy while cooking a wide variety of fresh meats such as beef, lamb, pork, chicken, and seafood to your preferred doneness.",
      "A place in Costa Adeje designed for those who seek to **delight not only in food but also in unique stories and moments.** With its innovative approach and return to origins with charcoal cooking, it is able to transport you to another era while enjoying the most **exquisite flavors and textures.**",
    ],
  },

  awards: {
    eyebrow: "Recognition & Excellence",
    title: { line1: "Award", highlight: "Winning", line2: "Excellence" },
    stats: [
      { value: "Top 10%", label: "Globally Ranked" },
      { value: "5 ★", label: "Guest Rating" },
      { value: "2025", label: "Best of the Best" },
    ],
    cta: "Come taste what the world is talking about",
    reserve: "Reserve Your Table",
  },

  contact: {
    findUs: "Find Us",
    addressLine1: "Centro Comercial San Sebastián, Calle la Enramada, Local 21",
    addressLine2: "38679 La Caleta, Santa Cruz de Tenerife",
    hours: "Monday to Sunday · 13:30 – 23:00",
    contactUs: "Contact Us",
    mapTitle: "Genghis Khan Grill location map",
    openPhoto: "Open photo",
    followInstagram: "Follow On Instagram",
    faqs: [
      {
        q: "1 – How can I book a table?",
        a: "Use the Book Now button to reserve online, call us at [922 69 27 98](tel:0034922692798) or [688 15 11 37](tel:0034688151137), or write to [bookings@genghiskhangrilltenerife.com](mailto:bookings@genghiskhangrilltenerife.com).",
      },
      {
        q: "2 – Can I book for a large group or an event?",
        a: "Yes. For larger groups please get in touch with us directly at [bookings@genghiskhangrilltenerife.com](mailto:bookings@genghiskhangrilltenerife.com). Our reservations team will be delighted to help you with your request.",
      },
      {
        q: "3 – What are your opening hours?",
        a: "We are open Monday to Sunday, from 13:30 to 23:00.",
      },
      {
        q: "4 – How does the tabletop grill work?",
        a: "Our tables, inspired by the time of the great conqueror Genghis Khan, have a charcoal grill built in, so you can cook a wide variety of fresh meats such as beef, lamb, pork, chicken, and seafood to your preferred doneness, right at your table.",
      },
      {
        q: "5 – Do you have allergen information?",
        a: "Yes. In compliance with Regulation (EU) No. 1169/2011 on the provision of food information to consumers, we have information regarding the presence of allergens in our products available for consultation. Please ask our staff.",
      },
    ],
  },

  tc: {
    script: "Dining experience",
    line1: "Terms &",
    line2: "Conditions",
    title: "Innovative Grill",
    intro:
      "At Genghis Khan, Innovative Grill, we’re excited to offer you the chance to enhance your dining experience with our exclusive discount coupons! Here are the details you need to know:",
    terms: [
      "Each ticket at Genghis Khan, Innovative Grill allows for only one discount coupon to be applied.",
      "Our coupons are non-refundable and must be used in a single transaction, with no cash redemption possible.",
      "Should the coupon not specify an expiry date, it remains valid for up to six months from the date of issue.",
      "The discount provided by the coupon is deducted from the final sale price at Genghis Khan, Innovative Grill.",
      "In cases where the coupon’s value falls short of the total cost (including IGIC), you are required to pay the remaining balance.",
      "Where your Genghis Khan, Innovative Grill order total is less than the coupon’s worth, please note that the remaining value is non-refundable and cannot be applied to future orders. Any unused portion of the coupon’s value is forfeited.",
      "A coupon that remains unused after its expiry date will no longer be accepted.",
      "Our coupons cannot be combined with other Genghis Khan, Innovative Grill promotions or offers.",
      "For any inquiries, our Customer Service team is ready to assist you at [bookings@genghiskhangrilltenerife.com](mailto:bookings@genghiskhangrilltenerife.com).",
      "Genghis Khan, Innovative Grill reserves the right to discontinue a coupon’s validity at any time.",
      "The selling, trading, or unauthorized acquisition of Genghis Khan, Innovative Grill coupons is strictly prohibited. This also extends to any coupons or promotional codes obtained from third parties.",
      "For full details and restrictions on our offers, please refer to the specific conditions of each coupon and visit our website at [www.genghiskhangrilltenerife.com/tc](/tc/).",
      "Remember to make your reservation in advance, at least one calendar day prior, to redeem your coupon at Genghis Khan, Innovative Grill.",
    ],
    outro:
      "We look forward to welcoming you and ensuring you have a memorable dining experience at Genghis Khan, Innovative Grill!",
    form: {
      name: "Name*",
      phone: "Phone*",
      email: "Email*",
      message: "Why would you like to get one?",
      submit: "I want a gift card",
      subject: "Gift card request",
      thanks: "Thank you! Your email app has been opened so you can send your request to",
    },
  },

  notFound: {
    text: "We're sorry, but the page you were looking for doesn't exist.",
  },
};

/** Same keys as English, any string values. */
export type Dictionary = typeof en;
export type CommonDict = Dictionary["common"];
