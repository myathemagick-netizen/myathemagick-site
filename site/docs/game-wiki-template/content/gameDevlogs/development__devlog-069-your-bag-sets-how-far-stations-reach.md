---
title: 69. Your bag sets how far stations reach
description: Your bag sets how far stations reach
section: development
kind: devlog
entry: 69
devlog_id: '69'
date: '2026-10-05'
session: Session 4 — The top rungs
tags:
  - crafting
images: []
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-069-your-bag-sets-how-far-stations-reach
source: Claude handoff · development/devlog-069-your-bag-sets-how-far-stations-reach.md
related: []
updated: '2026-10-11'
---

# Your bag sets how far stations reach

- The bag on your back now does something: its stat (was "Pack space",
  which did nothing; now **Storage reach**) adds half a metre per point to
  how far a station reaches for your storage. No bag: 4.5 m. A satchel
  (+5 as a Sprout): 7 m. A rucksack (+12 as Mycelial): 10.5 m. Better-tier
  bags reach further. Storage beside storage still chains on from there.
- Their descriptions say so; `storage_qol_test` checks the reach.
