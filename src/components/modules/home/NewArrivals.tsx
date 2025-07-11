import Image from "next/image";
import { Star, Heart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
];

export default function NewArrivals() {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-6 border-b border-[#00C896] pb-4">
          <Button className="bg-[#00C896] hover:bg-[#00B285] text-white pl-4 pr-0 py-2 text-sm flex items-center gap-2 rounded-none border border-[#00C896]">
            <span className="pr-2 text-xl">New Arrivals</span>
            <div className="w-8 h-8 flex items-center justify-center border border-white bg-white">
              <Image
                src="/new-arrivals.svg"
                alt="New Icon"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <div className="relative">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={250}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-2 left-2 rounded-sm bg-red-500 text-white">
                  -{product.discount}%
                </Badge>
                <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity ">
                  <Button
                    size="icon"
                    className=" text-rose-600 bg-white rounded-full shadow-lg hover:bg-gray-100">
                    <Heart className="h-4 w-4 fill-white" />
                  </Button>
                  <Button
                    size="icon"
                    className=" text-teal-600 bg-white rounded-full shadow-lg hover:bg-gray-100">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="p-4 text-center">
                <h3 className="font-semibold text-sm mb-2 line-clamp-2 text-gray-800">
                  {product.name}
                </h3>

                <div className="flex items-center justify-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "text-orange-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-1">
                    ({product.reviews})
                  </span>
                </div>

                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="text-lg font-bold text-black">
                    ৳ {product.salePrice}
                  </span>
                  <span className="text-xs text-gray-400 line-through">
                    ৳ {product.originalPrice}
                  </span>
                </div>

                <div className="flex space-x-2">
                  <Button className="flex-1 bg-[#009F9F] hover:bg-teal-800 text-white text-xs py-2">
                    Order Now
                  </Button>
                  <Button className="flex-1 bg-[#00D0B0] hover:bg-teal-600 text-white text-xs py-2">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
