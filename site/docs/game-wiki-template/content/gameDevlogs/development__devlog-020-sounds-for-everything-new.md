---
title: 20. Sounds for everything new
description: '24 new sound effects from ElevenLabs (61 takes, 2–3 each, logged in assetsrc/audiosources.json):'
section: development
kind: devlog
entry: 20
devlog_id: '20'
date: '2026-10-02'
session: Session 4 — The top rungs
tags:
  - audio
images: []
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-020-sounds-for-everything-new
source: Claude handoff · development/devlog-020-sounds-for-everything-new.md
related: []
updated: '2026-10-11'
---

# Sounds for everything new

24 new sound effects from ElevenLabs (61 takes, 2–3 each, logged in
`asset_src/audio_sources.json`):

- **Opening:** fridge doors, cupboards and wardrobes, drawers, crate lids
  (and the thud when your crate shuts), the strongbox's steel lid, car boots
  (`FurnitureProp.OPEN_SOUND`).
- **Crafting, per station** (`CraftingPanel.STATION_SOUND`): saw and hammer at
  the workbench, the treadle sewing machine, the spinning wheel, the loom's
  shuttle and beater, chisel on stone, furnace doors for every fire-burning
  station, a sizzling pan for cooking, hot glass, soldering, pen and page at
  the writing desk, bubbling for the alembic and brewing pot; a warm knock
  when anything's done.
- **Using things:** drinking brews and tinctures, wrapping a bandage, a tool
  snapping, filling a bucket, and a page-flutter chime when a research book
  levels up.

`tests/audio_check.gd` now checks all of them are loaded. Still to make: the
looping fire / furnace / bubbling beds by the stations (see
sound_wishlist.md (source document)).
