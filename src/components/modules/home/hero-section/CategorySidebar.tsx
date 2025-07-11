"use client";
import { useState } from "react";
import CategoryItem from "./CategoryItem";
import {
  Shirt,
  Users,
  Package,
  Gift,
  Heart,
  Home,
  Star,
  Activity,
  ShoppingBag,
  Watch,
  User,
} from "lucide-react";

interface ChildCategory {
  name: string;
  icon: React.ReactNode;
}

interface Category {
  name: string;
  icon: React.ReactNode;
  children: ChildCategory[];
}

const categories: Category[] = [
  {
    name: "Mens Fashion",
    icon: <Shirt className="w-4 h-4 text-gray-400" />,
    children: [
      { name: "Shirts", icon: <Shirt className="w-4 h-4 text-gray-500" /> },
      { name: "T-Shirts", icon: <Shirt className="w-4 h-4 text-gray-500" /> },
      { name: "Pants", icon: <Package className="w-4 h-4 text-gray-500" /> },
      { name: "Suits", icon: <Package className="w-4 h-4 text-gray-500" /> },
      {
        name: "Accessories",
        icon: <Watch className="w-4 h-4 text-gray-500" />,
      },
    ],
  },
  {
    name: "Womens Fashion",
    icon: <Shirt className="w-4 h-4 text-pink-400" />,
    children: [
      { name: "Dresses", icon: <Package className="w-4 h-4 text-pink-400" /> },
      { name: "Tops", icon: <Shirt className="w-4 h-4 text-pink-400" /> },
      { name: "Bottoms", icon: <Package className="w-4 h-4 text-pink-400" /> },
      { name: "Ethnic Wear", icon: <Gift className="w-4 h-4 text-pink-400" /> },
      {
        name: "Accessories",
        icon: <Watch className="w-4 h-4 text-pink-400" />,
      },
    ],
  },
  {
    name: "Kids Fashion",
    icon: <Users className="w-4 h-4 text-blue-400" />,
    children: [
      {
        name: "Boys Clothing",
        icon: <User className="w-4 h-4 text-blue-400" />,
      },
      {
        name: "Girls Clothing",
        icon: <User className="w-4 h-4 text-blue-400" />,
      },
      { name: "Baby Wear", icon: <User className="w-4 h-4 text-blue-400" /> },
      {
        name: "School Uniforms",
        icon: <User className="w-4 h-4 text-blue-400" />,
      },
    ],
  },
  {
    name: "Family",
    icon: <Users className="w-4 h-4 text-green-400" />,
    children: [
      {
        name: "Matching Sets",
        icon: <Gift className="w-4 h-4 text-green-400" />,
      },
      {
        name: "Couple Wear",
        icon: <Gift className="w-4 h-4 text-green-400" />,
      },
      {
        name: "Family Packs",
        icon: <Gift className="w-4 h-4 text-green-400" />,
      },
    ],
  },
  {
    name: "Eid Collections",
    icon: <Gift className="w-4 h-4 text-yellow-400" />,
    children: [
      {
        name: "Men's Eid",
        icon: <Shirt className="w-4 h-4 text-yellow-400" />,
      },
      {
        name: "Women's Eid",
        icon: <Shirt className="w-4 h-4 text-yellow-400" />,
      },
      { name: "Kids Eid", icon: <Users className="w-4 h-4 text-yellow-400" /> },
      {
        name: "Family Sets",
        icon: <Gift className="w-4 h-4 text-yellow-400" />,
      },
    ],
  },
  {
    name: "Festivals Collections",
    icon: <Star className="w-4 h-4 text-purple-400" />,
    children: [
      { name: "Diwali", icon: <Gift className="w-4 h-4 text-purple-400" /> },
      { name: "Christmas", icon: <Gift className="w-4 h-4 text-purple-400" /> },
      { name: "New Year", icon: <Gift className="w-4 h-4 text-purple-400" /> },
      {
        name: "Traditional",
        icon: <Gift className="w-4 h-4 text-purple-400" />,
      },
    ],
  },
  {
    name: "Sports Wear",
    icon: <Activity className="w-4 h-4 text-red-400" />,
    children: [
      { name: "Gym Wear", icon: <Activity className="w-4 h-4 text-red-400" /> },
      { name: "Running", icon: <Activity className="w-4 h-4 text-red-400" /> },
      { name: "Yoga", icon: <Activity className="w-4 h-4 text-red-400" /> },
      {
        name: "Sports Accessories",
        icon: <Activity className="w-4 h-4 text-red-400" />,
      },
    ],
  },
  {
    name: "Lingerie",
    icon: <Heart className="w-4 h-4 text-pink-600" />,
    children: [
      { name: "Bras", icon: <Heart className="w-4 h-4 text-pink-600" /> },
      { name: "Panties", icon: <Heart className="w-4 h-4 text-pink-600" /> },
      { name: "Nightwear", icon: <Heart className="w-4 h-4 text-pink-600" /> },
      { name: "Shapewear", icon: <Heart className="w-4 h-4 text-pink-600" /> },
    ],
  },
  {
    name: "Wedding",
    icon: <ShoppingBag className="w-4 h-4 text-red-600" />,
    children: [
      {
        name: "Bridal",
        icon: <ShoppingBag className="w-4 h-4 text-red-600" />,
      },
      { name: "Groom", icon: <ShoppingBag className="w-4 h-4 text-red-600" /> },
      {
        name: "Wedding Guests",
        icon: <ShoppingBag className="w-4 h-4 text-red-600" />,
      },
      { name: "Accessories", icon: <Watch className="w-4 h-4 text-red-600" /> },
    ],
  },
  {
    name: "Home Textile",
    icon: <Home className="w-4 h-4 text-indigo-400" />,
    children: [
      {
        name: "Bed Sheets",
        icon: <Home className="w-4 h-4 text-indigo-400" />,
      },
      { name: "Curtains", icon: <Home className="w-4 h-4 text-indigo-400" /> },
      { name: "Towels", icon: <Home className="w-4 h-4 text-indigo-400" /> },
      { name: "Cushions", icon: <Home className="w-4 h-4 text-indigo-400" /> },
    ],
  },
  {
    name: "Others",
    icon: <Package className="w-4 h-4 text-gray-600" />,
    children: [
      { name: "Bags", icon: <Package className="w-4 h-4 text-gray-600" /> },
      { name: "Shoes", icon: <Package className="w-4 h-4 text-gray-600" /> },
      { name: "Jewelry", icon: <Package className="w-4 h-4 text-gray-600" /> },
      { name: "Beauty", icon: <Package className="w-4 h-4 text-gray-600" /> },
    ],
  },
];

export default function CategorySidebar() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const handleToggle = (categoryName: string) => {
    setOpenCategory(openCategory === categoryName ? null : categoryName);
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-sm">
      <div className="relative">
        {categories.map((category) => (
          <CategoryItem
            key={category.name}
            category={category}
            isOpen={openCategory === category.name}
            onToggle={() => handleToggle(category.name)}
            setOpenCategory={setOpenCategory}
          />
        ))}
      </div>
    </div>
  );
}
