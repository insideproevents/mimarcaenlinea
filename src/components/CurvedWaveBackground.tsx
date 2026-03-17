interface CurvedWaveBackgroundProps {
  className?: string;
}

export function CurvedWaveBackground({ className = '' }: CurvedWaveBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Animated curved line waves - thinner and closer together */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        {/* Upper area waves - closer together */}
        <path
          d="M-200,40 Q360,20 720,40 T1640,40"
          fill="none"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="1.5"
          style={{ animation: 'waveMove1 8s ease-in-out infinite' }}
        />
        <path
          d="M-200,65 Q480,45 720,65 T1640,65"
          fill="none"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="1.5"
          style={{ animation: 'waveMove2 7s ease-in-out infinite', animationDelay: '0.3s' }}
        />
        <path
          d="M-200,90 Q360,70 720,90 T1640,90"
          fill="none"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1.2"
          style={{ animation: 'waveMove3 9s ease-in-out infinite', animationDelay: '0.6s' }}
        />
        
        {/* Middle-upper area waves - closer together */}
        <path
          d="M-200,120 Q480,95 720,120 T1640,120"
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1.8"
          style={{ animation: 'waveMove1 6s ease-in-out infinite', animationDelay: '0.2s' }}
        />
        <path
          d="M-200,145 Q360,120 720,145 T1640,145"
          fill="none"
          stroke="rgba(255,255,255,0.28)"
          strokeWidth="1.5"
          style={{ animation: 'waveMove2 7.5s ease-in-out infinite', animationDelay: '0.5s' }}
        />
        <path
          d="M-200,170 Q480,145 720,170 T1640,170"
          fill="none"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="1.5"
          style={{ animation: 'waveMove3 8s ease-in-out infinite', animationDelay: '0.8s' }}
        />
        
        {/* Center area waves - main cluster, closer */}
        <path
          d="M-200,200 Q360,170 720,200 T1640,200"
          fill="none"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="2"
          style={{ animation: 'waveMove1 5s ease-in-out infinite', animationDelay: '0.3s' }}
        />
        <path
          d="M-200,225 Q480,195 720,225 T1640,225"
          fill="none"
          stroke="rgba(255,255,255,0.32)"
          strokeWidth="1.8"
          style={{ animation: 'waveMove2 6s ease-in-out infinite', animationDelay: '0.6s' }}
        />
        <path
          d="M-200,250 Q360,220 720,250 T1640,250"
          fill="none"
          stroke="rgba(255,255,255,0.28)"
          strokeWidth="1.5"
          style={{ animation: 'waveMove3 7s ease-in-out infinite', animationDelay: '0.9s' }}
        />
        <path
          d="M-200,275 Q480,245 720,275 T1640,275"
          fill="none"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="1.5"
          style={{ animation: 'waveMove1 6s ease-in-out infinite', animationDelay: '1.2s' }}
        />
        
        {/* Middle-lower area waves - closer together */}
        <path
          d="M-200,305 Q360,275 720,305 T1640,305"
          fill="none"
          stroke="rgba(255,255,255,0.28)"
          strokeWidth="1.5"
          style={{ animation: 'waveMove2 7s ease-in-out infinite', animationDelay: '0.4s' }}
        />
        <path
          d="M-200,330 Q480,300 720,330 T1640,330"
          fill="none"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="1.5"
          style={{ animation: 'waveMove3 8s ease-in-out infinite', animationDelay: '0.7s' }}
        />
        <path
          d="M-200,355 Q360,325 720,355 T1640,355"
          fill="none"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="1.2"
          style={{ animation: 'waveMove1 8s ease-in-out infinite', animationDelay: '1s' }}
        />
        
        {/* Lower area waves - closer together */}
        <path
          d="M-200,385 Q480,355 720,385 T1640,385"
          fill="none"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1.2"
          style={{ animation: 'waveMove2 9s ease-in-out infinite', animationDelay: '0.5s' }}
        />
        <path
          d="M-200,410 Q360,380 720,410 T1640,410"
          fill="none"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1"
          style={{ animation: 'waveMove3 8s ease-in-out infinite', animationDelay: '0.8s' }}
        />
        <path
          d="M-200,435 Q480,405 720,435 T1640,435"
          fill="none"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="1"
          style={{ animation: 'waveMove1 10s ease-in-out infinite', animationDelay: '1.1s' }}
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
