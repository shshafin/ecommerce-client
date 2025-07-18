import { notFound } from "next/navigation";
import Image from "next/image";
import { Facebook, Linkedin, Instagram, Share } from "lucide-react";

// This would typically come from a CMS or database
const getBlogPost = (id: string) => {
  const posts = {
    "1": {
      id: "1",
      title:
        "Mens Premium Blank T-shirt - Green | Organic Ringspun Combed Compact Cotton | 100% Cotton Basic T-shirt Combo Pack",
      image: "/shirt2.jpg",
      date: "June 02, 2025",
      content: `MSLV Fashion Mens Premium Quality t-shirt that offers a much smoother, silky feel and more structured, mid-weight fit than the regular t-shirts. The t-shirts are made with finest quality Combed Compact Cotton , features astonishing ~175 GSM on just 26's cotton which gives a smooth and compact construction.

The compact finish guarantees that the t-shirt length and width will not change over wash or months of usage.`,
    },
    "2": {
      id: "2",
      title:
        "Mens Premium Blank T-shirt - Blue | Organic Ringspun Combed Compact Cotton | 100% Cotton Basic T-shirt Combo Pack",
      image: "/shirt2.jpg",
      date: "June 01, 2025",
      content: `Premium quality blue t-shirt with organic cotton blend for ultimate comfort and style. Made with the finest materials for long-lasting wear.

Our blue collection features the same premium quality construction with enhanced color retention and fade resistance.`,
    },
    "3": {
      id: "3",
      title:
        "Mens Premium T-shirt - Forest Green | Organic Ringspun Combed Compact Cotton | 100% Cotton Basic T-shirt Combo Pack",
      image: "/shirt2.jpg",
      date: "May 30, 2025",
      content: `Discover our forest-inspired t-shirt collection with premium organic cotton. Perfect for outdoor enthusiasts and nature lovers.

The forest green color is carefully selected to provide a natural, earthy tone that complements any wardrobe.`,
    },
  };

  return posts[id as keyof typeof posts] || null;
};

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.id);

  if (!post) {
    notFound();
  }

  return (
    <section>
      {/* Blog Post Container */}
      <article className="container py-4 mx-auto max-w-3xl min-h-screen bg-[#f0f0f0] overflow-hidden">
   
          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-justify leading-tight">
            {post.title}
          </h1>

          {/* Social Share */}
          <div className="flex items-center justify-center mb-8">
            <span className="text-sm text-gray-700 mr-4">Share Post :</span>
            <div className="flex items-center space-x-3">
              <button className="w-8 h-8 bg-blue-600 text-white rounded flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 bg-blue-800 text-white rounded flex items-center justify-center hover:bg-blue-900 transition-colors">
                <Linkedin className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 bg-pink-600 text-white rounded flex items-center justify-center hover:bg-pink-700 transition-colors">
                <Instagram className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 bg-gray-600 text-white rounded flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Share className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="flex justify-center mb-8">
            <div className="relative w-full max-w-md aspect-square overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover"
              />


            </div>
          </div>

          {/* Blog Content */}
          <div className="max-w-3xl mx-auto">
            <div className="text-gray-700 leading-relaxed space-y-6 text-base">
              {post.content.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-justify">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Date */}
            <div className=" py-6">
              <p className="text-gray-500 text-sm">{post.date}</p>
            </div>
        
        </div>
      </article>
    </section>
  );
}
