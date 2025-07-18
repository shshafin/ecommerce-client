import HeroBanner from "@/components/modules/home/hero-section/HeroBanner";
import { ShopCard } from "@/components/modules/shop/shop-card";
import { ShoptFilter } from "@/components/modules/shop/shop-filter";

// Sample product data
const products = [
  {
    id: "1",
    name: "100% Cotton Basic T-shirt Combo Pack",
    image: "/shirt1.jpg",
    originalPrice: 649,
    discountedPrice: 449,
    discount: 24,
    rating: 4.5,
    reviews: 128,
  },
  {
    id: "2",
    name: "100% Cotton Basic T-shirt Combo Pack",
    image: "/shirt2.jpg",
    originalPrice: 699,
    discountedPrice: 449,
    discount: 34,
    rating: 4.5,
    reviews: 95,
  },
  {
    id: "3",
    name: "100% Cotton Basic T-shirt Combo Pack",
    image: "/shirt1.jpg",
    originalPrice: 699,
    discountedPrice: 449,
    discount: 34,
    rating: 4.5,
    reviews: 203,
  },
  {
    id: "4",
    name: "100% Cotton Basic T-shirt Combo Pack",
    image: "/shirt2.jpg",
    originalPrice: 749,
    discountedPrice: 449,
    discount: 33,
    rating: 4.5,
    reviews: 156,
  },
  {
    id: "5",
    name: "100% Cotton Basic T-shirt Combo Pack",
    image: "/shirt1.jpg",
    originalPrice: 599,
    discountedPrice: 399,
    discount: 33,
    rating: 4.3,
    reviews: 89,
  },
  {
    id: "6",
    name: "100% Cotton Basic T-shirt Combo Pack",
    image: "/shirt2.jpg",
    originalPrice: 799,
    discountedPrice: 549,
    discount: 31,
    rating: 4.6,
    reviews: 234,
  },
  {
    id: "7",
    name: "100% Cotton Basic T-shirt Combo Pack",
    image: "/shirt1.jpg",
    originalPrice: 649,
    discountedPrice: 449,
    discount: 24,
    rating: 4.5,
    reviews: 128,
  },
  {
    id: "8",
    name: "100% Cotton Basic T-shirt Combo Pack",
    image: "/shirt2.jpg",
    originalPrice: 699,
    discountedPrice: 449,
    discount: 34,
    rating: 4.5,
    reviews: 95,
  },
  {
    id: "9",
    name: "100% Cotton Basic T-shirt Combo Pack",
    image: "/shirt2.jpg",
    originalPrice: 699,
    discountedPrice: 449,
    discount: 34,
    rating: 4.5,
    reviews: 203,
  },
  {
    id: "10",
    name: "100% Cotton Basic T-shirt Combo Pack",
    image: "/shirt2.jpg",
    originalPrice: 749,
    discountedPrice: 449,
    discount: 33,
    rating: 4.5,
    reviews: 156,
  },
  {
    id: "11",
    name: "100% Cotton Basic T-shirt Combo Pack",
    image: "/shirt2.jpg",
    originalPrice: 599,
    discountedPrice: 399,
    discount: 33,
    rating: 4.3,
    reviews: 89,
  },
  {
    id: "12",
    name: "100% Cotton Basic T-shirt Combo Pack",
    image: "/shirt2.jpg",
    originalPrice: 799,
    discountedPrice: 549,
    discount: 31,
    rating: 4.6,
    reviews: 234,
  },
];

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Filter Sidebar */}
        <ShoptFilter />

        {/* Main Content Area */}
        <div className="flex-1 min-h-screen p-4 border-gray-500 border-l">
          {/* Hero Banner */}
          <HeroBanner />

          {/* Products Section */}

          {/* Product Grid */}
          <div className="grid grid-cols-1 pt-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {products.map((product) => (
              <ShopCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
