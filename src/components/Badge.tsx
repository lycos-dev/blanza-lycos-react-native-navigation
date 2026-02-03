import React from "react";
import { View, Text } from "react-native";
import { useTh } from "../context/ThemeContext";
import { useCart } from "../context/CartContext";
import S from "../styles/global";

const Badge: React.FC = () => {
  const { c } = useTh();
  const { qty } = useCart();

  if (qty === 0) return null;

  return (
    <View style={[S.badge, { backgroundColor: c.badge }]}>
      <Text style={[S.badgeTxt, { color: c.badgeTxt }]}>
        {qty > 99 ? "99+" : qty}
      </Text>
    </View>
  );
};

export default Badge;
