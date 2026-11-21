"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

export default function JournalSection() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const articles = [
    {
      id: 1,
      title: "The 47 Batches: Dialing Molten Centers",
      date: "Nov 18, 2026",
      category: "Bakehouse Story",
      summary: "How we tested dozens of chocolate viscosities to create our volcanic molten core.",
      image: "/images/kooky-hero.jpg",
    },
    {
      id: 2,
      title: "Secret Midnight Drops: How To Get In",
      date: "Nov 12, 2026",
      category: "Exclusive Drops",
      summary: "Fresh hot hearth batches released exclusively to VIP club subscribers.",
      image: "/images/cookie-stack.jpg",
    },
    {
      id: 3,
      title: "Single-Origin Guittard Chocolate Story",
      date: "Nov 04, 2026",
      category: "Ingredients",
      summary: "Why ethical direct-trade 70% dark cacao creates the deepest caramelized profile.",
      image: "/images/good-ingredients.jpg",
    },
    {
      id: 4,
      title: "Join The Bakehouse Team (We're Hiring!)",
      date: "Careers",
      category: "Hiring Now",
      summary: "Passionate pastry bakers, hearth operators, and packaging wizards needed in SoHo.",
      image: "/images/bakery-story.jpg",
    },
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail("");
    }, 4000);
  };

  return (
    <section id="journal" className="w-full bg-[#EFECE6] text-[#2C1810] pt-12 pb-16 px-4 sm:px-8 lg:px-12 space-y-16">
      
      {/* 1. NEWS & CAREER SECTION */}
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Section Heading */}
        <div className="text-center space-y-2">
          <h2 className="font-['Lilita_One'] text-3xl sm:text-5xl font-normal uppercase tracking-wide text-[#2C1810]">
            News &amp; Career
          </h2>
          <div className="w-16 h-1 bg-[#F3A218] mx-auto rounded-full" />
        </div>

        {/* 4 Cards Grid (matching reference image) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl bg-white p-4 sm:p-5 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-3">
                {/* Image */}
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#E2DDD3]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-[#181514]/80 text-[#F3A218] font-['Lilita_One'] text-[10px] px-2.5 py-0.5 rounded-full uppercase">
                    {item.date}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#BF3017]">
                    {item.category}
                  </span>
                  <h3 className="font-['Lilita_One'] text-base sm:text-lg uppercase text-[#2C1810] group-hover:text-[#BF3017] transition-colors leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#2C1810]/70 line-clamp-2 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </div>

              <div className="pt-3 flex items-center gap-1 text-[11px] font-bold text-[#BF3017] group-hover:gap-2 transition-all">
                <span>Read Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* 2. SUBSCRIBE & GET 10% DISCOUNT STRIP */}
      <div className="max-w-4xl mx-auto pt-4 text-center space-y-6">
        <div className="space-y-2">
          <h3 className="font-['Lilita_One'] text-3xl sm:text-4xl uppercase tracking-wide text-[#2C1810]">
            Subscribe &amp; Get 10% Discount
          </h3>
          <p className="text-xs sm:text-sm text-[#2C1810]/70 font-medium max-w-lg mx-auto">
            Get secret drop alerts, limited edition weekend flavors, and 10% off your first hearth box.
          </p>
        </div>

        {/* Input Form Pill */}
        <form
          onSubmit={handleNewsletterSubmit}
          className="max-w-xl mx-auto relative flex flex-col sm:flex-row items-center gap-2 p-1.5 bg-white rounded-full shadow-md border border-[#2C1810]/10"
        >
          <input
            type="email"
            value={newsletterEmail}
            onChange={(e) => setNewsletterEmail(e.target.value)}
            placeholder="Enter your email address..."
            required
            className="w-full px-5 py-3 rounded-full text-xs sm:text-sm text-[#2C1810] placeholder:text-[#2C1810]/40 focus:outline-none"
          />

          <button
            type="submit"
            className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#F3A218] hover:bg-[#D98E12] text-[#181514] font-['Lilita_One'] text-xs sm:text-sm uppercase tracking-wider transition-colors flex-shrink-0 cursor-pointer flex items-center justify-center gap-1.5 shadow-sm"
          >
            {isSubscribed ? (
              <>
                <Check className="w-4 h-4 stroke-[3]" />
                <span>SUBSCRIBED!</span>
              </>
            ) : (
              <span>SUBSCRIBE NOW</span>
            )}
          </button>
        </form>

        <p className="text-[10px] text-[#2C1810]/50">
          No spam, ever. Unsubscribe at any time with one click.
        </p>
      </div>

    </section>
  );
}
