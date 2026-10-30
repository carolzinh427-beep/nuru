import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY } from '../data/content';
import { useReducedMotion } from '../hooks/useReducedMotion';
import TearTicket from './TearTicket';
import StarBorder from './StarBorder';

gsap.registerPlugin(ScrollTrigger);

export function BookingSection() {
  const { t, language } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const ticketRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '14:00',
    service: 'mix',
    note: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketTorn, setTicketTorn] = useState(false);
  const [isFormFocused, setIsFormFocused] = useState(false);

  // Responsive ticket configuration
  const [ticketConfig, setTicketConfig] = useState({
    width: 860,
    height: 610,
    stubSize: 240,
    orientation: 'horizontal'
  });

  useEffect(() => {
    const updateDimensions = () => {
      const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1024;
      if (screenWidth < 840) {
        // Vertical ticket on mobile so inputs are 1:1 scale without downscaling
        const cardW = Math.max(310, Math.min(screenWidth - 32, 460));
        setTicketConfig({
          width: cardW,
          height: 740,
          stubSize: 150,
          orientation: 'vertical'
        });
      } else {
        // Widescreen horizontal VIP ticket on desktop
        setTicketConfig({
          width: 860,
          height: 610,
          stubSize: 240,
          orientation: 'horizontal'
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

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

  const handleTear = () => {
    setTicketTorn(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    // Tear the ticket with authentic physics on submission
    if (ticketRef.current && !ticketTorn) {
      ticketRef.current.tear();
    }
    setTicketTorn(true);

    // Resolve service label
    const selectedService = t.booking.serviceOptions.find((s) => s.id === formData.service);
    const serviceLabel = selectedService ? selectedService.label : formData.service;

    // Compose personalized WhatsApp message
    let message = '';
    if (language === 'pt') {
      message = `Olá, gostaria de solicitar um agendamento:\n\n• Nome: ${formData.name.trim()}\n• Data: ${formData.date || 'A combinar'}\n• Horário: ${formData.time}\n• Serviço: ${serviceLabel}`;
      if (formData.note.trim()) {
        message += `\n• Mensagem: ${formData.note.trim()}`;
      }
      message += '\n\nPoderia confirmar a disponibilidade por favor?';
    } else {
      message = `Hello, I would like to request an appointment:\n\n• Name: ${formData.name.trim()}\n• Date: ${formData.date || 'Flexible'}\n• Time: ${formData.time}\n• Experience: ${serviceLabel}`;
      if (formData.note.trim()) {
        message += `\n• Message: ${formData.note.trim()}`;
      }
      message += '\n\nPlease let me know if this slot is available';
    }

    const whatsappUrl = `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  // Selected service title for ticket stub
  const currentServiceLabel =
    t.booking.serviceOptions.find((s) => s.id === formData.service)?.label || 'Mix Body to Body';

  return (
    <section
      id="booking"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-dark-deep text-cream-text relative overflow-hidden"
    >
      <div className="container-max">
        <div ref={cardRef} className="w-full flex justify-center items-center px-2 sm:px-4">
          <TearTicket
            ref={ticketRef}
            width={ticketConfig.width}
            height={ticketConfig.height}
            stubSize={ticketConfig.stubSize}
            orientation={ticketConfig.orientation}
            radius={22}
            holes={ticketConfig.orientation === 'vertical' ? 10 : 13}
            holeSize={7}
            notch={6}
            roughness={0}
            tearAngle={28}
            stretch={28}
            resistance={0.4}
            rotate={0}
            tilt={!isFormFocused}
            tiltMax={3.5}
            parallax={3}
            perspective={1200}
            background="#12100E"
            stubBackground="#171411"
            borderColor="rgba(194, 142, 66, 0.45)"
            borderWidth={1.5}
            onTear={handleTear}
            className="shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_40px_rgba(194,142,66,0.14)]"
            stub={
              ticketConfig.orientation === 'vertical' ? (
                /* Mobile Vertical Stub (Bottom) */
                <div className="w-full h-full p-4 flex flex-col justify-between items-center text-center relative select-none">
                  {/* Subtle decorative inner border */}
                  <div className="absolute inset-2 border border-gold-main/20 rounded-xl pointer-events-none" />

                  <div className="flex items-center justify-between w-full px-2 pt-1">
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-gold-main shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 3c-1.5 3-4 5.5-7 6 3 1.5 5 4 5 7 0-3 2-5.5 5-7-3-.5-5.5-3-7-6z"/>
                        <path d="M12 16c-1 2-2.5 3.5-4.5 4 2 1 3.5 2.5 4 4.5.5-2 2-3.5 4-4.5-2-.5-3.5-2-4-4z" opacity="0.6"/>
                      </svg>
                      <span className="font-serif tracking-widest text-xs uppercase text-gold-light font-medium">
                        NURU LONDON · VIP PASS
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-gold-main/70 tracking-wider">
                      #LON-0842
                    </span>
                  </div>

                  <div className="flex items-center justify-between w-full px-2 text-xs text-cream-text/80">
                    <span className="font-light truncate max-w-[170px] text-left">
                      {formData.date ? formData.date : 'Flexible Date'} · {formData.time}
                    </span>
                    <span className="uppercase tracking-widest text-[10px] text-gold-main border border-gold-main/30 px-2 py-0.5 rounded-full">
                      Admit One
                    </span>
                  </div>

                  {/* Barcode & pull indicator */}
                  <div className="w-full px-2 pb-1 flex items-center justify-between">
                    <div className="flex space-x-0.5 h-6 items-center opacity-70">
                      {[3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 1, 2, 3, 1, 4, 2].map((w, i) => (
                        <div
                          key={i}
                          className="bg-gold-light"
                          style={{ width: `${w}px`, height: '100%' }}
                        />
                      ))}
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-gold-main/90 font-medium animate-pulse">
                      Pull down to tear
                    </div>
                  </div>
                </div>
              ) : (
                /* Desktop Horizontal Stub (Right) */
                <div className="w-full h-full p-6 flex flex-col justify-between items-center text-center relative select-none">
                  {/* Subtle decorative inner border */}
                  <div className="absolute inset-3 border border-gold-main/20 rounded-2xl pointer-events-none" />

                  {/* Header / Seal */}
                  <div className="flex flex-col items-center pt-2">
                    <div className="w-12 h-12 rounded-full border border-gold-main/40 flex items-center justify-center mb-3 bg-dark-deep/80 shadow-[0_0_15px_rgba(194,142,66,0.15)]">
                      <svg className="w-6 h-6 text-gold-main" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 3c-1.5 3-4 5.5-7 6 3 1.5 5 4 5 7 0-3 2-5.5 5-7-3-.5-5.5-3-7-6z"/>
                        <path d="M12 16c-1 2-2.5 3.5-4.5 4 2 1 3.5 2.5 4 4.5.5-2 2-3.5 4-4.5-2-.5-3.5-2-4-4z" opacity="0.6"/>
                      </svg>
                    </div>
                    <span className="font-serif text-sm uppercase tracking-widest text-gold-light font-medium">
                      Nuru London
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-gray-warm mt-0.5">
                      Private Sanctuary
                    </span>
                  </div>

                  {/* Pass Details */}
                  <div className="w-full px-2 py-3 border-y border-gold-main/20 flex flex-col items-center space-y-1.5">
                    <span className="text-[10px] uppercase tracking-widest text-gold-main font-semibold">
                      VIP Access Pass
                    </span>
                    <span className="text-xs text-cream-text font-light truncate max-w-[180px]">
                      {currentServiceLabel}
                    </span>
                    <span className="text-[11px] text-cream-text/70 font-mono">
                      {formData.date ? formData.date : 'Open Date'} · {formData.time}
                    </span>
                    <div className="pt-1">
                      <span className="text-[9px] uppercase tracking-widest text-gold-light/90 border border-gold-main/30 px-2 py-0.5 rounded-full">
                        Central London · SW1
                      </span>
                    </div>
                  </div>

                  {/* Barcode & Tear Hint */}
                  <div className="flex flex-col items-center pb-2 w-full">
                    <div className="flex justify-center space-x-1 h-9 items-center opacity-80 mb-2">
                      {[2, 1, 3, 1, 4, 2, 1, 3, 2, 4, 1, 3, 1, 2, 4, 1, 2, 3, 2].map((w, i) => (
                        <div
                          key={i}
                          className="bg-gold-light"
                          style={{ width: `${w}px`, height: '100%' }}
                        />
                      ))}
                    </div>
                    <div className="font-mono text-[10px] text-gray-warm tracking-widest">
                      #LON-00842-VIP
                    </div>
                    <div className="text-[9px] uppercase tracking-widest text-gold-main/80 font-medium mt-2 flex items-center space-x-1 animate-pulse">
                      <span>Drag to tear stub</span>
                      <svg className="w-3 h-3 text-gold-main" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                      </svg>
                    </div>
                  </div>
                </div>
              )
            }
          >
            {/* Ticket Body Content: The Booking Form */}
            <div className="w-full h-full p-6 sm:p-9 flex flex-col justify-between overflow-y-auto overflow-x-hidden">
              <form
                onSubmit={handleSubmit}
                className="space-y-4 sm:space-y-5"
                onFocus={() => setIsFormFocused(true)}
                onBlur={() => setIsFormFocused(false)}
              >
                {/* Name field */}
                <div>
                  <label
                    htmlFor="booking-name"
                    className="block text-xs uppercase tracking-wider text-gray-warm mb-1.5 font-medium"
                  >
                    {t.booking.nameLabel || 'Your Name'} *
                  </label>
                  <input
                    id="booking-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t.booking.namePlaceholder || 'Enter your full name'}
                    className="w-full bg-dark-deep/90 border border-border-subtle px-4 py-2.5 sm:py-3 text-sm text-cream-text rounded-xl focus:outline-none focus:border-gold-main focus:ring-1 focus:ring-gold-main transition-colors duration-200"
                  />
                </div>

                {/* Date & Time Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  {/* Date picker */}
                  <div>
                    <label
                      htmlFor="booking-date"
                      className="block text-xs uppercase tracking-wider text-gray-warm mb-1.5 font-medium"
                    >
                      {t.booking.dateLabel || 'Select Date'}
                    </label>
                    <input
                      id="booking-date"
                      name="date"
                      type="date"
                      min={today}
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full bg-dark-deep/90 border border-border-subtle px-4 py-2.5 sm:py-3 text-sm text-cream-text rounded-xl focus:outline-none focus:border-gold-main focus:ring-1 focus:ring-gold-main transition-colors duration-200 [color-scheme:dark]"
                    />
                  </div>

                  {/* Time selector */}
                  <div>
                    <label
                      htmlFor="booking-time"
                      className="block text-xs uppercase tracking-wider text-gray-warm mb-1.5 font-medium"
                    >
                      {t.booking.timeLabel || 'Select Time'}
                    </label>
                    <select
                      id="booking-time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full bg-dark-deep/90 border border-border-subtle px-4 py-2.5 sm:py-3 text-sm text-cream-text rounded-xl focus:outline-none focus:border-gold-main focus:ring-1 focus:ring-gold-main transition-colors duration-200 [color-scheme:dark]"
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
                    className="block text-xs uppercase tracking-wider text-gray-warm mb-1.5 font-medium"
                  >
                    {t.booking.serviceLabel || 'Select Experience or Query'}
                  </label>
                  <select
                    id="booking-service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full bg-dark-deep/90 border border-border-subtle px-4 py-2.5 sm:py-3 text-sm text-cream-text rounded-xl focus:outline-none focus:border-gold-main focus:ring-1 focus:ring-gold-main transition-colors duration-200 [color-scheme:dark]"
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
                    className="block text-xs uppercase tracking-wider text-gray-warm mb-1.5 font-medium"
                  >
                    {t.booking.noteLabel || 'Preferences or Notes'}
                  </label>
                  <textarea
                    id="booking-note"
                    name="note"
                    rows={2}
                    value={formData.note}
                    onChange={handleInputChange}
                    placeholder={t.booking.notePlaceholder || 'Any special request or question for your session'}
                    className="w-full bg-dark-deep/90 border border-border-subtle px-4 py-2 text-sm text-cream-text rounded-xl focus:outline-none focus:border-gold-main focus:ring-1 focus:ring-gold-main transition-colors duration-200 resize-none"
                  />
                </div>

                {/* Submit CTA */}
                <div className="pt-1">
                  <StarBorder
                    as="button"
                    type="submit"
                    color="#F5EFE6"
                    trailColor="#D9A75E"
                    backgroundColor="#C28E42"
                    textColor="#0A0A0A"
                    borderColor="rgba(194, 142, 66, 0.7)"
                    radius={9999}
                    thickness={1.5}
                    glow={0.7}
                    sparkle={true}
                    className="w-full inline-flex items-center justify-center space-x-2 py-3.5 text-center !rounded-full text-xs uppercase tracking-widest font-semibold shadow-[0_4px_25px_rgba(194,142,66,0.35)] hover:scale-[1.01] active:scale-95 transition-transform duration-200"
                  >
                    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12.031 2C6.494 2 2 6.494 2 12.031c0 1.97.57 3.805 1.554 5.356L2 22l4.743-1.527a9.98 9.98 0 005.288 1.488h.004c5.535 0 10.029-4.494 10.029-10.03 0-2.679-1.045-5.197-2.942-7.094A9.957 9.957 0 0012.031 2zm0 18.256h-.003a8.21 8.21 0 01-4.184-1.149l-.3-.178-3.111 1.002.825-3.033-.195-.311a8.22 8.22 0 01-1.263-4.556c0-4.549 3.702-8.251 8.254-8.251 2.204 0 4.276.859 5.834 2.417a8.204 8.204 0 012.414 5.835c0 4.55-3.702 8.253-8.254 8.253zm4.526-6.177c-.248-.124-1.467-.724-1.695-.807-.228-.083-.394-.124-.56.124-.166.248-.642.807-.787.973-.145.166-.29.186-.539.062-.248-.124-1.049-.387-1.998-1.233-.739-.659-1.238-1.473-1.383-1.722-.145-.248-.016-.382.109-.506.112-.112.248-.29.373-.435.124-.145.166-.248.248-.415.083-.166.041-.311-.021-.435-.062-.124-.56-1.349-.767-1.847-.202-.486-.407-.42-.56-.428h-.477c-.166 0-.435.062-.663.311-.228.248-.871.851-.871 2.075 0 1.224.891 2.407 1.016 2.573.124.166 1.754 2.679 4.249 3.757.593.257 1.057.41 1.419.525.596.19 1.139.163 1.568.099.479-.072 1.467-.6 1.674-1.182.207-.581.207-1.079.145-1.182-.062-.104-.228-.166-.477-.29z"/>
                    </svg>
                    <span>{t.booking.submitButton || 'Request Booking'}</span>
                  </StarBorder>
                </div>

                {submitted && (
                  <p className="text-xs text-gold-light text-center pt-1 italic">
                    WhatsApp aberto com todos os seus dados preenchidos
                  </p>
                )}
              </form>
            </div>
          </TearTicket>
        </div>
      </div>
    </section>
  );
}

export default BookingSection;
