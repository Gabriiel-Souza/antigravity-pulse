"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const navLinks = [
    { name: "LINE-UP", href: "#lineup", active: true },
    { name: "PALCOS", href: "#stages" },
    { name: "INGRESSOS", href: "#tickets" },
    { name: "INFO", href: "#info" },
  ];

  return (
    <>
      {/* TopNavBar Desktop */}
      <nav className="fixed top-0 w-full z-50 border-b border-cyan-400/30 bg-black/10 backdrop-blur-lg hidden md:flex justify-between items-center px-12 py-4 shadow-[0_0_20px_rgba(0,240,255,0.15)]">
        <div className="text-2xl font-black text-cyan-400 italic tracking-tighter">
          ANTIGRAVITY PULSE
        </div>
        
        <div className="flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-space-grotesk uppercase tracking-tighter font-black transition-colors ${
                link.active 
                ? "text-cyan-400 border-b-2 border-cyan-400 pb-1" 
                : "text-white/80 hover:text-cyan-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button className="bg-cyan-400 text-black px-6 py-2 font-space-grotesk uppercase tracking-tighter font-black hover:skew-x-[-12deg] hover:bg-cyan-400 hover:text-black transition-all duration-75 active:scale-95 ease-in cursor-pointer">
          GET TICKETS
        </button>
      </nav>

      {/* Mobile Nav Anchor (Minimal) */}
      <div className="fixed top-0 w-full z-50 border-b border-cyan-400/30 bg-black/50 backdrop-blur-lg flex justify-between items-center px-6 py-4 md:hidden">
        <div className="text-xl font-black text-cyan-400 italic tracking-tighter">
          ANTIGRAVITY PULSE
        </div>
        <span className="material-symbols-outlined text-cyan-400">menu</span>
      </div>
    </>
  );
}
