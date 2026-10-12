---
title: 87. Weathering that tells you what happened (step 1 of GPT's Rustbelt notes)
description: Weathering that tells you what happened (step 1 of GPT's Rustbelt notes)
section: development
kind: devlog
entry: 87
devlog_id: '87'
date: '2026-10-05'
session: Session 4 — The top rungs
tags:
  - rustbelt
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-05__27_weathered_hall.jpg
    alt: A weathered factory hall
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-05__28_weathered_ironworks.jpg
    alt: The ironworks, sooted
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-087-weathering-that-tells-you-what-happened-step-1-of-gpt-s-rustbelt-notes
source: Claude handoff · development/devlog-087-weathering-that-tells-you-what-happened-step-1-of-gpt-s-rustbelt-notes.md
related: []
updated: '2026-10-11'
---

# Weathering that tells you what happened (step 1 of GPT's Rustbelt notes)

- **Eleven weathered blocks**: `metal_clean` (kept dry), `metal_deep_rust`
  (rusted through), `metal_flaking` (painted once), `metal_sooted`,
  `brick_sooted`, `brick_efflorescent` (damp, salts), `concrete_spalled`
  (burst to its rebar), `diamond_plate`, `insulation`, `copper_patina`,
  `ash`. All are building blocks too.
- **Directional weathering** in the stamper (`StructureStamper._weather`,
  rules in themes.json `decay.weather`). What a block becomes depends on
  where it is, in **every** building, not only the works:

| Rule | Where it applies | Notes |
|---|---|---|
| damp | the foot of outside walls | thinning upward |
| wet | roofs, and under a window with no glass | roofs go in patches |
| soot | within reach of a furnace, a fireplace or a chimney | |
| smoke | the top row of a tall room's walls | a band under the eaves |
| ash | the floor at a fire's foot | |
| oil | the floor under a machine | |
| dry | inside walls away from all that | |
| burst | cracked concrete beside a gap | shows its rebar |
| torn | an inside wall beside a gap | shows its insulation |
| verdigris | old pipes | some of them |

- The weathering uses its own dice, so ruin and growth come out as before,
  and a building weathers the same way every time.
- The works: halls are painted steel inside (flaking, dry or sooted), with
  tread plate under the stairs, rust at the foot and soot under the eaves.
  The ironworks is black round its furnace and up its stack.
- Breaking the rusted kinds barehanded can cut you too (tetanus).
- `weathering_test` pins each rule: damp only at the foot, soot only by
  the fires, and so on.

![A weathered factory hall](/images/encyclopedia/game/screenshots__2026-10-05__27_weathered_hall.jpg)

*Development gameplay capture*
![The ironworks, sooted](/images/encyclopedia/game/screenshots__2026-10-05__28_weathered_ironworks.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-05/29_weathered_hall_inside.png: Inside the hall)*
