---
title: 129. A big sun for the Glass Desert
description: As the Hollow Wood has a big moon, the desert has a big sun (the author's idea).
section: development
kind: devlog
entry: 129
devlog_id: '129'
date: '2026-10-11'
session: Session 4 — The top rungs
tags:
  - desert
  - hollow wood
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-08__desert_sun_morning.jpg
    alt: The desert sun in the morning
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-08__desert_sun_evening.jpg
    alt: And before sunset
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-129-a-big-sun-for-the-glass-desert
source: Claude handoff · development/devlog-129-a-big-sun-for-the-glass-desert.md
related: []
updated: '2026-10-11'
---

# A big sun for the Glass Desert

As the Hollow Wood has a big moon, the desert has a big sun (the author's idea).

- **The palette's `fx` has a third setting**: `fx.b` is how much bigger the sun is, 0 to 1
  (`fx.r` is the ground mist, `fx.g` the Hollow Wood's moon). `DayNight` sets the sun's
  light disc from it, 0.5 degrees at 0 and 7 at 1, and the glow round it grows with it; it eases in
  over a few seconds as you cross into the land, like the sky colour. The desert is 0.45: **a disc
  about 3.4 degrees across, seven times the normal sun**, pale and soft, a big weight low
  in the morning and evening sky. Nothing else changes: the moon, the other lands' suns.
- **Tuning**: `"fx": Color(0, 0, 0.45)` in the desert's line of `biome_palette.gd`. Bigger
  also softens the sun's shadows a little (not looked at closely: the pictures don't show it).
- `tools/desert_shots.gd` now photographs the sun too. `desert_test` checks the ordinary size
  outside, the 3.4 degrees in, and that the moon's and the sun's settings are separate.
- Tests run for this one: `desert_test`, `hollow_test`, `biome_test`, `hot_test`, `cold_test`,
  `round2_test` (all passed). The full suite was not re-run (the last full run, 78 of 78,
  was just before the ambience swap).

![The desert sun in the morning](/images/encyclopedia/game/screenshots__2026-10-08__desert_sun_morning.jpg)

*Development gameplay capture*
![And before sunset](/images/encyclopedia/game/screenshots__2026-10-08__desert_sun_evening.jpg)

*Development gameplay capture*
