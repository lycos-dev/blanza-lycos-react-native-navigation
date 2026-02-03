import { Product } from "../types";

// NOTE: To add product images, place your images in an 'assets' or 'images' folder
// and import them like this:
// import dumbbellImage from "../../assets/dumbbells.png";
// Then add: image: dumbbellImage to each product

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Adjustable Dumbbells",
    price: 3499,
    icon: "DB",
    description: "5–25 kg, anti-slip grip",
    // image: dumbbellImage, // Uncomment and add your imported image
  },
  {
    id: 2,
    name: "Resistance Band Set",
    price: 849,
    icon: "RB",
    description: "5 levels, latex-free",
    // image: resistanceBandImage,
  },
  {
    id: 3,
    name: "Speed Jump Rope",
    price: 425,
    icon: "JR",
    description: "Bearings, foam handles",
    // image: jumpRopeImage,
  },
  {
    id: 4,
    name: "PVC Yoga Mat",
    price: 620,
    icon: "YM",
    description: "6 mm thick, non-slip",
    // image: yogaMatImage,
  },
  {
    id: 5,
    name: "Leather Gym Gloves",
    price: 780,
    icon: "GG",
    description: "Wrist strap, breathable",
    // image: gymGlovesImage,
  },
  {
    id: 6,
    name: "Protein Shaker",
    price: 390,
    icon: "PS",
    description: "700 ml, leak-proof lid",
    // image: proteinShakerImage,
  },
  {
    id: 7,
    name: "Men's Joggers",
    price: 1250,
    icon: "JG",
    description: "Tapered, cotton blend",
    // image: joggersImage,
  },
  {
    id: 8,
    name: "Women's Sports Bra",
    price: 890,
    icon: "SB",
    description: "High support, moisture-wick",
    // image: sportsBraImage,
  },
  {
    id: 9,
    name: "Compression Tee",
    price: 750,
    icon: "CT",
    description: "Dry-fit, slim cut",
    // image: compressionTeeImage,
  },
  {
    id: 10,
    name: "Athletic Hoodie",
    price: 1890,
    icon: "AH",
    description: "Fleece, kangaroo pocket",
    // image: hoodieImage,
  },
];
