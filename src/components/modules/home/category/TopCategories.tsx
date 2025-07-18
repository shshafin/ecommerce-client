import Image from "next/image";

const categories = [
  { name: "Category 1", image: "/slider1.webp" },
  { name: "Category 2", image: "/slider2.webp" },
  { name: "Category 3", image: "/slider3.webp" },
  { name: "Category 4", image: "/slider1.webp" },
  { name: "Category 5", image: "/slider2.webp" },
  { name: "Category 6", image: "/slider3.webp" },
  { name: "Category 7", image: "/slider1.webp" },
  { name: "Category 8", image: "/slider2.webp" },
  { name: "Category 9", image: "/slider3.webp" },
  { name: "Category 10", image: "/slider1.webp" },
];

export default function TopCategories() {
  return (
    <div className="px-4 sm:px-6 lg:px-0">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 py-4 border-b border-gray-300 text-gray-900">
          Top Categories
        </h2>

        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-10 gap-4 py-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="text-center">
              <div className="w-16 h-16 mx-auto bg-gray-100 rounded-md overflow-hidden drop-shadow-[0_4px_3px_rgba(128,128,128,0.3)]">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                  placeholder="empty"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
