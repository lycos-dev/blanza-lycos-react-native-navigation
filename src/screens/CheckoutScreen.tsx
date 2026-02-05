import React, { useCallback } from "react";
import { View, Text, Pressable, ScrollView, Alert } from "react-native";
import { useTh } from "../context/ThemeContext";
import { useNav } from "../context/NavigationContext";
import { useCart } from "../context/CartContext";
import { Screen, CartItem } from "../types";
import Header from "../components/Header";
import CoRow from "../components/CoRow";
import S from "../styles/global";

const CheckoutScreen: React.FC = () => {
  const { c } = useTh();
  const { go } = useNav();
  const { items, total, clear } = useCart();

  /* ── price maths ── */
  const subtotal = total;
  const shipping = subtotal > 2000 ? 0 : 199;          // free over ₱ 2 000
  const tax      = Math.round(subtotal * 0.08);        // 8 %
  const grand    = subtotal + shipping + tax;

  /* ── checkout handler ── */
  const onCheckout = useCallback(() => {
    Alert.alert(
      "Checkout Successful",
      "Thank you for your order! Your items will arrive soon.",
      [
        {
          text: "OK",
          onPress: () => {
            clear();                // wipe the cart
            go(Screen.Home);        // navigate back to shop
          },
        },
      ]
    );
  }, [clear, go]);

  /* ── empty guard ── */
  if (items.length === 0) {
    return (
      <View style={[S.screen, { backgroundColor: c.bg }]}>
        <Header title="Checkout" back />
        <View style={S.emptyWrap}>
          <Text style={[S.emptyTitle, { color: c.text }]}>Nothing to checkout</Text>
          <Pressable
            onPress={() => go(Screen.Home)}
            style={({ pressed }) => [
              S.pillBtn,
              S.pillBtnAuto,
              { backgroundColor: pressed ? c.accentPress : c.accent },
            ]}
          >
            <Text style={[S.pillTxt, { color: c.accentTxt }]}>Back to Shop</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  /* ── main layout ── */
  return (
    <View style={[S.screen, { backgroundColor: c.bg }]}>
      <Header title="Checkout" back />

      <ScrollView style={S.scroll} contentContainerStyle={S.scrollPad} showsVerticalScrollIndicator={false}>

        {/* ── Order Summary card ── */}
        <View style={[S.coCard, { backgroundColor: c.cardBg, borderColor: c.cardBorder }]}>
          <Text style={[S.coCardTitle, { color: c.text }]}>Order Summary</Text>
          {items.map((i: CartItem) => (
            <CoRow key={i.id} item={i} />
          ))}
        </View>

        {/* ── Price Breakdown card ── */}
        <View style={[S.coCard, { backgroundColor: c.cardBg, borderColor: c.cardBorder }]}>
          <Text style={[S.coCardTitle, { color: c.text }]}>Price Breakdown</Text>

          {/* subtotal */}
          <View style={S.bRow}>
            <Text style={[S.bLbl, { color: c.textSub }]}>Subtotal</Text>
            <Text style={[S.bVal, { color: c.text }]}>₱ {(subtotal || 0).toLocaleString()}</Text>
          </View>

          {/* shipping */}
          <View style={S.bRow}>
            <Text style={[S.bLbl, { color: c.textSub }]}>Shipping</Text>
            <Text style={[S.bVal, { color: shipping === 0 ? c.successTxt : c.text }]}>
              {shipping === 0 ? "FREE" : `₱ ${shipping}`}
            </Text>
          </View>

          {/* tax */}
          <View style={S.bRow}>
            <Text style={[S.bLbl, { color: c.textSub }]}>Tax (8%)</Text>
            <Text style={[S.bVal, { color: c.text }]}>₱ {(tax || 0).toLocaleString()}</Text>
          </View>

          {/* divider */}
          <View style={[S.divLine, { borderColor: c.divider }]} />

          {/* grand total */}
          <View style={S.bRow}>
            <Text style={[S.grandLbl, { color: c.text }]}>Total</Text>
            <Text style={[S.grandVal, { color: c.price }]}>₱ {(grand || 0).toLocaleString()}</Text>
          </View>
        </View>

        {/* spacer behind sticky button */}
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* ── sticky Checkout button ── */}
      <View style={[S.stickyBar, { backgroundColor: c.headerBg, borderTopColor: c.headerBorder }]}>
        <Pressable
          onPress={onCheckout}
          style={({ pressed }) => [S.pillBtn, { backgroundColor: pressed ? c.accentPress : c.accent }]}
        >
          <Text style={[S.pillTxt, { color: c.accentTxt }]}>
            Checkout  ·  ₱ {(grand || 0).toLocaleString()}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CheckoutScreen;