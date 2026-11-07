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

      <footer className="border-t border-slate-800 bg-slate-950 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-12">

          <div className="grid md:grid-cols-3 gap-12">

            <div>
              <Image
                src="/logo.png"
                alt="Microverse Solutions"
                width={180}
                height={60}
              />
              <p className="text-slate-400">
                Empowering small businesses through AI,
                Analytics, Automation, and Business Intelligence.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Quick Links
              </h3>

              <div className="flex flex-col gap-2">
                <a href="/" className="text-slate-300 hover:text-sky-400">
                  Home
                </a>

                <a href="/solutions" className="text-slate-300 hover:text-sky-400">
                  Solutions
                </a>

                <a href="/about" className="text-slate-300 hover:text-sky-400">
                  About
                </a>

                <a href="/contact" className="text-slate-300 hover:text-sky-400">
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Contact
              </h3>

              <p className="text-slate-300">
                anthony@microversesoln.com
              </p>

              <p className="text-slate-300 mt-2">
                Murrieta, California
              </p>
            </div>

          </div>

          <div className="border-t border-slate-800 mt-8 pt-6 text-center text-slate-500">
            © 2026 Microverse Solutions. All Rights Reserved.
          </div>

        </div>
      </footer>

      <Analytics />
    </body>
    </html>
  );
}
