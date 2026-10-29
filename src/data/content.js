export const COMPANY = {
  name: "Nuru Massage London",
  whatsappNumber: "447561576379",
  whatsappDisplay: "+44 7561 576379",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Victoria+Station+London",
  hours: {
    en: "Every day, 10:00 AM – 11:00 PM",
    pt: "Todos os dias, das 10h às 23h"
  },
  location: {
    en: "Central London, near Victoria Station",
    pt: "Centro de Londres, próximo à Victoria Station"
  }
};

export const IMAGES = {
  heroImage: "/images/hero-placeholder.jpg",
  therapistImage: "/images/therapist-placeholder.jpg",
  locationImage: "/images/location-placeholder.jpg",
  treatmentRoomImage: "/images/treatment-room-placeholder.jpg",
  detailImage: "/images/detail-placeholder.jpg"
};

export const WHATSAPP_MESSAGES = {
  en: {
    general: "Hello, I would like to enquire about massage availability, prices and further information.",
    availability: "Hello, could you please tell me about your current availability?",
    service1: "Hello, I would like more information about the Mix Body-to-Body Massage.",
    service2: "Hello, I would like more information about the Nuru Massage."
  },
  pt: {
    general: "Olá, gostaria de saber mais sobre disponibilidade, preços e informações sobre as massagens.",
    availability: "Olá, poderia me informar sobre a disponibilidade atual?",
    service1: "Olá, gostaria de mais informações sobre a Massagem Mix Body-to-Body.",
    service2: "Olá, gostaria de mais informações sobre a Massagem Nuru."
  }
};

export const SERVICES = [
  {
    id: "mix-body-to-body",
    name: {
      en: "Mix Body-to-Body Massage",
      pt: "Massagem Mix Body-to-Body"
    },
    description: {
      en: "A sensual and relaxing experience combining sensual touch, deep tissue techniques and body-to-body massage. Warm massage oil enhances the smooth movements, creating a relaxing and immersive experience.",
      pt: "Uma experiência sensual e relaxante que combina toque sensual, técnicas de tecido profundo e massagem corpo a corpo. O óleo de massagem aquecido realça os movimentos suaves, criando uma experiência relaxante e envolvente."
    },
    whatsappKey: "service1",
    image: IMAGES.detailImage
  },
  {
    id: "nuru-massage",
    name: {
      en: "Nuru Massage",
      pt: "Massagem Nuru"
    },
    description: {
      en: "Experience a traditional Nuru massage using luxurious Nuru gel. The session combines sensual touch and deep tissue techniques with smooth, flowing body-to-body movements.",
      pt: "Experimente uma massagem Nuru tradicional, utilizando o luxuoso gel Nuru. A sessão combina toque sensual e técnicas de tecido profundo com movimentos corpo a corpo suaves e fluidos."
    },
    whatsappKey: "service2",
    image: IMAGES.treatmentRoomImage
  }
];

export const CONTENT = {
  en: {
    nav: {
      home: "Home",
      menu: "Massage Menu",
      about: "About",
      location: "Location",
      contact: "Contact",
      cta: "Contact via WhatsApp"
    },
    hero: {
      title: "Relaxation, privacy and a unique massage experience.",
      subtitle: "Enjoy a unique massage experience in a comfortable, clean and discreet environment, conveniently located in Central London near Victoria Station.",
      note: "Open every day from 10:00 AM to 11:00 PM.",
      ctaPrimary: "Contact via WhatsApp",
      ctaSecondary: "Explore the massage menu"
    },
    intro: {
      eyebrow: "Central London",
      title: "A calm and discreet setting in Central London.",
      text: "Enjoy a unique massage experience in a comfortable, clean and discreet environment, conveniently located near Victoria Station, London.",
      note: "Your comfort, privacy and well-being are always a priority.",
      indicators: ["Near Victoria Station", "Open every day", "10 AM – 11 PM"]
    },
    menu: {
      eyebrow: "Massage Menu",
      title: "Massage Menu",
      text: "Explore a selection of massage experiences designed to help you relax, release tension and enjoy a private moment of well-being.",
      ctaButton: "Enquire via WhatsApp",
      priceNote: "Prices and availability via WhatsApp",
      footNote: "For prices, availability and further information about my massage services, please contact me directly via WhatsApp."
    },
    experience: {
      eyebrow: "Comfort",
      title: "Designed around your comfort.",
      pillars: [
        {
          number: "01",
          title: "Privacy",
          text: "A discreet environment designed to help you feel comfortable throughout your visit."
        },
        {
          number: "02",
          title: "Cleanliness",
          text: "A comfortable and carefully maintained setting for every appointment."
        },
        {
          number: "03",
          title: "Well-being",
          text: "Your comfort and personal boundaries remain a priority throughout the experience."
        }
      ]
    },
    about: {
      eyebrow: "About the Experience",
      title: "A private moment to slow down.",
      text: "Whether you are looking to relax, release tension or enjoy a more immersive massage experience, each session takes place in a calm, clean and discreet environment in Central London.",
      note: "Please get in touch directly via WhatsApp for prices, availability and further information.",
      cta: "Get in touch"
    },
    location: {
      eyebrow: "Location",
      title: "Find us near Victoria Station.",
      labels: {
        area: "Central London",
        near: "Near Victoria Station",
        hours: "Every day, 10:00 AM – 11:00 PM"
      },
      text: "Conveniently located in Central London, with easy access from Victoria Station.",
      cta: "Open location in Google Maps"
    },
    contact: {
      eyebrow: "Contact",
      title: "Get in Touch",
      text: "For prices, availability and further information about my massage services, please contact me directly via WhatsApp.",
      note: "Your comfort, privacy and well-being are always a priority.",
      ctaPrimary: "Contact via WhatsApp",
      ctaSecondary: "Ask about availability",
      hoursLabel: "Open every day",
      hoursValue: "10:00 AM – 11:00 PM"
    },
    footer: {
      tagline: "A discreet massage experience in Central London.",
      linksTitle: "Explore",
      contactTitle: "Contact",
      hoursTitle: "Hours",
      disclaimer: "Please contact us directly for prices, availability and further information.",
      copyright: "© 2026 Nuru Massage London. All rights reserved."
    }
  },
  pt: {
    nav: {
      home: "Início",
      menu: "Cardápio de Massagens",
      about: "Sobre",
      location: "Localização",
      contact: "Contato",
      cta: "Falar pelo WhatsApp"
    },
    hero: {
      title: "Relaxamento, privacidade e uma experiência única de massagem.",
      subtitle: "Desfrute de uma experiência única de massagem em um ambiente confortável, limpo e discreto, convenientemente localizado no centro de Londres, próximo à Victoria Station.",
      note: "Aberto todos os dias das 10h às 23h.",
      ctaPrimary: "Falar pelo WhatsApp",
      ctaSecondary: "Conhecer as massagens"
    },
    intro: {
      eyebrow: "Centro de Londres",
      title: "Um ambiente calmo e discreto no centro de Londres.",
      text: "Desfrute de uma experiência única de massagem em um ambiente confortável, limpo e discreto, convenientemente localizado próximo à Victoria Station, Londres.",
      note: "Seu conforto, sua privacidade e seu bem-estar são sempre prioridade.",
      indicators: ["Próximo à Victoria Station", "Aberto todos os dias", "10h às 23h"]
    },
    menu: {
      eyebrow: "Cardápio de Massagens",
      title: "Cardápio de Massagens",
      text: "Conheça uma seleção de experiências de massagem criadas para ajudar você a relaxar, liberar tensões e desfrutar de um momento privado de bem-estar.",
      ctaButton: "Perguntar pelo WhatsApp",
      priceNote: "Preços e disponibilidade pelo WhatsApp",
      footNote: "Para saber preços, disponibilidade e mais informações sobre os serviços de massagem, entre em contato diretamente pelo WhatsApp."
    },
    experience: {
      eyebrow: "Conforto",
      title: "Pensado para o seu conforto.",
      pillars: [
        {
          number: "01",
          title: "Privacidade",
          text: "Um ambiente discreto, pensado para que você se sinta confortável durante toda a visita."
        },
        {
          number: "02",
          title: "Limpeza",
          text: "Um ambiente confortável e cuidadosamente mantido para cada atendimento."
        },
        {
          number: "03",
          title: "Bem-estar",
          text: "Seu conforto e seus limites pessoais permanecem prioridade durante toda a experiência."
        }
      ]
    },
    about: {
      eyebrow: "Sobre a Experiência",
      title: "Um momento privado para desacelerar.",
      text: "Seja para relaxar, liberar tensões ou desfrutar de uma experiência de massagem mais envolvente, cada sessão acontece em um ambiente calmo, limpo e discreto no centro de Londres.",
      note: "Entre em contato diretamente pelo WhatsApp para preços, disponibilidade e mais informações.",
      cta: "Entre em contato"
    },
    location: {
      eyebrow: "Localização",
      title: "Encontre-nos próximo à Victoria Station.",
      labels: {
        area: "Centro de Londres",
        near: "Próximo à Victoria Station",
        hours: "Todos os dias, das 10h às 23h"
      },
      text: "Convenientemente localizado no centro de Londres, com fácil acesso a partir da Victoria Station.",
      cta: "Abrir localização no Google Maps"
    },
    contact: {
      eyebrow: "Contato",
      title: "Entre em Contato",
      text: "Para saber preços, disponibilidade e mais informações sobre os serviços de massagem, entre em contato diretamente pelo WhatsApp.",
      note: "Seu conforto, sua privacidade e seu bem-estar são sempre prioridade.",
      ctaPrimary: "Falar pelo WhatsApp",
      ctaSecondary: "Perguntar disponibilidade",
      hoursLabel: "Aberto todos os dias",
      hoursValue: "10h às 23h"
    },
    footer: {
      tagline: "Uma experiência de massagem discreta no centro de Londres.",
      linksTitle: "Explorar",
      contactTitle: "Contato",
      hoursTitle: "Horários",
      disclaimer: "Entre em contato diretamente para preços, disponibilidade e mais informações.",
      copyright: "© 2026 Nuru Massage London. Todos os direitos reservados."
    }
  }
};

