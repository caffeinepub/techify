import { useEffect, useRef } from 'react';
import { trackPageView } from '../utils/metaPixel';

/**
 * Hook to track PageView events on SPA route changes.
 * Skips the initial mount to avoid double-firing with the base pixel code.
 */
export function useMetaPixelSpaPageView(pathname: string): void {
  const isInitialMount = useRef(true);

  useEffect(() => {
    // Skip tracking on initial mount (base pixel handles it)
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    // Track PageView for subsequent navigation
    trackPageView();
  }, [pathname]);
}
