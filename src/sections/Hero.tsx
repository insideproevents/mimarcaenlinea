import { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../hooks/useLanguage';

export function Hero() {
  const { t } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);
  const [videoOpacity, setVideoOpacity] = useState(1);
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const animationRef = useRef<number | null>(null);
  const isReversing = useRef(false);
  const lastTimeRef = useRef<number>(0);
  const hasStarted = useRef(false);
  const isFading = useRef(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const video = videoRef.current;
    if (!video) return;

    const startAnimation = () => {
      if (hasStarted.current) return;
      hasStarted.current = true;
      
      video.playbackRate = 1;
      isReversing.current = false;
      
      // Reset video to start
      video.currentTime = 0;

      const animate = (currentTime: number) => {
        const video = videoRef.current;
        if (!video) return;

        // Initialize lastTime on first frame
        if (lastTimeRef.current === 0) {
          lastTimeRef.current = currentTime;
        }

        const deltaTime = currentTime - lastTimeRef.current;
        lastTimeRef.current = currentTime;

        // Check if video is near the end for fadeout effect
        if (!isReversing.current && !isFading.current && video.duration - video.currentTime < 0.5) {
          isFading.current = true;
          // Fade out
          const fadeOut = () => {
            const videoContainer = document.querySelector('#video-container');
            if (videoContainer) {
              let opacity = 1;
              const fadeOutInterval = setInterval(() => {
                opacity -= 0.1;
                if (opacity <= 0) {
                  clearInterval(fadeOutInterval);
                  // Reset and fade in
                  video.currentTime = 0;
                  const fadeInInterval = setInterval(() => {
                    opacity += 0.1;
                    setVideoOpacity(opacity);
                    if (opacity >= 1) {
                      clearInterval(fadeInInterval);
                      isFading.current = false;
                    }
                  }, 30);
                } else {
                  setVideoOpacity(opacity);
                }
              }, 30);
            }
          };
          fadeOut();
        }

        if (isReversing.current) {
          // When reversing, manually decrease currentTime
          if (video.currentTime > 0) {
            video.currentTime -= (deltaTime / 1000) * 1.5; // 1.5x reverse speed
            if (video.currentTime <= 0) {
              video.currentTime = 0;
              // Switch back to forward
              isReversing.current = false;
              video.playbackRate = 1;
              video.play();
            }
          }
        } else {
          // When playing forward, check if video has ended
          if (video.ended) {
            // Switch to reverse
            isReversing.current = true;
            video.playbackRate = 1;
            video.play();
          }
        }

        animationRef.current = requestAnimationFrame(animate);
      };

      video.play().then(() => {
        animationRef.current = requestAnimationFrame(animate);
      }).catch(() => {
        // If autoplay fails, try on user interaction
        const tryPlay = () => {
          video.play().then(() => {
            animationRef.current = requestAnimationFrame(animate);
          });
          document.removeEventListener('click', tryPlay);
          document.removeEventListener('touchstart', tryPlay);
          document.removeEventListener('keydown', tryPlay);
        };
        document.addEventListener('click', tryPlay);
        document.addEventListener('touchstart', tryPlay);
        document.addEventListener('keydown', tryPlay);
      });
    };

    // iOS requires user interaction to play video
    const handleUserInteraction = () => {
      if (!hasStarted.current) {
        startAnimation();
      }
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };

    // Try to start immediately (works on some devices)
    startAnimation();

    // If still not playing, wait for user interaction (iOS requirement)
    if (!hasStarted.current) {
      document.addEventListener('click', handleUserInteraction);
      document.addEventListener('touchstart', handleUserInteraction);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        if (rect.bottom > 0) {
          setScrollY(window.scrollY);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const parallaxOffset = scrollY * 0.3;
  const opacityFade = Math.max(0, 1 - scrollY / 500);

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Video Background */}
      <div id="video-container" className="absolute inset-0 z-0 overflow-hidden" style={{ opacity: videoOpacity }}>
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          webkit-playsinline="true"
          preload="auto"
        >
          <source src="/video1.mp4" type="video/mp4" />
          {/* Fallback content */}
        </video>
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs - Deep Blue */}
        <div
          className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0,71,171,0.12) 0%, transparent 70%)',
            filter: 'blur(80px)',
            transform: `translateY(${parallaxOffset * 0.5}px)`,
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 1.5s ease-out',
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0,61,153,0.1) 0%, transparent 70%)',
            filter: 'blur(100px)',
            transform: `translateY(${-parallaxOffset * 0.3}px)`,
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 1.5s ease-out 0.3s',
          }}
        />

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      {/* Content */}
      <div
        className="relative z-10 w-full px-6 lg:px-16 pt-24"
        style={{
          opacity: opacityFade,
          transform: `translateY(${-parallaxOffset * 0.5}px)`,
        }}
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Label */}
          <div
            className={`mb-8 transition-all duration-1000 ease-expo-out ${
              isLoaded
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <span className="text-sm font-semibold tracking-[0.4em] uppercase text-white">
              {t('hero.label')}
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-bold text-white leading-[1.05] mb-8">
            <span
              className={`block text-hero-lg transition-all duration-1000 ease-expo-out ${
                isLoaded
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              {t('hero.title1')}
            </span>
            <span
              className={`block text-hero-lg transition-all duration-1000 ease-expo-out ${
                isLoaded
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '550ms' }}
            >
              {t('hero.title2').split(' ').map((word, i, arr) => 
                i === arr.length - 1 ? <span key={i} className="text-[#0041A8]">{word}</span> : word + ' '
              )}
            </span>
          </h1>

          {/* Description */}
          <p
            className={`text-lg md:text-xl text-white max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-800 ease-smooth ${
              isLoaded
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '750ms' }}
          >
            {t('hero.description')}
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ease-expo-out ${
              isLoaded
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '950ms' }}
          >
            <button
              onClick={scrollToContact}
              className="px-12 py-4 bg-[#0041A8] rounded-full text-white font-semibold uppercase tracking-wider text-sm transition-all duration-300 hover:bg-white hover:text-gray-600 border border-[#d3d3d3]"
            >
              {t('hero.button1')}
            </button>
            <a
              href="http://wa.me/+56937751673"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-4 bg-white rounded-full text-gray-600 font-semibold uppercase tracking-wider text-sm transition-all duration-300 hover:bg-[#0041A8] hover:text-white border border-[#d3d3d3]"
            >
              {t('hero.button2')}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
        }}
      />
    </section>
  );
}
