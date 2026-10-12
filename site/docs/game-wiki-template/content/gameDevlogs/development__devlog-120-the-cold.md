---
title: 120. The cold
description: The gear's warmth stat had been a number on a tooltip. Now it matters.
section: development
kind: devlog
entry: 120
devlog_id: '120'
date: '2026-10-08'
session: Session 4 — The top rungs
tags:
  - interface
  - survival
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-08__cold_hud_chilly.jpg
    alt: Chilly on a peak
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-08__cold_hud_freezing.jpg
    alt: Freezing
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-120-the-cold
source: Claude handoff · development/devlog-120-the-cold.md
related: []
updated: '2026-10-11'
---

# The cold

The gear's warmth stat had been a number on a tooltip. Now it matters.

- **`Climate`** (`world/climate.gd`) works out the cold where you stand, in
  points, once a second (`main_world`, with the snow): *height* a quarter
  point a metre above 42 m (about 5 at the snow line, 10 at 82 m, 19 on the
  tallest peaks, from the heights measured in §119), *night* +2 in the open
  (+4 up high), *a roof* -6 (indoors, a hut, a cave; never below 0), *a fire*
  -8 within a few metres of a lit campfire, hearth, kiln, stove, furnace or
  a boiler with fuel (`heat_sources` group, `FurnitureProp.is_heating`),
  *weather* added later (a hook, nothing yet). Off in the tests unless one
  turns it on (`Climate.enabled`), so nothing standing on a peak freezes.
- **The chill** (`Survival.chill`, 0-100, saved; old saves load warm) aims at
  15 points for every point of cold beyond your warmth, climbing 1 a second
  and falling 1.5 (3 by a fire). So the cold never reaches further than the
  gap: bare at night on low ground (2) stops at 30, chilly, for good.
  - **Chilly** (25): you burn food 20% faster.
  - **Cold** (50): 50% faster, you stop mending, you walk 10% slower.
  - **Freezing** (80): twice as fast, 20% slower, and 0.4 health a second
    (four minutes from full).
  - You can't sleep while cold or worse (sleep skips the clock without
    ticking survival, so the cold would be skipped too; a chilly night on
    low ground is mild on purpose and doesn't stop you). A message when it
    gets worse, at most one every 20 s. Dying of it has its own last line
    ("The cold takes you"), and you wake warm: the chill is reset when you
    collapse (it wasn't, at first: a player who froze woke still freezing).
- **Shown**: three snowflake icons for the HUD (small and pale; a full
  flake; a flake in a block of ice), and the Character screen now reads
  "Warmth 6 · Cold here 9 (height +5, night +4)" under your health, with the
  state (Chilly, Cold, Freezing) in the status line; a hint under the
  Warmth stat on gear tooltips. The gear note now says only protection
  doesn't count yet.
- **What the gear is worth.** A correction: the padded jacket is Mycelial of
  itself, so as crafted it is worth 5, not 3, and a basic kit as made is 10.
  The same five garments forced to a tier: Spore 8, Sprout 10, Mycelial 14,
  Fruiting 15, Bloom 16. Bare, on a peak at height 80 by day (10 points), you
  are freezing in about 80 s; in a basic kit you are just comfortable.
- A bug on the way, noticed because the tests ran and the import didn't: an
  untyped list lookup (`CHILL_HUNGER[stage]`) can't be a `:=` variable; the
  import said nothing about it.
- `cold_test`: the numbers above (a campfire at 2 m counts, at 12 m not), the
  stages and what they do, saving, the HUD ids, the Character line, a peak.

![Chilly on a peak](/images/encyclopedia/game/screenshots__2026-10-08__cold_hud_chilly.jpg)

*Development gameplay capture*
![Freezing](/images/encyclopedia/game/screenshots__2026-10-08__cold_hud_freezing.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-08/cold_character.png: The Character screen on a peak)*
