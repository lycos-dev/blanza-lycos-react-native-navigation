import React from "react";
import { View, Text } from "react-native";
import S from "../../styles/global";

interface Props {
  icon: string; // e.g. "DB", "AH"
  bg: string; // circle background
  color: string; // text colour
}

const Avatar: React.FC<Props> = ({ icon, bg, color }) => (
  <View style={[S.avatarCircle, { backgroundColor: bg }]}>
    <Text style={[S.avatarTxt, { color }]}>{icon}</Text>
  </View>
);

export default Avatar;
