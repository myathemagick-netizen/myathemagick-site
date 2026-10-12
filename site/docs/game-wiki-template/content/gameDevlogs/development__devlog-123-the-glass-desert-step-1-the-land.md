---
title: '123. The Glass Desert, step 1: the land'
description: 'The first hot biome (the design and its audit: docs/glassdesert.md). Step 1 is the land and nothing on it yet: no glass, no critter, no ruins, no sound.'
section: development
kind: devlog
entry: 123
devlog_id: '123'
date: '2026-10-08'
session: Session 4 — The top rungs
tags:
  - desert
  - audio
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-08__desert_in_afternoon.jpg
    alt: '3 in the afternoon: a mesa with its pines, sand, a patch of bleached crust'
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-08__desert_in_evening.jpg
    alt: A little before sunset
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-123-the-glass-desert-step-1-the-land
source: Claude handoff · development/devlog-123-the-glass-desert-step-1-the-land.md
related: []
updated: '2026-10-11'
---

# The Glass Desert, step 1: the land

The first hot biome (the design and its audit: `docs/glass_desert.md`). Step 1
is the land and nothing on it yet: no glass, no critter, no ruins, no sound.

- **How big, and where.** The map is a tight patchwork (§ the audit: a typical
  patch 0.3-0.8 km across), so the desert is its own **very low-frequency
  field** (0.0003: a wavelength of about 3 km, against 0.0016-0.0026 for the
  others), `SettlementLayout.desert()`. It sits in the cascade right **after
  the mountains and before every other land**, and fades out near mountain
  ranges (they poke through it as mesas), **in the Hollow Wood** and **within
  1.2 km of the start**. Measured on six seeds, a 12 km square: **about 13% of
  the map**, two big deserts (2 km2 and more) and about five medium ones
  (0.7-2 km2) a map, the biggest 8.3 km2 (3.2 km across), the nearest cell
  1320 m from the start. The bloom, the Rustbelt and the lowland lands lose
  ground inside those blobs; the mountains and the Hollow Wood do not (a test
  replays the old cascade and finds no cell that differs). A 3 km desert is a
  trek of about 12 game hours.
- **Found by the review, and fixed: the Hollow Wood.** Its estates and
  graveyards are placed from the wood's own field, not from `biome()`, so with
  the desert first in the cascade **10-15% of the manors and 20-50% of the
  graveyards stood in the sand** (the count, on eight seeds). The desert now
  yields to the wood as well; with it switched off against on, the estates and
  graveyards are the same sets (a handful on the wood's fringe shift), and
  `desert_test` keeps count. Farmsteads, quarries, mines and drive-ins are
  chosen from explicit lists of lands, so none can be in it; a mountain hut at
  a mesa's foot may be.
- **Towns.** A town is dropped only if **its centre** is in the desert (my first
  rule dropped any town one of whose nine sample points touched it: 30% of all
  towns, for 13% of the land). Now 14-19% go (towns are dense: one in nearly
  half of all 192 m regions); one on the edge stays, half under the sand.
- **The ground.** The land flattens to a high plain of long low dunes (14 to
  21 m, from the ridge noise squared); **no rivers** (they would be dry
  washes: step 2) and **no towns** (as in the Hollow Wood). Sand, with
  **bleached sand** (a new block, appended at the end: pale, a salt crust,
  hairline cracks) in patches and gravel in the hollows. Dead brush and tan
  grass, a few pebbles; no trees but the odd dead one; a rock or two.
- **The scorched margin**: where the field is under the desert's threshold
  but above zero, about 225 m wide, the sand creeps into the neighbouring land
  (up to half the ground), so you meet it before you are in it.
- **The haze**: the horizon turns amber as you face a desert (the world samples
  the field 150, 350 and 600 m ahead of the camera once a second; `DayNight.
  haze_ahead`, eased at 0.15 a second; it tints the horizon and so the fog).
  The world draws only 128 m by default, so this and the margin are the two
  things you see coming.
- **The heat follows the sun** (`Climate.LANDS["desert"]`, `SUN_CURVE`): the
  game's sun rises at 6 and sets at 18; the desert's heat is 0 before 7, 1.5
  points at 9, 7 at noon, **10 at 3 in the afternoon**, 1.5 at sunset and 0 by
  half past seven. The night is cool: 4 points of cold (the night's 2 and the
  desert's 2). So a bare player is fine in the morning and the evening and
  scorching in the afternoon; the light kit (§122) is what you cross it in.
  A land with `"sun": true` and an `hour` in the environment gets the curve;
  without an hour it is the flat day heat (so `hot_test` is unchanged).
- **Every table a new land is in** (finding 3 of the audit): the land's name,
  the list, trees (0), dead trees (0.9), rocks (0.3), shops, `spread_factor`
  (0.15), the sky (washed pale, an amber horizon, a warm sun), the tint, the
  fungi tables (the line that crashed without it), the plants, the compass
  (a "xerophile"), the journal (lore and finds).
- **Not yet** (steps 2-6): glass in the ground, dry washes, shard dunes;
  sand on the wind, an ambience, music; the scrub, cactus and Sand Truffle;
  the Dune Hopper; the Service Station. Mesas have pines on them (a mountain
  keeps its trees); the desert has no ambience, so by day it uses the plains' bird
  sound.
- **Saved worlds**: only ground not yet generated changes. In a world already
  explored past 1.2 km a desert could cut a visible seam where explored meets
  new land; a new world has none.
- **What it costs.** `desert()` is 1.3 microseconds in ordinary land (4.6
  inside the desert), called from `natural_height`, the river carve and
  `surface`: about 2.6 more in a column's height work (some 8%), and
  `surface()` is 6 faster than before (51 against 57) because it now calls
  `biome()` once, not twice; the home town's position is found once, not on
  every call. Mycelium can't turn the sand to soil (it isn't in
  `Spread.BECOMES`).
- `desert_test` (new): the share and the biggest blob, the start clear,
  nothing else moved, the ground, the dunes, no town centred in it, none of
  the other lands' manors, graveyards and farms in it, the margin, every
  table, the heat by the hour, the haze, and in the world at 3 in the afternoon
  (10 heat), at 9 (hardly any) and at night (4 cold). `biome_test` looks
  further out for the desert (it is 1.3 km and more from the start by design).

![3 in the afternoon: a mesa with its pines, sand, a patch of bleached crust](/images/encyclopedia/game/screenshots__2026-10-08__desert_in_afternoon.jpg)

*Development gameplay capture*
![A little before sunset](/images/encyclopedia/game/screenshots__2026-10-08__desert_in_evening.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-08/desert_in_night.png: Night)*
*(image not bundled: docs/screenshots/2026-10-08/desert_edge_plain.png: The edge of a desert: the sand creeping in)*
*(image not bundled: docs/screenshots/2026-10-08/desert_edge_haze.png: The same, with the amber haze that comes up as you face a desert)*
