---
title: 45. More variety, water by biome, and columns
description: 'What made the blocks look best was variation: one tile repeated looks wrong, a noisy mix looks natural. So, at every scale:'
section: development
kind: devlog
entry: 45
devlog_id: '45'
date: '2026-10-03'
session: Session 4 — The top rungs
tags: []
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-03__77_country_before_after.jpg
    alt: Open country, before and after
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-03__78_water_wetland_highlands.jpg
    alt: 'Water: the wetland, and the highlands'
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-045-more-variety-water-by-biome-and-columns
source: Claude handoff · development/devlog-045-more-variety-water-by-biome-and-columns.md
related: []
updated: '2026-10-11'
---

# More variety, water by biome, and columns

What made the blocks look best was variation: one tile repeated looks
wrong, a noisy mix looks natural. So, at every scale:

- **Eight versions** of every tile (was four), one per block face by its
  position.
- **Turns and mirrors:** natural tops (grass, dirt, stone, gravel, sand,
  ores, concrete, asphalt...) any of four ways round, mirrored or not
  (eight); sides mirrored. A stone top has 64 looks.
- **Big soft patches** (`block_macro`, `blocks_macro_noise.png`): two
  octaves of world-space noise, tens of metres across, make stretches of
  ground and wall sun-bleached or shaded and hollows damp (darker, a little
  greener); strongest on natural ground, gentler on built walls. This is
  the scale that was missing: from a distance, the land no longer reads as
  a grid.

**Water by biome** (`block_water.gdshader`): coloured by the biome it lies
in and more or less clear: clear and blue in the highlands, murky olive in
the wetland, brown-green in woodland, teal in the bloom. The biome table
(`BiomeTint.TINTS`) has each biome's grass and water colour on one line, so
new biomes only need a line.

**Columns** (blocks 134-136): a **column base** (mouldings on a square
plinth), a fluted **column shaft** (stack as many as you like) and a
**column capital** (scrolls at the corners), made at the masonry bench
from dressed stone (Masonry 1). The museum's and library's atrium columns
are built from them, a base, shaft and capital on each floor, and so is
the museum portico.

![Open country, before and after](/images/encyclopedia/game/screenshots__2026-10-03__77_country_before_after.jpg)

*Development gameplay capture*
![Water: the wetland, and the highlands](/images/encyclopedia/game/screenshots__2026-10-03__78_water_wetland_highlands.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-03/79_portico_columns.jpg: The portico's columns)*
*(image not bundled: docs/screenshots/2026-10-03/80_museum_columns.jpg: The museum atrium's columns, before and after)*
*(image not bundled: docs/screenshots/2026-10-03/81_country_stages.jpg: Stage by stage)*
*(image not bundled: docs/screenshots/2026-10-03/82_variants_and_columns.jpg: Eight versions of grass, dirt, stone, gravel and sand; the column tiles)*

`tests/block_look_test.gd` now photographs a big-patches stage, water in
two biomes, and the museum's columns.
