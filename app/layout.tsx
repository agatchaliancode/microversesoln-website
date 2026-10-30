import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Microverse Solutions",
  description: "Empowering Micro Businesses Through AI, Analytics, and IT Innovation",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
          <body className="min-h-full flex flex-col bg-slate-950 text-white">

      <nav className="flex justify-between items-center px-8 py-2 bg-slate-950 border-b border-slate-800">

        <a href="/">
          <Image
            src="/logo.png"
            alt="Microverse Solutions"
            width={140}
            height={47}
            priority
          />
        </a>

        <div className="flex gap-6">
          <a href="/" className="text-white hover:text-sky-400">
            Home
          </a>

          <a href="/solutions" className="text-white hover:text-sky-400">
            Solutions
          </a>

          <a href="/about" className="text-white hover:text-sky-400">
            About
          </a>

          <a href="/contact" className="text-white hover:text-sky-400">
            Contact
          </a>
        </div>

      </nav>

      {children}
      <Analytics/>
    </body>
    </html>
  );
}
