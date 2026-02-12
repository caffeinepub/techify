# Specification

## Summary
**Goal:** Sync the hero scarcity badge with the client-side simulated purchase activity, show named “paid” events in Recent Activity, and prefill a WhatsApp message when the user sends a screenshot.

**Planned changes:**
- Update the hero scarcity badge to start at “Last 30 slots available” and decrease as simulated purchase events accumulate (remaining = 30 - simulated count, clamped at 0).
- Update the simulated “Recent Activity” feed entries to use realistic buyer names and the text format “{Name} paid” (replacing any “Someone purchased” messaging), fully client-side.
- Change the “Send screenshot” action to open WhatsApp chat to +919622655116 using a wa.me link with a prefilled English message indicating payment for Canva Pro (e.g., “I have paid for Canva Pro”), without breaking the existing general WhatsApp support link.

**User-visible outcome:** Users see a scarcity badge that counts down from 30 in sync with the on-page simulated purchases, a Recent Activity feed that shows named “paid” entries, and clicking “Send screenshot” opens WhatsApp to the support number with a prefilled payment-confirmation message.
