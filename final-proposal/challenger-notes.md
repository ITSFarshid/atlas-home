# Retained-detail challenger B

Separate experimental prototype: `challenger.html`. The original prototype files remain unchanged. Both share the existing design-system assets and `prototype.css`; B has a small style override and separate behavior script.

## Contract

- The initial experiment used identical Home layouts. The September 28 refinement applies only to B: prominent clock, two independent temperature controls, no fan/defrost Home shortcuts, and a fixed driving state.
- Map: 824×544. Home cards and detail panels: 448×544. No component resizing between display profiles.
- At 1920, opening details replaces the source card's visible slot. Close/Escape restores it.
- At 2880, a detail occupies slot 3, except Journey-origin details use slot 4 so Journey stays visible. The source gets a subtle top-edge marker.
- The covered secondary card is inert and excluded from accessibility traversal. Other visible cards, map, rail and climate stay usable.
- Both widths expose the same widgets, actions, data and scenario policies. Track changes update the retained player. Display changes preserve task and domain state.
- Width provides coexistence, not additional functionality. One summary yields its slot while details are open; all four summaries plus a fifth panel cannot fit.

## Comparison

`challenger-comparison.html` contains matched parked-state A/B snapshots at both widths for Home, Queue, Journey and Phone settings, with links into interactive prototypes. B's presenter also has a Try selector for these examples. This presenter is outside the HMI.

Queue is the strongest use case: the player stays visible and operable while selecting a track. Journey is potentially useful but still duplicates some map information. Phone settings is deliberately a weaker example: retaining two favourites beside connection settings may not repay the space used. The comparison should expose those differences rather than assume every detail benefits equally.

Saved Places retains its existing direct-route behavior to keep this experiment focused on placement. A separate place-inspection flow was not added to manufacture a benefit absent from the baseline.

## Open design questions

1. Is task context more valuable than the summary it displaces?
2. Are source/detail relationships clear when another card lies between them?
3. Should coexistence apply only to selected tasks rather than every detail?
4. Does Journey need content revision before judging this arrangement?

No claim of distraction validation or production compliance. Functional checks and matched screenshots are recorded in `challenger-verification.json`.

## September 28 refinement

The bottom area is comfort control, not navigation. It now contains only two fixed 448×64 temperature modules. Fan and defrost were removed from Home; this prototype does not establish their eventual vehicle-level access. The vertical rail remains the sole primary navigation. The 208×48 clock sits at the same driver-side position on both widths with 42px tabular numerals. Time is an illustrative fixture.

Driving is the only prototype state: the presenter selector and dashboard mode label are removed, including in demo presets and reset. Existing driving restrictions still apply, so queue selection and route editing remain unavailable. The historical comparison snapshots and initial verification describe the earlier experiment; see challenger-refinement-verification.json for this revision.

## Single-zone climate revision

Supersedes the two-temperature-module refinement. Assumption: one cabin climate zone. A 72×112 entry at the bottom of the existing 88×544 rail exposes cabin setpoint and Auto/Manual/Defrost state. No climate controls occupy the bottom row. A 448×544 climate panel opens in the first visible widget slot on both profiles, preserving navigation and map; close restores the widget. Temperature is adjustable from 16 to 28°C in 0.5°C increments; fan and airflow changes select manual mode; Auto and front defrost have explicit controls and states. Climate state persists across display switches and closing the panel. This is a UI-state simulation, not HVAC control logic. Original A and shared design-system files remain unchanged.

## Surface and hierarchy refinement — September 28

Current visual revision, superseding earlier clock and border styling. Inspired by the restrained surfaces in Tesla's touchscreen references and the softer content grouping in Flyme Auto and Voyah; no OEM assets or UI were copied.

- Three tonal levels: near-black canvas, subtly graded charcoal cards, lighter filled controls and detail panels. Borders and nested pills reduced.
- Cleaned illustrative SVG cartography: fewer local streets and labels, differentiated road classes, subdued parks/water, explicit destination and location markers. This remains a schematic map, not live cartography.
- More deliberate media portrait crop with a lower readability gradient and centered transport group. Phone uses filled contact rows, stronger avatars and less introductory text.
- The header uses a 34px clock and supporting date. Both are illustrative fixtures. Cyan is concentrated on navigation and active state; carousel controls are neutral.
- Rail, map and cards start at y=104. Header starts at y=40. This rebalances top and bottom space without adding content or resizing components.
- Map stays 824×544; cards/details 448×544; rail 88×544. Guidance is now 416×96 on both profiles. Same features and browsing behavior remain available at both widths.
- Original A and shared design-system files are unchanged; visual tokens and recipes are scoped to challenger.css. The pre-refinement source is preserved under work/pre-surface-refinement.

Verified both native resolutions, media/call previews, retained-detail placement, climate state changes, Escape dismissal and panel control containment. Screenshots: refined-home-1920.png and refined-home-2880.png; detailed results: surface-refinement-verification.json. This is prototype verification, not an automotive validation claim.
