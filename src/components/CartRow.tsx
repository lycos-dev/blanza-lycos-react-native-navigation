import React from "react";
import { View, Text } from "react-native";
import { useTh } from "../context/ThemeContext";
import { useCart } from "../context/CartContext";
import { CartItem } from "../types";
import { avBg, avTxt } from "../utils/avatarTints";
import Avatar from "./Avatar";
import QtyBtn from "./icons/QtyBtn";
import S from "../styles/global";

const CartRow = ({ item }: { item: CartItem }) => {
  const { c, dark } = useTh();
  const { inc, dec } = useCart();

  return (
    <View
      style={[
        S.cartRow,
        { backgroundColor: c.cardBg, borderColor: c.cardBorder },
      ]}
    >
      {/* avatar */}
      <Avatar
        icon={item.icon}
        bg={avBg(item.category, dark)}
        color={avTxt(item.category, dark)}
      />

      {/* name + unit price */}
      <View style={S.cartText}>
        <Text style={[S.cartName, { color: c.text }]}>{item.name}</Text>
        <Text style={[S.cartUnit, { color: c.textTert }]}>
          ₱ {(item.price || 0).toLocaleString()} each
        </Text>
      </View>

      {/* −  qty  + */}
      <View style={S.qtyRow}>
        <QtyBtn
          type="−"
          color={c.accentTxt}
          bg={c.accent}
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

      {/* line subtotal */}
      <Text style={[S.cartSubtotal, { color: c.price }]}>
        ₱ {((item.price || 0) * item.quantity).toLocaleString()}
      </Text>
    </View>
  );
};

export default CartRow;