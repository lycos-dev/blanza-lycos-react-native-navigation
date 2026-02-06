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
  - Product image loaded from URL (or fallback avatar)
  - Product name and description
  - Price in Philippine Peso (₱)
  - "Add to Cart" button (shows quantity if item is already in cart)
- **Sticky Cart Button** (appears only when items are in cart)
  - Quick access to cart with total item count
  - Uses cart icon and stylized design

### 🛒 Cart Screen
- **Item Count Header** displaying **total items** (by quantity, not product count)
  - Example: 4 Dumbbells + 2 Water Bottles = "6 ITEMS" (not "2 ITEMS")
- **Product List** with:
  - Product images loaded from URLs
  - Product name and unit price
  - Quantity controls (- and + buttons)
  - Item subtotal (price × quantity) with real-time updates
- **Removal Confirmation**:
  - When clicking "−" button with quantity = 1, an alert asks to confirm removal
  - Prevents accidental item deletion
- **Sticky Footer** showing:
  - Total cart amount
  - "Proceed to Checkout" button (only if cart has items)
- **Empty State** with friendly message and "Browse Products" button if cart is empty

### 💳 Checkout Screen
- **Order Header** showing **total item count** (qty, not product count)
- **Unified Order Summary Card** with:
  - Colored header with accent background
  - All product items with images (72x72px)
  - Product details: name, quantity, and line total
  - Total section displaying grand total
- **Confirmation Dialog** before completing checkout
- **Success Alert** after checkout completion with message
- **Sticky Checkout Button** displaying:
  - Total amount breakdown
  - "Complete Checkout" button with shadow effects
- **Navigation Reset**: After checkout, navigation stack is cleared so back button doesn't return to Cart/Checkout
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
- **Optimized Images** loaded from URLs for better performance

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── common/         # Common UI components
│   │   ├── Avatar.tsx      # Product avatar circles
│   │   ├── Badge.tsx       # Notification badge
│   │   ├── Header.tsx      # Top navigation header
│   │   └── Toggle.tsx      # Theme toggle switch
│   ├── product/        # Product-specific components
│   │   ├── ProductCard.tsx # Product display card
│   │   └── CatTag.tsx      # Category tag
│   ├── cart/           # Cart-specific components
│   │   └── CartRow.tsx     # Individual cart item row
│   ├── checkout/       # Checkout-specific components
│   │   └── CoRow.tsx       # Checkout order row
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
│   └── products.ts     # Product catalog with image URLs
├── utils/              # Helper functions
│   └── avatarTints.ts  # Color utilities
└── types/              # TypeScript definitions
    └── index.ts        # Type interfaces
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
  image?: string;      // Image URL
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

## 🎯 Requirements Compliance

### ✅ All Requirements Met

**General Requirements:**
- ✅ Built with React Native & Expo
- ✅ State management via Context API (Cart, Theme, Navigation)
- ✅ Light Mode & Dark Mode support
- ✅ Clean, modular, readable code

**Navigation Rules:**
- ✅ Exactly 3 screens (Home, Cart, Checkout)
- ✅ Flow: Home → Cart → Checkout (enforced)
- ✅ Cannot skip Cart screen
- ✅ Cannot navigate Home → Checkout directly
- ✅ After checkout: Cart cleared & navigation reset (no back button)

**Home Screen:**
- ✅ Display all 10 products
- ✅ Show name and price for each product
- ✅ "Add to Cart" button on each product
- ✅ "Go to Cart" button visible (when items in cart)
- ✅ Adding existing product increases quantity (no duplicates)

**Cart Screen:**
- ✅ Display only cart items (not all products)
- ✅ Show name, quantity, and item total
- ✅ '+' button increases quantity
- ✅ '−' button decreases quantity with confirmation
- ✅ Item removed when quantity reaches 0
- ✅ Quantity never below 0
- ✅ Real-time price updates
- ✅ Cart item count shows **total quantity** (not product count)
- ✅ "Proceed to Checkout" button (only if items exist)

**Checkout Screen:**
- ✅ Display all cart products
- ✅ Show name, quantity, item price
- ✅ Show grand total
- ✅ "Complete Checkout" button
- ✅ Success alert after checkout
- ✅ Cart cleared after successful checkout
- ✅ Navigate to Home with cleared history
- ✅ Cannot checkout with empty cart
- ✅ All prices and totals accurate

**Theme:**
- ✅ Light Mode support
- ✅ Dark Mode support
- ✅ Consistent theme across all screens
- ✅ Theme toggle via sun/moon icon

---



```
Home Screen
    ↓
    ├→ Add items to cart
    │
    └→ Sticky "Go to Cart" button (qty shown)
                    ↓
                Cart Screen
                    ↓
                    ├→ Review items
                    ├→ Adjust quantities (±)
                    │  (Confirmation dialog when removing items)
                    │
                    └→ "Proceed to Checkout" button
                            ↓
                        Checkout Screen
                            ↓
                            ├→ Review order summary
                            │
                            └→ "Complete Checkout" button
                                    ↓
                            Confirmation Dialog (Are you sure?)
                                    ↓
                            Success Alert (Order placed!)
                                    ↓
                        [CLEAR CART + RESET NAVIGATION]
                                    ↓
                            Back to Home Screen
                            (Back button doesn't work)
```

**Key Constraints:**
- ✅ Home → Cart → Checkout (only allowed flow)
- ✅ Cannot skip Cart screen
- ✅ Cannot navigate Home → Checkout directly
- ✅ After checkout: navigation stack reset (no back to Cart/Checkout)

## 🎯 State Management

### CartContext
Manages shopping cart operations:
- **State**: Array of CartItem objects
- **Methods**:
  - `add(product)` - Add item to cart (or increment quantity if already exists, preventing duplicates)
  - `inc(id)` - Increase quantity of item by 1
  - `dec(id)` - Decrease quantity by 1 (removes item when quantity reaches 1)
  - `clear()` - Empty entire cart after successful checkout
- **Derived Values**:
  - `qty` - **Total item count** (sum of all quantities, not product count)
    - Example: 4 Dumbbells + 2 Water Bottles = qty: 6
  - `total` - Sum of (price × quantity) for all items

### NavigationContext
Handles screen navigation and history:
- **State**: Current screen ID
- **Methods**: 
  - `go(screenId)` - Navigate between screens (maintains back history)
  - `reset(screenId)` - Navigate to screen while clearing back history (used after checkout)

## 🎨 Styling System

All styles are centralized in `src/styles/global.ts`:
- **Hero Banner**: Decorative background, rotated sticker, centered content
- **Product Cards**: Image, title, description, price, add button
- **Cart Items**: Image, product details, quantity controls, subtotal
- **Checkout**: Order summary card, product items, total section
- **Buttons**: Pill-shaped design, press state animations
- **Empty States**: Centered layout with icon, message, and action button

## 🔧 Key Technologies

- **React Native** - Cross-platform mobile framework (iOS & Android)
- **Expo** - Development platform and SDK
- **TypeScript** - Static type checking for type safety
- **React Context API** - Global state management (Cart, Theme, Navigation)
- **Custom Navigation** - Custom screen navigation implementation (no React Navigation library)

## 🎯 Features Breakdown

### Cart Management
- Add items from product cards (no duplicates, just increment quantity)
- Increment/decrement quantities with real-time price updates
- **Removal confirmation** - Alert appears when trying to remove item (qty = 1)
- Real-time total calculation
- Clear cart after successful checkout
- **Accurate item count** - Shows total quantity (sum of all items), not product count

### Navigation
- **Enforced flow**: Home → Cart → Checkout (cannot skip Cart)
- **Navigation reset after checkout**: Back button doesn't work after successful purchase
- Confirmation dialogs before important actions

### User Experience
- Responsive design for all screen sizes
- Smooth press animations on buttons
- Clear visual feedback for interactions
- Image loading with proper error handling
- Empty states with helpful messages
- Confirmation dialogs for important actions (checkout & item removal)

### Dark Mode
- Complete dark theme support
- Toggle-able via sun/moon icon in header
- Consistent color scheme across all screens
- Readable text contrast in both themes