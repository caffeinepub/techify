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
        defaultMessage: 'Hi Techify, I need help with Canva Pro',
        paymentConfirmationMessage: 'I have paid for Canva Pro'
    },
    
    // Pricing
    pricing: {
        regular: '₹3,999',
        offer: '₹399',
        period: '/Year'
    },

    // Comprehensive Canva Pro Features
    canvaProFeatures: [
        'Access to 100M+ premium templates, photos, videos, and graphics',
        'Background Remover for images and videos with AI precision',
        'Magic Resize - instantly adapt designs to any platform size',
        'Brand Kit - save brand colors, logos, and fonts in one place',
        'Content Planner - schedule and publish social media posts',
        'Premium animations and video effects',
        'Unlimited folders to organize your designs',
        'Team collaboration with up to 5 members',
        'Priority customer support',
        '100GB cloud storage for your designs',
        'Magic Eraser to remove unwanted objects from photos',
        'Transparent PNG and SVG downloads',
        'Premium fonts library with 3,000+ font families',
        'Video editing tools with transitions and effects',
        'Social media templates for all platforms',
        'Print-ready designs with bleed and crop marks',
    ]
} as const;
