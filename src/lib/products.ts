export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  material: string;
  diameter: string;
  weight: string;
  color: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Compostable filament",
    description: "The most ecological 3D filament in the world.",
    price: 99.99,
    image: "https://b4plastics.com/wp-content/uploads/2020/12/b4plastics-compost3d-compost-black.jpg",
    material: "Propietary",
    diameter: "1.75mm",
    weight: "1kg",
    color: "Silk White"
  },
  /*
  {
    id: "2",
    name: "Compostable filament",
    description: "The most ecological 3D filament in the world.",
    price: 99.99,
    image: "https://b4plastics.com/wp-content/uploads/2020/12/b4plastics-compost3d-compost-black.jpg",
    material: "Propietary",
    diameter: "1.75mm",
    weight: "1kg",
    color: "Silk White"
  },
  {
    id: "3",
    name: "Compostable filament",
    description: "The most ecological 3D filament in the world.",
    price: 99.99,
    image: "https://b4plastics.com/wp-content/uploads/2020/12/b4plastics-compost3d-compost-black.jpg",
    material: "Propietary",
    diameter: "1.75mm",
    weight: "1kg",
    color: "Silk White"
  },
  */
  {
    id: "4",
    name: "PLA+ Premium Filament",
    description: "High-quality PLA+ filament for precise and durable 3D prints.",
    price: 24.99,
    image: "/plastic-filament.jpg",
    material: "PLA+",
    diameter: "1.75mm",
    weight: "1kg",
    color: "Matte Black"
  },
  {
    id: "5",
    name: "PETG Transparent Filament",
    description: "Crystal clear PETG filament for transparent and strong prints.",
    price: 29.99,
    image: "/plastic-filament.jpg",
    material: "PETG",
    diameter: "1.75mm",
    weight: "1kg",
    color: "Transparent"
  },
  {
    id: "6",
    name: "ABS Heat-Resistant Filament",
    description: "Durable ABS filament for heat-resistant and impact-tough prints.",
    price: 27.99,
    image: "/plastic-filament.jpg",
    material: "ABS",
    diameter: "1.75mm",
    weight: "1kg",
    color: "White"
  },
  {
    id: "7",
    name: "TPU Flexible Filament",
    description: "Flexible TPU filament for elastic and rubber-like 3D prints.",
    price: 34.99,
    image: "/plastic-filament.jpg",
    material: "TPU",
    diameter: "1.75mm",
    weight: "0.5kg",
    color: "Neon Green"
  }
];

