---
title: '89. Cartography (step 1 of 3): maps you draw by walking'
description: 'Cartography (step 1 of 3): maps you draw by walking'
section: development
kind: devlog
entry: 89
devlog_id: '89'
date: '2026-10-06'
session: Session 4 — The top rungs
tags:
  - cartography
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-06__01_map_page.jpg
    alt: The Map page
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-06__02_map_zoomed_out.jpg
    alt: Zoomed out
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-089-cartography-step-1-of-3-maps-you-draw-by-walking
source: Claude handoff · development/devlog-089-cartography-step-1-of-3-maps-you-draw-by-walking.md
related: []
updated: '2026-10-11'
---

# Cartography (step 1 of 3): maps you draw by walking

- **Cartography**, a new field of knowledge (notes begun at the writing
  desk like the others; its rare book is an atlas). You learn it from lands
  you'd never seen (a lot), places you find, and each new sheet of map you
  start.
- **Crude maps** (writing desk: cloth and ink). Carry one and the **Map
  page** opens in the Journal, for good. The land within 40 m draws itself
  as you walk (`world/cartography.gd`, 8 m cells).
- **A sheet holds 600 cells** (about a town and its edges). When it's
  full, the next map in your pack is started. With none left, mapping stops
  ("Your map is full") and what's drawn stays.
- **The Map page** (`ui/map_view.gd`):
  - Colours: the land's own colour (lighter the higher it stands), water,
    roads, rails, town blocks, the works, snow.
  - You're an arrow facing the way you look. North is up.
  - Drag or the right stick pans; the wheel or LB/RB zooms; Home recentres.
- **What the levels give**:

| Cartography | Unlocks |
|---|---|
| 0 | the compass's heading and land; crude maps |
| 1 | places you find show on the compass |
| 2 | places and your flags show on the map |
| 3 | pins without flags, a minimap (not built yet) |
| 4 | mapping needs no sheets |

- The compass at level 0: marker flags still show (they're free), but
  found places don't ("You've nothing to mark it on yet"). Worlds saved
  before this keep their places on the compass.
- Saved with the world (`WorldState.mapped`).
- It's also a look at the worldgen: towns, rivers, ranges and the Rustbelt
  at a glance.
- `cartography_test`. Next: the cartography table and better maps; then
  globes, wall maps, atlases and paper.

![The Map page](/images/encyclopedia/game/screenshots__2026-10-06__01_map_page.jpg)

*Development gameplay capture*
![Zoomed out](/images/encyclopedia/game/screenshots__2026-10-06__02_map_zoomed_out.jpg)

*Development gameplay capture*
