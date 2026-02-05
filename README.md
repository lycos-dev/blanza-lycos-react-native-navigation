# FitShop - Premium Black Edition Gym Equipment Store

A modern React Native e-commerce mobile application for purchasing premium black-designed gym equipment. Built with React Native, Context API, and TypeScript.

## 📱 Overview

FitShop is a fully functional fitness equipment shopping application featuring a sleek dark-themed interface with a "Black Edition" collection. The app provides a seamless shopping experience with product browsing, cart management, and checkout functionality.

## ✨ Features

### 🏠 Home Screen
- **Hero Banner** with "Black Edition" promotion sticker (rotated 45° for visual impact)
- Decorative accent circles for modern design
- Inspiring promotional text: "Transform Your Fitness"
- **All Products Section** displaying available gym equipment with images
- Each product card shows:
  - Product image (or fallback avatar)
  - Product name and description
  - Price in Philippine Peso (₱)
  - "+ Add" button to add items to cart
  - Badge showing quantity if item is already in cart
- **Sticky Cart Button** (appears only when items are in cart)
  - Quick access to cart with item count
  - Uses cart icon and stylized design

### 🛒 Cart Screen
- **Item Count Header** displaying total items in cart
- **Product List** with:
  - Product images (80x80px, rounded corners)
  - Product name and unit price
  - Quantity controls (- and + buttons)
  - Item subtotal (price × quantity)
- **Sticky Footer** showing:
  - Total cart amount
  - "Proceed to Checkout" button with smooth press animation
- **Empty State** with friendly message and "Browse Products" button if cart is empty

### 💳 Checkout Screen
- **Order Header** showing item count
- **Unified Order Summary Card** with:
  - Colored header with accent background
  - All product items with images (72x72px)
  - Product details: name, quantity, and line total
  - **Black Total Section** with white text for maximum visibility
    - "Total Amount" label
    - Grand total price in white text
- **Sticky Checkout Button** displaying:
  - Total amount breakdown
  - "Complete Checkout" button with shadow effects
- **Empty State** with "Back to Shop" button if no items

### 🎨 Design Features
- **Dark Theme Support** with light/dark mode toggle
- **Responsive Layout** that works on all screen sizes
- **Color Scheme**:
  - Accent color for primary actions and highlights
  - Dark gray dividers and secondary elements
  - Black background sections for emphasis
  - White text for maximum contrast on dark backgrounds
- **Smooth Animations** on button presses and navigation
- **Professional Typography** with clear hierarchy and spacing

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Avatar.tsx      # Product avatar circles
│   ├── Badge.tsx       # Notification badge
│   ├── CartRow.tsx     # Individual cart item row
│   ├── CoRow.tsx       # Checkout order row
│   ├── Header.tsx      # Top navigation header
│   ├── ProductCard.tsx # Product display card
│   ├── Toggle.tsx      # Theme toggle switch
│   └── icons/          # Icon components
│       ├── CartIcon.tsx
│       ├── BackArrow.tsx
│       ├── MoonIcon.tsx
│       ├── SunIcon.tsx
│       └── QtyBtn.tsx
├── context/            # State management
│   ├── CartContext.tsx     # Shopping cart logic
│   ├── NavigationContext.tsx # Screen navigation
│   └── ThemeContext.tsx     # Dark/light theme
├── screens/            # Main app screens
│   ├── HomeScreen.tsx      # Product listing
│   ├── CartScreen.tsx      # Shopping cart
│   └── CheckoutScreen.tsx  # Order finalization
├── styles/             # Global styling
│   └── global.ts       # Centralized style definitions
├── data/               # Static data
│   └── products.ts     # Product catalog
├── assets/             # Images and resources
│   ├── dumbbellImage.png
│   ├── resistanceBand.png
│   ├── speedJumprope.webp
│   ├── yogaMat.png
│   ├── gymGloves.avif
│   ├── proteinShaker.jpg
│   ├── joggerPants.png
│   ├── sandoVest.png
│   ├── compressionTee.png
│   └── athleticHoodie.png
├── utils/              # Helper functions
│   └── avatarTints.ts  # Color utilities
└── types.ts            # TypeScript interfaces

```

## 📦 Data Structure

### Product Type
```typescript
interface Product {
  id: number;
  name: string;
  price: number;
  category?: string;
  icon: string;
  image?: any;
  description: string;
}
```

### CartItem Type
```typescript
interface CartItem extends Product {
  quantity: number;
}
```

### Available Products
1. **Adjustable Dumbbells** - ₱3,499 (5–25 kg, anti-slip grip)
2. **Resistance Band Set** - ₱849 (5 levels, latex-free)
3. **Speed Jump Rope** - ₱425 (Bearings, foam handles)
4. **PVC Yoga Mat** - ₱620 (6 mm thick, non-slip)
5. **Leather Gym Gloves** - ₱780 (Wrist strap, breathable)
6. **Protein Shaker** - ₱390 (700 ml, leak-proof lid)
7. **Men's Joggers** - ₱1,250 (Tapered, cotton blend)
8. **Quick Drying Vest** - ₱150 (Cotton, breathable)
9. **Compression Tee** - ₱250 (Dry-fit, slim cut)
10. **Athletic Hoodie** - ₱1,890 (Fleece, kangaroo pocket)

## 🎮 Navigation Flow

```
Home Screen
    ↓
    └→ Add items to cart → Sticky "Go to Cart" button
                              ↓
                          Cart Screen
                              ↓
                              └→ Adjust quantities/review items
                                      ↓
                                  "Proceed to Checkout"
                                      ↓
                                Checkout Screen
                                      ↓
                                      └→ Review order
                                          ↓
                                      "Complete Checkout"
                                          ↓
                                      Success Alert
                                          ↓
                                      Back to Home (cart cleared)
```

## 🎯 State Management

### CartContext
Manages shopping cart operations:
- **State**: Array of CartItem objects
- **Methods**:
  - `add(product)` - Add item to cart (or increment quantity if exists)
  - `inc(id)` - Increase quantity of item
  - `dec(id)` - Decrease quantity (removes item when quantity reaches 0)
  - `clear()` - Empty entire cart
- **Derived Values**:
  - `qty` - Total item count across all lines
  - `total` - Sum of (price × quantity) for all items

### ThemeContext
Manages application theming:
- **State**: `dark` boolean flag
- **Methods**: `toggleTheme()` to switch between light/dark modes
- **Colors**: Dynamic color palette based on theme

### NavigationContext
Handles screen navigation:
- **Methods**: `go(screenId)` to navigate between screens

## 🎨 Styling System

All styles are centralized in `src/styles/global.ts`:
- **Hero Banner**: Decorative background, rotated sticker, centered content
- **Product Cards**: Image, title, description, price, add button
- **Cart Items**: Image, product details, quantity controls, subtotal
- **Checkout**: Order summary card, product items, total section
- **Buttons**: Pill-shaped design, press state animations
- **Empty States**: Centered layout with icon, message, and action button

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn
- Expo CLI (for development)
- iOS/Android emulator or physical device

## 🔧 Key Technologies

- **React Native** - Cross-platform mobile framework
- **TypeScript** - Static type checking
- **React Context API** - State management (no Redux)
- **Expo** - Development platform and SDK
- **React Navigation** - Screen navigation (custom implementation)

## 🎯 Features Breakdown

### Cart Management
- Add items from product cards
- Increment/decrement quantities
- Remove items when quantity reaches 0
- Real-time total calculation
- No external pricing rules (direct calculation)

### User Experience
- Responsive design for all screen sizes
- Smooth press animations on buttons
- Clear visual feedback for interactions
- Loading states handled gracefully
- Empty states with helpful messages

### Dark Mode
- Complete dark theme support
- Toggle-able via header icon
- Consistent color scheme across all screens
- Readable text contrast in both themes