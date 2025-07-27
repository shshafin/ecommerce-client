"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ShoppingCart, Package, Truck, MapPin, Home } from "lucide-react"
import Image from "next/image"

export default function OrderTrackingPage() {
  const [productCode, setProductCode] = useState("")
  const [mobileNumber, setMobileNumber] = useState("")
  const [showOrderDetails, setShowOrderDetails] = useState(true)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (productCode && mobileNumber) {
      setShowOrderDetails(true)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Product Code Section */}
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <ChevronLeft className="w-5 h-5 text-gray-600 mr-2" />
            <h1 className="text-lg font-semibold text-gray-900">Product Code</h1>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Product Code"
                  value={productCode}
                  onChange={(e) => setProductCode(e.target.value)}
                  className="h-12"
                />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Mobile Number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  className="h-12"
                />
              </div>
              <div className="flex justify-center">
                <Button type="submit" className="bg-black hover:bg-gray-800 text-white px-8 py-2 rounded">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Order Details Section */}
        {showOrderDetails && (
          <div>
            <div className="flex items-center mb-4">
              <ChevronLeft className="w-5 h-5 text-gray-600 mr-2" />
              <h2 className="text-lg font-semibold text-gray-900">Order Details</h2>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              {/* Order Info Header */}
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                  <div>
                    <div className="text-gray-500 text-xs mb-1">Order ID</div>
                    <div className="font-medium text-gray-900">5497981231</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs mb-1">Order Date</div>
                    <div className="font-medium text-gray-900">June 02th, 2025</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs mb-1">Delivery Date</div>
                    <div className="font-medium text-gray-900">June 02th, 2025</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs mb-1">Items</div>
                    <div className="font-medium text-gray-900">2 Items</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs mb-1">Status</div>
                    <div className="font-medium text-green-600">Delivered</div>
                  </div>
                </div>
              </div>

              {/* Order Tracking Section */}
              <div className="px-6 py-6 border-b border-gray-200">
                <h3 className="text-base font-semibold text-gray-900 mb-6">Order Tracking</h3>

                <div className="relative">
                  {/* Icons Row */}
                  <div className="flex justify-between items-center mb-4">
                    {/* Order Placed */}
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
                        <ShoppingCart className="w-6 h-6 text-purple-600" />
                      </div>
                    </div>

                    {/* Order Packed */}
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                        <Package className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>

                    {/* In Transit */}
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                        <Truck className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>

                    {/* Out for Delivery */}
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
                        <MapPin className="w-6 h-6 text-purple-600" />
                      </div>
                    </div>

                    {/* Delivered */}
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
                        <Home className="w-6 h-6 text-purple-600" />
                      </div>
                    </div>
                  </div>

                  {/* Progress Line */}
                  <div className="relative mb-4">
                    <div className="absolute top-0 left-6 right-6 h-1 bg-gray-200 rounded-full"></div>
                    <div className="absolute top-0 left-6 right-6 h-1 bg-red-500 rounded-full"></div>

                    {/* Progress Dots */}
                    <div className="flex justify-between relative">
                      <div className="w-3 h-3 bg-red-500 rounded-full ml-4.5"></div>
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-4.5"></div>
                    </div>
                  </div>

                  {/* Labels Row */}
                  <div className="flex justify-between text-center">
                    <div className="flex-1">
                      <div className="text-xs font-medium text-gray-900 mb-1">Order Placed</div>
                      <div className="text-xs text-gray-500">June 02th, 2025</div>
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-medium text-gray-900 mb-1">Order Packed</div>
                      <div className="text-xs text-gray-500">June 02th, 2025</div>
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-medium text-gray-900 mb-1">In Transit</div>
                      <div className="text-xs text-gray-500">June 02th, 2025</div>
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-medium text-gray-900 mb-1">Out for delivery</div>
                      <div className="text-xs text-gray-500">June 02th, 2025</div>
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-medium text-gray-900 mb-1">Delivered</div>
                      <div className="text-xs text-gray-500">June 02th, 2025</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Items from the order section */}
              <div className="px-6 py-6">
                <h4 className="text-base font-semibold text-gray-900 mb-6">Items from the order</h4>

                {/* Table Header */}
                <div className="grid grid-cols-12 gap-4 mb-4 pb-2 border-b border-gray-100">
                  <div className="col-span-6 text-sm font-medium text-gray-500">Product</div>
                  <div className="col-span-3 text-center text-sm font-medium text-gray-500">Quantity</div>
                  <div className="col-span-3 text-right text-sm font-medium text-gray-500">Total Price</div>
                </div>

                {/* Product Row */}
                <div className="grid grid-cols-12 gap-4 items-start py-4">
                  {/* Product Info */}
                  <div className="col-span-6 flex items-start space-x-4">
                    {/* Product Image */}
                    <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src="/shirt1.jpg"
                        alt="Cotton T-Shirt"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">Cotton T-Shirt</h5>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div>T-Shirt</div>
                        <div>Color: Green</div>
                        <div>Size: 3-seater</div>
                        <div>Delivery: 06 June, 2025</div>
                      </div>
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="col-span-3 text-center">
                    <span className="text-base font-medium text-gray-900">1</span>
                  </div>

                  {/* Price */}
                  <div className="col-span-3 text-right">
                    <div className="text-base font-semibold text-gray-900">৳ 649</div>
                    <div className="text-xs text-gray-500 mt-1">Includes GST</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
