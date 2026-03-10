import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../hooks/useLanguage';
import {
  Layout,
  ShoppingCart,
  User,
  Camera,
  Palette,
  FileText,
  Sparkles,
  ArrowRight,
  ClipboardList,
  TrendingUp,
} from 'lucide-react';

const servicesList = [
  {
    icon: Layout,
    titleKey: 'service.landing.auto',
    descKey: 'service.landing.auto.desc',
    image: '/servicios/LandingPageAutoadministrable.jpg',
  },
  {
    icon: FileText,
    titleKey: 'service.landing.pro',
    descKey: 'service.landing.pro.desc',
    image: '/servicios/LandingPageProfesional.jpg',
  },
  {
    icon: Sparkles,
    titleKey: 'service.corporate',
    descKey: 'service.corporate.desc',
    image: '/servicios/WebCorporativa.jpg',
  },
  {
    icon: ShoppingCart,
    titleKey: 'service.ecommerce',
    descKey: 'service.ecommerce.desc',
    image: '/servicios/Ecommerce.jpg',
  },
  {
    icon: User,
    titleKey: 'service.presskit',
    descKey: 'service.presskit.desc',
    image: '/servicios/PresskitparaArtistas.jpg',
  },
  {
    icon: Palette,
    titleKey: 'service.branding',
    descKey: 'service.branding.desc',
    image: '/servicios/branding.jpg',
  },
  {
    icon: Camera,
    titleKey: 'service.content',
    descKey: 'service.content.desc',
    image: '/servicios/creaciondecontenido.jpg',
  },
  {
    icon: ClipboardList,
    titleKey: 'service.web.complex',
    descKey: 'service.web.complex.desc',
    image: '/servicios/asesoríaycotizacióndeweb.jpg',
  },
  {
    icon: TrendingUp,
    titleKey: 'service.marketing',
    descKey: 'service.marketing.desc',
    image: '/servicios/asesoríademarketing.jpg',
  },
];

export function Services() {
  const { t } = useLanguage();
  const services = servicesList;
  const { ref: headerRef, isVisible: headerVisible } =
    useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const { ref: gridRef, isVisible: gridVisible } =
    useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="servicios" className="relative w-full py-24 lg:py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 right-0 w-[700px] h-[700px]"
          style={{
            background:
              'radial-gradient(circle, rgba(0,71,171,0.06) 0%, transparent 60%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-16">
        {/* Header */}
        <div ref={headerRef} className="max-w-4xl mb-16">
          <span
            className={`section-label inline-block mb-6 transition-all duration-700 ease-expo-out ${
              headerVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-5'
            }`}
          >
            {t('services.title')}
          </span>
          <h2
            className={`font-display font-bold text-h2 text-white mb-6 leading-tight transition-all duration-700 ease-expo-out ${
              headerVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            {t('services.subtitle')}
          </h2>
          <p
            className={`text-lg text-[#d3d3d3] max-w-2xl leading-relaxed transition-all duration-600 ease-smooth ${
              headerVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {t('services.description')}
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5"
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.titleKey}
                className={`group relative p-8 lg:p-10 bg-black rounded-[10%] border border-[#d3d3d3] transition-all duration-500 ease-expo-out ${
                  gridVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: gridVisible ? `${index * 80 + 300}ms` : '0ms',
                }}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 rounded-[10%] grayscale opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                  style={{
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 mb-6 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-[#0041A8] transition-all duration-300 group-hover:scale-110" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-semibold text-xl text-white mb-4 transition-all duration-300">
                    {t(service.titleKey)}
                  </h3>

                  {/* Description */}
                  <p className="text-[#d3d3d3] text-sm leading-relaxed mb-6">
                    {t(service.descKey)}
                  </p>

                  {/* Link */}
                  <a
                    href="http://wa.me/+56937751673"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#0041A8] text-sm font-medium transition-all duration-300 group-hover:gap-3"
                  >
                    {t('services.link')}
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>

                {/* Hover Border */}
                <div className="absolute inset-0 border border-transparent transition-all duration-300 group-hover:border-[#0041A8]/30 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
