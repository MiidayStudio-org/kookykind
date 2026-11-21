import "./globals.css";
import { Lilita_One, Plus_Jakarta_Sans } from "next/font/google";

const lilita = Lilita_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-chunky",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "KOOKY KIND | Cookies That Don't Follow The Recipe",
  description:
    "We bake playful, wildly delicious cookies with molten centers and clean ingredients. Zero boring rules.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lilita.variable} ${plusJakarta.variable}`}>
      <body className="bg-[#EFECE6] text-[#2C1810] font-sans antialiased selection:bg-[#F3A218] selection:text-[#2C1810]">
        {children}
      </body>
    </html>
  );
}
