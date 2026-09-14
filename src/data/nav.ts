export type NavItem = {
  /** Translation key under the `nav` namespace. */
  labelKey: "home" | "services" | "whyElq" | "process" | "faq" | "contact";
  /** In-page anchor id (sections render with a matching `id`). */
  href: string;
};

export const navItems: NavItem[] = [
  { labelKey: "home", href: "#home" },
  { labelKey: "services", href: "#services" },
  { labelKey: "whyElq", href: "#why-elq" },
  { labelKey: "process", href: "#process" },
  { labelKey: "faq", href: "#faq" },
  { labelKey: "contact", href: "#contact" },
];
