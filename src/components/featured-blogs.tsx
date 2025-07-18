import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Share } from "lucide-react";

interface FeaturedBlogProps {
  id: string;
  title: string;
  image: string;
  date: string;
  excerpt: string;
  slug: string;
}

export function FeaturedBlog({
  title,
  image,
  date,
  excerpt,
  slug,
}: FeaturedBlogProps) {
  return (
    <div className="bg-white overflow-hidden mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Featured Image */}
        <div className="relative aspect-[4/3] lg:aspect-auto bg-gray-100">
          <Image
            src={image || "/placeholder.svg?height=400&width=500"}
            alt={title}
            fill
            className="object-cover"
          />

          {/* Overlay Badge */}
          <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded text-sm font-medium">
            MENS PREMIUM T-SHIRT
          </div>
        </div>

        {/* Featured Content */}
        <div className="p-8 flex flex-col justify-center">
          <h1 className="font-bold text-2xl lg:text-3xl text-gray-900 mb-4 leading-tight">
            <Link
              href={`/blog/${slug}`}
              className="hover:text-blue-600 transition-colors"
            >
              {title}
            </Link>
          </h1>

          <p className="text-sm text-gray-500 mb-4">{date}</p>

          {/* Social Share */}
          <div className="mb-6">
            <p className="text-sm text-gray-700 mb-3">Share Post :</p>
            <div className="flex items-center space-x-3">
              <button className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                <Instagram className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Share className="w-4 h-4" />
              </button>
            </div>
          </div>

          <p className="text-gray-600 mb-6 leading-relaxed">{excerpt}</p>

          <Link href={`/blog/${slug}`}>
            <Button
              variant="outline"
              className="w-fit text-gray-700 border-gray-300 hover:bg-gray-50 bg-transparent"
            >
              Read more
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
