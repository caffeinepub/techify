/**
 * Meta Pixel tracking utilities with safe guards to prevent crashes
 * when fbq is unavailable (e.g., ad blockers, privacy extensions).
 */

declare global {
  interface Window {
    fbq?: (
      action: string,
      event: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

/**
 * Safely track a PageView event for SPA navigation.
 * Does not fire on initial page load (handled by base pixel code).
 */
export function trackPageView(): void {
  if (typeof window !== 'undefined' && window.fbq) {
    try {
      window.fbq('track', 'PageView');
    } catch (error) {
      // Silently fail - don't break the app or log noise
    }
  }
}

/**
 * Track a Purchase event with value and currency.
 * @param value - Purchase value (number)
 * @param currency - Currency code (e.g., "INR")
 */
export function trackPurchase(value: number, currency: string): void {
  if (typeof window !== 'undefined' && window.fbq) {
    try {
      window.fbq('track', 'Purchase', { value, currency });
    } catch (error) {
      // Silently fail - don't break the app or log noise
    }
  }
}
