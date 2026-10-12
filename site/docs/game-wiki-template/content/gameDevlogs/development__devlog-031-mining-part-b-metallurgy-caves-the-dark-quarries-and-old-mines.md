---
title: '31. Mining, part B: metallurgy, caves, the dark, quarries and old mines'
description: 'tests/metallurgytest.gd: what opens the field, each level''s makes, goggles worn showing the power view, the ore detector naming a gold block through the rock, transmutation. tests/quarrytest.gd: finds the nearest quarry and old mi...'
section: development
kind: devlog
entry: 31
devlog_id: '31'
date: '2026-10-03'
session: Session 4 — The top rungs
tags:
  - power
  - tools and tests
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-03__09_quarry.jpg
    alt: A quarry beside a highland road
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-03__10_mine_mouth.jpg
    alt: An old mine's headframe
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-031-mining-part-b-metallurgy-caves-the-dark-quarries-and-old-mines
source: Claude handoff · development/devlog-031-mining-part-b-metallurgy-caves-the-dark-quarries-and-old-mines.md
related: []
updated: '2026-10-11'
---

# Mining, part B: metallurgy, caves, the dark, quarries and old mines

- **Metallurgy** (opens at Mining 2 + Masonry 2; begin the notes at the
  writing desk):
  1. **Bronze** (furnace: three copper, one tin, four bronze) and
     **solder**; **mechanical parts from bronze and iron** at the workbench,
     so generators no longer depend on finding cars and tractors.
  2. **Gold wire**; with Electronics 3, **precision circuits** (parts, gold
     wire, solder); with Engineering 2, **electrician's goggles**: worn on
     your head, they show the power view (reach rings, what's in reach) and
     the pipe view together, all the time, hands free.
  3. **Rare earths** leached out of their ore at the alembic with potato
     spirit; with Alchemy 2, **iron transmuted into gold** (four iron, two
     spore bloom clusters and a spirit: the network does the impossible).
  4. **Rare-earth magnets** (furnace); with Electronics 3, the **ore
     detector**: hold it and every ore within nine metres is outlined
     through the rock in its colour, the nearest of each named with its
     distance.
- **Caves:** long winding tunnels that cross and open into chambers, cut
  where two noise fields both pass zero, below y 2 and at least eight
  blocks under the ground (so they never break into rivers).
- **Darkness underground:** the sky's light fades out as you go more than
  a few blocks below the ground (`DayNight.underground`); bring a torch or
  a lamp.
- **Quarries** (along roads in rocky country): a stepped pit cut into
  levelled ground, seven deep in the middle, with ore showing in its
  floors, gravel spoil, two **mine carts** still heavy with ore (search
  one: ore, coal, a chalked shift tally that teaches Mining) and an old
  **drill rig** to strip for steel, a motor and mechanical parts.
- **Old mines:** a timber headframe over a mouth beside the road, a
  timbered tunnel stepping down (planks stairs) to below sea level, and a
  chamber cut into an ore seam with a cart, a crate and the torch someone
  left burning.
- Road features can now carve and overwrite blocks at a fixed height
  (`[cell, "air" / "!block", true]`), props can stand at a fixed height
  (`"abs"`), and a roadside lot can be an empty levelled site (template
  `""`): that's what quarries and mines stand on.

![A quarry beside a highland road](/images/encyclopedia/game/screenshots__2026-10-03__09_quarry.jpg)

*Development gameplay capture*
![An old mine's headframe](/images/encyclopedia/game/screenshots__2026-10-03__10_mine_mouth.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-03/11_mine_chamber.jpg: The chamber at the bottom of an old mine, by torchlight)*
*(image not bundled: docs/screenshots/2026-10-03/12_ore_detector.jpg: The ore detector underground: gold six metres off, through the rock)*
*(image not bundled: docs/screenshots/2026-10-03/13_mine_models.jpg: Mine cart and drill rig)*

`tests/metallurgy_test.gd`: what opens the field, each level's makes,
goggles worn showing the power view, the ore detector naming a gold block
through the rock, transmutation. `tests/quarry_test.gd`: finds the nearest
quarry and old mine, checks the pit, ore, carts and rig, the tunnel, the
chamber's ore and cart, and that it's dark down there. `mining_test` now
checks for caves.
