"use client";

const artists = [
  { name: "KINETIC VOID", genre: "INDUSTRIAL TECHNO", time: "02:00" },
  { name: "NEURAL NET", genre: "EXPERIMENTAL DNB", time: "00:00" },
  { name: "SYNKRO", genre: "AMBIENT GLITCH", time: "22:00" },
  { name: "PHASE SHIFT", genre: "DARK WAVE", time: "04:00" },
  { name: "SIGNAL FLOW", genre: "HARD TECHNO", time: "06:00" },
  { name: "VOID DECK", genre: "MODULAR LIVE", time: "20:00" },
];

export function LineupSection() {
  return (
    <section id="lineup" className="py-32 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-4">
            LINE-UP<span className="text-primary">.</span>
            <span className="block text-2xl font-normal text-foreground/40 mt-2">FASE 01 // TRANSMITINDO DADOS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {artists.map((artist, index) => (
            <div key={index} className="group relative aspect-square overflow-hidden bg-[#0F0F0F] clipped-corner">
              {/* Artist Image Placeholder/Background */}
              <div className="absolute inset-0 bg-zinc-900 overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent z-10" />
                 {/* Placeholder for real image */}
                 <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1571266028243-e4733b0f0bb1?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
              </div>

              {/* Purple Overlay */}
              <div className="absolute inset-0 bg-secondary/50 transition-opacity duration-300 group-hover:opacity-0 z-20" />

              {/* Sharp Border on Hover */}
              <div className="absolute inset-0 border-2 border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-30" />

              <div className="absolute bottom-0 left-0 right-0 p-8 z-40">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="font-heading text-[10px] tracking-[0.3em] text-primary mb-2 block uppercase">
                      {artist.genre}
                    </span>
                    <h3 className="text-3xl font-bold tracking-tighter uppercase">{artist.name}</h3>
                  </div>
                  {artist.isLive && (
                    <div className="flex items-center gap-2 mb-1">
                      <div className="size-2 bg-primary animate-pulse" />
                      <span className="font-heading text-[10px] tracking-widest text-primary uppercase">AO VIVO</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <div className="p-8 border border-white/5 bg-black/40 max-w-xl text-center">
            <p className="font-heading text-[10px] tracking-[0.3em] text-foreground/40 leading-relaxed">
              MAIS TRANSMISSÕES PENDENTES. DESCRIPTOGRAFIA DA FASE 02 AGENDADA PARA 15.05. INTEGRIDADE DO SINAL: 94%.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
