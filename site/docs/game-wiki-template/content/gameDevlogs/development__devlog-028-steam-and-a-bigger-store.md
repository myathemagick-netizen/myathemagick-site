---
title: 28. Steam, and a bigger store
description: Phase 2 of the power plan.
section: development
kind: devlog
entry: 28
devlog_id: '28'
date: '2026-10-03'
session: Session 4 — The top rungs
tags:
  - power
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-03__01_steam_plant.jpg
    alt: 'A steam plant: the engine beside the boiler, the tank piped to it'
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-03__02_rack_reach.jpg
    alt: 'The multimeter: an accumulator rack''s 20 m beside a battery bank''s 10'
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-028-steam-and-a-bigger-store
source: Claude handoff · development/devlog-028-steam-and-a-bigger-store.md
related: []
updated: '2026-10-11'
---

# Steam, and a bigger store

Phase 2 of the power plan.

- **Boiler** (Engineering 3 + Masonry 2, masonry bench: bricks, iron,
  pipes): a brick firebox under a riveted drum. Hold fuel and press X to
  stoke it: **coal 4 game hours**, charcoal 3, a log 2, planks 1, fiber a
  quarter (up to 24 hours). It takes water through pipes like any other
  machine (pipe it from a tank a pump keeps full), a bucket a game hour
  while it steams. The firebox glows while it has fuel.
- **Steam engine** (Engineering 4, workbench: iron, mechanical parts, pipes,
  a dynamo): set it beside a boiler. With fire and water it makes **20
  charge a game hour** (a water wheel makes 8), and the flywheel spins. It
  only burns fuel while there's somewhere for the charge to go; with the
  stores full it idles. Its label says what's wrong: no boiler beside it,
  no fuel, no water, nothing in reach, stores full. New sound for it
  starting up (ElevenLabs).
- **Accumulator rack** (Engineering 4, electronics bench): the second store.
  It holds **250** (a battery bank 100) and **reaches 20 m** (a bank 10).
  Stores are tiers in `Power.BANKS` (capacity, reach); the multimeter draws
  each one's own ring and names it.

![A steam plant: the engine beside the boiler, the tank piped to it](/images/encyclopedia/game/screenshots__2026-10-03__01_steam_plant.jpg)

*Development gameplay capture*
![The multimeter: an accumulator rack's 20 m beside a battery bank's 10](/images/encyclopedia/game/screenshots__2026-10-03__02_rack_reach.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-03/03_steam_models.jpg: Boiler, steam engine, accumulator rack)*

`tests/steam_test.gd`: the recipes (Engineering 3 + Masonry 2; then 4);
reach (a rack 15 m away charges, a bank 15 m away doesn't); stoking;
an hour of steam (20 charge, an hour of fuel, a bucket of water); running
out of water; idling with full stores.
