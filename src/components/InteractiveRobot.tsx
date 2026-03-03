import { useState, useRef, useEffect } from 'react';

export function InteractiveRobot() {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState<'left' | 'right'>('right');
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  
  // Use refs to track actual position for animation
  const currentTranslateX = useRef(0);
  const DURATION = 1500; // 1.5 seconds for smooth animation

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const animateSlide = (fromX: number, toX: number, newPosition: 'left' | 'right') => {
    const startX = fromX;
    const targetX = toX;
    const startTime = performance.now();
    setIsAnimating(true);

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / DURATION, 1);
      
      // Ease-in-out function for smoother motion
      const easedProgress = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      
      const newX = startX + (targetX - startX) * easedProgress;
      currentTranslateX.current = newX;
      
      const container = containerRef.current;
      if (container) {
        container.style.transform = `translateX(${newX}px)`;
      }

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
        currentTranslateX.current = targetX;
        // Flip after arriving at destination
        setPosition(newPosition);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  const handleClick = () => {
    if (isAnimating) return;

    const screenWidth = window.innerWidth;
    const robotWidth = containerRef.current?.offsetWidth || 144;
    // Extra margin to ensure robot never leaves screen
    const margin = 64;
    const maxDistance = screenWidth - robotWidth - margin;

    if (position === 'right') {
      // Calculate actual current position and animate to left
      const currentX = currentTranslateX.current;
      const targetX = currentX - maxDistance;
      animateSlide(currentX, targetX, 'left');
    } else {
      // Calculate actual current position and animate to right
      const currentX = currentTranslateX.current;
      const targetX = currentX + maxDistance;
      animateSlide(currentX, targetX, 'right');
    }
  };

  return (
    <div 
      ref={containerRef}
      className="fixed bottom-4 right-4 z-50"
    >
      <div className="animate-float">
        <div
          className={`relative w-28 h-28 md:w-48 md:h-48 cursor-pointer ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleClick}
        >
          {/* Robot Image - flip based on position to face direction of movement */}
          <img
            src="/robot.png"
            alt="Robot"
            className={`w-full h-full object-contain transition-transform duration-300 ${
              position === 'left' ? 'scale-x-[-1]' : ''
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

          {/* Orbiting particles */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Particle 1 - Large, outer orbit */}
            <div 
              className="absolute w-1.5 h-1.5 bg-cyan-300 rounded-full animate-orbit-1"
              style={{ 
                opacity: 0.8,
                filter: 'blur(0.5px)',
                animationDuration: '4s',
                animationDelay: '0s'
              }}
            />
            {/* Particle 2 - Medium orbit */}
            <div 
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-orbit-2"
              style={{ 
                opacity: 0.6,
                filter: 'blur(0.5px)',
                animationDuration: '3s',
                animationDelay: '0.5s'
              }}
            />
            {/* Particle 3 - Small, fast orbit */}
            <div 
              className="absolute w-0.5 h-0.5 bg-cyan-200 rounded-full animate-orbit-3"
              style={{ 
                opacity: 0.9,
                filter: 'blur(0.5px)',
                animationDuration: '2.5s',
                animationDelay: '1s'
              }}
            />
            {/* Particle 4 - Medium orbit opposite */}
            <div 
              className="absolute w-1.2 h-1.2 bg-cyan-300 rounded-full animate-orbit-4"
              style={{ 
                opacity: 0.7,
                filter: 'blur(0.5px)',
                animationDuration: '3.5s',
                animationDelay: '1.5s'
              }}
            />
            {/* Particle 5 - Small, outer orbit */}
            <div 
              className="absolute w-0.8 h-0.8 bg-cyan-400 rounded-full animate-orbit-5"
              style={{ 
                opacity: 0.5,
                filter: 'blur(0.5px)',
                animationDuration: '4.5s',
                animationDelay: '2s'
              }}
            />
            {/* Particle 6 - Extra small fast */}
            <div 
              className="absolute w-0.4 h-0.4 bg-cyan-200 rounded-full animate-orbit-6"
              style={{ 
                opacity: 0.8,
                filter: 'blur(0.5px)',
                animationDuration: '2s',
                animationDelay: '0.3s'
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Floating animation */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes orbit1 {
          0% { top: 10%; left: 50%; transform: translateX(-50%); opacity: 0.3; }
          25% { top: 50%; left: 90%; transform: translateX(-50%); opacity: 1; }
          50% { top: 90%; left: 50%; transform: translateX(-50%); opacity: 0.3; }
          75% { top: 50%; left: 10%; transform: translateX(-50%); opacity: 1; }
          100% { top: 10%; left: 50%; transform: translateX(-50%); opacity: 0.3; }
        }

        @keyframes orbit2 {
          0% { top: 20%; left: 80%; opacity: 0.6; }
          25% { top: 80%; left: 50%; opacity: 0.3; }
          50% { top: 20%; left: 20%; opacity: 0.6; }
          75% { top: 80%; left: 50%; opacity: 0.3; }
          100% { top: 20%; left: 80%; opacity: 0.6; }
        }

        @keyframes orbit3 {
          0% { top: 50%; left: 10%; opacity: 0.9; }
          25% { top: 10%; left: 50%; opacity: 0.4; }
          50% { top: 50%; left: 90%; opacity: 0.9; }
          75% { top: 90%; left: 50%; opacity: 0.4; }
          100% { top: 50%; left: 10%; opacity: 0.9; }
        }

        @keyframes orbit4 {
          0% { top: 30%; left: 70%; opacity: 0.7; }
          25% { top: 70%; left: 30%; opacity: 0.3; }
          50% { top: 30%; left: 30%; opacity: 0.7; }
          75% { top: 70%; left: 70%; opacity: 0.3; }
          100% { top: 30%; left: 70%; opacity: 0.7; }
        }

        @keyframes orbit5 {
          0% { top: 40%; left: 60%; opacity: 0.5; }
          25% { top: 60%; left: 40%; opacity: 0.8; }
          50% { top: 40%; left: 40%; opacity: 0.5; }
          75% { top: 60%; left: 60%; opacity: 0.8; }
          100% { top: 40%; left: 60%; opacity: 0.5; }
        }

        @keyframes orbit6 {
          0% { top: 15%; left: 40%; opacity: 0.8; }
          25% { top: 40%; left: 85%; opacity: 0.4; }
          50% { top: 85%; left: 60%; opacity: 0.8; }
          75% { top: 60%; left: 15%; opacity: 0.4; }
          100% { top: 15%; left: 40%; opacity: 0.8; }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-orbit-1 {
          animation: orbit1 4s linear infinite;
        }

        .animate-orbit-2 {
          animation: orbit2 3s linear infinite;
        }

        .animate-orbit-3 {
          animation: orbit3 2.5s linear infinite;
        }

        .animate-orbit-4 {
          animation: orbit4 3.5s linear infinite;
        }

        .animate-orbit-5 {
          animation: orbit5 4.5s linear infinite;
        }

        .animate-orbit-6 {
          animation: orbit6 2s linear infinite;
        }
      `}</style>
    </div>
  );
}
