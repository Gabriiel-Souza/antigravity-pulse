"use client";

import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "CORE ACCESS",
    price: "149",
    description: "Standard entry protocol.",
    features: [
      { text: "2-Day Festival Access", included: true },
      { text: "Main Stage + Void Room", included: true },
      { text: "Digital Merch Pack", included: true },
      { text: "VIP Logistics", included: false },
    ],
    accent: "border-white/10",
  },
  {
    name: "PULSE ELITE",
    price: "299",
    description: "Enhanced sensory experience.",
    features: [
      { text: "2-Day Festival Access", included: true },
      { text: "All Stages + VIP Decks", included: true },
      { text: "Priority Entry Line", included: true },
      { text: "Dedicated Bars", included: true },
      { text: "Backstage Lounge Access", included: false },
    ],
    accent: "border-primary shadow-[0_0_30px_rgba(0,240,255,0.1)]",
    popular: true,
  },
  {
    name: "VOID COMMAND",
    price: "599",
    description: "Total control over the descent.",
    features: [
      { text: "All VIP Benefits", included: true },
      { text: "Backstage Lounge Access", included: true },
      { text: "Artist Meet & Greets", included: true },
      { text: "Exclusive Merch Pack", included: true },
      { text: "On-site Storage", included: true },
    ],
    accent: "border-secondary shadow-[0_0_30px_rgba(188,0,255,0.1)]",
  },
];

export function TicketsSection() {
  return (
    <section id="tickets" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">ACCESS PROTOCOLS</h2>
          <p className="text-foreground/40 font-heading tracking-widest text-sm uppercase">Secure your authorization for the 48-hour descent.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div 
              key={tier.name}
              className={`p-10 brutalist-border bg-surface flex flex-col transition-all duration-300 ${tier.accent}`}
            >
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="font-heading text-xs text-foreground/40 tracking-wider mb-6">{tier.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold font-heading">€{tier.price}</span>
                  <span className="text-foreground/40 text-xs font-heading">/UNIT</span>
                </div>
              </div>

              <div className="flex-grow space-y-4 mb-10">
                {tier.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center gap-3">
                    {feature.included ? (
                      <Check className="w-4 h-4 text-primary" />
                    ) : (
                      <X className="w-4 h-4 text-foreground/20" />
                    )}
                    <span className={`text-sm ${feature.included ? 'text-foreground/80' : 'text-foreground/20'}`}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <Button 
                variant={tier.popular ? "default" : "outline"}
                className={`w-full h-14 font-bold tracking-[0.2em] uppercase ${tier.popular ? '' : 'bg-transparent'}`}
              >
                INITIALIZE PURCHASE
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
