import React from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { useTh } from "../context/ThemeContext";
import { useNav } from "../context/NavigationContext";
import { useCart } from "../context/CartContext";
import { Screen, CartItem } from "../types";
import Header from "../components/Header";
import CartRow from "../components/CartRow";
import CartIcon from "../components/icons/CartIcon";
import S from "../styles/global";

const CartScreen: React.FC = () => {
  const { c } = useTh();
  const { go } = useNav();
  const { items, qty, total } = useCart();

  /* ── empty state ── */
  if (items.length === 0) {
    return (
      <View style={[S.screen, { backgroundColor: c.bg }]}>
        <Header title="Your Cart" back />

        <View style={S.emptyWrap}>
          {/* cart icon inside a dashed-style ring */}
          <View style={[S.emptyRing, { borderColor: c.divider }]}>
            <CartIcon color={c.textTert} size={34} />
          </View>
          <Text style={[S.emptyTitle, { color: c.text }]}>Cart is empty</Text>
          <Text style={[S.emptySub, { color: c.textTert }]}>
            Add items from the shop to get started.
          </Text>
          <Pressable
            onPress={() => go(Screen.Home)}
            style={({ pressed }) => [
              S.pillBtn,
              S.pillBtnAuto,
              { backgroundColor: pressed ? c.accentPress : c.accent },
            ]}
          >
            <Text style={[S.pillTxt, { color: c.accentTxt }]}>Browse Products</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  /* ── populated cart ── */
  return (
    <View style={[S.screen, { backgroundColor: c.bg }]}>
      <Header title="Your Cart" back />

      <ScrollView style={S.scroll} contentContainerStyle={S.scrollPad} showsVerticalScrollIndicator={false}>
        {/* item-count label */}
        <Text style={[S.sectionLbl, { color: c.textTert }]}>
          {qty} ITEM{qty !== 1 ? "S" : ""}
        </Text>

        {/* list of cart rows */}
        {items.map((i: CartItem) => (
          <CartRow key={i.id} item={i} />
        ))}

        {/* spacer behind sticky footer */}
        <View style={{ height: 108 }} />
      </ScrollView>

      {/* ── sticky footer: total + proceed ── */}
      <View style={[S.cartFooter, { backgroundColor: c.headerBg, borderTopColor: c.headerBorder }]}>
        <View style={S.totalStrip}>
          <Text style={[S.totalLbl, { color: c.textSub }]}>Total</Text>
          <Text style={[S.totalVal, { color: c.price }]}>₱ {total.toLocaleString()}</Text>
        </View>

        <Pressable
          onPress={() => go(Screen.Checkout)}
          style={({ pressed }) => [S.pillBtn, { backgroundColor: pressed ? c.accentPress : c.accent }]}
        >
          <Text style={[S.pillTxt, { color: c.accentTxt }]}>Proceed to Checkout</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CartScreen;
