---
title: 106. The wood's music, the organ's piece, rolling mist, roof stairs
description: The wood's music, the organ's piece, rolling mist, roof stairs
section: development
kind: devlog
entry: 106
devlog_id: '106'
date: '2026-10-07'
session: Session 4 — The top rungs
tags:
  - audio
images: []
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-106-the-wood-s-music-the-organ-s-piece-rolling-mist-roof-stairs
source: Claude handoff · development/devlog-106-the-wood-s-music-the-organ-s-piece-rolling-mist-roof-stairs.md
related: []
updated: '2026-10-11'
---

# The wood's music, the organ's piece, rolling mist, roof stairs

- **Music moved in** (Suno, by the author): `music_hollow_day` and
  `music_hollow_night` each with a slow version, `music_manor` (plays inside
  the house and under it), `music_night_2` (replacing the dropped drone),
  `music_organ`. None of them sits on one note.
- **Playing the pipe organ** plays `music_organ`: whatever is playing fades
  out over a second, the piece plays once through, and the usual music
  comes back after its usual gap (`Audio.play_piece`). Playing again while
  it plays does nothing.
- **The mist rolls**: the Hollow Wood's ground fog now swells and thins on
  a slow uneven cycle (about a minute), from full down to a third, so there
  are times you can see along the ground.
- **Roof stairs**: `roof_slate_dark_stairs_*`. On the manor and the carriage
  house the top block of each roof step is a stair tile facing up the
  slope; the roofs keep their two-for-one steepness and read as slopes.
