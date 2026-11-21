"use client";

import { useState } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import KookyHeroSection from "@/components/KookyHeroSection";
import CookiesSection from "@/components/CookiesSection";
import BestSellersSection from "@/components/BestSellersSection";
import MenuBoardSection from "@/components/MenuBoardSection";
import GoodStuffSection from "@/components/GoodStuffSection";
import JournalSection from "@/components/JournalSection";
import KookyFooter from "@/components/KookyFooter";
import { ShoppingBag, X, Check, ArrowRight, Trash2 } from "lucide-react";

export default function KookyKindPage() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const handleAddToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
    setToastMessage(`Added "${item.name}" to your cart! 🍪`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleRemoveFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const totalCartPrice = cartItems.reduce((acc, item) => {
    const num = parseFloat(item.price?.replace("$", "") || "4.50");
    return acc + num;
  }, 0);

  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-[#EFECE6] text-[#2C1810] font-sans selection:bg-[#F3A218] selection:text-[#181514]">
        
        {/* 1. DEEP RUST CRIMSON NAVBAR */}
        <Navbar 
          cartCount={cartItems.length} 
          onOpenCart={() => setIsCartOpen(true)} 
        />

        {/* 2. DEEP RUST HERO & TORN PAPER BOTTOM EDGE */}
        <KookyHeroSection 
          onAddToCart={handleAddToCart}
          onOpenCart={() => setIsCartOpen(true)}
        />

        {/* 3. KOOKY'S MENU (CIRCULAR ICONS & 5-CARD PROMO BENTO GRID) */}
        <CookiesSection onAddToCart={handleAddToCart} />

        {/* 4. OUR BEST SELLER (4-CARD CAROUSEL WITH FEATURED RUST RED CARD) */}
        <BestSellersSection onAddToCart={handleAddToCart} />

        {/* 5. KOOKY'S MENU BOARD (DARK SLATE CHALKBOARD WITH WOOD CUTTING BOARD & DOTTED LEADERS) */}
        <MenuBoardSection />

        {/* 6. TESTIMONIALS (PARCHMENT QUOTE CARDS WITH AVATARS) */}
        <GoodStuffSection />

        {/* 7. NEWS & CAREER (4 EDITORIAL CARDS) & SUBSCRIBE 10% DISCOUNT STRIP */}
        <JournalSection />

        {/* 8. DARK CHARCOAL SLATE WOOD FOOTER WITH TORN PAPER TOP EDGE */}
        <KookyFooter />

        {/* TOAST NOTIFICATION */}
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-50 bg-[#181514] text-[#EFECE6] rounded-2xl px-5 py-3.5 shadow-xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300 border border-white/10">
            <div className="w-6 h-6 rounded-full bg-[#F3A218] text-[#181514] flex items-center justify-center flex-shrink-0">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </div>
            <div className="text-xs sm:text-sm font-bold">
              {toastMessage}
            </div>
          </div>
        )}

        {/* CART SLIDEOVER DRAWER */}
        {isCartOpen && (
          <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs animate-in fade-in duration-300">
            <div 
              className="absolute inset-0 cursor-pointer" 
              onClick={() => setIsCartOpen(false)} 
            />

            <div className="relative w-full max-w-md bg-[#EFECE6] h-full p-6 sm:p-8 flex flex-col justify-between shadow-2xl z-10 overflow-hidden">
              
              {/* Drawer Header */}
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-[#2C1810]/10">
                  <div className="flex items-center gap-2">
                    <span className="font-['Lilita_One'] text-2xl font-normal uppercase text-[#2C1810]">
                      Your Cookie Box ({cartItems.length})
                    </span>
                  </div>

                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="w-8 h-8 rounded-full bg-white hover:bg-[#BF3017] hover:text-white flex items-center justify-center text-[#2C1810] transition-colors cursor-pointer shadow-xs"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Free Shipping Pill */}
                <div className="py-4">
                  <div className="p-3 rounded-2xl bg-[#F3A218]/40 border border-[#F3A218] text-xs font-bold text-[#2C1810] flex items-center justify-between">
                    <span>{cartItems.length >= 4 ? "🎉 Free Warm Hearth Delivery Unlocked!" : `Add ${4 - cartItems.length} more cookies for Free Delivery`}</span>
                    <span className="bg-[#BF3017] text-white font-['Lilita_One'] text-xs px-2 py-0.5 rounded-full">
                      {Math.min(100, Math.round((cartItems.length / 4) * 100))}%
                    </span>
                  </div>
                </div>

                {/* Items List */}
                {cartItems.length === 0 ? (
                  <div className="text-center py-20 space-y-4">
                    <div className="w-14 h-14 mx-auto rounded-full bg-[#F3A218] flex items-center justify-center text-[#181514]">
                      <ShoppingBag className="w-6 h-6 stroke-[2]" />
                    </div>
                    <h4 className="font-['Lilita_One'] text-2xl font-normal text-[#2C1810] uppercase">
                      Your Box is Empty
                    </h4>
                    <p className="text-xs text-[#2C1810]/70 max-w-xs mx-auto">
                      Add some warm molten cookies from the menu to fill your box!
                    </p>
                    <a
                      href="#menu"
                      onClick={() => setIsCartOpen(false)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#BF3017] text-white font-['Lilita_One'] text-xs uppercase tracking-wider mt-2 shadow-xs hover:bg-[#9C2A12]"
                    >
                      <span>Explore Menu</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ) : (
                  <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-1">
                    {cartItems.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-white shadow-xs flex items-center justify-between gap-4"
                      >
                        <div className="space-y-0.5">
                          <h4 className="font-['Lilita_One'] text-base uppercase text-[#2C1810]">
                            {item.name}
                          </h4>
                          <span className="text-xs font-bold text-[#BF3017]">
                            {item.price || "$4.50"}
                          </span>
                        </div>

                        <button
                          onClick={() => handleRemoveFromCart(idx)}
                          className="w-7 h-7 rounded-full flex items-center justify-center text-[#2C1810]/40 hover:text-red-500 hover:bg-[#EFECE6] transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Drawer Footer */}
              {cartItems.length > 0 && (
                <div className="pt-6 border-t border-[#2C1810]/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#2C1810]/70">
                      Subtotal
                    </span>
                    <span className="font-['Lilita_One'] text-3xl font-normal text-[#BF3017]">
                      ${totalCartPrice.toFixed(2)}
                    </span>
                  </div>

                  <button
                    onClick={() => alert(`Checking out with ${cartItems.length} cookies ($${totalCartPrice.toFixed(2)})! Warm batch dispatched! 🍪🔥`)}
                    className="w-full py-3.5 rounded-xl bg-[#BF3017] hover:bg-[#9C2A12] text-white font-['Lilita_One'] text-base uppercase tracking-wider transition-all cursor-pointer shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Checkout Now (${totalCartPrice.toFixed(2)})</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

            </div>
          </div>
        )}

      </main>
    </SmoothScroll>
  );
}
