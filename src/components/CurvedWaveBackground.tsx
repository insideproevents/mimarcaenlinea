interface CurvedWaveBackgroundProps {
  className?: string;
}

export function CurvedWaveBackground({ className = '' }: CurvedWaveBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Animated curved line waves - just strokes, no fills */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        {/* First curved line - flowing wave stroke */}
        <path
          d="M-100,150 Q360,50 720,150 T1540,150"
          fill="none"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="2"
          style={{ animation: 'waveLine1 4s ease-in-out infinite' }}
        />
        
        {/* Second curved line */}
        <path
          d="M-100,250 Q360,150 720,250 T1540,250"
          fill="none"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="2"
          style={{ animation: 'waveLine2 5s ease-in-out infinite' }}
        />
        
        {/* Third curved line */}
        <path
          d="M-100,350 Q360,250 720,350 T1540,350"
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="2"
          style={{ animation: 'waveLine3 6s ease-in-out infinite' }}
        />
        
        {/* Fourth curved line */}
        <path
          d="M-100,450 Q360,350 720,450 T1540,450"
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="2"
          style={{ animation: 'waveLine4 7s ease-in-out infinite' }}
        />
        
        {/* Fifth curved line */}
        <path
          d="M-100,550 Q360,450 720,550 T1540,550"
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="2"
          style={{ animation: 'waveLine5 8s ease-in-out infinite' }}
        />
        
        {/* Sixth curved line */}
        <path
          d="M-100,650 Q360,550 720,650 T1540,650"
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="2"
          style={{ animation: 'waveLine6 9s ease-in-out infinite' }}
        />
        
        {/* Additional floating curved strokes - left side */}
        <path
          d="M50,200 Q100,150 150,200 Q200,250 250,200"
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1.5"
          style={{ animation: 'floatCurve1 6s ease-in-out infinite' }}
        />
        
        <path
          d="M80,400 Q130,350 180,400 Q230,450 280,400"
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1.5"
          style={{ animation: 'floatCurve2 8s ease-in-out infinite reverse' }}
        />
        
        {/* Additional floating curved strokes - right side */}
        <path
          d="M1200,300 Q1250,250 1300,300 Q1350,350 1400,300"
          fill="none"
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="1.5"
          style={{ animation: 'floatCurve3 7s ease-in-out infinite' }}
        />
        
        <path
          d="M1150,500 Q1200,450 1250,500 Q1300,550 1350,500"
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="1.5"
          style={{ animation: 'floatCurve4 9s ease-in-out infinite reverse' }}
        />
      </svg>
      
      {/* CSS animations */}
      <style>{`
        @keyframes waveLine1 {
          0%, 100% { 
            transform: translateX(0) translateY(0);
            d: path('M-100,150 Q360,50 720,150 T1540,150');
          }
          50% { 
            transform: translateX(30px) translateY(-20px);
            d: path('M-100,130 Q360,30 720,130 T1540,130');
          }
        }
        @keyframes waveLine2 {
          0%, 100% { 
            transform: translateX(0) translateY(0);
          }
          50% { 
            transform: translateX(-25px) translateY(15px);
          }
        }
        @keyframes waveLine3 {
          0%, 100% { 
            transform: translateX(0) translateY(0);
          }
          50% { 
            transform: translateX(20px) translateY(-10px);
          }
        }
        @keyframes waveLine4 {
          0%, 100% { 
            transform: translateX(0) translateY(0);
          }
          50% { 
            transform: translateX(-15px) translateY(20px);
          }
        }
        @keyframes waveLine5 {
          0%, 100% { 
            transform: translateX(0) translateY(0);
          }
          50% { 
            transform: translateX(10px) translateY(-15px);
          }
        }
        @keyframes waveLine6 {
          0%, 100% { 
            transform: translateX(0) translateY(0);
          }
          50% { 
            transform: translateX(-20px) translateY(10px);
          }
        }
        @keyframes floatCurve1 {
          0%, 100% { 
            transform: translateY(0) scale(1);
            opacity: 0.08;
          }
          50% { 
            transform: translateY(-30px) scale(1.1);
            opacity: 0.15;
          }
        }
        @keyframes floatCurve2 {
          0%, 100% { 
            transform: translateY(0) rotate(0deg);
            opacity: 0.06;
          }
          50% { 
            transform: translateY(-25px) rotate(5deg);
            opacity: 0.12;
          }
        }
        @keyframes floatCurve3 {
          0%, 100% { 
            transform: translateY(0) scale(1);
            opacity: 0.07;
          }
          50% { 
            transform: translateY(-20px) scale(0.95);
            opacity: 0.14;
          }
        }
        @keyframes floatCurve4 {
          0%, 100% { 
            transform: translateY(0) rotate(0deg);
            opacity: 0.05;
          }
          50% { 
            transform: translateY(-35px) rotate(-3deg);
            opacity: 0.1;
          }
        }
      `}</style>
    </div>
  );
}
