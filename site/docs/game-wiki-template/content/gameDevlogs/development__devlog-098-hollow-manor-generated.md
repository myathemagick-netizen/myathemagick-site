---
title: 98. Hollow Manor, generated
description: 'The one-box manor of §97 is replaced by a house that''s laid out per estate (world/manor.gd, Manor.build, seeded): hallways for roads, rooms for buildings, on a 9 by 9 grid of 5 m bays.'
section: development
kind: devlog
entry: 98
devlog_id: '98'
date: '2026-10-06'
session: Session 4 — The top rungs
tags:
  - hollow wood
  - creatures
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-06__32_gen_manor.jpg
    alt: From the drive
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-06__33_gen_manor_side.jpg
    alt: From the west
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-098-hollow-manor-generated
source: Claude handoff · development/devlog-098-hollow-manor-generated.md
related: []
updated: '2026-10-11'
---

# Hollow Manor, generated

The one-box manor of §97 is replaced by a house that's laid out per estate
(`world/manor.gd`, `Manor.build`, seeded): hallways for roads, rooms for
buildings, on a 9 by 9 grid of 5 m bays.

| Part | How |
|---|---|
| Massing | a main block three storeys high at the front; 4-6 wings of one to three storeys stuck onto its outside; two patches built lower. Uneven in plan and height, and different for every estate |
| Halls | a spine back from the front door, a cross hall out to the wings, branches that end dead |
| Entrance hall | open through two storeys, the grand stair up its middle to a gallery; a back stair on from there to the top floor |
| Rooms | every other bay; some run together. A doorway into each from a hall or from the room before. Dining room, kitchen, library and drawing room always; then bedrooms, music rooms, studies, nurseries, a chapel, storage. Upstairs rooms nothing reaches stay sealed |
| Conservatory | always: glass on iron ribs, one storey, attached at one side (the separate glasshouse is gone) |
| Towers | one or two on outside corners, two or three storeys past the rest, with a steeper roof |
| Roofs | each part its own, 1:1 hips (the towers 2:1), in `roof_slate_dark`; brick chimneys at uneven places; a `roof_finial` or `weather_vane` on peaks |
| Windows | three high, in pairs: plain glass, dark `stained_glass`, or `stained_glass_lit` (yellow, glows: about three in ten upstairs) |
| Halls' furniture | `suit_of_armor` ("Look"), grandfather clocks, candelabra, chandeliers |

- The four manor paintings hang on inside walls; the estate's props now keep
  their floor apart (`storey`), so things on different floors don't merge.
- Estate voxels are sorted into 16 m columns for the generator.
- Not yet: the cellar and panic vault, room doors (doorways are open),
  walkways between parts upstairs, porches and bay windows, the clocks'
  ticking (wired as `clock_tick`, the sound isn't made yet), moving the
  graveyard out to the roadside. The entrance hall is one bay (4 m) wide.
- The `hollow_manor` template of §97 is no longer placed.
- `estate_test` covers the layout, the stair, the lit windows, the props.

![From the drive](/images/encyclopedia/game/screenshots__2026-10-06__32_gen_manor.jpg)

*Development gameplay capture*
![From the west](/images/encyclopedia/game/screenshots__2026-10-06__33_gen_manor_side.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-06/34_gen_manor_back.png: From behind)*
*(image not bundled: docs/screenshots/2026-10-06/35_gen_manor_night.png: At night: lit windows)*
*(image not bundled: docs/screenshots/2026-10-06/36_gen_hall.png: The entrance hall and grand stair)*
*(image not bundled: docs/screenshots/2026-10-06/37_gen_gallery.png: From the gallery)*
*(image not bundled: docs/screenshots/2026-10-06/38_gen_conservatory.png: The conservatory)*
*(image not bundled: docs/screenshots/2026-10-06/39_gen_manor_props.png: Armour, finial, weather vane and the rest)*
