"use client";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 px-margin overflow-hidden">
      {/* Floating Geometrics Behind */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-cyan-400/20 rotate-12 bg-cyan-400/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-purple-500/20 -rotate-12 bg-purple-500/5 blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-container-max mx-auto grid grid-cols-12 gap-gutter">
        <div className="col-span-12 md:col-span-10 md:col-start-2 text-center flex flex-col items-center">
          <h1 
            className="font-h1-display text-h1-display text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500 uppercase glitch-text mb-stack-md" 
            data-text="SINAL PERDIDO"
          >
            SINAL PERDIDO<br/>NO VAZIO
          </h1>
          
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-stack-lg">
            Uma descida multissensorial ao brutalismo futurista. 48 horas de frequências eletrônicas ininterruptas.
          </p>
          
          <button className="bg-primary-container text-on-primary-container px-12 py-6 font-label-mono text-label-mono uppercase tracking-[0.2em] font-bold hover:bg-secondary-container hover:text-on-secondary-container hover:-translate-y-1 transition-all duration-150 border-none rounded-none shadow-[0_0_30px_rgba(0,240,255,0.3)]">
            GARANTIR INGRESSO
          </button>
        </div>
      </div>
    </section>
  );
}
