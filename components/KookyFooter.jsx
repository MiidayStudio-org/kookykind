"use client";

import { useState } from "react";
import { ArrowUp, Phone, Mail, MapPin } from "lucide-react";
import TornPaperEdge from "@/components/TornPaperEdge";

export default function KookyFooter() {
  const [footerEmail, setFooterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!footerEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setFooterEmail("");
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="relative w-full bg-[#181514] text-[#EFECE6] pt-0 pb-12 overflow-hidden">
      
      {/* Torn Paper Top Edge from Parchment into Dark Slate (#EFECE6 -> #181514) */}
      <TornPaperEdge fill="#EFECE6" direction="top" className="-mt-1" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-10 space-y-12 relative z-10">
        
        {/* Main 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Contact Us & Socials (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-['Lilita_One'] text-xl uppercase tracking-wider text-white">
              Contact Us
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-white/75 font-medium">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F3A218] flex-shrink-0" />
                <span className="font-bold text-white">(212) 555-KOOK</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F3A218] flex-shrink-0" />
                <span>hello@kookykind.com</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F3A218] flex-shrink-0 mt-0.5" />
                <span>482 Broome St, SoHo, NY 10013</span>
              </div>
            </div>

            {/* Social Circle Icons */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-[#2A2320] hover:bg-[#F3A218] hover:text-[#181514] text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X / Twitter"
                className="w-8 h-8 rounded-full bg-[#2A2320] hover:bg-[#F3A218] hover:text-[#181514] text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-[#2A2320] hover:bg-[#F3A218] hover:text-[#181514] text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.667 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-[#2A2320] hover:bg-[#F3A218] hover:text-[#181514] text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Opening Hours (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-['Lilita_One'] text-xl uppercase tracking-wider text-white">
              Opening Hours
            </h4>
            <div className="space-y-2 text-xs text-white/75 font-medium">
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span>Mon – Thu</span>
                <span className="font-bold text-white">9:00 AM – 10:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span>Fri – Sat</span>
                <span className="font-bold text-[#F3A218]">9:00 AM – 12:00 AM</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span>Sunday</span>
                <span className="font-bold text-white">10:00 AM – 9:00 PM</span>
              </div>
              <p className="text-[11px] text-white/50 pt-1 italic">
                * Hearth oven runs hot all day. Late night pickup available.
              </p>
            </div>
          </div>

          {/* Col 3: Information Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-['Lilita_One'] text-xl uppercase tracking-wider text-white">
              Information
            </h4>
            <ul className="space-y-2 text-xs text-white/75 font-medium">
              <li><a href="#hero" className="hover:text-[#F3A218] transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-[#F3A218] transition-colors">Kooky&apos;s Menu</a></li>
              <li><a href="#bestsellers" className="hover:text-[#F3A218] transition-colors">Best Sellers</a></li>
              <li><a href="#menuboard" className="hover:text-[#F3A218] transition-colors">Menu Board</a></li>
              <li><a href="#journal" className="hover:text-[#F3A218] transition-colors">News &amp; Career</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter Box (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-['Lilita_One'] text-xl uppercase tracking-wider text-white">
              Newsletter
            </h4>
            <p className="text-xs text-white/75 leading-relaxed">
              Subscribe for secret drops and hearth oven batch alerts.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                value={footerEmail}
                onChange={(e) => setFooterEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#2A2320] text-xs text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-[#F3A218]"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-[#F3A218] hover:bg-[#D98E12] text-[#181514] font-['Lilita_One'] text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                {subscribed ? "THANK YOU!" : "SUBSCRIBE"}
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            &copy; {new Date().getFullYear()} KOOKY KIND Inc. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 font-bold text-[#F3A218] hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
