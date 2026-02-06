import React from "react";
import { View, Text, Pressable, FlatList, Image } from "react-native";
import { useTh } from "../context/ThemeContext";
import { useNav } from "../context/NavigationContext";
import { useCart } from "../context/CartContext";
import { Screen, CartItem } from "../types";
import Header from "../components/common/Header";
import CartIcon from "../components/icons/CartIcon";
import QtyBtn from "../components/icons/QtyBtn";
import S from "../styles/global";

const CartScreen: React.FC = () => {
  const { c } = useTh();
  const { go } = useNav();
  const { items, qty, total, inc, dec } = useCart();

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
            <Text style={[S.pillTxt, { color: c.accentTxt }]}>
              Browse Products
            </Text>
          </Pressable>
        </View>
      </View>
    );
  }

  const renderCartItem = ({ item }: { item: CartItem }) => (
    <View
      style={[
        S.cartRow,
        { backgroundColor: c.cardBg, borderColor: c.cardBorder },
      ]}
    >
      {/* Product Image */}
      {item.image ? (
        <Image
          source={{ uri: item.image }}
          style={S.cartImg}
          resizeMode="cover"
        />
      ) : (
        <View
          style={[
            S.cartImg,
            {
              backgroundColor: c.divider,
              justifyContent: "center",
              alignItems: "center",
            },
          ]}
        >
          <Text style={{ fontSize: 24 }}>📦</Text>
        </View>
      )}

      {/* Product Details */}
      <View style={S.cartInfo}>
        <Text style={[S.cartName, { color: c.text }]} numberOfLines={2}>
          {item.name}
        </Text>
        <Text style={[S.cartPrice, { color: c.price }]}>
          ₱ {(item.price || 0).toLocaleString()}
        </Text>

        {/* Quantity Controls */}
        <View style={S.cartQtyWrap}>
          <QtyBtn
            type="−"
            color={c.text}
            bg={c.bg}
            onPress={() => dec(item.id)}
          />
          <Text style={[S.qtyNum, { color: c.text }]}>{item.quantity}</Text>
          <QtyBtn
            type="+"
            color={c.accentTxt}
            bg={c.accent}
            onPress={() => inc(item.id)}
          />
        </View>
      </View>

      {/* Item Total */}
      <View style={S.cartTotal}>
        <Text style={[S.cartTotalTxt, { color: c.price }]}>
          ₱ {((item.price || 0) * item.quantity).toLocaleString()}
        </Text>
      </View>
    </View>
  );

  /* ── populated cart ── */
  return (
    <View style={[S.screen, { backgroundColor: c.bg }]}>
      <Header title="Your Cart" back />

      <FlatList
        data={items}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={
          <Text style={[S.sectionLbl, { color: c.textTert }]}>
            {qty} ITEM{qty !== 1 ? "S" : ""}
          </Text>
        }
        contentContainerStyle={S.scrollPad}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{ height: 108 }} />}
      />

      {/* ── sticky footer: total + proceed ── */}
      <View
        style={[
          S.cartFooter,
          { backgroundColor: c.headerBg, borderTopColor: c.headerBorder },
        ]}
      >
        <View style={S.totalStrip}>
          <Text style={[S.totalLbl, { color: c.textSub }]}>Total</Text>
          <Text style={[S.totalVal, { color: c.price }]}>
            ₱ {(total || 0).toLocaleString()}
          </Text>
        </View>

        <Pressable
          onPress={() => go(Screen.Checkout)}
          style={({ pressed }) => [
            S.pillBtn,
            { backgroundColor: pressed ? c.accentPress : c.accent },
          ]}
        >
          <Text style={[S.pillTxt, { color: c.accentTxt }]}>
            Proceed to Checkout
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CartScreen;
