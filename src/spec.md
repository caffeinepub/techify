# Specification

## Summary
**Goal:** Add a persistent bottom “buy” CTA on the landing page that stays visible while scrolling and triggers the existing UPI payment flow.

**Planned changes:**
- Add a sticky/fixed bottom CTA bar on `frontend/src/pages/TechifyLandingPage.tsx` that remains visible at the bottom of the viewport during scroll.
- Wire the bottom CTA to call the existing `initiatePayment` function from `useUpiPayment(...)`, matching the current hero CTA behavior (including deep-link + existing fallback dialog).
- Add appropriate bottom spacing to the landing page content so the persistent bar does not obscure the last sections/footer on mobile or desktop.
- Ensure all user-facing text in the bottom bar is in English.

**User-visible outcome:** Users will always see a bottom “buy” button while scrolling the landing page, and tapping it will start the same UPI payment flow as the existing hero CTAs without blocking access to the page’s bottom content.
