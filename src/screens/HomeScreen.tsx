import React from "react";
import { View, Text, Pressable, FlatList, ImageBackground } from "react-native";
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

  const renderHeader = () => (
    <>
      {/* hero banner with background image */}
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&h=500&fit=crop",
        }}
        style={[
          S.hero,
          { 
            borderColor: c.cardBorder,
            overflow: "hidden",
            position: "relative",
          },
        ]}
        imageStyle={{
          borderRadius: 18,
          opacity: 0.6,
        }}
      >
        {/* Dark overlay to ensure text visibility */}
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#000000",
            opacity: 0.4,
            zIndex: 2,
            borderRadius: 18,
          }}
        />

        {/* Decorative accent circles */}
        <View
          style={{
            position: "absolute",
            width: 200,
            height: 200,
            borderRadius: 100,
            backgroundColor: c.accent,
            opacity: 0.1,
            top: -60,
            right: -40,
            zIndex: 1,
          }}
        />
        <View
          style={{
            position: "absolute",
            width: 140,
            height: 140,
            borderRadius: 70,
            backgroundColor: c.accent,
            opacity: 0.06,
            bottom: -50,
            left: -30,
            zIndex: 1,
          }}
        />

        {/* "Black Edition" Sticker - WHITE BACKGROUND */}
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
              backgroundColor: "#ffffff",
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
                color: "#000000",
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
                color: "#ffffff",
                textAlign: "center",
                fontSize: 32,
                marginBottom: 4,
                textShadowColor: "rgba(0, 0, 0, 0.5)",
                textShadowOffset: { width: 0, height: 2 },
                textShadowRadius: 4,
              },
            ]}
          >
            Transform
          </Text>
          <Text
            style={[
              S.heroTitle,
              {
                color: "#ffffff",
                textAlign: "center",
                fontSize: 32,
                marginBottom: 12,
                textShadowColor: "rgba(0, 0, 0, 0.5)",
                textShadowOffset: { width: 0, height: 2 },
                textShadowRadius: 4,
              },
            ]}
          >
            Your Fitness
          </Text>
          <Text
            style={[
              S.heroSub,
              {
                color: "#ffffff",
                textAlign: "center",
                fontSize: 14,
                textShadowColor: "rgba(0, 0, 0, 0.5)",
                textShadowOffset: { width: 0, height: 1 },
                textShadowRadius: 3,
              },
            ]}
          >
            Premium black-designed gym equipment for champions.
          </Text>
          <Text
            style={[
              S.heroSub,
              {
                color: "#ffffff",
                textAlign: "center",
                fontSize: 14,
                textShadowColor: "rgba(0, 0, 0, 0.5)",
                textShadowOffset: { width: 0, height: 1 },
                textShadowRadius: 3,
              },
            ]}
          >
            Build the body you've always wanted.
          </Text>
        </View>
      </ImageBackground>

      {/* section heading */}
      <Text style={[S.sectionLbl, { color: c.textTert }]}>ALL PRODUCTS</Text>
    </>
  );

  const renderProduct = ({ item }: { item: Product }) => (
    <ProductCard product={item} />
  );

  return (
    <View style={[S.screen, { backgroundColor: c.bg }]}>
      {/* top bar — title + cart icon + toggle */}
      <Header title="FitShop" cart />

      <FlatList
        data={PRODUCTS}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={S.scrollPad}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{ height: qty > 0 ? 100 : 20 }} />}
      />

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