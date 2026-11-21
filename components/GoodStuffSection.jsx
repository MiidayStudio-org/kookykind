"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "Truly one of the most incredible artisanal cookies in New York City. The craggy, deeply caramelized rim paired with the molten, volcanic Valrhona chocolate core is pure perfection. The Molten Choc Cookie is an absolute 10/10 masterpiece!",
    author: "Sarah Jenkins",
    role: "Verified Cookie Addict • SoHo, NYC",
    avatar: "/images/kooky-hero.jpg",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "We ordered the Party Dozen Pack for our design studio sprint and every single cookie vanished in under 5 minutes. The Ceremonial Matcha Marshmallow and Salted Caramel Pretzel are on another level. Pure genius!",
    author: "Marcus Vance",
    role: "Design Director • Brooklyn, NY",
    avatar: "/images/bakery-story.jpg",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "I used to think cookies were all the same until I bit into Kooky's Campfire S'mores with house-torched fluff. Hand-chopped chocolate chunks, zero artificial junk, and delivered warm to my door. Unbeatable.",
    author: "Elena Rostova",
    role: "Food & Travel Columnist",
    avatar: "/images/good-ingredients.jpg",
    rating: 5,
  },
];

export default function GoodStuffSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? testimonials.length - 2 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev >= testimonials.length - 2 ? 0 : prev + 1));
  };

  const visibleTestimonials = [
    testimonials[activeIdx % testimonials.length],
    testimonials[(activeIdx + 1) % testimonials.length],
  ];

  return (
    <section id="testimonials" className="w-full bg-[#EFECE6] text-[#2C1810] py-16 px-4 sm:px-8 lg:px-12 relative">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Section Heading */}
        <div className="text-center space-y-2">
          <h2 className="font-['Lilita_One'] text-3xl sm:text-5xl font-normal uppercase tracking-wide text-[#2C1810]">
            Testimonials
          </h2>
          <div className="w-16 h-1 bg-[#F3A218] mx-auto rounded-full" />
        </div>

        {/* Carousel Container with Arrows on Left & Right */}
        <div className="relative flex items-center justify-between gap-4">
          
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous testimonials"
            className="hidden sm:flex w-10 h-10 rounded-lg bg-white/80 hover:bg-white text-[#2C1810] items-center justify-center shadow-xs hover:shadow-md transition-all cursor-pointer flex-shrink-0"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Testimonial Cards Grid (2 speech cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {visibleTestimonials.map((item, idx) => (
              <div
                key={item.id + "-" + idx}
                className="rounded-2xl bg-white/85 backdrop-blur-xs p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all border border-[#2C1810]/5 space-y-6"
              >
                {/* Speech Quote Text */}
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-[#F3A218]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F3A218]" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-[#2C1810]/85 font-medium leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info & Avatar */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#2C1810]/10">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#F3A218] flex-shrink-0">
                    <Image
                      src={item.avatar}
                      alt={item.author}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-['Lilita_One'] text-sm sm:text-base uppercase tracking-wide text-[#2C1810]">
                      {item.author}
                    </h4>
                    <p className="text-[11px] text-[#2C1810]/60 font-medium">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next testimonials"
            className="hidden sm:flex w-10 h-10 rounded-lg bg-[#F3A218] hover:bg-[#D98E12] text-[#181514] items-center justify-center shadow-xs hover:shadow-md transition-all cursor-pointer flex-shrink-0"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>

        </div>

      </div>
    </section>
  );
}
