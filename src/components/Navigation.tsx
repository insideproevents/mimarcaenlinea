import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const menuItems = [
  { labelKey: 'nav.inicio', href: '#inicio' },
  { labelKey: 'nav.servicios', href: '#servicios' },
  { labelKey: 'nav.portfolio', href: '#portafolio' },
  { labelKey: 'nav.nosotros', href: '#nosotros' },
  { labelKey: 'nav.contacto', href: '#contacto' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-expo-out ${
          isScrolled
            ? 'glass border-b border-white/10 py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="w-full px-6 lg:px-16">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#inicio');
              }}
              className="flex items-center gap-3 group"
            >
              <img 
                src="/mi_logo.png" 
                alt="MIMARCA" 
                className="h-[77px] w-auto"
              />
              <img 
                src="/logo_texto.png" 
                alt="MIMARCA" 
                className="h-[64px] w-auto hidden sm:block"
              />
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="relative text-white/70 hover:text-white text-sm font-medium tracking-wide uppercase transition-all duration-300 group"
                >
                  {t(item.labelKey)}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0041A8] transition-all duration-300 ease-expo-out group-hover:w-full" />
                </a>
              ))}

              {/* Language Switcher */}
              <div className="flex items-center gap-2 ml-2">
                {/* Spanish Flag */}
                <button
                  onClick={() => setLanguage('es')}
                  className={`w-8 h-8 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                    language === 'es' ? 'border-[#0041A8] scale-110' : 'border-transparent'
                  }`}
                  aria-label="Español"
                >
                  <svg viewBox="0 0 24 24" className="w-full h-full grayscale hover:grayscale-0 transition-all duration-300 scale-75">
                    <rect width="24" height="24" fill="#AA151B"/>
                    <rect y="4" width="24" height="6" fill="#F1BF00"/>
                    <rect y="14" width="24" height="6" fill="#F1BF00"/>
                    <rect x="8" y="0" width="8" height="24" fill="#F1BF00"/>
                  </svg>
                </button>
                {/* UK Flag */}
                <button
                  onClick={() => setLanguage('en')}
                  className={`w-8 h-8 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                    language === 'en' ? 'border-[#0041A8] scale-110' : 'border-transparent'
                  }`}
                  aria-label="English"
                >
                  <svg viewBox="0 0 24 24" className="w-full h-full grayscale hover:grayscale-0 transition-all duration-300">
                    <rect width="24" height="24" fill="#012169"/>
                    <path d="M0 0L24 24M24 0L0 24" stroke="white" strokeWidth="2"/>
                    <rect x="0" y="9" width="24" height="6" fill="white"/>
                    <rect x="9" y="0" width="6" height="24" fill="white"/>
                    <rect x="0" y="10" width="24" height="4" fill="#C8102E"/>
                    <rect x="10" y="0" width="4" height="24" fill="#C8102E"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={() => scrollToSection('#contacto')}
                className="px-8 py-3 bg-[#0041A8] rounded-full text-white text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-[#0058d1] hover:shadow-blue"
              >
                {t('nav.contacto')}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/95 backdrop-blur-lg transition-opacity duration-500 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div
          className={`absolute top-0 right-0 w-full max-w-sm h-full bg-black border-l border-white/10 transition-transform duration-500 ease-expo-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col pt-28 px-8">
            {menuItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`py-5 text-xl font-display font-semibold text-white/80 hover:text-[#0041A8] transition-all duration-300 border-b border-white/10 uppercase tracking-wide ${
                  isMobileMenuOpen
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-10'
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 80 + 200}ms` : '0ms',
                }}
              >
                {t(item.labelKey)}
              </a>
            ))}

            <button
              onClick={() => scrollToSection('#contacto')}
              className={`mt-10 px-8 py-4 bg-[#0041A8] rounded-full text-white font-semibold uppercase tracking-wider transition-all duration-500 ${
                isMobileMenuOpen
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: isMobileMenuOpen ? '600ms' : '0ms',
              }}
            >
              {t('nav.contacto')}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
