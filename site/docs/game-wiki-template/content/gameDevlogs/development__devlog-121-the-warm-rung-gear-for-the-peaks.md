---
title: '121. The warm rung: gear for the peaks'
description: 'The author: more tiers of warm gear (tailoring has only so many), higher numbers (8 felt low), few models (the gear will need player models one day), and the best gear at the top of a mountain should barely touch you.'
section: development
kind: devlog
entry: 121
devlog_id: '121'
date: '2026-10-08'
session: Session 4 — The top rungs
tags:
  - mountains
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-08__warm_gear_icons.jpg
    alt: The five new garments
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-121-the-warm-rung-gear-for-the-peaks
source: Claude handoff · development/devlog-121-the-warm-rung-gear-for-the-peaks.md
related: []
updated: '2026-10-11'
---

# The warm rung: gear for the peaks

The author: more tiers of warm gear (tailoring has only so many), higher
numbers (8 felt low), few models (the gear will need player models one day),
and the best gear at the top of a mountain should barely touch you.

- **One new garment per slot** (five models, not fifteen); the item tiers
  (Spent .. Bloom) are the same garment better made, recolours later, not
  new models. All Spore of themselves; made of the garment you have and
  hyphal felt (the pale mat that comes off mycelium patches):

  | Slot | Basic | New | Warmth | Felt |
  |---|---|---|---|---|
  | Body | Padded Jacket | **Felt-Lined Parka** | 5 | 6 |
  | Legs | Trousers | **Quilted Overtrousers** | 3 | 4 |
  | Head | Cloth Hood | **Trapper's Hood** | 2 | 3 |
  | Hands | Hand Wraps | **Felt Mittens** (+1 protection) | 2 | 2 |
  | Feet | Rag Boots | **Mountain Boots** (+1 protection) | 3 | 3 |

  A kit is 15 at Spore, **20** Sprout, **24** Mycelial, **27** Fruiting,
  **30** Bloom (nothing can make Bloom yet), and costs 18 felt.
- **Recipes** (20), the same four ways as the old gear: the sewing table
  (Tailoring 2, from the garment plus felt and cloth: Spore); the sewing
  machine with yarn (Tailoring 2: Sprout) or with woven fabric (Tailoring 3:
  Mycelial); the textile machine (Fruiting, with mycelium leather).
- **A correction to the numbers I first gave**: the padded jacket is Mycelial
  of itself, so as crafted it is worth 5 and a basic kit is **10**, not 8
  (8 is the same five garments forced to Spore).
- **How it balances.** Cold goes up with height, to 19 on the tallest peaks
  by day and 23 at night (the real peaks, seeds 1-4 and 127, reach 98-119);
  gear is worth up to 27 now. What each kit feels (the stage the chill
  settles at; "ok" is under chilly):

  | Kit (warmth) | Snow line, 62 (5 / 9 night) | 82 (10 / 14) | 100 (14 / 18) | Tallest, 118 (19 / 23) |
  |---|---|---|---|---|
  | Bare (0) | cold / freezing | freezing | freezing | freezing |
  | Basic as crafted (10) | ok / ok | ok / cold | cold / freezing | freezing |
  | Warm, Spore (15) | ok | ok | ok / cold | cold / freezing |
  | Warm, Sprout (20) | ok | ok | ok | ok / chilly |
  | Warm, Mycelial (24) | ok | ok | ok | ok / ok |
  | Warm, Fruiting (27) | ok, with 4 points to spare for storms | | | |

  So the best gear you can make barely touches you on the tallest peak at
  night (and has four points left for weather), the basic kit takes you up
  to about 80 m by day, and the points between are the climb.
- Fires and roofs matter more now: a roof takes 6 off, a lit fire 8 more, so
  a heated summit hut is the answer where gear isn't enough.
- No player models were made. When they are: five garments, in the five
  slots; tiers by colour.
- `cold_test` checks the kit sums, the slots, and all 20 recipes (every
  ingredient exists).

![The five new garments](/images/encyclopedia/game/screenshots__2026-10-08__warm_gear_icons.jpg)

*Development gameplay capture*
