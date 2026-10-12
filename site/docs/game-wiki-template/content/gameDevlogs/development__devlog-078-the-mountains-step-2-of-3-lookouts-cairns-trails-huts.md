---
title: '78. The Mountains (step 2 of 3): lookouts, cairns, trails, huts'
description: 'The Mountains (step 2 of 3): lookouts, cairns, trails, huts'
section: development
kind: devlog
entry: 78
devlog_id: '78'
date: '2026-10-05'
session: Session 4 — The top rungs
tags:
  - mountains
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-05__04_fire_lookout.jpg
    alt: A fire lookout on a summit
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-05__05_lookout_inside.jpg
    alt: Inside the lookout
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-078-the-mountains-step-2-of-3-lookouts-cairns-trails-huts
source: Claude handoff · development/devlog-078-the-mountains-step-2-of-3-lookouts-cairns-trails-huts.md
related: []
updated: '2026-10-11'
---

# The Mountains (step 2 of 3): lookouts, cairns, trails, huts

- **Summits** (`world/summits.gd`): each region with a range has its
  highest peak found. About half carry an old **fire lookout**; the rest
  have a **stone cairn**.
- **The fire lookout** (template `lookout`): a glass cabin on log legs, a
  railed deck under wide tin eaves, and a stair up the side. Inside are a map
  table, a stool, a crate and a candle. The peak is levelled for it.
- **Trails** wind down from the lookout's stair, crossing the slope in
  switchbacks where going straight down would be too steep. They are graded:
  never more than a block a step, cut into the slope or built up on a stone
  bank. Gravel underfoot, **stone steps** wherever it climbs, and no trees on
  them. They end at the foot of the range, or at a road.
- **Mountain huts** (template `mountain_hut`): four trails in ten pass a
  stone hut near the treeline. It has a fireplace against a stone chimney, a
  bunk, a table and chairs, and a crate.
- Lookouts and huts go on your **compass** when you come near (new icons),
  and into the journal's **Places** with their own notes.
- `summits_test` checks the layout (levelled tops, unbroken trails, no
  steps over a block, no trees on trails) and the built lookout (platform,
  gravel trail, furniture). It photographs a lookout, a trail, a hut and a
  cairn.

![A fire lookout on a summit](/images/encyclopedia/game/screenshots__2026-10-05__04_fire_lookout.jpg)

*Development gameplay capture*
![Inside the lookout](/images/encyclopedia/game/screenshots__2026-10-05__05_lookout_inside.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-05/06_mountain_trail.png: A trail of stone steps down the mountain)*
*(image not bundled: docs/screenshots/2026-10-05/07_mountain_hut.png: A mountain hut near the treeline)*
*(image not bundled: docs/screenshots/2026-10-05/08_cairn.png: A cairn)*
