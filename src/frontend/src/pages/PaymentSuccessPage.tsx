import { useEffect } from 'react';
import { CheckCircle2, Home, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackPurchase } from '../utils/metaPixel';
import { generateWhatsAppLink } from '../utils/upi';
import { shouldFirePurchase, markPurchaseFired } from '../utils/purchaseDedup';

interface PaymentSuccessPageProps {
  onNavigateHome: () => void;
}

export default function PaymentSuccessPage({ onNavigateHome }: PaymentSuccessPageProps) {
  const whatsappLink = generateWhatsAppLink();

  useEffect(() => {
    // Only fire Purchase event if:
    // 1. URL contains /payment-success
    // 2. Purchase hasn't been fired before (dedup check)
    if (window.location.pathname.includes('/payment-success') && shouldFirePurchase()) {
      trackPurchase(399, 'INR');
      markPurchaseFired();
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        {/* Success Card */}
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 md:p-12 text-center">
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Order Confirmed! 🎉
          </h1>

          {/* Subheading */}
          <p className="text-lg text-slate-600 mb-8">
            Thank you for your purchase! Your Canva Pro account will be activated shortly.
          </p>

          {/* Order Details */}
          <div className="bg-gradient-to-br from-purple-50 to-cyan-50 rounded-2xl p-6 mb-8 text-left">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Order Summary</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-600 font-semibold">Product:</span>
                <span className="text-slate-900 font-bold">Canva Pro (1 Year)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600 font-semibold">Amount Paid:</span>
                <span className="text-green-600 font-bold text-xl">₹399</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600 font-semibold">Status:</span>
                <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Processing
                </span>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-2xl p-6 mb-8 text-left">
            <h3 className="text-lg font-bold text-slate-900 mb-3">What Happens Next?</h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Our team will verify your payment within 5-10 minutes</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>You'll receive your Canva Pro access details via WhatsApp</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Start creating amazing designs immediately!</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={onNavigateHome}
              variant="outline"
              className="flex items-center gap-2 text-lg font-bold py-6 px-8 rounded-xl h-auto"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Button>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center gap-2 text-lg font-bold py-6 px-8 rounded-xl h-auto">
                <MessageCircle className="w-5 h-5" />
                Contact Support
              </Button>
            </a>
          </div>

          {/* Footer Note */}
          <p className="text-sm text-slate-500 mt-8">
            Need help? Our support team is available 24/7 on WhatsApp
          </p>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-8">
          <p className="text-slate-600 font-semibold">
            🔒 Your payment is secure and your data is protected
          </p>
        </div>
      </div>
    </div>
  );
}
