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
            <div 
              key={artist.name}
              className="bg-background p-10 group hover:bg-primary/5 transition-all duration-300 relative overflow-hidden"
            >
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary/0 group-hover:border-primary/50 transition-all" />
              
              <span className="font-heading text-[10px] tracking-widest text-foreground/40 block mb-6">
                [{artist.time}] SET_CORE
              </span>
              
              <h3 className="text-3xl font-bold mb-2 group-hover:text-primary transition-colors">
                {artist.name}
              </h3>
              
              <p className="font-heading text-xs tracking-[0.2em] text-foreground/40">
                {artist.genre}
              </p>

              {/* Hover Effect Bar */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <div className="p-8 border border-white/5 bg-black/40 max-w-xl text-center">
            <p className="font-heading text-xs tracking-widest text-foreground/60 leading-relaxed">
              MAIS TRANSMISSÕES PENDENTES. DESCRIPTOGRAFIA DA FASE 02 AGENDADA PARA 15.05. INTEGRIDADE DO SINAL: 94%.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
