import React from "react";
import { View, Pressable } from "react-native";
import { useTh } from "../context/ThemeContext";
import SunIcon from "./icons/SunIcon";
import MoonIcon from "./icons/MoonIcon";
import S from "../styles/global";

const Toggle: React.FC = () => {
  const { c, dark, toggle } = useTh();

  return (
    <Pressable
      onPress={toggle}
      hitSlop={10}
      style={({ pressed }) => [{ opacity: pressed ? 0.65 : 1 }]}
    >
      <View
        style={[S.track, { backgroundColor: dark ? c.trackOn : c.trackOff }]}
      >
        <View
          style={[
            S.thumb,
            {
              backgroundColor: c.thumbBg,
              transform: [{ translateX: dark ? 20 : 0 }],
            },
          ]}
        >
          {dark ? (
            <MoonIcon color={c.trackOn} mask={c.thumbBg} />
          ) : (
            <SunIcon color={c.trackOn} />
          )}
        </View>
      </View>
    </Pressable>
  );
};

export default Toggle;
