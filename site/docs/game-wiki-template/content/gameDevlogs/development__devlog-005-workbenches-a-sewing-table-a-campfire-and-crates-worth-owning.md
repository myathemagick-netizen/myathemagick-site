---
title: 5. Workbenches, a sewing table, a campfire, and crates worth owning
description: 'Playtest: the storage crate was just the crate found in town. Player-made furniture now has its own look, built in the voxel furniture generator:'
section: development
kind: devlog
entry: 5
devlog_id: '5'
date: '2026-10-01'
session: Session 3 — Crafting by hand
tags:
  - creatures
  - tools and tests
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-01__19_new_furniture.jpg
    alt: The new furniture
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-01__20_workbench_menu.jpg
    alt: The workbench
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-005-workbenches-a-sewing-table-a-campfire-and-crates-worth-owning
source: Claude handoff · development/devlog-005-workbenches-a-sewing-table-a-campfire-and-crates-worth-owning.md
related: []
updated: '2026-10-11'
---

# Workbenches, a sewing table, a campfire, and crates worth owning

Playtest: the storage crate was just the crate found in town. Player-made
furniture now has its own look, built in the voxel furniture generator:

- **Storage Crate** (Spore, 18 slots, by hand): pale salvaged boards with
  dark gaps, an overhanging lid, rope handles and a stencilled patch.
- **Reinforced Crate** (Sprout, 27 slots): dark boards, metal corners and
  bands, a brass latch.
- **Strongbox** (Mycelial, 36 slots): riveted steel, stepped lid, lock
  plate, and teal growth creeping along its seams.
- **Workbench**: a thick top, a vise, a shelf of planks, a saw and hammer
  left on it.
- **Sewing Table**: an iron-framed treadle machine with brass decals, a red
  spool and folded cloth.
- **Campfire**: a ring of stones round crossed logs and glowing flames. It
  lights the street like a big torch.

The found crate (right in the render) stays loot.

![The new furniture](/images/encyclopedia/game/screenshots__2026-10-01__19_new_furniture.jpg)

*Development gameplay capture*

**Stations.** Using one (X) opens its own crafting screen with the same list
and detail panel as crafting by hand (the panel is now shared code). Unlike
hand recipes, a station shows everything it can make: standing at the bench
is how you find out what it's for.

| Station | Made | Makes |
|---|---|---|
| Workbench | by hand: 8 planks, 2 scrap | Reinforced Crate, Strongbox, Sewing Table, Chair, Table |
| Sewing Table | at the workbench | mend Clothes up to Sprout, Cloth Hood, Hand Wraps, Trousers, Rag Boots, Satchel, Padded Jacket (Mycelial) |
| Campfire | by hand: 3 planks, 4 stone | Roasted Puffball, Mushroom Skewer, Hot Stew |

Sewing fills every gear slot, and each piece has stats (warmth, protection,
pack space) that the gear pop-up compares. Cooking raises food to Sprout
quality. The stew is the point: two rotten cans you'd never risk eating
become one safe, filling meal.

Bigger crates needed a bigger screen: a strongbox's 36 slots show as
three rows of twelve so the crate and your pack still fit on one screen.

![The workbench](/images/encyclopedia/game/screenshots__2026-10-01__20_workbench_menu.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-01/21_sewing_table_menu.jpg: The sewing table)*
*(image not bundled: docs/screenshots/2026-10-01/22_campfire_night.jpg: Cooking by firelight)*
*(image not bundled: docs/screenshots/2026-10-01/23_strongbox_open.jpg: A strongbox open)*
*(image not bundled: docs/screenshots/2026-10-01/24_stations_in_town.jpg: A little camp in the street)*

`tests/station_test.gd` builds the whole chain from scratch: workbench by
hand, then sewing table and crates at the bench, sewing, cooking at night,
and opening each crate tier.
