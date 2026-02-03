import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { useTh } from "../context/ThemeContext";
import { useCart } from "../context/CartContext";
import { Product, CartItem } from "../types";
import { avBg, avTxt } from "../utils/avatarTints";
import Avatar from "./Avatar";
import S from "../styles/global";

const ProductCard = ({ product }: { product: Product }) => {
  const { c, dark } = useTh();
  const { items, add } = useCart();

  // how many of this product are already in the cart
  const inCart =
    items.find((i: CartItem) => i.id === product.id)?.quantity ?? 0;

  return (
    <View
      style={[S.card, { backgroundColor: c.cardBg, borderColor: c.cardBorder }]}
    >
      {/* Show product image if available, otherwise show tinted two-letter avatar */}
      {product.image ? (
        <Image
          source={product.image}
          style={{
            width: 64,
            height: 64,
            borderRadius: 12,
            resizeMode: "cover",
          }}
        />
      ) : (
        <Avatar
          icon={product.icon}
          bg={avBg(product.category, dark)}
          color={avTxt(product.category, dark)}
        />
      )}

      {/* text block */}
      <View style={S.cardBody}>
        <View style={S.cardTitleRow}>
          <Text style={[S.cardName, { color: c.text }]}>{product.name}</Text>
        </View>
        <Text style={[S.cardDesc, { color: c.textTert }]}>
          {product.description}
        </Text>
        <Text style={[S.cardPrice, { color: c.price }]}>
          ₱ {product.price.toLocaleString()}
        </Text>
      </View>

      {/* add-to-cart pill */}
      <Pressable
        onPress={() => add(product)}
        style={({ pressed }) => [
          S.addBtn,
          { backgroundColor: pressed ? c.accentPress : c.accent },
        ]}
      >
        <Text style={[S.addBtnTxt, { color: c.accentTxt }]}>
          {inCart > 0 ? `+ Add (${inCart})` : "+ Add"}
        </Text>
      </Pressable>
    </View>
  );
};

export default ProductCard;
