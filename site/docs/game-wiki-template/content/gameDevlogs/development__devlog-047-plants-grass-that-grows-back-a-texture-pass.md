---
title: 47. Plants, grass that grows back, a texture pass
description: 'Down by the water: reeds and tall grass. Town ground is sparser (it was tended once). Pebbles and moss lie flat on the ground. A block can be put where a plant stands; take the ground from under one and it goes too.'
section: development
kind: devlog
entry: 47
devlog_id: '47'
date: '2026-10-04'
session: Session 4 — The top rungs
tags: []
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-04__01_textures_before_after.jpg
    alt: Before (top) and after
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-04__02_plants.jpg
    alt: The plants
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-047-plants-grass-that-grows-back-a-texture-pass
source: Claude handoff · development/devlog-047-plants-grass-that-grows-back-a-texture-pass.md
related: []
updated: '2026-10-11'
---

# Plants, grass that grows back, a texture pass

**Plants on the ground** (blocks 137-147): crossed panes you walk through,
gone at a touch (some fibre, now and then seeds), coloured by the biome
like the grass:

| Biome | On grass | On stone | Other |
|---|---|---|---|
| Plains | short and tall grass, yellow and white flowers, dead brush | pebbles | |
| Woodland | short grass, ferns, tall grass, violet and white flowers | moss, pebbles | |
| Wetland | tall and short grass, reeds | moss | reeds on sand |
| Highlands | heather, short grass, violet flowers | pebbles, moss | |
| Bloom | a little short grass | | |

Down by the water: reeds and tall grass. Town ground is sparser (it was
tended once). Pebbles and moss lie flat on the ground. A block can be put
where a plant stands; take the ground from under one and it goes too.

**Grass comes back:** bare dirt open to the sky next to grass turns to grass
(it used to stay dirt for ever), and grass sprouts tufts now and then
(`Spread`).

**Textures:** bricks bevelled (lit tops, shadowed bottoms; a sooty one, a
chipped corner), gravel's pebbles shaded and some brown, dirt with roots,
stones and damp patches, sand with wind ripples, stone with hairline cracks,
concrete mottled and rain-streaked, drywall water-marked and scuffed,
planks with grain and knots, shingles shaded course by course, grass tops
with clumps and bright blades; and a last pass giving every pixel a touch
of light or shade (`finish`).

**Fixes:** furniture no longer hangs where a building never stood in an old
save (§46's observation: a library's shelves over a world saved before the
library); the world generator's block table is filled once (threads could
read it while it grew); the test runner is now Python (`tools/run_tests.py`):
bash on Windows could hang waiting on a finished game.

![Before (top) and after](/images/encyclopedia/game/screenshots__2026-10-04__01_textures_before_after.jpg)

*Development gameplay capture*
![The plants](/images/encyclopedia/game/screenshots__2026-10-04__02_plants.jpg)

*Development gameplay capture*

`tests/plants_test.gd`: plains near the test town grow grass tufts, flowers
and more; plants are walk-through and quick; a block goes where a plant
stood; the ground goes, the plant goes; dirt grasses over; grass sprouts.
`tests/old_land_test.gd`: the furniture check.
