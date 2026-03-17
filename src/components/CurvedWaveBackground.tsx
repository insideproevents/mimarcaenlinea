interface CurvedWaveBackgroundProps {
  className?: string;
}

export function CurvedWaveBackground({ className = '' }: CurvedWaveBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Animated continuous curved line waves - full width without breaks */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 1920 800"
        preserveAspectRatio="none"
      >
        {/* Continuous horizontal wave lines - full width */}
        <path
          d="M-400,50 C-200,20 0,80 200,50 C400,20 600,80 800,50 C1000,20 1200,80 1400,50 C1600,20 1800,80 2000,50 C2200,20 2400,80 2400,50"
          fill="none"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="1.5"
          style={{ animation: 'waveFlow1 4s linear infinite' }}
        />
        <path
          d="M-400,85 C-200,55 0,115 200,85 C400,55 600,115 800,85 C1000,55 1200,115 1400,85 C1600,55 1800,115 2000,85 C2200,55 2400,115 2400,85"
          fill="none"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="1.5"
          style={{ animation: 'waveFlow2 4s linear infinite', animationDelay: '-0.7s' }}
        />
        <path
          d="M-400,120 C-200,90 0,150 200,120 C400,90 600,150 800,120 C1000,90 1200,150 1400,120 C1600,90 1800,150 2000,120 C2200,90 2400,150 2400,120"
          fill="none"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1.2"
          style={{ animation: 'waveFlow3 4s linear infinite', animationDelay: '-1.4s' }}
        />
        
        {/* Middle area waves */}
        <path
          d="M-400,160 C-200,130 0,190 200,160 C400,130 600,190 800,160 C1000,130 1200,190 1400,160 C1600,130 1800,190 2000,160 C2200,130 2400,190 2400,160"
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1.8"
          style={{ animation: 'waveFlow1 3.5s linear infinite', animationDelay: '-0.3s' }}
        />
        <path
          d="M-400,195 C-200,165 0,225 200,195 C400,165 600,225 800,195 C1000,165 1200,225 1400,195 C1600,165 1800,225 2000,195 C2200,165 2400,225 2400,195"
          fill="none"
          stroke="rgba(255,255,255,0.28)"
          strokeWidth="1.5"
          style={{ animation: 'waveFlow2 3.5s linear infinite', animationDelay: '-1s' }}
        />
        <path
          d="M-400,230 C-200,200 0,260 200,230 C400,200 600,260 800,230 C1000,200 1200,260 1400,230 C1600,200 1800,260 2000,230 C2200,200 2400,260 2400,230"
          fill="none"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="1.5"
          style={{ animation: 'waveFlow3 3.5s linear infinite', animationDelay: '-1.7s' }}
        />
        
        {/* Center area waves - main cluster */}
        <path
          d="M-400,270 C-200,240 0,300 200,270 C400,240 600,300 800,270 C1000,240 1200,300 1400,270 C1600,240 1800,300 2000,270 C2200,240 2400,300 2400,270"
          fill="none"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="2"
          style={{ animation: 'waveFlow1 3s linear infinite', animationDelay: '-0.2s' }}
        />
        <path
          d="M-400,305 C-200,275 0,335 200,305 C400,275 600,335 800,305 C1000,275 1200,335 1400,305 C1600,275 1800,335 2000,305 C2200,275 2400,335 2400,305"
          fill="none"
          stroke="rgba(255,255,255,0.32)"
          strokeWidth="1.8"
          style={{ animation: 'waveFlow2 3s linear infinite', animationDelay: '-0.8s' }}
        />
        <path
          d="M-400,340 C-200,310 0,370 200,340 C400,310 600,370 800,340 C1000,310 1200,370 1400,340 C1600,310 1800,370 2000,340 C2200,310 2400,370 2400,340"
          fill="none"
          stroke="rgba(255,255,255,0.28)"
          strokeWidth="1.5"
          style={{ animation: 'waveFlow3 3s linear infinite', animationDelay: '-1.4s' }}
        />
        <path
          d="M-400,375 C-200,345 0,405 200,375 C400,345 600,405 800,375 C1000,345 1200,405 1400,375 C1600,345 1800,405 2000,375 C2200,345 2400,405 2400,375"
          fill="none"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="1.5"
          style={{ animation: 'waveFlow1 3s linear infinite', animationDelay: '-2s' }}
        />
        
        {/* Middle-lower area waves */}
        <path
          d="M-400,415 C-200,385 0,445 200,415 C400,385 600,445 800,415 C1000,385 1200,445 1400,415 C1600,385 1800,445 2000,415 C2200,385 2400,445 2400,415"
          fill="none"
          stroke="rgba(255,255,255,0.28)"
          strokeWidth="1.5"
          style={{ animation: 'waveFlow2 3.5s linear infinite', animationDelay: '-0.5s' }}
        />
        <path
          d="M-400,450 C-200,420 0,480 200,450 C400,420 600,480 800,450 C1000,420 1200,480 1400,450 C1600,420 1800,480 2000,450 C2200,420 2400,480 2400,450"
          fill="none"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="1.5"
          style={{ animation: 'waveFlow3 3.5s linear infinite', animationDelay: '-1.2s' }}
        />
        <path
          d="M-400,485 C-200,455 0,515 200,485 C400,455 600,515 800,485 C1000,455 1200,515 1400,485 C1600,455 1800,515 2000,485 C2200,455 2400,515 2400,485"
          fill="none"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="1.2"
          style={{ animation: 'waveFlow1 3.5s linear infinite', animationDelay: '-1.9s' }}
        />
        
        {/* Lower area waves */}
        <path
          d="M-400,525 C-200,495 0,555 200,525 C400,495 600,555 800,525 C1000,495 1200,555 1400,525 C1600,495 1800,555 2000,525 C2200,495 2400,555 2400,525"
          fill="none"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1.2"
          style={{ animation: 'waveFlow2 4s linear infinite', animationDelay: '-0.6s' }}
        />
        <path
          d="M-400,560 C-200,530 0,590 200,560 C400,530 600,590 800,560 C1000,530 1200,590 1400,560 C1600,530 1800,590 2000,560 C2200,530 2400,590 2400,560"
          fill="none"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1"
          style={{ animation: 'waveFlow3 4s linear infinite', animationDelay: '-1.3s' }}
        />
      </svg>
      
      {/* CSS animations - flowing wave motion */}
      <style>{`
        @keyframes waveFlow1 {
          0% { 
            transform: translateX(0);
          }
          100% { 
            transform: translateX(-800px);
          }
        }
        @keyframes waveFlow2 {
          0% { 
            transform: translateX(0);
          }
          100% { 
            transform: translateX(-800px);
          }
        }
        @keyframes waveFlow3 {
          0% { 
            transform: translateX(0);
          }
          100% { 
            transform: translateX(-800px);
          }
        }
      `}</style>
    </div>
  );
}
