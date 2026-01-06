import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MouseSpotlight from "@/components/MouseSpotlight";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hisham Ali Asad | Portfolio",
  description: "Personal Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--color-primary-bg)] text-white relative`}
      >
        <MouseSpotlight />
        {children}
      </body>
    </html>
  );
}
