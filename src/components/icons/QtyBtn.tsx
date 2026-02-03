import React from "react";
import { View, Pressable } from "react-native";
import S from "../../styles/global";

interface Props {
  type: "+" | "−";
  color: string;   // bar colour (accent text)
  bg: string;      // circle fill  (accent)
  onPress: () => void;
}

const QtyBtn: React.FC<Props> = ({ type, color, bg, onPress }) => (
  <Pressable onPress={onPress} hitSlop={10} style={({ pressed }) => [{ opacity: pressed ? 0.55 : 1 }]}>
    <View style={[S.qtyCircle, { backgroundColor: bg }]}>
      {/* horizontal bar — always visible */}
      <View style={[S.qtyBar, { backgroundColor: color }]} />
      {/* vertical bar — only for "+" */}
      {type === "+" && <View style={[S.qtyBarV, { backgroundColor: color }]} />}
    </View>
  </Pressable>
);

export default QtyBtn;
