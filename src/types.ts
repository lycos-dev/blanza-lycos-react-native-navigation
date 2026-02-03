// ─────────────────────────────────────────────
// SHARED TYPES  —  imported across the project
// ─────────────────────────────────────────────

export enum Screen {
  Home,
  Cart,
  Checkout,
}

export interface Product {
  id: number;
  name: string;
  price: number;
  category?: string; // optional category
  icon: string; // two-letter abbreviation shown in avatar
  image?: any; // optional image imported via require()
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Colors {
  bg: string;
  cardBg: string;
  cardBorder: string;
  text: string;
  textSub: string;
  textTert: string;
  accent: string;
  accentPress: string;
  accentTxt: string;
  price: string;
  badge: string;
  badgeTxt: string;
  headerBg: string;
  headerBorder: string;
  iconCircle: string;
  divider: string;
  trackOff: string;
  trackOn: string;
  thumbBg: string;
  successBg: string;
  successTxt: string;
}
