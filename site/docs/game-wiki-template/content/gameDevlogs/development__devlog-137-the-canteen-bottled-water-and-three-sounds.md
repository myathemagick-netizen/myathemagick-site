---
title: 137. The canteen, bottled water and three sounds
description: 'The author''s design. A canteen (canteen, a tool of kind canteen; its uses are its water in per cent, 100 full, and an empty one is not broken: "canteen~0"): use at open water fills it (like the bucket), hold use to drink: the wate...'
section: development
kind: devlog
entry: 137
devlog_id: '137'
date: '2026-10-11'
session: Session 4 — The top rungs
tags:
  - audio
  - survival
images: []
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-137-the-canteen-bottled-water-and-three-sounds
source: Claude handoff · development/devlog-137-the-canteen-bottled-water-and-three-sounds.md
related: []
updated: '2026-10-11'
---

# The canteen, bottled water and three sounds

The author's design. A **canteen** (`canteen`, a tool of kind `canteen`; its uses are its water in per cent, 100 full, and an empty one is
not broken: "canteen~0"): **use at open water fills it** (like the bucket), **hold use to drink**: the water drains at 20% a second
(about five seconds for a full one), each per cent drunk takes 0.4 off the **heat** meter, and the gulp sound plays every 1.3 s; its **bar in
the hotbar is blue** (the tools' wear bars are red to green). Breaking things with it in hand costs no water. It is made at the workbench
(2 scrap metal, 2 cloth, a glass bottle; empty) and a white highway wreck has a small chance of one. **Bottled water** (`bottled_water`)
is a single-use item (hold use) that takes 30 off the heat at once; white wrecks and any vending machine can give it (the highway's
white wrecks 45%, vending machines 45%). `Survival.eat` got a `cool` use. `tests/canteen_test.gd`.

Sounds (ElevenLabs, 150 credits, one take each of three, kept the best-looking by length and level; I can't hear them: please tell me if
any is wrong and I'll use another take): `hopper_squeak` (as a hopper bolts), `hopper_thump` (a soft landing after each hop, quieter when it
is only wandering) and `canteen_gulp`. Their ids are in `asset_src/audio_sources.json`; the other takes are in the flow.
