import { useState, useRef } from 'react';

export function InteractiveRobot() {
  const [isHovered, setIsHovered] = useState(false);
  const [isOnLeft, setIsOnLeft] = useState(false);
  const [isSliding, setIsSliding] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);

  const handleClick = () => {
    if (isSliding) return;
    
    setIsSliding(true);
    
    // Calculate the width of the screen to slide across
    const screenWidth = window.innerWidth;
    const robotWidth = containerRef.current?.offsetWidth || 144;
    const distance = screenWidth - robotWidth - 32; // 32px for margins
    
    // Slide to the opposite side
    const newIsOnLeft = !isOnLeft;
    setIsOnLeft(newIsOnLeft);
    setTranslateX(newIsOnLeft ? distance : -distance);
    
    // Reset after animation completes
    setTimeout(() => {
      setIsSliding(false);
      setTranslateX(0);
    }, 1500);
  };

  return (
    <div 
      ref={containerRef}
      className="fixed bottom-4 right-4 z-50"
      style={{
        transform: isSliding ? `translateX(${translateX}px)` : 'none',
        transition: isSliding ? 'transform 1500ms ease-in-out' : 'none',
      }}
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
            isOnLeft ? 'scale-x-[-1]' : 'scale-x-100'
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
