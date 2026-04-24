"use client";

export function AudioPlayer() {
  return (
    <div className="fixed bottom-8 right-8 z-50 bg-surface-container-high border border-cyan-400/30 p-4 flex items-center gap-4 shadow-[0_0_15px_rgba(0,0,0,0.8)] clip-corner">
      <button className="w-10 h-10 rounded-full border border-cyan-400 flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-black transition-colors">
        <span className="material-symbols-outlined">play_arrow</span>
      </button>
      
      <div className="flex flex-col">
        <span className="font-label-mono text-[10px] text-cyan-400 uppercase tracking-widest">TOCANDO AGORA</span>
        <span className="font-body-md text-sm text-white font-bold">KINETIC VOID - TRANSMISSION</span>
      </div>
      
      <div className="flex gap-1 items-end h-4 ml-4">
        <div className="w-1 bg-cyan-400 h-2 animate-[pulse_1s_infinite]"></div>
        <div className="w-1 bg-cyan-400 h-4 animate-[pulse_1.2s_infinite]"></div>
        <div className="w-1 bg-cyan-400 h-3 animate-[pulse_0.8s_infinite]"></div>
        <div className="w-1 bg-cyan-400 h-1 animate-[pulse_1.5s_infinite]"></div>
      </div>
    </div>
  );
}
