"use client";

import { useState } from "react";
import { MapPin, ArrowRight, Check, Navigation } from "lucide-react";

export default function FindUsSection() {
  const [activeLocationId, setActiveLocationId] = useState("soho");
  const [cityInput, setCityInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [dropRequested, setDropRequested] = useState(false);

  const locations = [
    {
      id: "soho",
      name: "SoHo Flagship Store",
      address: "142 Spring Street, New York, NY 10012",
      hours: "Mon – Sun: 8:00 AM – 11:00 PM",
      status: "Warm Batch Out Now",
      transit: "Subway: Spring St (C, E)",
    },
    {
      id: "brooklyn",
      name: "Brooklyn Bakehouse & Lab",
      address: "86 North 6th Street, Brooklyn, NY 11249",
      hours: "Tue – Sun: 8:30 AM – 10:00 PM",
      status: "Fresh Pretzels Ready",
      transit: "Subway: Bedford Ave (L)",
    },
    {
      id: "west-village",
      name: "West Village Pop-Up",
      address: "320 Bleecker Street, New York, NY 10014",
      hours: "Wed – Sun: 11:00 AM – 9:00 PM",
      status: "Baking Now at 2 PM",
      transit: "Subway: Christopher St (1)",
    },
  ];

  const currentLoc = locations.find((l) => l.id === activeLocationId) || locations[0];

  const handleCitySubmit = (e) => {
    e.preventDefault();
    if (!cityInput || !emailInput) return;
    setDropRequested(true);
    setTimeout(() => {
      setCityInput("");
      setEmailInput("");
    }, 4000);
  };

  return (
    <section id="locations" className="w-full bg-[#FAF7F0] px-4 sm:px-8 lg:px-12 py-8 text-[#2C1810]">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left: Flagship Location Selector (7 Cols) */}
          <div className="lg:col-span-7 rounded-[32px] sm:rounded-[36px] bg-white p-8 sm:p-10 shadow-xs flex flex-col justify-between">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#2C1810]/10">
                <div className="space-y-0.5">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#2C1810]/70">
                    FIND US IRL
                  </span>
                  <h3 className="font-['Fredoka'] text-2xl sm:text-3xl font-bold uppercase text-[#2C1810]">
                    Bakehouses & Counters
                  </h3>
                </div>

                <div className="flex gap-2">
                  {locations.map((loc) => (
                    <button
                      key={loc.id}
                      onClick={() => setActiveLocationId(loc.id)}
                      className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                        activeLocationId === loc.id
                          ? "bg-[#FED766] text-[#2C1810]"
                          : "bg-[#FAF7F0] text-[#2C1810]/60 hover:text-[#2C1810]"
                      }`}
                    >
                      {loc.name.split(" ")[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Location Info */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#84BD58] bg-[#FAF7F0] px-3.5 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-[#84BD58] animate-pulse" />
                  <span>{currentLoc.status}</span>
                </div>

                <div className="space-y-1">
                  <h4 className="font-bold text-lg text-[#2C1810]">
                    {currentLoc.name}
                  </h4>
                  <p className="text-sm text-[#2C1810]/80">
                    {currentLoc.address}
                  </p>
                  <p className="text-xs text-[#2C1810]/60 pt-1">
                    Hours: {currentLoc.hours} • {currentLoc.transit}
                  </p>
                </div>
              </div>

            </div>

            <div className="pt-6 border-t border-[#2C1810]/10 flex items-center justify-between">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(currentLoc.address)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#2C1810] hover:opacity-75 transition-opacity"
              >
                <Navigation className="w-4 h-4 text-[#2C1810]" />
                <span>Open in Maps</span>
              </a>
              <span className="text-xs font-semibold text-[#2C1810]/50">
                Fresh daily batches
              </span>
            </div>
          </div>

          {/* Right: Want Kooky in your city card (5 Cols) */}
          <div className="lg:col-span-5 rounded-[32px] sm:rounded-[36px] bg-[#FED766] p-8 sm:p-10 text-[#2C1810] flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#2C1810]">
                CITY VOTE
              </span>

              <h3 className="font-['Fredoka'] text-2xl sm:text-3xl font-bold uppercase text-[#2C1810]">
                Want Kooky Kind in your city?
              </h3>

              <p className="text-xs sm:text-sm text-[#2C1810]/80 font-medium">
                Vote for our next mobile oven drop or bakehouse counter.
              </p>

              {dropRequested ? (
                <div className="p-4 rounded-2xl bg-white text-[#2C1810] flex items-center gap-2 text-xs font-bold shadow-xs">
                  <Check className="w-4 h-4 text-[#84BD58] stroke-[3]" />
                  <span>Vote registered! We&apos;ll notify you when we pop up!</span>
                </div>
              ) : (
                <form onSubmit={handleCitySubmit} className="space-y-3 pt-1">
                  <input
                    type="text"
                    required
                    placeholder="Your city (e.g. Austin, London...)"
                    value={cityInput}
                    onChange={(e) => setCityInput(e.target.value)}
                    className="w-full bg-white rounded-xl px-4 py-2.5 text-xs text-[#2C1810] placeholder-[#2C1810]/40 focus:outline-hidden shadow-xs"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="w-full bg-white rounded-xl px-4 py-2.5 text-xs text-[#2C1810] placeholder-[#2C1810]/40 focus:outline-hidden shadow-xs"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-[#2C1810] hover:bg-[#1E100A] text-[#FAF7F0] text-xs font-bold tracking-wide transition-all shadow-xs cursor-pointer"
                  >
                    Submit Vote
                  </button>
                </form>
              )}
            </div>

            <div className="pt-4 text-[11px] text-[#2C1810]/60">
              Pop-ups completed in Austin, London & Chicago.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
