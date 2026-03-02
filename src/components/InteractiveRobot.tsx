import { useState, useEffect } from 'react';

export function InteractiveRobot() {
  const [eyesClosed, setEyesClosed] = useState(false);

  useEffect(() => {
    const closeEyes = () => setEyesClosed(true);
    const openEyes = () => setEyesClosed(false);

    const interval = setInterval(() => {
      closeEyes();
      setTimeout(() => {
        openEyes();
      }, 400); // Close eyes for 400ms
    }, 4000); // Every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 cursor-pointer">
      <div className="relative w-24 h-24 md:w-32 md:h-32 animate-float">
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
        
        {/* Eyes overlay - positioned over the robot's eyes */}
        <div className="absolute top-[30%] left-[25%] w-[50%] h-[20%] flex justify-center gap-1">
          {/* Left Eye */}
          <div
            className="relative w-4 h-4 md:w-5 md:h-5 bg-cyan-400 rounded-full transition-all duration-100"
            style={{
              transform: eyesClosed ? 'scaleY(0.1)' : 'scaleY(1)',
              transformOrigin: 'center',
            }}
          >
            {eyesClosed && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[2px] bg-gray-800" />
            )}
          </div>
          
          {/* Right Eye */}
          <div
            className="relative w-4 h-4 md:w-5 md:h-5 bg-cyan-400 rounded-full transition-all duration-100"
            style={{
              transform: eyesClosed ? 'scaleY(0.1)' : 'scaleY(1)',
              transformOrigin: 'center',
            }}
          >
            {eyesClosed && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[2px] bg-gray-800" />
            )}
          </div>
        </div>
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
