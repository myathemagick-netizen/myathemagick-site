---
title: 14. Biomes
description: 'The plan, agreed with the designer and written into the GDD (§2, "Biomes and neighbourhoods"): biomes are the land, neighbourhoods are settlements on it, shaped by their biome and by how the collapse went there (evacuated, stayed ...'
section: development
kind: devlog
entry: 14
devlog_id: '14'
date: '2026-10-01'
session: Session 3 — Crafting by hand
tags: []
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-01__58_biome_map.jpg
    alt: 'The biome map: plains, woodland (dark), wetland (teal-green), highlands (grey), bloom (pale)'
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-01__59_biome_plains.jpg
    alt: Overgrown Plains
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-014-biomes
source: Claude handoff · development/devlog-014-biomes.md
related: []
updated: '2026-10-11'
---

# Biomes

The plan, agreed with the designer and written into the GDD (§2, "Biomes
and neighbourhoods"): **biomes** are the land, **neighbourhoods** are
settlements on it, shaped by their biome and by how the collapse went there
(evacuated, stayed and adapted, flooded out, sealed in, swallowed), each with
a landmark building of its own and roads linking town to town. Step one is
the land itself: five medium-sized biomes, a few hundred metres across.

| Biome | The land |
|---|---|
| **Overgrown Plains** | the familiar grass and sparse trees |
| **Woodland** | dense trees (about five times the plains'), forest-floor dirt, agarics and tan buttons |
| **Wetland** | sinks into pools, clay round them, more dead trees, inkcaps and puffballs |
| **Rocky Highlands** | the terrain rises into hills and ridges, bare stone and gravel break through, big outcrops, few and mostly dead trees, little grows; the mycelium spreads slowly |
| **Mycelial Bloom** | the network's heartland: mycelium soil and hyphal mats, fungal trees, spore blooms and teal fungi; the mycelium spreads twice as fast |

The terrain blends continuously across biome edges (no cliffs at the seam);
only the ground cover, plants and features switch. Crossing into a new
biome shows its name, and the Character tab says where you are. The world
map tool colours land by biome.

![The biome map: plains, woodland (dark), wetland (teal-green), highlands (grey), bloom (pale)](/images/encyclopedia/game/screenshots__2026-10-01__58_biome_map.jpg)

*Development gameplay capture*
![Overgrown Plains](/images/encyclopedia/game/screenshots__2026-10-01__59_biome_plains.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-01/60_biome_woodland.jpg: Woodland)*
*(image not bundled: docs/screenshots/2026-10-01/61_biome_wetland.jpg: Wetland)*
*(image not bundled: docs/screenshots/2026-10-01/62_biome_highlands.jpg: Rocky Highlands)*
*(image not bundled: docs/screenshots/2026-10-01/63_biome_bloom.jpg: Mycelial Bloom)*

`tests/biome_test.gd` measures each biome over 2 km around spawn (trees,
rocks, bare stone, mycelium ground, clay, water, which fungi it favours,
spreading speed) and visits the nearest spot of each.

**Giant mushrooms.** The designer's ask: the Bloom should have giant
mushrooms, "Eastern Plaguelands sized, or like Minecraft's mushroom
islands". They're built from new blocks (pale fibrous stem, teal or tan cap,
dusky gills underneath), so you can walk under them, climb them, stand on a
cap, or cut them down. Most are 8-12 blocks tall with a cap about 7 across;
one in four is **colossal**: 16-24 tall, a thick stem with a flared root
base and a cap up to 19 blocks across. Teal caps have pale spots that
**glow at night**, so a bloom lights up across the land after dark. They
grow only in the Bloom (441 within 2 km of spawn, none outside it), never
over a town, and the Bloom's ordinary trees thinned out to make room.

*(image not bundled: docs/screenshots/2026-10-01/64_giant_mushrooms.jpg: Giant mushrooms in the Bloom)*
*(image not bundled: docs/screenshots/2026-10-01/65_under_a_giant_cap.jpg: Under a colossal cap)*
*(image not bundled: docs/screenshots/2026-10-01/66_giant_mushrooms_night.jpg: The Bloom at night)*
