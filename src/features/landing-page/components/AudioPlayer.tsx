"use client";

import { useState, useRef, useEffect } from "react";

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 bg-surface-container-high border border-cyan-400/30 p-4 flex items-center gap-4 shadow-[0_0_15px_rgba(0,0,0,0.8)] clip-corner">
      <audio 
        ref={audioRef} 
        src="/antigravity-pulse/audio/AGST-Topic.mp3"
        loop
      />
      
      <button 
        onClick={togglePlay}
        className="w-12 h-12 flex-shrink-0 rounded-full border border-cyan-400 flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-black transition-colors cursor-pointer"
      >
        <span className="material-symbols-outlined text-[24px]">
          {isPlaying ? "pause" : "play_arrow"}
        </span>
      </button>
      
      <div className="flex flex-col">
        <span className="font-label-mono text-[10px] text-cyan-400 uppercase tracking-widest">TOCANDO AGORA</span>
        <span className="font-body-md text-sm text-white font-bold">AGST - Fate</span>
      </div>
      
      <div className="flex gap-1 items-end h-4 ml-4">
        <div className={`w-1 bg-cyan-400 h-2 ${isPlaying ? 'animate-[pulse_1s_infinite]' : ''}`}></div>
        <div className={`w-1 bg-cyan-400 h-4 ${isPlaying ? 'animate-[pulse_1.2s_infinite]' : ''}`}></div>
        <div className={`w-1 bg-cyan-400 h-3 ${isPlaying ? 'animate-[pulse_0.8s_infinite]' : ''}`}></div>
        <div className={`w-1 bg-cyan-400 h-1 ${isPlaying ? 'animate-[pulse_1.5s_infinite]' : ''}`}></div>
      </div>
    </div>
  );
}
