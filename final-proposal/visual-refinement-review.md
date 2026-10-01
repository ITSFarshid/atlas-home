# Reference-led visual refinement

27 September 2026. Current style: ATLAS / Nightglass.

The supplied dashboard image is the current visual reference. This revision changes presentation, not the widget-selection decision: Navigation plus Media, Phone, Traffic and Vehicle remains the current prototype. The earlier evaluation of Traffic and Vehicle is still unresolved.

## Comparison and iteration

| Visual characteristic | Previous UI | Refined UI | Review |
| --- | --- | --- | --- |
| Background | Neutral black | Near-black #0B0D0F | Close tonal character |
| Card surfaces | Prominent charcoal gradients and upper highlights | Almost-flat dark panels, fine outlines, no bevels | Strongly closer |
| Shape | Tight 12px cards, rectangular actions | 24px card corners, pill actions, circular controls | Matches the reference vocabulary |
| Navigation | White filled active tile | Cyan icon/text and an explicit selection marker on a dark rounded rail | Close style; labels deliberately retained |
| Media | Small abstract album tile | Original photographic artwork fills the card, dark text scrims, white playback control | Close image-led treatment |
| Map | Coarse square grid | Denser, irregular subdued streets with dark pill overlays | Improved in second pass; still schematic, not actual cartography |
| Vehicle | Small side-view line drawing | Original overhead silver vehicle with restrained concentric rings | Improved scale in second pass |
| Accent | White-only emphasis | Sparse cyan for navigation/actions; amber for traffic caution | Matches the visual roles, without inventing a tyre fault |
| Typography | Regular/medium Instrument Sans | Lighter emphasis, sentence case, unchanged local family | Similar tone; exact reference font is unknown |

First-pass screenshots exposed the coarse map and undersized vehicle. Second pass refined street texture, enlarged the vehicle, adjusted media cropping and reduced empty space in Phone. Final touch-up made map text overlays opaque and restored 18px vehicle-support text.

## Deliberate differences

The reference uses an asymmetric arrangement of smaller modules, greeting, weather and a large vehicle area. This prototype retains the accepted fixed navigation card and horizontal shared collection. Similarity is in visual language, not an exact reconstruction of that composition. Adding greeting, predictive routing or weather would be a separate information-architecture decision. The reference's tiny labels were not copied.

Both 1920 and 2880 retain identical component sizes, widget actions and feature availability. The 960px difference reveals two more existing cards. No screen-specific artwork variants are required.

## Verification

- Rendered and visually inspected both native display widths and the design-system foundations.
- Checked 16 content states and 12 detail/profile combinations for content overflow, feature parity and state retention.
- Confirmed the design-system gallery and dashboard load their local images without runtime errors.
- Automated checks establish implementation consistency, not aesthetic equivalence or vehicle usability.

See `verification.json` and `nightglass-checks.json`. New imagery is illustrative and locally bundled. The generic overhead vehicle does not assert a specific real model or telemetry integration.
