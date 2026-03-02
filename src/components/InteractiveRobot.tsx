import { useState } from 'react';

export function InteractiveRobot() {
  const [isHovered, setIsHovered] = useState(false);
  const [isJumping, setIsJumping] = useState(false);

  const handleClick = () => {
    setIsJumping(true);
    setTimeout(() => setIsJumping(false), 500);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div
        className={`relative w-36 h-36 md:w-48 md:h-48 cursor-pointer transition-transform duration-300 ${
          isHovered ? 'scale-110' : 'scale-100'
        } ${isJumping ? 'animate-jump' : 'animate-float'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        {/* Robot Image with white background removed */}
        <img
          src="/robot.png"
          alt="Robot"
          className={`w-full h-full object-contain transition-transform duration-300 ${
            isHovered ? 'rotate-3' : 'rotate-0'
          }`}
          style={{
            background: 'transparent',
            filter: isHovered 
              ? 'drop-shadow(0 0 20px rgba(0,255,255,0.6))' 
              : 'drop-shadow(0 0 10px rgba(0,255,255,0.3))',
          }}
        />
        
        {/* Sparkle effect on hover */}
        {isHovered && (
          <>
            <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-300 rounded-full animate-ping" />
            <div className="absolute top-4 left-4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" />
            <div className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
          </>
        )}
      </div>
      
      {/* All animation keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-5px) rotate(-2deg);
          }
          50% {
            transform: translateY(-10px) rotate(0deg);
          }
          75% {
            transform: translateY(-5px) rotate(2deg);
          }
        }
        
        @keyframes jump {
          0% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-30px) scale(1.1);
          }
          100% {
            transform: translateY(0px) scale(1);
          }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-jump {
          animation: jump 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
