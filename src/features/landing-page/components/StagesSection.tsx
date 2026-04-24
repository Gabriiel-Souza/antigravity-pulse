"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

const STAGES = [
  {
    id: "alpha",
    name: "ALPHA STAGE",
    description: "O epicentro da gravidade zero. Onde o som distorce a realidade com os maiores headliners do mundo.",
    image: "/antigravity-pulse/images/stages/alpha.png",
    vibe: "Intenso / Futurista / Brutalista",
    tech: "Sound System: KV2 Audio VHD5.0"
  },
  {
    id: "neural",
    name: "NEURAL NET",
    description: "Uma jornada imersiva pelas profundezas do techno melódico e house progressivo em uma rede de lasers.",
    image: "/antigravity-pulse/images/stages/neural.png",
    vibe: "Imersivo / Melódico / Profundo",
    tech: "Visuals: Neural AI Mapping"
  },
  {
    id: "synkro",
    name: "SYNKRO STAGE",
    description: "Ritmos acelerados e batidas quebradas. Onde a sincronia entre homem e máquina é levada ao limite.",
    image: "/antigravity-pulse/images/stages/synkro.png",
    vibe: "Alta Energia / Industrial / Glitch",
    tech: "BPM Range: 140 - 160+"
  }
];

export function StagesSection() {
  return (
    <section id="stages" className="py-32 px-6 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="font-label-mono text-cyan-400 tracking-[0.3em] uppercase text-sm mb-4 block">EXPERIÊNCIA SONORA</span>
          <h2 className="font-h2-headline text-5xl md:text-7xl text-white uppercase italic">
            OS <span className="text-cyan-400 not-italic">PALCOS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STAGES.map((stage) => (
            <div 
              key={stage.id}
              className="group relative bg-surface-container border border-white/10 hover:border-cyan-400/50 transition-all duration-500 clip-corner p-1 cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image 
                  src={stage.image}
                  alt={stage.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="font-label-mono text-[10px] text-cyan-400 tracking-widest uppercase mb-2 block">{stage.vibe}</span>
                  <h3 className="font-h3-subhead text-2xl text-white mb-2">{stage.name}</h3>
                </div>
              </div>
              
              <div className="p-6 bg-[#0F0F0F]">
                <p className="font-body-md text-gray-400 text-sm mb-6 line-clamp-3">
                  {stage.description}
                </p>
                
                <div className="flex flex-col gap-2 mb-8">
                  <span className="font-label-mono text-[10px] text-white/40 uppercase">ESPECIFICAÇÕES</span>
                  <span className="font-body-md text-xs text-white/60">{stage.tech}</span>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-label-mono text-xs uppercase tracking-widest rounded-none h-12 cursor-pointer"
                >
                  EXPLORAR PALCO
                </Button>
              </div>

              {/* Decorativo Brutalista */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
