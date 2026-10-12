---
title: 118. Seventeen new sounds
description: 'The code asked for one sound that had no file (hurt), the wishlist was three weeks out of date, and the manor was nearly silent. So: a batch from ElevenLabs, 3 takes of each of 17 keys (51 takes, 50 credits a take, about 2,550 cre...'
section: development
kind: devlog
entry: 118
devlog_id: '118'
date: '2026-10-08'
session: Session 4 — The top rungs
tags:
  - hollow wood
  - audio
images: []
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-118-seventeen-new-sounds
source: Claude handoff · development/devlog-118-seventeen-new-sounds.md
related: []
updated: '2026-10-11'
---

# Seventeen new sounds

The code asked for one sound that had no file (`hurt`), the wishlist was
three weeks out of date, and the manor was nearly silent. So: a batch from
ElevenLabs, 3 takes of each of 17 keys (51 takes, 50 credits a take, about
2,550 credits or 56 cents; I'd said 16 keys and then generated 17: seven
for the manor and ten from the old wishlist). Prompts and generation ids are
in `asset_src/audio_sources.json`; levelled with `tidy_sfx.py` to sit with
what was already there.

Five takes were thrown away before they went in, from their numbers alone
(nobody here can hear them): a "footstep" that ran 5 s, a pain grunt that ran
3 s with a constant noise floor, a 0.5 s armour clank with a peak of 0.07, a
clock chime at 0.04, a sidewalk take that was plainly several steps. A sixth
(a piano take at 0.03) went in and came out again after review: it would have
been raised by 24 dB. 46 takes kept, two or three a key.

- **Footsteps**: `step_carpet` on carpet, carpeted stairs and any rug (a rug
  is a block with no collision lying in the cell you stand in, so it is that
  cell, not the one under you, that is tested); `step_sidewalk` on paving;
  `stair_creak` one step in four on a wooden or carpeted stair, layered under
  the step; `leaves_rustle` half the steps on leaf litter and through dry
  grass and stalks; `brush_fungal` through fungal growth, with now and then
  a `squish`.
- **Looking at things**: a grandfather clock chimes, a piano plays its one
  note, a suit of armour clanks (`LOOK_SOUND` in `furniture_prop.gd`). Not
  every hour: a game hour is 50 s, and the manors have several clocks.
- **Opening things**: display cases and the rare book case use `glass_case`.
- **Taking things apart**: posters, calendars and wall maps tear, graffiti is
  scrubbed, skeletons rattle. A picture or sign whose wall goes crashes down
  (once, however many fall).
- **`hurt`**: in `hurt()` itself, so falls and fire both get it, at most once
  every 0.7 s. The fire code's own line is gone (it played the fire loop when
  there was no grunt).
- **Wind**: a gust every 40-110 s in the open (clear sky and no roof in the
  20 blocks above, not in a landmark).
- `audio_check` now lists these 17 keys and the Hollow Wood's four that were
  never on it. The wishlist is rewritten.
- Not heard in game; the author is to listen. The weakest keys are
  `piano_note` (all three takes came out quiet) and `step_carpet`.
