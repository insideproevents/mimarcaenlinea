interface CurvedWaveBackgroundProps {
  className?: string;
}

export function CurvedWaveBackground({ className = '' }: CurvedWaveBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Animated curved line waves - multiple layers for visual appeal */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        {/* Main curved wave - visible and prominent */}
        <path
          d="M-200,100 C200,0 600,200 720,200 C840,200 1240,0 1640,100"
          fill="none"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="2"
          style={{ animation: 'wave1 4s ease-in-out infinite' }}
        />
        
        <path
          d="M-200,150 C200,50 600,250 720,250 C840,250 1240,50 1640,150"
          fill="none"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2"
          style={{ animation: 'wave1 4s ease-in-out infinite', animationDelay: '0.2s' }}
        />
        
        <path
          d="M-200,200 C200,100 600,300 720,300 C840,300 1240,100 1640,200"
          fill="none"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="2"
          style={{ animation: 'wave1 4s ease-in-out infinite', animationDelay: '0.4s' }}
        />
        
        <path
          d="M-200,250 C200,150 600,350 720,350 C840,350 1240,150 1640,250"
          fill="none"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="2"
          style={{ animation: 'wave1 4s ease-in-out infinite', animationDelay: '0.6s' }}
        />
        
        <path
          d="M-200,300 C200,200 600,400 720,400 C840,400 1240,200 1640,300"
          fill="none"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="2"
          style={{ animation: 'wave1 4s ease-in-out infinite', animationDelay: '0.8s' }}
        />
        
        <path
          d="M-200,350 C200,250 600,450 720,450 C840,450 1240,250 1640,350"
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="2"
          style={{ animation: 'wave1 4s ease-in-out infinite', animationDelay: '1s' }}
        />
        
        <path
          d="M-200,400 C200,300 600,500 720,500 C840,500 1240,300 1640,400"
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="2"
          style={{ animation: 'wave1 4s ease-in-out infinite', animationDelay: '1.2s' }}
        />
        
        <path
          d="M-200,450 C200,350 600,550 720,550 C840,550 1240,350 1640,450"
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="2"
          style={{ animation: 'wave1 4s ease-in-out infinite', animationDelay: '1.4s' }}
        />
        
        <path
          d="M-200,500 C200,400 600,600 720,600 C840,600 1240,400 1640,500"
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="2"
          style={{ animation: 'wave1 4s ease-in-out infinite', animationDelay: '1.6s' }}
        />
        
        <path
          d="M-200,550 C200,450 600,650 720,650 C840,650 1240,450 1640,550"
          fill="none"
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="2"
          style={{ animation: 'wave1 4s ease-in-out infinite', animationDelay: '1.8s' }}
        />
        
        {/* Second wave layer - offset for depth */}
        <path
          d="M-200,120 C300,20 500,220 720,220 C940,220 1140,20 1640,120"
          fill="none"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1.5"
          style={{ animation: 'wave2 5s ease-in-out infinite reverse' }}
        />
        
        <path
          d="M-200,180 C300,80 500,280 720,280 C940,280 1140,80 1640,180"
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1.5"
          style={{ animation: 'wave2 5s ease-in-out infinite reverse', animationDelay: '0.3s' }}
        />
        
        <path
          d="M-200,240 C300,140 500,340 720,340 C940,340 1140,140 1640,240"
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1.5"
          style={{ animation: 'wave2 5s ease-in-out infinite reverse', animationDelay: '0.6s' }}
        />
        
        <path
          d="M-200,300 C300,200 500,400 720,400 C940,400 1140,200 1640,300"
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1.5"
          style={{ animation: 'wave2 5s ease-in-out infinite reverse', animationDelay: '0.9s' }}
        />
        
        <path
          d="M-200,360 C300,260 500,460 720,460 C940,460 1140,260 1640,360"
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="1.5"
          style={{ animation: 'wave2 5s ease-in-out infinite reverse', animationDelay: '1.2s' }}
        />
        
        <path
          d="M-200,420 C300,320 500,520 720,520 C940,520 1140,320 1640,420"
          fill="none"
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="1.5"
          style={{ animation: 'wave2 5s ease-in-out infinite reverse', animationDelay: '1.5s' }}
        />
        
        {/* Additional decorative curves */}
        <path
          d="M0,280 Q360,180 720,280 Q1080,380 1440,280"
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
          style={{ animation: 'float3 6s ease-in-out infinite' }}
        />
        
        <path
          d="M0,380 Q360,280 720,380 Q1080,480 1440,380"
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
          style={{ animation: 'float3 7s ease-in-out infinite', animationDelay: '1s' }}
        />
        
        <path
          d="M0,480 Q360,380 720,480 Q1080,580 1440,480"
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="1"
          style={{ animation: 'float3 8s ease-in-out infinite', animationDelay: '2s' }}
        />
      </svg>
      
      {/* CSS animations */}
      <style>{`
        @keyframes wave1 {
          0%, 100% { 
            transform: translateX(0) translateY(0);
            d: path('M-200,100 C200,0 600,200 720,200 C840,200 1240,0 1640,100');
          }
          50% { 
            transform: translateX(40px) translateY(-15px);
            d: path('M-200,85 C200,-15 600,185 720,185 C840,185 1240,-15 1640,85');
          }
        }
        @keyframes wave2 {
          0%, 100% { 
            transform: translateX(0) translateY(0);
          }
          50% { 
            transform: translateX(-30px) translateY(20px);
          }
        }
        @keyframes float3 {
          0%, 100% { 
            transform: translateX(0) translateY(0);
          }
          50% { 
            transform: translateX(20px) translateY(-25px);
          }
        }
      `}</style>
    </div>
  );
}
