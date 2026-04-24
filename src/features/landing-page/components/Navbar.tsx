"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "LINE-UP", href: "#lineup" },
  { name: "PALCOS", href: "#stages" },
  { name: "INGRESSOS", href: "#tickets" },
  { name: "INFO", href: "#info" },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-heading text-2xl font-bold tracking-tighter text-primary">
          ANTIGRAVITY<span className="text-white">PULSE</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-heading text-sm font-semibold tracking-widest text-foreground/70 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Button className="font-heading tracking-widest uppercase px-8" variant="secondary">
          COMPRAR INGRESSOS
        </Button>
      </div>
    </nav>
  );
}
