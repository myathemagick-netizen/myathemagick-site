---
title: 12. The kiln, wood tar, treated planks, stairs and slabs
description: Crafting recipes can now ask for an ingredient group ("fuel"); the recipe screen shows it as one line with how much of any of it you have.
section: development
kind: devlog
entry: 12
devlog_id: '12'
date: '2026-10-01'
session: Session 3 — Crafting by hand
tags:
  - crafting
  - interface
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-01__52_kiln_menu.jpg
    alt: The kiln
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-01__53_kiln_night.jpg
    alt: The kiln at night
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-012-the-kiln-wood-tar-treated-planks-stairs-and-slabs
source: Claude handoff · development/devlog-012-the-kiln-wood-tar-treated-planks-stairs-and-slabs.md
related: []
updated: '2026-10-11'
---

# The kiln, wood tar, treated planks, stairs and slabs

**Clay** now lines the lake and river beds (and turns up on the banks): a
smooth blue-grey block. A **Kiln** (made at the masonry bench with
Masonry 1: a domed brick oven on a stone plinth, a glowing fire mouth, a
chimney) fires things, and every firing needs **fuel**: plant fiber,
charcoal, logs or planks, the cheapest burnt first.

| Kiln | From |
|---|---|
| Fire Bricks x4 | 2 clay + fuel |
| Glass | 2 sand + fuel, or 3 glass shards + fuel |
| Charcoal x3 | a log + fuel (charcoal is fuel, so a kiln can feed itself) |
| Wood Tar | 2 logs + fuel |

**Treated planks**: what do you treat wood with, after the end of the
world? **Wood tar** (pine tar), wrung from logs heated slowly in the kiln:
how ships' timbers and shingles were kept from rotting for centuries.
Planks + tar at the workbench make treated planks, which the fungus leaves
alone and vines don't climb.

**Stairs and slabs** for every rot-proof material: dressed stone, stone
bricks, sealed brick and sealed concrete at the masonry bench (3 blocks to
4 stairs, 1 to 2 slabs), treated planks at the workbench.

Crafting recipes can now ask for an ingredient **group** ("fuel"); the
recipe screen shows it as one line with how much of any of it you have.

![The kiln](/images/encyclopedia/game/screenshots__2026-10-01__52_kiln_menu.jpg)

*Development gameplay capture*
![The kiln at night](/images/encyclopedia/game/screenshots__2026-10-01__53_kiln_night.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-01/54_treated_planks_stairs_slabs.jpg: Treated planks, sealed brick, stone-brick stairs and a sealed-concrete slab)*

`tests/kiln_test.gd`: clay in the beds, the kiln behind Masonry 1, fuel
burnt cheapest-first, each firing, treated planks, stairs and slabs for
every material, and treated wood beside rot staying sound.
