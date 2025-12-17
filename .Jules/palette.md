## 2024-07-25 - Modal Accessibility Pattern
**Learning:** A common UX gap in modals is a lack of robust accessibility and keyboard navigation. Icon-only close buttons (like '×') are often meaningless to screen readers, and users expect to be able to dismiss modals using the 'Escape' key.
**Action:** Whenever I encounter a modal, I will immediately check for two things:
1.  Does the close button have a descriptive `aria-label`?
2.  Does the modal close when the `Escape` key is pressed?
If either is missing, it's a high-impact, low-effort UX win to implement it.
