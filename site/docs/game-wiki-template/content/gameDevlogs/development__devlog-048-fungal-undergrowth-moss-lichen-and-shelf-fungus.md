---
title: 48. Fungal undergrowth, moss, lichen and shelf fungus
description: 'The network feeds new life rather than leaving bare earth, so mycelium soil now grows its own undergrowth: hypha-grass (grey-green blades with fine white fungal tips: fibre, sometimes spores, now and then a seed) and fungal tufts ...'
section: development
kind: devlog
entry: 48
devlog_id: '48'
date: '2026-10-04'
session: Session 4 — The top rungs
tags:
  - creatures
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-04__09_fungal_undergrowth.jpg
    alt: Woodland on fungal ground
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-04__10_bloom_undergrowth.jpg
    alt: The Bloom's teal undergrowth
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-048-fungal-undergrowth-moss-lichen-and-shelf-fungus
source: Claude handoff · development/devlog-048-fungal-undergrowth-moss-lichen-and-shelf-fungus.md
related: []
updated: '2026-10-11'
---

# Fungal undergrowth, moss, lichen and shelf fungus

The network feeds new life rather than leaving bare earth, so mycelium soil
now grows its own undergrowth: **hypha-grass** (grey-green blades with fine
white fungal tips: fibre, sometimes **spores**, now and then a seed) and
**fungal tufts** (tiny tan caps: spores, now and then a button mushroom).
In the **Bloom** the same undergrowth is **teal**, its tips glowing faintly
at night, to go with the giant mushrooms. It sprouts on its own on open
mycelium soil, like grass tufts on grass.

**Spores** (new item): two worked into a block of dirt by hand make
**mycelium soil**.

**Coverings creep over what's already rotting** (rot wood, logs, mossy
roofs, overgrown brick and concrete, cracked concrete, exposed walls,
rubble, stone), slowly, through `Spread`: **moss** where the land is damp,
**lichen** (grey-green with orange crusts; drops **lichen**, for herbalism
to come) where it's dry, on tops and sides; **shelf fungus** brackets up
the sides of rotten wood and logs (drops shelf fungus). Highland stone also
starts out with some lichen.

![Woodland on fungal ground](/images/encyclopedia/game/screenshots__2026-10-04__09_fungal_undergrowth.jpg)

*Development gameplay capture*
![The Bloom's teal undergrowth](/images/encyclopedia/game/screenshots__2026-10-04__10_bloom_undergrowth.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-04/11_rotting_house.jpg: A rotting house, after a long while)*
*(image not bundled: docs/screenshots/2026-10-04/12_rotting_close.jpg: Close: vines, lichen, fungal tufts)*
*(image not bundled: docs/screenshots/2026-10-04/13_fungal_tiles.jpg: Hypha-grass, fungal tufts, bloom grass and tufts, lichen, shelf fungus)*

`tests/plants_test.gd` also checks: mycelium soil grows undergrowth, rotten
wood grows a covering on its side and top, tufts give spores.
