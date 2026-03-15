import { useRef } from 'react';
import { Palette, Code, Megaphone, Target, Lightbulb, TrendingUp, Zap } from 'lucide-react';

interface AbstractShapeProps {
  className?: string;
}

export function AbstractShape({ className = '' }: AbstractShapeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className={`relative w-full h-full ${className}`}>
      {/* Main Central Shape - Gradient Sphere with extra lines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-60 md:h-60">
        {/* Wireframe Globe SVG */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" style={{ opacity: 0.4 }}>
          {/* Outer circle */}
          <circle cx="50" cy="50" r="48" fill="none" stroke="#8b5cf6" strokeWidth="0.5" />
          {/* Latitude lines */}
          <ellipse cx="50" cy="50" rx="48" ry="12" fill="none" stroke="#6366f1" strokeWidth="0.5" />
          <ellipse cx="50" cy="50" rx="48" ry="24" fill="none" stroke="#8b5cf6" strokeWidth="0.5" />
          <ellipse cx="50" cy="50" rx="48" ry="36" fill="none" stroke="#6366f1" strokeWidth="0.5" />
          <line x1="2" y1="50" x2="98" y2="50" stroke="#8b5cf6" strokeWidth="0.5" />
          {/* Longitude lines */}
          <ellipse cx="50" cy="50" rx="12" ry="48" fill="none" stroke="#6366f1" strokeWidth="0.5" />
          <ellipse cx="50" cy="50" rx="24" ry="48" fill="none" stroke="#8b5cf6" strokeWidth="0.5" />
          <ellipse cx="50" cy="50" rx="36" ry="48" fill="none" stroke="#6366f1" strokeWidth="0.5" />
          <line x1="50" y1="2" x2="50" y2="98" stroke="#8b5cf6" strokeWidth="0.5" />
        </svg>
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-40 md:h-40 rounded-full flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 50%, #3b82f6 100%)',
            boxShadow: '0 0 80px rgba(124, 58, 237, 0.6), inset 0 0 30px rgba(255, 255, 255, 0.1)',
          }}
        >
          {/* Inner wireframe globe */}
          <svg className="w-16 h-16 md:w-24 md:h-24" viewBox="0 0 100 100" style={{ opacity: 0.8 }}>
            <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="1.5" />
            <ellipse cx="50" cy="50" rx="45" ry="12" fill="none" stroke="white" strokeWidth="1" />
            <ellipse cx="50" cy="50" rx="45" ry="24" fill="none" stroke="white" strokeWidth="1" />
            <ellipse cx="50" cy="50" rx="45" ry="36" fill="none" stroke="white" strokeWidth="1" />
            <line x1="5" y1="50" x2="95" y2="50" stroke="white" strokeWidth="1" />
            <ellipse cx="50" cy="50" rx="12" ry="45" fill="none" stroke="white" strokeWidth="1" />
            <ellipse cx="50" cy="50" rx="24" ry="45" fill="none" stroke="white" strokeWidth="1" />
            <ellipse cx="50" cy="50" rx="36" ry="45" fill="none" stroke="white" strokeWidth="1" />
            <line x1="50" y1="5" x2="50" y2="95" stroke="white" strokeWidth="1" />
          </svg>
        </div>
        {/* Inner highlight */}
        <div 
          className="absolute top-4 left-4 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/20 blur-md"
        />
      </div>

      {/* Floating Geometric Shapes with Icons */}
      {/* Top floating element - Circle - Idea - Purple */}
      <div 
        className="absolute flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full"
        style={{
          top: '12%',
          right: '22%',
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.9) 0%, rgba(167, 139, 250, 0.5) 100%)',
          boxShadow: '0 0 25px rgba(139, 92, 246, 0.5)',
          animation: 'float3 6s ease-in-out infinite',
        }}
      >
        <Lightbulb className="w-5 h-5 md:w-7 md:h-7 text-white" />
      </div>

      {/* Top right - Small circle - Design - Blue */}
      <div 
        className="absolute flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full"
        style={{
          top: '22%',
          right: '12%',
          background: 'linear-gradient(135deg, #0041A8 0%, #3b82f6 100%)',
          boxShadow: '0 0 20px rgba(0, 71, 171, 0.4)',
          animation: 'float2 5s ease-in-out infinite',
        }}
      >
        <Palette className="w-4 h-4 md:w-5 md:h-5 text-white" />
      </div>

      {/* Right side - Rectangle - Code - Purple */}
      <div 
        className="absolute flex items-center justify-center w-8 h-12 md:w-10 md:h-16 rounded-lg"
        style={{
          top: '38%',
          right: '8%',
          background: 'linear-gradient(180deg, rgba(124, 58, 237, 0.8) 0%, rgba(139, 92, 246, 0.5) 100%)',
          boxShadow: '0 0 20px rgba(124, 58, 237, 0.4)',
          transform: 'rotate(15deg)',
          animation: 'float4 7s ease-in-out infinite',
        }}
      >
        <Code className="w-4 h-4 md:w-5 md:h-5 text-white" style={{ transform: 'rotate(-15deg)' }} />
      </div>

      {/* Bottom right - Circle - Marketing - Blue */}
      <div 
        className="absolute flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full"
        style={{
          bottom: '18%',
          right: '18%',
          background: 'linear-gradient(135deg, rgba(0, 82, 212, 0.7) 0%, rgba(59, 130, 246, 0.4) 100%)',
          boxShadow: '0 0 25px rgba(0, 82, 212, 0.4)',
          animation: 'float1 4s ease-in-out infinite',
        }}
      >
        <Megaphone className="w-5 h-5 md:w-7 md:h-7 text-white" />
      </div>

      {/* Bottom - Small circle - Strategy - Purple */}
      <div 
        className="absolute flex items-center justify-center w-7 h-7 md:w-9 md:h-9 rounded-full"
        style={{
          bottom: '28%',
          left: '48%',
          background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)',
          boxShadow: '0 0 20px rgba(124, 58, 237, 0.5)',
          animation: 'float5 5.5s ease-in-out infinite',
        }}
      >
        <Target className="w-3 h-3 md:w-4 md:h-4 text-white" />
      </div>

      {/* Left side - Circle - Growth - Blue */}
      <div 
        className="absolute flex items-center justify-center w-9 h-9 md:w-12 md:h-12 rounded-full"
        style={{
          top: '33%',
          left: '12%',
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.8) 0%, rgba(0, 71, 171, 0.5) 100%)',
          boxShadow: '0 0 25px rgba(59, 130, 246, 0.4)',
          animation: 'float2 6.5s ease-in-out infinite',
        }}
      >
        <TrendingUp className="w-4 h-4 md:w-6 md:h-6 text-white" />
      </div>

      {/* Top left - Small element - Innovation - Purple */}
      <div 
        className="absolute flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full"
        style={{
          top: '18%',
          left: '22%',
          background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
          boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)',
          animation: 'float4 4.5s ease-in-out infinite',
        }}
      >
        <Zap className="w-4 h-4 md:w-5 md:h-5 text-white" />
      </div>

      {/* Floating particles/dots - Blue and Purple */}
      <div 
        className="absolute w-2 h-2 rounded-full bg-purple-400"
        style={{
          top: '30%',
          left: '35%',
          animation: 'float1 3s ease-in-out infinite',
        }}
      />
      <div 
        className="absolute w-1.5 h-1.5 rounded-full bg-blue-400"
        style={{
          top: '60%',
          right: '30%',
          animation: 'float3 4.2s ease-in-out infinite',
        }}
      />
      <div 
        className="absolute w-2 h-2 rounded-full bg-purple-300"
        style={{
          bottom: '25%',
          left: '20%',
          animation: 'float5 5s ease-in-out infinite',
        }}
      />

      {/* Connection lines effect */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.2 }}>
        <defs>
          <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {/* Lines from center to floating elements */}
        <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="url(#lineGrad1)" strokeWidth="1" />
        <line x1="50%" y1="50%" x2="85%" y2="40%" stroke="url(#lineGrad1)" strokeWidth="0.8" />
        <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="url(#lineGrad1)" strokeWidth="1" />
        <line x1="50%" y1="50%" x2="25%" y2="35%" stroke="url(#lineGrad1)" strokeWidth="0.8" />
        <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="url(#lineGrad1)" strokeWidth="1" />
        <line x1="50%" y1="50%" x2="50%" y2="70%" stroke="url(#lineGrad1)" strokeWidth="0.6" />
        {/* Lines between floating elements */}
        <line x1="75%" y1="25%" x2="85%" y2="40%" stroke="#8b5cf6" strokeWidth="0.5" strokeOpacity="0.3" />
        <line x1="85%" y1="40%" x2="80%" y2="80%" stroke="#3b82f6" strokeWidth="0.5" strokeOpacity="0.3" />
        <line x1="80%" y1="80%" x2="50%" y2="70%" stroke="#8b5cf6" strokeWidth="0.5" strokeOpacity="0.3" />
        <line x1="50%" y1="70%" x2="25%" y2="35%" stroke="#3b82f6" strokeWidth="0.5" strokeOpacity="0.3" />
        <line x1="25%" y1="35%" x2="20%" y2="20%" stroke="#8b5cf6" strokeWidth="0.5" strokeOpacity="0.3" />
        <line x1="20%" y1="20%" x2="75%" y2="25%" stroke="#3b82f6" strokeWidth="0.5" strokeOpacity="0.3" />
      </svg>

      {/* CSS Keyframe Animations */}
      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-30px) translateX(10px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-25px) translateX(-15px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          50% { transform: translateY(-28px) translateX(8px) scale(1.08); }
        }
        @keyframes float4 {
          0%, 100% { transform: translateY(0px) rotate(15deg); }
          50% { transform: translateY(-35px) rotate(25deg); }
        }
        @keyframes float5 {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(0.85); }
        }
      `}</style>
    </div>
  );
}
