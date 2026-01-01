## 2024-07-25 - Robust Playwright Assertions for CSS Transitions

**Learning:** When testing elements with CSS transitions using Playwright, asserting visibility can be unreliable. It is more robust to assert the presence or absence of a controlling class (e.g., `.active`) rather than the visibility state.

**Action:** For future Playwright scripts, I will use `expect(locator).to_have_attribute('class', re.compile(r'\bactive\b'))` or a similar attribute-based assertion when dealing with elements that have CSS transitions. This will prevent flaky tests that fail due to the element still being visible during a fade-out animation. I will also remember to add a small delay before taking a screenshot to ensure the animation is complete.
