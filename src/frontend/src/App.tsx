import { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TechifyLandingPage from './pages/TechifyLandingPage';
import PaymentSuccessPage from './pages/PaymentSuccessPage';
import { useMetaPixelSpaPageView } from './hooks/useMetaPixelSpaPageView';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function AppRouter() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Track SPA PageView events (skips initial mount)
  useMetaPixelSpaPageView(currentPath);

  useEffect(() => {
    // Listen for browser back/forward navigation
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  const navigateHome = () => navigateTo('/');
  const navigatePaymentSuccess = () => navigateTo('/payment-success');

  // Route rendering - /payment-success is the canonical success URL
  if (currentPath === '/payment-success') {
    return <PaymentSuccessPage onNavigateHome={navigateHome} />;
  }

  // Redirect /thank-you to /payment-success for canonical URL
  if (currentPath === '/thank-you') {
    navigatePaymentSuccess();
    return null;
  }

  return <TechifyLandingPage onNavigatePaymentSuccess={navigatePaymentSuccess} />;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  );
}

export default App;
