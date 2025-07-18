"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { CustomCheckbox } from "@/components/ui/check-box";
import { Slider } from "@/components/ui/slider";

export function ShoptFilter() {
  const [priceRange, setPriceRange] = useState([349, 5549]);
  const [sizesExpanded, setSizesExpanded] = useState(true);
  const [colorsExpanded, setColorsExpanded] = useState(true);
  const [selectedSizes, setSelectedSizes] = useState({
    "xl-xxl": true,
    l: false,
    m: false,
    s: false,
  });

  const sizes = [
    { id: "xl-xxl", label: "Extra Large (XL & XXL)" },
    { id: "l", label: "Large (L)" },
    { id: "m", label: "Medium (M)" },
    { id: "s", label: "Small (S)" },
  ];

  const colors = [
    { id: "black", label: "Black", color: "bg-black" },
    { id: "blue", label: "Blue", color: "bg-blue-600" },
    { id: "green", label: "Green", color: "bg-green-500" },
    { id: "yellow", label: "Yellow", color: "bg-yellow-400" },
    { id: "indigo", label: "Indigo", color: "bg-indigo-500" },
    { id: "light-blue", label: "Light-Blue", color: "bg-sky-300" },
    { id: "red", label: "Red", color: "bg-red-500" },
  ];

  const handleSizeChange = (sizeId: string, checked: boolean) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [sizeId]: checked,
    }));
  };

  return (
    <div className="w-70 bg-gray-100 p-4 pl-10 h-full">
      {/* Price Filter */}
      <div className="mb-8">
        <h3 className="font-semibold text-lg mb-6 text-gray-900">Price</h3>

        {/* Colorful Price Slider */}
        <div className="mb-6">
          <div className="relative">
            <div className="h-2 bg-gradient-to-r from-blue-400 via-green-400 to-red-400 rounded-full mb-4"></div>
            <div className="relative -mt-6">
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={6000}
                min={300}
                step={50}
                className="relative z-10"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-700 mb-4">
          <span className="font-medium">
            Price: ₹{priceRange[0]} - ₹{priceRange[1]}
          </span>
           <button className="bg-white py-1 px-2 cursor-pointer hover:bg-gray-100 text-black font-medium rounded">
          Filter
        </button>
        </div>

       
      </div>

      {/* Sizes Filter with Custom Checkboxes */}
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
                  checked={selectedSizes[size.id as keyof typeof selectedSizes]}
                  onCheckedChange={(checked) =>
                    handleSizeChange(size.id, checked)
                  }
                />
                <label
                  htmlFor={size.id}
                  className="text-sm text-gray-700 cursor-pointer font-medium hover:text-gray-900 transition-colors"
                >
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
                <div
                  className={`w-5 h-5 rounded-full ${color.color} border-2 border-gray-300 cursor-pointer hover:border-gray-400 transition-colors`}
                ></div>
                <label className="text-sm text-gray-700 cursor-pointer font-medium hover:text-gray-900 transition-colors">
                  {color.label}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
