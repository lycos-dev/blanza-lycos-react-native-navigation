import React, { createContext, useContext, useState, useCallback } from "react";
import { Screen } from "../types";

// ─── context ────────────────────────────────────────────────────────────────

export interface NavCtxType {
  screen: Screen;
  go: (s: Screen) => void;
}

const NavCtx = createContext<NavCtxType>({
  screen: Screen.Home,
  go: () => {},
});

// ─── provider ───────────────────────────────────────────────────────────────

export const NavProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [screen, setScreen] = useState<Screen>(Screen.Home);
  const go = useCallback((s: Screen) => setScreen(s), []);

  return (
    <NavCtx.Provider value={{ screen, go }}>
      {children}
    </NavCtx.Provider>
  );
};

// ─── hook ───────────────────────────────────────────────────────────────────

export const useNav = () => useContext(NavCtx);
