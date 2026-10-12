---
title: '88. The Rustbelt: green against the rust, and what''s left standing'
description: 'From the player''s read of the concept sheet: break up the orange, and let the place tell its story (people left, it rusted, it''s still wet).'
section: development
kind: devlog
entry: 88
devlog_id: '88'
date: '2026-10-05'
session: Session 4 — The top rungs
tags:
  - rustbelt
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-05__30_skeleton.jpg
    alt: The frame of a building long gone
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-05__31_works_green.jpg
    alt: 'The works from above: skylights, roof plant, vines'
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-088-the-rustbelt-green-against-the-rust-and-what-s-left-standing
source: Claude handoff · development/devlog-088-the-rustbelt-green-against-the-rust-and-what-s-left-standing.md
related: []
updated: '2026-10-11'
---

# The Rustbelt: green against the rust, and what's left standing

From the player's read of the concept sheet: break up the orange, and let
the place tell its story (people left, it rusted, it's still wet).

- **Fungal corrosion**: `rust_colonized` and `rust_hyphal` (teal hyphae
  branching through orange rust). Wet rust is where the network gets in:
  the damp foot of walls and the rain-rusted roofs go rust → colonized →
  hyphal in broad patches. Breaking it gives spores.
- **Green on the walls**: vines hang from the works' eaves in curtains
  (noise-grouped, not confetti), with moss and brackets of shelf fungus low
  down.
- **Skeletons**: empty yards in the works hold the girder frames of
  buildings long gone. Columns stand at different heights (some fallen), with
  a beam or a scrap of grating floor still up and vines on the steel.
- **Walkways to nowhere**: some halls with no catwalk have one out of their
  upper door that runs a few steps over the street and stops (its last
  cell is weak).
- **Roofs**: skylights in the halls (most have lost their glass, so rain and
  light get in), air-conditioning units and water tanks.
- **Ruined machines**: a seized generator in the factory halls, dead battery
  banks in the warehouses (new props; searchable, and the generator teaches
  engineering).
- **Puddles**: a new flat block on the Rustbelt's low ground and old slabs.
  *(A pin in it: puddles elsewhere, and after rain once there's weather.)*
- **More life on the ground**: moss, ferns and short grass among the rust
  weeds, and teal mushrooms growing thick (the fungus count is up from 0.8
  to 1.3).
- `works_test` checks the growth, the skeletons and that the corrosion comes
  in patches.

![The frame of a building long gone](/images/encyclopedia/game/screenshots__2026-10-05__30_skeleton.jpg)

*Development gameplay capture*
![The works from above: skylights, roof plant, vines](/images/encyclopedia/game/screenshots__2026-10-05__31_works_green.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-05/32_ruined_machines.png: Ruined machines)*
