---
title: '77. The Mountains (step 1 of 3): terrain, snow, caves, ore, plants'
description: 'The Mountains (step 1 of 3): terrain, snow, caves, ore, plants'
section: development
kind: devlog
entry: 77
devlog_id: '77'
date: '2026-10-05'
session: Session 4 — The top rungs
tags:
  - mountains
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-05__01_mountain_range.jpg
    alt: A mountain range
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-05__02_mountain_summit.jpg
    alt: Snow on a summit
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-077-the-mountains-step-1-of-3-terrain-snow-caves-ore-plants
source: Claude handoff · development/devlog-077-the-mountains-step-1-of-3-terrain-snow-caves-ore-plants.md
related: []
updated: '2026-10-11'
---

# The Mountains (step 1 of 3): terrain, snow, caves, ore, plants

- **Ranges** rise 50-70 blocks above the lowlands, with sharper peaks along
  ridges (a second noise). They keep well away from towns; country roads cut
  passes through them.
- **Bare rock and scree** on steep and high ground, stone all the way up (no
  dirt under the rock). **Snow** above the snowline (y 62, ragged), with a
  powdered-rock side, and **thin snow cover** on rock just below it.
- **Caves** run up inside the mountains (to y 100), keeping a 10-block roof.
- **Mountain ore**: coal, iron, copper and tin through the rock, and **gold**
  high up only (y 62+).
- **Plants**: dwarf **pines** (a dark cone of needles) below the treeline, no
  trees above it; heather, white **alpine flowers**, moss, lichen, pebbles.
  Puffballs are the mushroom here; the mycelium spreads slowly (0.3).
- Old mines and quarries (with rockfalls) turn up on mountain roads too.
- The journal's Biomes page has a Mountains entry and picture; the compass
  knows the strains.
- Fix: giant mushrooms only grow in the Sporelands proper (they could stand
  where a range overlapped one).
- `tests/mountain_shots.gd` photographs a range.

![A mountain range](/images/encyclopedia/game/screenshots__2026-10-05__01_mountain_range.jpg)

*Development gameplay capture*
![Snow on a summit](/images/encyclopedia/game/screenshots__2026-10-05__02_mountain_summit.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-05/03_mountain_pines.png: Dwarf pines at the treeline)*
