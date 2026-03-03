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
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
