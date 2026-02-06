import React, { useCallback } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  FlatList,
  Alert,
  Image,
} from "react-native";
import { useTh } from "../context/ThemeContext";
import { useNav } from "../context/NavigationContext";
import { useCart } from "../context/CartContext";
import { Screen, CartItem } from "../types";
import Header from "../components/Header";
import S from "../styles/global";

const CheckoutScreen: React.FC = () => {
  const { c } = useTh();
  const { go } = useNav();
  const { items, total, clear } = useCart();

  /* ── checkout handler ── */
  const confirmCheckout = () => {
    Alert.alert(
      "Confirm Checkout",
      "Are you sure you want to complete this checkout?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Yes",
          onPress: onCheckout, // your existing checkout function
          style: "default",
        },
      ],
    );
  };

  const onCheckout = useCallback(() => {
    Alert.alert(
      "Checkout Successful",
      "Thank you for your order! Your items will arrive soon.",
      [
        {
          text: "OK",
          onPress: () => {
            clear(); // wipe the cart
            go(Screen.Home); // navigate back to shop
          },
        },
      ],
    );
  }, [clear, go]);

  /* ── empty guard ── */
  if (items.length === 0) {
    return (
      <View style={[S.screen, { backgroundColor: c.bg }]}>
        <Header title="Checkout" back />
        <View style={S.emptyWrap}>
          <Text style={[S.emptyTitle, { color: c.text }]}>
            Nothing to checkout
          </Text>
          <Pressable
            onPress={() => go(Screen.Home)}
            style={({ pressed }) => [
              S.pillBtn,
              S.pillBtnAuto,
              { backgroundColor: pressed ? c.accentPress : c.accent },
            ]}
          >
            <Text style={[S.pillTxt, { color: c.accentTxt }]}>
              Back to Shop
            </Text>
          </Pressable>
        </View>
      </View>
    );
  }

  const renderOrderItem = ({
    item,
    index,
  }: {
    item: CartItem;
    index: number;
  }) => (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        paddingVertical: 14,
        borderBottomWidth: index < items.length - 1 ? 1 : 0,
        borderBottomColor: c.divider,
      }}
    >
      {/* Product Image */}
      {item.image ? (
        <Image
          source={{ uri: item.image }}
          style={{
            width: 72,
            height: 72,
            borderRadius: 12,
            backgroundColor: c.divider,
          }}
          resizeMode="cover"
        />
      ) : (
        <View
          style={{
            width: 72,
            height: 72,
            borderRadius: 12,
            backgroundColor: c.divider,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 24 }}>📦</Text>
        </View>
      )}

      {/* Product Details */}
      <View style={{ flex: 1, minWidth: 0 }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "700",
            color: c.text,
            marginBottom: 4,
          }}
          numberOfLines={2}
        >
          {item.name}
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: c.textTert,
            marginBottom: 6,
          }}
        >
          Qty: {item.quantity}
        </Text>
        <Text
          style={{
            fontSize: 13,
            fontWeight: "600",
            color: c.price,
          }}
        >
          ₱ {((item.price || 0) * item.quantity).toLocaleString()}
        </Text>
      </View>
    </View>
  );

  /* main layout */
  return (
    <View style={[S.screen, { backgroundColor: c.bg }]}>
      <Header title="Checkout" back />

      <ScrollView
        style={S.scroll}
        contentContainerStyle={S.scrollPad}
        showsVerticalScrollIndicator={false}
      >
        {/* Order Header Section */}
        <View style={{ marginBottom: 20 }}>
          <Text style={[S.sectionLbl, { color: c.textTert }]}>
            {items.length} ITEM{items.length !== 1 ? "S" : ""} IN ORDER
          </Text>
        </View>

        {/* Order Summary Card */}
        <View
          style={[
            S.coCard,
            {
              backgroundColor: c.cardBg,
              borderColor: c.cardBorder,
              borderRadius: 18,
              paddingVertical: 0,
              paddingHorizontal: 0,
              overflow: "hidden",
            },
          ]}
        >
          {/* Card Header with accent background */}
          <View
            style={{
              backgroundColor: c.accent,
              paddingHorizontal: 18,
              paddingVertical: 16,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "800",
                color: c.accentTxt,
                letterSpacing: 0.3,
              }}
            >
              Order Summary
            </Text>
          </View>

          {/* FlatList for Product items */}
          <View style={{ paddingHorizontal: 18, paddingVertical: 16 }}>
            <FlatList
              data={items}
              renderItem={renderOrderItem}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
              showsVerticalScrollIndicator={false}
            />
          </View>

          {/* Total Section */}
          <View
            style={{
              borderTopWidth: 1,
              borderTopColor: c.divider,
              paddingHorizontal: 18,
              paddingVertical: 16,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "600",
                  color: c.textSub,
                }}
              >
                Total Amount
              </Text>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "800",
                  color: c.accent,
                }}
              >
                ₱ {(total || 0).toLocaleString()}
              </Text>
            </View>
          </View>
        </View>

        {/* spacer behind sticky button */}
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* sticky Checkout button */}
      <View
        style={[
          S.stickyBar,
          {
            backgroundColor: c.headerBg,
            borderTopColor: c.headerBorder,
            paddingHorizontal: 16,
            paddingVertical: 14,
          },
        ]}
      >
        <Pressable
          onPress={confirmCheckout}
          style={({ pressed }) => [
            S.pillBtn,
            {
              backgroundColor: pressed ? c.accentPress : c.accent,
              borderRadius: 14,
              paddingVertical: 14,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              elevation: 3,
            },
          ]}
        >
          <Text style={[S.pillTxt, { color: c.accentTxt }]}>
            Complete Checkout · ₱ {(total || 0).toLocaleString()}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CheckoutScreen;