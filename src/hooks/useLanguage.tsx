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
  'portfolio.subtitle2': { es: 'y colaboraciones', en: 'and collaborations' },
  'portfolio.description': { es: 'Cada proyecto es único. Conoce algunos de los trabajos que hemos realizado para nuestros clientes.', en: 'Each project is unique. Check out some of the work we have done for our clients.' },
  'portfolio.description2': { es: 'Estos son algunos de los proyectos en los que hemos trabajado, desarrollando soluciones digitales adaptadas a cada cliente, rubro y objetivo.', en: 'These are some of the projects we have worked on, developing digital solutions tailored to each client, industry, and goal.' },

  // Portfolio Projects
  'portfolio.project1.title': { es: 'E-commerce', en: 'E-commerce' },
  'portfolio.project1.category': { es: 'Tienda Online', en: 'Online Store' },
  'portfolio.project1.desc': { es: 'Diseño y desarrollo de tienda online para marca de ropa.', en: 'Design and development of online store for clothing brand.' },
  'portfolio.project2.title': { es: 'Web Corporativa', en: 'Corporate Website' },
  'portfolio.project2.category': { es: 'Web Corporativa', en: 'Corporate Website' },
  'portfolio.project2.desc': { es: 'Sitio web profesional para empresa de tecnología.', en: 'Professional website for technology company.' },
  'portfolio.project3.title': { es: 'Landing Producto', en: 'Product Landing' },
  'portfolio.project3.category': { es: 'Landing Page', en: 'Landing Page' },
  'portfolio.project3.desc': { es: 'Página de lanzamiento para nuevo producto digital.', en: 'Landing page for new digital product.' },
  'portfolio.project4.title': { es: 'Portafolio Creativo', en: 'Creative Portfolio' },
  'portfolio.project4.category': { es: 'Web Personal', en: 'Personal Website' },
  'portfolio.project4.desc': { es: 'Sitio web para fotógrafo profesional.', en: 'Website for professional photographer.' },
  'portfolio.project5.title': { es: 'Restaurante App', en: 'Restaurant App' },
  'portfolio.project5.category': { es: 'Web + App', en: 'Web + App' },
  'portfolio.project5.desc': { es: 'Plataforma digital para cadena de restaurantes.', en: 'Digital platform for restaurant chain.' },
  'portfolio.project6.title': { es: 'Startup Tech', en: 'Tech Startup' },
  'portfolio.project6.category': { es: 'Web Corporativa', en: 'Corporate Website' },
  'portfolio.project6.desc': { es: 'Identidad digital para startup tecnológica.', en: 'Digital identity for tech startup.' },
  'portfolio.cta': { es: '¿Tienes un proyecto en mente? Hablemos', en: 'Do you have a project in mind? Let\'s talk' },

  // Contact
  'contact.title': { es: 'Contacto', en: 'Contact' },
  'contact.subtitle': { es: 'Hablemos sobre tu', en: "Let's talk about your" },
  'contact.subtitle2': { es: 'proyecto', en: 'project' },
  'contact.description': { es: 'Cuéntanos qué necesitas y te ayudaremos a definir la mejor solución web para tu negocio.', en: 'Tell us what you need and we will help you define the best web solution for your business.' },
  'contact.form.name': { es: 'Nombre', en: 'Name' },
  'contact.form.email': { es: 'Correo electrónico', en: 'Email' },
  'contact.form.phone': { es: 'Teléfono', en: 'Phone' },
  'contact.form.message': { es: 'Mensaje', en: 'Message' },
  'contact.form.submit': { es: 'Enviar mensaje', en: 'Send message' },
  'contact.form.name.placeholder': { es: 'Tu nombre', en: 'Your name' },
  'contact.form.company': { es: 'Empresa', en: 'Company' },
  'contact.form.company.placeholder': { es: 'Nombre de tu empresa', en: 'Your company name' },
  'contact.form.service': { es: 'Servicio de interés', en: 'Service of interest' },
  'contact.form.service.select': { es: 'Selecciona un servicio', en: 'Select a service' },
  'contact.form.goal': { es: 'Objetivo del sitio web', en: 'Website goal' },
  'contact.form.goal.placeholder': { es: '¿Qué quieres lograr con tu sitio web?', en: 'What do you want to achieve with your website?' },
  'contact.form.budget': { es: 'Presupuesto estimado', en: 'Estimated budget' },
  'contact.form.budget.select': { es: 'Selecciona un rango', en: 'Select a range' },
  'contact.form.timeline': { es: 'Plazo deseado', en: 'Desired timeline' },
  'contact.form.timeline.select': { es: 'Selecciona un plazo', en: 'Select a timeline' },
  'contact.form.message.placeholder': { es: 'Cuéntanos más sobre tu proyecto...', en: 'Tell us more about your project...' },
  'contact.form.sending': { es: 'Enviando...', en: 'Sending...' },
  'contact.form.sent': { es: '¡Mensaje enviado!', en: 'Message sent!' },
  'contact.info.title': { es: 'Información de contacto', en: 'Contact information' },
  'contact.info.email': { es: 'Correo', en: 'Email' },
  'contact.info.phone': { es: 'Teléfono', en: 'Phone' },
  'contact.info.whatsapp': { es: 'WhatsApp', en: 'WhatsApp' },
  'contact.info.location': { es: 'Ubicación', en: 'Location' },
  'contact.info.note': { es: 'Nuestro equipo revisará tu solicitud y te responderá con una propuesta personalizada en menos de 24 horas.', en: 'Our team will review your request and respond with a personalized proposal within 24 hours.' },

  // Budgets for Contact Form
  'budget.1': { es: 'Menos de $500.000', en: 'Less than $500.000' },
  'budget.2': { es: '$500.000 - $1.000.000', en: '$500.000 - $1.000.000' },
  'budget.3': { es: '$1.000.000 - $2.000.000', en: '$1.000.000 - $2.000.000' },
  'budget.4': { es: '$2.000.000 - $5.000.000', en: '$2.000.000 - $5.000.000' },
  'budget.5': { es: 'Más de $5.000.000', en: 'More than $5.000.000' },
  'budget.6': { es: 'A definir', en: 'To be defined' },

  // Timeframes for Contact Form
  'timeframe.1': { es: 'Menos de 1 mes', en: 'Less than 1 month' },
  'timeframe.2': { es: '1-2 meses', en: '1-2 months' },
  'timeframe.3': { es: '2-3 meses', en: '2-3 months' },
  'timeframe.4': { es: '3-6 meses', en: '3-6 months' },
  'timeframe.5': { es: 'Más de 6 meses', en: 'More than 6 months' },
  'timeframe.6': { es: 'Flexible', en: 'Flexible' },

  // Footer
  'footer.rights': { es: 'Todos los derechos reservados', en: 'All rights reserved' },

  // Stats
  'stats.projects': { es: 'Proyectos realizados', en: 'Projects completed' },
  'stats.clients': { es: 'Clientes satisfechos', en: 'Satisfied clients' },
  'stats.experience': { es: 'Años de experiencia', en: 'Years of experience' },
  'stats.label': { es: 'Expertos Digitales', en: 'Digital Experts' },
  'stats.title': { es: 'Tu socio estratégico para soluciones web inteligentes y orientadas a resultados', en: 'Your strategic partner for intelligent, results-oriented web solutions' },

  // Value Proposition
  'value.title': { es: '¿Por qué elegirnos?', en: 'Why choose us?' },
  'value.subtitle': { es: 'Nos diferencia la atención personalizada', en: 'What sets us apart is personalized attention' },
  'value.headline1': { es: 'Construimos tu', en: 'We build your' },
  'value.headline2': { es: 'presencia digital', en: 'digital presence' },
  'value.headline3': { es: 'con', en: 'with' },
  'value.headline4': { es: 'visión y estructura', en: 'vision and structure' },
  'value.headline5': { es: 'desde el comienzo.', en: 'from the start.' },
  'value.description': { es: 'No solo diseñamos páginas web. Creamos herramientas digitales pensadas para transmitir profesionalismo, atraer clientes y apoyar tus objetivos comerciales. Cada proyecto se desarrolla con estándares actuales de diseño, rendimiento y posicionamiento.', en: 'We don\'t just design websites. We create digital tools designed to convey professionalism, attract customers, and support your business goals. Each project is developed with current standards of design, performance, and positioning.' },
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
