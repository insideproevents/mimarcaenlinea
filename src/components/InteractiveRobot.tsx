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
        
        {/* Eyes overlay - positioned over the robot's eyes */}
        <div className="absolute top-[35%] left-[20%] w-[60%] h-[25%] flex justify-center gap-8">
          {/* Left Eye - Eyelid for closing animation */}
          <div
            className="relative w-12 h-12 md:w-14 md:h-14 overflow-hidden rounded-full"
          >
            {/* Eyelid that closes */}
            <div
              className="absolute top-0 left-0 w-full bg-gray-300 transition-transform duration-200"
              style={{
                height: eyesClosed ? '100%' : '0%',
                transform: eyesClosed ? 'translateY(0)' : 'translateY(-100%)',
              }}
            />
          </div>
          
          {/* Right Eye - Eyelid for closing animation */}
          <div
            className="relative w-12 h-12 md:w-14 md:h-14 overflow-hidden rounded-full"
          >
            {/* Eyelid that closes */}
            <div
              className="absolute top-0 left-0 w-full bg-gray-300 transition-transform duration-200"
              style={{
                height: eyesClosed ? '100%' : '0%',
                transform: eyesClosed ? 'translateY(0)' : 'translateY(-100%)',
              }}
            />
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
