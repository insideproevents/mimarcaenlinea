import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Facebook, Instagram, X } from 'lucide-react';

export function InteractiveRobot() {
  const [isHovered] = useState(false);

  const [position, setPosition] = useState<'left' | 'right'>('right');
const [isAnimating, setIsAnimating] = useState(false);
  const [showSocials, setShowSocials] = useState(false);
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

    setShowSocials(true);

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
          className="relative w-28 h-28 md:w-48 md:h-48 cursor-pointer active:scale-[1.05] transition-transform duration-200"
          onClick={handleClick}
        >
          {/* Robot Image - flip based on position to face direction of movement */}
          <div className="relative w-full h-full">
            <img
              src="/robot.png"
              alt="Robot"
              className={`w-full h-full object-contain transition-all duration-200 ${position === 'left' ? 'scale-x-[-1]' : ''}`}
              style={{
                background: 'transparent',
                filter: 'drop-shadow(0 0 10px rgba(0,255,255,0.3)) drop-shadow(0 0 20px rgba(0,255,255,0.1))',
              }}
            />
          </div>
          
          {/* Sparkle effect on hover */}
          {isHovered && (
            <>
              <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-300 rounded-full animate-ping" />
              <div className="absolute top-4 left-4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" />
              <div className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
            </>
          )}



          {/* Social icons - floating circles */}
{showSocials && (
            <>
              <div className="absolute -top-2 -right-2 w-8 h-8 md:w-10 md:h-10 bg-green-500 animate-float-slow rounded-full flex items-center justify-center shadow-lg z-30">
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <div className="absolute top-1 left-1 w-8 h-8 md:w-10 md:h-10 bg-blue-600 animate-float-medium rounded-full flex items-center justify-center shadow-lg z-30">
                <Facebook className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <div className="absolute bottom-1 -right-1 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-pink-500 to-purple-500 animate-float-slow2 rounded-full flex items-center justify-center shadow-lg z-30">
                <Instagram className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <div className="absolute bottom-2 left-2 w-8 h-8 md:w-10 md:h-10 bg-black animate-float-fast rounded-full flex items-center justify-center shadow-lg z-30">
                <X className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
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

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes float-medium {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float-slow2 {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-14px);
          }
        }

        @keyframes float-fast {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        }

        @keyframes orbit {
          0% {
            transform: translateX(50px) translateY(0) scale(1);
            opacity: 0.3;
          }
          25% {
            transform: translateX(0) translateY(-50px) scale(0.7);
            opacity: 1;
          }
          50% {
            transform: translateX(-50px) translateY(0) scale(1);
            opacity: 0.3;
          }
          75% {
            transform: translateX(0) translateY(50px) scale(0.7);
            opacity: 1;
          }
          100% {
            transform: translateX(50px) translateY(0) scale(1);
            opacity: 0.3;
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float-medium 4.5s ease-in-out infinite;
        }

        .animate-float-slow2 {
          animation: float-slow2 5.5s ease-in-out infinite;
        }

        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }

        .animate-orbit {
          animation: orbit 4s linear infinite;
        }
      `}</style>
    </div>
  );
}
