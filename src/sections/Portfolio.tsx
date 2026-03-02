import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Ecommerce Moda',
    category: 'Tienda Online',
    description: 'Diseño y desarrollo de tienda online para marca de ropa.',
  },
  {
    title: 'Web Corporativa',
    category: 'Web Corporativa',
    description: 'Sitio web profesional para empresa de tecnología.',
  },
  {
    title: 'Landing Producto',
    category: 'Landing Page',
    description: 'Página de lanzamiento para nuevo producto digital.',
  },
  {
    title: 'Portafolio Creativo',
    category: 'Web Personal',
    description: 'Sitio web para fotógrafo profesional.',
  },
  {
    title: 'Restaurante App',
    category: 'Web + App',
    description: 'Plataforma digital para cadena de restaurantes.',
  },
  {
    title: 'Startup Tech',
    category: 'Web Corporativa',
    description: 'Identidad digital para startup tecnológica.',
  },
];

export function Portfolio() {
  const { ref: headerRef, isVisible: headerVisible } =
    useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const { ref: gridRef, isVisible: gridVisible } =
    useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="portafolio" className="relative w-full py-24 lg:py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px]"
          style={{
            background:
              'radial-gradient(ellipse, rgba(0,71,171,0.04) 0%, transparent 50%)',
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
            Portafolio
          </span>
          <h2
            className={`font-display font-bold text-h2 text-white mb-6 leading-tight transition-all duration-700 ease-expo-out ${
              headerVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Proyectos y <span className="text-[#0041A8]">colaboraciones</span>
          </h2>
          <p
            className={`text-lg text-white/50 max-w-2xl leading-relaxed transition-all duration-600 ease-smooth ${
              headerVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Estos son algunos de los proyectos en los que hemos trabajado,
            desarrollando soluciones digitales adaptadas a cada cliente, rubro y
            objetivo.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10"
        >
          {projects.map((project, index) => {
            return (
              <div
                key={project.title}
                className={`group relative aspect-[4/3] bg-black overflow-hidden cursor-pointer transition-all duration-700 ease-expo-out hover:bg-[#d3d3d3] ${
                  gridVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: gridVisible
                    ? `${index * 80 + 200}ms`
                    : '0ms',
                }}
              >
                {/* Background Gradient */}
                <div
                  className="absolute inset-0 opacity-30 group-hover:opacity-60 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,71,171,0.3) 0%, rgba(0,45,115,0.2) 100%)',
                  }}
                />

                {/* Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
                      backgroundSize: '32px 32px',
                    }}
                  />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  {/* Top */}
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 bg-white/5 border border-white/10 text-xs text-white/60 uppercase tracking-wider group-hover:text-gray-800 group-hover:border-gray-400">
                      {project.category}
                    </span>
                    <div className="w-10 h-10 bg-[#0041A8] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Bottom */}
                  <div>
                    <h3 className="font-display font-semibold text-2xl text-white mb-2 transform translate-y-16 group-hover:translate-y-0 transition-transform duration-500 group-hover:text-gray-800">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 group-hover:text-gray-800">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Hover Border */}
                <div className="absolute inset-0 border border-transparent group-hover:border-[#0041A8]/40 transition-all duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className={`mt-12 transition-all duration-700 ease-expo-out ${
            gridVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-[#0041A8] font-medium hover:gap-3 transition-all duration-300"
          >
            ¿Tienes un proyecto en mente? Hablemos
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
