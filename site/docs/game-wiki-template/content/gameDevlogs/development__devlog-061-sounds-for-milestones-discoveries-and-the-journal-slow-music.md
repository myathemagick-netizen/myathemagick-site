---
title: 61. Sounds for milestones, discoveries and the Journal; slow music
description: Sounds for milestones, discoveries and the Journal; slow music
section: development
kind: devlog
entry: 61
devlog_id: '61'
date: '2026-10-04'
session: Session 4 — The top rungs
tags:
  - audio
  - interface
images: []
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-061-sounds-for-milestones-discoveries-and-the-journal-slow-music
source: Claude handoff · development/devlog-061-sounds-for-milestones-discoveries-and-the-journal-slow-music.md
related: []
updated: '2026-10-11'
---

# Sounds for milestones, discoveries and the Journal; slow music

- Seven new sounds from ElevenLabs (flow "Mycelium game audio"), logged in
  `asset_src/audio_sources.json`: `milestone` (reached), `milestone_claim`
  (reward claimed), `place_found` (onto the compass), `brew_learned` (first
  drink), `note_taken` (research notes: quiet, at most every 2.5 s),
  `journal_open` (the Journal tab), `page_turn` (Journal pages). Milestones
  no longer share `level_up` with research.
- Checked by measuring, not just by ear: the first `place_found` takes and
  two `brew_learned` ones were near silent and were made again or dropped.
  New `asset_src/tools/tidy_sfx.py` reports a file's length, where its sound
  is and its peak, and trims silence, caps the length with a fade and levels
  the peak (libsndfile writes mp3).
- **Slow versions of music:** `<piece>_slow` plays instead of the piece a
  quarter of the time by day, more than half at night; a land's day piece
  slowed stands in for a night piece it hasn't got. Suno's names work as
  they are (a take without a number is fine).
- `audio_check` needs the new sounds and checks how often slow versions play.
