import React from "react";
import { View, Text } from "react-native";
import { useTh } from "../context/ThemeContext";
import { CartItem } from "../types";
import { avBg, avTxt } from "../utils/avatarTints";
import Avatar from "./Avatar";
import S from "../styles/global";

const CoRow = ({ item }: { item: CartItem }) => {
  const { c, dark } = useTh();

  return (
    <View style={[S.coRow, { borderBottomColor: c.divider }]}>
      {/* avatar (same component, same size) */}
      <Avatar
        icon={item.icon}
        bg={avBg(item.category, dark)}
        color={avTxt(item.category, dark)}
      />

      {/* name + qty breakdown */}
      <View style={S.coText}>
        <Text style={[S.coName, { color: c.text }]}>{item.name}</Text>
        <Text style={[S.coQtyTxt, { color: c.textTert }]}>
          Qty {item.quantity} × ₱ {item.price.toLocaleString()}
        </Text>
      </View>

      {/* line total */}
      <Text style={[S.coPrice, { color: c.price }]}>
        ₱ {(item.price * item.quantity).toLocaleString()}
      </Text>
    </View>
  );
};

export default CoRow;
