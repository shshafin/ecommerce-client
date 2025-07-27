import { ShopCard } from "@/components/modules/shop/shop-card";
import { ShoptFilter } from "@/components/modules/shop/shop-filter";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Sample product data
const products = [
  {
    id: "1",
    name: "100% Cotton Basic T-shirt Combo Pack",
    image: "/shirt1.jpg",
    originalPrice: 649,
    discountedPrice: 449,
    discount: 24,
    rating: 4.5,
    reviews: 128,
  },
  {
    id: "2",
    name: "100% Cotton Basic T-shirt Combo Pack",
    image: "/shirt2.jpg",
    originalPrice: 699,
    discountedPrice: 449,
    discount: 34,
    rating: 4.5,
    reviews: 95,
  },
  {
    id: "3",
    name: "100% Cotton Basic T-shirt Combo Pack",
    image: "/shirt1.jpg",
    originalPrice: 699,
    discountedPrice: 449,
    discount: 34,
    rating: 4.5,
    reviews: 203,
  },
  {
    id: "4",
    name: "100% Cotton Basic T-shirt Combo Pack",
    image: "/shirt2.jpg",
    originalPrice: 749,
    discountedPrice: 449,
    discount: 33,
    rating: 4.5,
    reviews: 156,
  },
  {
    id: "5",
    name: "100% Cotton Basic T-shirt Combo Pack",
    image: "/shirt1.jpg",
    originalPrice: 599,
    discountedPrice: 399,
    discount: 33,
    rating: 4.3,
    reviews: 89,
  },
  {
    id: "6",
    name: "100% Cotton Basic T-shirt Combo Pack",
    image: "/shirt2.jpg",
    originalPrice: 799,
    discountedPrice: 549,
    discount: 31,
    rating: 4.6,
    reviews: 234,
  },
  {
    id: "7",
    name: "100% Cotton Basic T-shirt Combo Pack",
    image: "/shirt1.jpg",
    originalPrice: 649,
    discountedPrice: 449,
    discount: 24,
    rating: 4.5,
    reviews: 128,
  },
  {
    id: "8",
    name: "100% Cotton Basic T-shirt Combo Pack",
    image: "/shirt2.jpg",
    originalPrice: 699,
    discountedPrice: 449,
    discount: 34,
    rating: 4.5,
    reviews: 95,
  },
  {
    id: "9",
    name: "100% Cotton Basic T-shirt Combo Pack",
    image: "/shirt2.jpg",
    originalPrice: 699,
    discountedPrice: 449,
    discount: 34,
    rating: 4.5,
    reviews: 203,
  },
  {
    id: "10",
    name: "100% Cotton Basic T-shirt Combo Pack",
    image: "/shirt2.jpg",
    originalPrice: 749,
    discountedPrice: 449,
    discount: 33,
    rating: 4.5,
    reviews: 156,
  },
  {
    id: "11",
    name: "100% Cotton Basic T-shirt Combo Pack",
    image: "/shirt2.jpg",
    originalPrice: 599,
    discountedPrice: 399,
    discount: 33,
    rating: 4.3,
    reviews: 89,
  },
  {
    id: "12",
    name: "100% Cotton Basic T-shirt Combo Pack",
    image: "/shirt2.jpg",
    originalPrice: 799,
    discountedPrice: 549,
    discount: 31,
    rating: 4.6,
    reviews: 234,
  },
];

export default function ProductPage() {
const name= "New Arrivals"; // Example category name, can be dynamic

    const getValue = () => {
    if (name === "New Arrivals") {
      return {
        bg: "#00C896", // Background color
        hover: "#00B285", // Hover color
        icon: "/new-arrivals.svg", // Icon URL
        url: "/shop", // URL
      };
    } else if (name === "Coming Soon") {
      return {
        bg: "#6A5ACD", // Background color
        hover: "#847edb", // Corrected hover color
        icon: "/comming-soon.svg", // Icon URL
        url: "/shop", // URL
      };
    } else if (name === "Best Sellers") {
      return {
        bg: "#FFA41B", // Background color
        hover: "#a65f00", // Hover color
        icon: "/best-seller.svg", // Icon URL
        url: "/shop", // URL
      };
    } else if (name === "Trending Now") {
      return {
        bg: "#FF8540", // Background color
        hover: "#a65f00", // Hover color
        icon: "/trending-now.svg", // Icon URL
        url: "/shop", // URL
      };
    } else if (name === "Special Offers") {
      return {
        bg: "#FF6B6B", // Background color
        hover: "#a65f00", // Hover color
        icon: "/special-offer.svg", // Icon URL
        url: "/shop", // URL
      };
    } else if (name === "Top Rated") {
      return {
        bg: "#00A38C", // Background color
        hover: "#a65f00", // Hover color
        icon: "/top-rated.svg", // Icon URL
        url: "/shop", // URL
      };
    }
    // Default values for other cases
    return {
      bg: "#00C896", // Background color
      hover: "#00B285", // Hover color
      icon: "/new-arrivals.svg", // Icon URL
      url: "/shop", // URL
    };
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Filter Sidebar */}
        <ShoptFilter />

        {/* Main Content Area */}
        <div className="flex-1 min-h-screen p-4 border-gray-500 border-l">
          {/* Hero Banner */}
         <div
          className={`flex items-center border-b border-[${
            getValue().bg
          }] pb-4`}>
          <Button
            style={{
              backgroundColor: getValue().bg,
              borderColor: getValue().bg,
            }}
            className="hover:opacity-90 text-white pl-4 pr-0 py-2 text-sm flex items-center gap-2 rounded-none border">
            <span className="pr-2 text-xl">{name}</span>
            <div className="w-8 h-8 flex items-center justify-center border border-white bg-white">
              <Image
                src={getValue().icon}
                alt={name}
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
          </Button>
        </div>

          {/* Products Section */}

          {/* Product Grid */}
          <div className="grid grid-cols-1 pt-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {products.map((product) => (
              <ShopCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
