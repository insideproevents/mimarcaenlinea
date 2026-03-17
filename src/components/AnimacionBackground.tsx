import { useEffect, useRef } from 'react';

interface AnimacionBackgroundProps {
  className?: string;
}

export function AnimacionBackground({ className = '' }: AnimacionBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let startTime = 0;
    let animationId = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      canvas.style.width = canvas.clientWidth + 'px';
      canvas.style.height = canvas.clientHeight + 'px';
      ctx.scale(dpr, dpr);
    };

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const time = currentTime - startTime;

      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      // FONDO oscuro
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, width, height);

      const numLines = 60;
      const lineWidth = 1.5;
      const oscillationSpeed = 0.002;
      const amplitude = 15;
      
      ctx.lineCap = 'round';
      ctx.lineWidth = lineWidth;

      for (let i = 0; i < numLines; i++) {
        const progress = i / (numLines - 1);
        const baseY = height * 0.1 + progress * height * 0.8;
        
        const offset = Math.sin(time * oscillationSpeed + i * 0.4) * amplitude;
        const strokeAlpha = 0.6 + Math.sin(time * 0.001 + i * 0.2) * 0.2;

        ctx.strokeStyle = `rgba(75, 85, 99, ${strokeAlpha})`;
        
        ctx.beginPath();
        ctx.moveTo(0, baseY);
        
        for (let x = 0; x <= width; x += 5) {
          const xProgress = x / width;
          const wave = Math.sin(xProgress * Math.PI * 6 + time * 0.0015 + i * 0.3) * 8;
          ctx.lineTo(x, baseY + offset + wave);
        }
        ctx.stroke();
      }

      animationId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className={`w-full h-full overflow-hidden ${className}`}>
      <canvas 
        ref={canvasRef} 
        className="w-full h-full absolute inset-0" 
        style={{background: 'transparent'}}
      />
    </div>
  );
}
