# Pull Request Review

## Summary

The portfolio builds successfully, but the baseline has two ESLint errors and one build-time chunk-size warning. The project modal and focus behavior also need hardening for keyboard and assistive-technology users.

## Findings

### 1. The project modal is not keyboard-operable or announced as a dialog

**Priority:** P1

**Location:** `src/components/Projects.jsx`

The card opens via `onClick`, but there is no keyboard equivalent on the project article. The modal overlay has no dialog role or accessible name, focus is not moved into or contained within the modal, Escape does not close it, and focus is not restored to the opened card afterward.

**Suggestion:** Convert each project card into a real button or add an appropriate keyboard handler and semantics. Add `role="dialog"`, `aria-modal="true"`, and an accessible label to the modal card. Implement Escape handling and focus management, including restoring focus to the triggering project card on close.

### 2. The Lenis instance is synchronized with state directly inside an effect

**Priority:** P2

**Location:** `src/App.jsx:48`

Creating Lenis and calling `setLenis(instance)` from the effect body triggers React Hooks lint rule `react-hooks/set-state-in-effect`. It also makes Lenis lifecycle state depend on an effect-driven state update.

**Suggestion:** Remove the synchronous state update from the effect body by storing the Lenis instance in a ref and exposing the instance through context as a ref-backed value, or otherwise initialize and publish it in a stable lifecycle callback. This should preserve the current start/stop behavior and avoid the lint violation.

### 3. `MagneticButton` accepts props but ignores them

**Priority:** P2

**Location:** `src/components/MagneticButton.jsx:5`

The component declares `...props`, but the props are never passed to `motion.div`, and ESLint reports `props` as unused.

**Suggestion:** Either spread supported props onto `motion.div`, for example `<motion.div {...props} ref={ref}>`, or remove the rest parameter if no additional props are required.

### 4. Clipboard failures are not handled

**Priority:** P2

**Location:** `src/components/Contact.jsx:24`

`navigator.clipboard.writeText` can reject when clipboard access is unavailable or denied. The returned promise is not caught, so this can produce an unhandled rejection and leave no user-facing feedback.

**Suggestion:** Wrap clipboard access in `try/catch`, provide success and failure states, and add a fallback such as a selectable email address or `document.execCommand("copy")` where appropriate.

### 5. MarkdownContent produces a large standalone route chunk

**Priority:** P3

**Location:** `src/components/MarkdownContent.jsx`

The production build reports a 782 kB chunk containing `react-syntax-highlighter`. This is larger than the configured 500 kB warning threshold and can increase route-load cost for blog and project detail pages.

**Suggestion:** Lazy-load the Markdown renderer or syntax highlighter, or split the Prism highlighter into a separate async chunk. Preserve fenced-code highlighting after splitting.

## Validation

- `npm run build` passes.
- `npx eslint src` reports:
  - `react-hooks/set-state-in-effect` in `src/App.jsx:48`
  - `no-unused-vars` for `props` in `src/components/MagneticButton.jsx:5`
- The build emits a chunk-size warning for the `MarkdownContent` chunk.
