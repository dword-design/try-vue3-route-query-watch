## Instructions

1. Run `yarn --frozen-lockfile`, then `yarn dev`
1. Open `http://localhost:3000`
1. Click the button
1. Click the button again

Expected: The query change to empty is not triggered before hiding the component (no `{}` output in console).
Actual: The query change to empty is triggered before hiding the component (`{}` output in console).

If you change to Vue 2 via `yarn add nuxt@^2` the behavior is correct.
