---
title: '142. Playtest notes: sounds and anti-aliasing'
description: 'The author''s first playtest of build 229: (1) a weird hiss with footsteps in the night ambience of the wetlands, woods and autumn fields (the sporelands and the desert have their own night-time ambience, so they don''t play the gen...'
section: development
kind: devlog
entry: 142
devlog_id: '142'
date: '2026-10-11'
session: Session 4 — The top rungs
tags:
  - desert
  - sporelands
  - autumn fields
  - audio
  - tools and tests
images: []
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-142-playtest-notes-sounds-and-anti-aliasing
source: Claude handoff · development/devlog-142-playtest-notes-sounds-and-anti-aliasing.md
related: []
updated: '2026-10-11'
---

# Playtest notes: sounds and anti-aliasing

The author's first playtest of build 229: (1) a weird hiss with footsteps in the night ambience of the wetlands, woods and autumn fields (the
sporelands and the desert have their own night-time ambience, so they don't play the general one): it was `amb_night_1` (96% of it above 6 kHz,
a hiss, with stray thumps in it); **removed** (the original is in `asset_src/audio_before_clean/`); `amb_night_2` stays as it was. (2) One of the
squishy mycelium steps had the buzz: `step_fungal_2`, a 200 Hz hum under it; cleaned (high-passed at 1 kHz, its worst ringing tone notched;
`asset_src/tools/clean_hum.py` does this). (3) TAA left tracers (ghosting as the camera moves) and MSAA (2x and 4x) left teal seams between blocks; FXAA looked best. So the Graphics page now offers **Off and FXAA only**, FXAA by default, and a saved TAA or MSAA choice becomes FXAA. The MSAA seams are very likely the texture atlas bleeding into the next tile when the edges are sampled; not investigated, so MSAA could come back after the atlas gets a border around each tile.
