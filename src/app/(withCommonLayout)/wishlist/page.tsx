"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

import { Heart, ShoppingCart, Trash2 } from "lucide-react"
import Image from "next/image"
import { CustomCheckbox } from "@/components/ui/check-box"

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "T-Shirt",
      size: "S",
      color: "Green",
      price: 449,
      originalPrice: 599,
      discount: 25,
      image: "/placeholder.svg?height=80&width=80&text=Green+T-Shirt",
      inStock: true,
    },
    {
      id: 2,
      name: "T-Shirt",
      size: "M",
      color: "Dark Grayish Olive",
      price: 449,
      originalPrice: 599,
      discount: 25,
      image: "/placeholder.svg?height=80&width=80&text=Olive+T-Shirt",
      inStock: true,
    },
    {
      id: 3,
      name: "T-Shirt",
      size: "L",
      color: "Dark Olive Green",
      price: 449,
      originalPrice: 599,
      discount: 25,
      image: "/placeholder.svg?height=80&width=80&text=Dark+Green+T-Shirt",
      inStock: false,
    },
    {
      id: 4,
      name: "Premium Cotton T-Shirt",
      size: "XL",
      color: "Navy Blue",
      price: 549,
      originalPrice: 699,
      discount: 21,
      image: "/placeholder.svg?height=80&width=80&text=Navy+T-Shirt",
      inStock: true,
    },
  ])

  const [selectAll, setSelectAll] = useState(false)

  const removeItem = (id: number) => {
    setWishlistItems((items) => items.filter((item) => item.id !== id))
  }

  const moveToCart = (id: number) => {
    // In a real app, this would add to cart and optionally remove from wishlist
    console.log(`Moving item ${id} to cart`)
  }

  const moveAllToCart = () => {
    const inStockItems = wishlistItems.filter((item) => item.inStock)
    console.log(`Moving ${inStockItems.length} items to cart`)
  }

  const totalSavings = wishlistItems.reduce((sum, item) => sum + (item.originalPrice - item.price), 0)

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-black mb-4">Your Wishlist</h1>
          <p className="text-gray-600 mb-10">Save your favorite items for later</p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Wishlist Items Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8">
              {/* Wishlist Header */}
              <div className="bg-gray-50 rounded-3xl p-6 mb-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <CustomCheckbox id="select-all" checked={selectAll} onCheckedChange={setSelectAll} />
                    <label htmlFor="select-all" className="text-base font-medium text-black cursor-pointer">
                      Select All
                    </label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Button
                      onClick={moveAllToCart}
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-medium"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add All to Cart
                    </Button>
                    <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-medium">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Remove
                    </Button>
                  </div>
                </div>
              </div>

              {/* Your Wishlist Title */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-black">Your Wishlist</h2>
                <span className="text-sm text-gray-500">{wishlistItems.length} items</span>
              </div>

              {/* Wishlist Items */}
              <div className="space-y-6">
                {wishlistItems.map((item) => (
                  <div key={item.id} className="bg-gray-50 rounded-3xl p-6">
                    <div className="flex items-center space-x-6">
                      {/* Product Image */}
                      <div className="w-20 h-20 bg-white rounded-2xl overflow-hidden flex-shrink-0 relative">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                        {item.discount > 0 && (
                          <div className="absolute top-1 right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">
                            -{item.discount}%
                          </div>
                        )}
                      </div>

                      {/* Product Details */}
                      <div className="flex-1">
                        <h3 className="font-semibold text-black text-lg mb-1">{item.name}</h3>
                        <p className="text-sm text-gray-600 mb-1">Size: {item.size}</p>
                        <p className="text-sm text-gray-600 mb-2">Color: {item.color}</p>
                        <div className="flex items-center space-x-2">
                          <p className="text-lg font-bold text-black">৳{item.price}</p>
                          {item.originalPrice > item.price && (
                            <p className="text-sm text-gray-500 line-through">৳{item.originalPrice}</p>
                          )}
                        </div>
                        <p className={`text-sm mt-1 ${item.inStock ? "text-green-600" : "text-red-500"}`}>
                          {item.inStock ? "In Stock" : "Out of Stock"}
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center space-x-3">
                        <Button
                          onClick={() => moveToCart(item.id)}
                          disabled={!item.inStock}
                          className={`px-4 py-2 rounded-xl font-medium ${
                            item.inStock
                              ? "bg-black hover:bg-gray-800 text-white"
                              : "bg-gray-200 text-gray-400 cursor-not-allowed"
                          }`}
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Add to Cart
                        </Button>

                        {/* Remove from Wishlist */}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Heart className="w-5 h-5 fill-current" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Empty State */}
              {wishlistItems.length === 0 && (
                <div className="text-center py-12">
                  <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Your wishlist is empty</h3>
                  <p className="text-gray-600 mb-6">Save items you love to your wishlist</p>
                  <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-xl">
                    Continue Shopping
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Wishlist Summary Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8">
              <h2 className="text-xl font-semibold text-black mb-8">Wishlist Summary</h2>

              {/* Summary Stats */}
              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-600">Total Items</span>
                    <span className="font-semibold text-black">{wishlistItems.length}</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-600">In Stock</span>
                    <span className="font-semibold text-green-600">
                      {wishlistItems.filter((item) => item.inStock).length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-600">Out of Stock</span>
                    <span className="font-semibold text-red-500">
                      {wishlistItems.filter((item) => !item.inStock).length}
                    </span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-black">Total Savings</span>
                      <span className="font-bold text-green-600 text-lg">৳{totalSavings}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <Button
                  onClick={moveAllToCart}
                  className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-4 text-base rounded-xl"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add All to Cart
                </Button>

                <Button
                  variant="outline"
                  className="w-full border-gray-200 hover:bg-gray-50 text-black font-semibold py-4 text-base rounded-xl bg-transparent"
                >
                  Continue Shopping
                </Button>
              </div>

              {/* Wishlist Tips */}
              <div className="mt-8 p-4 bg-blue-50 rounded-2xl">
                <h4 className="font-semibold text-blue-900 mb-2">💡 Wishlist Tips</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Get notified when items go on sale</li>
                  <li>• Share your wishlist with friends</li>
                  <li>• Items may sell out quickly</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
