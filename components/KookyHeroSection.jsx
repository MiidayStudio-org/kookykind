"use client";

import Image from "next/image";
import { ArrowRight, Flame } from "lucide-react";
import TornPaperEdge from "@/components/TornPaperEdge";

export default function KookyHeroSection({ onAddToCart, onOpenCart }) {
  return (
    <section id="hero" className="relative w-full bg-[#BF3017] text-white pt-6 pb-0 overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#D94520]/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-6 pb-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Bold White Chunky Headline & Promo */}
          <div className="lg:col-span-6 space-y-6 z-10">
            
            {/* Headline */}
            <div className="space-y-1">
              <h1 className="font-['Lilita_One'] text-5xl sm:text-7xl lg:text-[84px] leading-[0.95] tracking-wide text-white uppercase drop-shadow-sm">
                Molten Choc <br />
                Cookie
              </h1>
            </div>

            {/* Promo Subtitle */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F3A218] block">
                WEEKEND SPECIAL DEAL • HEARTH OVEN FRESH
              </span>
              <div className="font-['Lilita_One'] text-2xl sm:text-3xl tracking-wide text-white flex items-center gap-2">
                <span>Buy 3 Get 4th</span>
                <span className="text-[#F3A218] underline decoration-4 underline-offset-4">FREE!</span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-white/85 font-medium leading-relaxed max-w-md">
              We hand-chop giant Belgian chocolate blocks, slow-brown cultured French butter, and bake with volcanic molten cores. Crisp craggy rims and zero boring rules.
            </p>

            {/* Yellow / Amber Order Now Button */}
            <div className="pt-2">
              <a
                href="#menu"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#F3A218] hover:bg-[#D98E12] text-[#181514] font-['Lilita_One'] text-base uppercase tracking-wider transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.2)] hover:scale-105 active:scale-95"
              >
                <span>ORDER NOW</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>

          </div>

          {/* Right Column: Floating Exploded Food Visual */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[380px] sm:min-h-[460px]">
            
            {/* Main Floating Cookie / Hero Composition */}
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              
              {/* Center giant cookie */}
              <div className="relative w-72 h-72 sm:w-84 sm:h-84 rounded-full overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.35)] border-4 border-white/20 z-10 transform -rotate-6 hover:rotate-0 transition-transform duration-700">
                <Image
                  src="/images/kooky-hero.jpg"
                  alt="Exploded artisanal chocolate cookie with molten core"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center scale-105"
                />
              </div>

              {/* Floating ingredient pieces around cookie */}
              {/* Top flying cookie bun piece */}
              <div className="absolute -top-6 right-6 w-28 h-28 rounded-full overflow-hidden shadow-lg border-2 border-white/30 z-20 transform rotate-12 animate-bounce duration-1000">
                <Image
                  src="/images/cookie-stack.jpg"
                  alt="Crunchy craggy cookie rim"
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </div>

              {/* Bottom left flying molten piece */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full overflow-hidden shadow-lg border-2 border-white/30 z-20 transform -rotate-12">
                <Image
                  src="/images/good-ingredients.jpg"
                  alt="Belgian chocolate chunk and sea salt"
                  fill
                  sizes="100px"
                  className="object-cover"
                />
              </div>

              {/* Floating Golden Badge */}
              <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-[#F3A218] text-[#181514] font-['Lilita_One'] text-xs sm:text-sm px-4 py-2 rounded-full uppercase tracking-wider shadow-md z-30">
                Fresh Batch Daily ✦
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Torn paper bottom transition tearing into Parchment Sand (#EFECE6) */}
      <TornPaperEdge fill="#EFECE6" direction="bottom" />

    </section>
  );
}
