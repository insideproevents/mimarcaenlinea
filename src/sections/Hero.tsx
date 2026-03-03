import { useEffect, useState, useRef } from 'react';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const animationRef = useRef<number | null>(null);
  const isReversing = useRef(false);
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    setIsLoaded(true);
    
    const video = videoRef.current;
    if (!video) return;

    // Start playing forward
    video.playbackRate = 1;
    isReversing.current = false;

    const animate = (currentTime: number) => {
      const video = videoRef.current;
      if (!video) return;

      // Initialize lastTime on first frame
      if (lastTimeRef.current === 0) {
        lastTimeRef.current = currentTime;
      }

      const deltaTime = currentTime - lastTimeRef.current;
      lastTimeRef.current = currentTime;

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

    // Ensure video plays on mobile
    video.play().then(() => {
      animationRef.current = requestAnimationFrame(animate);
    }).catch(() => {
      const playOnInteraction = () => {
        video.play().then(() => {
          animationRef.current = requestAnimationFrame(animate);
        });
        document.removeEventListener('touchstart', playOnInteraction);
      };
      document.addEventListener('touchstart', playOnInteraction);
    });

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
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
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          webkit-playsinline="true"
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
              Agencia de Diseño Web y Medios Digitales
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
              Diseño y desarrollo
            </span>
            <span
              className={`block text-hero-lg transition-all duration-1000 ease-expo-out ${
                isLoaded
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '550ms' }}
            >
              web <span className="text-[#0041A8]">profesional</span>
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
            Creamos el sitio web ideal para tu negocio, con diseño único,
            tecnología de vanguardia y enfoque en resultados reales.
          </p>

          {/* CTA Button */}
          <div
            className={`transition-all duration-700 ease-expo-out ${
              isLoaded
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '950ms' }}
          >
            <button
              onClick={scrollToContact}
              className="px-12 py-4 bg-[#0041A8] rounded-full text-white font-semibold uppercase tracking-wider text-sm transition-all duration-300 hover:bg-[#0058d1] hover:shadow-blue"
            >
              Contacto
            </button>
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
