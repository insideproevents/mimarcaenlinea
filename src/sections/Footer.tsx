import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Instagram, Linkedin, Dribbble, ArrowUpRight } from 'lucide-react';

const quickLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Contacto', href: '#contacto' },
];

const services = [
  'Landing Pages',
  'Web Corporativa',
  'Ecommerce',
  'Branding',
  'Contenido',
];

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Dribbble, href: '#', label: 'Behance' },
];

export function Footer() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative w-full bg-black border-t border-white/10 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px]"
          style={{
            background:
              'radial-gradient(ellipse, rgba(0,71,171,0.05) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div ref={ref} className="relative z-10 w-full px-6 lg:px-16 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
            {/* Logo & Description */}
            <div
              className={`lg:col-span-1 transition-all duration-700 ease-expo-out ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-5'
              }`}
            >
              <a
                href="#inicio"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#inicio');
                }}
                className="flex items-center gap-3 mb-6 group"
              >
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-12 h-12 object-contain transition-all duration-300 group-hover:shadow-blue"
                />
                {/* texto "Agencia" reemplazado por el propio logo */}
              </a>
              <p className="text-white/40 text-sm leading-relaxed">
                Diseño web profesional que impulsa tu negocio. Creamos
                experiencias digitales memorables.
              </p>
            </div>

            {/* Quick Links */}
            <div
              className={`transition-all duration-700 ease-expo-out ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <h4 className="font-display font-semibold text-white mb-6 uppercase tracking-wider text-sm">
                Links Rápidos
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-white/40 text-sm hover:text-[#0047AB] transition-all duration-300 inline-flex items-center gap-1 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div
              className={`transition-all duration-700 ease-expo-out ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <h4 className="font-display font-semibold text-white mb-6 uppercase tracking-wider text-sm">
                Servicios
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <a
                      href="#servicios"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('#servicios');
                      }}
                      className="text-white/40 text-sm hover:text-[#0047AB] transition-all duration-300 inline-flex items-center gap-1 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {service}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div
              className={`transition-all duration-700 ease-expo-out ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <h4 className="font-display font-semibold text-white mb-6 uppercase tracking-wider text-sm">
                Síguenos
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-11 h-11 border border-white/10 flex items-center justify-center text-white/40 hover:text-[#0047AB] hover:border-[#0047AB] transition-all duration-300"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>

              {/* CTA */}
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contacto');
                }}
                className="inline-flex items-center gap-2 mt-8 text-[#0047AB] text-sm font-medium hover:gap-3 transition-all duration-300"
              >
                Iniciar proyecto
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            className={`pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 transition-all duration-700 ease-expo-out ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <p className="text-white/30 text-sm text-center md:text-left">
              © 2026 Agencia de Diseño Web. Todos los derechos reservados.
            </p>
            <div className="flex gap-8">
              <a
                href="#"
                className="text-white/30 text-sm hover:text-[#0047AB] transition-colors duration-300"
              >
                Política de privacidad
              </a>
              <a
                href="#"
                className="text-white/30 text-sm hover:text-[#0047AB] transition-colors duration-300"
              >
                Términos de servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
