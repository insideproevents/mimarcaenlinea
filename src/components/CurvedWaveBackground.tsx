interface CurvedWaveBackgroundProps {
  className?: string;
}

export function CurvedWaveBackground({ className = '' }: CurvedWaveBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Animated curved line waves - multiple groups with wave undulations */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        {/* Group 1 - Top waves - large spacing (80px apart) */}
        <path
          d="M-200,50 Q360,0 720,50 T1640,50"
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
        
        {/* Group 2 - Upper middle waves (100px apart) */}
        <path
          d="M-200,250 Q480,180 720,250 T1640,250"
          fill="none"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="1.5"
          style={{ animation: 'waveGroup2 7s ease-in-out infinite', animationDelay: '0.5s' }}
        />
        <path
          d="M-200,350 Q480,280 720,350 T1640,350"
          fill="none"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1.5"
          style={{ animation: 'waveGroup2 7s ease-in-out infinite', animationDelay: '0.8s' }}
        />
        
        {/* Group 3 - Center waves with more undulation (120px apart) */}
        <path
          d="M-200,480 Q200,380 500,480 Q800,580 1100,480 Q1300,420 1640,480"
          fill="none"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="2"
          style={{ animation: 'waveGroup3 5s ease-in-out infinite' }}
        />
        <path
          d="M-200,600 Q200,500 500,600 Q800,700 1100,600 Q1300,540 1640,600"
          fill="none"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2"
          style={{ animation: 'waveGroup3 5s ease-in-out infinite', animationDelay: '0.4s' }}
        />
        <path
          d="M-200,720 Q200,620 500,720 Q800,820 1100,720 Q1300,660 1640,720"
          fill="none"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="2"
          style={{ animation: 'waveGroup3 5s ease-in-out infinite', animationDelay: '0.8s' }}
        />
        
        {/* Group 4 - Bottom subtle waves (60px apart) */}
        <path
          d="M-200,800 Q360,760 720,800 T1640,800"
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
          style={{ animation: 'waveGroup4 8s ease-in-out infinite reverse' }}
        />
        <path
          d="M-200,860 Q360,820 720,860 T1640,860"
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
          style={{ animation: 'waveGroup4 8s ease-in-out infinite reverse', animationDelay: '0.5s' }}
        />
        
        {/* Additional wave undulations - sine wave patterns */}
        <path
          d="M0,180 C120,140 240,220 360,180 C480,140 600,220 720,180 C840,140 960,220 1080,180 C1200,140 1320,220 1440,180"
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
          style={{ animation: 'waveUndul 4s ease-in-out infinite' }}
        />
        
        <path
          d="M0,320 C120,280 240,360 360,320 C480,280 600,360 720,320 C840,280 960,360 1080,320 C1200,280 1320,360 1440,320"
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
          style={{ animation: 'waveUndul 5s ease-in-out infinite', animationDelay: '1s' }}
        />
        
        <path
          d="M0,450 C120,410 240,490 360,450 C480,410 600,490 720,450 C840,410 960,490 1080,450 C1200,410 1320,490 1440,450"
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
          style={{ animation: 'waveUndul 6s ease-in-out infinite', animationDelay: '2s' }}
        />
        
        <path
          d="M0,550 C120,510 240,590 360,550 C480,510 600,590 720,550 C840,510 960,590 1080,550 C1200,510 1320,590 1440,550"
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="1"
          style={{ animation: 'waveUndul 7s ease-in-out infinite', animationDelay: '1.5s' }}
        />
        
        <path
          d="M0,680 C120,640 240,720 360,680 C480,640 600,720 720,680 C840,640 960,720 1080,680 C1200,640 1320,720 1440,680"
          fill="none"
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="1"
          style={{ animation: 'waveUndul 5.5s ease-in-out infinite', animationDelay: '0.7s' }}
        />
      </svg>
      
      {/* CSS animations for wave groups */}
      <style>{`
        @keyframes waveGroup1 {
          0%, 100% { 
            transform: translateX(0) translateY(0);
          }
          50% { 
            transform: translateX(50px) translateY(-20px);
          }
        }
        @keyframes waveGroup2 {
          0%, 100% { 
            transform: translateX(0) translateY(0);
          }
          50% { 
            transform: translateX(-40px) translateY(25px);
          }
        }
        @keyframes waveGroup3 {
          0%, 100% { 
            transform: translateX(0) translateY(0);
            d: path('M-200,480 Q200,380 500,480 Q800,580 1100,480 Q1300,420 1640,480');
          }
          33% { 
            transform: translateX(30px) translateY(-15px);
            d: path('M-200,465 Q200,365 500,465 Q800,565 1100,465 Q1300,405 1640,465');
          }
          66% { 
            transform: translateX(-20px) translateY(15px);
            d: path('M-200,495 Q200,395 500,495 Q800,595 1100,495 Q1300,435 1640,495');
          }
        }
        @keyframes waveGroup4 {
          0%, 100% { 
            transform: translateX(0) translateY(0);
          }
          50% { 
            transform: translateX(35px) translateY(-10px);
          }
        }
        @keyframes waveUndul {
          0%, 100% { 
            transform: translateX(0) translateY(0) scaleY(1);
          }
          25% { 
            transform: translateX(25px) translateY(-8px) scaleY(1.1);
          }
          50% { 
            transform: translateX(0) translateY(0) scaleY(1);
          }
          75% { 
            transform: translateX(-25px) translateY(8px) scaleY(0.9);
          }
        }
      `}</style>
    </div>
  );
}
