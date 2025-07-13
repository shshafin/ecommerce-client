import Image from "next/image";

import { Button } from "@/components/ui/button";

import { ChevronRight } from "lucide-react";
import CardItem from "../card-item";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "100% Cotton Basic T-shirt Combo Pack",
    image: "/shirt1.jpg",
    originalPrice: 849.99,
    salePrice: 449.99,
    discount: 5,
    rating: 4.9,
    reviews: 43,
  },
  {
    id: 2,
    name: "100% Cotton Basic T-shirt Combo Pack",
    image: "/shirt2.jpg",
    originalPrice: 849.99,
    salePrice: 449.99,
    discount: 43,
    rating: 4.9,
    reviews: 43,
  },
  {
    id: 3,
    name: "100% Cotton Basic T-shirt Combo Pack",
    image: "/shirt1.jpg",
    originalPrice: 849.99,
    salePrice: 449.99,
    discount: 44,
    rating: 4.8,
    reviews: 43,
  },
  {
    id: 4,
    name: "100% Cotton Basic T-shirt Combo Pack",
    image: "/shirt2.jpg",
    originalPrice: 849.99,
    salePrice: 449.99,
    discount: 43,
    rating: 4.9,
    reviews: 43,
  },
  {
    id: 5,
    name: "100% Cotton Basic T-shirt Combo Pack",
    image: "/shirt2.jpg",
    originalPrice: 849.99,
    salePrice: 449.99,
    discount: 43,
    rating: 4.9,
    reviews: 43,
  },
  {
    id: 6,
    name: "100% Cotton Basic T-shirt Combo Pack",
    image: "/shirt2.jpg",
    originalPrice: 849.99,
    salePrice: 449.99,
    discount: 43,
    rating: 4.9,
    reviews: 43,
  },
  {
    id: 7,
    name: "100% Cotton Basic T-shirt Combo Pack",
    image: "/shirt2.jpg",
    originalPrice: 849.99,
    salePrice: 449.99,
    discount: 43,
    rating: 4.9,
    reviews: 43,
  },
  {
    id: 8,
    name: "100% Cotton Basic T-shirt Combo Pack",
    image: "/shirt2.jpg",
    originalPrice: 849.99,
    salePrice: 449.99,
    discount: 43,
    rating: 4.9,
    reviews: 43,
  },
  {
    id: 9,
    name: "100% Cotton Basic T-shirt Combo Pack",
    image: "/shirt2.jpg",
    originalPrice: 849.99,
    salePrice: 449.99,
    discount: 43,
    rating: 4.9,
    reviews: 43,
  },
];

export default function CategoryProducts({ name }: { name: string }) {
  const getValue = () => {
    if (name === "New Arrivals") {
      return {
        bg: "#00C896", // Background color
        hover: "#00B285", // Hover color
        icon: "/new-arrivals.svg", // Icon URL
        url: "/shop", // URL
      };
    } else if (name === "Comming Soon") {
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
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div
          className={`flex items-center mb-6 border-b border-[${
            getValue().bg
          }] pb-4`}
        >
          <Button
            className={`bg-[${getValue().bg}] hover:bg-[${
              getValue().hover
            }] text-white pl-4 pr-0 py-2 text-sm flex items-center gap-2 rounded-none border border-[${
              getValue().bg
            }]`}
          >
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 8).map((product) => (
            <CardItem key={product.id} productData={product} />
          ))}
        </div>
      </div>

      <Link href={getValue().url}>
        <span className="float-right flex items-center text-xl mt-2 p-3">
          View More <ChevronRight />
        </span>
      </Link>
    </div>
  );
}
