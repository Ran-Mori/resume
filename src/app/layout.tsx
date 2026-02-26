import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollManager from "@/components/ScrollManager";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Yi Zheng",
  description: "Resume of Yi Zheng, Senior Android Engineer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-navy text-slate antialiased selection:bg-green selection:text-navy`}>
        <ScrollManager />
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          {children}
        </div>
      </body>
    </html>
  );
}
