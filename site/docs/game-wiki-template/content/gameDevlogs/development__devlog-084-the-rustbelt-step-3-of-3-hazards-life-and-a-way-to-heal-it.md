---
title: '84. The Rustbelt (step 3 of 3): hazards, life and a way to heal it'
description: 'The Rustbelt (step 3 of 3): hazards, life and a way to heal it'
section: development
kind: devlog
entry: 84
devlog_id: '84'
date: '2026-10-05'
session: Session 4 — The top rungs
tags:
  - rustbelt
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-05__21_catwalk_vines.jpg
    alt: Vines off a catwalk
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-05__22_hall_lamp.jpg
    alt: A work lamp in a dark hall
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-084-the-rustbelt-step-3-of-3-hazards-life-and-a-way-to-heal-it
source: Claude handoff · development/devlog-084-the-rustbelt-step-3-of-3-hazards-life-and-a-way-to-heal-it.md
related: []
updated: '2026-10-11'
---

# The Rustbelt (step 3 of 3): hazards, life and a way to heal it

- **Green vines** trail off the catwalks' edges toward the street and climb
  their girder posts. The Rustbelt's grass tint is now olive (not orange),
  so the vines read green against the rust.
- **Work lamps**: caged lamps hanging on chains from the hall trusses. Most
  are dead, and the odd one (three in ten) is still lit, flickering. The
  halls stay dark otherwise: bring a torch.
  - Fix: the stamper dropped any prop with no floor under it. Props can now
    be marked `"hangs"` to stay.
- **Weak grating**: about one catwalk cell in eight is rusted nearly
  through. It groans (`metal_groan`) and gives way a moment after you step
  on it. Run, and you might make it across.
- **Tetanus**: breaking rusted metal barehanded (rusted sheet, scrap heaps,
  girders, pipes, rails, grating) has a 6% chance to cut you.
  - It drains health slowly, slows you by a fifth, and stops natural
    healing, for 5 minutes.
  - An antidote clears it. Hand wraps (any gloves) prevent it.
- **Ironcaps**: a gunmetal, rust-rimmed mushroom that grows only in the
  Rustbelt.
  - Don't eat them. Cultured on rust soil at the culture bench (Mycology 2)
    into **ironcap spawn**.
  - Tipped into a foul pool (LT, looking at the water), the spawn cleans it
    for good, 14 m round: the water turns murky green and stops poisoning
    you.
  - Cleaned pools are saved with the world (`WorldState.cleansed`).
- **Rust rats**: lean rust-red rats that live all over the Rustbelt.
  - They come out at night (one in five by day too). They sniff about, dash
    in short runs, and bolt and hide (`rat_squeak`) if you come within 5 m.
  - In the dark all you see of them is their **red eyes** (emissive).
- Sounds (ElevenLabs): `rat_squeak`, `metal_groan`.
- buildings.md: the work lamp in the halls' plans and the works table, and
  the hazards described.
- `rust_hazards_test` checks each piece (vines, weak grating giving way, a
  lit lamp, tetanus with and without wraps, ironcaps only in the Rustbelt,
  spawn cleaning a pool, rats out at night and bolting) and photographs
  them.

![Vines off a catwalk](/images/encyclopedia/game/screenshots__2026-10-05__21_catwalk_vines.jpg)

*Development gameplay capture*
![A work lamp in a dark hall](/images/encyclopedia/game/screenshots__2026-10-05__22_hall_lamp.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-05/23_rust_rat_night.png: A rust rat at night)*
*(image not bundled: docs/screenshots/2026-10-05/24_rust_rat_day.png: A rust rat by day)*
*(image not bundled: docs/screenshots/2026-10-05/25_lamp_and_rat.png: The work lamp, the rust rat (and a goat for scale))*
