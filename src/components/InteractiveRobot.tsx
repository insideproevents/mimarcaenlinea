import { useState, useRef, useEffect } from 'react';

export function InteractiveRobot() {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState<'left' | 'right'>('right');
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const startXRef = useRef<number>(0);
  const targetXRef = useRef<number>(0);
  const currentXRef = useRef<number>(0);

  const DURATION = 1500; // 1.5 seconds for smooth animation

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const animateSlide = (fromX: number, toX: number) => {
    startXRef.current = fromX;
    targetXRef.current = toX;
    currentXRef.current = fromX;
    startTimeRef.current = performance.now();
    setIsAnimating(true);

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / DURATION, 1);
      
      // Ease-in-out function for smoother motion
      const easedProgress = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      
      currentXRef.current = startXRef.current + (targetXRef.current - startXRef.current) * easedProgress;
      
      const container = containerRef.current;
      if (container) {
        container.style.transform = `translateX(${currentXRef.current}px)`;
      }

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
        currentXRef.current = targetXRef.current;
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  const handleClick = () => {
    if (isAnimating) return;

    const screenWidth = window.innerWidth;
    const robotWidth = containerRef.current?.offsetWidth || 144;
    const distance = screenWidth - robotWidth - 32;

    if (position === 'right') {
      // Slide from right (0) to left (-distance)
      animateSlide(0, -distance);
      setPosition('left');
    } else {
      // Slide from left (-distance) to right (distance)
      animateSlide(-distance, distance);
      setPosition('right');
    }
  };

  return (
    <div 
      ref={containerRef}
      className="fixed bottom-4 right-4 z-50"
    >
      <div
        className={`relative w-36 h-36 md:w-48 md:h-48 cursor-pointer ${
          isHovered ? 'scale-110' : 'scale-100'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        {/* Robot Image with white background removed */}
        <img
          src="/robot.png"
          alt="Robot"
          className={`w-full h-full object-contain ${
            position === 'left' ? 'scale-x-[-1]' : 'scale-x-100'
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
  );
}
