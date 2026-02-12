import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

interface PersistentBottomCtaBarProps {
  onBuyClick: () => void;
}

export function PersistentBottomCtaBar({ onBuyClick }: PersistentBottomCtaBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl pb-safe">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex-1 min-w-0">
          <p className="text-sm md:text-base font-black text-slate-900 truncate">
            Canva Pro — ₹399/Year
          </p>
          <p className="text-xs text-slate-600 hidden sm:block">
            Instant activation • Premium tools
          </p>
        </div>
        <Button
          onClick={onBuyClick}
          className="bg-techify hover:bg-techify/90 text-white font-black px-6 py-5 rounded-xl shadow-lg shadow-cyan-200 h-auto flex-shrink-0"
        >
          <Sparkles className="w-4 h-4 mr-2" />
          Buy Now
        </Button>
      </div>
    </div>
  );
}
