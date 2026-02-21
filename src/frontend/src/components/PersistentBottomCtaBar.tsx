import { Button } from '@/components/ui/button';
import { TECHIFY_CONSTANTS } from '../constants/techify';
import { useEffect } from 'react';

export function PersistentBottomCtaBar() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.setAttribute('data-payment_button_id', TECHIFY_CONSTANTS.razorpay.paymentButtonId);
    script.async = true;
    
    const razorpayContainer = document.getElementById('razorpay-button-container-bottom');
    if (razorpayContainer) {
      razorpayContainer.appendChild(script);
    }

    return () => {
      if (razorpayContainer && script.parentNode === razorpayContainer) {
        razorpayContainer.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200 shadow-2xl pb-safe">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <div className="flex-1 min-w-0">
          <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide">
            Limited Offer
          </p>
          <p className="text-xl md:text-2xl font-black text-slate-900 truncate">
            Canva Pro {TECHIFY_CONSTANTS.pricing.offer}
            <span className="text-sm text-slate-500 font-normal ml-2">/Year</span>
          </p>
        </div>
        <div id="razorpay-button-container-bottom" className="flex-shrink-0">
          <form></form>
        </div>
      </div>
    </div>
  );
}
