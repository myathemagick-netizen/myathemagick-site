---
title: 29. Biodiesel, and the tesla tower
description: Phase 3 of the power plan.
section: development
kind: devlog
entry: 29
devlog_id: '29'
date: '2026-10-03'
session: Session 4 — The top rungs
tags:
  - power
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-03__04_tesla_spark.jpg
    alt: The tesla tower throwing a spark at night
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-03__05_diesel_generator.jpg
    alt: The diesel generator
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-029-biodiesel-and-the-tesla-tower
source: Claude handoff · development/devlog-029-biodiesel-and-the-tesla-tower.md
related: []
updated: '2026-10-11'
---

# Biodiesel, and the tesla tower

Phase 3 of the power plan.

- **The fuel, start to finish:**
  - **Oil press** (Engineering 2 + Cultivation 1, workbench): 6 beans and a
    glass jar into a jar of **bean oil**.
  - **Potato spirit** at the alembic: 4 potatoes and a glass bottle.
  - **Fuel still** (Engineering 4 + Alchemy 1, workbench; needs an electric
    motor): 2 bean oil, a spirit and a charcoal into **2 cans of
    biodiesel**. Its stirrer draws 2 charge a batch (1 at Engineering 4).
- **Diesel engine:** taking a rusted tractor apart now gives up its engine
  (farmsteads, §26). It's the only source.
- **Diesel generator** (Engineering 4, workbench: the engine, a dynamo,
  scrap, a pipe): hold biodiesel and X to fill it, 3 game hours a can (up to
  24). It makes **40 charge a game hour** (steam 20) and needs nothing else.
  Like the steam engine it idles when the stores are full, and its label
  says why it's stopped. New start-up sound.
- **Tesla tower** (Engineering 4 + Electronics 3, electronics bench: an
  accumulator rack, vacuum tubes, wire, timber, iron): the third store,
  after Wardenclyffe: capacitor drums under a tapering lattice and a copper
  mushroom dome. Holds **600** and **reaches 30 m**. While charge is going
  in or out it throws a **spark** from the dome every couple of seconds: a
  few blue-white forks, a flash of light and a crackle (new sound); four
  seconds after the charge settles, it goes quiet.

![The tesla tower throwing a spark at night](/images/encyclopedia/game/screenshots__2026-10-03__04_tesla_spark.jpg)

*Development gameplay capture*
![The diesel generator](/images/encyclopedia/game/screenshots__2026-10-03__05_diesel_generator.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-03/06_diesel_models.jpg: Oil press, fuel still, diesel generator, tesla tower)*

`tests/diesel_test.gd`: the recipes and what opens them; oil, spirit and
the still (no power, no fuel; with power, two cans); a tractor's engine;
the generator charging a tower 25 m away (a rack that far is out of
reach); fuel use; the tower sparking while charge comes in and settling
after the fuel runs out.
