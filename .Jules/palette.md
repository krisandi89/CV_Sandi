# Palette's Journal - Critical UX/Accessibility Learnings

## 2025-05-15 - [ARIA Property Compatibility]
**Learning:** Setting accessibility attributes via JavaScript properties like `element.ariaLabel` or `element.role` has limited browser support (part of AOM, missing in Firefox).
**Action:** Always use `element.setAttribute('aria-label', ...)` and `element.setAttribute('role', ...)` for maximum cross-browser compatibility.

## 2025-05-15 - [Modal Focus Management]
**Learning:** When opening a modal, focusing the first interactive element (like a close button) immediately improves the experience for keyboard users.
**Action:** Use `setTimeout` when opening modals with CSS transitions to ensure the element is visible and ready to receive focus.
