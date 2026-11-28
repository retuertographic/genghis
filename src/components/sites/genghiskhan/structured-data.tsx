import { SITE_URL, SOCIAL } from "./data";
import { getDictionary, localizedPath, type Lang } from "./i18n";

/** schema.org Restaurant data for search engines (rich results: address, hours, phone, menu, bookings). */
export function RestaurantJsonLd({ lang }: { lang: Lang }) {
  const meta = getDictionary(lang).meta;
  const assets = `${SITE_URL}/sites/genghiskhan`;
  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${SITE_URL}/#restaurant`,
    name: meta.siteName,
    description: meta.description,
    url: SITE_URL + localizedPath(lang, "/"),
    image: [`${assets}/_img/og-image.jpg`, `${assets}/images/logo.png`],
    logo: `${assets}/images/logo.png`,
    telephone: "+34922692798",
    email: "bookings@genghiskhangrilltenerife.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Centro Comercial San Sebastián, Calle la Enramada, Local 21",
      addressLocality: "La Caleta, Costa Adeje",
      addressRegion: "Santa Cruz de Tenerife",
      postalCode: "38679",
      addressCountry: "ES",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "13:30",
        closes: "23:00",
      },
    ],
    servesCuisine: ["Grill", "Steakhouse", "Seafood"],
    hasMenu: SITE_URL + localizedPath(lang, "/menu/"),
    acceptsReservations: SITE_URL + localizedPath(lang, "/bookings/"),
    award: "TripAdvisor Travellers' Choice 2025",
    hasMap: SOCIAL.maps,
    sameAs: [SOCIAL.instagram, SOCIAL.facebook, SOCIAL.tripadvisor],
    inLanguage: lang,
  };
  return (
    <script
      type="application/ld+json"
      // JSON-LD must be raw JSON text; the content is built from constants above, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
