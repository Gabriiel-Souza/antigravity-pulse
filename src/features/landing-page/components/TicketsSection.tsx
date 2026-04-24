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
    <section id="tickets" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">PROTOCOLOS DE ACESSO</h2>
          <p className="text-foreground/40 font-heading tracking-widest text-sm uppercase">Garanta sua autorização para a descida de 48 horas.</p>
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
                  <span className="text-4xl font-bold font-heading">R${tier.price}</span>
                  <span className="text-foreground/40 text-xs font-heading">/UNIDADE</span>
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
                INICIALIZAR COMPRA
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
