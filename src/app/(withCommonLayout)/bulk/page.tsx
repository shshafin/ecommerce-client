"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function BulkOrderPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    address: "",
    productName: "",
    productQty: "",
    fabricType: "",
    fabricGsm: "",
    fabricColor: "",
    timeFrame: "",
    notes: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Bulk Order Data:", formData)
    // Handle form submission here
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          {/* Title */}
          <h1 className="text-2xl font-bold border-b-1 border-gray-300 pb-4 text-black text-center mb-8">Bulk Order</h1>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Row 1: Full Name and Mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="fullName" className="text-sm font-medium text-gray-700 mb-2 block">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  className="h-12 bg-gray-50 border-gray-200 rounded-lg"
                />
              </div>
              <div>
                <Label htmlFor="mobile" className="text-sm font-medium text-gray-700 mb-2 block">
                  Mobile
                </Label>
                <Input
                  id="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={(e) => handleInputChange("mobile", e.target.value)}
                  className="h-12 bg-gray-50 border-gray-200 rounded-lg"
                />
              </div>
            </div>

            {/* Row 2: Email (full width) */}
            <div>
              <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="h-12 bg-gray-50 border-gray-200 rounded-lg"
              />
            </div>

            {/* Row 3: Address (full width) */}
            <div>
              <Label htmlFor="address" className="text-sm font-medium text-gray-700 mb-2 block">
                Address
              </Label>
              <Input
                id="address"
                type="text"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                className="h-12 bg-gray-50 border-gray-200 rounded-lg"
              />
            </div>

            {/* Row 4: Product Name/Code and Product QTY */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="productName" className="text-sm font-medium text-gray-700 mb-2 block">
                  Product Name / Code
                </Label>
                <Input
                  id="productName"
                  type="text"
                  value={formData.productName}
                  onChange={(e) => handleInputChange("productName", e.target.value)}
                  className="h-12 bg-gray-50 border-gray-200 rounded-lg"
                />
              </div>
              <div>
                <Label htmlFor="productQty" className="text-sm font-medium text-gray-700 mb-2 block">
                  Product QTY
                </Label>
                <Input
                  id="productQty"
                  type="number"
                  value={formData.productQty}
                  onChange={(e) => handleInputChange("productQty", e.target.value)}
                  className="h-12 bg-gray-50 border-gray-200 rounded-lg"
                />
              </div>
            </div>

            {/* Row 5: Fabric Type and Fabric GSM */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="fabricType" className="text-sm font-medium text-gray-700 mb-2 block">
                  Fabric Type
                </Label>
                <Input
                  id="fabricType"
                  type="text"
                  value={formData.fabricType}
                  onChange={(e) => handleInputChange("fabricType", e.target.value)}
                  className="h-12 bg-gray-50 border-gray-200 rounded-lg"
                />
              </div>
              <div>
                <Label htmlFor="fabricGsm" className="text-sm font-medium text-gray-700 mb-2 block">
                  Fabric GSM
                </Label>
                <Input
                  id="fabricGsm"
                  type="text"
                  value={formData.fabricGsm}
                  onChange={(e) => handleInputChange("fabricGsm", e.target.value)}
                  className="h-12 bg-gray-50 border-gray-200 rounded-lg"
                />
              </div>
            </div>

            {/* Row 6: Fabric Color and Time frame */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="fabricColor" className="text-sm font-medium text-gray-700 mb-2 block">
                  Fabric Color
                </Label>
                <Input
                  id="fabricColor"
                  type="text"
                  value={formData.fabricColor}
                  onChange={(e) => handleInputChange("fabricColor", e.target.value)}
                  className="h-12 bg-gray-50 border-gray-200 rounded-lg"
                />
              </div>
              <div>
                <Label htmlFor="timeFrame" className="text-sm font-medium text-gray-700 mb-2 block">
                  Time frame
                </Label>
                <Input
                  id="timeFrame"
                  type="text"
                  value={formData.timeFrame}
                  onChange={(e) => handleInputChange("timeFrame", e.target.value)}
                  className="h-12 bg-gray-50 border-gray-200 rounded-lg"
                />
              </div>
            </div>

            {/* Row 7: Notes (full width) */}
            <div>
              <Label htmlFor="notes" className="text-sm font-medium text-gray-700 mb-2 block">
                Notes
              </Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => handleInputChange("notes", e.target.value)}
                className="min-h-[120px] bg-gray-50 border-gray-200 rounded-lg resize-none"
                placeholder="Additional notes or requirements..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <Button type="submit" className="bg-black hover:bg-gray-800 text-white px-12 py-3 rounded-lg font-medium">
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
