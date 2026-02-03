import React from "react";
import { View, Text } from "react-native";
import { useTh } from "../context/ThemeContext";
import S from "../styles/global";

const CatTag = ({ cat }: { cat: "Gym" | "Clothing" }) => {
  const { c } = useTh();
  const isGym = cat === "Gym";

  return (
    <View
      style={[S.catTag, { backgroundColor: isGym ? c.tagBgGym : c.tagBgCloth }]}
    >
      <Text
        style={[S.catTagTxt, { color: isGym ? c.tagTxtGym : c.tagTxtCloth }]}
      >
        {cat}
      </Text>
    </View>
  );
};

export default CatTag;
