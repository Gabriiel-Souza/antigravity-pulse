"use client";

import Link from "next/link";

export function Footer() {
  const socialLinks = [
    { name: "INSTAGRAM", href: "#", active: true },
    { name: "SPOTIFY", href: "#" },
    { name: "DISCORD", href: "#" },
    { name: "TWITTER", href: "#" },
  ];

  return (
    <footer className="w-full border-t border-purple-900/40 mt-[160px] bg-[#050505]">
      <div className="max-w-[1440px] mx-auto px-12 py-20 flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="text-xl font-bold text-purple-600 uppercase">
          ANTIGRAVITY PULSE
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-space-grotesk text-xs tracking-[0.2em] uppercase transition-transform hover:text-purple-400 hover:translate-x-1 focus:outline-none focus:ring-1 focus:ring-cyan-400 cursor-pointer ${
                link.active ? "text-cyan-400" : "text-zinc-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="font-space-grotesk text-xs tracking-[0.2em] uppercase text-zinc-600">
          ©2026 ANTIGRAVITY PULSE. SINAL PERDIDO NO VAZIO.
        </div>
      </div>
    </footer>
  );
}
