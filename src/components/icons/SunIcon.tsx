import React from "react";
import { View } from "react-native";
import S from "../../styles/global";

const SunIcon = ({ color }: { color: string }) => (
  <View style={S.sunWrap}>
    {/* center circle */}
    <View style={[S.sunCore, { backgroundColor: color }]} />
    
    {/* 8 rays arranged in a circle for a proper sun icon */}
    {/* top ray */}
    <View style={[S.ray, { top: -1, left: 6, backgroundColor: color }]} />
    {/* bottom ray */}
    <View style={[S.ray, { bottom: -1, left: 6, backgroundColor: color }]} />
    {/* left ray */}
    <View style={[S.ray, { top: 6, left: -1, transform: [{ rotate: "90deg" }], backgroundColor: color }]} />
    {/* right ray */}
    <View style={[S.ray, { top: 6, right: -1, transform: [{ rotate: "90deg" }], backgroundColor: color }]} />
    
    {/* diagonal rays for complete sun effect */}
    {/* top-left ray */}
    <View style={[S.rayDiag, { top: 1, left: 1, transform: [{ rotate: "45deg" }], backgroundColor: color }]} />
    {/* top-right ray */}
    <View style={[S.rayDiag, { top: 1, right: 1, transform: [{ rotate: "-45deg" }], backgroundColor: color }]} />
    {/* bottom-left ray */}
    <View style={[S.rayDiag, { bottom: 1, left: 1, transform: [{ rotate: "-45deg" }], backgroundColor: color }]} />
    {/* bottom-right ray */}
    <View style={[S.rayDiag, { bottom: 1, right: 1, transform: [{ rotate: "45deg" }], backgroundColor: color }]} />
  </View>
);

export default SunIcon;
