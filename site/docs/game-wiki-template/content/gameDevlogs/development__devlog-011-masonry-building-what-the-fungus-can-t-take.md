---
title: '11. Masonry: building what the fungus can''t take'
description: 'With the world now growing over, building with salvaged brick and planks means watching it rot. A Masonry Bench (made at the workbench: a heavy stone-topped bench with a half-dressed block, chisel, mallet, a tub of mortar and bric...'
section: development
kind: devlog
entry: 11
devlog_id: '11'
date: '2026-10-01'
session: Session 3 — Crafting by hand
tags: []
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-01__49_masonry_bench.jpg
    alt: The masonry bench
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-01__50_masonry_menu.jpg
    alt: What it makes
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-011-masonry-building-what-the-fungus-can-t-take
source: Claude handoff · development/devlog-011-masonry-building-what-the-fungus-can-t-take.md
related: []
updated: '2026-10-11'
---

# Masonry: building what the fungus can't take

With the world now growing over, building with salvaged brick and planks
means watching it rot. A **Masonry Bench** (made at the workbench: a heavy
stone-topped bench with a half-dressed block, chisel, mallet, a tub of
mortar and bricks on the shelf) works stone, brick and concrete into
materials the network leaves alone:

| Make | From | Needs |
|---|---|---|
| Mortar x2 | sand + gravel | |
| Dressed Stone | stone | |
| Scrape overgrown brick / concrete x2 | the overgrown block | |
| Stone Bricks x4 | 4 dressed stone + mortar | Masonry 1 |
| Sealed Brick x4 | 4 brick + mortar | Masonry 1 |
| Sealed Concrete x4 | 4 concrete + 2 mortar | Masonry 2 |

**Masonry** is a new research topic with its own book from the writing
desk. Breaking stone, brick and concrete teaches it (how a thing is put
together, by taking it apart), and so does working at the bench.

Worked stone **never turns overgrown and nothing climbs it**. It's also a
**barrier**: mycelium only spreads through fungal blocks and the materials
it can convert, so a foundation or wall of worked stone stops it at the edge.

![The masonry bench](/images/encyclopedia/game/screenshots__2026-10-01__49_masonry_bench.jpg)

*Development gameplay capture*
![What it makes](/images/encyclopedia/game/screenshots__2026-10-01__50_masonry_menu.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-01/51_masonry_materials.jpg: Dressed stone, stone bricks, sealed brick, sealed concrete)*

`tests/masonry_test.gd`: bench, recipes by Masonry level, learning from
breaking stone, and each worked material left next to overgrown brick
(unchanged) while plain brick beside it overgrows; vines climb plain brick
but not sealed brick.
