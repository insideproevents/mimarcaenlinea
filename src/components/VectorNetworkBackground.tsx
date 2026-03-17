import { useEffect, useRef, useCallback } from 'react';

interface VectorNetworkBackgroundProps {
  className?: string;
}

export function VectorNetworkBackground({ className = '' }: VectorNetworkBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const draw = useCallback((ctx: CanvasRenderingContext2D, time: number, width: number, height: number) => {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
    ctx.fillRect(0, 0, width, height);

    const numPoints = 12;
    const points: {x: number, y: number}[] = [];
    const maxDistNear = Math.min(width, height) * 0.25;
    const maxDistFar = Math.min(width, height) * 0.55;
    const lineOpacityBase = 0.85;

    // Puntos grid + oscilación (VERSIÓN ANTERIOR)
    for (let i = 0; i < numPoints; i++) {
      const col = i % 4;
      const row = Math.floor(i / 4);
      const baseX = (col + 0.5) / 4 * width;
      const baseY = (row + 0.5) / 3 * height;
      
      const oscilX = Math.sin(time * 0.0006 + i * 1.3) * 50;
      const oscilY = Math.cos(time * 0.0005 + i * 1.7) * 40;
      
      points[i] = {
        x: baseX + oscilX,
        y: baseY + oscilY
      };
    }

    // **LÍNEAS** MÁS CONECTADAS
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    for (let i = 0; i < numPoints; i++) {
      for (let j = i + 1; j < numPoints; j++) {
        const dx = points[j].x - points[i].x;
        const dy = points[j].y - points[i].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        let opacity = 0;
        let lineWidth = 1.8;
        
        if (dist < maxDistNear) {
          opacity = lineOpacityBase * 1.2;
          lineWidth = 3.2;
        } else if (dist < maxDistFar) {
          opacity = lineOpacityBase * 0.75;
          lineWidth = 2.0;
        }
        
        if (opacity > 0.25) {
          ctx.strokeStyle = `rgba(55, 65, 81, ${opacity})`;
          ctx.lineWidth = lineWidth;
          
          ctx.beginPath();
          ctx.moveTo(points[i].x, points[i].y);
          ctx.lineTo(points[j].x, points[j].y);
          ctx.stroke();
        }
      }
    }

    // Puntos unión
    for (const point of points) {
      ctx.fillStyle = 'rgba(75, 85, 99, 1)';
      ctx.beginPath();
      ctx.arc(point.x, point.y, 4.2, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.shadowColor = 'rgba(107, 114, 128, 0.9)';
      ctx.shadowBlur = 14;
      ctx.beginPath();
      ctx.arc(point.x, point.y, 7, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      canvas.style.width = `${canvas.clientWidth}px`;
      canvas.style.height = `${canvas.clientHeight}px`;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    let rafId: number;
    const render = (time: number) => {
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
      draw(ctx, time, canvas.clientWidth, canvas.clientHeight);
      rafId = requestAnimationFrame(render);
    };

    requestAnimationFrame(render);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, [draw]);

  return (
    <div className={`w-full h-full overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full absolute inset-0"/>
    </div>
  );
}
