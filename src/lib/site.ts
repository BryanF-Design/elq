/**
 * Single source of truth for real business facts. Only confirmed data lives
 * here — never invent an address, email, socials, certifications, or years
 * in business. Update this file when that information becomes available.
 */
export const site = {
  name: "ELQ Cleaning LLC",
  shortName: "ELQ Cleaning",
  tagline: "House Cleaning Service",
  phoneDisplay: "(480) 546-1725",
  phoneHref: "tel:+14805461725",
  serviceType: "House Cleaning Service",
  // Update this once the production domain is finalized.
  url: "https://elqcleaning.com",
} as const;
