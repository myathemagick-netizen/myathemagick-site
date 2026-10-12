---
title: '109. What''s in the air: rust, leaves, spores'
description: 'world/biomemotes.gd (BiomeMotes): a small cloud of particles that follows you, one recipe per land, switched on in its own land and left to die away outside it. Not weather; none underground or inside the manor.'
section: development
kind: devlog
entry: 109
devlog_id: '109'
date: '2026-10-07'
session: Session 4 — The top rungs
tags:
  - hollow wood
  - rustbelt
  - crafting
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-06__52_motes_spores.jpg
    alt: Spores over the Sporelands
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-06__53_motes_leaves.jpg
    alt: A leaf or two in the Hollow Wood
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-109-what-s-in-the-air-rust-leaves-spores
source: Claude handoff · development/devlog-109-what-s-in-the-air-rust-leaves-spores.md
related: []
updated: '2026-10-11'
---

# What's in the air: rust, leaves, spores

`world/biome_motes.gd` (`BiomeMotes`): a small cloud of particles that
follows you, one recipe per land, switched on in its own land and left to
die away outside it. Not weather; none underground or inside the manor.

| Land | In the air |
|---|---|
| Rustbelt | about 130 dark rust flecks carried fast on the wind, tumbling, sinking a little |
| Hollow Wood | about 16 dark red leaves at a time, drifting down slowly and turning |
| Sporelands | about 120 small teal spores hanging and rising very slowly; they glow, so they show at night |

- A land gets its own by adding one entry to `BiomeMotes.KINDS` (how many,
  how big, colour, wind, sink or rise, wander, spin, glow).
- The motes are square, like everything else.
- `motes_test`.

![Spores over the Sporelands](/images/encyclopedia/game/screenshots__2026-10-06__52_motes_spores.jpg)

*Development gameplay capture*
![A leaf or two in the Hollow Wood](/images/encyclopedia/game/screenshots__2026-10-06__53_motes_leaves.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-06/54_motes_rust.png: Rust on the wind)*
