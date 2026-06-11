import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sistech Cafe — Local Coffee by Extraordinary Women",
  description:
    "Sistech Cafe is a local coffee shop brewed with passion by inspiring women in Indonesia. Explore our menu, promotions, and more.",
  keywords: ["coffee", "sistech", "cafe", "Indonesia", "women", "local coffee"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body
        className="flex flex-col min-h-screen bg-[#fffbf7]"
        style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
      >
        <Navbar />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}