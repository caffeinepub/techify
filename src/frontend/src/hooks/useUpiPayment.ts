import { useState, useCallback } from 'react';
import { TECHIFY_CONSTANTS } from '../constants/techify';
import { copyToClipboard } from '../utils/clipboard';

interface UseUpiPaymentReturn {
  initiatePayment: () => void;
  showFallback: boolean;
  closeFallback: () => void;
  copyUpiId: () => Promise<void>;
  copied: boolean;
  copyError: string | null;
}

/**
 * Hook to handle UPI payment flow with fallback UI for desktop/non-UPI environments.
 * Attempts to open UPI deep link first, then shows fallback with robust copy functionality.
 */
export function useUpiPayment(upiLink: string): UseUpiPaymentReturn {
  const [showFallback, setShowFallback] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState<string | null>(null);

  const initiatePayment = useCallback(() => {
    // Detect if we're on mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    if (isMobile) {
      // Try to open UPI deep link
      window.location.href = upiLink;
      
      // Set a timeout to show fallback if the app doesn't open
      setTimeout(() => {
        // If the page is still visible after 2 seconds, show fallback
        if (!document.hidden) {
          setShowFallback(true);
        }
      }, 2000);
    } else {
      // Desktop: show fallback immediately
      setShowFallback(true);
    }
  }, [upiLink]);

  const closeFallback = useCallback(() => {
    setShowFallback(false);
    setCopied(false);
    setCopyError(null);
  }, []);

  const copyUpiId = useCallback(async () => {
    setCopyError(null);
    
    const result = await copyToClipboard(TECHIFY_CONSTANTS.upi.id);
    
    if (result.success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } else {
      setCopyError(result.message || 'Failed to copy');
    }
  }, []);

  return {
    initiatePayment,
    showFallback,
    closeFallback,
    copyUpiId,
    copied,
    copyError,
  };
}
