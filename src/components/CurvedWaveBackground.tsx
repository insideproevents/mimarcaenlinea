interface CurvedWaveBackgroundProps {
  className?: string;
}

export function CurvedWaveBackground({ className = '' }: CurvedWaveBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Animated curved line waves - spread across section like reference */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        {/* Upper area waves */}
        <path
          d="M-200,60 Q360,20 720,60 T1640,60"
          fill="none"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="3"
          style={{ animation: 'waveMove1 8s ease-in-out infinite' }}
        />
        <path
          d="M-200,100 Q480,50 720,100 T1640,100"
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="3"
          style={{ animation: 'waveMove2 7s ease-in-out infinite', animationDelay: '0.5s' }}
        />
        <path
          d="M-200,150 Q360,110 720,150 T1640,150"
          fill="none"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="2.5"
          style={{ animation: 'waveMove3 9s ease-in-out infinite', animationDelay: '1s' }}
        />
        
        {/* Middle-upper area waves */}
        <path
          d="M-200,200 Q480,150 720,200 T1640,200"
          fill="none"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="4"
          style={{ animation: 'waveMove1 6s ease-in-out infinite', animationDelay: '0.2s' }}
        />
        <path
          d="M-200,250 Q360,200 720,250 T1640,250"
          fill="none"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="3.5"
          style={{ animation: 'waveMove2 7.5s ease-in-out infinite', animationDelay: '0.7s' }}
        />
        <path
          d="M-200,300 Q480,250 720,300 T1640,300"
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="3"
          style={{ animation: 'waveMove3 8s ease-in-out infinite', animationDelay: '1.2s' }}
        />
        
        {/* Center area waves - more prominent */}
        <path
          d="M-200,350 Q360,290 720,350 T1640,350"
          fill="none"
          stroke="rgba(255,255,255,0.45)"
          strokeWidth="4"
          style={{ animation: 'waveMove1 5s ease-in-out infinite', animationDelay: '0.3s' }}
        />
        <path
          d="M-200,400 Q480,340 720,400 T1640,400"
          fill="none"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="3.5"
          style={{ animation: 'waveMove2 6s ease-in-out infinite', animationDelay: '0.8s' }}
        />
        <path
          d="M-200,450 Q360,390 720,450 T1640,450"
          fill="none"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="3"
          style={{ animation: 'waveMove3 7s ease-in-out infinite', animationDelay: '1.5s' }}
        />
        
        {/* Middle-lower area waves */}
        <path
          d="M-200,500 Q480,440 720,500 T1640,500"
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="3"
          style={{ animation: 'waveMove1 8s ease-in-out infinite', animationDelay: '0.4s' }}
        />
        <path
          d="M-200,550 Q360,490 720,550 T1640,550"
          fill="none"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="3.5"
          style={{ animation: 'waveMove2 7s ease-in-out infinite', animationDelay: '1s' }}
        />
        <path
          d="M-200,600 Q480,540 720,600 T1640,600"
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="3"
          style={{ animation: 'waveMove3 8.5s ease-in-out infinite', animationDelay: '1.3s' }}
        />
        
        {/* Lower area waves */}
        <path
          d="M-200,650 Q360,600 720,650 T1640,650"
          fill="none"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="2.5"
          style={{ animation: 'waveMove1 9s ease-in-out infinite', animationDelay: '0.6s' }}
        />
        <path
          d="M-200,700 Q480,650 720,700 T1640,700"
          fill="none"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2"
          style={{ animation: 'waveMove2 8s ease-in-out infinite', animationDelay: '1.1s' }}
        />
        <path
          d="M-200,750 Q360,700 720,750 T1640,750"
          fill="none"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="2"
          style={{ animation: 'waveMove3 10s ease-in-out infinite', animationDelay: '1.6s' }}
        />
      </svg>
      
      {/* CSS animations */}
      <style>{`
        @keyframes waveMove1 {
          0%, 100% { 
            transform: translateX(0) translateY(0);
          }
          50% { 
            transform: translateX(50px) translateY(-20px);
          }
        }
        @keyframes waveMove2 {
          0%, 100% { 
            transform: translateX(0) translateY(0);
          }
          33% { 
            transform: translateX(40px) translateY(-15px);
          }
          66% { 
            transform: translateX(-30px) translateY(15px);
          }
        }
        @keyframes waveMove3 {
          0%, 100% { 
            transform: translateX(0) translateY(0);
          }
          50% { 
            transform: translateX(-45px) translateY(25px);
          }
        }
      `}</style>
    </div>
  );
}
