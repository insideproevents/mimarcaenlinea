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

    const resize = () => {
      canvas.width = canvas.clientWidth * window.devicePixelRatio;
      canvas.height = canvas.clientHeight * window.devicePixelRatio;
      canvas.style.width = canvas.clientWidth + 'px';
      canvas.style.height = canvas.clientHeight + 'px';
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      time += 0.016; // ~60fps

      ctx.clearRect(0, 0, width, height);

      const numLines = 60;
      const lineWidth = 2;
      const speed = 0.002;
      const amp = 20;

      ctx.lineCap = 'round';
      ctx.lineWidth = lineWidth;

      for (let i = 0; i < numLines; i++) {
        const y = (i / (numLines - 1)) * height * 0.8 + height * 0.1;
        const offset = Math.sin(time * speed + i * 0.3) * amp;
        const alpha = 0.9 + Math.sin(time * 0.001 + i * 0.1) * 0.1;

        ctx.strokeStyle = `rgb(107, 114, 128, ${alpha})`; // #6B7280
        
        ctx.beginPath();
        ctx.moveTo(0, y);
        
        for (let x = 0; x < width; x += 4) {
          const wave = Math.sin((x / width) * Math.PI * 8 + time * 0.003 + i * 0.2) * 10;
          ctx.lineTo(x, y + offset + wave);
        }
        ctx.stroke();
      }

      animationId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className={`w-full h-screen overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
