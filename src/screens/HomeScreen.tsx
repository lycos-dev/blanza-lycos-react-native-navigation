import React from "react";
import { View, Text, Pressable, FlatList } from "react-native";
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
      {/* hero banner */}
      <View
        style={[
          S.hero,
          { backgroundColor: c.cardBg, borderColor: c.cardBorder },
        ]}
      >
        <Text style={[S.heroTitle, { color: c.text }]}>
          Gear up.
        </Text>
        <Text style={[S.heroSub, { color: c.textSub }]}>
          Kung wala kang equipment, wala kang workout.
        </Text>
      </View>

      {/* section heading */}
      <Text style={[S.sectionLbl, { color: c.textTert }]}>ALL PRODUCTS</Text>
    </>
  );

  const renderProduct = ({ item }: { item: Product }) => (
    <ProductCard product={item} />
  );

  const renderFooter = () => (
    /* spacer so last card isn't hidden behind sticky bar */
    <View style={{ height: 100 }} />
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
        ListFooterComponent={renderFooter}
        style={S.scroll}
        contentContainerStyle={S.scrollPad}
        showsVerticalScrollIndicator={false}
      />

      {/* ── sticky "Go to Cart" bar ── */}
      <View
        style={[
          S.stickyBar,
          { backgroundColor: c.headerBg, borderTopColor: c.headerBorder },
        ]}
      >
        <Pressable
          onPress={() => go(Screen.Cart)}
          style={({ pressed }) => [
            S.pillBtn,
            { backgroundColor: pressed ? c.accentPress : c.accent },
          ]}
        >
          <View style={S.pillRow}>
            <CartIcon color={c.accentTxt} size={18} />
            <Text style={[S.pillTxt, { color: c.accentTxt }]}>
              Go to Cart{qty > 0 ? `  ·  ${qty}` : ""}
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default HomeScreen;