import React from "react";
import { View } from "react-native";
import { ThemeProvider, useTh } from "./src/context/ThemeContext";
import { NavProvider, useNav } from "./src/context/NavigationContext";
import { CartProvider } from "./src/context/CartContext";
import { Screen } from "./src/types";

import HomeScreen from "./src/screens/HomeScreen";
import CartScreen from "./src/screens/CartScreen";
import CheckoutScreen from "./src/screens/CheckoutScreen";

// ─── inner shell (needs theme already available for the bg colour) ──────────

const AppShell: React.FC = () => {
  const { c } = useTh();
  const { screen } = useNav();

  const renderScreen = () => {
    switch (screen) {
      case Screen.Home:     return <HomeScreen />;
      case Screen.Cart:     return <CartScreen />;
      case Screen.Checkout: return <CheckoutScreen />;
    }
  };

  return <View style={[{ flex: 1 }, { backgroundColor: c.bg }]}>{renderScreen()}</View>;
};

// ─── root export ─────────────────────────────────────────────────────────────

export default function App() {
  return (
    <ThemeProvider>
      <NavProvider>
        <CartProvider>
          <AppShell />
        </CartProvider>
      </NavProvider>
    </ThemeProvider>
  );
}
