---
title: '94. The Hollow Wood, step 1: the wood itself'
description: 'A new land, hollow. Rare (about 2.5% of the world, against 10-15% for the others), never on a mountain and never within 350 m of the home town, but each wood is wide: the larger ones run 10-18 hectares, room for the estate that co...'
section: development
kind: devlog
entry: 94
devlog_id: '94'
date: '2026-10-06'
session: Session 4 — The top rungs
tags:
  - hollow wood
  - mountains
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-06__09_hollow_day.jpg
    alt: The wood by day
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-06__10_hollow_ancient_far.jpg
    alt: An ancient tree
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-094-the-hollow-wood-step-1-the-wood-itself
source: Claude handoff · development/devlog-094-the-hollow-wood-step-1-the-wood-itself.md
related: []
updated: '2026-10-11'
---

# The Hollow Wood, step 1: the wood itself

A new land, `hollow`. Rare (about 2.5% of the world, against 10-15% for the
others), never on a mountain and never within 350 m of the home town, but
each wood is wide: the larger ones run 10-18 hectares, room for the estate
that comes next.

| Part | What it is |
|---|---|
| Ground | `leaf_litter`: years of fallen leaves, dark, a few still red; dirt where it's worn through. Digs up as dirt |
| Trees | wine-red and crimson (`leaves_wine`, `leaves_crimson`, with the autumn red), packed close, one in five dead |
| Ancient trees | trunks three across, 10-15 high, buttress roots, a wide flat canopy with leaves hanging off it. Nothing grows within 6 m. Two in five are hollow: a doorway two high and a space inside to stand in |
| Sky | plum and dim at any hour (`BiomePalette` gained `ambient`, so the shade darkens too) |
| Mist | fog lying along the ground, following the ground's height (`fx.r`, `DayNight.fog_floor`); gone underground |
| Moon | at night a red moon several times the usual size, and its light is red (`fx.g`) |
| Sound | `amb_hollow` (ElevenLabs, 2 takes): wind in bare branches, boughs creaking, a far crow |
| Fungi | more of them than anywhere but the bloom |
| Squirrels | none: the red trees keep other company (crows and owls, step 4) |

- Journal page, compass name and map colour are in; the journal picture is
  an ancient tree.
- Music prompts for `music_hollow_day` / `music_hollow_night` are in
  `docs/music_requests.md`.
- `hollow_test` (rarity near home, the floor, the trees, a hollow trunk's
  doorway, the sky, the mist, the moon).
- Known: stars show through the moon's disc. The hollow inside a trunk is
  one block wide.

![The wood by day](/images/encyclopedia/game/screenshots__2026-10-06__09_hollow_day.jpg)

*Development gameplay capture*
![An ancient tree](/images/encyclopedia/game/screenshots__2026-10-06__10_hollow_ancient_far.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-06/11_hollow_ancient.png: Under one)*
*(image not bundled: docs/screenshots/2026-10-06/12_hollow_inside.png: Looking out of a hollow trunk)*
*(image not bundled: docs/screenshots/2026-10-06/13_hollow_moon.png: The moon)*
*(image not bundled: docs/screenshots/2026-10-06/14_hollow_night.png: The wood at night)*
