---
title: 4. Sound and music
description: The game has a voice now, generated with ElevenLabs through its connector. Eighteen sound effects were written as short, concrete prompts ("Single footstep on old wooden floorboards, hollow knock with a faint creak") with three or...
section: development
kind: devlog
entry: 4
devlog_id: s2:4
date: '2026-10-01'
session: Session 2 — Days, nights and an appetite
tags:
  - hollow wood
  - audio
  - creatures
images: []
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-s2-04-sound-and-music
source: Claude handoff · development/devlog-s2-04-sound-and-music.md
related: []
updated: '2026-10-11'
---

# Sound and music

The game has a voice now, generated with ElevenLabs through its connector.
Eighteen sound effects were written as short, concrete prompts ("Single
footstep on old wooden floorboards, hollow knock with a faint creak") with
three or four takes of each, so footsteps and breaking never repeat exactly.
Three music tracks were generated as instrumentals: a hopeful, melancholy
ambient folk piece for the day, a dark ambient drone for the night, and a
piano-and-cello theme for the title screen. Generating everything cost about
23,000 credits, most of it music.

A small `Audio` system plays them. Every sound picks a random take with a
slight pitch shift. **Footsteps** change with the block underfoot: soft
grass and soil, hard concrete and asphalt, hollow wooden floors. There are
sounds for breaking (stone, wood, soil, glass), placing, doors, eating,
searching, picking things up, splashing into water and menu clicks.
**Ambience** loops crossfade with the sky (wind and distant birds by day,
crickets by night) and turn muffled under water. **Music** works like
Minecraft's: a track, then a few minutes of quiet, then the next, with day
and night pieces following the clock. Music, effects and ambience each have
a volume slider in Settings.

ElevenLabs only lets so many generations queue at once, so the first request
got about three takes per sound instead of four, which was plenty. The music
was queued once those finished. Each clip's prompt and ElevenLabs ID are
kept in `asset_src/audio_sources.json`, so any sound can be traced back and
regenerated.

One trap along the way: game scripts first called the audio system by its
global name. That works when the game launches normally, but tools and tests
compile scripts before global nodes exist, so the save test suddenly failed to
compile at all. Game code now goes through a small `Sfx` helper that finds
the audio system when it's called, which also means the game runs silently
if the audio is ever missing.

---
