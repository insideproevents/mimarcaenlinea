import { useScrollAnimation } from '../hooks/useScrollAnimation';
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

const services = [
  {
    icon: Layout,
    title: 'Landing Page Autoadministrable',
    description:
      'Ideal para campañas, servicios o negocios que necesitan presencia digital rápida y flexible.',
  },
  {
    icon: FileText,
    title: 'Landing Page Profesional',
    description:
      'Solución rápida y eficiente para promocionar servicios o productos.',
  },
  {
    icon: Sparkles,
    title: 'Web Corporativa',
    description:
      'Sitios web corporativos de hasta 6 secciones para transmitir confianza.',
  },
  {
    icon: ShoppingCart,
    title: 'Ecommerce',
    description: 'Tienda online profesional lista para vender.',
  },
  {
    icon: User,
    title: 'Presskit para Artistas',
    description:
      'Plataforma digital para músicos, actores y creadores.',
  },
  {
    icon: Palette,
    title: 'Branding',
    description: 'Identidad visual completa para tu marca.',
  },
  {
    icon: Camera,
    title: 'Creación de Contenido',
    description: 'Producción audiovisual para elevar tu imagen.',
  },
  {
    icon: ClipboardList,
    title: 'Asesoría y cotización de web compleja',
    description:
      'Analizamos tu proyecto en profundidad.',
  },
  {
    icon: TrendingUp,
    title: 'Asesoría de marketing para marcas y empresas',
    description:
      'Sesión estratégica para evaluar tu presencia digital.',
  },
];

export function Services() {
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
            Nuestros Servicios
          </span>
          <h2
            className={`font-display font-bold text-h2 text-white mb-6 leading-tight transition-all duration-700 ease-expo-out ${
              headerVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Soluciones web para cada etapa de tu negocio
          </h2>
          <p
            className={`text-lg text-[#d3d3d3] max-w-2xl leading-relaxed transition-all duration-600 ease-smooth ${
              headerVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Ofrecemos distintos tipos de sitios web según tus necesidades,
            objetivos y nivel de crecimiento digital.
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
                key={service.title}
                className={`group relative p-8 lg:p-10 bg-black rounded-[10%] border-2 border-[#d3d3d3] transition-all duration-500 ease-expo-out hover:bg-[#d3d3d3] ${
                  gridVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: gridVisible ? `${index * 80 + 300}ms` : '0ms',
                }}
              >
                {/* Icon */}
                <div className="w-12 h-12 mb-6 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-[#0041A8] transition-all duration-300 group-hover:scale-110" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="font-display font-semibold text-xl text-white mb-4 transition-all duration-300 group-hover:text-gray-800">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#d3d3d3] text-sm leading-relaxed mb-6 group-hover:text-gray-800">
                  {service.description}
                </p>

                {/* Link */}
                <a
                  href="http://wa.me/+56937751673"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#0041A8] text-sm font-medium transition-all duration-300 group-hover:gap-3"
                >
                  Solicitar info
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

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
