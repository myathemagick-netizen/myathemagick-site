---
title: 144. The hum taken out of the whole sound library
description: 'The author found the stronger cleaning better, so assetsrc/tools/cleanlibrary.py ran the gentle version (spectral subtraction and the comb notch only: no high-pass, no gate, so lows and tails stay) over every ElevenLabs sound effe...'
section: development
kind: devlog
entry: 144
devlog_id: '144'
date: '2026-10-11'
session: Session 4 — The top rungs
tags:
  - audio
images: []
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-144-the-hum-taken-out-of-the-whole-sound-library
source: Claude handoff · development/devlog-144-the-hum-taken-out-of-the-whole-sound-library.md
related: []
updated: '2026-10-11'
---

# The hum taken out of the whole sound library

The author found the stronger cleaning better, so `asset_src/tools/clean_library.py` ran the gentle version (spectral subtraction and the comb
notch only: no high-pass, no gate, so lows and tails stay) over every ElevenLabs sound effect: 245 files, each keeping its length, channels
and loudness. The 200 Hz tone, against the rest of each sound, fell by a modest median 15% (4.8x to 4.1x): the gentle pass can only do so much
on sounds that are mostly sound. **34 files whose 200 Hz tone is strong are put back as they were**, since there it is probably the sound itself
(`loop_furnace`, `piano_note`, `place_found`, `collapse`, `myco_start`, `craft_done`...). The originals of everything touched are in
`asset_src/audio_before_clean_all/` (copy a file back to undo it). Ambience and music weren't touched. I can't hear any of it: if a sound now
seems thin or watery, say which and I'll put it back.
