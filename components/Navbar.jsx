"use client";

import { useState } from "react";
import { Search, ShoppingBag, Phone } from "lucide-react";

export default function Navbar({ cartCount = 0, onOpenCart }) {
  return (
    <header className="w-full bg-[#BF3017] text-white px-6 sm:px-10 lg:px-16 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Stylized Wordmark */}
        <a href="#" className="flex items-center gap-1.5 group select-none">
          <span className="font-['Lilita_One'] text-3xl sm:text-4xl tracking-wide text-white group-hover:scale-105 transition-transform">
            Kooky&apos;s
          </span>
          <span className="text-[#F3A218] text-2xl font-black">✦</span>
        </a>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide text-white/90">
          <a href="#hero" className="hover:text-[#F3A218] transition-colors">Home</a>
          <a href="#menu" className="hover:text-[#F3A218] transition-colors">Menu</a>
          <a href="#bestsellers" className="hover:text-[#F3A218] transition-colors">Best Sellers</a>
          <a href="#board" className="hover:text-[#F3A218] transition-colors">Menu Board</a>
          <a href="#journal" className="hover:text-[#F3A218] transition-colors">Blog</a>
          <a href="#contact" className="hover:text-[#F3A218] transition-colors">Contact</a>
        </nav>

        {/* Right: Phone pill + Search & Cart with Yellow Badge */}
        <div className="flex items-center gap-4 sm:gap-6">
          
          {/* Phone pill */}
          <a 
            href="tel:+12125555665" 
            className="hidden sm:flex items-center gap-2 text-xs font-bold text-white hover:text-[#F3A218] transition-colors"
          >
            <div className="w-6 h-6 rounded-full bg-[#F3A218] text-[#181514] flex items-center justify-center">
              <Phone className="w-3.5 h-3.5 fill-current" />
            </div>
            <span>(212) 555-KOOK</span>
          </a>

          {/* Search Icon */}
          <button 
            type="button" 
            title="Search" 
            className="text-white hover:text-[#F3A218] transition-colors cursor-pointer"
          >
            <Search className="w-5 h-5 stroke-[2.2]" />
          </button>

          {/* Cart Icon with Yellow Circular Badge */}
          <button
            type="button"
            onClick={onOpenCart}
            title="Cart"
            className="relative text-white hover:text-[#F3A218] transition-colors cursor-pointer flex items-center"
          >
            <ShoppingBag className="w-5 h-5 stroke-[2.2]" />
            <span className="absolute -top-2 -right-2.5 w-4.5 h-4.5 rounded-full bg-[#F3A218] text-[#181514] text-[10px] font-black flex items-center justify-center shadow-xs">
              {cartCount}
            </span>
          </button>

        </div>

      </div>
    </header>
  );
}
