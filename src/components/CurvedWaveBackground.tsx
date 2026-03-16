interface CurvedWaveBackgroundProps {
  className?: string;
}

export function CurvedWaveBackground({ className = '' }: CurvedWaveBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Animated curved wave lines */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        {/* First wave - cyan */}
        <path
          d="M0,200 C360,150 720,250 1080,200 C1260,175 1350,200 1440,200 L1440,0 L0,0 Z"
          fill="url(#waveGradient1)"
          opacity="0.15"
          style={{ animation: 'wave1 8s ease-in-out infinite' }}
        />
        
        {/* Second wave - blue */}
        <path
          d="M0,250 C480,200 960,300 1440,250 L1440,0 L0,0 Z"
          fill="url(#waveGradient2)"
          opacity="0.1"
          style={{ animation: 'wave2 10s ease-in-out infinite' }}
        />
        
        {/* Third wave - lighter cyan */}
        <path
          d="M0,300 C240,260 480,340 720,300 C960,260 1200,340 1440,300 L1440,0 L0,0 Z"
          fill="url(#waveGradient3)"
          opacity="0.08"
          style={{ animation: 'wave3 12s ease-in-out infinite' }}
        />
        
        {/* Fourth wave - deep blue */}
        <path
          d="M0,350 C540,300 1080,400 1440,350 L1440,0 L0,0 Z"
          fill="url(#waveGradient4)"
          opacity="0.06"
          style={{ animation: 'wave4 15s ease-in-out infinite' }}
        />
        
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#0891b2" />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
          <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient id="waveGradient4" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1d4ed8" />
            <stop offset="100%" stopColor="#1e40af" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Additional floating curved lines */}
      <div className="absolute top-10 left-10 w-32 h-32 opacity-20" style={{ animation: 'floatWave 6s ease-in-out infinite' }}>
        <svg viewBox="0 0 100 100" fill="none">
          <path
            d="M10 50 Q 30 20 50 50 Q 70 80 90 50"
            stroke="#06b6d4"
            strokeWidth="2"
            fill="none"
            style={{ animation: 'dash 3s linear infinite' }}
          />
        </svg>
      </div>
      
      <div className="absolute top-20 right-20 w-24 h-24 opacity-15" style={{ animation: 'floatWave 8s ease-in-out infinite reverse' }}>
        <svg viewBox="0 0 100 100" fill="none">
          <path
            d="M10 50 Q 30 20 50 50 Q 70 80 90 50"
            stroke="#3b82f6"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
      
      {/* CSS animations */}
      <style>{`
        @keyframes wave1 {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(-20px) translateY(10px); }
        }
        @keyframes wave2 {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(20px) translateY(-15px); }
        }
        @keyframes wave3 {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(-15px) translateY(8px); }
        }
        @keyframes wave4 {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(10px) translateY(-10px); }
        }
        @keyframes floatWave {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes dash {
          to { stroke-dashoffset: 100; }
        }
      `}</style>
    </div>
  );
}
