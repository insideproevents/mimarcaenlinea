interface CurvedWaveBackgroundProps {
  className?: string;
}

export function CurvedWaveBackground({ className = '' }: CurvedWaveBackgroundProps) {
  // Generate 20 parallel curved lines with 3px spacing
  const lines = Array.from({ length: 20 }, (_, i) => {
    const yOffset = i * 3; // 3px spacing between each line
    const opacity = 0.15 - (i * 0.006); // Slightly decrease opacity for depth
    return { yOffset, opacity: Math.max(0.03, opacity) };
  });

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Animated curved line waves - 20 parallel lines */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        {/* 20 parallel curved lines */}
        {lines.map((line, index) => (
          <path
            key={index}
            d="M-100,200 Q360,100 720,200 T1540,200"
            fill="none"
            stroke={`rgba(255,255,255,${line.opacity})`}
            strokeWidth="1"
            style={{ 
              animation: `waveParallel 3s ease-in-out infinite`,
              animationDelay: `${index * 0.05}s`
            }}
            transform={`translate(0, ${line.yOffset})`}
          />
        ))}
      </svg>
      
      {/* CSS animations */}
      <style>{`
        @keyframes waveParallel {
          0%, 100% { 
            transform: translateX(0) translateY(0);
          }
          25% { 
            transform: translateX(15px) translateY(-8px);
          }
          50% { 
            transform: translateX(30px) translateY(0);
          }
          75% { 
            transform: translateX(15px) translateY(8px);
          }
        }
      `}</style>
    </div>
  );
}
