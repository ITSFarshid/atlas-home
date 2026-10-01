# ATLAS / Current Home prototype

27 September 2026 — industry-review refinement. Open prototype.html. Keep the adjacent atlas-design-system folder; fonts and imagery load locally.

## Current structure

Fixed Navigation, left rail and climate controls. Shared collection: Media, Phone, Journey and Saved Places. Both profiles provide identical features and fixed widget dimensions. The smaller display shows two cards at a time; the wider display shows all four. Fit to window scales the browser presentation only; Actual pixels displays native dimensions.

Saved Places replaces the provisional Vehicle card. It gives direct access to three sample destinations. Journey describes the current trip and route conditions. Vehicle comfort controls remain in Apps.

## Try it

1. Browse at 1920 using swipe, drag or arrows. The position indicator updates. Switch to 2880: all four cards fit, and browsing controls disappear.
2. Open Queue, Journey or Device settings. Details occupy one card slot; change climate, use the map or choose a rail shortcut without closing a modal.
3. Select Media in the rail from any position to reveal playback.
4. Choose Parked and select a Saved Place. Destination, sample map path, ETA and Journey update together.
5. In Route & stops, add or remove Cedar Services, or end the route. Journey has a separate idle state and a shortcut to the existing Saved Places widget.
6. Preview a call, disconnect/reconnect the sample phone and switch display widths. State is shared.

## Scope and assumptions

Data, route geometry, imagery and calls are illustrative. Route selection/stop editing and queue selection are parked-only concept policies. Volume/mute are assumed to live on physical/steering-wheel controls, and essential instrumentation on a separate cluster; these hardware assumptions are not confirmed by the brief.

## Current outputs

- home-1920.png and home-2880.png — native Home exports.
- state-1920-journey-places.png — the same secondary cards accessible on the smaller display.
- preview-scoped-details.png — details with fixed controls available.
- component-specification.md — current geometry, behavior and engineering contract.
- verification.json — current checks.

Earlier reports and state images document previous iterations. visual-refinement-review.md documents the preceding styling pass; component-specification.md governs the current content and behavior. The original image-generation prompts remain in ../atlas-design-system/assets/GENERATED-ASSETS.md.
