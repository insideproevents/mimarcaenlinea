import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

type Language = 'es' | 'en';

interface Translations {
  [key: string]: {
    es: string;
    en: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.inicio': { es: 'Inicio', en: 'Home' },
  'nav.servicios': { es: 'Servicios', en: 'Services' },
  'nav.portfolio': { es: 'Portafolio', en: 'Portfolio' },
  'nav.nosotros': { es: 'Nosotros', en: 'About' },
  'nav.contacto': { es: 'Contacto', en: 'Contact' },

  // Hero
  'hero.label': { es: 'Agencia de Diseño Web y Medios Digitales', en: 'Web Design Agency and Digital Media' },
  'hero.title1': { es: 'Diseño y desarrollo', en: 'Design and development' },
  'hero.title2': { es: 'web profesional', en: 'professional web' },
  'hero.description': { es: 'Creamos el sitio web ideal para tu negocio, con diseño único, tecnología de vanguardia y enfoque en resultados reales.', en: 'We create the ideal website for your business, with unique design, cutting-edge technology, and focus on real results.' },
  'hero.button1': { es: 'Hablemos', en: "Let's talk" },
  'hero.button2': { es: 'Agenda un meeting', en: 'Schedule a meeting' },

  // Services
  'services.title': { es: 'Nuestros Servicios', en: 'Our Services' },
  'services.subtitle': { es: 'Soluciones web para cada etapa de tu negocio', en: 'Web solutions for every stage of your business' },
  'services.description': { es: 'Ofrecemos distintos tipos de sitios web según tus necesidades, objetivos y nivel de crecimiento digital.', en: 'We offer different types of websites according to your needs, objectives, and level of digital growth.' },
  'services.link': { es: 'Solicitar info', en: 'Request info' },

  // Service titles and descriptions
  'service.landing.auto': { 
    es: 'Landing Page Autoadministrable', 
    en: 'Self-Manageable Landing Page' 
  },
  'service.landing.auto.desc': { 
    es: 'Ideal para campañas, servicios o negocios que necesitan presencia digital rápida y flexible.', 
    en: 'Ideal for campaigns, services, or businesses that need a fast and flexible digital presence.' 
  },
  'service.landing.pro': { 
    es: 'Landing Page Profesional', 
    en: 'Professional Landing Page' 
  },
  'service.landing.pro.desc': { 
    es: 'Solución rápida y eficiente para promocionar servicios o productos.', 
    en: 'Quick and efficient solution to promote services or products.' 
  },
  'service.corporate': { 
    es: 'Web Corporativa', 
    en: 'Corporate Website' 
  },
  'service.corporate.desc': { 
    es: 'Sitios web corporativos de hasta 6 secciones para transmitir confianza.', 
    en: 'Corporate websites with up to 6 sections to convey trust.' 
  },
  'service.ecommerce': { 
    es: 'Ecommerce', 
    en: 'Ecommerce' 
  },
  'service.ecommerce.desc': { 
    es: 'Tienda online profesional lista para vender.', 
    en: 'Professional online store ready to sell.' 
  },
  'service.presskit': { 
    es: 'Presskit para Artistas', 
    en: 'Artist Presskit' 
  },
  'service.presskit.desc': { 
    es: 'Plataforma digital para músicos, actores y creadores.', 
    en: 'Digital platform for musicians, actors, and creators.' 
  },
  'service.branding': { 
    es: 'Branding', 
    en: 'Branding' 
  },
  'service.branding.desc': { 
    es: 'Identidad visual completa para tu marca.', 
    en: 'Complete visual identity for your brand.' 
  },
  'service.content': { 
    es: 'Creación de Contenido', 
    en: 'Content Creation' 
  },
  'service.content.desc': { 
    es: 'Producción audiovisual para elevar tu imagen.', 
    en: 'Audiovisual production to elevate your image.' 
  },
  'service.web.complex': { 
    es: 'Asesoría y cotización de web compleja', 
    en: 'Complex web consulting and quotes' 
  },
  'service.web.complex.desc': { 
    es: 'Analizamos tu proyecto en profundidad.', 
    en: 'We analyze your project in depth.' 
  },
  'service.marketing': { 
    es: 'Asesoría de marketing para marcas y empresas', 
    en: 'Marketing advisory for brands and companies' 
  },
  'service.marketing.desc': { 
    es: 'Sesión estratégica para evaluar tu presencia digital.', 
    en: 'Strategic session to evaluate your digital presence.' 
  },

  // About
  'about.title': { es: 'Sobre Nosotros', en: 'About Us' },
  'about.subtitle': { es: 'Somos un equipo especializado en', en: 'We are a specialized team in' },
  'about.subtitle2': { es: 'diseño y desarrollo web', en: 'web design and development' },
  'about.desc1': { es: 'Enfocado en crear soluciones digitales modernas, funcionales y orientadas a resultados. Trabajamos con empresas, emprendedores y profesionales que buscan una presencia online sólida, confiable y alineada con sus objetivos comerciales.', en: 'Focused on creating modern, functional, and results-oriented digital solutions. We work with companies, entrepreneurs, and professionals seeking a solid, reliable online presence aligned with their business goals.' },
  'about.desc2': { es: 'Nuestro enfoque combina creatividad, tecnología de vanguardia y estrategia para entregar proyectos que no solo se ven bien, sino que generan resultados tangibles para tu negocio.', en: 'Our approach combines creativity, cutting-edge technology, and strategy to deliver projects that not only look good but also generate tangible results for your business.' },
  'about.feature1': { es: 'Diseño personalizado', en: 'Custom Design' },
  'about.feature2': { es: 'Tecnología moderna', en: 'Modern Technology' },
  'about.feature3': { es: 'SEO integrado', en: 'Integrated SEO' },
  'about.feature4': { es: 'Soporte continuo', en: 'Ongoing Support' },
  'about.visual': { es: 'Diseño Web', en: 'Web Design' },

  // Portfolio
  'portfolio.title': { es: 'Portafolio', en: 'Portfolio' },
  'portfolio.subtitle': { es: 'Proyectos que hablan por sí mismos', en: 'Projects that speak for themselves' },
  'portfolio.description': { es: 'Cada proyecto es único. Conoce algunos de los trabajos que hemos realizado para nuestros clientes.', en: 'Each project is unique. Check out some of the work we have done for our clients.' },

  // Contact
  'contact.title': { es: 'Contacto', en: 'Contact' },
  'contact.subtitle': { es: 'Hablemos de tu proyecto', en: "Let's talk about your project" },
  'contact.description': { es: '¿Listo para empezar? Escríbenos y cotizamos tu proyecto sin compromiso.', en: 'Ready to start? Write to us and get a quote with no obligation.' },
  'contact.form.name': { es: 'Nombre', en: 'Name' },
  'contact.form.email': { es: 'Correo electrónico', en: 'Email' },
  'contact.form.phone': { es: 'Teléfono', en: 'Phone' },
  'contact.form.message': { es: 'Mensaje', en: 'Message' },
  'contact.form.submit': { es: 'Enviar mensaje', en: 'Send message' },
  'contact.info.title': { es: 'Información de contacto', en: 'Contact information' },
  'contact.info.email': { es: 'Correo', en: 'Email' },
  'contact.info.phone': { es: 'Teléfono', en: 'Phone' },
  'contact.info.whatsapp': { es: 'WhatsApp', en: 'WhatsApp' },

  // Footer
  'footer.rights': { es: 'Todos los derechos reservados', en: 'All rights reserved' },

  // Stats
  'stats.projects': { es: 'Proyectos realizados', en: 'Projects completed' },
  'stats.clients': { es: 'Clientes satisfechos', en: 'Satisfied clients' },
  'stats.experience': { es: 'Años de experiencia', en: 'Years of experience' },

  // Value Proposition
  'value.title': { es: '¿Por qué elegirnos?', en: 'Why choose us?' },
  'value.subtitle': { es: 'Nos diferencia la atención personalizada', en: 'What sets us apart is personalized attention' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
