"use client";

import { useState } from "react";
import { BlogCard } from "@/components/blog-card";
import { Pagination } from "@/components/ui/pagination";
import { FeaturedBlog } from "@/components/featured-blogs";

// Sample blog data - latest blog first
const featuredBlog = {
  id: "1",
  title:
    "Mens Premium Blank T-shirt - Green | Organic Ringspun Combed Compact Cotton | 100% Cotton Basic T-shirt Combo Pack",
  image: "/shirt2.jpg",
  date: "June 02, 2025",
  excerpt:
    "MMLY Fashion Mens Premium Quality T-shirt that offers a much smoother, silky feel and more structured, well-tailored fit than the regular t-shirts.",
  slug: "mens-premium-green-tshirt-organic-cotton",
};

// Generate sample blog posts
const generateBlogPosts = (page: number) => {
  const postsPerPage = 6;
  const startIndex = (page - 1) * postsPerPage;

  return Array.from({ length: postsPerPage }, (_, i) => ({
    id: `${startIndex + i + 2}`,
    title: `Mens Premium T-shirt - Collection ${
      startIndex + i + 2
    } | Organic Ringspun Combed Compact Cotton | 100% Cotton Basic T-shirt Combo Pack`,
    image: "/shirt2.jpg",
    date: `May ${30 - (startIndex + i)}, 2025`,
    slug: `mens-premium-tshirt-${startIndex + i + 2}`,
    badge: "MENS PREMIUM T-SHIRT",
  }));
};

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 90;
  const blogPosts = generateBlogPosts(currentPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Scroll to top when page changes
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-6 max-w-7xl">

        {/* Featured Blog Post - Only show on first page */}
        {currentPage === 1 && <FeaturedBlog {...featuredBlog} />}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          className="bg-gray-100 py-4 rounded-lg"
        />
      </div>
    </div>
  );
}
