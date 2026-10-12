---
title: 55. Green crosses; roadside places pictured
description: Green crosses; roadside places pictured
section: development
kind: devlog
entry: 55
devlog_id: '55'
date: '2026-10-04'
session: Session 4 — The top rungs
tags: []
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-04__33_roadside_farmstead.jpg
    alt: Farmstead
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-04__34_roadside_quarry.jpg
    alt: Quarry
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-055-green-crosses-roadside-places-pictured
source: Claude handoff · development/devlog-055-green-crosses-roadside-places-pictured.md
related: []
updated: '2026-10-11'
---

# Green crosses; roadside places pictured

- **No red crosses**: the hospital's sign and compass symbol, the medicine
  cabinet's door, the first-aid kit and Regeneration icons, and first-aid
  books are now a green cross (white ones stay white).
- **Roadside places in buildings.md**: `tools/gen_buildings_doc.gd` now runs
  the game's own roadside builders (`RoadNetwork._farmstead`, `_quarry`,
  `_old_mine`, `_lot`) on a flattened layout beside a strip of road and
  photographs them: a farmstead (house, barn, wild field, tractor), a roadside
  shop with its dumpster and bin, a quarry, and an old mine from outside and
  cut in half along its tunnel. The flat world is now 24 deep so there's
  stone to dig into, and buildings stand on its first air cell, as in game.

![Farmstead](/images/encyclopedia/game/screenshots__2026-10-04__33_roadside_farmstead.jpg)

*Development gameplay capture*
![Quarry](/images/encyclopedia/game/screenshots__2026-10-04__34_roadside_quarry.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-04/35_roadside_mine_cut.jpg: Old mine, cut away)*
*(image not bundled: docs/screenshots/2026-10-04/36_hospital_green_cross.jpg: Hospital, green sign)*
