# ATLAS / Polar HMI design system

Current visual direction: an independent interpretation of the [Polestar 2 in-car interface](https://www.polestar.com/uk/polestar-2/technology/#technology). It is applied to the current mixed-grid candidate in ../final-proposal/mixed-grid.html. The original prototype.html and legacy token files retain their previous treatment.

## Visual foundations

- Flat near-black canvas, charcoal tiles with 16px corners, 10px control corners and 6px small details. These softened corners are a subsequent project refinement of the reference-led direction.
- White and grey Instrument Sans typography, predominantly regular and medium weights.
- Orange selected states and primary actions, reinforced by labels or position markers.
- Orange is shared by the route, maneuver arrow, destination marker and selected controls. Labelled yellow warnings remain a separate semantic role.
- Artwork stays contained within its relevant component; no decorative surface gradients or glow.

These colours, dimensions and font choices are our implementation values, not official Polestar tokens. Instrument Sans is the existing locally bundled font, not an identification of Polestar's typeface. No Polestar logo, vehicle image or proprietary UI asset is embedded.

## Editable sources

| File | Purpose |
|---|---|
| polestar-tokens.json | Current palette, type, spacing, shape and geometry source |
| polestar-tokens.css | Generated current-theme custom properties |
| polestar.css | Shared component treatment and dashboard adapter |
| components.css / library.js | Reused component foundations and markup |
| polar-showcase.css / showcase.css | Documentation layout |
| build-polestar.cjs | Current gallery and token generator |
| build.cjs | Entry point for the current generator |
| index.html | Current editable-system gallery |
| nightglass.html | Previous gallery snapshot using legacy styles |
| polar-verification.json | Current checks and selected contrast measurements |

Run `node outputs/atlas-design-system/build.cjs` from the project root after changing current tokens or gallery content. Gallery order is polestar-tokens.css, components.css, showcase.css, polestar.css, polar-showcase.css. The mixed-grid dashboard loads its existing structural styles first, then polestar-tokens.css and polestar.css.

Legacy tokens.json and tokens.css are intentionally preserved for the original prototype. They are not the source for the current Polar theme. The documentation's standalone component studies are not identical to every applied dashboard component; its applied-Home section shows the current composition.

The mixed-grid map source is work/mixed-grid-map.js. Rebuild its application with `node work/build-mixed-grid.cjs`. It uses a simplified vector street hierarchy, restrained land/water colours, an orange cased route, a white destination pin and a distinct current-position arrow. Opaque rounded maneuver and trip panels keep their existing bounds; secondary map actions use a quieter treatment. This remains illustrative cartography, not a mapping service.

## Fixed geometry

| Applied component | Width × height, px |
|---|---:|
| Native navigation rail with clock/date | 88 × 544 |
| Map | 824 × 544 |
| Media | 448 × 256 |
| Phone | 448 × 256 |
| Journey / Saved Places / detail panel | 448 × 544 |

The Media/Phone stack has a 32px internal gap. All component bounds are identical at 1920 × 720 and 2880 × 720. The wider profile reveals existing views simultaneously. It introduces no exclusive features or passenger-side interaction permissions. This visual revision leaves the mixed-grid layout and interaction rules intact.

## Reference and interpretation

The official Polestar 2 centre-display home and Drive settings images informed square tiles, flat surfaces, white typography and orange selected controls. The portrait four-tile home composition was not transplanted: our landscape zoning and component reuse contract remain the basis of this prototype. See polestar-reference.md for the source images and adaptation decisions.

## Verification and limits

Both native display sizes rendered and were visually inspected. Existing interaction and geometry checks passed for navigation, playback, phone previews, summary switching, detail dismissal and driving restrictions. Gallery image loading, switches and keyboard tabs passed.

Selected contrast pairs: primary text/card 16.30:1; secondary text/card 9.54:1; dark text/orange action 9.06:1; control outline/raised surface 3.34:1. These checks do not constitute a complete accessibility audit, map-label assessment or automotive validation.

Font: Instrument Sans, SIL Open Font License; see assets/OFL.txt. Prototype media assets retain their existing provenance in assets/GENERATED-ASSETS.md.
