---
title: 25. Power from what you find (Engineering)
description: 'A new field, Engineering, opened by Carpentry 1 + Electronics 2 (begin the notes at the writing desk). No wiring to lay: everything works through the battery banks you set down within 10 m (world/power.gd).'
section: development
kind: devlog
entry: 25
devlog_id: '25'
date: '2026-10-02'
session: Session 4 — The top rungs
tags:
  - power
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-02__18_electric_lamp_night.jpg
    alt: An electric lamp at night beside the crank generator and battery bank
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-02__19_power_models.jpg
    alt: Crank generator, battery bank, water wheel, electric lamp
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-025-power-from-what-you-find-engineering
source: Claude handoff · development/devlog-025-power-from-what-you-find-engineering.md
related: []
updated: '2026-10-11'
---

# Power from what you find (Engineering)

A new field, **Engineering**, opened by Carpentry 1 + Electronics 2 (begin
the notes at the writing desk). No wiring to lay: everything works through
the **battery banks** you set down within 10 m (`world/power.gd`).

- **Restored pipe** (workbench): a rusted pipe scoured with sand. Used in the
  water wheel and the electric lamp; steam later.
- **Dynamo** (electronics bench): wire, scrap and parts rewound into a small
  generator. **Hand-crank generator** (workbench): a dynamo, planks and
  mechanical parts. X cranks it: the handle turns, +3 charge into the banks
  close by, and you get a little hungrier. With no bank near, the power
  "goes nowhere".
- **Battery bank** (Engineering 1, electronics bench): three car batteries on
  a rack, 100 charge, saved with the world. X shows its charge.
- **Electric lamp** (Engineering 2): a standard lamp with a steady, whiter
  light than fire. It draws 1 charge a game hour; when the banks run dry it
  goes out.
- **Water wheel** (Engineering 3, workbench): set it beside water and it
  turns by itself, +8 charge every game hour, day and night.
- The **kitchen range** and **textile machine** now need power: each thing
  they make costs 3 / 4 charge from the banks near them (shown with the
  ingredients; "No power: charge a battery bank close by"). Engineering 4
  halves it.
- New crank sound (ElevenLabs). Turning parts in models are `__spin` children.

![An electric lamp at night beside the crank generator and battery bank](/images/encyclopedia/game/screenshots__2026-10-02__18_electric_lamp_night.jpg)

*Development gameplay capture*
![Crank generator, battery bank, water wheel, electric lamp](/images/encyclopedia/game/screenshots__2026-10-02__19_power_models.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-02/20_water_wheel.jpg: A water wheel turning beside water)*

`tests/power_test.gd`: the field's opening crafts, restoring a pipe,
cranking (charge, hunger, no double turns, nothing without a bank), a lamp
lighting, drawing down over game hours and going out when dry, a powered
station refusing without charge and drawing it with, a water wheel still on
dry land and turning beside water, and the bank's cap.
