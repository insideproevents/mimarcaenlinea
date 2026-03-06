import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../hooks/useLanguage';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageCircle } from 'lucide-react';

const services = [
  'Landing Page Autoadministrable',
  'Landing Page Profesional',
  'Web Corporativa',
  'Ecommerce',
  'Presskit para Artistas',
  'Branding',
  'Creación de Contenido',
];

const budgets = [
  'Menos de $500.000',
  '$500.000 - $1.000.000',
  '$1.000.000 - $2.000.000',
  '$2.000.000 - $5.000.000',
  'Más de $5.000.000',
  'A definir',
];

const timeframes = [
  'Menos de 1 mes',
  '1-2 meses',
  '2-3 meses',
  '3-6 meses',
  'Más de 6 meses',
  'Flexible',
];

export function Contact() {
  const { t } = useLanguage();
  const { ref: headerRef, isVisible: headerVisible } =
    useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const { ref: formRef, isVisible: formVisible } =
    useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    servicio: '',
    objetivo: '',
    presupuesto: '',
    plazo: '',
    mensaje: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append("access_key", "d9a54971-8df3-40c5-a555-107a410f03ec");
    formData.append("subject", "Nuevo contacto desde MIMARCA");
    formData.append("from_name", "MIMARCA Web Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            nombre: '',
            empresa: '',
            servicio: '',
            objetivo: '',
            presupuesto: '',
            plazo: '',
            mensaje: '',
          });
        }, 3000);
      } else {
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
      }

    } catch (error) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="relative w-full py-24 lg:py-32 bg-black overflow-hidden border-t border-white/10">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 right-0 w-[700px] h-[700px]"
          style={{
            background:
              'radial-gradient(circle, rgba(0,71,171,0.08) 0%, transparent 50%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div ref={headerRef} className="max-w-2xl mb-16">
            <span
              className={`section-label inline-block mb-6 transition-all duration-700 ease-expo-out ${
                headerVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-5'
              }`}
            >
              {t('contact.title')}
            </span>
            <h2
              className={`font-display font-bold text-h2 text-white mb-6 leading-tight transition-all duration-700 ease-expo-out ${
                headerVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              {t('contact.subtitle')} <span className="text-[#0041A8]">{t('contact.subtitle2')}</span>
            </h2>
            <p
              className={`text-lg text-[#d3d3d3] leading-relaxed transition-all duration-600 ease-smooth ${
                headerVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              {t('contact.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div
              className={`lg:col-span-1 space-y-8 transition-all duration-700 ease-expo-out ${
                headerVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 border border-[#0041A8]/30 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-[#0041A8]/10 group-hover:border-[#0041A8]">
                    <Mail className="w-5 h-5 text-[#0041A8]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#d3d3d3] mb-1 uppercase tracking-wider">Email</p>
                    <a
                      href="mailto:hola@mimarcaenlinea.cl"
                      className="text-white hover:text-[#0041A8] transition-colors duration-300"
                    >
                      hola@mimarcaenlinea.cl
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 border border-[#0041A8]/30 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-[#0041A8]/10 group-hover:border-[#0041A8]">
                    <Phone className="w-5 h-5 text-[#0041A8]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#d3d3d3] mb-1 uppercase tracking-wider">Teléfono</p>
                    <a
                      href="tel:+56986244373"
                      className="text-white hover:text-[#0041A8] transition-colors duration-300 block"
                    >
                      +569 86244373
                    </a>
                    <a
                      href="http://wa.me/+56989608591"
                      className="text-white hover:text-[#0041A8] transition-colors duration-300 block"
                    >
                      +569 89608591
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 border border-[#0041A8]/30 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-[#0041A8]/10 group-hover:border-[#0041A8]">
                    <MessageCircle className="w-5 h-5 text-[#0041A8]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#d3d3d3] mb-1 uppercase tracking-wider">WhatsApp</p>
                    <a
                      href="http://wa.me/+56937751673"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#0041A8] transition-colors duration-300 block"
                    >
                      +569 37751673
                    </a>
                    <a
                      href="http://wa.me/+56989608591"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#0041A8] transition-colors duration-300 block"
                    >
                      +569 89608591
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 border border-[#0041A8]/30 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-[#0041A8]/10 group-hover:border-[#0041A8]">
                    <MapPin className="w-5 h-5 text-[#0041A8]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#d3d3d3] mb-1 uppercase tracking-wider">Ubicación</p>
                    <p className="text-white">Santiago, Chile</p>
                  </div>
                </div>
              </div>

              {/* Note */}
              <div className="p-6 border border-white/10">
                <p className="text-sm text-white/40 leading-relaxed">
                  Nuestro equipo revisará tu solicitud y te responderá con una
                  propuesta personalizada en menos de 24 horas.
                </p>
              </div>
            </div>

            {/* Form */}
            <div
              ref={formRef}
              className={`lg:col-span-2 transition-all duration-700 ease-expo-out ${
                formVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-10'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <form onSubmit={(e) => { e.preventDefault(); handleSubmit(e); }} className="space-y-6">
                <input type="hidden" name="email_to" value="hola@mimarcaenlinea.cl" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Nombre */}
                  <div>
                    <label className="block text-sm text-white/60 mb-2 uppercase tracking-wider">
                      Nombre <span className="text-[#0041A8]">*</span>
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="Tu nombre"
                    />
                  </div>

                  {/* Empresa */}
                  <div>
                    <label className="block text-sm text-white/60 mb-2 uppercase tracking-wider">
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>

                {/* Servicio */}
                <div>
                  <label className="block text-sm text-white/60 mb-2 uppercase tracking-wider">
                    Servicio de interés
                  </label>
                  <select
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="">Selecciona un servicio</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Objetivo */}
                <div>
                  <label className="block text-sm text-white/60 mb-2 uppercase tracking-wider">
                    Objetivo del sitio web
                  </label>
                  <input
                    type="text"
                    name="objetivo"
                    value={formData.objetivo}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="¿Qué quieres lograr con tu sitio web?"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Presupuesto */}
                  <div>
                    <label className="block text-sm text-white/60 mb-2 uppercase tracking-wider">
                      Presupuesto estimado
                    </label>
                    <select
                      name="presupuesto"
                      value={formData.presupuesto}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="">Selecciona un rango</option>
                      {budgets.map((budget) => (
                        <option key={budget} value={budget}>
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Plazo */}
                  <div>
                    <label className="block text-sm text-white/60 mb-2 uppercase tracking-wider">
                      Plazo deseado
                    </label>
                    <select
                      name="plazo"
                      value={formData.plazo}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="">Selecciona un plazo</option>
                      {timeframes.map((timeframe) => (
                        <option key={timeframe} value={timeframe}>
                          {timeframe}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Mensaje */}
                <div>
                  <label className="block text-sm text-white/60 mb-2 uppercase tracking-wider">
                    Mensaje <span className="text-[#0041A8]">*</span>
                  </label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="input-field resize-none"
                    placeholder="Cuéntanos más sobre tu proyecto..."
                  />
                </div>

                {/* Submit */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitted || isSending}
                    className={`w-full md:w-auto px-12 py-4 font-semibold uppercase tracking-wider text-sm transition-all duration-300 flex items-center justify-center gap-2 rounded-full ${
                      isSubmitted
                        ? 'bg-green-600 text-white'
                        : 'bg-[#0041A8] text-white hover:bg-[#0058d1] hover:shadow-blue'
                    }`}
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle size={18} />
                        ¡Mensaje enviado!
                      </>
                    ) : isSending ? (
                      <>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar mensaje
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
