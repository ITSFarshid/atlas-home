# ATLAS / Daylight alternative

A separate light-mode exploration, inspired by the pale map, dark typography and restrained floating controls visible in the [official Tesla Model 3 touchscreen illustration](https://www.tesla.com/ownersmanual/model3/en_ie/GUID-518C51C1-E9AC-4A68-AE12-07F4FF8C881E.html). Tesla's manual also documents Light and Dark display appearance. Its illustrations vary with model, software and market.

Our exact palette, blue interaction accent, font, card layout and component sizes are independent choices. No Tesla imagery, branding, proprietary font, driving visualization or instrument-cluster functions were imported.

## Open and compare

- Current light alternative: ../final-proposal/mixed-grid-light.html
- Dark comparison: ../final-proposal/mixed-grid.html
- Light component gallery: daylight.html

This is an alternative, not a replacement of the dark theme. Both use the same mixed-grid.js runtime and features. Map, navigation rail, Media, Phone, Journey, Saved Places and detail-panel dimensions remain identical at both widths. This exploration adds no automatic ambient-light switching or new vehicle functionality.

## Treatment

- Off-white #F2F3F5 canvas; white cards; dark #20252B text; secondary #59636E.
- Blue route and selection, black primary playback, amber warning surfaces with explicit labels and icons.
- Existing 16px panel corners, 10px controls and 6px small details.
- Light cartography has pale green parks, muted blue water, white roads and a saturated blue route. Guidance and trip panels are opaque white.
- Media uses a 96px artwork thumbnail in the applied dashboard; its information and controls retain their existing positions and availability. The gallery also keeps a full-art photographic player as a separately labelled catalogue study.

## Sources and rebuild

Shared base: polestar-tokens.css and polestar.css. Light overrides: daylight-tokens.css and daylight.css. The generated token manifest is daylight-tokens.json. Palette definitions and alternative-page assembly live in work/build-daylight.cjs; change that palette and run `node work/build-daylight.cjs` from the project root. Edit daylight.css for light component treatment.

The separate pages keep the exploration reversible without duplicating interaction logic. Rebuild Daylight after changing the underlying mixed-grid page or dark gallery. Its CSS is an exploratory adapter; a future production implementation should consolidate shared theme recipes.

## Verification

Both native sizes passed existing component-dimension, containment, navigation, playback, phone and detail-panel interaction checks. Primary text on white: 15.43:1. Secondary text on white: 6.11:1. White on blue accent: 6.24:1. Warning text on its pale background: 6.14:1. These selected pairs are not a full accessibility or automotive validation. Real screen luminance, glare and day/night adaptation are untested.

Records: daylight-contrast.json and ../final-proposal/daylight-verification.json. Native screenshots: ../final-proposal/daylight-home-1920.png and daylight-home-2880.png.
