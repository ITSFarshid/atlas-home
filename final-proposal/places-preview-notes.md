# Saved Places + place preview comparison

This candidate is separate from `mixed-grid.html`; it does not replace the baseline.

## Width strategy

At 1920 × 720, Saved Places and its selected-place preview occupy the same slot sequentially. Closing the preview restores the list. At 2880 × 720, the list and preview coexist in the extension. The preview remains 448 × 544 pixels in both configurations. No function is exclusive to the wider screen.

Selecting a place previews entrance, parking and estimated travel information without changing the active route. Starting or replacing a route requires an explicit confirmation and is disabled in Driving in both layouts. Position on the passenger side does not change permissions.

The initial preview shows the current destination. The existing media queue remains accessible; closing it restores the place preview on the wide layout.

## Why test this

The extension supports a connected task: compare saved destinations and inspect one while retaining the list. Entrance and parking information give the preview value beyond repeating the destination name. This is a stronger relationship between the two extension panels than unrelated widgets.

The tradeoff is an additional selection state and place-information data requirements. Persistent value during an ordinary drive still needs evaluation; this candidate is not automatically the final choice. Entrance, address and parking information are fictional prototype fixtures, not live navigation data.

## Validation

Automated checks passed at both widths: preview selection preserves the route, Driving blocks route commitment, Park permits explicit confirmation, narrow close returns to the list, wide list remains available, existing queue is accessible, empty state renders, and preview content stays within its fixed bounds. Screenshots were visually inspected. This is prototype validation, not automotive safety certification.

Build with `node work/build-place-preview.cjs` after changes to the baseline, then validate with `node work/check-place-preview.cjs`.
