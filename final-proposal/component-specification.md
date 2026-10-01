# ATLAS / Current dashboard contract

27 September 2026. Industry-review refinement.

## Selection and rationale

Navigation stays fixed. One shared collection contains Media, Phone, Journey and Saved Places. Saved Places replaces the provisional Vehicle card because destination selection has a concrete task benefit; the vehicle illustration did not establish one. Vehicle controls remain accessible through Apps on both displays. This selection is a design judgment, not a user-testing result.

Journey describes the current trip; Saved Places selects a future destination. There is no duplicate saved list inside Journey. With no active route, Journey shows current area and illustrative range, plus a shortcut that reveals the existing Saved Places widget.

## Geometry

All measurements are native pixels, relative to the screen. No component is scaled between profiles.

| Element | Bounds | Placement |
| --- | --- | --- |
| Vertical navigation | 88 × 544 | 16,80 on both |
| Navigation heading/status | 824 × 48 | 120,16 on both |
| Navigation card/map | 824 × 544 | 120,80 on both |
| Maneuver overlay | 448 × 104 | 24,24 inside navigation |
| Journey summary overlay | 568 × 88 | 24px from navigation left and bottom |
| Collection heading | 448 × 48 | 976,16 on both |
| Collection controls | 448 × 48 | 1456,16 on both |
| Each Home widget | 448 × 544 | Ribbon starts 976,80; pitch 480 |
| Detail panel | 448 × 544 | Overlay near the ribbon, clamped to the browser viewport |
| Driver climate | 448 × 64 | 120,640 on both |
| Passenger climate | 448 × 64 | 1456,640 / 2416,640 |
| Shared climate controls | 448 × 64 | 788,640 on both |

The transparent layout region clips the ribbon to 928px at 1920 and 1888px at 2880. It is not a painted, stretchable card or map. Cards remain 448px wide; gaps remain 32px. Two more positions consume exactly 960px. The navigation card never changes its viewport size or map extent because of the display profile.

## Access and state

- The rail provides Home, Media, Phone and Apps, in that order. Media reveals playback in one action from any collection position.
- At 1920 two widgets are visible, with three snapped positions and a position indicator. At 2880 all four fit and browsing controls are hidden.
- Details occupy one 448×544 widget slot. They are non-modal: the map, rail, other visible widgets and climate remain usable. The covered widget is excluded from keyboard focus. Close or Escape restores the underlying card. Opening another widget via the rail dismisses details.
- Preview scaling applies uniformly to the dashboard and inline details. Native geometry never changes.
- Home returns to the first pair. Switching display size preserves the narrow browsing position.
- Route destination, planned stop, playback, phone and climate share one state store.

## Content and sample actions

Navigation displays the next maneuver and basic ETA. Journey gives destination context, arrival/remaining journey when direct, or the next planned stop, plus route conditions. Saved Places selects Harbor Point, Westfield Park or Cedar Services and updates the map path, destination, duration and ETA together. These are deterministic sample routes.

Queue changes and route selection/stop changes remain parked-only prototype policies at both widths. Saved destinations remain readable while driving, with an explicit availability label. Range, travel times and conditions are fictional fixtures. No live services are implied.

Phone shows favourites, active call preview or connection state. Device settings contain Disconnect. The media artwork is subdued so playback and track information dominate. Vehicle comfort controls remain under Apps.

## Hardware and engineering assumptions

Volume and mute are assumed available through physical/steering-wheel controls; this is not confirmed by the brief and must be stated in the final concept. Core instrumentation is assumed to be in a separate cluster. Neither assumption requires implementation in this static prototype.

One ordered widget renderer serves both widths. Inline details reuse the existing fixed panel shell. Saved Places reuses existing destination fixtures; no extra service or passenger-specific state is introduced. Context changes content inside fixed cards, never their dimensions or order.

## Verification

See verification.json: identical inventory/actions and dimensions; route and stop consistency; 16 state/profile combinations; 14 detail/profile checks; usable fixed controls while details are open; Media shortcut; fit-preview bounds and Escape recovery. Tests do not establish distraction performance or vehicle compliance.
