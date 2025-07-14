import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Heart, Star } from "lucide-react";
import Image from "next/image";

interface Iitem {
  id: number;
  name: string;
  image: string;
  originalPrice: number;
  salePrice: number;
  discount: number;
  rating: number;
  reviews: number;
}

function CardItem({ productData }: { productData: Iitem }) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden group">
      <div className="relative p-3">
        <Image
          src={productData.image || "/placeholder.svg"}
          alt={productData.name}
          width={250}
          height={300}
          className="w-full h-64 object-cover"
        />
        <Badge className="absolute top-5 left-5 rounded-sm bg-red-500 text-white">
          -{productData.discount}%
        </Badge>
        <div className="absolute top-5 right-5 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity ">
          <Button className=" text-rose-600 bg-white rounded-full shadow-lg hover:bg-gray-100">
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
          {productData.name}
        </h3>

        <div className="flex items-center justify-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(productData.rating)
                    ? "text-orange-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">
            ({productData.reviews})
          </span>
        </div>

        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="text-lg font-bold text-black">
            ৳ {productData.salePrice}
          </span>
          <span className="text-xs text-gray-400 line-through">
            ৳ {productData.originalPrice}
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
  );
}

export default CardItem;
