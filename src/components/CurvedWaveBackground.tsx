interface CurvedWaveBackgroundProps {
  className?: string;
}

export function CurvedWaveBackground({ className = '' }: CurvedWaveBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Animated curved line waves - moving like water waves */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        {/* Wave lines with horizontal wave motion */}
        <path
          d="M-200,40 Q200,10 360,40 T720,60 T1080,40 T1440,60 T1640,40"
          fill="none"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="1.5"
          style={{ animation: 'waveFlow1 3s linear infinite' }}
        />
        <path
          d="M-200,70 Q200,40 360,70 T720,90 T1080,70 T1440,90 T1640,70"
          fill="none"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="1.5"
          style={{ animation: 'waveFlow2 3s linear infinite', animationDelay: '-0.5s' }}
        />
        <path
          d="M-200,100 Q200,70 360,100 T720,120 T1080,100 T1440,120 T1640,100"
          fill="none"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1.2"
          style={{ animation: 'waveFlow3 3s linear infinite', animationDelay: '-1s' }}
        />
        
        {/* Middle area waves */}
        <path
          d="M-200,135 Q200,100 360,135 T720,160 T1080,135 T1440,160 T1640,135"
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1.8"
          style={{ animation: 'waveFlow1 2.5s linear infinite', animationDelay: '-0.3s' }}
        />
        <path
          d="M-200,165 Q200,130 360,165 T720,190 T1080,165 T1440,190 T1640,165"
          fill="none"
          stroke="rgba(255,255,255,0.28)"
          strokeWidth="1.5"
          style={{ animation: 'waveFlow2 2.5s linear infinite', animationDelay: '-0.8s' }}
        />
        <path
          d="M-200,195 Q200,160 360,195 T720,220 T1080,195 T1440,220 T1640,195"
          fill="none"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="1.5"
          style={{ animation: 'waveFlow3 2.5s linear infinite', animationDelay: '-1.3s' }}
        />
        
        {/* Center area waves - main cluster */}
        <path
          d="M-200,230 Q200,190 360,230 T720,260 T1080,230 T1440,260 T1640,230"
          fill="none"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="2"
          style={{ animation: 'waveFlow1 2s linear infinite', animationDelay: '-0.2s' }}
        />
        <path
          d="M-200,260 Q200,220 360,260 T720,290 T1080,260 T1440,290 T1640,260"
          fill="none"
          stroke="rgba(255,255,255,0.32)"
          strokeWidth="1.8"
          style={{ animation: 'waveFlow2 2s linear infinite', animationDelay: '-0.7s' }}
        />
        <path
          d="M-200,290 Q200,250 360,290 T720,320 T1080,290 T1440,320 T1640,290"
          fill="none"
          stroke="rgba(255,255,255,0.28)"
          strokeWidth="1.5"
          style={{ animation: 'waveFlow3 2s linear infinite', animationDelay: '-1.2s' }}
        />
        <path
          d="M-200,320 Q200,280 360,320 T720,350 T1080,320 T1440,350 T1640,320"
          fill="none"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="1.5"
          style={{ animation: 'waveFlow1 2s linear infinite', animationDelay: '-1.7s' }}
        />
        
        {/* Middle-lower area waves */}
        <path
          d="M-200,355 Q200,315 360,355 T720,385 T1080,355 T1440,385 T1640,355"
          fill="none"
          stroke="rgba(255,255,255,0.28)"
          strokeWidth="1.5"
          style={{ animation: 'waveFlow2 2.5s linear infinite', animationDelay: '-0.4s' }}
        />
        <path
          d="M-200,385 Q200,345 360,385 T720,415 T1080,385 T1440,415 T1640,385"
          fill="none"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="1.5"
          style={{ animation: 'waveFlow3 2.5s linear infinite', animationDelay: '-0.9s' }}
        />
        <path
          d="M-200,415 Q200,375 360,415 T720,445 T1080,415 T1440,445 T1640,415"
          fill="none"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="1.2"
          style={{ animation: 'waveFlow1 2.5s linear infinite', animationDelay: '-1.4s' }}
        />
        
        {/* Lower area waves */}
        <path
          d="M-200,450 Q200,410 360,450 T720,480 T1080,450 T1440,480 T1640,450"
          fill="none"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1.2"
          style={{ animation: 'waveFlow2 3s linear infinite', animationDelay: '-0.6s' }}
        />
        <path
          d="M-200,480 Q200,440 360,480 T720,510 T1080,480 T1440,510 T1640,480"
          fill="none"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1"
          style={{ animation: 'waveFlow3 3s linear infinite', animationDelay: '-1.1s' }}
        />
      </svg>
      
      {/* CSS animations - flowing wave motion like water */}
      <style>{`
        @keyframes waveFlow1 {
          0% { 
            transform: translateX(0);
          }
          100% { 
            transform: translateX(1840px);
          }
        }
        @keyframes waveFlow2 {
          0% { 
            transform: translateX(0);
          }
          100% { 
            transform: translateX(1840px);
          }
        }
        @keyframes waveFlow3 {
          0% { 
            transform: translateX(0);
          }
          100% { 
            transform: translateX(1840px);
          }
        }
      `}</style>
    </div>
  );
}
