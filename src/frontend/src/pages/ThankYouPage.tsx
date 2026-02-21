import { useEffect } from 'react';

interface ThankYouPageProps {
  onNavigateHome: () => void;
}

export default function ThankYouPage({ onNavigateHome }: ThankYouPageProps) {
  useEffect(() => {
    // Redirect to /payment-success immediately
    // This ensures /thank-you is not the canonical success URL
    window.history.replaceState({}, '', '/payment-success');
    onNavigateHome(); // This will trigger the router to re-render with /payment-success
  }, [onNavigateHome]);

  // Return null since we're redirecting immediately
  return null;
}
