import React from "react";
import { View, Text, Pressable } from "react-native";
import { useTh } from "../../context/ThemeContext";
import { useNav } from "../../context/NavigationContext";
import { Screen } from "../../types";
import BackArrow from "../icons/BackArrow";
import CartIcon from "../icons/CartIcon";
import Badge from "./Badge";
import Toggle from "./Toggle";
import S from "../../styles/global";

interface Props {
  title: string;
  back?: boolean; // show ← Back on the left
  cart?: boolean; // show cart icon + badge on the right
}

const Header: React.FC<Props> = ({ title, back = false, cart = false }) => {
  const { c } = useTh();
  const { go } = useNav();

  return (
    <View
      style={[
        S.header,
        { backgroundColor: c.headerBg, borderBottomColor: c.headerBorder },
      ]}
    >
      {/* ── left slot ── */}
      <View style={S.hSlot}>
        {back ? (
          <Pressable
            onPress={() => go(Screen.Home)}
            hitSlop={12}
            style={({ pressed }) => [S.backRow, { opacity: pressed ? 0.5 : 1 }]}
          >
            <BackArrow color={c.textSub} />
            <Text style={[S.backTxt, { color: c.textSub }]}>Back</Text>
          </Pressable>
        ) : (
          <View style={{ width: 60 }} />
        )}
      </View>

      {/* ── centre title ── */}
      <Text style={[S.headerTitle, { color: c.text }]}>{title}</Text>

      {/* ── right slot ── */}
      <View
        style={[
          S.hSlot,
          {
            alignItems: "flex-end",
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: 16,
          },
        ]}
      >
        {cart && (
          <Pressable
            onPress={() => go(Screen.Cart)}
            hitSlop={12}
            style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
          >
            <View style={{ position: "relative" }}>
              <CartIcon color={c.text} size={22} />
              <Badge />
            </View>
          </Pressable>
        )}
        <Toggle />
      </View>
    </View>
  );
};

export default Header;
