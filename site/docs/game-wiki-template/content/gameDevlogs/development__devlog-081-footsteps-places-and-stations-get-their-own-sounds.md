---
title: 81. Footsteps, places and stations get their own sounds
description: Footsteps, places and stations get their own sounds
section: development
kind: devlog
entry: 81
devlog_id: '81'
date: '2026-10-05'
session: Session 4 — The top rungs
tags:
  - crafting
  - audio
images: []
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-081-footsteps-places-and-stations-get-their-own-sounds
source: Claude handoff · development/devlog-081-footsteps-places-and-stations-get-their-own-sounds.md
related: []
updated: '2026-10-11'
---

# Footsteps, places and stations get their own sounds

- **Footsteps by ground**: `step_snow` (on snow, or a dusting of it on rock),
  `step_gravel` (roads, trails), `step_fungal` (mycelium soil, hyphal mat).
- **Each place sounds like itself**:
  - `amb_town` in town streets: wind between the buildings, a loose sign creaking.
  - `amb_bloom` in the Sporelands: a low hum, creaks, spores popping.
  - `amb_wetland` by day: frogs and lapping water (`amb_night` after dark).
  - `amb_cave` fades in as you go underground and the sky goes.
  - The mountains' wind and the Autumn Fields' breeze from before.
  - Elsewhere it's `amb_day` and `amb_night` as before.
  - Each ambience now picks one of its takes per session (it always used the first).
- **Stations hum while they work**, quietly and from the station itself
  (3D, heard within a few metres):
  - A fire crackling in campfires, hearths, kilns, ovens, and a boiler with fuel.
  - A furnace roar, a pot bubbling (brewing pot, alembic, bioreactor).
  - An engine idling in diesel and myco generators and the steam engine,
    while they're running.
- **The journal**: the Mountains' finds list the lookouts and cairns, the
  trails, the huts and the goats.
- **buildings.md**:
  - Pictures and floor plans of the fire lookout and the mountain hut.
  - A dwarf pine and a cairn in the wild features.
  - A note on the mountain trails.
- 21 ElevenLabs takes (footsteps levelled with tidy_sfx.py; prompts in
  asset_src/audio_sources.json).
