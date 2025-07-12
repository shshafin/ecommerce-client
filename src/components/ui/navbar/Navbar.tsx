"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavigationLinks from "./NavigationLinks";
import OrderTracking from "./OrderTracking";
import MobileNav from "./MobileNav";
import CategorySidebar from "@/components/modules/home/hero-section/CategorySidebar";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  return (
    <div className="w-full bg-gray-200">
      <header className="sticky top-0 z-50 w-full border-b bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
          <div className="flex h-16 items-center justify-between lg:justify-normal lg:gap-6">
            {/* Mobile: ALL CATEGORIES toggle button (left) */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                className="bg-[#353535] text-white px-4 py-2 rounded flex items-center gap-2 text-sm font-medium">
                {isCategoriesOpen ? (
                  <X className="w-4 h-4" />
                ) : (
                  <Menu className="w-4 h-4" />
                )}
                ALL CATEGORIES
              </button>
            </div>

            {/* Desktop: ALL CATEGORIES label (left) */}
            <div className="hidden lg:flex justify-start bg-[#353535] text-white px-6 py-4 items-center gap-2 rounded min-w-[240px]">
              <Menu className="w-4 h-4" />
              <span className="font-medium text-sm">ALL CATEGORIES</span>
            </div>

            {/* Desktop: Navigation links (center) */}
            <div className="hidden lg:flex flex-1 justify-center">
              <NavigationLinks />
            </div>

            {/* Right side: OrderTracking + Hamburger (hamburger only on <lg) */}
            <div className="flex items-center gap-2">
              <OrderTracking />
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden ml-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Mobile only: CategorySidebar below toggle button */}
          {isCategoriesOpen && (
            <div className="block lg:hidden mt-2">
              <CategorySidebar />
            </div>
          )}

          {/* Mobile only: Navigation links menu */}
          {isMobileMenuOpen && (
            <div className="block lg:hidden mt-2">
              <MobileNav close={() => setIsMobileMenuOpen(false)} />
            </div>
          )}
        </div>
      </header>
    </div>
  );
}
