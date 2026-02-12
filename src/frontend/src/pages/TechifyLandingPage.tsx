import { SiWhatsapp } from 'react-icons/si';
import { CheckCircle2, Sparkles, Gem, Maximize2, Copy, Check, TrendingUp, Star, Shield, Zap, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TECHIFY_CONSTANTS } from '../constants/techify';
import { generateUpiPaymentLink, generateWhatsAppLink, generateWhatsAppPaymentLink, generateWhatsAppFormLink } from '../utils/upi';
import { useUpiPayment } from '../hooks/useUpiPayment';
import { useSimulatedLivePurchases } from '../hooks/useSimulatedLivePurchases';
import { PersistentBottomCtaBar } from '../components/PersistentBottomCtaBar';
import { useState } from 'react';

export default function TechifyLandingPage() {
    const upiPaymentLink = generateUpiPaymentLink();
    const whatsappLink = generateWhatsAppLink();
    const whatsappPaymentLink = generateWhatsAppPaymentLink();
    const currentYear = new Date().getFullYear();
    
    const { initiatePayment, showFallback, closeFallback, copyUpiId, copied, copyError } = useUpiPayment(upiPaymentLink);
    const livePurchases = useSimulatedLivePurchases();

    // Form state
    const [formData, setFormData] = useState({ name: '', contact: '' });

    // Calculate remaining slots (start at 30, decrease with simulated purchases, clamp at 0)
    const remainingSlots = Math.max(0, 30 - livePurchases.totalDeltaSinceMount);

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.name && formData.contact) {
            const whatsappFormLink = generateWhatsAppFormLink(formData.name, formData.contact);
            window.open(whatsappFormLink, '_blank');
        }
    };

    // Testimonials data with avatars
    const testimonials = [
        {
            name: "Priya Sharma",
            quote: "Super fast activation, best pricing in India.",
            avatar: "/assets/generated/review-avatar-1.dim_128x128.png"
        },
        {
            name: "Rahul Verma",
            quote: "Techify made my work easier instantly.",
            avatar: "/assets/generated/review-avatar-2.dim_128x128.png"
        },
        {
            name: "Anjali Patel",
            quote: "My YouTube thumbnails look 10x better now.",
            avatar: "/assets/generated/review-avatar-3.dim_128x128.png"
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 pb-bottom-bar-safe">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
                <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="text-2xl font-black tracking-tighter">
                        TECH<span className="text-techify">IFY</span>
                    </div>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold transition-colors"
                    >
                        <SiWhatsapp className="text-lg" />
                        Support
                    </a>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-12 pb-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Main Headline */}
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-4 tracking-tight">
                        Techify — India's Best Canva Pro Reseller | Canva Pro Premium ₹399 (1 Year)
                    </h1>

                    {/* Subheadline with benefits */}
                    <p className="text-lg md:text-xl text-slate-600 font-semibold mb-8">
                        Instant Activation • Premium Tools • Safe & Trusted
                    </p>

                    {/* Social Proof Section */}
                    <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 mb-8 max-w-2xl mx-auto">
                        {/* Star Rating */}
                        <div className="flex items-center justify-center gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <p className="text-lg font-bold text-slate-900 mb-6">
                            Rated 4.9/5 by 5000+ Creators
                        </p>

                        {/* Customer Testimonials with Avatars */}
                        <div className="space-y-4">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg text-left">
                                    <img 
                                        src={testimonial.avatar} 
                                        alt={testimonial.name}
                                        className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                                    />
                                    <div className="flex-1">
                                        <p className="font-bold text-slate-900 text-sm mb-1">{testimonial.name}</p>
                                        <p className="text-slate-700 text-sm italic">"{testimonial.quote}"</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Benefit Bullets Section */}
                    <div className="bg-gradient-to-br from-purple-50 to-cyan-50 rounded-2xl p-8 mb-8 max-w-3xl mx-auto">
                        <h2 className="text-2xl font-black mb-6">What You Get:</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="text-green-500 w-6 h-6 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-bold text-slate-900">1-Year Canva Pro for just ₹399</p>
                                    <p className="text-sm text-slate-600">Unbeatable value for money</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="text-green-500 w-6 h-6 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-bold text-slate-900">Instant account activation</p>
                                    <p className="text-sm text-slate-600">Get started in minutes</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="text-green-500 w-6 h-6 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-bold text-slate-900">100M+ premium assets unlocked</p>
                                    <p className="text-sm text-slate-600">Photos, videos, templates & more</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="text-green-500 w-6 h-6 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-bold text-slate-900">Magic Resize, Background Remover, Brand Kit</p>
                                    <p className="text-sm text-slate-600">All Pro features included</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="text-green-500 w-6 h-6 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-bold text-slate-900">Safe, secure and trusted reseller</p>
                                    <p className="text-sm text-slate-600">5000+ happy customers</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="text-green-500 w-6 h-6 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-bold text-slate-900">Works on mobile and laptop</p>
                                    <p className="text-sm text-slate-600">Design anywhere, anytime</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Urgency Text */}
                    <p className="text-red-600 font-bold text-lg mb-6 animate-pulse">
                        ⚡ Limited Offer — Price May Increase Soon
                    </p>

                    {/* Strong CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <Button
                            onClick={initiatePayment}
                            className="bg-techify hover:bg-techify/90 hover:scale-105 transform transition text-white text-xl font-black py-6 px-8 rounded-2xl shadow-lg shadow-cyan-200 h-auto"
                        >
                            Unlock Canva Pro ₹399
                        </Button>
                        <Button
                            onClick={initiatePayment}
                            className="bg-purple-600 hover:bg-purple-700 hover:scale-105 transform transition text-white text-xl font-black py-6 px-8 rounded-2xl shadow-lg shadow-purple-200 h-auto"
                        >
                            Get Premium Access Now
                        </Button>
                    </div>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap justify-center gap-6 mb-8">
                        <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow-sm border border-slate-100">
                            <Shield className="text-green-500 w-5 h-5" />
                            <span className="font-bold text-sm">Secure Delivery</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow-sm border border-slate-100">
                            <Clock className="text-blue-500 w-5 h-5" />
                            <span className="font-bold text-sm">24/7 Support</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow-sm border border-slate-100">
                            <Zap className="text-yellow-500 w-5 h-5" />
                            <span className="font-bold text-sm">Instant Activation</span>
                        </div>
                    </div>

                    {/* Simple Form */}
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 max-w-md mx-auto">
                        <h3 className="text-2xl font-black mb-4">Quick Purchase Form</h3>
                        <p className="text-slate-600 mb-6">Fill in your details to get started instantly</p>
                        <form onSubmit={handleFormSubmit} className="space-y-4">
                            <div>
                                <Label htmlFor="name" className="text-left block mb-2 font-semibold">Your Name</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    className="w-full"
                                />
                            </div>
                            <div>
                                <Label htmlFor="contact" className="text-left block mb-2 font-semibold">WhatsApp / Email</Label>
                                <Input
                                    id="contact"
                                    type="text"
                                    placeholder="Enter WhatsApp number or email"
                                    value={formData.contact}
                                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                                    required
                                    className="w-full"
                                />
                            </div>
                            <Button
                                type="submit"
                                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-6 rounded-xl h-auto"
                            >
                                <SiWhatsapp className="mr-2 text-xl" />
                                Continue on WhatsApp
                            </Button>
                        </form>
                        <p className="text-xs text-slate-500 mt-4">
                            We'll contact you on WhatsApp to complete your purchase
                        </p>
                    </div>
                </div>
            </section>

            {/* Trust Band */}
            <div className="bg-white py-8 border-y border-slate-100">
                <p className="text-center text-slate-400 text-sm font-bold uppercase tracking-widest mb-4">
                    Trusted By 10,000+ Creators from
                </p>
                <div className="flex flex-wrap justify-center gap-8 opacity-40 grayscale font-bold text-xl">
                    <span>Instagram</span>
                    <span>YouTube</span>
                    <span>LinkedIn</span>
                    <span>Fiverr</span>
                </div>
            </div>

            {/* Live Purchases Section */}
            <section className="py-16 px-4 bg-gradient-to-br from-green-50 via-white to-emerald-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold mb-4">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            LIVE ACTIVITY
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black mb-2 flex items-center justify-center gap-3">
                            <TrendingUp className="text-green-600" />
                            Live Purchases
                        </h2>
                        <p className="text-slate-600 text-sm">
                            Join thousands of satisfied customers
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 md:p-8">
                        {/* Total Purchases Counter */}
                        <div className="text-center mb-8 pb-6 border-b border-slate-100">
                            <div className="text-5xl md:text-6xl font-black text-techify mb-2">
                                {livePurchases.total}
                            </div>
                            <p className="text-slate-600 font-semibold">Total Purchases</p>
                        </div>

                        {/* Recent Activity Feed */}
                        <div className="space-y-3">
                            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">
                                Recent Activity
                            </h3>
                            
                            {livePurchases.recent.length > 0 ? (
                                <>
                                    {livePurchases.recent.map((purchase) => (
                                        <div
                                            key={purchase.id}
                                            className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                                        >
                                            <span className="relative flex h-2 w-2 flex-shrink-0">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                            </span>
                                            <span className="text-slate-700 font-medium text-sm">
                                                {purchase.name} paid
                                            </span>
                                            <span className="text-slate-400 text-xs ml-auto">
                                                • {purchase.timeAgo}
                                            </span>
                                        </div>
                                    ))}
                                </>
                            ) : (
                                <div className="text-center py-8 text-slate-400">
                                    <p className="text-sm">Loading activity...</p>
                                </div>
                            )}
                        </div>

                        {/* Scarcity Message */}
                        {remainingSlots <= 10 && remainingSlots > 0 && (
                            <div className="mt-6 pt-6 border-t border-slate-100">
                                <p className="text-center text-red-600 font-bold text-sm">
                                    ⚠️ Only {remainingSlots} slots remaining at this price!
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-black mb-4">
                            Everything You Need to Create Like a Pro
                        </h2>
                        <p className="text-slate-600 text-lg">
                            Unlock all premium features with Canva Pro
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {TECHIFY_CONSTANTS.canvaProFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="bg-techify/10 p-3 rounded-lg flex-shrink-0">
                                        <Gem className="w-6 h-6 text-techify" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-700">{feature}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-4 bg-slate-50">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-black mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-slate-600">
                            Everything you need to know about Techify Canva Pro
                        </p>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        <AccordionItem value="item-1" className="bg-white rounded-xl border border-slate-100 px-6">
                            <AccordionTrigger className="text-left font-bold hover:no-underline">
                                Is this the official Canva Pro subscription?
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600">
                                Yes! We provide genuine Canva Pro access through authorized team plans. You get all official features and updates.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2" className="bg-white rounded-xl border border-slate-100 px-6">
                            <AccordionTrigger className="text-left font-bold hover:no-underline">
                                How fast is the activation?
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600">
                                Activation is instant! Once payment is confirmed, you'll receive your Canva Pro access within minutes via WhatsApp.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3" className="bg-white rounded-xl border border-slate-100 px-6">
                            <AccordionTrigger className="text-left font-bold hover:no-underline">
                                What payment methods do you accept?
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600">
                                We accept UPI payments (Google Pay, PhonePe, Paytm, etc.) for instant processing. All major UPI apps are supported.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4" className="bg-white rounded-xl border border-slate-100 px-6">
                            <AccordionTrigger className="text-left font-bold hover:no-underline">
                                Is my account safe and secure?
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600">
                                Absolutely! We've served 5000+ customers with zero security issues. Your account remains completely safe and private.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-5" className="bg-white rounded-xl border border-slate-100 px-6">
                            <AccordionTrigger className="text-left font-bold hover:no-underline">
                                What if I face any issues?
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600">
                                Our 24/7 WhatsApp support team is always ready to help. Just message us and we'll resolve any issues immediately.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-6" className="bg-white rounded-xl border border-slate-100 px-6">
                            <AccordionTrigger className="text-left font-bold hover:no-underline">
                                Can I use it on multiple devices?
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600">
                                Yes! Use Canva Pro on your phone, tablet, laptop, and desktop. Access your designs from anywhere, anytime.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-20 px-4 bg-gradient-to-br from-purple-600 via-cyan-600 to-purple-600 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-black mb-6">
                        Ready to Unlock Your Creative Potential?
                    </h2>
                    <p className="text-xl md:text-2xl mb-8 text-white/90">
                        Join 10,000+ creators who chose Techify for their Canva Pro
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <Button
                            onClick={initiatePayment}
                            className="bg-white hover:bg-slate-100 text-purple-600 text-xl font-black py-6 px-8 rounded-2xl shadow-2xl h-auto"
                        >
                            <Sparkles className="mr-2" />
                            Get Canva Pro Now — ₹399
                        </Button>
                    </div>

                    <p className="text-white/80 text-sm">
                        Instant activation • 100% secure • 24/7 support
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 text-slate-300 py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div>
                            <div className="text-2xl font-black text-white mb-4">
                                TECH<span className="text-techify">IFY</span>
                            </div>
                            <p className="text-sm text-slate-400">
                                India's most trusted Canva Pro reseller. Empowering creators since 2023.
                            </p>
                        </div>
                        
                        <div>
                            <h3 className="font-bold text-white mb-4">Quick Links</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                        WhatsApp Support
                                    </a>
                                </li>
                                <li>
                                    <a href="#features" className="hover:text-white transition-colors">
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a href="#faq" className="hover:text-white transition-colors">
                                        FAQ
                                    </a>
                                </li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="font-bold text-white mb-4">Contact</h3>
                            <p className="text-sm mb-2">
                                WhatsApp: {TECHIFY_CONSTANTS.phone.display}
                            </p>
                            <p className="text-sm">
                                Available 24/7 for support
                            </p>
                        </div>
                    </div>
                    
                    <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
                        <p>
                            © {currentYear} Techify. All rights reserved. | Built with ❤️ using{' '}
                            <a
                                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-techify hover:underline"
                            >
                                caffeine.ai
                            </a>
                        </p>
                    </div>
                </div>
            </footer>

            {/* UPI Payment Fallback Dialog */}
            <Dialog open={showFallback} onOpenChange={closeFallback}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-black">Complete Your Payment</DialogTitle>
                        <DialogDescription>
                            Pay using any UPI app to unlock Canva Pro instantly
                        </DialogDescription>
                    </DialogHeader>
                    
                    <div className="space-y-4">
                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                            <Label className="text-sm font-semibold text-slate-700 mb-2 block">
                                UPI ID
                            </Label>
                            <div className="flex items-center gap-2">
                                <Input
                                    value={TECHIFY_CONSTANTS.upi.id}
                                    readOnly
                                    className="flex-1 font-mono text-sm"
                                />
                                <Button
                                    onClick={copyUpiId}
                                    variant="outline"
                                    size="icon"
                                    className="flex-shrink-0"
                                >
                                    {copied ? (
                                        <Check className="h-4 w-4 text-green-600" />
                                    ) : (
                                        <Copy className="h-4 w-4" />
                                    )}
                                </Button>
                            </div>
                            {copyError && (
                                <p className="text-xs text-red-600 mt-2">{copyError}</p>
                            )}
                            {copied && (
                                <p className="text-xs text-green-600 mt-2">UPI ID copied!</p>
                            )}
                        </div>

                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                            <Label className="text-sm font-semibold text-slate-700 mb-2 block">
                                Amount to Pay
                            </Label>
                            <p className="text-2xl font-black text-techify">₹{TECHIFY_CONSTANTS.pricing.offer}</p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                            <p className="text-sm font-semibold text-blue-900 mb-2">
                                📱 Payment Instructions:
                            </p>
                            <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
                                <li>Open any UPI app (GPay, PhonePe, Paytm)</li>
                                <li>Enter the UPI ID above</li>
                                <li>Pay ₹{TECHIFY_CONSTANTS.pricing.offer}</li>
                                <li>Send payment screenshot on WhatsApp</li>
                            </ol>
                        </div>

                        <Button
                            onClick={() => window.open(whatsappPaymentLink, '_blank')}
                            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-6 h-auto"
                        >
                            <SiWhatsapp className="mr-2 text-xl" />
                            Send Payment Proof on WhatsApp
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>

            {/* Persistent Bottom CTA Bar */}
            <PersistentBottomCtaBar onBuyClick={initiatePayment} />
        </div>
    );
}
