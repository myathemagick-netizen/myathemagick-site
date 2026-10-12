---
title: 66. Autumn sounds
description: Autumn sounds
section: development
kind: devlog
entry: 66
devlog_id: '66'
date: '2026-10-04'
session: Session 4 — The top rungs
tags:
  - autumn fields
  - audio
images: []
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-066-autumn-sounds
source: Claude handoff · development/devlog-066-autumn-sounds.md
related: []
updated: '2026-10-11'
---

# Autumn sounds

- ElevenLabs, three takes each (a fixed length on each this time: no blips):
  `squirrel_chatter` when one spots you and runs, `squirrel_scamper` as it
  goes up its tree, and `amb_autumn`, a 22 s loop of wind in dry grass,
  rustling leaves and a far-off crow, which takes the place of the daytime
  ambience in the Autumn Fields.
- **Sounds from a place:** `Sfx.play_at(name, position)` plays a sound in the
  world (quieter with distance, from its side); the squirrels use it.
- Music for the fields: Suno prompts for `music_autumn_day` (and its slow
  version) and `music_autumn_night` in docs/music_requests.md.
