"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"
import HeroBanner from "../home/hero-section/HeroBanner"
import { CustomCheckbox } from "@/components/ui/check-box"

export function ProductFilter() {
  const [priceRange, setPriceRange] = useState([349, 5549])
  const [sizesExpanded, setSizesExpanded] = useState(true)
  const [colorsExpanded, setColorsExpanded] = useState(true)

  const sizes = [
    { id: "xl-xxl", label: "Extra Large (XL & XXL)", checked: true },
    { id: "l", label: "Large (L)", checked: false },
    { id: "m", label: "Medium (M)", checked: false },
    { id: "s", label: "Small (S)", checked: false },
  ]

  const colors = [
    { id: "black", label: "Black", color: "bg-black" },
    { id: "blue", label: "Blue", color: "bg-blue-600" },
    { id: "green", label: "Green", color: "bg-green-500" },
    { id: "yellow", label: "Yellow", color: "bg-yellow-400" },
    { id: "indigo", label: "Indigo", color: "bg-indigo-500" },
    { id: "light-blue", label: "Light-Blue", color: "bg-sky-300" },
    { id: "red", label: "Red", color: "bg-red-500" },
  ]

  return (
    <div className="w-64 bg-white p-6 border-r border-gray-200 h-screen">
      {/* Price Filter */}
      <div className="mb-8">
        <h3 className="font-semibold text-lg mb-6 text-gray-900">Price</h3>

        {/* Colorful Price Slider */}
        <div className="mb-6">
          <div className="relative">
            {/* Colorful background track */}
            <div className="h-2 bg-gradient-to-r from-blue-400 via-green-400  to-red-400 rounded-full mb-4"></div>

            {/* Custom range input styling */}
            <div className="relative -mt-6">
            <HeroBanner/>
            </div>
          </div>
        </div>

        {/* Price Display */}
        <div className="flex items-center justify-between text-sm text-gray-700 mb-4">
          <span className="font-medium">
            Price: ₹{priceRange[0]} - ₹{priceRange[1]}
          </span>
        </div>

        {/* Black and White Filter Button */}
        <Button className="w-full bg-black hover:bg-gray-800 text-white font-medium py-2 px-4 rounded">Filter</Button>
      </div>

      {/* Sizes Filter */}
      <div className="mb-8">
        <div
          className="flex items-center justify-between cursor-pointer mb-4"
          onClick={() => setSizesExpanded(!sizesExpanded)}
        >
          <h3 className="font-semibold text-lg text-gray-900">Sizes</h3>
          {sizesExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-600" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-600" />
          )}
        </div>
        {sizesExpanded && (
          <div className="space-y-4">
            {sizes.map((size) => (
              <div key={size.id} className="flex items-center space-x-3">
                <CustomCheckbox               
                  id={size.id}
                  defaultChecked={size.checked}
                  className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                />
                <label htmlFor={size.id} className="text-sm text-gray-700 cursor-pointer font-medium">
                  {size.label}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Colors Filter */}
      <div className="mb-8">
        <div
          className="flex items-center justify-between cursor-pointer mb-4"
          onClick={() => setColorsExpanded(!colorsExpanded)}
        >
          <h3 className="font-semibold text-lg text-gray-900">Color</h3>
          {colorsExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-600" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-600" />
          )}
        </div>
        {colorsExpanded && (
          <div className="space-y-4">
            {colors.map((color) => (
              <div key={color.id} className="flex items-center space-x-3">
                <div className={`w-5 h-5 rounded-full ${color.color} border-2 border-gray-300 cursor-pointer`}></div>
                <label className="text-sm text-gray-700 cursor-pointer font-medium">{color.label}</label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
