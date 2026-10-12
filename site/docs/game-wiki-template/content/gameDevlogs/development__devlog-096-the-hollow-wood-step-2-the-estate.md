---
title: '96. The Hollow Wood, step 2: the estate'
description: 'world/estates.gd (Estates, built like Summits: lazily per 384 m cell, cached, handing the generator voxels, lots and props). Where a wood is deep, wide and dry enough, a walled park stands in it, its front to the south.'
section: development
kind: devlog
entry: 96
devlog_id: '96'
date: '2026-10-06'
session: Session 4 — The top rungs
tags:
  - hollow wood
  - creatures
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-06__18_estate_above.jpg
    alt: The estate from above
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-06__19_estate_bridge.jpg
    alt: The front bridge and gate
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-096-the-hollow-wood-step-2-the-estate
source: Claude handoff · development/devlog-096-the-hollow-wood-step-2-the-estate.md
related: []
updated: '2026-10-11'
---

# The Hollow Wood, step 2: the estate

`world/estates.gd` (`Estates`, built like `Summits`: lazily per 384 m cell,
cached, handing the generator voxels, lots and props). Where a wood is deep,
wide and dry enough, a walled park stands in it, its front to the south.

| Part | What it is |
|---|---|
| Grounds | 93 by 109 m, levelled (built up where the wood lies low); no wild trees, an old lawn inside the wall |
| Stream | all the way round, three wide, its water a block below the bank |
| Bridges | arched stone: a step up at each bank, a deck clear of the water, parapets, a pier at each corner. Five wide at the front gate with lanterns, three wide at the side and back gates |
| Wall | a course of stone with an iron fence on it (`iron_fence_x/z`, a new block shape standing mid-cell), stone piers every 6 m; a tenth of the fence gone. Tall posts at the front gate |
| Drive | gravel from the gate to the house, a round forecourt with the dry fountain, `iron_lantern`s down both sides (lit, they flicker) |
| Graveyard | west of the drive, inside a low iron fence: rows of `headstone`s and `headstone_cross`es ("Read": ten epitaphs, each stone always the same one), a stone crypt with a `sarcophagus` to search |
| Glasshouse | east of the drive: an iron frame on a stone footing, most of its glass in, planters and wild greens inside |
| The house | its site (33 by 27 m) is levelled and kept clear: Hollow Manor is step 3 |

- **How many**: the world is dense, so few woods have room. On the default
  seed there are 5 in the 6 km square round home, the nearest 885 m away.
  Two estates are never within 320 m of each other.
- Finding one puts "Hollow Manor" on the compass, the journal's Places and
  the map's pin icons.
- `estate_test`.

![The estate from above](/images/encyclopedia/game/screenshots__2026-10-06__18_estate_above.jpg)

*Development gameplay capture*
![The front bridge and gate](/images/encyclopedia/game/screenshots__2026-10-06__19_estate_bridge.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-06/20_estate_gate.png: Through the gate)*
*(image not bundled: docs/screenshots/2026-10-06/21_estate_graveyard.png: The graveyard and crypt)*
*(image not bundled: docs/screenshots/2026-10-06/22_estate_glasshouse.png: The glasshouse)*
*(image not bundled: docs/screenshots/2026-10-06/23_estate_footbridge.png: A footbridge)*
*(image not bundled: docs/screenshots/2026-10-06/24_estate_drive_night.png: The drive at night)*
*(image not bundled: docs/screenshots/2026-10-06/25_estate_props.png: Lantern, headstones, sarcophagus)*
