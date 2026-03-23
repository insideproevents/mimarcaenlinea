import { useEffect, useRef } from 'react';

interface AnimacionBackgroundProps {
  className?: string;
}

export function AnimacionBackground({ className = '' }: AnimacionBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let animationId = 0;
    let time = 0;
    let lastTime = performance.now();

    const resize = () => {
      canvas.width = canvas.clientWidth * window.devicePixelRatio;
      canvas.height = canvas.clientHeight * window.devicePixelRatio;
      canvas.style.width = canvas.clientWidth + 'px';
      canvas.style.height = canvas.clientHeight + 'px';
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000; // Real delta time
      lastTime = currentTime;
      time += deltaTime;

      const rect = canvas.getBoundingClientRect();
      const width = Math.max(rect.width, 1);
      const height = Math.max(rect.height, 1);

      ctx.clearRect(0, 0, width, height);

const numLines = window.innerWidth < 768 ? 30 : 50;
const lineWidth = window.innerWidth < 768 ? 3.5 : 2.5;
const speed = 1.2;
      const amp = 35;

      ctx.lineCap = 'round';
      ctx.lineWidth = lineWidth;

      for (let i = 0; i < numLines; i++) {
        const y = (i / (numLines - 1)) * height * 0.85 + height * 0.075;
        const offset = Math.sin(time * speed + i * 0.4) * amp;
const alpha = window.innerWidth < 768 ? 1.0 : (0.9 + Math.sin(time * 0.5 + i * 0.1) * 0.1);

ctx.strokeStyle = `rgb(55, 65, 81, ${alpha * 0.45})`; // Gris oscuro #374151 low opacity
        
        ctx.beginPath();
        ctx.moveTo(0, y);
        
        for (let x = 0; x < width; x += 3) {
          const wave = Math.sin((x / width) * Math.PI * 10 + time * 4 + i * 0.3) * 20;
          ctx.lineTo(x, y + offset + wave);
        }
        ctx.stroke();
      }

      animationId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className={`w-full h-screen overflow-hidden relative ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
