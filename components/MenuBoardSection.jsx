"use client";

import Image from "next/image";
import TornPaperEdge from "@/components/TornPaperEdge";

const combos = [
  { name: "Kooky 6-Pack Box", price: "$24.00" },
  { name: "Party Dozen Pack", price: "$42.00" },
  { name: "Midnight Munchie Duo", price: "$9.00" },
  { name: "Family Sampler (8-Pack)", price: "$32.00" },
  { name: "Baker's Secret Choice Box", price: "$26.00" },
];

const snacksDips = [
  { name: "Warm Belgian Fudge Dip", price: "$3.00" },
  { name: "Toasted Marshmallow Fluff", price: "$3.00" },
  { name: "House Salted Caramel Jar", price: "$5.50" },
  { name: "Extra Flaky Sea Salt Cup", price: "$1.00" },
  { name: "Mini Crispy Cookie Bites", price: "$4.50" },
];

const hearthCookies = [
  { name: "OG Chocolate Chunk", price: "$4.50" },
  { name: "Brown Butter Pecan Crunch", price: "$4.75" },
  { name: "Campfire Smoked S'mores", price: "$4.75" },
  { name: "Black Forest Truffle", price: "$5.00" },
  { name: "Ceremonial Matcha Marshmallow", price: "$4.75" },
  { name: "Salted Caramel Pretzel Crisp", price: "$4.50" },
  { name: "Red Velvet Molten Cream Cheese", price: "$4.75" },
  { name: "Peanut Butter Lava Volcano", price: "$4.75" },
  { name: "Breakfast Toasted Oat Crisp", price: "$4.25" },
];

const coldDrinks = [
  { name: "Cold Whole Organic Farm Milk", price: "$3.50" },
  { name: "Oat M*lk Nitro Cold Brew", price: "$5.00" },
  { name: "Uji Ceremonial Matcha Iced Latte", price: "$5.50" },
  { name: "Spiced Masala Chai Cold Foam", price: "$5.00" },
];

export default function MenuBoardSection() {
  return (
    <section id="menuboard" className="relative w-full bg-[#181514] text-[#EFECE6] pt-0 pb-16 overflow-hidden">
      
      {/* Torn Paper Edge from previous section (#EFECE6 -> #181514) */}
      <TornPaperEdge fill="#EFECE6" direction="top" className="-mt-1" />

      {/* Subtle wood / chalk dust ambient texture */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 pt-8 pb-12 relative z-10 space-y-12">
        
        {/* Top Header: Wooden Cutting Board Motif */}
        <div className="text-center relative flex flex-col items-center">
          
          {/* Wood Board Visual with Cookies on top */}
          <div className="relative w-64 sm:w-80 h-32 sm:h-36 mb-2 flex items-center justify-center">
            {/* Board Background */}
            <div className="absolute inset-0 rounded-3xl bg-[#2A1D17] border-2 border-[#4A3528] shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform -rotate-1 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-30 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.05)_50%,transparent_100%)]" />
            </div>

            {/* Cookie & Garnish on Board */}
            <div className="relative z-10 flex items-center justify-center gap-4">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-xl border-2 border-white/20 transform -rotate-6">
                <Image
                  src="/images/cookie-stack.jpg"
                  alt="Hearth baked cookie"
                  fill
                  sizes="100px"
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#F3A218] block">
                  DAILY BAKE LIST
                </span>
                <span className="font-['Lilita_One'] text-sm sm:text-base text-white block">
                  HEARTH FIRED
                </span>
              </div>
            </div>
          </div>

          {/* Section Title */}
          <h2 className="font-['Lilita_One'] text-3xl sm:text-5xl uppercase tracking-wide text-white drop-shadow-md">
            Kooky&apos;s Menu Board
          </h2>
          <div className="w-16 h-1 bg-[#F3A218] mt-2 rounded-full" />
        </div>

        {/* 2-Column Chalkboard Menu Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-4">
          
          {/* Left Column (5 Cols): SPECIAL COMBO & SNACKS/DIPS */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Special Combo Box (With Chalk Border) */}
            <div className="p-6 sm:p-7 rounded-2xl border-2 border-dashed border-white/30 bg-black/25 backdrop-blur-xs space-y-5">
              <div className="text-center pb-2 border-b border-white/15">
                <h3 className="font-['Lilita_One'] text-xl sm:text-2xl uppercase tracking-wider text-[#F3A218]">
                  SPECIAL COMBO
                </h3>
              </div>

              <div className="space-y-4">
                {combos.map((item, idx) => (
                  <div key={idx} className="flex items-baseline justify-between text-xs sm:text-sm group">
                    <span className="font-semibold text-white/90 group-hover:text-[#F3A218] transition-colors">
                      {item.name}
                    </span>
                    <span className="flex-grow mx-2 border-b border-dotted border-white/25 relative -top-1" />
                    <span className="font-['Lilita_One'] text-sm sm:text-base text-[#F3A218] tracking-wider">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Snacks & Dips Box */}
            <div className="p-6 sm:p-7 rounded-2xl border border-white/15 bg-black/20 space-y-5">
              <div className="text-center pb-2 border-b border-white/15">
                <h3 className="font-['Lilita_One'] text-xl sm:text-2xl uppercase tracking-wider text-[#EFECE6]">
                  SNACKS &amp; DIPS
                </h3>
              </div>

              <div className="space-y-4">
                {snacksDips.map((item, idx) => (
                  <div key={idx} className="flex items-baseline justify-between text-xs sm:text-sm group">
                    <span className="font-semibold text-white/80 group-hover:text-white transition-colors">
                      {item.name}
                    </span>
                    <span className="flex-grow mx-2 border-b border-dotted border-white/20 relative -top-1" />
                    <span className="font-['Lilita_One'] text-sm sm:text-base text-[#F3A218] tracking-wider">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (7 Cols): HEARTH COOKIES & COLD DRINKS */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Hearth Cookies Box */}
            <div className="p-6 sm:p-8 rounded-2xl border border-white/15 bg-black/20 space-y-5">
              <div className="text-center pb-2 border-b border-white/15">
                <h3 className="font-['Lilita_One'] text-xl sm:text-2xl uppercase tracking-wider text-[#EFECE6]">
                  HEARTH COOKIES
                </h3>
              </div>

              <div className="space-y-3.5">
                {hearthCookies.map((item, idx) => (
                  <div key={idx} className="flex items-baseline justify-between text-xs sm:text-sm group">
                    <span className="font-semibold text-white/90 group-hover:text-[#F3A218] transition-colors">
                      {item.name}
                    </span>
                    <span className="flex-grow mx-2 border-b border-dotted border-white/20 relative -top-1" />
                    <span className="font-['Lilita_One'] text-sm sm:text-base text-[#F3A218] tracking-wider">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cold Drinks Box */}
            <div className="p-6 sm:p-7 rounded-2xl border border-white/15 bg-black/20 space-y-5">
              <div className="text-center pb-2 border-b border-white/15">
                <h3 className="font-['Lilita_One'] text-xl sm:text-2xl uppercase tracking-wider text-[#EFECE6]">
                  COLD DRINKS
                </h3>
              </div>

              <div className="space-y-4">
                {coldDrinks.map((item, idx) => (
                  <div key={idx} className="flex items-baseline justify-between text-xs sm:text-sm group">
                    <span className="font-semibold text-white/80 group-hover:text-white transition-colors">
                      {item.name}
                    </span>
                    <span className="flex-grow mx-2 border-b border-dotted border-white/20 relative -top-1" />
                    <span className="font-['Lilita_One'] text-sm sm:text-base text-[#F3A218] tracking-wider">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Torn Paper Edge exiting into Parchment (#181514 -> #EFECE6) */}
      <TornPaperEdge fill="#EFECE6" direction="bottom" className="-mb-1" />
    </section>
  );
}
