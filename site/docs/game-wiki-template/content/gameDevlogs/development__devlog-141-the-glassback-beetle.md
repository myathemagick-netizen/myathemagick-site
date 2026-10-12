---
title: 141. The Glassback Beetle
description: 'The desert''s second creature, and its day one: a flat dark beetle under a pale, glassy pair of wing cases that catch the sun (glassbackbeetle, a voxel prop). Critters.Beetle is the rat''s shape: it sits still in the sun, crawls slo...'
section: development
kind: devlog
entry: 141
devlog_id: '141'
date: '2026-10-11'
session: Session 4 — The top rungs
tags:
  - desert
  - creatures
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-11__beetle_beetle_wide.jpg
    alt: The beetle on the glass
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-141-the-glassback-beetle
source: Claude handoff · development/devlog-141-the-glassback-beetle.md
related: []
updated: '2026-10-11'
---

# The Glassback Beetle

The desert's second creature, and its day one: a flat dark beetle under a pale, glassy pair of wing cases that catch the sun
(`glassback_beetle`, a voxel prop). `Critters.Beetle` is the rat's shape: it sits still in the sun, crawls slowly (0.9 m/s) a few metres from
its spot, and if you come within 5 m it runs (3.6 m/s) back and **tucks itself under the glass** (hidden 8-14 s, then out again); it doesn't
climb walls. The spots (14 m cells, half of them) are only on **glass fields** (shard sand and blackglass) in the deep desert; they are out **by
day** and gone at night, the opposite of the hopper (`beetle_spot`, `_beetle_run`, at most ten near you). Its skitter is `beetle_skitter` (ElevenLabs,
one of three takes, 50 credits each; I can't hear it). The author heard a buzz in the first skitter: nearly every ElevenLabs take has a faint **200 Hz hum** (it is in the gaps, 0.003 rms; the older effects have it too), which a sparse, high sound like clicks shows. The skitter and the hopper's squeak are now cleaned: high-passed (1.5 kHz and 0.7 kHz, where their sound is), the gaps gated to silence, re-levelled; the energy under 600 Hz is now zero. The other new ones (thump, gulp) have low sound of their own, so they stay as they are. Not done: kicking a shard away to find one, a loot or a catch. `tests/beetle_test.gd`.

![The beetle on the glass](/images/encyclopedia/game/screenshots__2026-10-11__beetle_beetle_wide.jpg)

*Development gameplay capture*
