import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY } from '../data/content';
import { useReducedMotion } from '../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export function BookingSection() {
  const { t, language } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '14:00',
    service: 'mix',
    note: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 78%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  // Minimum date today
  const today = new Date().toISOString().split('T')[0];

  // Time slots strictly between 10:00 and 23:00 (10 AM to 11 PM)
  const timeSlots = [
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '22:30',
    '23:00'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    // Resolve service label
    const selectedService = t.booking.serviceOptions.find((s) => s.id === formData.service);
    const serviceLabel = selectedService ? selectedService.label : formData.service;

    // Compose personalized WhatsApp message
    let message = '';
    if (language === 'pt') {
      message = `Olá Thaissa, gostaria de solicitar um agendamento:\n\n• Nome: ${formData.name.trim()}\n• Data: ${formData.date || 'A combinar'}\n• Horário: ${formData.time}\n• Serviço: ${serviceLabel}`;
      if (formData.note.trim()) {
        message += `\n• Mensagem: ${formData.note.trim()}`;
      }
      message += '\n\nPoderia confirmar a disponibilidade por favor?';
    } else {
      message = `Hello Thaissa, I would like to request an appointment:\n\n• Name: ${formData.name.trim()}\n• Date: ${formData.date || 'Flexible'}\n• Time: ${formData.time}\n• Experience: ${serviceLabel}`;
      if (formData.note.trim()) {
        message += `\n• Message: ${formData.note.trim()}`;
      }
      message += '\n\nPlease let me know if this slot is available';
    }

    const whatsappUrl = `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <section
      id="booking"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-dark-deep text-cream-text relative"
    >
      <div className="container-max">
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center px-4">
          <span className="eyebrow mb-4 block text-center">
            {t.booking.eyebrow}
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-cream-text font-normal leading-tight mb-4 text-center">
            {t.booking.title}
          </h2>

          <p className="text-base sm:text-lg text-cream-text/90 font-light leading-relaxed mb-6 text-center max-w-xl">
            {t.booking.subtitle}
          </p>

          {/* Operating hours badge: 10:00 to 23:00 */}
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 border border-gold-main/30 bg-dark-card rounded-full mb-12">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-main" />
            <span className="text-xs uppercase tracking-widest text-gold-main font-medium">
              {t.booking.hoursBadge}
            </span>
          </div>

          {/* Booking Card */}
          <div
            ref={cardRef}
            className="w-full bg-dark-card border border-gold-main/30 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(194,142,66,0.12)] p-6 sm:p-10 text-left relative rounded-2xl sm:rounded-3xl overflow-hidden"
          >
            {/* Subtle inner gold accent border */}
            <div className="absolute inset-0 border border-gold-main/20 pointer-events-none rounded-2xl sm:rounded-3xl" />

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {/* Name field */}
              <div>
                <label
                  htmlFor="booking-name"
                  className="block text-xs uppercase tracking-wider text-gray-warm mb-2 font-medium"
                >
                  {t.booking.nameLabel} *
                </label>
                <input
                  id="booking-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={t.booking.namePlaceholder}
                  className="w-full bg-dark-deep border border-border-subtle px-4 py-3 text-sm text-cream-text rounded-xl focus:outline-none focus:border-gold-main focus:ring-1 focus:ring-gold-main transition-colors duration-200"
                />
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Date picker */}
                <div>
                  <label
                    htmlFor="booking-date"
                    className="block text-xs uppercase tracking-wider text-gray-warm mb-2 font-medium"
                  >
                    {t.booking.dateLabel}
                  </label>
                  <input
                    id="booking-date"
                    name="date"
                    type="date"
                    min={today}
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full bg-dark-deep border border-border-subtle px-4 py-3 text-sm text-cream-text rounded-xl focus:outline-none focus:border-gold-main focus:ring-1 focus:ring-gold-main transition-colors duration-200 [color-scheme:dark]"
                  />
                </div>

                {/* Time selector */}
                <div>
                  <label
                    htmlFor="booking-time"
                    className="block text-xs uppercase tracking-wider text-gray-warm mb-2 font-medium"
                  >
                    {t.booking.timeLabel} (10h - 23h)
                  </label>
                  <select
                    id="booking-time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full bg-dark-deep border border-border-subtle px-4 py-3 text-sm text-cream-text rounded-xl focus:outline-none focus:border-gold-main focus:ring-1 focus:ring-gold-main transition-colors duration-200 [color-scheme:dark]"
                  >
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label
                  htmlFor="booking-service"
                  className="block text-xs uppercase tracking-wider text-gray-warm mb-2 font-medium"
                >
                  {t.booking.serviceLabel}
                </label>
                <select
                  id="booking-service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full bg-dark-deep border border-border-subtle px-4 py-3 text-sm text-cream-text rounded-xl focus:outline-none focus:border-gold-main focus:ring-1 focus:ring-gold-main transition-colors duration-200 [color-scheme:dark]"
                >
                  {t.booking.serviceOptions.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Special Note */}
              <div>
                <label
                  htmlFor="booking-note"
                  className="block text-xs uppercase tracking-wider text-gray-warm mb-2 font-medium"
                >
                  {t.booking.noteLabel}
                </label>
                <textarea
                  id="booking-note"
                  name="note"
                  rows={3}
                  value={formData.note}
                  onChange={handleInputChange}
                  placeholder={t.booking.notePlaceholder}
                  className="w-full bg-dark-deep border border-border-subtle px-4 py-3 text-sm text-cream-text rounded-xl focus:outline-none focus:border-gold-main focus:ring-1 focus:ring-gold-main transition-colors duration-200 resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-primary w-full inline-flex items-center justify-center space-x-2 py-3.5 text-center rounded-full"
                >
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.031 2C6.494 2 2 6.494 2 12.031c0 1.97.57 3.805 1.554 5.356L2 22l4.743-1.527a9.98 9.98 0 005.288 1.488h.004c5.535 0 10.029-4.494 10.029-10.03 0-2.679-1.045-5.197-2.942-7.094A9.957 9.957 0 0012.031 2zm0 18.256h-.003a8.21 8.21 0 01-4.184-1.149l-.3-.178-3.111 1.002.825-3.033-.195-.311a8.22 8.22 0 01-1.263-4.556c0-4.549 3.702-8.251 8.254-8.251 2.204 0 4.276.859 5.834 2.417a8.204 8.204 0 012.414 5.835c0 4.55-3.702 8.253-8.254 8.253zm4.526-6.177c-.248-.124-1.467-.724-1.695-.807-.228-.083-.394-.124-.56.124-.166.248-.642.807-.787.973-.145.166-.29.186-.539.062-.248-.124-1.049-.387-1.998-1.233-.739-.659-1.238-1.473-1.383-1.722-.145-.248-.016-.382.109-.506.112-.112.248-.29.373-.435.124-.145.166-.248.248-.415.083-.166.041-.311-.021-.435-.062-.124-.56-1.349-.767-1.847-.202-.486-.407-.42-.56-.428h-.477c-.166 0-.435.062-.663.311-.228.248-.871.851-.871 2.075 0 1.224.891 2.407 1.016 2.573.124.166 1.754 2.679 4.249 3.757.593.257 1.057.41 1.419.525.596.19 1.139.163 1.568.099.479-.072 1.467-.6 1.674-1.182.207-.581.207-1.079.145-1.182-.062-.104-.228-.166-.477-.29z"/>
                  </svg>
                  <span>{t.booking.submitButton}</span>
                </button>
              </div>

              {submitted && (
                <p className="text-xs text-gold-light text-center pt-2 italic">
                  WhatsApp aberto com todos os seus dados preenchidos
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingSection;
