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
      en: "A sensual, slow-burning experience combining deep touch, flowing body-to-body movement and warm oil. Every motion is designed to dissolve tension and awaken the senses in complete privacy.",
      pt: "Uma experiência sensual e envolvente que combina toque profundo, movimentos corpo a corpo fluidos e óleo aquecido. Cada gesto é pensado para dissolver tensões e despertar os sentidos em total privacidade."
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
      en: "A traditional Nuru ritual performed with luxurious, silken gel. Skin against skin, slow and deliberate, in an atmosphere built entirely around pleasure and discretion.",
      pt: "Um ritual Nuru tradicional, realizado com um gel luxuoso e sedoso. Pele contra pele, em movimentos lentos e deliberados, dentro de uma atmosfera construída inteiramente em torno do prazer e da discrição."
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
      title: "Where darkness meets touch, and touch becomes pleasure.",
      subtitle: "Step into a private, gold-lit sanctuary in Central London, near Victoria Station — designed for those who seek more than relaxation.",
      note: "Open every day, 10:00 AM to 11:00 PM.",
      ctaPrimary: "Contact via WhatsApp",
      ctaSecondary: "Explore the massage menu"
    },
    intro: {
      eyebrow: "Central London",
      title: "An intimate space, hidden in plain sight.",
      text: "Behind a quiet door near Victoria Station lies a space built entirely for sensation — low light, warm gold, and complete privacy.",
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
      eyebrow: "Comfort & Luxury",
      title: "Designed around your pleasure and discretion.",
      pillars: [
        {
          number: "01",
          title: "Absolute Privacy",
          text: "A discreet, secluded environment designed to ensure you feel entirely comfortable throughout your visit."
        },
        {
          number: "02",
          title: "Sensory Atmosphere",
          text: "Warm ambient light, luxurious linens and carefully warmed oils prepared exclusively for each appointment."
        },
        {
          number: "03",
          title: "Refined Well-being",
          text: "Your personal comfort and boundaries remain the absolute priority throughout the entire encounter."
        }
      ]
    },
    about: {
      eyebrow: "About the Sanctuary",
      title: "A private moment to slow down.",
      text: "Whether you seek deep release or an enveloping, immersive massage experience, each ritual unfolds in a calm, discreet sanctuary in Central London.",
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
      text: "Conveniently located in Central London, with discreet and easy access from Victoria Station.",
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
      tagline: "A discreet and luxurious massage sanctuary in Central London.",
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
      title: "Onde a escuridão encontra o toque, e o toque se torna prazer.",
      subtitle: "Entre em um santuário privado e iluminado a ouro no centro de Londres, próximo à Victoria Station — criado para quem busca mais do que relaxamento.",
      note: "Aberto todos os dias, das 10h às 23h.",
      ctaPrimary: "Falar pelo WhatsApp",
      ctaSecondary: "Conhecer as massagens"
    },
    intro: {
      eyebrow: "Centro de Londres",
      title: "Um espaço íntimo, escondido aos olhos de todos.",
      text: "Atrás de uma porta discreta perto da Victoria Station está um espaço criado inteiramente para a sensação — pouca luz, ouro quente e total privacidade.",
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
      eyebrow: "Conforto e Luxo",
      title: "Pensado para o seu prazer e discrição.",
      pillars: [
        {
          number: "01",
          title: "Privacidade Absoluta",
          text: "Um ambiente reservado e discreto, planejado para que você se sinta completamente à vontade durante toda a visita."
        },
        {
          number: "02",
          title: "Atmosfera Sensorial",
          text: "Iluminação suave, toalhas nobres e óleos aquecidos preparados exclusivamente para cada atendimento."
        },
        {
          number: "03",
          title: "Bem-estar Refinado",
          text: "Seu conforto pessoal e seus limites permanecem prioridade absoluta durante toda a experiência."
        }
      ]
    },
    about: {
      eyebrow: "Sobre o Santuário",
      title: "Um momento privado para desacelerar.",
      text: "Seja para relaxar profundamente ou desfrutar de uma experiência de massagem mais envolvente, cada sessão acontece em um ambiente calmo, limpo e discreto no centro de Londres.",
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
      text: "Convenientemente localizado no centro de Londres, com acesso discreto e fácil a partir da Victoria Station.",
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
      tagline: "Um santuário de massagem discreto e luxuoso no centro de Londres.",
      linksTitle: "Explorar",
      contactTitle: "Contato",
      hoursTitle: "Horários",
      disclaimer: "Entre em contato diretamente para preços, disponibilidade e mais informações.",
      copyright: "© 2026 Nuru Massage London. Todos os direitos reservados."
    }
  }
};
