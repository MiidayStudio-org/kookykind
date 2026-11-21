"use client";

export default function TornPaperEdge({
  fill = "#EFECE6",
  direction = "bottom",
  className = "",
  flip = false,
}) {
  // Detailed, organic jagged torn paper edge path
  const pathD =
    "M0,0 L0,28 C25,24 45,36 68,26 C95,18 120,38 150,22 C180,35 205,25 235,16 C265,36 295,24 320,18 C350,34 375,22 405,18 C435,32 460,24 490,16 C520,38 545,26 575,20 C605,34 630,22 660,18 C690,36 715,24 745,18 C775,32 805,22 830,16 C860,38 890,26 915,20 C945,34 970,22 1000,18 C1030,36 1060,24 1085,18 C1115,32 1145,22 1175,16 C1190,22 1195,26 1200,28 L1200,60 L0,60 Z";

  return (
    <div
      className={`relative w-full overflow-hidden pointer-events-none select-none z-20 ${
        direction === "top" ? "rotate-180 -mb-[1px]" : "-mt-[1px]"
      } ${className}`}
      style={{ lineHeight: 0 }}
    >
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className={`w-full h-8 sm:h-12 md:h-16 ${flip ? "scale-x-[-1]" : ""}`}
        style={{ fill }}
      >
        <path d={pathD} />
      </svg>
    </div>
  );
}
