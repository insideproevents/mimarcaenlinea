import { useScrollAnimation, useCountUp } from '../hooks/useScrollAnimation';

const stats = [
  { value: 50, suffix: '+', label: 'Proyectos entregados' },
  { value: 98, suffix: '%', label: 'Clientes satisfechos' },
  { value: 3, suffix: '+', label: 'Años de experiencia' },
  { value: 24, suffix: '/7', label: 'Soporte técnico' },
];

function StatItem({ stat, index, isVisible }: { stat: typeof stats[0]; index: number; isVisible: boolean }) {
  const { ref, count } = useCountUp(stat.value, 2500);

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ease-expo-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150 + 300}ms` }}
    >
      <div className="font-display font-bold text-5xl lg:text-6xl text-[#0041A8] mb-3">
        {count}
        <span className="text-4xl lg:text-5xl">{stat.suffix}</span>
      </div>
      <div className="text-sm text-[#d3d3d3] uppercase tracking-wider">
        {stat.label}
      </div>
    </div>
  );
}

export function Stats() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section className="relative w-full py-24 lg:py-32 bg-black overflow-hidden border-y border-white/10">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px]"
          style={{
            background: 'radial-gradient(ellipse, rgba(0,71,171,0.08) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div ref={ref} className="relative z-10 w-full px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span
              className={`section-label inline-block mb-6 transition-all duration-700 ease-expo-out ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-5'
              }`}
            >
              Expertos Digitales
            </span>
            <h2
              className={`font-display font-bold text-h3 text-white max-w-2xl mx-auto leading-tight transition-all duration-700 ease-expo-out ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              Tu socio estratégico para soluciones web inteligentes y orientadas a resultados
            </h2>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <StatItem key={stat.label} stat={stat} index={index} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
