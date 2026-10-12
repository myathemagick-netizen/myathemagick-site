---
title: '114. Stutter, third pass: look-ups, furniture, lights'
description: 'Stutter, third pass: look-ups, furniture, lights'
section: development
kind: devlog
entry: 114
devlog_id: '114'
date: '2026-10-07'
session: Session 4 — The top rungs
tags:
  - performance
images: []
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-114-stutter-third-pass-look-ups-furniture-lights
source: Claude handoff · development/devlog-114-stutter-third-pass-look-ups-furniture-lights.md
related: []
updated: '2026-10-11'
---

# Stutter, third pass: look-ups, furniture, lights

- **Cheaper first look at a region**: a summit search first samples the
  region coarsely for any mountain, an estate or graveyard search for any
  deep wood, and stops there if there's none. About twice as fast over a
  large area; the 1,340 estates, graveyards and summits of three seeds come
  out identical.
- **Furniture comes in 14 pieces a frame**, not a whole building at once.
- **Lights** (torches, candelabra, chandeliers, lanterns, lamps) fade out
  between 30 and 40 m and cast shadows only within 16 m (the engine's own
  distance fade).
- The 40 s probe, three runs: 3, 3 and 5 frames over 33 ms (19 at the
  start of this work). Two remain in every run at the same two places
  (about 80-100 ms): not the look-ups; probably something loading for the
  first time (a model, a shader). Not yet found.
