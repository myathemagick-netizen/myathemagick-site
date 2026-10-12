---
title: 63. Tables, lily pads, moving water, boarded houses, a death sound, a laundromat and a post office
description: Tables, lily pads, moving water, boarded houses, a death sound, a laundromat and a post office
section: development
kind: devlog
entry: 63
devlog_id: '63'
date: '2026-10-04'
session: Session 4 — The top rungs
tags:
  - audio
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-04__50_things_on_a_table.jpg
    alt: Things on a table
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-04__45_lily_pads.jpg
    alt: Lily pads
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-063-tables-lily-pads-moving-water-boarded-houses-a-death-sound-a-laundroma
source: Claude handoff · development/devlog-063-tables-lily-pads-moving-water-boarded-houses-a-death-sound-a-laundroma.md
related: []
updated: '2026-10-11'
---

# Tables, lily pads, moving water, boarded houses, a death sound, a laundromat and a post office

- **Things on tables:** with a small thing in hand (up to a block across and
  high: a lantern, a gnome, a brewing pot...), aim at the top of a table,
  desk, counter, dresser or work bench and it goes there, where you aim, at
  the real height of what's under it (traced through the model, so on the
  desk, not the monitor's box). It won't go into something already there
  ("No room there"); stations, seats and beds go on the floor as before, and
  so does anything when you aim at a table's side. Take the table away and
  what was on it drops to the floor. (`tables_test`)
- **Lily pads** (block 167, flat on the water): on wetland lakes, shallow
  water, about one cell in eight; fibre and now and then greens seeds.
- **Moving water:** slow ripples, snapped to the 16-per-block grid, shade
  the water and tilt its surface so the sun glints off it.
  (`tests/water_shots.gd` photographs a lily pond.)
- **Boarded-up houses:** about one house (and farmhouse) in four: boards
  (block 168) over most windows and over the outside doors (that door is
  gone). Boards break quickly into planks. (`boarded_test`)
- **Collapse:** a sting (ElevenLabs, two takes; a third was a blip and
  dropped), the music fades, and the line says what took you (the water,
  hunger, the sickness).
- **Laundromat and post office**, two more shop kinds (nine now), anywhere:
  washing machines (cloth, clothes; a pipe and a motor in parts; Engineering)
  and dryers (parts, a motor; Engineering); a post office of brick with a
  stone portico, PO boxes, a sorting frame, parcels and mail sacks (letters,
  diaries, field notes, odd goods in the parcels). New signs, both in
  buildings.md.
- Tests fixed along the way: step_test picks a house that isn't boarded up;
  shops_test knows the new shops, and tries the pharmacy shelves again when
  the ones it found hold no medicine (what a shelf holds is fixed by its key).

![Things on a table](/images/encyclopedia/game/screenshots__2026-10-04__50_things_on_a_table.jpg)

*Development gameplay capture*
![Lily pads](/images/encyclopedia/game/screenshots__2026-10-04__45_lily_pads.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-04/46_water_ripples.png: Ripples)*
*(image not bundled: docs/screenshots/2026-10-04/47_boarded_house.png: Boarded house)*
*(image not bundled: docs/screenshots/2026-10-04/48_post_office.png: Post office)*
*(image not bundled: docs/screenshots/2026-10-04/49_laundromat_post_furniture.png: Laundromat and post office furniture)*
