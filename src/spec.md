# Specification

## Summary
**Goal:** Go-live a single-page Techify landing page in React (TypeScript) that matches the provided HTML/Tailwind design, with updated phone/WhatsApp contact details and working UPI-based CTA links.

**Planned changes:**
- Recreate the provided single-page landing page as the app’s main React page using Tailwind (navbar, hero/pricing + CTA, trusted-by band, features grid, FAQ, mobile sticky CTA, footer), ensuring responsive layout.
- Update all contact details to use phone number **9622655116**, including a WhatsApp support link (wa.me) and a visible clickable **tel:** link on the page.
- Display UPI ID **9622655116@ybl** on the page and replace placeholder CTA links with a UPI deep link that includes `pa=9622655116@ybl` for both desktop and mobile CTAs.
- Ensure production readiness: successful production build, landing page as default route, and brief English documentation note describing how to deploy/go-live on the Internet Computer using the standard workflow.
- Apply a consistent modern theme (typography, spacing, button styles) while keeping all user-facing text in English.

**User-visible outcome:** Visitors land on a polished, responsive Techify upgrade landing page with correct phone/WhatsApp contact links and CTAs that open a UPI payment action, plus visible/copyable UPI details.
