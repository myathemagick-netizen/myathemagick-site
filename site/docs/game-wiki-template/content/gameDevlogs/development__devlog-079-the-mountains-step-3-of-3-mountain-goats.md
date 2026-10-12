---
title: '79. The Mountains (step 3 of 3): mountain goats'
description: 'The Mountains (step 3 of 3): mountain goats'
section: development
kind: devlog
entry: 79
devlog_id: '79'
date: '2026-10-05'
session: Session 4 — The top rungs
tags:
  - mountains
  - creatures
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-05__09_goats.jpg
    alt: Mountain goats
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-079-the-mountains-step-3-of-3-mountain-goats
source: Claude handoff · development/devlog-079-the-mountains-step-3-of-3-mountain-goats.md
related: []
updated: '2026-10-11'
---

# The Mountains (step 3 of 3): mountain goats

- **Mountain goats** (`Critters.Goat`, model `goat` in
  gen_furniture_props.py): shaggy white coats, beards, short black horns. One
  of them has a fleck of the network's teal.
- **Herds** of two or three keep to fixed spots on the open slopes, from a
  little below the treeline up into the snow, away from roads and trails.
  They're out by day only.
- **Behaviour:** they graze (heads down, tearing at the grass), stand and look
  about, and amble a few steps. Come within about 9 m and they **bound away
  uphill** in great springing leaps, then stop on a ledge to **watch you**
  until you back off. The herd's spot moves with them.
- They'll bleat as they bound off (`goat_bleat`), once that sound is made. It
  and a mountain wind ambience are on the sound wishlist.
- `goats_test` checks that herds keep to the mountains, stand on the ground,
  bound off away and uphill, stop to watch, and are gone at night.

![Mountain goats](/images/encyclopedia/game/screenshots__2026-10-05__09_goats.jpg)

*Development gameplay capture*
