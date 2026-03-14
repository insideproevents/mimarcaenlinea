import { useEffect, useRef } from 'react';

interface AbstractShapeProps {
  className?: string;
}

export function AbstractShape({ className = '' }: AbstractShapeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className={`relative w-full h-full ${className}`}>
      {/* Main Central Shape - Gradient Sphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48">
        <div 
          className="w-full h-full rounded-full"
          style={{
            background: 'linear-gradient(135deg, #0041A8 0%, #0052D4 50%, #4364EE 100%)',
            boxShadow: '0 0 60px rgba(0, 65, 168, 0.5), inset 0 0 30px rgba(255, 255, 255, 0.1)',
          }}
        />
        {/* Inner highlight */}
        <div 
          className="absolute top-4 left-4 w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/20 blur-md"
        />
      </div>

      {/* Floating Geometric Shapes */}
      {/* Top floating element - Circle */}
      <div 
        className="absolute w-8 h-8 md:w-12 md:h-12 rounded-full"
        style={{
          top: '15%',
          right: '25%',
          background: 'linear-gradient(135deg, rgba(0, 71, 171, 0.6) 0%, rgba(67, 100, 238, 0.3) 100%)',
          boxShadow: '0 0 20px rgba(0, 71, 171, 0.4)',
          animation: 'float3 6s ease-in-out infinite',
        }}
      />

      {/* Top right - Small circle */}
      <div 
        className="absolute w-4 h-4 md:w-6 md:h-6 rounded-full"
        style={{
          top: '25%',
          right: '15%',
          background: 'linear-gradient(135deg, #0041A8 0%, #4364EE 100%)',
          animation: 'float2 5s ease-in-out infinite',
        }}
      />

      {/* Right side - Rectangle rotated */}
      <div 
        className="absolute w-6 h-10 md:w-8 md:h-14 rounded-lg"
        style={{
          top: '40%',
          right: '10%',
          background: 'linear-gradient(180deg, rgba(0, 71, 171, 0.5) 0%, rgba(0, 45, 115, 0.3) 100%)',
          transform: 'rotate(15deg)',
          animation: 'float4 7s ease-in-out infinite',
        }}
      />

      {/* Bottom right - Circle */}
      <div 
        className="absolute w-10 h-10 md:w-14 md:h-14 rounded-full"
        style={{
          bottom: '20%',
          right: '20%',
          background: 'linear-gradient(135deg, rgba(0, 82, 212, 0.4) 0%, rgba(67, 100, 238, 0.2) 100%)',
          animation: 'float1 4s ease-in-out infinite',
        }}
      />

      {/* Bottom - Small circle */}
      <div 
        className="absolute w-3 h-3 md:w-4 md:h-4 rounded-full"
        style={{
          bottom: '30%',
          left: '50%',
          background: '#0041A8',
          animation: 'float5 5.5s ease-in-out infinite',
        }}
      />

      {/* Left side - Circle */}
      <div 
        className="absolute w-7 h-7 md:w-10 md:h-10 rounded-full"
        style={{
          top: '35%',
          left: '15%',
          background: 'linear-gradient(135deg, rgba(67, 100, 238, 0.5) 0%, rgba(0, 71, 171, 0.3) 100%)',
          animation: 'float2 6.5s ease-in-out infinite',
        }}
      />

      {/* Top left - Small element */}
      <div 
        className="absolute w-5 h-5 md:w-6 md:h-6 rounded-full"
        style={{
          top: '20%',
          left: '25%',
          background: '#4364EE',
          animation: 'float4 4.5s ease-in-out infinite',
        }}
      />

      {/* Floating particles/dots */}
      <div 
        className="absolute w-2 h-2 rounded-full bg-white/40"
        style={{
          top: '30%',
          left: '35%',
          animation: 'float1 3s ease-in-out infinite',
        }}
      />
      <div 
        className="absolute w-1.5 h-1.5 rounded-full bg-white/30"
        style={{
          top: '60%',
          right: '30%',
          animation: 'float3 4.2s ease-in-out infinite',
        }}
      />
      <div 
        className="absolute w-2 h-2 rounded-full bg-white/50"
        style={{
          bottom: '25%',
          left: '20%',
          animation: 'float5 5s ease-in-out infinite',
        }}
      />

      {/* Connection lines effect */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.15 }}>
        <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="#0041A8" strokeWidth="1" />
        <line x1="50%" y1="50%" x2="85%" y2="40%" stroke="#0041A8" strokeWidth="0.5" />
        <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="#0041A8" strokeWidth="1" />
        <line x1="50%" y1="50%" x2="25%" y2="35%" stroke="#0041A8" strokeWidth="0.5" />
        <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="#0041A8" strokeWidth="1" />
      </svg>

      {/* CSS Keyframe Animations */}
      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-15px) translateX(5px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-10px) translateX(-8px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          50% { transform: translateY(-12px) translateX(3px) scale(1.05); }
        }
        @keyframes float4 {
          0%, 100% { transform: translateY(0px) rotate(15deg); }
          50% { transform: translateY(-18px) rotate(20deg); }
        }
        @keyframes float5 {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-8px) scale(0.9); }
        }
      `}</style>
    </div>
  );
}
