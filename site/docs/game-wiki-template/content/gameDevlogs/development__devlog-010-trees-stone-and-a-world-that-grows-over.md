---
title: 10. Trees, stone, and a world that grows over
description: tests/spreadtest.gd finds the features around spawn (none in towns), checks a living, dead and fungal tree and a rock in the voxels, runs the spreading rules on a test rig (soil, overgrowth, vines to the cap, vines falling with th...
section: development
kind: devlog
entry: 10
devlog_id: '10'
date: '2026-10-01'
session: Session 3 — Crafting by hand
tags:
  - tools and tests
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-01__42_wilds_trees_rocks.jpg
    alt: 'The wilds: trees and stone'
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-01__43_tree_tan_mycelium_soil.jpg
    alt: A tree on tan mycelium soil
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-010-trees-stone-and-a-world-that-grows-over
source: Claude handoff · development/devlog-010-trees-stone-and-a-world-that-grows-over.md
related: []
updated: '2026-10-11'
---

# Trees, stone, and a world that grows over

**Trees and outcrops.** The land between towns had nothing standing on it.
Now wild ground (never in or near a town, never in water) has sparse
**trees** on a hashed grid: mostly living trees with dull, dusty leaf
canopies (a new see-through leaf block), some **dead** ones (bare trunks
with stubs), and in strong mycelium **fungal** ones: rotting trunks
shedding their leaves, a hyphal mat at the root and glowing spore blooms
on the bark. **Stone outcrops** break through the soil here and there.
They're part of terrain generation, so every seed has them in the same
places.

**Mycelium soil is tan now.** Its top was a grey felt; it's now a dry,
tan-brown soil the network has bound together, with paler felt patches. The
first try was too pale and read as sand, so it went a step darker. It's a
**full block** (soil with a felted top), not a covering. On buildings the
fungus works the same way: blocks turn into **overgrown** versions.
**Vines** are the covering: a thin panel against a wall that you walk
through but can cut (they drop **Plant Fiber**, which also makes torches).

**Spreading** (`world/spread.gd`), slowly, around the player, like weather:
- grass and dirt touching fungal ground become mycelium soil;
- concrete, brick, drywall and wallpaper touching anything fungal turn
  overgrown; planks and siding rot; carpet felts over;
- vines start at the foot of walls and tree trunks standing on vegetated
  ground, climb (up to 9 blocks), spread sideways and trail down; breaking
  a wall drops the vines on it.
How fast depends on the local mycelium strength (and moisture for vines).
Changes are ordinary voxel edits, so they're saved with the world.

![The wilds: trees and stone](/images/encyclopedia/game/screenshots__2026-10-01__42_wilds_trees_rocks.jpg)

*Development gameplay capture*
![A tree on tan mycelium soil](/images/encyclopedia/game/screenshots__2026-10-01__43_tree_tan_mycelium_soil.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-01/44_dead_tree.jpg: A dead tree)*
*(image not bundled: docs/screenshots/2026-10-01/45_fungal_tree.jpg: A fungal tree)*
*(image not bundled: docs/screenshots/2026-10-01/46_stone_outcrop.jpg: A stone outcrop)*
*(image not bundled: docs/screenshots/2026-10-01/47_building_before.jpg: A building before...)*
*(image not bundled: docs/screenshots/2026-10-01/48_building_after_spread.jpg: ...and after the vines have had a while (sped up))*

`tests/spread_test.gd` finds the features around spawn (none in towns),
checks a living, dead and fungal tree and a rock in the voxels, runs the
spreading rules on a test rig (soil, overgrowth, vines to the cap, vines
falling with their wall), and lets a real building grow over.
