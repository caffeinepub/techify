// Centralized constants for Techify landing page
export const TECHIFY_CONSTANTS = {
    // Contact details
    phone: {
        raw: '9622655116',
        display: '96226 55116',
        e164: '+919622655116', // E.164 format for wa.me
        tel: 'tel:+919622655116'
    },
    
    // UPI payment details
    upi: {
        id: '9622655116@ybl',
        payeeName: 'Techify'
    },
    
    // WhatsApp support message
    whatsapp: {
        defaultMessage: 'Hi Techify, I need help with Canva Pro'
    },
    
    // Pricing
    pricing: {
        regular: '₹3,999',
        offer: '₹399',
        period: '/Year'
    }
} as const;
