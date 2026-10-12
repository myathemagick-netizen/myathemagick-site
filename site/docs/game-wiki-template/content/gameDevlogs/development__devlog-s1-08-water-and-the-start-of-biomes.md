---
title: 8. Water, and the start of biomes
description: 'Water raised the question of biomes. The approach that fits this game is the same one the buildings use: independent layers that combine, rather than one big biome table. Land and climate (height, moisture, later temperature), col...'
section: development
kind: devlog
entry: 8
devlog_id: s1:8
date: '2026-09-30'
session: Session 1 — From one brown cube to a ruined town
tags:
  - creatures
images:
  - src: /images/encyclopedia/game/screenshots__2026-09-30__46_world_map_water.jpg
    alt: World map with water
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-09-30__47_lake_from_shore.jpg
    alt: Lake from the shore
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-s1-08-water-and-the-start-of-biomes
source: Claude handoff · development/devlog-s1-08-water-and-the-start-of-biomes.md
related: []
updated: '2026-10-11'
---

# Water, and the start of biomes

Water raised the question of biomes. The approach that fits this game is
the same one the buildings use: independent layers that combine, rather
than one big biome table. **Land and climate** (height, moisture, later
temperature), **collapse character** (evacuated / frozen in place / stayed
and adapted) and **strain territory** (which fungus rules where). Moisture
is the first climate layer: wet regions sink into basins that fill as
lakes.

There's now a world water level. Rivers wind between the lakes, cutting
canyons through hills. In towns they become narrow straight-sided canals,
and the roads cross on causeways (real bridges can come later). Lots a
river runs through are left as open riverside land. Shores get sand, beds
get sand and gravel, and the water is a murky teal, in keeping with the
decay. A new tool renders a top-down map straight from the world layout,
which made it easy to tune. The first map showed rivers stopping dead in
fields just short of towns; they now run through them.

The water block is see-through with no collision. Swimming: you sink
slowly, hold A to swim up, move slower, get a teal tint and thick fog
underwater, and get a boost to climb out onto a bank. The first test
found you couldn't climb out: bobbing at the surface pushed the body
half out of the water, which switched swimming off before the climb-out
could fire.

![World map with water](/images/encyclopedia/game/screenshots__2026-09-30__46_world_map_water.jpg)

*Development gameplay capture*
![Lake from the shore](/images/encyclopedia/game/screenshots__2026-09-30__47_lake_from_shore.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-09-30/48_swimming_toward_bank.jpg: Swimming)*
*(image not bundled: docs/screenshots/2026-09-30/49_underwater.jpg: Underwater)*
*(image not bundled: docs/screenshots/2026-09-30/50_town_with_canal.jpg: Town with a canal)*

Canal causeways became **bridges**, a good first real use of the railing
set. Where a town road crosses a canal there's now an asphalt deck at street
level over open water, rusty metal railings along both edges, and concrete
piers every four metres down to the canal bed. The canal flows underneath
instead of being dammed. Towns on high ground sit well above the water, so
some bridges came out as tall viaducts over deep cuts, which suits a city
built around its waterways. A bridge test walks the player across one along
the road (they never drop below the deck), then into the side railing (it
holds at the road's edge).

*(image not bundled: docs/screenshots/2026-09-30/51_bridge_over_canal.jpg: Bridge over a canal)*
*(image not bundled: docs/screenshots/2026-09-30/52_bridge_deck_railings.jpg: On the deck)*
*(image not bundled: docs/screenshots/2026-09-30/53_bridge_aerial.jpg: Bridge aerial)*
