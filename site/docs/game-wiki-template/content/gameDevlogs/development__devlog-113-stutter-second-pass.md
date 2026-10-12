---
title: 113. Stutter, second pass
description: Stutter, second pass
section: development
kind: devlog
entry: 113
devlog_id: '113'
date: '2026-10-07'
session: Session 4 — The top rungs
tags:
  - performance
images: []
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-113-stutter-second-pass
source: Claude handoff · development/devlog-113-stutter-second-pass.md
related: []
updated: '2026-10-11'
---

# Stutter, second pass

- A building's plan is now made on a worker thread before its furniture
  comes in (`StructureProps`, `WorldGenerator.has_building`). In the 40 s
  probe: 5 frames over 33 ms (8 before, 19 originally), none over 100 ms.
- **Tried and taken out**: looking up the regions ahead (towns, roads,
  summits, estates) on a worker thread each second. It made things much
  worse (frames of 300-600 ms): the main thread ends up waiting behind the
  worker for the same answers. The two ~77 ms frames left in the probe are
  those first look-ups; fixing them needs the look-ups themselves made
  cheaper, not moved.
- To do at the desktop: the compiled generator (`docs/ideas.md`).
