"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Minus, Plus, ShoppingCart, Heart } from "lucide-react"
import Image from "next/image"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function SingleProductPage({ params }: ProductPageProps) {
  const [selectedSize, setSelectedSize] = useState("M")
  const [selectedColor, setSelectedColor] = useState("multicolor")
  const [quantity, setQuantity] = useState(2)
  const [selectedImage, setSelectedImage] = useState(0)

  const product = {
    id: params.id,
    name: "Organic Ringspun Combed Compact Cotton",
    price: 8.0,
    rating: 4.5,
    reviews: 102,
    productCode: "1001",
    stock: "Available",
    purchases: 102,
    images: [
      "/shirt1.jpg",
     "/shirt2.jpg",
     "/shirt1.jpg",
    "/shirt2.jpg",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "multicolor", color: "bg-gradient-to-r from-blue-900 via-white to-red-800" },
      { name: "black", color: "bg-black" },
      { name: "red", color: "bg-red-500" },
      { name: "orange", color: "bg-orange-500" },
      { name: "yellow", color: "bg-yellow-500" },
      { name: "green", color: "bg-green-500" },
      { name: "blue", color: "bg-blue-500" },
      { name: "purple", color: "bg-purple-500" },
      { name: "pink", color: "bg-pink-500" },
      { name: "teal", color: "bg-teal-500" },
    ],
  }

  const sizeChart = [
    { size: "S", chest: "35.5", length: "27.5", sleeves: "8.5" },
    { size: "M", chest: "38.5", length: "28.0", sleeves: "9.0" },
    { size: "L", chest: "40.0", length: "28.0", sleeves: "9.0" },
    { size: "XL", chest: "43.0", length: "29.0", sleeves: "9.5" },
    { size: "XXL", chest: "45.5", length: "30.5", sleeves: "10.5" },
  ]

  const relatedProducts = [
    {
      id: "1",
      name: "100% Cotton Basic T-shirt Combo Pack",
      price: 449,
      rating: 4.5,
      reviews: 128,
      image: "/shirt1.jpg",
      badge: "NEW",
    },
    {
      id: "2",
      name: "100% Cotton Basic T-shirt Combo Pack",
      price: 449,
      rating: 4.3,
      reviews: 95,
      image: "/shirt2.jpg",
      badge: "SALE",
    },
    {
      id: "3",
      name: "100% Cotton Basic T-shirt Combo Pack",
      price: 449,
      rating: 4.6,
      reviews: 203,
      image: "/shirt1.jpg",
      badge: "HOT",
    },
    {
      id: "4",
      name: "100% Cotton Basic T-shirt Combo Pack",
      price: 449,
      rating: 4.4,
      reviews: 156,
      image: "/shirt2.jpg",
      badge: "NEW",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Main Product Section */}
        <div className="bg-white rounded-2xl p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                <Image
                  src={product.images[selectedImage] || "/placeholder.svg"}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? "border-black" : "border-transparent"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`View ${index + 1}`}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              {/* Title and Rating */}
              <div>
                <h1 className="text-2xl font-bold text-black mb-3">{product.name}</h1>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-2xl font-bold text-black">${product.price.toFixed(2)}</span>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({product.reviews})</span>
                    <span className="text-sm text-blue-600">Views: 2017</span>
                  </div>
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="text-base font-semibold text-black mb-3">Size:</h3>
                <div className="flex items-center space-x-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-10 h-10 rounded-lg border-2 font-medium transition-colors ${
                        selectedSize === size
                          ? "border-black bg-black text-white"
                          : "border-gray-300 bg-white text-black hover:border-gray-400"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div>
                <h3 className="text-base font-semibold text-black mb-3">Color:</h3>
                <div className="flex items-center space-x-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-8 h-8 rounded-full border-2 transition-all ${color.color} ${
                        selectedColor === color.name ? "border-black scale-110" : "border-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Quantity and Actions */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-gray-100 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-3 font-semibold">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-gray-100 transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 font-semibold">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Buy Now
                </Button>

                <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 font-semibold">
                  Add to cart
                </Button>

                <Button variant="outline" size="icon" className="border-gray-300 hover:bg-gray-100 bg-transparent">
                  <Heart className="w-4 h-4" />
                </Button>
              </div>

              {/* Product Info */}
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Product Code:</span>
                  <span className="ml-2 font-semibold">{product.productCode}</span>
                </div>
                <div>
                  <span className="text-gray-600">Stock:</span>
                  <span className="ml-2 font-semibold text-green-600">{product.stock}</span>
                </div>
                <div>
                  <span className="text-gray-600">Purchase:</span>
                  <span className="ml-2 font-semibold">{product.purchases}</span>
                </div>
              </div>

              {/* Size Chart */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-black mb-4 text-center">
                  Size Chart
                  <br />
                  <span className="text-sm font-normal text-gray-600">(All size are in CM)</span>
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 font-semibold">Size</th>
                        <th className="text-left py-2 font-semibold">Chest</th>
                        <th className="text-left py-2 font-semibold">Length</th>
                        <th className="text-left py-2 font-semibold">Sleeves</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sizeChart.map((row) => (
                        <tr key={row.size} className="border-b border-gray-100">
                          <td className="py-2 font-medium">{row.size}</td>
                          <td className="py-2">{row.chest}</td>
                          <td className="py-2">{row.length}</td>
                          <td className="py-2">{row.sleeves}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-2xl p-8 mb-8">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="description" className="text-base">
                📋 Product Descriptions
              </TabsTrigger>
              <TabsTrigger value="comments" className="text-base">
                💬 Comments
              </TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="space-y-6">
              <div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  MSLV Fashion Mens Premium Quality t-shirt that offers a much smoother, silky feel and more structured
                  mid-weight fit than the regular t-shirts. The t-shirts are made with finest quality Combed Compact
                  Cotton, features astonishing ~175 GSM on just 26&#39;s cotton which gives a smooth and compact
                  construction.
                </p>

                <h4 className="font-semibold text-black mb-4">Detailed Specifications</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Premium & premium shrinkage</li>
                  <li>• Reactive dye process</li>
                  <li>• Seamless side seams and sleeve and</li>
                  <li>• Superior fit does not rough, full stretch FABRIC</li>
                  <li>• Comfortable and durable</li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="comments" className="space-y-6">
              <div className="text-center py-12">
                <p className="text-gray-500">No comments yet. Be the first to review this product!</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="bg-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-black mb-8">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="bg-gray-50 rounded-2xl p-4 hover:shadow-md transition-shadow">
                <div className="relative aspect-square bg-white rounded-xl overflow-hidden mb-4">
                  <Image
                    src={relatedProduct.image || "/placeholder.svg"}
                    alt={relatedProduct.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                  <Badge
                    className={`absolute top-2 left-2 ${
                      relatedProduct.badge === "NEW"
                        ? "bg-green-500"
                        : relatedProduct.badge === "SALE"
                          ? "bg-red-500"
                          : "bg-orange-500"
                    } text-white`}
                  >
                    {relatedProduct.badge}
                  </Badge>
                </div>

                <h3 className="font-semibold text-black text-sm mb-2 line-clamp-2">{relatedProduct.name}</h3>

                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(relatedProduct.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600 ml-2">({relatedProduct.reviews})</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-bold text-black">৳{relatedProduct.price}</span>
                  <Button size="sm" className="bg-teal-500 hover:bg-teal-600 text-white text-xs px-3 py-1">
                    Add to cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
