import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface BlogCardProps {
  id: string;
  title: string;
  image: string;
  date: string;
  excerpt?: string;
  slug: string;
  badge?: string;
}

export function BlogCard({
  title,
  image,
  date,
  slug,
  badge = "MENS PREMIUM T-SHIRT",
}: BlogCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
      {/* Blog Image */}
      <div className="relative aspect-[4/3] bg-gray-100">
        <Image
          src={image || "/placeholder.svg?height=300&width=400"}
          alt={title}
          fill
          className="object-cover"
        />

        {/* Overlay Badge - positioned like in your image */}
        <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wide">
          {badge}
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="font-semibold text-gray-900 mb-3 text-base leading-tight hover:text-blue-600 transition-colors">
          <Link href={`/blog/${slug}`} className="line-clamp-3">
            {title}
          </Link>
        </h3>

        {/* Date */}
        <p className="text-sm text-gray-500 mb-4">{date}</p>

        {/* Read More Button */}
        <Link href={`/blog/${slug}`}>
          <Button
            variant="outline"
            size="sm"
            className="text-gray-700 border-gray-300 hover:bg-gray-50 bg-transparent text-sm px-4 py-2"
          >
            Read more
          </Button>
        </Link>
      </div>
    </div>
  );
}
