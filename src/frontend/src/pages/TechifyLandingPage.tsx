import { SiWhatsapp } from 'react-icons/si';
import { CheckCircle2, Sparkles, Gem, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { TECHIFY_CONSTANTS } from '../constants/techify';
import { generateUpiPaymentLink, generateWhatsAppLink } from '../utils/upi';

export default function TechifyLandingPage() {
    const upiPaymentLink = generateUpiPaymentLink();
    const whatsappLink = generateWhatsAppLink();
    const currentYear = new Date().getFullYear();

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
                        LIMITED SLOTS FOR FEB 2026
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-6xl font-black leading-[1.1] mb-6 tracking-tight">
                        Unlock Canva Pro for <br />
                        <span className="bg-clip-text text-transparent bg-techify">
                            Just {TECHIFY_CONSTANTS.pricing.offer}{TECHIFY_CONSTANTS.pricing.period}
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
                            asChild
                            className="w-full bg-techify hover:bg-techify/90 hover:scale-105 transform transition text-white text-xl font-black py-6 rounded-2xl shadow-lg shadow-cyan-200 mb-6 h-auto"
                        >
                            <a href={upiPaymentLink}>GET INSTANT ACCESS 🚀</a>
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

            {/* FAQ Section */}
            <section className="py-20 bg-slate-900 text-white px-4">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-black mb-12 text-center text-techify">Common Questions</h2>
                    <Accordion type="single" collapsible className="space-y-6">
                        <AccordionItem value="item-1" className="border-b border-slate-700">
                            <AccordionTrigger className="text-xl font-bold uppercase tracking-tight text-left hover:no-underline">
                                Will my designs be private?
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-400 text-base leading-relaxed">
                                Yes! Even though you are part of a team, your designs are private. No one (not even
                                Techify admins) can see your work.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2" className="border-b border-slate-700">
                            <AccordionTrigger className="text-xl font-bold uppercase tracking-tight text-left hover:no-underline">
                                Do I need to share my password?
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-400 text-base leading-relaxed">
                                Never. We only need your Canva email address to send the official invite. No passwords
                                required.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3" className="border-b border-slate-700">
                            <AccordionTrigger className="text-xl font-bold uppercase tracking-tight text-left hover:no-underline">
                                What if the subscription stops?
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-400 text-base leading-relaxed">
                                We provide a 365-day replacement warranty. If you face any issues, our WhatsApp support
                                will fix it in minutes.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            {/* Mobile Sticky CTA */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur shadow-2xl z-50">
                <Button asChild className="w-full bg-techify hover:bg-techify/90 text-white font-black py-6 rounded-xl h-auto">
                    <a href={upiPaymentLink}>CLAIM PRO FOR {TECHIFY_CONSTANTS.pricing.offer} NOW</a>
                </Button>
            </div>

            {/* Footer */}
            <footer className="py-20 text-center text-slate-400 text-xs px-4">
                <p className="mb-4 font-bold">TECHIFY DIGITAL SERVICES © {currentYear}</p>
                <p className="max-w-md mx-auto mb-6">
                    Disclaimer: Techify provides access to shared team plans for educational and individual use. We
                    are not officially affiliated with Canva Inc.
                </p>
                
                {/* Contact Information */}
                <div className="mb-6 space-y-2">
                    <p className="font-semibold text-slate-500">Contact Us:</p>
                    <a
                        href={TECHIFY_CONSTANTS.phone.tel}
                        className="text-techify hover:underline font-bold text-sm"
                    >
                        📞 {TECHIFY_CONSTANTS.phone.display}
                    </a>
                    <span className="mx-2 text-slate-300">|</span>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-500 hover:underline font-bold text-sm"
                    >
                        WhatsApp Support
                    </a>
                </div>

                {/* Caffeine Attribution */}
                <p className="text-slate-500">
                    Built with ❤️ using{' '}
                    <a
                        href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                            typeof window !== 'undefined' ? window.location.hostname : 'techify-app'
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-techify hover:underline font-semibold"
                    >
                        caffeine.ai
                    </a>
                </p>
            </footer>
        </div>
    );
}
