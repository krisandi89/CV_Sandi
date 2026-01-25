## 2024-07-25 - Modals Must Respect the Escape Key

**Learning:** A common accessibility oversight is forgetting to allow users to close modal dialogs using the 'Escape' key. This is a conventional and expected behavior for keyboard-only and screen reader users. Relying only on a mouse click to close a modal can trap these users, creating a frustrating experience.

**Action:** For any future modal implementation, always add a global `keydown` event listener to check for the 'Escape' key. Ensure this is a standard part of the component's functionality from the start.