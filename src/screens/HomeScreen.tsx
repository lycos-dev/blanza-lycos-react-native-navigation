import React from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { useTh } from "../context/ThemeContext";
import { useNav } from "../context/NavigationContext";
import { useCart } from "../context/CartContext";
import { Screen, Product } from "../types";
import { PRODUCTS } from "../data/products";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import CartIcon from "../components/icons/CartIcon";
import S from "../styles/global";

const HomeScreen: React.FC = () => {
  const { c } = useTh();
  const { go } = useNav();
  const { qty } = useCart();

  return (
    <View style={[S.screen, { backgroundColor: c.bg }]}>
      {/* top bar — title + cart icon + toggle */}
      <Header title="FitShop" cart />

      <ScrollView
        style={S.scroll}
        contentContainerStyle={S.scrollPad}
        showsVerticalScrollIndicator={false}
      >
        {/* hero banner with rotated "Black Edition" sticker */}
        <View
          style={[
            S.hero,
            { 
              backgroundColor: c.cardBg, 
              borderColor: c.cardBorder,
              overflow: "visible",
              position: "relative",
            },
          ]}
        >
          {/* Decorative background circles */}
          <View
            style={{
              position: "absolute",
              width: 250,
              height: 250,
              borderRadius: 125,
              backgroundColor: c.accent,
              opacity: 0.1,
              top: -80,
              right: -60,
              zIndex: 1,
            }}
          />
          <View
            style={{
              position: "absolute",
              width: 180,
              height: 180,
              borderRadius: 90,
              backgroundColor: c.accent,
              opacity: 0.06,
              bottom: -70,
              left: -50,
              zIndex: 1,
            }}
          />

          {/* Black Edition" Sticker */}
          <View
            style={{
              position: "absolute",
              top: 30,
              right: -24,
              zIndex: 15,
              transform: [{ rotate: "45deg" }],
            }}
          >
            <View
              style={{
                backgroundColor: c.accent,
                paddingHorizontal: 20,
                paddingVertical: 5,
                borderRadius: 3,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 6,
                elevation: 8,
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: "800",
                  color: c.accentTxt,
                  letterSpacing: 0.8,
                }}
              >
                BLACK EDITION
              </Text>
            </View>
          </View>

          {/* Main Content - Better centered layout */}
          <View style={{ alignItems: "center", zIndex: 10, width: "100%" }}>
            <Text
              style={[
                S.heroTitle,
                {
                  color: c.text,
                  textAlign: "center",
                  fontSize: 32,
                  marginBottom: 4,
                },
              ]}
            >
              Transform
            </Text>
            <Text
              style={[
                S.heroTitle,
                {
                  color: c.accent,
                  textAlign: "center",
                  fontSize: 32,
                  marginBottom: 12,
                },
              ]}
            >
              Your Fitness
            </Text>
            <Text
              style={[
                S.heroSub,
                {
                  color: c.textSub,
                  textAlign: "center",
                  fontSize: 14,
                },
              ]}
            >
              Premium black-designed gym equipment for champions.
            </Text>
            <Text
              style={[
                S.heroSub,
                {
                  color: c.textSub,
                  textAlign: "center",
                  fontSize: 14,
                },
              ]}
            >
              Build the body you've always wanted.
            </Text>
          </View>
        </View>

        {/* section heading */}
        <Text style={[S.sectionLbl, { color: c.textTert }]}>ALL PRODUCTS</Text>

        {/* product list */}
        {PRODUCTS.map((p: Product) => (
          <ProductCard key={p.id} product={p} />
        ))}

        {/* spacer so last card isn't hidden behind sticky bar */}
        <View style={{ height: qty > 0 ? 100 : 20 }} />
      </ScrollView>

      {/* "Go to Cart" bar (only show if items in cart) */}
      {qty > 0 && (
        <View
          style={[
            S.stickyBar,
            {
              backgroundColor: c.headerBg,
              borderTopColor: c.headerBorder,
              paddingHorizontal: 16,
              paddingVertical: 14,
            },
          ]}
        >
          <Pressable
            onPress={() => go(Screen.Cart)}
            style={({ pressed }) => [
              S.pillBtn,
              {
                backgroundColor: pressed ? c.accentPress : c.accent,
                borderRadius: 14,
                paddingVertical: 14,
              },
            ]}
          >
            <View style={S.pillRow}>
              <CartIcon color={c.accentTxt} size={18} />
              <Text style={[S.pillTxt, { color: c.accentTxt }]}>
                Go to Cart  ·  {qty}
              </Text>
            </View>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;