## 2024-05-20 - Refactor Before Adding
**Learning:** When adding a new trigger for an existing action (e.g., closing a modal with 'Escape' key in addition to a button click), it's best to refactor the existing logic into a single, reusable function first. This avoids code duplication and makes the code easier to maintain.
**Action:** Before adding new event listeners for existing functionality, check if the logic can be extracted into a shared function.
