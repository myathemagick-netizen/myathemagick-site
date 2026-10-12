---
title: 122. The heat
description: 'The other half of the temperature system, built before anything hot exists (no desert, no Ashlands, no weather yet): the author''s call, "balance the cold with the heat so the systems are in place".'
section: development
kind: devlog
entry: 122
devlog_id: '122'
date: '2026-10-08'
session: Session 4 — The top rungs
tags:
  - desert
  - survival
  - creatures
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-08__heat_icons_and_gear.jpg
    alt: The three heat icons and the light kit
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-08__heat_character.jpg
    alt: The Character screen in a hot land, in the light kit
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-122-the-heat
source: Claude handoff · development/devlog-122-the-heat.md
related: []
updated: '2026-10-11'
---

# The heat

The other half of the temperature system, built before anything hot exists
(no desert, no Ashlands, no weather yet): the author's call, "balance the
cold with the heat so the systems are in place".

- **`Climate.exposure(env)`** now takes one dictionary and returns the cold
  *and* the heat where you stand. Heat comes from **a land's own heat**
  (`Climate.LANDS`: land id -> `day_heat`, `night_heat`, `day_cold`,
  `night_cold`; empty today; a desert would be `{"day_heat": 10,
  "night_cold": 6}`, the Ashlands `{"day_heat": 14, "night_heat": 14}`) and
  **weather** (`Climate.weather_heat` / `weather_cold`, 0 today: Meteorology
  sets them, so a heatwave is one line). **Shade** (a roof, indoors, a cave)
  takes 6 off and **water** (wading, swimming) 8, never below 0.
- **A second meter, not a signed one.** `Survival.heat` (0-100, saved, older
  saves load 0) mirrors `chill`, rather than turning `chill` into one signed
  body temperature: nothing saved, tested or shown had to change, and the two
  can be told apart in the code. The worse of the two shows on the HUD. (A
  signed meter would be tidier; it can still be done later.)
  - It aims at 15 per point of **heat minus the cool you wear, with heavy
    clothes counted against you** (`Climate.HEAVY` 0.5 of your warmth:
    `Player.heat_gap()`), climbing 1 a second, falling 1.5 (4 in water).
  - **Warm** (25): food burns 10% faster, walking 5% slower. **Hot** (50):
    30% faster, you stop mending, 12% slower. **Scorching** (80): 60%
    faster, 25% slower, 0.4 health a second. Of cold and heat the slower
    speed counts; you can't sleep when hot or worse; a collapse resets both
    ("The heat takes you").
- **Shown**: three sun icons (a small sun, a full sun, a blazing red one
  with a bar of fire under it), "Warm / Hot / Scorching" in the Character
  screen's status line, and its two lines now read "Warmth 0 · Cool 8" and
  "Heat here 12 (land +12)" or "Cold here ..." or "(no cold or heat here)".
- **A `cool` stat** beside `warmth` (tooltips say what each does; warm
  clothes in the heat count against you). **The light kit**, one model a
  slot, four slots: **Tropical Shirt** 3, **Shorts** 2, **Wide Hat** 2,
  **Sandals** 1: 8 at Spore, **11** Sprout, **13** Mycelial, **15** Fruiting,
  **16** Bloom; no warmth. 16 recipes the same four ways as the others (cloth
  and plant fibre at the table; yarn; fabric at Tailoring 3; the textile
  machine). With the five warm garments that is nine garments to model.
- **How it balances** (the stage the heat settles at; the heats are
  made-up examples: "heatwave" 8 (too fierce for real weather: see the
  guide below), "desert day" 10, "Ashlands" 14):

  | Kit (cool / warmth) | Heatwave 8 | Desert 10 | Ashlands 14 | Both 22 |
  |---|---|---|---|---|
  | Bare | scorching | scorching | scorching | scorching |
  | Basic warm kit as crafted (0 / 10) | scorching | scorching | scorching | scorching |
  | Warm kit, Fruiting (0 / 27) | scorching | scorching | scorching | scorching |
  | Light, Spore (8) | ok | warm | scorching | scorching |
  | Light, Sprout (11) | ok | ok | warm | scorching |
  | Light, Mycelial (13) | ok | ok | ok | scorching |
  | Light, Fruiting (15) | ok | ok | ok | scorching |

  So the same trade as the cold, mirrored: take off the parka, put on the
  shirt; each light tier buys a step; shade and water are the rest.
- **A guide for weather and lands**: a bare player settles at up to 1.6
  points comfortably, up to 3.3 Warm or Chilly and no worse (the night is 2
  everywhere), up to 5.3 Hot or Cold, and beyond that Scorching or Freezing. So
  weather that reaches everywhere (towns, nights, players with no gear yet)
  should stay around 2-3; the "heatwave 8" in the table is only to show the
  kits, and would put a bare player in scorching within about 80 seconds.
  Anything stronger should be one land or one region, or have shade and water
  easy to find. (The same note is in `climate.gd`.)
- **Not done**: drinking to cool down (there's no thirst or drink-water
  action yet), wet clothes, a heat shimmer in the air, and of course the
  hot lands and the heatwave themselves. The old "Hot climates" card (which
  included a desert) is withdrawn.
- A rename on the way so "heat" means only heat: the lit fires that warm you
  are now `Climate.FIRES`, group `fires`, `FurnitureProp.is_lit()`,
  `Climate.near_fire()`.
- `hot_test` mirrors `cold_test` with a made-up hot land under the player's
  feet (and a heatwave and a cold snap through the weather hooks).

![The three heat icons and the light kit](/images/encyclopedia/game/screenshots__2026-10-08__heat_icons_and_gear.jpg)

*Development gameplay capture*
![The Character screen in a hot land, in the light kit](/images/encyclopedia/game/screenshots__2026-10-08__heat_character.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-08/heat_hud_scorching.png: Scorching)*
*(image not bundled: docs/screenshots/2026-10-08/heat_character_long.png: The longest line the Character screen should have to show: it wraps in its column, it doesn't widen it)*
