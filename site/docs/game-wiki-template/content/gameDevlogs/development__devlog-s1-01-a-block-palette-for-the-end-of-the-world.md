---
title: 1. A block palette for the end of the world
description: The first job was giving the world materials. Rather than painting textures by hand, a Python script generates every 16×16 pixel-art tile from seeded noise, so any tile can be tweaked and regenerated identically. The set covers th...
section: development
kind: devlog
entry: 1
devlog_id: s1:1
date: '2026-09-30'
session: Session 1 — From one brown cube to a ruined town
tags:
  - creatures
images:
  - src: /images/encyclopedia/game/screenshots__2026-09-30__01_block_atlas.jpg
    alt: Block atlas
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-09-30__02_blender_block_diorama.jpg
    alt: Blender block diorama
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-s1-01-a-block-palette-for-the-end-of-the-world
source: Claude handoff · development/devlog-s1-01-a-block-palette-for-the-end-of-the-world.md
related: []
updated: '2026-10-11'
---

# A block palette for the end of the world

The first job was giving the world materials. Rather than painting textures
by hand, a Python script generates every 16×16 pixel-art tile from seeded
noise, so any tile can be tweaked and regenerated identically. The set covers
three layers of the setting: nature (grass, dirt, stone, logs), the old city
(concrete, brick, asphalt, drywall, planks, rusted metal, floor tile), and the
reclaiming fungus (mycelium soil, overgrown brick and concrete, moldy drywall,
rotting wood, and a glowing teal *spore bloom*).

Two tiles carry the design document's ideas about hidden infrastructure:
**wall_exposed** shows a stud, a copper pipe and red/yellow wiring behind
broken drywall, and **wall_scorched** tells a different story about the same
wall.

![Block atlas](/images/encyclopedia/game/screenshots__2026-09-30__01_block_atlas.jpg)

*Development gameplay capture*

Blender (driven over its MCP connection) built a little diorama to judge the
tiles on actual cubes. First lesson: a tile that looks fine alone can tile
badly. The mycelium ground first showed obvious chevrons, then polka dots, and
needed higher-frequency noise before it read as an organic mat.

![Blender block diorama](/images/encyclopedia/game/screenshots__2026-09-30__02_blender_block_diorama.jpg)

*Development gameplay capture*
