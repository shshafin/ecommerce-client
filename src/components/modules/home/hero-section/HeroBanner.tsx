"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const bannerImages = [
  { id: 1, image: "/slider1.webp", alt: "Eid Collection Banner" },
  { id: 2, image: "/slider2.webp", alt: "Summer Sale Banner" },
  { id: 3, image: "/slider3.webp", alt: "Electronics Banner" },
];

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000); // Auto change every 4s
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[360px] xl:h-[385px] w-full bg-gradient-to-r from-blue-100 to-purple-100 overflow-hidden ">
      <div className="absolute inset-0">
        {bannerImages.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}>
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-cover w-full h-full"
              sizes="100vw"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
