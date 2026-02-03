"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#0A0819] pt-28 pb-10 overflow-hidden">
      {/* top divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/10" />

      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.06),_transparent_65%)]" />

      <div className="relative max-w-[1600px] mx-auto px-6">
        {/* main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 pb-20">
          {/* left */}
          <div>
            <p className="text-sm text-gray-400 mb-6">
              Subscribe our newsletter:
            </p>

            <div className="relative w-full max-w-sm">
              <input
                type="email"
                placeholder="ENTER YOUR EMAIL"
                className="w-full h-14 rounded-full bg-[#1A1A1A] pl-6 pr-16 text-xs tracking-widest text-gray-300 placeholder:text-gray-500 outline-none"
              />
              <button className="absolute right-1 top-1 w-12 h-12 rounded-full bg-[#FF5C00] flex items-center justify-center">
                <ArrowUpRight className="w-5 h-5 text-black" />
              </button>
            </div>

            {/* socials */}
            <div className="flex items-center gap-6 mt-10 text-white">
              <i className="fa-brands fa-twitter" />
              <i className="fa-brands fa-instagram" />
              <i className="fa-brands fa-discord" />
              <i className="fa-brands fa-tiktok" />
            </div>
          </div>

          {/* center */}
          <div className="space-y-5 flex flex-col">
            <Link href="/" className="text-lg md:text-xl xl:text-2xl text-[#FF5C00] font-medium">Home</Link>
            <Link href="/#about" className="text-lg md:text-xl xl:text-2xl text-white">About us</Link>
            <Link href="/#service" className="text-lg md:text-xl xl:text-2xl text-white">Services</Link>
            <Link href="/#projects" className="text-lg md:text-xl xl:text-2xl text-white">Projects</Link>
            <Link href="/#testimonial" className="text-lg md:text-xl xl:text-2xl text-white">Testimonial</Link>
          </div>

          {/* right */}
          <div>
            <p className="text-white text-lg mb-4">Address</p> 
            <p className="text-gray-400 mt-1">Manila , Philippines</p>
            <p className="text-gray-400 mt-4">+1(312) 877-3570 (WA)</p>
          </div>
        </div>

        {/* bottom divider */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>© Copyright 2026 by BeyondAI.com</p>
          <p className="mt-4 md:mt-0">
            Privacy Policy | Term of Services
          </p>
        </div>
      </div>
    </footer>
  );
}
