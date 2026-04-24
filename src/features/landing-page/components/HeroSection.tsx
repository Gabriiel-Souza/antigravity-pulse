"use client";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Noise Overlay */}
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 blur-[120px] rounded-full" />

      <div className="container relative z-10 px-6 flex flex-col items-center text-center">
        <div className="mb-6 py-1 px-3 border border-primary/30 bg-primary/5">
          <span className="font-heading text-[10px] tracking-[0.3em] text-primary">
            TRANSMISSÃO RECEBIDA // COORDENADAS BLOQUEADAS
          </span>
        </div>

        <h1 className="text-[clamp(3rem,10vw,8rem)] leading-[0.9] font-bold mb-8">
          SINAL <span className="text-primary text-glow-primary">PERDIDO</span>
          <br />
          NO <span className="text-secondary text-glow-secondary italic">VAZIO</span>
        </h1>

        <p className="max-w-2xl font-body text-xl text-foreground/60 mb-12">
          Uma descida multissensorial ao brutalismo futurista. 48 horas de frequências eletrônicas ininterruptas, transmitindo dados brutos do underground.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="xl" className="font-bold tracking-widest">
            ENTRAR NO VAZIO
          </Button>
          <Button size="xl" variant="outline" className="font-bold tracking-widest">
            VER LINE-UP
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <div className="font-heading text-[10px] tracking-widest text-foreground/30 flex flex-col gap-2">
          <span>LAT: 52.5200° N</span>
          <span>LONG: 13.4050° E</span>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 hidden lg:block text-right">
        <div className="font-heading text-[10px] tracking-widest text-foreground/30 flex flex-col gap-2">
          <span>FREQ: 140.00 BPM</span>
          <span>STATUS: ESTÁVEL</span>
        </div>
      </div>
    </section>
  );
}
