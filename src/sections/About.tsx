import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../hooks/useLanguage';
import { CheckCircle } from 'lucide-react';

const getFeatures = (t: (key: string) => string) => [
  t('about.feature1'),
  t('about.feature2'),
  t('about.feature3'),
  t('about.feature4'),
];

export function About() {
  const { t } = useLanguage();
  const features = getFeatures(t);
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="nosotros" className="relative w-full py-24 lg:py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px]"
          style={{
            background:
              'radial-gradient(circle, rgba(0,71,171,0.06) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div ref={ref} className="relative z-10 w-full px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Content */}
            <div>
              <span
                className={`section-label inline-block mb-6 transition-all duration-700 ease-expo-out ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-5'
                }`}
              >
                {t('about.title')}
              </span>

              <h2
                className={`font-display font-bold text-h2 text-white mb-8 leading-tight transition-all duration-700 ease-expo-out ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '100ms' }}
              >
                {t('about.subtitle')}{' '}
                <span className="text-[#0041A8]">{t('about.subtitle2')}</span>
              </h2>

              <div
                className={`space-y-6 transition-all duration-600 ease-smooth ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                <p className="text-lg text-[#d3d3d3] leading-relaxed">
                  {t('about.desc1')}
                </p>
                <p className="text-[#d3d3d3] leading-relaxed">
                  {t('about.desc2')}
                </p>
              </div>

              {/* Features */}
              <div
                className={`grid grid-cols-2 gap-4 mt-10 transition-all duration-700 ease-expo-out ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-[#0041A8]" strokeWidth={2} />
                    </div>
                    <span className="text-sm text-[#d3d3d3]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div
              className={`relative transition-all duration-1000 ease-expo-out ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-10'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Main Circle */}
                <div 
                  className="absolute inset-0 rounded-full border border-[#0041A8]/20"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,71,171,0.1) 0%, transparent 50%)',
                  }}
                />

                {/* Inner Circle */}
                <div 
                  className="absolute inset-12 rounded-full border border-white/5"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 50%)',
                  }}
                />

                {/* Center Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-[#0041A8] text-sm uppercase tracking-wider mt-1">
                      {t('about.visual')}
                    </p>
                  </div>
                </div>

                {/* Orbiting Elements */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '25s' }}>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0041A8] rounded-full shadow-blue" />
                </div>
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
                  <div className="absolute bottom-12 right-12 w-2 h-2 bg-white/30 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
