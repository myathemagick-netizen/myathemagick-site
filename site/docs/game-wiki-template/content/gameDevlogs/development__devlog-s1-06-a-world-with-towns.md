---
title: 6. A world with towns
description: 'The terrain generator was rewritten. Buildings need flat ground, and 3D noise with overhangs has no simple "ground height", so the world is now a heightmap with real strata: grass or mycelium soil, then dirt, then stone. (Overhang...'
section: development
kind: devlog
entry: 6
devlog_id: s1:6
date: '2026-09-30'
session: Session 1 — From one brown cube to a ruined town
tags:
  - cartography
  - creatures
images:
  - src: /images/encyclopedia/game/screenshots__2026-09-30__17_town_aerial.jpg
    alt: Town aerial
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-09-30__18_town_block.jpg
    alt: Town block
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-s1-06-a-world-with-towns
source: Claude handoff · development/devlog-s1-06-a-world-with-towns.md
related: []
updated: '2026-10-11'
---

# A world with towns

The terrain generator was rewritten. Buildings need flat ground, and 3D noise
with overhangs has no simple "ground height", so the world is now a
**heightmap** with real strata: grass or mycelium soil, then dirt, then stone.
(Overhangs and caves can return later as a separate pass.)

The world is tiled into 192 m regions; some hold a town, and the starting
region always does. Towns get a road grid, flattened plateaus that blend into
the hills, and 15 m lots that each roll a building, theme, rotation to face
the road, and ruin/growth. Every town has its own character: how hard it fell
comes from the town, how far the fungus got comes from the land around it.
The whole layout is a pure function of the world seed, so the voxel generator
(on background threads), the furniture spawner and the mushroom scatter all
agree without talking to each other.

![Town aerial](/images/encyclopedia/game/screenshots__2026-09-30__17_town_aerial.jpg)

*Development gameplay capture*
![Town block](/images/encyclopedia/game/screenshots__2026-09-30__18_town_block.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-09-30/19_spawn_street_level.jpg: Spawn street)*

A camera meant for the street happened to land inside an apartment, which
confirmed furniture really does spawn in generated buildings:

*(image not bundled: docs/screenshots/2026-09-30/20_inside_generated_apartment.jpg: Inside a generated apartment)*

Wild mushrooms scatter over the land, densest where a "mycelium field" is
strong: tan and rust on grass, teal and violet deep in fungal ground, and the
rare giant. The mycelium soil first read as **snow** from a distance, then
as a repeating grid of threads, before being muted into felted soil.

*(image not bundled: docs/screenshots/2026-09-30/21_wild_mycelium_closeup.jpg: Wild close-up)*
*(image not bundled: docs/screenshots/2026-09-30/22_wild_mycelium_wide.jpg: Wild wide)*
