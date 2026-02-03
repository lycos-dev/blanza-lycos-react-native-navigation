import React, { createContext, useContext, useState, useCallback } from "react";
import { Colors } from "../types";

// ─── colour maps ────────────────────────────────────────────────────────────

export const LIGHT: Colors = {
  bg: "#F2F3F5",
  cardBg: "#FFFFFF",
  cardBorder: "#E6E8EC",
  text: "#1C1E24",
  textSub: "#7A7F8E",
  textTert: "#A3A7B2",
  accent: "#1C1E24",
  accentPress: "#3D4048",
  accentTxt: "#FFFFFF",
  price: "#1C1E24",
  badge: "#1C1E24",
  badgeTxt: "#FFFFFF",
  headerBg: "#FFFFFF",
  headerBorder: "#EAECEF",
  iconCircle: "#F0F1F3",
  divider: "#EAECEF",
  trackOff: "#CDD0D5",
  trackOn: "#1C1E24",
  thumbBg: "#FFFFFF",
};

export const DARK: Colors = {
  bg: "#131416",
  cardBg: "#1B1D22",
  cardBorder: "#272A30",
  text: "#F0F1F4",
  textSub: "#8D929F",
  textTert: "#606570",
  accent: "#EAEBEE",
  accentPress: "#C2C3C6",
  accentTxt: "#1C1E24",
  price: "#F0F1F4",
  badge: "#EAEBEE",
  badgeTxt: "#1C1E24",
  headerBg: "#181A1F",
  headerBorder: "#272A30",
  iconCircle: "#232628",
  divider: "#272A30",
  trackOff: "#353739",
  trackOn: "#EAEBEE",
  thumbBg: "#1C1E24",
};

// ─── context ────────────────────────────────────────────────────────────────

export interface ThemeCtxType {
  c: Colors;
  dark: boolean;
  toggle: () => void;
}

const ThemeCtx = createContext<ThemeCtxType>({
  c: LIGHT,
  dark: false,
  toggle: () => {},
});

// ─── provider ───────────────────────────────────────────────────────────────

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [dark, setDark] = useState(false);
  const c = dark ? DARK : LIGHT;
  const toggle = useCallback(() => setDark((d: boolean) => !d), []);

  return (
    <ThemeCtx.Provider value={{ c, dark, toggle }}>
      {children}
    </ThemeCtx.Provider>
  );
};

// ─── hook ───────────────────────────────────────────────────────────────────

export const useTh = () => useContext(ThemeCtx);
