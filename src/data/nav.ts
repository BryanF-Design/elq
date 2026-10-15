export type NavItem = {
  /** Translation key under the `nav` namespace. */
  labelKey: "home" | "about" | "services" | "process" | "plans" | "faq" | "contact";
  /** In-page anchor id (sections render with a matching `id`). */
  href: string;
};

export const navItems: NavItem[] = [
  { labelKey: "home", href: "#home" },
  { labelKey: "about", href: "#about" },
  { labelKey: "services", href: "#services" },
  { labelKey: "process", href: "#process" },
  { labelKey: "plans", href: "#plans" },
  { labelKey: "faq", href: "#faq" },
];
