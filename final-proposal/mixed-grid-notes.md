# Prototype 01 — Tall map with a mixed widget grid

Separate layout experiment based on prototype.html, which remains the main baseline and is unchanged. Uses its Nightglass styles, map, assets and existing features.

## Component contract

| Component | Native size on both displays |
|---|---|
| Map | 824 × 544 |
| Media | 448 × 256 |
| Phone | 448 × 256 |
| Journey | 448 × 544 |
| Saved Places | 448 × 544 |
| Detail panel | 448 × 544 |

Media and Phone share a column: 256 + 32 gap + 256 = 544. The compact formats are used on both widths; no widget resizes at the breakpoint. Native screen height remains 720.

## Width behavior

1920: fixed map, persistent Media/Phone stack and one summary column. Header controls select Journey or Saved Places. Opening Queue, route information or device settings temporarily replaces that summary column. Escape/Close restores it. Media and Phone stay available.

2880: the extra 960 pixels provide two 448-pixel columns plus two 32-pixel gaps. Saved Places is simultaneously visible, and a final column displays an existing detail view. Queue is the default detail. Existing actions switch the detail content. Home returns the detail to Queue. Every function is accessible in the narrow prototype; only simultaneous visibility differs.

## Trade-offs to compare

- Compact Phone avoids the large empty introductory area of the original; Media sacrifices artwork height but retains title, artist, transport and queue access.
- Narrow Home exposes more domains at once, but Journey yields to details or Saved Places.
- Wide has a dedicated detail area rather than requiring a summary to be covered. This changes the original equal-card browsing architecture and is a candidate, not a settled decision.
- The media player and its wide Queue are separated by two columns. Assess whether that distance weakens their visual relationship.
- Queue selection and route editing retain the baseline driving restrictions. Extra visibility does not remove those restrictions; a visible disabled queue may offer limited value while driving.
- Climate and scenario controls are inherited from the requested main baseline; this experiment does not resolve the earlier climate alternatives.

## Verification

The sidebar retains the top-status / middle-shortcuts / bottom-Home structure, but now uses the native Nightglass design system: dark card material, monochrome line icons, visible 16px labels and cyan selection. A 26px illustrative clock and 16px date replace the phone signal/Bluetooth indicators. Shortcuts are Maps, Media, Phone and Vehicle; Vehicle opens the existing comfort panel, replacing the app-launcher shortcut. Phone remains a connected calling function within the vehicle interface, rather than determining global system status. The rail stays 88×544 with 72×72 controls. Keyboard focus and selected-state markers are retained. The duplicate header clock is removed. Original prototype.html remains unchanged.

Both native resolutions rendered and visually inspected. Fixed dimensions, compact control containment, playback, call previews, device connection, narrow summary switching, detail dismissal and parked queue selection checked. Results: mixed-grid-verification.json. Screenshots: mixed-grid-1920.png and mixed-grid-2880.png.


## Polar visual revision — 28 September 2026

The current visual treatment supersedes the Nightglass styling described above: flat black/charcoal tiles, 2px corners, white regular typography and orange actions/selection. Blue route guidance and labelled yellow warnings keep separate semantic roles. Component bounds, native rail structure, feature availability and existing interaction restrictions are unchanged. The original prototype.html remains on its previous theme.

Current sources: ../atlas-design-system/polestar-tokens.json and polestar.css. Current screenshots: polar-home-1920.png and polar-home-2880.png. Verification: ../atlas-design-system/polar-verification.json plus mixed-grid-verification.json. This is a Polestar 2-inspired interpretation, not an official OEM design system.

### Softer corners and map refinement

The latest revision uses 16px card corners, 10px controls and 6px small details, superseding the 2px treatment. The sidebar, tabs, list selection and map overlays use the same corner hierarchy. Orange remains the interaction accent; the route and maneuver use blue.

The map now has a simplified street hierarchy with buildings inside blocks, restrained contextual labels, a cased route, a white destination pin and a separate arrow/halo for vehicle position. Guidance and trip overlays are opaque with a subtle edge and consistent padding. The Journey action is quieter to avoid competing with the maneuver. All map, card and overlay bounds remain fixed across both profiles.

The vector source lives in work/mixed-grid-map.js and is included by work/build-mixed-grid.cjs. Existing geometry and interaction checks pass. All three destination markers were checked against overlay bounds at both widths; route and no-route states fit without overflow. See refined-map-verification.json. The map remains illustrative and is not live navigation.

### Orange map and ordered sidebar refinement

The dark baseline now uses the orange accent for the route, maneuver arrow, destination and position outline. This supersedes the blue route treatment above. Repetitive square buildings were replaced with irregular parcels and local streets; non-route road classes and geography remain subdued. The map is still illustrative vector cartography.

The sidebar now places Home first, followed by Maps, Media, Phone and Vehicle, in one group below the clock/date. All five controls retain 72×72 bounds with 8px gaps. Home is no longer isolated at the bottom. A neutral selected surface, orange icon and side marker distinguish the active entry. Rail and map bounds and cross-display positions remain unchanged. The daylight alternative keeps its own blue palette.

### Local driving map — 29 September 2026

The map now depicts a heading-up local junction, replacing the previous full-route drawing. The vehicle sits below centre; the next turn is ahead, and the route continues beyond the viewport. The distant destination and stop pins are omitted at this local scale; Journey retains full-trip context. Current and next road names take priority over subdued district/park labels. Road classes have distinct widths, and the orange route has one quiet outline without the earlier highlight/glow.

The arrival panel is now 400×80 on both profiles, down from 568×88. It shows arrival time and remaining minutes with the existing Journey action. The map no longer repeats remaining distance. Together with the unchanged 448×104 maneuver panel, these overlays occupy approximately 17.5% of the 824×544 map, down from approximately 21.5%. This is a shared component revision; neither panel resizes when switching display width.

Saved Westfield Park produces left-turn geometry and a matching mirrored maneuver icon; other sample destinations use the right-turn local scene. This remains a static illustrative route preview, not a real map camera, live routing service or geographically measured scale. Checks cover vehicle-marker visibility, route/idle states, arrival-panel containment and shared geometry at both widths.
