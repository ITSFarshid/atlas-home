# Home layout design brief

Use this document as the structural and behavioral contract for a Home redesign. Apply the visual language from a separately supplied reference image. Do not invent a new information architecture, geometry, or width-adaptation model.

Structural source of truth: `prototype.html` / `prototype.js` (ATLAS Unfold Home).

---

## 1. Task

Design one automotive infotainment **Home** that works at both:

| Profile | Canvas |
| --- | ---: |
| Normal | 1920 × 720 |
| Extended | 2880 × 720 |

Explain (through the layouts) how the extra **960 px** is used. Components keep **identical pixel width and height** on both profiles. The map does not grow. There are no wide-only applications, accounts, or passenger-only services.

The attached image is a **style reference only**. Preserve the zoning, inventory, and adaptation rules below.

---

## 2. Hard limits

1. Whole components keep fixed native pixel sizes across 1920 and 2880. Do not scale, stretch, or redefine a component as smaller atoms to fake reuse.
2. The map viewport size and map extent stay the same on both profiles.
3. Driver-side structure stays put: access rail, navigation heading, map, driver climate, and shared comfort stay at the same coordinates on both widths.
4. Extra width is consumed only by revealing more of the existing widget collection to the right. Inventory and actions are identical on both displays.
5. One shared route session and one shared audio session.
6. Left-hand drive; width extends to the right.
7. Essential instrumentation is assumed to live on a separate cluster; do not recreate a full instrument cluster on this Home.
8. Volume / mute are assumed on physical or steering-wheel controls; do not invent on-screen volume UI unless the style reference clearly requires a non-functional placeholder—prefer omission.

---

## 3. Assumptions and known constraints

| Topic | Standing |
| --- | --- |
| Product type | Central infotainment Home, not a phone projection skin and not a full OEM production system |
| Validation | No PPI, reach, glance, simulator, or compliance study; claims stay conceptual |
| Data | Illustrative fixtures only; no live navigation, traffic, telephony, or vehicle buses |
| Climate reach | Passenger climate follows the right edge; usefulness of far-right controls is unvalidated |
| Policy (prototype) | Route destination changes, stop edits, and queue track selection are **parked-only**; while driving, those controls stay visible but unavailable |
| Evaluation goal | Concurrent access to existing tasks on the wider display; not a claim of safer driving |

Erika’s clarification that governs the adaptation choice:

> Widgets are acceptable. Expanding the map could work, but keeping the map the same size is preferred. The extended configuration should expose a new area with a considered purpose.

Chosen mechanism: **Unfold** — same fixed task widgets; Normal shows two; Extended shows all four.

---

## 4. Out of scope

- Live services, accounts, app stores, multi-user passenger ecosystems
- Wide-only features or different feature sets per width
- Growing or cropping the map between profiles
- Redesigning the adaptation model (Distribute, Shared control bench, map expansion, new passenger environment)
- Production HMI guidelines compliance claims
- Changing widget order or replacing Journey / Places with unrelated domains without an explicit new brief

---

## 5. Information architecture

### Persistent (always on Home)

| Zone | Responsibility |
| --- | --- |
| Vertical access rail | Time, outside temperature, shortcuts to Media / Phone / Apps, Home recovery |
| Navigation heading | Domain label + driving/parked scenario status |
| Map | Orientation, next maneuver, trip summary, search entry, recenter |
| Climate row | Driver temperature, shared fan + defrost, passenger temperature |

### Shared collection (same four widgets on both widths)

Ordered left → right:

1. **Media** — now playing, transport, entry to Queue
2. **Phone** — connection / favourites / call preview, entry to device settings
3. **Journey** — destination and trip context, entry to route overview and conditions
4. **Saved Places** — choose a destination; updates route + map together

### Details (reuse one panel shell; not separate screen sizes)

Opened from widgets or Apps; occupy one widget slot; non-modal:

| Detail | Opens from |
| --- | --- |
| Queue | Media |
| Device settings | Phone |
| Route & stops (journey overview) | Journey / map |
| Route conditions | Journey |
| Applications launcher | Apps on the rail |
| Vehicle / comfort panel | From Apps (temperatures remain in the climate row) |

---

## 6. Screen structure

Coordinates are native pixels from the top-left of the canvas. Use border-box sizing. Gaps between ribbon cards are **32 px**. Ribbon pitch is **480 px** (448 card + 32 gap).

### Shared geometry (both profiles)

| Element | Size (W × H) | Position (x, y) |
| --- | ---: | ---: |
| Vertical access rail | 88 × 544 | 16, 80 |
| Navigation heading | 824 × 48 | 120, 16 |
| Map | 824 × 544 | 120, 80 |
| Maneuver overlay (inside map) | 448 × 104 | 24, 24 relative to map |
| Trip summary overlay (inside map) | 568 × 88 | 24 from map left and bottom |
| Map search control | 56 × 56 | top-right inside map |
| Recenter control | 56 × 56 | bottom-right inside map |
| Collection title | 448 × 48 | 976, 16 |
| Collection browse controls | 448 × 48 | 1456, 16 |
| Each Home widget | 448 × 544 | strip starts 976, 80 |
| Detail panel | 448 × 544 | overlays one ribbon slot |
| Driver climate | 448 × 64 | 120, 640 |
| Shared comfort (fan + defrost) | 448 × 64 | 788, 640 |
| Passenger climate | 448 × 64 | 1456, 640 on 1920; **2416, 640** on 2880 |

### Normal — 1920 × 720

```text
1920 × 720
┌────┬──────────────────────────┬──────────────────────────────┐
│    │ Navigation heading       │ Home title   │ browse / dots │
│Rail│ Map 824×544              │ Widget A     │ Widget B      │
│88× │ (maneuver + trip overlays│ 448×544      │ 448×544       │
│544 │  fixed)                  │              │               │
├────┴──────────────────────────┴──────────────┴───────────────┤
│ Driver climate │ Fan + Defrost │ Passenger climate           │
└────────────────┴───────────────┴─────────────────────────────┘
```

- Ribbon clip width: **928 px** → exactly **two** widgets visible.
- Three snap positions (indices 0–2) cover pairs: Media+Phone, Phone+Journey, Journey+Places.
- Browse previous/next and a position indicator are available.
- First ~1440 px of driver + map structure matches Extended.

### Extended — 2880 × 720

```text
2880 × 720
┌────┬──────────────────────────┬─────────┬─────────┬─────────┬─────────┐
│Rail│ Map (same size / place)  │ Media   │ Phone   │ Journey │ Places  │
│    │                          │ 448×544 │ 448×544 │ 448×544 │ 448×544 │
├────┴──────────────────────────┴─────────┴─────────┴─────────┴─────────┤
│ Driver climate │ Fan + Defrost │ … spacer … │ Passenger climate (right)│
└────────────────┴───────────────┴────────────┴─────────────────────────┘
```

- Extra **960 px** = two more 448 px widgets + two 32 px gaps.
- All four widgets visible; browse controls and position indicator are hidden.
- No new component types. Passenger climate anchors to the right edge.

---

## 7. Access rail structure

Bounds remain **88 × 544** at **16, 80**.

Vertical order (top → bottom):

1. **Status** — current time (`14:08`); outside temperature (`22°`). Time does **not** also appear in the navigation heading.
2. **Shortcuts** (icon-only, same destinations as before):
   - Media → reveals Media in the collection
   - Phone → reveals Phone in the collection
   - Apps → opens the Applications detail
3. **Home** — pinned to the foot of the rail; clears details, returns the ribbon to the first pair, restores Home as the active destination

Navigation heading keeps **Driving / Parked** only (scenario status), not the clock.

---

## 8. Content contract (functional)

### Map

- Active route sample: toward Harbor Point; next turn right onto Mill Lane; distance to turn 800 m; remaining time/distance and ETA on the trip overlay.
- Idle: prompt to choose a saved destination; trip overlay offers entry to Places.
- Search control opens Saved Places.
- Journey action on the trip overlay opens route overview when a route is active.
- Recenter acknowledges location centering (no live map camera required).

### Media

- Track title, artist, previous / play-pause / next.
- Footer opens Queue.
- Queue lists sample tracks; selection parked-only.

### Phone

- Connected, disconnected, or call-preview states.
- Favourites: Maya, Daniel (previews only; no real calls).
- Footer opens device settings when connected.

### Journey

- With route: destination, next stop or arrival, route-conditions entry, Route & stops entry.
- Without route: current area + illustrative range; shortcut to Saved Places.
- Optional Cedar Services stop when applicable; parked-only to toggle.

### Saved Places

- Harbor Point, Westfield Park, Cedar Services.
- Selecting a place (parked) sets destination, route path, duration, and ETA together.
- While driving: list readable; start/change blocked with an explicit availability note.

### Applications detail

- Jump links to the four Home widgets.
- Entry to Vehicle / comfort detail (fan & defrost also remain in the climate row).

---

## 9. Interaction rules

1. Details are **non-modal**: map, rail, other visible widgets, and climate stay usable.
2. The widget under a detail is excluded from focus until the detail closes.
3. Close control or Escape dismisses the detail.
4. Opening Media or Phone from the rail dismisses an open detail and scrolls that widget into view on 1920 if needed.
5. Home clears detail and resets ribbon position to 0.
6. Switching 1920 ↔ 2880 preserves the narrow browsing index where still meaningful; Extended always shows the full strip from the start.
7. One state store for route, stop, playback, phone, and climate across both widths.

---

## 10. What the style pass may change

Allowed when applying the reference image:

- Surface treatment, typography, icon drawing style, spacing *within* fixed component bounds
- Map illustration style (still illustrative; same overlay roles and approximate footprints)
- Control shape language *inside* the fixed hit areas
- Hierarchy and emphasis, as long as maneuver, playback, and climate remain operable

Not allowed:

- Moving or resizing the components listed in §6
- Adding domains that only exist on 2880
- Replacing Unfold with map growth or a different adaptation scheme
- Removing Media, Phone, Journey, Places, rail access, or climate from Home
- Putting the clock back in the navigation heading instead of the rail

---

## 11. Deliverables for the style redesign

1. Home at **1920 × 720** and **2880 × 720** (paired, same component sizes).
2. Default driving state: active route, media playing, phone connected, no detail open.
3. Optional second state pair if useful: detail open (e.g. Queue or Apps) showing non-modal overlay on one slot.
4. Short note (a few bullets) confirming: fixed map, identical component sizes, and what the extra 960 px shows.
5. Do not invent live data, production compliance, or unvalidated safety claims.

---

## 12. Adaptation summary (for copy / critique)

| | 1920 | 2880 |
| --- | --- | --- |
| Map | 824 × 544, fixed | Same size and position |
| Collection | 2 of 4 widgets; browse | All 4 widgets; no browse |
| Purpose of +960 px | — | Two additional existing task panels |
| Feature set | Full | Same full set; more concurrent visibility |
