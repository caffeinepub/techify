import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TechifyLandingPage from './pages/TechifyLandingPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TechifyLandingPage />
    </QueryClientProvider>
  );
}

export default App;
