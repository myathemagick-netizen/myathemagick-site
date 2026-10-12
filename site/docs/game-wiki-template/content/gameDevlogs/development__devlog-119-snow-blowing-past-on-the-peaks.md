---
title: 119. Snow blowing past on the peaks
description: 'The first of the cold weather (the author''s idea: snow blowing by at the tops of the mountains, from the north, not a blizzard; then cold that the gear''s warmth answers; heat later).'
section: development
kind: devlog
entry: 119
devlog_id: '119'
date: '2026-10-08'
session: Session 4 — The top rungs
tags:
  - mountains
  - survival
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-08__cold_motes_snow_day.jpg
    alt: By day
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-08__cold_motes_snow_night.jpg
    alt: By night (the dots in the sky are stars)
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-119-snow-blowing-past-on-the-peaks
source: Claude handoff · development/devlog-119-snow-blowing-past-on-the-peaks.md
related: []
updated: '2026-10-11'
---

# Snow blowing past on the peaks

The first of the cold weather (the author's idea: snow blowing by at the
tops of the mountains, from the north, not a blizzard; then cold that the
gear's warmth answers; heat later).

- **A fourth cloud in `BiomeMotes`**, switched by altitude, not by land: on
  when you are out in the open in the mountains and the *ground* under you
  (not a jump) is at the snow line or above (`SNOW_ON` = snow line - 2),
  off below `SNOW_OFF` (snow line - 6), so it doesn't flicker at the edge.
  Off under any roof (summit huts too), underground and in the manor.
- Small pale flakes (6-12 cm, 360 in the 24 m box round you), lit faintly
  from within so they show at night, a lazy sideways swirl, drifting toward
  +z: north is world -z (the compass).
- **Gusts**: every 9-22 s the flakes speed up for three seconds, and the
  `wind_gust` sound plays with it (the random outdoor gust is skipped up
  there so they don't double).
- The mountains' real heights, for the cold to come (seeds 1-4 and 127):
  half the ground over the tree line (50) is below 64, nine tenths below
  82, the very top about 98-100, the tallest single peaks 112-119.
- `motes_test`: no snow in the foothills, snow on a peak from the north, a
  gust within 25 s, none under a roof, the hysteresis, and nothing else in
  the air with it.

![By day](/images/encyclopedia/game/screenshots__2026-10-08__cold_motes_snow_day.jpg)

*Development gameplay capture*
![By night (the dots in the sky are stars)](/images/encyclopedia/game/screenshots__2026-10-08__cold_motes_snow_night.jpg)

*Development gameplay capture*
