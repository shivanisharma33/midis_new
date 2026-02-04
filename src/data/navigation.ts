/**
 * Navigation menu items
 */

export interface NavItem {
  label: string;
  to: string;
}

export const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Service", to: "/services2" },
  { label: "Shop", to: "/shop" },
  { label: "Contact", to: "/contact" },
];
