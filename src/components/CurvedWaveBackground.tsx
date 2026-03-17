interface CurvedWaveBackgroundProps {
  className?: string;
}

export function CurvedWaveBackground({ className = '' }: CurvedWaveBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Animated curved line waves - only grouped lines */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        {/* Group 1 - Upper area - compact waves */}
        <path
          d="M-200,80 Q360,30 720,80 T1640,80"
          fill="none"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1.5"
          style={{ animation: 'waveGroup1 6s ease-in-out infinite' }}
        />
        <path
          d="M-200,130 Q360,80 720,130 T1640,130"
          fill="none"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1.5"
          style={{ animation: 'waveGroup1 6s ease-in-out infinite', animationDelay: '0.3s' }}
        />
        
        {/* Group 2 - Center area - main grouped waves */}
        <path
          d="M-200,280 Q480,210 720,280 T1640,280"
          fill="none"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="2"
          style={{ animation: 'waveGroup2 5s ease-in-out infinite' }}
        />
        <path
          d="M-200,340 Q480,270 720,340 T1640,340"
          fill="none"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2"
          style={{ animation: 'waveGroup2 5s ease-in-out infinite', animationDelay: '0.4s' }}
        />
        <path
          d="M-200,400 Q480,330 720,400 T1640,400"
          fill="none"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="2"
          style={{ animation: 'waveGroup2 5s ease-in-out infinite', animationDelay: '0.8s' }}
        />
        
        {/* Group 3 - Lower area - compact waves */}
        <path
          d="M-200,520 Q360,470 720,520 T1640,520"
          fill="none"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1.5"
          style={{ animation: 'waveGroup3 7s ease-in-out infinite', animationDelay: '0.5s' }}
        />
        <path
          d="M-200,570 Q360,520 720,570 T1640,570"
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1.5"
          style={{ animation: 'waveGroup3 7s ease-in-out infinite', animationDelay: '0.8s' }}
        />
      </svg>
      
      {/* CSS animations for grouped waves */}
      <style>{`
        @keyframes waveGroup1 {
          0%, 100% { 
            transform: translateX(0) translateY(0);
          }
          50% { 
            transform: translateX(40px) translateY(-15px);
          }
        }
        @keyframes waveGroup2 {
          0%, 100% { 
            transform: translateX(0) translateY(0);
          }
          33% { 
            transform: translateX(30px) translateY(-10px);
          }
          66% { 
            transform: translateX(-20px) translateY(10px);
          }
        }
        @keyframes waveGroup3 {
          0%, 100% { 
            transform: translateX(0) translateY(0);
          }
          50% { 
            transform: translateX(-35px) translateY(20px);
          }
        }
      `}</style>
    </div>
  );
}
