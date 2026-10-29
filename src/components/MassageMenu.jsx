import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { openWhatsapp } from '../utils/whatsapp';

export function MassageMenu() {
  const { t, language, services, whatsappMessages } = useLanguage();

  return (
    <section
      id="menu"
      className="py-24 sm:py-32 bg-off-white text-text-dark border-b border-line-soft"
    >
      <div className="container-max">
        {/* Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <span className="eyebrow mb-4 block">{t.menu.eyebrow}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-deep-blue font-normal leading-tight mb-6">
            {t.menu.title}
          </h2>
          <p className="text-base sm:text-lg text-text-dark/80 font-light leading-relaxed">
            {t.menu.text}
          </p>
        </div>

        {/* Services Grid (2 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {services.map((service) => {
            const serviceName = service.name[language] || service.name.en;
            const serviceDesc = service.description[language] || service.description.en;
            const messageToSend = whatsappMessages[service.whatsappKey] || whatsappMessages.general;

            return (
              <article
                key={service.id}
                className="group bg-off-white border border-line-soft transition-all duration-300 hover:border-slate-blue/40 hover:shadow-md flex flex-col justify-between"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-line-soft">
                  <img
                    src={service.image}
                    alt={serviceName}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter saturate-[0.9]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 border-b border-line-soft/80 pointer-events-none" />
                </div>

                {/* Content */}
                <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-serif text-deep-blue font-normal mb-4">
                      {serviceName}
                    </h3>
                    <p className="text-sm sm:text-base text-text-dark/80 font-light leading-relaxed mb-6">
                      {serviceDesc}
                    </p>
                  </div>

                  <div>
                    {/* Decorative fine line */}
                    <div className="fine-line mb-6" />

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <span className="text-xs uppercase tracking-wider text-slate-blue font-medium">
                        {t.menu.priceNote}
                      </span>
                      <button
                        type="button"
                        onClick={() => openWhatsapp(messageToSend)}
                        className="btn-primary text-xs py-3 px-6 whitespace-nowrap"
                      >
                        {t.menu.ctaButton}
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Footnote */}
        <div className="max-w-3xl pt-8 border-t border-line-soft">
          <p className="text-xs sm:text-sm text-slate-blue font-light italic leading-relaxed">
            {t.menu.footNote}
          </p>
        </div>
      </div>
    </section>
  );
}

export default MassageMenu;

