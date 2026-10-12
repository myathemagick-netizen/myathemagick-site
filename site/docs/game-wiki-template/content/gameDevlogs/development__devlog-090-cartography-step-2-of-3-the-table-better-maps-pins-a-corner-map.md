---
title: '90. Cartography (step 2 of 3): the table, better maps, pins, a corner map'
description: 'Cartography (step 2 of 3): the table, better maps, pins, a corner map'
section: development
kind: devlog
entry: 90
devlog_id: '90'
date: '2026-10-06'
session: Session 4 — The top rungs
tags:
  - cartography
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-06__03_cartography_table.jpg
    alt: The cartography table (beside the writing desk)
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-06__04_map_pins.jpg
    alt: Pins on the map
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-090-cartography-step-2-of-3-the-table-better-maps-pins-a-corner-map
source: Claude handoff · development/devlog-090-cartography-step-2-of-3-the-table-better-maps-pins-a-corner-map.md
related: []
updated: '2026-10-11'
---

# Cartography (step 2 of 3): the table, better maps, pins, a corner map

- **Cartography Table** (workbench, Cartography 1: planks, cloth, ink, a
  glass shard): a drawing board with a half-drawn map, rolled maps in a rack
  and a little globe. A station of its own.
- **Better maps**, drawn at the table. The worst sheet in your pack is used
  first.

| Map | Needs | Holds |
|---|---|---|
| Crude map (writing desk) | none | 600 cells |
| Survey map | Cartography 1 | 1800 cells |
| Fine map | Cartography 2 | 5000 cells |

- **Pins** (Cartography 3): right click on the Map page (or A on a pad, for
  the middle of the view) puts a pin there with no flag needed. Click a pin
  again to change what it marks (flag, town, farm, hut, mine, quarry,
  works, lookout, museum, library, hospital); middle click (or X) takes it
  off. Pins show on the compass too, with their distance. Saved with the
  world.
- **The corner map** (Cartography 3): a small north-up map in the top right
  of the screen, you in the middle, with places and pins on it. It hides
  while a menu's open.
- `cartography_test` covers the table, the sheets' order, pins and the
  corner map.

![The cartography table (beside the writing desk)](/images/encyclopedia/game/screenshots__2026-10-06__03_cartography_table.jpg)

*Development gameplay capture*
![Pins on the map](/images/encyclopedia/game/screenshots__2026-10-06__04_map_pins.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-06/05_minimap.png: The corner map)*
