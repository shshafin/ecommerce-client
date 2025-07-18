import { Eye, Heart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

interface ProductCardProps {
  id: string
  name: string
  image: string
  originalPrice: number
  discountedPrice: number
  discount: number
  rating: number
  reviews: number
}

export function ShopCard({
  name,
  image,
  originalPrice,
  discountedPrice,
  discount,
  rating,
}: ProductCardProps) {
  return (
    <div className="bg-white shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
      {/* Product Image Container */}
    <div className="relative">
           <Image
             src={image || "/placeholder.svg"}
             alt={name}
             width={250}
             height={300}
             className="w-full h-64 object-cover"
           />
           <Badge className="absolute top-5 left-5 rounded-sm bg-red-500 text-white">
             -{discount}%
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

      {/* Product Info */}
      <div className=" flex flex-col items-center gap-2 mt-3">
          {/* Product Name */}
        <h3 className="font-medium text-gray-900 text-sm">{name}</h3>
        {/* Rating */}
        <div className="flex items-center">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.floor(rating) ? "text-orange-400 fill-orange-400" : "text-gray-300"}`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">({rating})</span>
        </div>

      

        {/* Price */}
        <div className="flex items-center gap-2">
             <span className="text-sm text-gray-500 line-through">₹ {originalPrice.toLocaleString()}</span>
          <span className="text-lg font-bold text-gray-900">₹ {discountedPrice.toLocaleString()}</span>
         
        </div>

        {/* Order Button */}
        <Button className="w-full bg-teal-500 hover:bg-teal-600 rounded-none text-white font-medium py-2 px-4 transition-colors">
          🛒 Order Now
        </Button>
      </div>
    </div>
  )
}
