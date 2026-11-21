"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Flame, Sparkles, Bike, Package, Clock } from "lucide-react";
import TornPaperEdge from "@/components/TornPaperEdge";

export default function CookiesSection({ onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState("molten");

  const categories = [
    { id: "all", label: "All Cookies", icon: "/images/kooky-hero.jpg" },
    { id: "molten", label: "Molten Centers", icon: "/images/cookie-stack.jpg" },
    { id: "stuffed", label: "Stuffed & Jammy", icon: "/images/good-ingredients.jpg" },
    { id: "pretzel", label: "Nutty Pretzels", icon: "/images/bakery-story.jpg" },
    { id: "vegan", label: "Plant & Vegan", icon: "/images/good-ingredients.jpg" },
    { id: "sips", label: "Cold Brew & Milk", icon: "/images/kooky-hero.jpg" },
  ];

  return (
    <section id="menu" className="w-full bg-[#EFECE6] text-[#2C1810] pt-12 pb-16 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Heading: Pesto's Menu -> Kooky's Menu */}
        <div className="text-center space-y-2">
          <h2 className="font-['Lilita_One'] text-3xl sm:text-5xl font-normal uppercase tracking-wide text-[#2C1810]">
            Kooky&apos;s Menu
          </h2>
          <div className="w-16 h-1 bg-[#F3A218] mx-auto rounded-full" />
        </div>

        {/* Circular Menu Category Icons Row */}
        <div className="flex items-center justify-center gap-4 sm:gap-8 overflow-x-auto no-scrollbar py-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="flex flex-col items-center gap-2 group cursor-pointer flex-shrink-0"
              >
                {/* Circle Icon with White Highlight Ring on active */}
                <div
                  className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden transition-all duration-300 p-1 ${
                    isActive
                      ? "bg-white shadow-[0_6px_20px_rgba(0,0,0,0.15)] scale-110 ring-4 ring-[#F3A218]"
                      : "bg-[#E2DDD3] hover:bg-white/80"
                  }`}
                >
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src={cat.icon}
                      alt={cat.label}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Category Label */}
                <span
                  className={`text-xs font-bold transition-colors ${
                    isActive ? "text-[#BF3017] underline decoration-2 underline-offset-4" : "text-[#2C1810]/70 group-hover:text-[#2C1810]"
                  }`}
                >
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Promo Bento Grid (Exact layout from the reference image) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 pt-4">
          
          {/* Card 1: Fast Delivery (Red Bento #9C2A12) - 5 cols */}
          <div className="md:col-span-5 rounded-2xl bg-[#9C2A12] text-white p-6 sm:p-8 flex items-center justify-between overflow-hidden shadow-sm relative group">
            <div className="space-y-2 z-10 max-w-[200px]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#F3A218]">
                SAME-DAY BAKE
              </span>
              <h3 className="font-['Lilita_One'] text-2xl sm:text-3xl uppercase leading-tight">
                FAST <br />
                DELIVERY
              </h3>
              <p className="text-[11px] text-white/80 font-medium">
                Fresh out of the hearth to your door in 30 min.
              </p>
            </div>

            {/* Scooter / Delivery Visual */}
            <div className="relative w-36 h-36 flex-shrink-0 flex items-center justify-center">
              <div className="w-28 h-28 rounded-full bg-[#BF3017] flex items-center justify-center shadow-inner">
                <Bike className="w-14 h-14 text-white stroke-[1.8] transform -scale-x-100 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Card 2: Buy 1 Get 1 Free (Yellow/Orange #E59819) - 7 cols */}
          <div className="md:col-span-7 rounded-2xl bg-[#E59819] text-[#181514] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden shadow-sm relative group">
            <div className="space-y-2 z-10">
              <div className="inline-block bg-[#181514] text-white font-['Lilita_One'] text-[11px] px-3 py-1 rounded-full uppercase">
                BUY 1 GET 1 FREE
              </div>
              <h3 className="font-['Lilita_One'] text-3xl sm:text-4xl uppercase leading-tight text-[#181514]">
                CHOC CHUNK <br />
                DAYDREAM
              </h3>
              <p className="text-xs text-[#181514]/80 font-medium max-w-xs">
                Belgian chocolate boulders with sea salt crystals.
              </p>
              <button
                onClick={() => onAddToCart && onAddToCart({ id: 1, name: "Choc Chunk Daydream", price: "$4.50" })}
                className="mt-2 inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#181514] text-white text-xs font-bold hover:bg-[#9C2A12] transition-colors cursor-pointer"
              >
                <span>CLAIM DEAL</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Giant Product Cutout with Price Badge */}
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 flex-shrink-0 flex items-center justify-center">
              <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-lg border-2 border-white/60 group-hover:scale-105 transition-transform">
                <Image
                  src="/images/kooky-hero.jpg"
                  alt="Choc Chunk Daydream"
                  fill
                  sizes="180px"
                  className="object-cover"
                />
              </div>
              <div className="absolute top-2 left-2 bg-[#9C2A12] text-white font-['Lilita_One'] text-sm px-3 py-1.5 rounded-full shadow-md">
                $4.50
              </div>
            </div>
          </div>

          {/* Card 3: Double King Cheese / Fudge (Dark Chocolate #2A1A14) - 4 cols */}
          <div className="md:col-span-4 rounded-2xl bg-[#2A1A14] text-white p-6 flex flex-col justify-between overflow-hidden shadow-sm relative group">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#F3A218]">
                  DOUBLE MELT
                </span>
                <h3 className="font-['Lilita_One'] text-2xl uppercase text-white">
                  TRIPLE FUDGE
                </h3>
              </div>
              <div className="bg-[#F3A218] text-[#181514] font-['Lilita_One'] text-xs px-2.5 py-1 rounded-full">
                $4.50
              </div>
            </div>

            <div className="relative w-full h-36 my-2 rounded-xl overflow-hidden">
              <Image
                src="/images/cookie-stack.jpg"
                alt="Triple Fudge cookie stack"
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>

            <button
              onClick={() => onAddToCart && onAddToCart({ id: 5, name: "Midnight Triple Fudge", price: "$4.50" })}
              className="w-full py-2 bg-white/10 hover:bg-[#F3A218] hover:text-[#181514] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer text-center"
            >
              Add To Box
            </button>
          </div>

          {/* Card 4: Cookie Day (White Parchment #FFFFFF) - 4 cols */}
          <div className="md:col-span-4 rounded-2xl bg-white text-[#181514] p-6 flex flex-col justify-between overflow-hidden shadow-sm relative group">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#BF3017]">
                  COOKIE DAY
                </span>
                <h3 className="font-['Lilita_One'] text-2xl uppercase text-[#181514]">
                  SAMPLER BOX
                </h3>
              </div>
              <div className="bg-[#BF3017] text-white font-['Lilita_One'] text-xs px-2.5 py-1 rounded-full">
                $16
              </div>
            </div>

            <div className="relative w-full h-36 my-2 rounded-xl overflow-hidden">
              <Image
                src="/images/good-ingredients.jpg"
                alt="4-Pack Sampler Box"
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>

            <button
              onClick={() => onAddToCart && onAddToCart({ id: 99, name: "4-Pack Sampler Box", price: "$16.00" })}
              className="w-full py-2 bg-[#EFECE6] hover:bg-[#BF3017] hover:text-white text-[#181514] text-xs font-bold rounded-xl transition-colors cursor-pointer text-center"
            >
              Add To Box
            </button>
          </div>

          {/* Card 5: Pesto Tacos / Matcha Meltdown (Matcha Green #6E9C48) - 4 cols */}
          <div className="md:col-span-4 rounded-2xl bg-[#6E9C48] text-white p-6 flex flex-col justify-between overflow-hidden shadow-sm relative group">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FAF7F0]">
                  UJI CEREMONIAL
                </span>
                <h3 className="font-['Lilita_One'] text-2xl uppercase text-white">
                  MATCHA MELT
                </h3>
              </div>
              <div className="bg-white text-[#6E9C48] font-['Lilita_One'] text-xs px-2.5 py-1 rounded-full">
                $4.75
              </div>
            </div>

            <div className="relative w-full h-36 my-2 rounded-xl overflow-hidden">
              <Image
                src="/images/bakery-story.jpg"
                alt="Matcha Marshmallow cookie"
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>

            <button
              onClick={() => onAddToCart && onAddToCart({ id: 2, name: "Matcha Marshmallow Meltdown", price: "$4.75" })}
              className="w-full py-2 bg-white/20 hover:bg-white hover:text-[#6E9C48] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer text-center"
            >
              Add To Box
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
