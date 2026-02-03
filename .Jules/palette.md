## 2026-02-03 - Accessible Modal and Button Pattern
**Learning:** For static sites using div-based "cards" as triggers, accessibility must be manually injected via role='button', tabindex='0', and keyboard listeners. Modals require a combination of ARIA attributes (dialog, aria-modal) and active focus management (focusing the close button on open and restoring focus on close) to be truly accessible.
**Action:** Always implement the "Focus Trap and Restore" pattern for modals and the "Semantic Button shim" for interactive divs.
