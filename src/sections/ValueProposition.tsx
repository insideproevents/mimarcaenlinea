import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function ValueProposition() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section className="relative w-full py-24 lg:py-32 bg-black overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/2 left-0 w-[500px] h-[500px] -translate-y-1/2"
          style={{
            background: 'radial-gradient(circle, rgba(0,71,171,0.06) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div ref={ref} className="relative z-10 w-full px-6 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h2
            className={`font-display font-bold text-h2 text-white mb-8 leading-tight transition-all duration-1000 ease-expo-out ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            Construimos tu <span className="text-[#0041A8]">presencia digital</span> con <span className="text-[#0041A8]">visión y estructura</span> desde el comienzo.
          </h2>

          {/* Body Text */}
          <div
            className={`transition-all duration-800 ease-smooth ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <p className="text-lg md:text-xl text-[#d3d3d3] leading-relaxed max-w-3xl mx-auto">
              No solo diseñamos páginas web. Creamos herramientas digitales
              pensadas para transmitir profesionalismo, atraer clientes y apoyar
              tus objetivos comerciales. Cada proyecto se desarrolla con
              estándares actuales de diseño, rendimiento y posicionamiento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
