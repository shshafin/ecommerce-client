import Image from "next/image";

import { Button } from "@/components/ui/button";

import CardItem from "./card-item";
import { ChevronRight } from "lucide-react";

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

export default function CommingSoon() {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-6 border-b border-[#7770d8] pb-4">
          <Button className="bg-[#7770d8] hover:bg-[#111009] text-white pl-4 pr-0 py-2 text-sm flex items-center gap-2 rounded-none border border-[#7770d8]">
            <span className="pr-2 text-xl">Comming Soon</span>
            <div className="w-8 h-8 flex items-center justify-center border border-white bg-white">
              <Image
                src="/comming-soon.svg"
                alt="New Icon"
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
      <span className="float-right flex items-center text-xl mt-2 p-3">
        View More <ChevronRight />
      </span>
    </div>
  );
}
