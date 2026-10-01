# ATLAS
## Designing one automotive Home for two display widths

**A reading case study of the design process**  
**Displays:** 1920 × 720 and 2880 × 720  
**Outcome:** An interactive Home concept for a driving scenario

The assignment asked for one infotainment Home that works on two displays, with the same UI components at the same pixel sizes. The wider display adds 960 pixels of width and no height. That constraint became the central question: what should the extra space do?

I wanted both versions to feel like the same Home. The wider layout needed a purpose that a driver could understand from the screens themselves. The narrower layout still needed access to the same content. As the work continued, a second question became just as important. If the display extends toward the passenger, how does a driver who is alone reach the cards that sit farther away?

The concept that resulted keeps the map and the driver-side structure in place, uses the extra width to reveal more of one shared card collection, and lets the driver bring a chosen card nearer. Getting there required separating the brief from later assumptions, researching patterns I could actually use, comparing width strategies on a frozen baseline, challenging the value of each card, simplifying the chrome, and building an interactive prototype so the behavior could be judged rather than only described.

This is a design proposal for an interview thought-project: an automotive-informed concept. Production integration, compliance certification, and driver testing sit outside the work.

## Understanding the constraint

The fixed-size rule changed the way I approached adaptation. Enlarging cards, stretching the map, or designing a separate wide-screen dashboard would have avoided the actual problem, which is component reuse. A layout can reuse every dimension and still waste the extension, move important content away from the driver, or give the two widths different behavior.

I separated three kinds of statement before drawing. The brief required two canvases, identical component width and height, and an explanation of information architecture, zoning, layout, and economical reuse. Erika’s later clarification accepted widgets, allowed a growing map, and preferred a map that stayed the same size, with the extended display exposing a new area that had a considered purpose. Everything else was either a working assumption or a design decision.

| Brief requirements | Working assumptions | Design decisions |
| --- | --- | --- |
| 1920 × 720 and 2880 × 720 | Left-hand drive; width extends to the right | Keep the driver-side core in the same place |
| Identical component dimensions | Essential instrumentation lives on a separate cluster | Use the extra width to reveal existing cards |
| Explain IA, zoning, layout, and reuse | Volume and voice are available on hardware | Focus the prototype on the driving Home |
| Home wireframes and prototypes at both sizes | One shared route and one shared audio session | Give both widths the same inventory |

The two sizes are hardware profiles: two fixed canvases. Only the canvas width, the number of visible cards, and the passenger climate anchor change. The map stays 824 × 544. Each Home card stays 448 × 544. The gap between cards stays 32 pixels, so the pitch is 480. Two further cards and two gaps are exactly 960 pixels.

I also separated three meanings of priority, because they were being treated as one. Visual priority is what should be noticed first. Access priority is what should be easy to reach. Home-space priority is how much permanent area a function deserves. Climate is the clearest example. It needs reliable access. It does not need a large Home card. Home itself should be easy to find. It does not need to be the brightest object on the screen.

The scope was narrowed on purpose. Pixel density, viewing distance, physical touch geometry, packaging, localization, and a full driving-restriction matrix were set aside. The principles that still governed the composition were hierarchy, restrained density, predictable access, a sensible relationship to the driver, and a reluctance to move important controls without a reason.

## How the process was run

The earliest work mixed four decisions: what Home should contain, where each function belongs, how width adaptation works, and how the surfaces look. Styling often arrived before the geometry was settled, so provisional screens looked finished. Some exploratory pairs also changed the 1920 architecture at the same time as the 2880 strategy. A wider screen could then look better because the whole architecture had changed, which made it impossible to judge the extension itself.

The correction was to hold the content and the narrow baseline still, compare width mechanisms against that baseline, choose a mechanism, and only then refine appearance. A concept that required a redesigned 1920 Home was recorded as a separate architecture, and kept out of the comparison of ways to use the extra 960 pixels.

The sequence that followed was the one the project needed:

1. Frame the problem. Separate the slides, Erika’s clarification, the assumptions, and the superseded guidance.
2. Define Home. Decide what persists, what is primary, and what is a detail.
3. Research precedents. Look for structural patterns in production systems, and transfer those patterns without copying their resize behavior.
4. Compare zoning. Study the width strategies as pairs at a common scale, with the same sample content.
5. Resolve geometry. Publish one pitch, one set of component sizes, and two explicit profiles.
6. Explore appearance. Try visual languages on that frozen geometry.
7. Prototype and evaluate. Implement both widths in one renderer, then test whether the rules survive interaction.
8. Revise content and access. Once the driving scenario was the only scenario on screen, remove cards and controls that could not justify themselves, and give the remaining movement a purpose.

Each stage produced a decision that the next stage was allowed to rely on. Visual novelty was not allowed to outweigh a coherent reuse argument.

## Research: patterns that could change a decision

Research was organized around questions that could affect the width strategy. A general survey of automotive interfaces would have produced references. It would not have produced a layout rule.

The useful questions were structural. Which controls stay available when the content changes? How do secondary tasks sit beside navigation? Does a function need a permanent Home card, or does it need a reliable point of access? What can 960 pixels do: show more of a scene, separate existing modules, or expose content that was previously one tap away?

European examples supplied the first set of patterns. Volkswagen’s ID.7 material separates app access and climate from the main workspace, which supported a persistent shell around a changeable content area. BMW QuickSelect keeps a map-oriented Home with direct access near the driver. Hyundai’s split-screen settings show that an existing secondary view can sit beside a primary task. Apple’s vehicle guidance separates the main task from adjacent regions. Mercedes’ zero-layer thinking was useful as a caution. Surfacing relevant content can be a product idea, and in this project it stayed short of a prediction service. None of these examples follow a two-resolution contract in which every component keeps its pixel size. They were patterns to examine.

A later pass through Chinese automotive HMIs asked the same question under our stricter rule. Flyme Auto separates a stable shell, compact information, and temporary tasks, and it adapts across screen formats. The transferable idea was to keep the map and the global controls still, and to use extra width so a summary and its detail can coexist. The boundary was equally important: expandable cards, AI windows, and a dynamic window manager do not fit a fixed-pixel brief. XPENG’s manuals describe stable bars around simultaneous applications. The coexistence is useful. The movable divider is incompatible with identical component sizes. Voyah’s browsable card strip supported a collection model and also challenged the assumption that every domain needs a full-height card. BYD’s widget home and NIO’s replaceable tiles reinforced a distinction I was already using: a domain can have a compact Home presence and a deeper task view. Geely’s panoramic panel showed that a continuous screen can still be divided by occupant role. That reading stayed an open question, because the brief never said the extra area was a passenger display.

The research found mechanisms. It found no verified production example of our exact contract. An interface being in production does not prove it is optimal, and a screenshot does not reveal component architecture, distraction performance, or engineering cost. NHTSA guidance and the public scopes of the relevant ISO standards were used to frame validation questions. They were not used as certification. No driver interviews, simulator sessions, or in-car measurements were part of this project.

Three themes survived into the design.

Persistent access and content have different jobs. Climate and system navigation can remain available without occupying the main workspace.

Additional width can preserve context. Showing something that already exists, beside the task that is already on screen, gives the extension a purpose without inventing a wide-only feature.

Availability is different from permanent visibility. A function can belong to the system without receiving equal space in every Home state. That distinction later decided Phone’s default position, and it decided the fate of Saved Places while driving.

## Exploring what the wider display could do

Before any visual language was chosen, I compared ways of using the extra width. Each candidate had to explain a specific gain, and each had to keep component sizes identical.

A quiet extension kept the 1920 composition and left the added area largely empty. It protected consistency and showed the difference between calmness and usefulness. The extension still had no job. Occupying the width and making use of it turned out to be separate problems. Spreading the same elements farther apart used more pixels and created more distance from the driver.

Expanding the map was the most familiar alternative. A wider scene could add context without adding an application. Erika’s clarification preferred a fixed map, and the stricter rule I adopted kept the map viewport itself fixed. Map expansion was therefore set aside, even though the clarification would have allowed it. A related study, with stable overlays on a larger map, taught the same lesson and depended on the same unresolved permission.

Recomposing the screen into separate regions could reduce overlap without resizing anything. In one study the map moved away from the cards. Separation improved, and the map moved farther from the assumed driver. Geometry reuse did not, by itself, make that movement acceptable.

Distribute took the existing modules and spaced them across the wide canvas. Reuse was strong and the task benefit was weak. Shared control bench moved shared functions toward the passenger side. That might suit a defined shared task, and it duplicated controls whose ownership and reach were still assumptions. A new passenger environment would have given the extra area a strong occupant purpose. It would also have required services, accounts, and isolation that the brief did not provide. All three were recorded as alternatives. Unfold was the one taken forward: the driver-side core stays put, and the extension reveals more of the existing task set.

Two later studies tested whether equal full-height cards were the right family. A mixed grid kept the map at 824 × 544 and introduced shorter Media and Phone cards, stacked to the same 544-pixel column as a full Journey or Places card. The narrow Home could show more domains at once. The wide Home could keep a summary and open a detail beside it. The trade-off was a less regular browsing model, and a weaker visual relationship when a player and its queue were far apart. A second study, the retained-detail arrangement, asked whether a summary should stay visible while its detail is open. Queue was the strongest case, because playback could continue while a track was inspected. Journey partly repeated the map. Phone settings was a weak case: two favourite contacts beside a connection panel did not repay the space. The questions it left open are still open. Equal cards were kept in the final prototype because they give both widths one browsing and selection model. Regular geometry does not mean every card has an equal amount of useful content. The mixed-height study remains a useful comparison beside the chosen family.

## The chosen system

The layout that carries the concept keeps the rail and the map in the same place at both widths. The card area extends to the right.

| Element | 1920 × 720 | 2880 × 720 |
| --- | --- | --- |
| Access rail | 88 × 544, at the left | Same size and position |
| Map | 824 × 544 | Same size and position |
| Home card | 448 × 544 | 448 × 544 |
| Cards visible at once | Two | Four |
| Collection | Media, Journey, Phone, Ahead | The same four |

The first part of the screen is the driver region: time and the Home context in the rail, the map with its maneuver and trip summary, and the driver temperature. A task card then occupies the next 480-pixel slot. At 1920 a second card fills the canvas. At 2880 two further slots appear. Passenger temperature follows the right edge of the content. Driver temperature and the map do not.

Both displays share one state: the route, the stop, playback, the phone connection, and the two temperatures. Changing width changes how many cards are on screen. It does not fork the feature set. There is no wide-only application. The prototype uses one renderer for both profiles, which demonstrates the intended reuse at concept level. It does not measure production engineering or test savings. A full redraw of the screen on each state change is an implementation convenience of this prototype. A vehicle program would replace that with its own rendering architecture.

Details reuse one 448 × 544 panel. Queue, device settings, route overview, route conditions, applications, and vehicle comfort open in a card slot. The covered card drops out of focus. The map, the other visible cards, and climate stay usable. Close or Escape restores the card. That non-modal behavior is part of the reuse argument: depth does not require a second screen size.

## The turning point: visibility did not solve access

Once all four cards were visible at 2880, the carousel was questioned. If nothing is hidden, why slide?

The reason for keeping movement was the driver-only case. A card at the far end of a 2880-pixel display can be seen and still be a poor reach. Removing the carousel would have answered the visibility question and left the access question open. The movement needed a job beyond revealing hidden items. It needed to bring farther content toward the driver.

A named selector sits with the driver temperature, in a fixed place at both widths. Media, Journey, Phone, and Ahead can each be brought to the near side of the card area. At 1920 the selector is also how the driver reaches the pair that is currently off screen. At 2880 it is how the driver brings Phone or Ahead across without stretching to the far card. Swiping remains available, and the collection wraps. The selector shows which card is beside the map. The earlier dots and previous/next arrows were removed once they repeated the selector.

This is an access hypothesis. Moving cards changes their positions, and a driver may have to re-find a card that was just in view. A later study would need to learn whether people understand the selector, and whether bringing content near is preferable to leaving the wide layout still. Vehicle geometry and physical reach would have to be part of that study. The brief never specified where the screen is mounted.

## Choosing content for the driving scenario

Defining Home was a product decision, because the brief did not supply a mandatory inventory. The early inventory tried to cover orientation, audio, the current journey, preparation for a destination, and communication. Persistent playback, a journey panel, and saved destinations shared the task area. Phone was kept reachable without a permanent connected-phone card. Weather, profile, prediction, and a passenger ecosystem were excluded because they occupied space without serving the layout argument.

The prototype was then narrowed to the Home while driving. Parked demonstrations had made destination editing and queue editing look useful. In the driving scenario those actions stay visible and unavailable. Saved Places, whose main action is to start or change a route, had little to offer on that screen. Extra width made the weakness more obvious: a balanced grid still fails if one card has no job in the state being shown.

The default pair became Media and Journey. Playback and the current trip are the two things the narrow Home shows first. Phone stays in the collection. It can be brought beside the map, and it does not consume one of the two default positions.

The fourth card became Ahead. In the sample route it shows Cedar Services as upcoming services: distance, what is there, and whether the stop is already part of the journey. With no route, the same card can describe arrival context for the chosen destination. Ahead uses the project’s existing sample data as a bounded illustration of upcoming services. Its role is to give the extended view something worth seeing while driving, in place of a destination editor the driver is not allowed to use.

Journey still carries destination, arrival or the next stop, route conditions, and the route overview. When there is no route, it shows the current area and an illustrative range, and it points at Ahead. The map remains a local, heading-up driving view: the next junction, the distance to it, and a short trip summary. The full itinerary lives in the Journey detail, where it has room, instead of competing with the maneuver on the map.

## Simplifying the visual hierarchy

Appearance was explored only after the geometry and the width rule were stable. An earlier daylight study, Paper with a cobalt accent, was chosen against Tide and Signal on the same composition. Those three treatments showed that palette could change without changing the layout. The light studies stayed studies. From that point the visual reference was the dark Nightglass language.

The current language is Nightglass: a near-black canvas, dark cards, a cyan route and selection, and a small set of radii and spaces used everywhere. 8, 12, 16, and 24 pixel corners, with circles reserved for icon-only controls. Spacing stays on a 4, 8, 12, 16, 24, and 32 pixel scale. Typography is Instrument Sans, set lightly, in sentence case. The map is an original schematic, with a distinct road hierarchy, a cased cyan route, and a separate marker for the vehicle. Album art fills the Media card behind a dark scrim so the title and the transport controls remain readable. Reference images guided tone, corner radius, and the relationship between the sidebar and the map. They were not reconstructed control for control. Greeting lines, predictive routing, and decorative vehicle scenes were left out, because each of those would have been a new information-architecture decision.

The chrome was reduced to match that hierarchy. Time moved into the sidebar. Home sits first among the icons and is the selected context. Media, Phone, and Apps remain visible as part of that sidebar. In this prototype they indicate the Home context. A complete application suite stays outside the sidebar’s role. The top bar, with its domain label, scenario tag, and slider, was removed so the map could align with the content and fewer regions would compete around the workspace.

Climate became two compact temperature groups, driver and passenger, anchored to the outer edges of the content. Fan and defrost left the Home row and live in the vehicle detail, reached from Apps. The widget selector sits beside the driver temperature and fills the rest of the map’s width, in the same place at both sizes. That placement keeps frequent comfort inside a fixed footprint and gives card access a permanent address that does not depend on which cards are visible.

The review environment is separate from the product. The two layouts are stacked and left-aligned at one scale, on a neutral gray field, so the right-hand expansion can be compared directly. A control outside the screens can show either size alone. Those controls exist for critique. They are not part of the vehicle Home.

## What prototyping added

Static pairs could show that the sizes matched. They could not show whether bringing a card near actually worked.

The first carousel snapped. Order changed, and the cards did not travel. That felt like a reorder rather than a gesture, and it failed the rationale: if movement is how content comes toward the driver, the movement has to be visible. The ribbon is now one track with a full cycle of cards buffered on either side. A horizontal drag or a selector choice animates to the next position and then settles, at both 1920 and 2880. A short drag returns to the current position. Wrapping is the same action as moving one slot, so the last card and the first card are not a special case. While the track is moving, a tap on a card is ignored, so a drag does not become an accidental detail. Reduced motion skips the travel and applies the new order directly.

Building that behavior surfaced requirements that the layout drawings had left implicit. The selector, the swipe, and the keyboard arrows on the strip had to agree. Opening a detail had to dismiss cleanly when the driver browsed away. Switching width had to keep the same card beside the map. The driving restrictions had to be identical at both sizes: queue selection and route edits stay unavailable, and the screens say so.

The prototype was developed through AI-assisted exploration and implementation. Direction, critique, and selection stayed with the design. Geometry checks and state checks support the behavior that was built. They do not substitute for watching someone use it, and they do not establish glance, reach, or distraction performance.

## Outcome and reflection

The outcome is one Home across two widths. The map stays a fixed driving view. Component dimensions stay identical. The wider layout shows two more cards from the same collection, Media, Journey, Phone, and Ahead. Media and Journey are the default driving pair. The selector and the wrapping strip are how any other card is brought beside the map. Driver and passenger temperature stay at the edges. Depth opens in a single reusable panel and leaves the rest of Home usable.

The process mattered as much as the final arrangement. Framing the brief separately from assumptions kept the work from treating every early sketch as a requirement. Research supplied mechanisms and a clear boundary around what those mechanisms do not prove. Comparing width strategies on one baseline made the choice of Unfold legible. Freezing the geometry before styling prevented a palette from pretending to be an architecture. The mixed-height and retained-detail studies kept the equal-card decision honest. Narrowing the prototype to driving exposed Saved Places as weak content and produced Ahead. The access review changed the carousel from a way to reveal hidden cards into a way to bring a chosen card nearer. Prototyping then made that rule something that can be tried, at both sizes, in the same system.

Adaptation, in this project, has three layers. Geometry explains how the screen fits together. Content explains why the extra space deserves to exist. Interaction explains how a person reaches what the layout makes available. A layout that only solves the first layer can still fail the assignment.

What I would test next is specific. Whether people understand the selector. Whether moving cards helps or makes them harder to track. Whether Media and Journey are the right default pair, and whether Ahead earns its place against other driving information. Whether the equal-size family gives Phone and Ahead an appropriate amount of space, using the mixed-height study as the comparison. Those questions need the actual screen position in the vehicle. They cannot be closed from the prototype.

The result is a design proposal with an inspectable strategy: one Home, fixed components, a reasoned use of 960 pixels, and access treated as part of the problem rather than something left for later.
