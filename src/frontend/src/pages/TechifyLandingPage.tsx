import { SiWhatsapp } from 'react-icons/si';
import { CheckCircle2, Sparkles, Gem, Maximize2, TrendingUp, Star, Shield, Zap, Clock, Users, Award, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TECHIFY_CONSTANTS } from '../constants/techify';
import { generateWhatsAppLink, generateWhatsAppFormLink } from '../utils/upi';
import { useSimulatedLivePurchases } from '../hooks/useSimulatedLivePurchases';
import { PersistentBottomCtaBar } from '../components/PersistentBottomCtaBar';
import { useState, useEffect } from 'react';

interface TechifyLandingPageProps {
  onNavigatePaymentSuccess: () => void;
}

export default function TechifyLandingPage({ onNavigatePaymentSuccess }: TechifyLandingPageProps) {
    const whatsappLink = generateWhatsAppLink();
    const currentYear = new Date().getFullYear();
    
    const livePurchases = useSimulatedLivePurchases();

    // Form state
    const [formData, setFormData] = useState({ name: '', contact: '' });

    // Calculate remaining slots (start at 30, decrease with simulated purchases, clamp at 0)
    const remainingSlots = Math.max(0, 30 - livePurchases.totalDeltaSinceMount);

    // Load Razorpay script
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
        script.setAttribute('data-payment_button_id', TECHIFY_CONSTANTS.razorpay.paymentButtonId);
        script.async = true;
        
        const razorpayContainer = document.getElementById('razorpay-button-container');
        if (razorpayContainer) {
            razorpayContainer.appendChild(script);
        }

        return () => {
            if (razorpayContainer && script.parentNode === razorpayContainer) {
                razorpayContainer.removeChild(script);
            }
        };
    }, []);

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Only redirect if form is valid
        if (formData.name && formData.contact) {
            const whatsappFormLink = generateWhatsAppFormLink(formData.name, formData.contact);
            window.open(whatsappFormLink, '_blank');
            // Navigate to payment success page ONLY after successful form submission
            onNavigatePaymentSuccess();
        }
    };

    // Testimonials data with avatars
    const testimonials = [
        {
            name: "Priya Sharma",
            role: "Content Creator",
            quote: "Super fast activation, best pricing in India. The support team is amazing!",
            avatar: "/assets/generated/review-avatar-1.dim_128x128.png",
            rating: 5
        },
        {
            name: "Rahul Verma",
            role: "Digital Marketer",
            quote: "Techify made my work easier instantly. All premium features at unbeatable price.",
            avatar: "/assets/generated/review-avatar-2.dim_128x128.png",
            rating: 5
        },
        {
            name: "Anjali Patel",
            role: "YouTuber",
            quote: "My YouTube thumbnails look 10x better now. Worth every rupee!",
            avatar: "/assets/generated/review-avatar-3.dim_128x128.png",
            rating: 5
        }
    ];

    // Feature list for display
    const displayFeatures = [
        {
            icon: Sparkles,
            title: "Magic AI Tools",
            description: "Background Remover, Magic Resize, and Magic Eraser powered by AI",
            color: "text-purple-600"
        },
        {
            icon: Palette,
            title: "100M+ Premium Assets",
            description: "Access unlimited templates, photos, videos, and graphics",
            color: "text-pink-600"
        },
        {
            icon: Award,
            title: "Brand Kit",
            description: "Save your brand colors, logos, and fonts in one place",
            color: "text-blue-600"
        },
        {
            icon: Users,
            title: "Team Collaboration",
            description: "Work together with up to 5 team members seamlessly",
            color: "text-green-600"
        },
        {
            icon: Gem,
            title: "Content Planner",
            description: "Schedule and publish social media posts directly",
            color: "text-orange-600"
        },
        {
            icon: Maximize2,
            title: "100GB Cloud Storage",
            description: "Store all your designs safely in the cloud",
            color: "text-cyan-600"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-900 pb-bottom-bar-safe">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
                    <div className="text-2xl md:text-3xl font-black tracking-tighter">
                        TECH<span className="text-techify">IFY</span>
                    </div>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105 shadow-md hover:shadow-lg"
                    >
                        <SiWhatsapp className="text-lg" />
                        <span className="hidden sm:inline">Support</span>
                    </a>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-16 pb-24 px-4 sm:px-6">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Main Headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6 tracking-tight">
                        India's Best Canva Pro Reseller
                    </h1>
                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-techify mb-6">
                        Get Canva Pro Premium for Just ₹299
                    </p>

                    {/* Subheadline with benefits */}
                    <p className="text-lg md:text-xl text-slate-600 font-semibold mb-10">
                        Instant Activation • Premium Tools • Safe & Trusted
                    </p>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl shadow-md border border-slate-100">
                            <Shield className="text-green-500 w-6 h-6" />
                            <span className="font-bold text-sm">Secure Delivery</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl shadow-md border border-slate-100">
                            <Clock className="text-blue-500 w-6 h-6" />
                            <span className="font-bold text-sm">24/7 Support</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl shadow-md border border-slate-100">
                            <Zap className="text-yellow-500 w-6 h-6" />
                            <span className="font-bold text-sm">Instant Activation</span>
                        </div>
                    </div>

                    {/* Benefit Bullets Section */}
                    <div className="bg-gradient-to-br from-purple-50 via-white to-cyan-50 rounded-3xl p-8 md:p-12 mb-10 shadow-xl border border-slate-100">
                        <h2 className="text-3xl md:text-4xl font-black mb-8">What You Get:</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                            <div className="flex items-start gap-4">
                                <CheckCircle2 className="text-green-500 w-7 h-7 flex-shrink-0 mt-1" />
                                <div>
                                    <p className="font-bold text-slate-900 text-lg">1-Year Canva Pro for just ₹299</p>
                                    <p className="text-sm text-slate-600 mt-1">Unbeatable value for money</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <CheckCircle2 className="text-green-500 w-7 h-7 flex-shrink-0 mt-1" />
                                <div>
                                    <p className="font-bold text-slate-900 text-lg">Instant account activation</p>
                                    <p className="text-sm text-slate-600 mt-1">Get started in minutes</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <CheckCircle2 className="text-green-500 w-7 h-7 flex-shrink-0 mt-1" />
                                <div>
                                    <p className="font-bold text-slate-900 text-lg">100M+ premium assets unlocked</p>
                                    <p className="text-sm text-slate-600 mt-1">Photos, videos, templates & more</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <CheckCircle2 className="text-green-500 w-7 h-7 flex-shrink-0 mt-1" />
                                <div>
                                    <p className="font-bold text-slate-900 text-lg">Magic Resize, Background Remover, Brand Kit</p>
                                    <p className="text-sm text-slate-600 mt-1">All Pro features included</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <CheckCircle2 className="text-green-500 w-7 h-7 flex-shrink-0 mt-1" />
                                <div>
                                    <p className="font-bold text-slate-900 text-lg">Safe, secure and trusted reseller</p>
                                    <p className="text-sm text-slate-600 mt-1">5000+ happy customers</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <CheckCircle2 className="text-green-500 w-7 h-7 flex-shrink-0 mt-1" />
                                <div>
                                    <p className="font-bold text-slate-900 text-lg">Works on mobile and laptop</p>
                                    <p className="text-sm text-slate-600 mt-1">Design anywhere, anytime</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Urgency Text */}
                    <p className="text-red-600 font-bold text-xl mb-8 animate-pulse">
                        ⚡ Limited Offer — Price May Increase Soon
                    </p>

                    {/* Razorpay Payment Button */}
                    <div className="mb-12">
                        <div id="razorpay-button-container" className="flex justify-center">
                            <form></form>
                        </div>
                    </div>

                    {/* Simple Form */}
                    <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-8 md:p-10 max-w-md mx-auto">
                        <h3 className="text-2xl md:text-3xl font-black mb-4">Quick Purchase Form</h3>
                        <p className="text-slate-600 mb-6">Fill in your details to get started instantly</p>
                        <form onSubmit={handleFormSubmit} className="space-y-5">
                            <div>
                                <Label htmlFor="name" className="text-left block mb-2 font-semibold text-base">Your Name</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    className="w-full h-12 text-base"
                                />
                            </div>
                            <div>
                                <Label htmlFor="contact" className="text-left block mb-2 font-semibold text-base">WhatsApp / Email</Label>
                                <Input
                                    id="contact"
                                    type="text"
                                    placeholder="Enter WhatsApp number or email"
                                    value={formData.contact}
                                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                                    required
                                    className="w-full h-12 text-base"
                                />
                            </div>
                            <Button
                                type="submit"
                                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-6 rounded-xl h-auto text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
                            >
                                <SiWhatsapp className="mr-2 text-2xl" />
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
            <div className="bg-white py-12 border-y border-slate-200 shadow-sm">
                <p className="text-center text-slate-400 text-sm font-bold uppercase tracking-widest mb-6">
                    Trusted By 10,000+ Creators from
                </p>
                <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale font-bold text-xl">
                    <span>Instagram</span>
                    <span>YouTube</span>
                    <span>LinkedIn</span>
                    <span>Fiverr</span>
                </div>
            </div>

            {/* Features Section */}
            <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-white via-slate-50 to-purple-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black mb-4">
                            Unlock Premium Features
                        </h2>
                        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
                            Everything you need to create stunning designs and grow your brand
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {displayFeatures.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-2xl transition-all hover:-translate-y-1"
                                >
                                    <div className={`${feature.color} mb-4`}>
                                        <Icon className="w-12 h-12" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Testimonials Section - Now Below Features */}
            <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
                            <Star className="w-4 h-4 fill-yellow-500" />
                            CUSTOMER REVIEWS
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black mb-4">
                            What Our Customers Say
                        </h2>
                        <div className="flex items-center justify-center gap-2 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <p className="text-xl font-bold text-slate-900">
                            Rated 4.9/5 by 5000+ Creators
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-2xl transition-all"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <img 
                                        src={testimonial.avatar} 
                                        alt={testimonial.name}
                                        className="w-16 h-16 rounded-full object-cover border-2 border-slate-200"
                                    />
                                    <div className="text-left">
                                        <p className="font-bold text-slate-900 text-lg">{testimonial.name}</p>
                                        <p className="text-sm text-slate-500">{testimonial.role}</p>
                                    </div>
                                </div>
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-slate-700 leading-relaxed italic">
                                    "{testimonial.quote}"
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Live Purchases Section */}
            <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-green-50 via-white to-emerald-50">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            LIVE ACTIVITY
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black mb-4 flex items-center justify-center gap-4">
                            <TrendingUp className="text-green-600 w-10 h-10" />
                            Live Purchases
                        </h2>
                        <p className="text-lg text-slate-600">
                            Join thousands of satisfied customers
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 md:p-12">
                        {/* Total Purchases Counter */}
                        <div className="text-center mb-12 pb-8 border-b border-slate-200">
                            <div className="text-6xl md:text-7xl font-black text-techify mb-3">
                                {livePurchases.total}
                            </div>
                            <p className="text-xl text-slate-600 font-semibold">
                                Total Purchases Today
                            </p>
                        </div>

                        {/* Recent Activity List */}
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Recent Activity</h3>
                            {livePurchases.recent.map((purchase) => (
                                <div
                                    key={purchase.id}
                                    className="flex items-center justify-between bg-gradient-to-r from-green-50 to-transparent p-5 rounded-xl border border-green-100 hover:shadow-md transition-shadow"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                            <CheckCircle2 className="text-green-600 w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 text-lg">
                                                {purchase.name}
                                            </p>
                                            <p className="text-sm text-slate-500">
                                                Purchased Canva Pro
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-semibold text-green-600">
                                            {purchase.timeAgo}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Scarcity Message */}
                        {remainingSlots <= 10 && (
                            <div className="mt-8 bg-red-50 border border-red-200 rounded-xl p-6 text-center">
                                <p className="text-red-700 font-bold text-lg">
                                    ⚠️ Only {remainingSlots} slots remaining at this price!
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4 sm:px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-lg text-slate-600">
                            Everything you need to know about Canva Pro
                        </p>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        <AccordionItem value="item-1" className="bg-slate-50 rounded-xl px-6 border border-slate-200">
                            <AccordionTrigger className="text-left font-bold text-lg hover:no-underline py-6">
                                How do I get Canva Pro after payment?
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600 pb-6 leading-relaxed">
                                After payment, our team will contact you on WhatsApp within 5-10 minutes to activate your Canva Pro account. You'll receive instant access to all premium features.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2" className="bg-slate-50 rounded-xl px-6 border border-slate-200">
                            <AccordionTrigger className="text-left font-bold text-lg hover:no-underline py-6">
                                Is this safe and legal?
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600 pb-6 leading-relaxed">
                                Yes, absolutely! We are an authorized Canva Pro reseller. Your account is 100% safe and you get full access to all Canva Pro features for 1 year.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3" className="bg-slate-50 rounded-xl px-6 border border-slate-200">
                            <AccordionTrigger className="text-left font-bold text-lg hover:no-underline py-6">
                                What if I face any issues?
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600 pb-6 leading-relaxed">
                                We provide 24/7 customer support via WhatsApp. If you face any issues with your account, our team will resolve it immediately. We're here to help!
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4" className="bg-slate-50 rounded-xl px-6 border border-slate-200">
                            <AccordionTrigger className="text-left font-bold text-lg hover:no-underline py-6">
                                Can I use it on multiple devices?
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600 pb-6 leading-relaxed">
                                Yes! You can use Canva Pro on your laptop, mobile, tablet, and any other device. Just log in with your account and start designing.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-5" className="bg-slate-50 rounded-xl px-6 border border-slate-200">
                            <AccordionTrigger className="text-left font-bold text-lg hover:no-underline py-6">
                                What happens after 1 year?
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600 pb-6 leading-relaxed">
                                After 1 year, you can renew your subscription with us at the same affordable price. We'll remind you before your subscription expires.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">
                        Ready to Unlock Canva Pro?
                    </h2>
                    <p className="text-xl md:text-2xl mb-10 opacity-90">
                        Join 10,000+ creators who trust Techify for their Canva Pro needs
                    </p>
                    
                    {/* Razorpay Payment Button */}
                    <div className="mb-8">
                        <div id="razorpay-button-container-footer" className="flex justify-center">
                            <form></form>
                        </div>
                    </div>

                    <p className="text-lg opacity-80">
                        Questions? Contact us on WhatsApp anytime!
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 text-slate-300 py-12 px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                        <div>
                            <div className="text-3xl font-black tracking-tighter mb-4 text-white">
                                TECH<span className="text-techify">IFY</span>
                            </div>
                            <p className="text-sm leading-relaxed">
                                India's most trusted Canva Pro reseller. Get premium features at unbeatable prices with instant activation.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                                <li><a href="#testimonials" className="hover:text-white transition-colors">Reviews</a></li>
                                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                                <li><a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Support</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
                            <div className="space-y-3 text-sm">
                                <p>WhatsApp: {TECHIFY_CONSTANTS.phone.display}</p>
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-bold transition-colors"
                                >
                                    <SiWhatsapp className="text-lg" />
                                    Chat Now
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-slate-700 pt-8 text-center text-sm">
                        <p>
                            © {currentYear} Techify. All rights reserved. Built with ❤️ using{' '}
                            <a
                                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-techify hover:underline font-semibold"
                            >
                                caffeine.ai
                            </a>
                        </p>
                    </div>
                </div>
            </footer>

            {/* Persistent Bottom CTA Bar */}
            <PersistentBottomCtaBar />
        </div>
    );
}
