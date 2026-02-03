import React from "react";
import { View } from "react-native";
import S from "../../styles/global";

/**
 * `color`  – fill of the visible crescent
 * `mask`   – must match whatever sits behind this icon (toggle thumb bg)
 */
const MoonIcon = ({ color, mask }: { color: string; mask: string }) => (
  <View style={S.moonWrap}>
    {/* full circle */}
    <View style={[S.moonFull, { backgroundColor: color }]} />
    {/* offset mask circle — eats the right side to form crescent */}
    <View style={[S.moonMask, { backgroundColor: mask }]} />
  </View>
);

export default MoonIcon;
