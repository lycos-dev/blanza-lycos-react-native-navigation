import React from "react";
import { View } from "react-native";
import S from "../../styles/global";

const CartIcon = ({ color, size = 22 }: { color: string; size?: number }) => (
  <View style={{ width: size, height: size, justifyContent: "center", alignItems: "center" }}>
    {/* handle arc */}
    <View style={[S.cartHandle, { borderColor: color, width: size * 0.5 }]} />
    {/* basket body */}
    <View style={[S.cartBasket, { borderColor: color, width: size * 0.82, height: size * 0.46 }]} />
    {/* two wheels */}
    <View style={S.cartWheels}>
      <View style={[S.cartWheel, { borderColor: color }]} />
      <View style={[S.cartWheel, { borderColor: color }]} />
    </View>
  </View>
);

export default CartIcon;
