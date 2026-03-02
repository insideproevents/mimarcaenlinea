import { useState, useEffect } from 'react';

export function InteractiveRobot() {
  return (
    <div className="fixed bottom-4 right-4 z-50 cursor-pointer">
      <div className="relative w-36 h-36 md:w-48 md:h-48 animate-float">
        {/* Robot Image with white background removed */}
        <img
          src="/robot.png"
          alt="Robot"
          className="w-full h-full object-contain"
          style={{
            background: 'transparent',
            filter: 'drop-shadow(0 0 10px rgba(0,255,255,0.3))',
          }}
        />
      </div>
      
      {/* Floating animation keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
