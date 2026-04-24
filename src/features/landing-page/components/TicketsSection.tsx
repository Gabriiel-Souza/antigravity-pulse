"use client";

import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "ACESSO CORE",
    price: "399",
    description: "Protocolo padrão de entrada.",
    features: [
      { text: "Acesso de 2 dias ao festival", included: true },
      { text: "Palco Principal + Sala do Vazio", included: true },
      { text: "Pacote de Merch Digital", included: true },
      { text: "Logística VIP", included: false },
    ],
    accent: "border-white/10",
  },
  {
    name: "PULSE ELITE",
    price: "799",
    description: "Experiência sensorial aprimorada.",
    features: [
      { text: "Acesso de 2 dias ao festival", included: true },
      { text: "Todos os Palcos + Decks VIP", included: true },
      { text: "Fila de Entrada Prioritária", included: true },
      { text: "Bares Dedicados", included: true },
      { text: "Acesso ao Lounge Backstage", included: false },
    ],
    accent: "border-primary shadow-[0_0_30px_rgba(0,240,255,0.1)]",
    popular: true,
  },
  {
    name: "COMANDO DO VAZIO",
    price: "1.599",
    description: "Controle total sobre a descida.",
    features: [
      { text: "Todos os Benefícios VIP", included: true },
      { text: "Acesso ao Lounge Backstage", included: true },
      { text: "Encontro com Artistas", included: true },
      { text: "Pacote de Merch Exclusivo", included: true },
      { text: "Armazenamento no Local", included: true },
    ],
    accent: "border-secondary shadow-[0_0_30px_rgba(188,0,255,0.1)]",
  },
];

export function TicketsSection() {
  return (
    <section id="tickets" className="py-32 bg-background border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-24">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">PROTOCOLOS DE ACESSO</h2>
          <p className="text-foreground/40 font-heading tracking-widest text-sm uppercase">Garanta sua autorização para a descida de 48 horas.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`relative p-12 flex flex-col border-white/10 ${
                index !== tiers.length - 1 ? 'lg:border-r' : ''
              } ${
                tier.popular ? 'border-t-4 border-t-primary' : 'border-t border-t-white/10'
              }`}
            >
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-2 tracking-tighter">{tier.name}</h3>
                <p className="font-heading text-[10px] text-foreground/40 tracking-[0.2em] uppercase">{tier.description}</p>
              </div>

              <div className="mb-12">
                <div className="flex items-baseline gap-1">
                  <span className={`${tier.popular ? 'text-[96px]' : 'text-6xl'} font-bold font-heading tracking-tighter transition-all`}>
                    R${tier.price}
                  </span>
                  <span className="text-foreground/40 text-[10px] font-heading tracking-widest">/UNIDADE</span>
                </div>
              </div>

              <div className="flex-grow space-y-6 mb-12">
                {tier.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center gap-4">
                    {feature.included ? (
                      <Check className="size-4 text-primary" />
                    ) : (
                      <X className="size-4 text-foreground/20" />
                    )}
                    <span className={`font-heading text-xs tracking-widest ${feature.included ? 'text-foreground/80' : 'text-foreground/20'}`}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <Button 
                variant={tier.popular ? "default" : "outline"}
                className={`w-full h-16 font-bold tracking-[0.3em] uppercase transition-all duration-300 ${
                  tier.popular ? 'hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]' : 'bg-transparent hover:border-primary hover:text-primary'
                }`}
              >
                INICIALIZAR COMPRA
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
