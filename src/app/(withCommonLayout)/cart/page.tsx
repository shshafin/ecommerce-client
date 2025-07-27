"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Minus, Plus, Trash2 } from "lucide-react"
import Image from "next/image"
import { CustomCheckbox } from "@/components/ui/check-box"

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "T-Shirt",
      size: "S",
      color: "Green",
      price: 449,
      quantity: 2,
      image: "/placeholder.svg?height=80&width=80&text=Green+T-Shirt",
    },
    {
      id: 2,
      name: "T-Shirt",
      size: "M",
      color: "Dark Grayish Olive",
      price: 449,
      quantity: 3,
      image: "/placeholder.svg?height=80&width=80&text=Olive+T-Shirt",
    },
    {
      id: 3,
      name: "T-Shirt",
      size: "L",
      color: "Dark Olive Green",
      price: 449,
      quantity: 5,
      image: "/placeholder.svg?height=80&width=80&text=Dark+Green+T-Shirt",
    },
  ])

  const [selectAll, setSelectAll] = useState(false)
  const [couponCode, setCouponCode] = useState("")

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const discountPercent = 10
  const discount = Math.round((subtotal * discountPercent) / 100)
  const deliveryFee = 150
  const total = subtotal - discount + deliveryFee

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-black mb-10">Your Shopping Cart</h1>

          {/* Progress Steps */}
          <div className="flex items-center justify-center space-x-16 mb-12">
            {/* Step 1 - Shopping Cart (Active) */}
            <div className="flex flex-col items-center relative">
              <div className="flex items-center mb-3">
                <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  1
                </div>
                <span className="text-sm font-semibold text-black">Shopping Cart</span>
              </div>
              {/* Active underline */}
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-black"></div>
            </div>

            {/* Step 2 - Checkout Details */}
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-3">
                <div className="w-7 h-7 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  2
                </div>
                <span className="text-sm text-gray-400">Checkout details</span>
              </div>
            </div>

            {/* Step 3 - Order Complete */}
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-3">
                <div className="w-7 h-7 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  3
                </div>
                <span className="text-sm text-gray-400">Order complete</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items Section - Main Container with Border and Shadow */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8">
              {/* Cart Header */}
              <div className="bg-gray-50 rounded-3xl p-6 mb-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <CustomCheckbox id="select-all" checked={selectAll} onCheckedChange={setSelectAll} />
                    <label htmlFor="select-all" className="text-base font-medium text-black cursor-pointer">
                      Select All
                    </label>
                  </div>
                  <Button className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-full font-medium">
                    Delete
                  </Button>
                </div>
              </div>

              {/* Your Cart Title */}
              <h2 className="text-xl font-semibold text-black mb-6">Your Cart</h2>

              {/* Cart Items */}
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="bg-gray-50 rounded-3xl p-6">
                    <div className="flex items-center space-x-6">
                      {/* Product Image */}
                      <div className="w-20 h-20 bg-white rounded-2xl overflow-hidden flex-shrink-0">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1">
                        <h3 className="font-semibold text-black text-lg mb-1">{item.name}</h3>
                        <p className="text-sm text-gray-600 mb-1">Size: {item.size}</p>
                        <p className="text-sm text-gray-600 mb-3">Color: {item.color}</p>
                        <p className="text-lg font-bold text-black">৳{item.price}</p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-lg bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-semibold text-lg">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-lg bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Delete Button */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8">
              <h2 className="text-xl font-semibold text-black mb-8">Order Summary</h2>

              {/* Coupon Code */}
              <div className="mb-8">
                <div className="flex items-center space-x-3">
                  <div className="flex-1 relative">
                    <Input
                      type="text"
                      placeholder="Coupon Code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="h-12 pl-10 border-gray-200 rounded-xl bg-gray-50 border-0"
                    />
                    <div className="absolute left-3 top-1/2 -translate-y-1/2">
                      <div className="w-5 h-5 border-2 border-gray-400 rounded"></div>
                    </div>
                  </div>
                  <Button className="px-6 h-12 bg-black hover:bg-gray-800 text-white font-medium rounded-xl">
                    Apply
                  </Button>
                </div>
              </div>

              {/* Order Details */}
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-base">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold text-black">৳{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-base">
                  <span className="text-gray-600">Discount (-{discountPercent}%)</span>
                  <span className="font-semibold text-red-500">-৳{discount}</span>
                </div>
                <div className="flex justify-between text-base">
                  <span className="text-gray-600">Delivery Free</span>
                  <span className="font-semibold text-black">৳{deliveryFee}</span>
                </div>
                <div className="border-t border-gray-200 pt-4 mt-6">
                  <div className="flex justify-between">
                    <span className="font-bold text-black text-lg">Total</span>
                    <span className="font-bold text-black text-xl">৳{total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Checkout Button */}
              <Button className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-4 text-base rounded-xl">
                Go to Checkout →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
