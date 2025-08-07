export interface Coffee {
  id: string;
  description: string;
  image: string;
  intensity: "mild" | "medium" | "bold";
  name: string;
  price: number;
  roast: "light" | "medium" | "dark";
  stock: number;
  rating: number;
}
