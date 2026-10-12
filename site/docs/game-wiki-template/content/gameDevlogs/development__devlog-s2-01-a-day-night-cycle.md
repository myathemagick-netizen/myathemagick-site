---
title: 1. A day/night cycle
description: 'A full day now lasts twenty minutes. The sun crosses the sky on a tilted path and a pale moon follows opposite it. The sky, sunlight, ambient light and distance haze are all graded from the sun''s height: a muted, overcast day (it''...'
section: development
kind: devlog
entry: 1
devlog_id: s2:1
date: '2026-09-30'
session: Session 2 — Days, nights and an appetite
tags: []
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-01__01_sunrise.jpg
    alt: Sunrise
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-01__02_morning.jpg
    alt: Morning
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-s2-01-a-day-night-cycle
source: Claude handoff · development/devlog-s2-01-a-day-night-cycle.md
related: []
updated: '2026-10-11'
---

# A day/night cycle

A full day now lasts twenty minutes. The sun crosses the sky on a tilted path
and a pale moon follows opposite it. The sky, sunlight, ambient light and
distance haze are all graded from the sun's height: a muted, overcast day
(it's still the end of the world), orange and pink sunrises and sunsets,
purple dusk, and a deep blue night full of stars. Nights are dark but
readable, leaving room for torches once crafting exists. The pause menu shows
the day and time, and beds now matter: at night you sleep until morning, by
day you rest for an hour.

Getting it to look right took a few passes. The first render had the whole
sky as one flat colour, because Godot's fog covers the sky by default and was
hiding the gradient, the sun disc and the stars. It was also tinting the
whole landscape orange at dawn. With the fog limited to the land and its
colour softened, the sky came alive. Then the low sun drew as a dark smudge:
the sky shader blends toward the sun light's colour, and at dawn that light
is dim, so the disc now only appears once the sun is bright. The stars
bunched up and streaked near the zenith, the classic artefact of drawing on
a flat sky image that gets wrapped around a sphere. They're now spread
evenly over the dome and drawn wider the closer they sit to the pole.

![Sunrise](/images/encyclopedia/game/screenshots__2026-10-01__01_sunrise.jpg)

*Development gameplay capture*
![Morning](/images/encyclopedia/game/screenshots__2026-10-01__02_morning.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-01/03_sunset.jpg: Sunset)*
*(image not bundled: docs/screenshots/2026-10-01/04_dusk_stars.jpg: Dusk, first stars)*
*(image not bundled: docs/screenshots/2026-10-01/05_night.jpg: Night)*
*(image not bundled: docs/screenshots/2026-10-01/06_stars_overhead.jpg: Stars overhead)*
