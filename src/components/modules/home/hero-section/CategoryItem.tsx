"use client";
import { ChevronRight, ChevronDown } from "lucide-react";

interface ChildCategory {
  name: string;
  icon: React.ReactNode;
}

interface Category {
  name: string;
  icon: React.ReactNode;
  children: ChildCategory[];
}

interface CategoryItemProps {
  category: Category;
  isOpen: boolean;
  onToggle: () => void;
  setOpenCategory: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function CategoryItem({
  category,
  isOpen,
  onToggle,
  setOpenCategory,
}: CategoryItemProps) {
  return (
    <div
      className="relative group"
      onMouseEnter={() => {
        if (window.innerWidth >= 1024) setOpenCategory(category.name);
      }}
      onMouseLeave={() => {
        if (window.innerWidth >= 1024) setOpenCategory(null);
      }}>
      {/* Parent category */}
      <div
        className="px-4 py-3 flex items-center justify-between border-b border-gray-100 cursor-pointer"
        onClick={() => {
          if (window.innerWidth < 1024) onToggle();
        }}>
        <span className="text-sm text-gray-700 flex items-center gap-2">
          <span className="flex-shrink-0">{category.icon}</span>
          {category.name}
        </span>

        {isOpen ? (
          <ChevronDown className="w-4 h-4 text-gray-400 lg:hidden" />
        ) : (
          <ChevronRight className="w-4 h-4 text-gray-400" />
        )}
      </div>

      {/* Mobile submenu - shown only if open */}
      {isOpen && (
        <div className="block lg:hidden border-t border-gray-100 bg-white">
          <div className="py-2 px-4">
            {category.children.map((child) => (
              <div
                key={child.name}
                className="py-1 flex items-center gap-2 text-sm text-gray-600 hover:text-black cursor-pointer">
                <span className="flex-shrink-0">{child.icon}</span>
                <span>{child.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Desktop submenu */}
      <div className="hidden lg:absolute lg:left-full lg:top-0 lg:w-48 lg:bg-white lg:border lg:border-gray-200 lg:rounded-sm lg:shadow-lg lg:z-50 lg:group-hover:block">
        <div className="py-2">
          {category.children.map((child) => (
            <div
              key={child.name}
              className="px-4 py-2 flex items-center gap-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-600">
              <span className="flex-shrink-0">{child.icon}</span>
              <span>{child.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
