---
title: 56. Parks, bridges and the wild, pictured
description: Parks, bridges and the wild, pictured
section: development
kind: devlog
entry: 56
devlog_id: '56'
date: '2026-10-04'
session: Session 4 — The top rungs
tags: []
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-04__37_park_playground_fountain.jpg
    alt: Parks
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-04__38_bridges.jpg
    alt: Bridges
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-056-parks-bridges-and-the-wild-pictured
source: Claude handoff · development/devlog-056-parks-bridges-and-the-wild-pictured.md
related: []
updated: '2026-10-11'
---

# Parks, bridges and the wild, pictured

- `docs/buildings.md` gets a **Parks, bridges and the wild** section: a
  playground and a fountain garden on a town street, both kinds of country
  bridge over a river (planks on log piles out in the wild; asphalt, concrete
  piers and metal rails near towns), what lies along the country roads
  (signpost, fallen trunk, rockfall, cairn, fungal mound, an evacuation line
  of cars, an overgrown car), and the wild trees, outcrops and giant mushrooms.
- So the pictures can't drift from the game, the pieces were pulled out into
  functions the world itself now calls: `SettlementLayout.park()`,
  `road_bridge_cell()`, `bridge_column()` (the world generator builds bridge
  columns with it), and `RoadNetwork._mound()`.
- Sound wishlist: proposed `milestone`, `milestone_claim`, `place_found`,
  `brew_learned`, `note_taken`, `journal_open`, `page_turn` (milestones share
  `level_up` with research for now).

![Parks](/images/encyclopedia/game/screenshots__2026-10-04__37_park_playground_fountain.jpg)

*Development gameplay capture*
![Bridges](/images/encyclopedia/game/screenshots__2026-10-04__38_bridges.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-04/39_roadside_dressing.jpg: Along the roads)*
*(image not bundled: docs/screenshots/2026-10-04/40_wild_features.jpg: The wild)*
