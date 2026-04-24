"use client";

import { MapPin, Bus, HelpCircle, ShieldAlert, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const INFO_BLOCKS = [
  {
    title: "COORDENADAS",
    icon: <MapPin className="w-6 h-6 text-cyan-400" />,
    content: [
      { label: "DATA", value: "24 — 26 ABRIL 2026" },
      { label: "LOCAL", value: "COMPLEXO VAZIO" },
      { label: "ENDEREÇO", value: "DISTRITO INDUSTRIAL 01, SÃO PAULO - SP" }
    ],
    description: "Um espaço arquitetônico brutalista reconvertido em santuário de frequências eletrônicas."
  },
  {
    title: "LOGÍSTICA",
    icon: <Bus className="w-6 h-6 text-cyan-400" />,
    content: [
      { label: "SHUTTLE", value: "NEURAL TRANSIT" },
      { label: "PARTIDA", value: "ESTAÇÃO TERMINAL (CADA 15 MIN)" }
    ],
    description: "Transporte oficial ininterrupto durante as 48 horas de festival para portadores de tickets."
  },
  {
    title: "SEGURANÇA",
    icon: <ShieldAlert className="w-6 h-6 text-cyan-400" />,
    content: [
      { label: "POLÍTICA", value: "ZERO TOLERÂNCIA" },
      { label: "IDADE", value: "MÍNIMO 18 ANOS (BIOMETRIA EXIGIDA)" }
    ],
    description: "Protocolos rígidos de segurança cibernética e redução de danos físicos e mentais."
  }
];

const FAQ_ITEMS = [
  "PROTOCOLOS DE ACESSO: APENAS INGRESSOS DIGITAIS/NFT.",
  "ITENS PROIBIDOS: CÂMERAS PROFISSIONAIS E DINHEIRO FÍSICO.",
  "LOCKERS DIGITAIS DISPONÍVEIS VIA BIOMETRIA.",
  "REEMBOLSOS: ATÉ 7 DIAS ANTES DO SINAL INICIAL."
];

export function InfoSection() {
  return (
    <section id="info" className="py-32 px-6 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          
          {/* Lado Esquerdo: Header e FAQ */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-label-mono text-cyan-400 tracking-[0.3em] uppercase text-sm mb-4 block">PROTOCOLO</span>
              <h2 className="font-h2-headline text-6xl md:text-8xl text-white uppercase italic leading-none mb-12">
                INFO<span className="text-cyan-400 not-italic">.</span>
              </h2>
              
              <div className="space-y-6 mb-16">
                <h3 className="font-label-mono text-xs text-white/40 tracking-widest uppercase">PERGUNTAS FREQUENTES</h3>
                {FAQ_ITEMS.map((item, i) => (
                  <div key={i} className="group border-l border-white/10 pl-4 py-2 hover:border-cyan-400 transition-colors cursor-pointer">
                    <p className="font-body-md text-sm text-zinc-500 group-hover:text-white transition-colors">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <Button className="w-fit bg-transparent border border-cyan-400 text-cyan-400 font-label-mono text-xs uppercase tracking-widest h-14 px-8 rounded-none hover:bg-cyan-400 hover:text-black transition-all cursor-pointer group">
              MANUAL COMPLETO DO VISITANTE <ExternalLink className="ml-3 w-4 h-4 group-hover:rotate-45 transition-transform" />
            </Button>
          </div>

          {/* Lado Direito: Blocos de Info */}
          <div className="md:col-span-7 grid grid-cols-1 gap-6">
            {INFO_BLOCKS.map((block, index) => (
              <div 
                key={index} 
                className={`bg-surface-container-low p-8 border border-white/5 relative clip-corner transition-all duration-500 hover:border-cyan-400/30 ${index === 1 ? 'md:ml-12' : ''}`}
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="p-3 bg-white/5 rounded-none border border-white/10 group-hover:border-cyan-400/50 transition-colors">
                    {block.icon}
                  </div>
                  <span className="font-label-mono text-[10px] text-white/20 uppercase">BLOCO_0{index + 1}</span>
                </div>

                <h3 className="font-h3-subhead text-2xl text-white mb-6 tracking-tighter">{block.title}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-4">
                    {block.content.map((item, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="font-label-mono text-[9px] text-cyan-400/60 uppercase mb-1">{item.label}</span>
                        <span className="font-body-md text-sm text-white font-bold">{item.value}</span>
                      </div>
                    ))}
                  </div>
                  <p className="font-body-md text-sm text-zinc-500 leading-relaxed">
                    {block.description}
                  </p>
                </div>
                
                {/* Elemento Decorativo */}
                <div className="absolute top-0 right-0 w-16 h-[1px] bg-gradient-to-l from-cyan-400/50 to-transparent" />
                <div className="absolute top-0 right-0 w-[1px] h-16 bg-gradient-to-b from-cyan-400/50 to-transparent" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
