---
title: 62. Suno music in
description: Suno music in
section: development
kind: devlog
entry: 62
devlog_id: '62'
date: '2026-10-04'
session: Session 4 — The top rungs
tags:
  - audio
images: []
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-062-suno-music-in
source: Claude handoff · development/devlog-062-suno-music-in.md
related: []
updated: '2026-10-11'
---

# Suno music in

- Thirteen Suno tracks (made by the project's author) moved in from the inbox:
  day music for every land (`music_<land>_day`), day and night for the
  Sporelands, each with its slow version; and the main title theme
  (`music_title_main`, from "mycelium titles"). `wetlands` files renamed to
  the land's id, `wetland`. Loudness checked against the old music (RMS
  -17 to -20 dB, inside the old -16 to -25): left as they are.
- **Title screen:** the main theme plays first every time; stay 40 s past it
  and the two older title pieces take turns (an easter egg).
- Lands without night music of their own play their day piece's slow version
  at night.
- `audio_check`: the title order, and every land has day music.
