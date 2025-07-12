import { Heart, Search, UserCircle, ShoppingBag } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full bg-[#008B8B] border-b">
      <div className="max-w-7xl mx-auto px-4 py-7">
        {/* Mobile Layout */}
        <div className="flex flex-col gap-3 sm:hidden">
          {/* Top row: Logo and Icons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={160}
                height={50}
              />
            </div>
            <div className="flex items-center gap-5 text-white">
              <ShoppingBag
                className="w-6 h-6 cursor-pointer"
                strokeWidth={2.5}
              />
              <Heart
                className="w-6 h-6 cursor-pointer"
                strokeWidth={2.5}
              />
              <UserCircle
                className="w-6 h-6 cursor-pointer"
                strokeWidth={2.5}
              />
            </div>
          </div>
          {/* Bottom row: Search */}
          <div className="flex w-full items-center bg-white border border-gray-300 rounded-full px-3 py-2 focus-within:ring-2 focus-within:ring-[#008080]">
            <input
              type="text"
              placeholder="I'm searching for..."
              className="flex-grow text-sm focus:outline-none bg-transparent"
            />
            <Search className="w-5 h-5 text-gray-500" />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:flex flex-row items-center justify-between gap-3">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={160}
              height={50}
            />
          </div>
          {/* Middle: Search */}
          <div className="flex w-full sm:max-w-md items-center bg-white border border-gray-300 rounded-full px-3 py-2 focus-within:ring-2 focus-within:ring-[#008080]">
            <input
              type="text"
              placeholder="I'm searching for..."
              className="flex-grow text-sm focus:outline-none bg-transparent"
            />
            <Search className="w-5 h-5 text-gray-500" />
          </div>
          {/* Right: Icons */}
          <div className="flex items-center gap-5 text-white">
            <ShoppingBag
              className="w-6 h-6 cursor-pointer"
              strokeWidth={2.5}
            />
            <Heart
              className="w-6 h-6 cursor-pointer"
              strokeWidth={2.5}
            />
            <UserCircle
              className="w-6 h-6 cursor-pointer"
              strokeWidth={2.5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
