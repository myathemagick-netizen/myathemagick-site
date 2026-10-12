---
title: '91. Cartography (step 3 of 3): globes, wall maps, atlases, paper; towns drawn properly'
description: 'Cartography (step 3 of 3): globes, wall maps, atlases, paper; towns drawn properly'
section: development
kind: devlog
entry: 91
devlog_id: '91'
date: '2026-10-06'
session: Session 4 — The top rungs
tags:
  - cartography
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-06__06_map_towns.jpg
    alt: Towns on the map
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-06__07_globe_wall_map.jpg
    alt: The globe and the wall map
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-091-cartography-step-3-of-3-globes-wall-maps-atlases-paper-towns-drawn-pro
source: Claude handoff · development/devlog-091-cartography-step-3-of-3-globes-wall-maps-atlases-paper-towns-drawn-pro.md
related: []
updated: '2026-10-11'
---

# Cartography (step 3 of 3): globes, wall maps, atlases, paper; towns drawn properly

- **Towns on the map** were flat slabs. Now:
  - Streets always show (a 5 m street no longer slips between 8 m cells).
  - Each building is drawn as its roof, a shade apart from its neighbours:
    brown houses, grey shops and offices, pale landmarks, rust for the
    works.
  - Yards and empty lots stay the colour of the land.
- **Globes and wall maps** in libraries, museums and offices (and a wall
  map in the works office). One you find says **Study**: it teaches
  Cartography once, and after that it's just Look or Spin. A spun globe
  turns and tells you where your finger landed.
- **Atlases** (rare, in bookshelves): read one (LT) and a land you've never
  seen goes into the Journal's Biomes page, with Cartography for it. If
  you've seen them all, it still teaches a little.
- **Paper**:
  - Take a book apart for three sheets (writing desk); wall maps and
    globes give it when taken apart.
  - Two sheets and ink make a crude map; four and a cloth bind a blank
    book.
- **A globe of your own** (cartography table, Cartography 2): place it,
  spin it.
- `cartography_test` covers all of it.

![Towns on the map](/images/encyclopedia/game/screenshots__2026-10-06__06_map_towns.jpg)

*Development gameplay capture*
![The globe and the wall map](/images/encyclopedia/game/screenshots__2026-10-06__07_globe_wall_map.jpg)

*Development gameplay capture*
