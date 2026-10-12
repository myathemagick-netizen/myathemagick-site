---
title: '112. Stutter: a probe, fungi planned off the main thread, a view distance setting'
description: tests/stutterprobe.gd runs 40 s across fresh land at a sprint, timing every frame, then times each main-thread job alone.
section: development
kind: devlog
entry: 112
devlog_id: '112'
date: '2026-10-07'
session: Session 4 — The top rungs
tags:
  - performance
  - tools and tests
images: []
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-112-stutter-a-probe-fungi-planned-off-the-main-thread-a-view-distance-sett
source: Claude handoff · development/devlog-112-stutter-a-probe-fungi-planned-off-the-main-thread-a-view-distance-sett.md
related: []
updated: '2026-10-11'
---

# Stutter: a probe, fungi planned off the main thread, a view distance setting

`tests/stutter_probe.gd` runs 40 s across fresh land at a sprint, timing
every frame, then times each main-thread job alone.

| | Before | After |
|---|---|---|
| Frames over 33 ms in 40 s | 19 | 8 (five of them in the first two seconds) |
| 99th percentile frame | 29.8 ms | 19.2 ms |
| Worst frame once moving | 88 ms | 89 ms |

- **Fungi scatter** was the heaviest job on the main thread (up to 205 ms
  for a chunk on cold land): where things grow is now worked out on a
  worker thread and only the showing is on the main thread.
- **View distance** in Settings > Display: 64-256 m (128 as before).
- Still on the main thread: a building's plan when its furniture comes in
  (33 ms if the generator hasn't built it yet), summit search (20 ms per
  new region), estate search (10 ms per new cell). The few 80 ms frames
  left are these.
- The land itself is generated on worker threads at about 60 ms a block:
  that limits how fast new land appears, not the frame rate. The generator
  is GDScript; it's the CPU, not the graphics card, that does this work.
