import { site } from "@/lib/site";

/**
 * Minimal LocalBusiness structured data using only confirmed business
 * facts. Do not add address, priceRange, sameAs, or aggregateRating until
 * that information is verified — inventing it would violate Schema.org's
 * and Google's structured-data guidelines.
 */
export function buildLocalBusinessJsonLd(locale: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    description,
    telephone: "+1-480-546-1725",
    url: `${site.url}/${locale}`,
    image: `${site.url}/images/og-cover.svg`,
    inLanguage: locale,
  };
}
