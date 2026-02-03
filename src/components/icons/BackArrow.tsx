import React from "react";
import { View } from "react-native";
import S from "../../styles/global";

const BackArrow = ({ color }: { color: string }) => (
  <View style={S.chevronWrap}>
    <View style={[S.chevronInner, { borderColor: color }]} />
  </View>
);

export default BackArrow;
