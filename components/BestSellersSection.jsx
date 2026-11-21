"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight, Star } from "lucide-react";
import TornPaperEdge from "@/components/TornPaperEdge";

const bestSellers = [
  {
    id: 1,
    name: "OG Chocolate Chunk",
    description: "Valrhona 70% dark chocolate & flaky Maldon sea salt",
    price: "$4.50",
    image: "/images/kooky-hero.jpg",
    isFeatured: false,
    rating: "4.9",
    reviews: "340+",
  },
  {
    id: 2,
    name: "Matcha Marshmallow",
    description: "Ceremonial Uji matcha, molten marshmallow center",
    price: "$4.75",
    image: "/images/cookie-stack.jpg",
    isFeatured: true,
    rating: "5.0",
    reviews: "520+",
  },
  {
    id: 3,
    name: "Salted Caramel Pretzel",
    description: "House-made dulce de leche & crushed salted pretzels",
    price: "$4.50",
    image: "/images/good-ingredients.jpg",
    isFeatured: false,
    rating: "4.8",
    reviews: "290+",
  },
  {
    id: 4,
    name: "Triple Fudge Brownie",
    description: "Rich black cocoa base, molten Valrhona ganache core",
    price: "$4.75",
    image: "/images/bakery-story.jpg",
    isFeatured: false,
    rating: "4.9",
    reviews: "410+",
  },
];

export default function BestSellersSection({ onAddToCart }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? bestSellers.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === bestSellers.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="bestsellers" className="w-full bg-[#EFECE6] text-[#2C1810] pt-10 pb-16 px-4 sm:px-8 lg:px-12 relative">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Section Header with Navigation Arrows */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-['Lilita_One'] text-3xl sm:text-5xl font-normal uppercase tracking-wide text-[#2C1810]">
              Our Best Seller
            </h2>
            <div className="w-16 h-1 bg-[#F3A218] mt-2 rounded-full" />
          </div>

          {/* Left / Right Carousel Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous best sellers"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/80 hover:bg-white text-[#2C1810] flex items-center justify-center shadow-xs hover:shadow-md transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next best sellers"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#F3A218] hover:bg-[#D98E12] text-[#181514] flex items-center justify-center shadow-xs hover:shadow-md transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* 4 Product Cards Grid (Matching reference layout with 1 featured red card) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {bestSellers.map((item) => {
            if (item.isFeatured) {
              // Featured Rust Red Card with torn bottom edge
              return (
                <div
                  key={item.id}
                  className="relative rounded-2xl bg-[#BF3017] text-white flex flex-col justify-between shadow-xl pt-6 px-6 pb-10 transition-transform duration-300 hover:-translate-y-1 group overflow-hidden"
                >
                  {/* Top Badge */}
                  <div className="flex items-center justify-between">
                    <span className="bg-[#F3A218] text-[#181514] font-['Lilita_One'] text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider">
                      ★ TOP RATED
                    </span>
                    <span className="text-xs text-white/90 font-bold flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-[#F3A218] text-[#F3A218]" />
                      {item.rating}
                    </span>
                  </div>

                  {/* Cookie Image */}
                  <div className="relative w-40 h-40 sm:w-44 sm:h-44 mx-auto my-4 rounded-full overflow-hidden shadow-2xl border-4 border-white/20 group-hover:scale-105 group-hover:rotate-3 transition-transform duration-500">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="200px"
                      className="object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="text-center space-y-1.5 z-10">
                    <h3 className="font-['Lilita_One'] text-xl uppercase tracking-wide text-white">
                      {item.name}
                    </h3>
                    <p className="text-[11px] text-white/80 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="font-['Lilita_One'] text-2xl text-[#F3A218] pt-1">
                      {item.price}
                    </div>
                  </div>

                  {/* Order Button */}
                  <div className="pt-4 z-10">
                    <button
                      onClick={() => onAddToCart && onAddToCart(item)}
                      className="w-full py-2.5 rounded-xl bg-[#6E9C48] hover:bg-[#5C853B] text-white font-['Lilita_One'] text-sm uppercase tracking-wider transition-all duration-200 shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <span>ADD TO CART</span>
                    </button>
                  </div>

                  {/* Ripped bottom edge for the featured card */}
                  <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
                    <svg viewBox="0 0 400 20" preserveAspectRatio="none" className="w-full h-4 fill-[#EFECE6]">
                      <path d="M0,0 L0,12 C30,8 60,18 90,10 C120,18 150,6 180,14 C210,6 240,16 270,10 C300,16 330,8 360,14 C380,8 395,12 400,10 L400,20 L0,20 Z" />
                    </svg>
                  </div>
                </div>
              );
            }

            // Standard White Card
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-white text-[#2C1810] p-6 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                {/* Rating */}
                <div className="flex items-center justify-end">
                  <span className="text-xs text-[#2C1810]/70 font-semibold flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-[#F3A218] text-[#F3A218]" />
                    {item.rating}
                  </span>
                </div>

                {/* Cookie Image */}
                <div className="relative w-36 h-36 sm:w-40 sm:h-40 mx-auto my-3 rounded-full overflow-hidden shadow-sm group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="180px"
                    className="object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="text-center space-y-1.5">
                  <h3 className="font-['Lilita_One'] text-lg sm:text-xl uppercase tracking-wide text-[#2C1810]">
                    {item.name}
                  </h3>
                  <p className="text-[11px] text-[#2C1810]/70 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="font-['Lilita_One'] text-xl text-[#BF3017] pt-1">
                    {item.price}
                  </div>
                </div>

                {/* Order Button (Yellow/Amber) */}
                <div className="pt-4">
                  <button
                    onClick={() => onAddToCart && onAddToCart(item)}
                    className="w-full py-2.5 rounded-xl bg-[#F3A218] hover:bg-[#D98E12] text-[#181514] font-['Lilita_One'] text-sm uppercase tracking-wider transition-all duration-200 shadow-xs cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>ADD TO CART</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Centered Button: See All Cookies */}
        <div className="text-center pt-2">
          <a
            href="#menuboard"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#181514] hover:bg-[#2A2320] text-white font-['Lilita_One'] text-sm uppercase tracking-wider transition-all duration-200 shadow-md hover:scale-105"
          >
            <span>SEE ALL COOKIES</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>

      </div>
    </section>
  );
}
