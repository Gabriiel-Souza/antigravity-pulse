"use client";

import { Check, X } from "lucide-react";

export function TicketsSection() {
  return (
    <section className="py-section-gap px-margin w-full max-w-container-max mx-auto" id="tickets">
      <h2 className="font-h2-headline text-h2-headline text-center text-on-surface uppercase mb-stack-lg tracking-tighter">
        PROTOCOLOS DE ACESSO
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y border-outline/20 relative">
        {/* Vertical Separators */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/3 w-[1px] bg-outline/20"></div>
        <div className="hidden md:block absolute top-0 bottom-0 right-1/3 w-[1px] bg-outline/20"></div>

        {/* Tier 1 */}
        <div className="p-8 flex flex-col group border-b md:border-b-0 border-outline/20 hover:bg-surface-container-low transition-colors">
          <div className="font-label-mono text-label-mono text-outline mb-4 uppercase">ENTRADA PADRÃO</div>
          <div className="font-h1-display text-h1-display text-white mb-8 group-hover:text-cyan-400 transition-colors">R$399</div>
          <ul className="font-body-md text-body-md text-on-surface-variant space-y-4 mb-stack-md flex-grow">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-cyan-400 text-sm">check</span> 
              Acesso de 2 dias ao festival
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-cyan-400 text-sm">check</span> 
              Palco Principal + Sala do Vazio
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-outline text-sm">close</span> 
              Logística VIP
            </li>
          </ul>
          <button className="w-full py-4 border border-cyan-400/50 text-cyan-400 font-label-mono uppercase hover:bg-cyan-400 hover:text-black transition-colors rounded-none cursor-pointer">
            SELECIONAR
          </button>
        </div>

        {/* Tier 2 (Highlighted) */}
        <div className="p-8 flex flex-col relative bg-surface-container-low border-t-4 border-cyan-400 shadow-[0_-4px_20px_rgba(0,240,255,0.15)] border-b md:border-b-0 border-outline/20">
          <div className="font-label-mono text-label-mono text-cyan-400 mb-4 flex justify-between uppercase">
            <span>ACESSO VIP</span> 
            <span className="bg-cyan-400/20 px-2 py-1 text-[10px]">RECOMENDADO</span>
          </div>
          <div className="font-h1-display text-h1-display text-white mb-8">R$799</div>
          <ul className="font-body-md text-body-md text-on-surface-variant space-y-4 mb-stack-md flex-grow">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-cyan-400 text-sm">check</span> 
              Acesso de 2 dias ao festival
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-cyan-400 text-sm">check</span> 
              Todos os Palcos + Decks VIP
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-cyan-400 text-sm">check</span> 
              Fila de Entrada Prioritária
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-cyan-400 text-sm">check</span> 
              Bares Dedicados
            </li>
          </ul>
          <button className="w-full py-4 bg-cyan-400 text-black font-label-mono uppercase hover:bg-white transition-colors rounded-none glow-cyan cursor-pointer">
            SELECIONAR
          </button>
        </div>

        {/* Tier 3 */}
        <div className="p-8 flex flex-col group hover:bg-surface-container-low transition-colors">
          <div className="font-label-mono text-label-mono text-purple-400 mb-4 uppercase">PASSE BACKSTAGE</div>
          <div className="font-h1-display text-h1-display text-white mb-8 group-hover:text-purple-400 transition-colors">R$1.599</div>
          <ul className="font-body-md text-body-md text-on-surface-variant space-y-4 mb-stack-md flex-grow">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-purple-400 text-sm">check</span> 
              Todos os Benefícios VIP
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-purple-400 text-sm">check</span> 
              Acesso ao Lounge Backstage
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-purple-400 text-sm">check</span> 
              Encontro com Artistas
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-purple-400 text-sm">check</span> 
              Pacote de Merch Exclusivo
            </li>
          </ul>
          <button className="w-full py-4 border border-purple-500/50 text-purple-400 font-label-mono uppercase hover:bg-purple-500 hover:text-white transition-colors rounded-none cursor-pointer">
            SELECIONAR
          </button>
        </div>
      </div>
    </section>
  );
}
