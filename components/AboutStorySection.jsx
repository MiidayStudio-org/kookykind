"use client";

import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export default function AboutStorySection() {
  return (
    <section id="story" className="w-full bg-[#FAF7F0] px-4 sm:px-8 lg:px-12 py-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Bottom Split Grid: Studio Flatlay on Left, Mint Sage Feature Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left: Studio Flatlay Photo Card */}
          <div className="lg:col-span-5 rounded-[32px] sm:rounded-[36px] overflow-hidden relative min-h-[360px] sm:min-h-[420px] shadow-sm bg-[#FED766]/30">
            <Image
              src="/images/kooky-hero.jpg"
              alt="Artisanal snack packs and overflowing ceramic bowl"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/40 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#FAF7F0]/90 backdrop-blur-xs text-[#2C1810]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#2C1810]/70 block">
                The Non-Recipe Manifesto
              </span>
              <span className="font-['Fredoka'] text-sm sm:text-base font-bold">
                Baked in small batches with zero boring rules.
              </span>
            </div>
          </div>

          {/* Right: Pastel Mint/Sage Green Card (#D4EAD8) with New Flavor Headline & Bowl */}
          <div className="lg:col-span-7 rounded-[32px] sm:rounded-[36px] bg-[#D4EAD8] p-8 sm:p-12 lg:p-14 text-[#2C1810] flex flex-col justify-between overflow-hidden relative">
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center z-10">
              
              {/* Text column */}
              <div className="md:col-span-7 space-y-4">
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#2C1810]/80">
                  NEW FLAVOR
                </span>

                <h3 className="font-['Fredoka'] text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.02] uppercase tracking-tight text-[#2C1810]">
                  CHEESY, <br />
                  CRUNCHY, <br />
                  IRRESISTIBLE
                </h3>

                <p className="text-xs sm:text-sm text-[#2C1810]/75 font-medium leading-relaxed max-w-sm">
                  Our new Cheddar & Dark Chocolate variety is here! All the bold molten flavor, none of the artificial guilt.
                </p>

                <div className="pt-2">
                  <a
                    href="#flavors"
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#2C1810] hover:bg-[#1E100A] text-[#FAF7F0] text-xs sm:text-sm font-bold tracking-wide transition-all shadow-sm"
                  >
                    <span>Shop now</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Big Yellow Ceramic Bowl Overflowing with Snacks & Radiating Sketch Accents */}
              <div className="md:col-span-5 relative flex items-center justify-center">
                
                {/* Hand-drawn sketch dashes effect around bowl */}
                <div className="absolute -top-3 -left-3 text-[#2C1810] font-mono text-xl select-none opacity-40">
                  \ | /
                </div>

                <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-[#FED766] p-2.5 shadow-[0_16px_32px_rgba(44,24,16,0.14)] overflow-hidden">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src="/images/cookie-stack.jpg"
                      alt="Overflowing bowl of golden crunchy treats"
                      fill
                      sizes="220px"
                      className="object-cover scale-110"
                    />
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
