import { COMPANY } from '../data/content';

/**
 * Builds encoded WhatsApp URL for direct messaging.
 * @param {string} message 
 * @returns {string}
 */
export function buildWhatsappUrl(message) {
  const encoded = encodeURIComponent(message || '');
  return `https://wa.me/${COMPANY.whatsappNumber}?text=${encoded}`;
}

/**
 * Opens WhatsApp chat in a new tab.
 * @param {string} message 
 */
export function openWhatsapp(message) {
  const url = buildWhatsappUrl(message);
  if (typeof window !== 'undefined') {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}

