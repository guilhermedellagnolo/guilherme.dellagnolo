import { useEffect, useState, useRef } from 'react';

export function FPSCounter() {
  const [fps, setFps] = useState(60);
  const [showCounter, setShowCounter] = useState(false);
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());

  useEffect(() => {
    // Show FPS counter with keyboard shortcut: Shift + F
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.shiftKey && e.key === 'F') {
        setShowCounter((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    const updateFPS = () => {
      frameCountRef.current++;
      const currentTime = performance.now();
      const delta = currentTime - lastTimeRef.current;

      if (delta >= 1000) {
        const currentFPS = Math.round((frameCountRef.current * 1000) / delta);
        setFps(currentFPS);
        frameCountRef.current = 0;
        lastTimeRef.current = currentTime;
      }

      requestAnimationFrame(updateFPS);
    };

    updateFPS();

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  if (!showCounter) return null;

  const fpsColor = fps >= 55 ? 'text-emerald-400' : fps >= 30 ? 'text-amber-400' : 'text-red-400';

  return (
    <div className="fixed bottom-4 right-4 z-[10000] px-3 py-2 rounded-lg bg-slate-950/90 border border-slate-800/80 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${fps >= 55 ? 'bg-emerald-400' : fps >= 30 ? 'bg-amber-400' : 'bg-red-400'} animate-pulse`} />
        <span className="text-xs font-mono text-slate-400">FPS:</span>
        <span className={`text-sm font-mono font-bold ${fpsColor}`}>{fps}</span>
      </div>
      <p className="text-[10px] font-mono text-slate-500 mt-1">Shift + F to hide</p>
    </div>
  );
}
