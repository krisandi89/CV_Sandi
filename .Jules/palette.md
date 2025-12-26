## 2024-07-25 - Modals Should Always Be Dismissible with the Escape Key

**Learning:** A common and easily overlooked accessibility issue is failing to provide a keyboard-only method for dismissing modal dialogs. Users who rely on keyboards for navigation expect to be able to close modals by pressing the `Escape` key. Implementing this behavior is a small change that significantly improves the user experience and makes the interface more intuitive and accessible.

**Action:** When encountering a modal dialog, always check if it can be closed with the `Escape` key. If not, add a `keydown` event listener to the document to handle this interaction.
