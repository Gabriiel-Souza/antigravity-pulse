"use client";

import Link from "next/link";

const socialLinks = [
  { name: "INSTAGRAM", href: "#" },
  { name: "SPOTIFY", href: "#" },
  { name: "DISCORD", href: "#" },
  { name: "TWITTER", href: "#" },
];

export function Footer() {
  return (
    <footer className="py-20 bg-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="font-heading text-xl font-bold tracking-tighter text-primary mb-4">
              ANTIGRAVITY<span className="text-white">PULSE</span>
            </Link>
            <p className="font-heading text-[10px] tracking-widest text-foreground/30">
              EST. 2026 // BERLIN UNDERGROUND
            </p>
          </div>

          <div className="flex gap-8">
            {socialLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className="font-heading text-[10px] tracking-[0.3em] text-foreground/40 hover:text-secondary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="text-center md:text-right">
            <p className="font-heading text-[10px] tracking-widest text-foreground/20">
              © 2026 ANTIGRAVITY PULSE. TODOS OS DIREITOS RESERVADOS.
              <br />
              PROJETADO PARA O FUTURO.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
