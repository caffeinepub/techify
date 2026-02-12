import { TECHIFY_CONSTANTS } from '../constants/techify';

/**
 * Generates a UPI payment deep link for mobile payment apps
 */
export function generateUpiPaymentLink(): string {
  const { id, payeeName } = TECHIFY_CONSTANTS.upi;
  const { offer } = TECHIFY_CONSTANTS.pricing;
  const amount = offer.replace('₹', '');
  const note = encodeURIComponent('Canva Pro 1 Year Subscription');

  return `upi://pay?pa=${id}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR&tn=${note}`;
}

/**
 * Generates a WhatsApp support link with pre-filled message
 */
export function generateWhatsAppLink(): string {
  const { e164 } = TECHIFY_CONSTANTS.phone;
  const message = encodeURIComponent(TECHIFY_CONSTANTS.whatsapp.defaultMessage);
  return `https://wa.me/${e164}?text=${message}`;
}

/**
 * Generates a WhatsApp link for payment confirmation with pre-filled message
 */
export function generateWhatsAppPaymentLink(): string {
  const { e164 } = TECHIFY_CONSTANTS.phone;
  const message = encodeURIComponent(TECHIFY_CONSTANTS.whatsapp.paymentConfirmationMessage);
  return `https://wa.me/${e164}?text=${message}`;
}

/**
 * Generates a WhatsApp link for form submission with user details
 */
export function generateWhatsAppFormLink(name: string, contact: string): string {
  const { e164 } = TECHIFY_CONSTANTS.phone;
  const message = encodeURIComponent(
    `Hi, I want to purchase Canva Pro!\n\nName: ${name}\nContact: ${contact}\n\nPlease guide me with the payment process.`
  );
  return `https://wa.me/${e164}?text=${message}`;
}
