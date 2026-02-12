import { SiWhatsapp } from 'react-icons/si';
import { CheckCircle2, Sparkles, Gem, Maximize2, Copy, Check, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { TECHIFY_CONSTANTS } from '../constants/techify';
import { generateUpiPaymentLink, generateWhatsAppLink, generateWhatsAppPaymentLink } from '../utils/upi';
import { useUpiPayment } from '../hooks/useUpiPayment';
import { useSimulatedLivePurchases } from '../hooks/useSimulatedLivePurchases';

export default function TechifyLandingPage() {
    const upiPaymentLink = generateUpiPaymentLink();
    const whatsappLink = generateWhatsAppLink();
    const whatsappPaymentLink = generateWhatsAppPaymentLink();
    const currentYear = new Date().getFullYear();
    
    const { initiatePayment, showFallback, closeFallback, copyUpiId, copied, copyError } = useUpiPayment(upiPaymentLink);
    const livePurchases = useSimulatedLivePurchases();

    // Calculate remaining slots (start at 30, decrease with simulated purchases, clamp at 0)
    const remainingSlots = Math.max(0, 30 - livePurchases.totalDeltaSinceMount);

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
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
                    {/* Limited Slots Badge */}
                    <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-bold mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                        </span>
                        Last {remainingSlots} slots available
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-6xl font-black leading-[1.1] mb-6 tracking-tight">
                        Unlock Canva Pro subscription for <br />
                        <span className="gradient-text-techify">
                            {TECHIFY_CONSTANTS.pricing.offer} Only {TECHIFY_CONSTANTS.pricing.period}
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-slate-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                        Stop using watermarked templates. Get full access to 100M+ premium assets, Background
                        Remover, and Magic Resize instantly.
                    </p>

                    {/* Pricing Card */}
                    <div className="bg-white rounded-3xl shadow-2xl shadow-purple-200 border border-slate-100 p-8 max-w-md mx-auto relative overflow-hidden">
                        {/* Best Seller Badge */}
                        <div className="absolute top-0 right-0 bg-yellow-400 text-black text-[10px] font-black px-4 py-1 rounded-bl-lg uppercase">
                            Best Seller
                        </div>

                        {/* Pricing */}
                        <div className="flex flex-col gap-2 mb-6">
                            <span className="text-slate-400 line-through text-lg">
                                Regular Price: {TECHIFY_CONSTANTS.pricing.regular}
                            </span>
                            <div className="flex justify-center items-end gap-1">
                                <span className="text-5xl font-black">{TECHIFY_CONSTANTS.pricing.offer}</span>
                                <span className="text-slate-500 font-bold mb-1">
                                    {TECHIFY_CONSTANTS.pricing.period}
                                </span>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <Button
                            onClick={initiatePayment}
                            className="w-full bg-techify hover:bg-techify/90 hover:scale-105 transform transition text-white text-xl font-black py-6 rounded-2xl shadow-lg shadow-cyan-200 mb-6 h-auto"
                        >
                            GET INSTANT ACCESS 🚀
                        </Button>

                        {/* UPI ID Display */}
                        <div className="mb-6 p-3 bg-slate-50 rounded-lg border border-slate-200">
                            <p className="text-xs text-slate-500 font-semibold mb-1">UPI Payment ID:</p>
                            <p className="text-sm font-mono font-bold text-slate-900 select-all">
                                {TECHIFY_CONSTANTS.upi.id}
                            </p>
                        </div>

                        {/* Features List */}
                        <div className="space-y-3 text-left border-t border-slate-100 pt-6">
                            <div className="flex items-center gap-3 text-sm font-medium">
                                <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" />
                                Instant Delivery on Email
                            </div>
                            <div className="flex items-center gap-3 text-sm font-medium">
                                <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" />
                                Use Your Own Email ID
                            </div>
                            <div className="flex items-center gap-3 text-sm font-medium">
                                <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" />
                                100% Private Designs
                            </div>
                        </div>
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

                        {/* Disclaimer */}
                        <div className="mt-6 pt-6 border-t border-slate-100">
                            <p className="text-xs text-slate-400 text-center leading-relaxed">
                                <strong className="text-slate-500">Note:</strong> Activity indicators are for demonstration purposes. Actual subscription activation occurs after payment confirmation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 max-w-6xl mx-auto">
                <h2 className="text-3xl font-black text-center mb-16 italic">What Techify Unlocks For You:</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Feature 1 */}
                    <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-6">
                            <Sparkles className="text-techify text-xl" />
                        </div>
                        <h3 className="font-bold text-xl mb-3">Magic Remover</h3>
                        <p className="text-slate-500 leading-relaxed">
                            Remove backgrounds from images and videos in 1-click with AI precision.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                            <Gem className="text-purple-600 text-xl" />
                        </div>
                        <h3 className="font-bold text-xl mb-3">100M+ Pro Assets</h3>
                        <p className="text-slate-500 leading-relaxed">
                            Unlimited use of premium photos, videos, elements, and templates.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                            <Maximize2 className="text-blue-600 text-xl" />
                        </div>
                        <h3 className="font-bold text-xl mb-3">Magic Resize</h3>
                        <p className="text-slate-500 leading-relaxed">
                            Convert one design into Instagram Post, Story, and Banner instantly.
                        </p>
                    </div>
                </div>
            </section>

            {/* Comprehensive Canva Pro Features Section */}
            <section className="py-20 px-4 bg-gradient-to-br from-purple-50 via-white to-cyan-50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
                        Complete Canva Pro Features
                    </h2>
                    <p className="text-slate-600 text-center mb-12 text-lg">
                        Everything you get with your Techify subscription
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {TECHIFY_CONSTANTS.canvaProFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-700 font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA in Features Section */}
                    <div className="text-center mt-12">
                        <Button
                            onClick={initiatePayment}
                            className="bg-techify hover:bg-techify/90 text-white text-lg font-black px-12 py-6 rounded-2xl shadow-lg shadow-cyan-200 h-auto"
                        >
                            Get Started Now →
                        </Button>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4 max-w-3xl mx-auto">
                <h2 className="text-3xl font-black text-center mb-12">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="space-y-4">
                    <AccordionItem value="item-1" className="bg-white rounded-xl border border-slate-100 px-6">
                        <AccordionTrigger className="text-left font-bold hover:no-underline">
                            How do I get access after payment?
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-600 leading-relaxed">
                            After completing the payment, send your payment screenshot to our WhatsApp support. Our team will activate your Canva Pro subscription within 5-10 minutes and send the login details to your email.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="bg-white rounded-xl border border-slate-100 px-6">
                        <AccordionTrigger className="text-left font-bold hover:no-underline">
                            Can I use my own email ID?
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-600 leading-relaxed">
                            Yes! You can use your own email ID. Just share it with us on WhatsApp after payment, and we'll activate Canva Pro on your account.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="bg-white rounded-xl border border-slate-100 px-6">
                        <AccordionTrigger className="text-left font-bold hover:no-underline">
                            Is this a genuine Canva Pro subscription?
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-600 leading-relaxed">
                            Yes, you get full access to all Canva Pro features including 100M+ premium templates, Background Remover, Magic Resize, and more. Your designs remain 100% private.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="bg-white rounded-xl border border-slate-100 px-6">
                        <AccordionTrigger className="text-left font-bold hover:no-underline">
                            What if I face any issues?
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-600 leading-relaxed">
                            Our support team is available 24/7 on WhatsApp. Just click the Support button at the top of the page or message us at {TECHIFY_CONSTANTS.phone.display}.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5" className="bg-white rounded-xl border border-slate-100 px-6">
                        <AccordionTrigger className="text-left font-bold hover:no-underline">
                            How long does the subscription last?
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-600 leading-relaxed">
                            You get full Canva Pro access for 1 year (12 months) from the date of activation. That's just ₹33 per month!
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>

            {/* Final CTA Section */}
            <section className="py-20 px-4 bg-gradient-to-br from-cyan-50 via-purple-50 to-pink-50">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-black mb-6">
                        Ready to Unlock Your Creative Potential?
                    </h2>
                    <p className="text-slate-600 text-lg mb-10">
                        Join 10,000+ creators who upgraded their design game with Techify
                    </p>
                    <Button
                        onClick={initiatePayment}
                        className="bg-techify hover:bg-techify/90 text-white text-xl font-black px-16 py-8 rounded-2xl shadow-2xl shadow-cyan-300 h-auto"
                    >
                        Get Canva Pro Now 🎨
                    </Button>
                    <p className="text-slate-400 text-sm mt-6">
                        Instant activation • 24/7 Support • 100% Secure
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 text-slate-300 py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        {/* Brand */}
                        <div>
                            <div className="text-2xl font-black text-white mb-4">
                                TECH<span className="text-techify">IFY</span>
                            </div>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Making premium design tools accessible to everyone. Unlock your creativity with Canva Pro at unbeatable prices.
                            </p>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="font-bold text-white mb-4">Contact Us</h3>
                            <div className="space-y-2 text-sm">
                                <p>WhatsApp: {TECHIFY_CONSTANTS.phone.display}</p>
                                <p>Available 24/7 for support</p>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="font-bold text-white mb-4">Quick Links</h3>
                            <div className="space-y-2 text-sm">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block hover:text-white transition-colors"
                                >
                                    WhatsApp Support
                                </a>
                                <a
                                    href={`tel:${TECHIFY_CONSTANTS.phone.tel}`}
                                    className="block hover:text-white transition-colors"
                                >
                                    Call Us
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
                        <p>
                            © {currentYear} Techify. All rights reserved. Built with ❤️ using{' '}
                            <a
                                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                                    typeof window !== 'undefined' ? window.location.hostname : 'techify-app'
                                )}`}
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

            {/* Mobile Sticky CTA */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 md:hidden z-40 shadow-lg">
                <Button
                    onClick={initiatePayment}
                    className="w-full bg-techify hover:bg-techify/90 text-white text-lg font-black py-6 rounded-2xl h-auto"
                >
                    Get Canva Pro - ₹399/Year 🚀
                </Button>
            </div>

            {/* Payment Fallback Dialog */}
            <Dialog open={showFallback} onOpenChange={closeFallback}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-black">Complete Your Payment</DialogTitle>
                        <DialogDescription className="text-base">
                            Follow these steps to complete your Canva Pro purchase
                        </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-6 py-4">
                        {/* Step 1: Copy UPI ID */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-techify text-white flex items-center justify-center font-bold text-sm">
                                    1
                                </div>
                                <h3 className="font-bold text-lg">Copy UPI ID</h3>
                            </div>
                            <div className="ml-10 space-y-2">
                                <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border border-slate-200">
                                    <code className="flex-1 text-sm font-mono font-bold">
                                        {TECHIFY_CONSTANTS.upi.id}
                                    </code>
                                    <Button
                                        onClick={copyUpiId}
                                        variant="outline"
                                        size="sm"
                                        className="flex-shrink-0"
                                    >
                                        {copied ? (
                                            <>
                                                <Check className="w-4 h-4 mr-1" />
                                                Copied
                                            </>
                                        ) : (
                                            <>
                                                <Copy className="w-4 h-4 mr-1" />
                                                Copy
                                            </>
                                        )}
                                    </Button>
                                </div>
                                {copyError && (
                                    <p className="text-xs text-red-600">{copyError}</p>
                                )}
                            </div>
                        </div>

                        {/* Step 2: Pay via UPI */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-techify text-white flex items-center justify-center font-bold text-sm">
                                    2
                                </div>
                                <h3 className="font-bold text-lg">Pay ₹399 via Any UPI App</h3>
                            </div>
                            <div className="ml-10">
                                <p className="text-sm text-slate-600">
                                    Open Google Pay, PhonePe, Paytm, or any UPI app and send{' '}
                                    <strong className="text-slate-900">₹399</strong> to the UPI ID above.
                                </p>
                            </div>
                        </div>

                        {/* Step 3: Send Screenshot */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-techify text-white flex items-center justify-center font-bold text-sm">
                                    3
                                </div>
                                <h3 className="font-bold text-lg">Send Payment Screenshot</h3>
                            </div>
                            <div className="ml-10">
                                <a
                                    href={whatsappPaymentLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold">
                                        <SiWhatsapp className="mr-2 text-lg" />
                                        Send Screenshot on WhatsApp
                                    </Button>
                                </a>
                                <p className="text-xs text-slate-500 mt-2">
                                    We'll activate your Canva Pro within 5-10 minutes
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="text-sm text-blue-900 font-medium">
                            💡 <strong>Quick Tip:</strong> After payment, click the button above to automatically open WhatsApp with your payment confirmation message.
                        </p>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
