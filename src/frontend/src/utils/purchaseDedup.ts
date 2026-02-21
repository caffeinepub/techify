/**
 * Purchase event deduplication utility.
 * Prevents Meta Pixel Purchase event from firing multiple times
 * across page refreshes or revisits.
 */

const PURCHASE_FIRED_KEY = 'techify_purchase_fired';

/**
 * Check if Purchase event should be fired.
 * Returns true if Purchase has NOT been fired before.
 */
export function shouldFirePurchase(): boolean {
  if (typeof window === 'undefined' || !window.localStorage) {
    return true; // Fail-safe: allow firing if localStorage unavailable
  }

  try {
    const fired = window.localStorage.getItem(PURCHASE_FIRED_KEY);
    return fired !== 'true';
  } catch (error) {
    // If localStorage access fails, allow firing
    return true;
  }
}

/**
 * Mark that Purchase event has been fired.
 * Persists across page refreshes and revisits.
 */
export function markPurchaseFired(): void {
  if (typeof window === 'undefined' || !window.localStorage) {
    return;
  }

  try {
    window.localStorage.setItem(PURCHASE_FIRED_KEY, 'true');
  } catch (error) {
    // Silently fail if localStorage is unavailable
  }
}

/**
 * Reset the Purchase fired flag.
 * Only used for testing/debugging - not exposed to users.
 */
export function resetPurchaseFlag(): void {
  if (typeof window === 'undefined' || !window.localStorage) {
    return;
  }

  try {
    window.localStorage.removeItem(PURCHASE_FIRED_KEY);
  } catch (error) {
    // Silently fail
  }
}
