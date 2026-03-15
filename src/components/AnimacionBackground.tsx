import { useEffect, useRef, useState } from 'react';
import animacionImage from '../../assetts/animacion.jpg';

interface AnimacionBackgroundProps {
  className?: string;
}

export function AnimacionBackground({ className = '' }: AnimacionBackgroundProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    setIsLoaded(true);

    // Subtle scale and rotation animation
    let startTime: number | null = null;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;

      // Gentle pulsing scale (1 to 1.05)
      const newScale = 1 + Math.sin(elapsed / 3000) * 0.03;
      setScale(newScale);

      // Very slow rotation (0 to 2 degrees)
      const newRotation = Math.sin(elapsed / 8000) * 2;
      setRotation(newRotation);

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Background Image with animation */}
      <div 
        className="absolute inset-0 transition-transform duration-1000 ease-out"
        style={{
          transform: `scale(${scale}) rotate(${rotation}deg)`,
          opacity: isLoaded ? 0.8 : 0,
          transition: 'opacity 1s ease-out',
        }}
      >
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${animacionImage})`,
            filter: 'grayscale(30%) contrast(1.1)',
          }}
        />
      </div>

      {/* Gradient overlay for depth */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.6) 100%)',
        }}
      />

      {/* Subtle blue glow effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 30% 30%, rgba(0, 71, 171, 0.15) 0%, transparent 50%)',
          animation: 'pulse 4s ease-in-out infinite',
        }}
      />

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${15 + Math.random() * 70}%`,
              animation: `floatParticle ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* CSS Keyframes */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes floatParticle {
          0%, 100% { 
            transform: translateY(0) translateX(0); 
            opacity: 0.3;
          }
          50% { 
            transform: translateY(-20px) translateX(10px); 
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
}
