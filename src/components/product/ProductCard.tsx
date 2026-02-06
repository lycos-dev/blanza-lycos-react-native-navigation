import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { useTh } from "../../context/ThemeContext";
import { useCart } from "../../context/CartContext";
import { Product, CartItem } from "../../types";
import { avBg, avTxt } from "../../utils/avatarTints";
import Avatar from "../common/Avatar";
import S from "../../styles/global";

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
      {/* Product Image / Avatar Section */}
      <View style={{ flexShrink: 0 }}>
        {product.image ? (
          <Image
            source={{ uri: product.image }}
            style={{
              width: 72,
              height: 72,
              borderRadius: 14,
            }}
            resizeMode="cover"
          />
        ) : (
          <Avatar
            icon={product.icon}
            bg={avBg(product.category, dark)}
            color={avTxt(product.category, dark)}
          />
        )}
      </View>

      {/* Product Info Section */}
      <View style={[S.cardBody, { justifyContent: "space-between", minHeight: 72 }]}>
        {/* Top: Name & Description */}
        <View>
          <Text
            style={[S.cardName, { color: c.text }]}
            numberOfLines={1}
          >
            {product.name}
          </Text>
          <Text
            style={[S.cardDesc, { color: c.textTert }]}
            numberOfLines={2}
          >
            {product.description}
          </Text>
        </View>

        {/* Bottom: Price & Button Row */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Text style={[S.cardPrice, { color: c.price }]}>
            ₱ {product.price.toLocaleString()}
          </Text>

          {/* Add to Cart Button */}
          <Pressable
            onPress={() => add(product)}
            style={({ pressed }) => [
              S.addBtn,
              {
                backgroundColor: pressed ? c.accentPress : c.accent,
              },
            ]}
          >
            <Text style={[S.addBtnTxt, { color: c.accentTxt }]}>
              {inCart > 0 ? `+ Add (${inCart})` : "+ Add to Cart"}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;