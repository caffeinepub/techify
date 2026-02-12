import { TECHIFY_CONSTANTS } from '../constants/techify';

/**
 * Generates a UPI payment deep link for the Techify Canva Pro offer.
 * The link follows the UPI URI scheme and will open UPI-enabled apps on mobile devices.
 */
export function generateUpiPaymentLink(): string {
    const { id, payeeName } = TECHIFY_CONSTANTS.upi;
    const amount = '399';
    const currency = 'INR';
    const transactionNote = 'Canva Pro - 1 Year';
    
    // UPI deep link format: upi://pay?pa=<UPI_ID>&pn=<PAYEE_NAME>&am=<AMOUNT>&cu=<CURRENCY>&tn=<NOTE>
    const params = new URLSearchParams({
        pa: id,
        pn: payeeName,
        am: amount,
        cu: currency,
        tn: transactionNote
    });
    
    return `upi://pay?${params.toString()}`;
}

/**
 * Generates WhatsApp support link with pre-filled message
 */
export function generateWhatsAppLink(): string {
    const { e164 } = TECHIFY_CONSTANTS.phone;
    const { defaultMessage } = TECHIFY_CONSTANTS.whatsapp;
    const encodedMessage = encodeURIComponent(defaultMessage);
    
    return `https://wa.me/${e164}?text=${encodedMessage}`;
}
