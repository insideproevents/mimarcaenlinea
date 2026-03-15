import { useEffect, useRef, useState } from 'react';

interface Floating3DShapesProps {
  className?: string;
}

interface Sphere {
  id: number;
  x: number;
  y: number;
  z: number;
  size: number;
  color: string;
  vx: number;
  vy: number;
  vz: number;
}

export function Floating3DShapes({ className = '' }: Floating3DShapesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [spheres, setSpheres] = useState<Sphere[]>([
    { id: 0, x: 50, y: 50, z: 0, size: 48, color: '#0041A8', vx: 0.02, vy: 0.01, vz: 0.01 },
    { id: 1, x: 20, y: 25, z: -20, size: 20, color: '#0052D4', vx: 0.03, vy: -0.02, vz: 0.01 },
    { id: 2, x: 80, y: 20, z: 10, size: 16, color: '#4364EE', vx: -0.02, vy: 0.03, vz: -0.01 },
    { id: 3, x: 85, y: 50, z: -10, size: 14, color: '#0041A8', vx: 0.01, vy: -0.02, vz: 0.02 },
    { id: 4, x: 75, y: 80, z: 15, size: 18, color: '#0052D4', vx: -0.03, vy: 0.02, vz: -0.01 },
    { id: 5, x: 25, y: 75, z: 5, size: 12, color: '#4364EE', vx: 0.02, vy: -0.01, vz: 0.02 },
    { id: 6, x: 15, y: 50, z: 20, size: 10, color: '#0041A8', vx: -0.01, vy: 0.02, vz: -0.02 },
  ]);

  const [lines, setLines] = useState<{ x1: number; y1: number; x2: number; y2: number; opacity: number }[]>([]);
  const animationRef = useRef<number | null>(null);
  const [dimensions, setDimensions] = useState({ width: 400, height: 400 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    let startTime: number | null = null;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;

      setSpheres(prevSpheres => {
        return prevSpheres.map(sphere => {
          let newX = sphere.x + sphere.vx;
          let newY = sphere.y + sphere.vy;
          let newZ = sphere.z + sphere.vz;

          // Bounce off edges
          if (newX < 10 || newX > 90) {
            sphere.vx *= -1;
            newX = Math.max(10, Math.min(90, newX));
          }
          if (newY < 10 || newY > 90) {
            sphere.vy *= -1;
            newY = Math.max(10, Math.min(90, newY));
          }
          if (newZ < -30 || newZ > 30) {
            sphere.vz *= -1;
            newZ = Math.max(-30, Math.min(30, newZ));
          }

          return { ...sphere, x: newX, y: newY, z: newZ };
        });
      });

      // Calculate lines between nearby spheres
      setSpheres(currentSpheres => {
        const newLines: { x1: number; y1: number; x2: number; y2: number; opacity: number }[] = [];
        
        for (let i = 0; i < currentSpheres.length; i++) {
          for (let j = i + 1; j < currentSpheres.length; j++) {
            const s1 = currentSpheres[i];
            const s2 = currentSpheres[j];
            
            const dx = (s1.x - s2.x) * dimensions.width / 100;
            const dy = (s1.y - s2.y) * dimensions.height / 100;
            const dz = s1.z - s2.z;
            const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
            
            const maxDistance = 200;
            if (distance < maxDistance) {
              const opacity = (1 - distance / maxDistance) * 0.4;
              newLines.push({
                x1: s1.x,
                y1: s1.y,
                x2: s2.x,
                y2: s2.y,
                opacity,
              });
            }
          }
        }
        
        setLines(newLines);
        return currentSpheres;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions]);

  return (
    <div ref={containerRef} className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Background gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0, 41, 108, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
        }}
      />

      {/* SVG Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0041A8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#4364EE" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        {lines.map((line, i) => (
          <line
            key={i}
            x1={`${line.x1}%`}
            y1={`${line.y1}%`}
            x2={`${line.x2}%`}
            y2={`${line.y2}%`}
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            strokeOpacity={line.opacity}
          />
        ))}
      </svg>

      {/* Central main sphere */}
      {spheres[0] && (
        <div
          className="absolute rounded-full"
          style={{
            left: `${spheres[0].x}%`,
            top: `${spheres[0].y}%`,
            width: `${spheres[0].size}px`,
            height: `${spheres[0].size}px`,
            transform: `translate(-50%, -50%) translateZ(${spheres[0].z}px) scale(${1 + spheres[0].z / 100})`,
            background: 'linear-gradient(135deg, #0a1628 0%, #1a365d 50%, #0041A8 100%)',
            boxShadow: `
              0 0 60px rgba(0, 65, 168, 0.5),
              inset -15px -15px 30px rgba(0, 0, 0, 0.5),
              inset 15px 15px 30px rgba(0, 82, 212, 0.3)
            `,
            zIndex: 10,
          }}
        >
          {/* Highlight */}
          <div 
            className="absolute top-1 left-2 w-8 h-8 rounded-full bg-white/10 blur-md"
          />
        </div>
      )}

      {/* Floating spheres */}
      {spheres.slice(1).map((sphere, index) => (
        <div
          key={sphere.id}
          className="absolute rounded-full"
          style={{
            left: `${sphere.x}%`,
            top: `${sphere.y}%`,
            width: `${sphere.size}px`,
            height: `${sphere.size}px`,
            transform: `translate(-50%, -50%) translateZ(${sphere.z}px) scale(${1 + sphere.z / 100})`,
            background: `linear-gradient(135deg, ${sphere.color}dd 0%, ${sphere.color}88 100%)`,
            boxShadow: `0 0 ${sphere.size / 2}px ${sphere.color}66`,
            zIndex: Math.floor(10 + sphere.z),
            transition: 'box-shadow 0.3s ease',
          }}
        >
          {/* Inner highlight */}
          <div 
            className="absolute top-0.5 left-1 w-1/3 h-1/3 rounded-full bg-white/10"
          />
        </div>
      ))}

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${1 + Math.random() * 3}px`,
            height: `${1 + Math.random() * 3}px`,
            background: i % 2 === 0 ? '#0041A8' : '#4364EE',
            left: `${5 + Math.random() * 90}%`,
            top: `${5 + Math.random() * 90}%`,
            boxShadow: `0 0 ${2 + Math.random() * 4}px ${i % 2 === 0 ? 'rgba(0, 65, 168, 0.6)' : 'rgba(67, 100, 238, 0.6)'}`,
            animation: `particleFloat ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
            opacity: 0.5 + Math.random() * 0.5,
            zIndex: 5,
          }}
        />
      ))}

      {/* CSS Keyframes */}
      <style>{`
        @keyframes particleFloat {
          0%, 100% { 
            transform: translate3d(0, 0, 0);
          }
          25% { 
            transform: translate3d(5px, -8px, 3px);
          }
          50% { 
            transform: translate3d(-3px, -12px, -3px);
          }
          75% { 
            transform: translate3d(4px, -6px, 5px);
          }
        }
      `}</style>
    </div>
  );
}
