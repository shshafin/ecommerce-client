"use client";
import { useState } from "react";

import HeroBanner from "./HeroBanner";
import ServiceFeatures from "./ServiceFeature";
import CategorySidebar from "./CategorySidebar";

export default function MainContent() {
  const [isCategoriesOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex gap-4">
        {/* Left Column - Categories Sidebar */}
        <div
          className={`w-full lg:w-64 flex-shrink-0 ${
            isCategoriesOpen ? "block" : "hidden lg:block"
          }`}>
          <CategorySidebar />
        </div>

        {/* Right Column - Banner and Features */}
        <div
          className={`flex-1 ${
            isCategoriesOpen ? "hidden lg:block" : "block"
          }`}>
          {/* Hero Banner */}
          <HeroBanner />

          {/* Service Features */}
          <ServiceFeatures />
        </div>
      </div>
    </div>
  );
}
