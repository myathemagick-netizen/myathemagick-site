---
title: 35. Mycodiesel, and the stormcap
description: Phase 5, the top of the power plan, and Mycology's empty fourth level.
section: development
kind: devlog
entry: 35
devlog_id: '35'
date: '2026-10-03'
session: Session 4 — The top rungs
tags:
  - power
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-03__21_stormcap.jpg
    alt: The stormcap at night, spores drifting off it
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-03__22_bioreactor.jpg
    alt: A bioreactor between the generators, glowing
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-035-mycodiesel-and-the-stormcap
source: Claude handoff · development/devlog-035-mycodiesel-and-the-stormcap.md
related: []
updated: '2026-10-11'
---

# Mycodiesel, and the stormcap

Phase 5, the top of the power plan, and Mycology's empty fourth level.

- **The culture bench** (Mycology 4 + Glassworking 1, workbench: jars, a
  lens, a flask, planks): mushroom strains grown in jars.
  - **The inkcap strain** (three inkcaps on potato): a decomposer.
  - **The network strain** (teal buttons and a spore bloom): the glowing
    one, that wants to connect to everything.
  - **The oil-cap strain** (Alchemy 2): the inkcap strain bred on bean oil
    and spirit to bank what it eats as oil.
  - Cultures **split** in two with a fresh jar and a potato.
- **The bioreactor** (Mycology 4 + Engineering 4): a vat of teal broth.
  Seed it once with the oil-cap strain, pipe it water from a tank, and feed
  it plant matter (fiber 1, felt 2, greens, beans, potatoes, logs, compost 3,
  mycorrhizal compost 5; it holds 40). It turns 4 of that an hour into
  mycodiesel (a can per 8) for a quarter bucket of water an hour, day and
  night; X draws off the cans. Its label says what it needs.
- **Mycodiesel:** six hours a can. **The mycodiesel generator** (Engineering 4
  + Mycology 3: rare-earth magnets, a precision circuit, iron, glass, pipes)
  makes **80 an hour**, twice the diesel; the diesel generator burns
  mycodiesel too (six hours, at its 40). New start-up sound: a wet gurgle
  settling into a hum.
- **The stormcap** (Mycology 4 + Engineering 4 + Electronics 3: two network
  cultures, a lithium bank, precision circuits, gold wire, spore blooms):
  the top store, a living battery. A coil of copper and gold up a pale stem
  under a huge teal cap. Its spores seed the clouds, and the storms they
  bring charge it (that's the story; there's no weather). It holds **4000**
  and reaches **64 m**. Its glow **breathes**, brighter the fuller it is;
  while power is going in or out, **glowing spores drift up off the cap**,
  and now and then there's a soft roll of distant thunder.

The whole ladder: crank and water wheel; steam 20/h; biodiesel 40/h; solar
30/h a panel; mycodiesel 80/h. Stores: battery bank 100 / 10 m, accumulator
rack 250 / 20 m, tesla tower 600 / 30 m, lithium bank 1500 / 40 m, stormcap
4000 / 64 m.

![The stormcap at night, spores drifting off it](/images/encyclopedia/game/screenshots__2026-10-03__21_stormcap.jpg)

*Development gameplay capture*
![A bioreactor between the generators, glowing](/images/encyclopedia/game/screenshots__2026-10-03__22_bioreactor.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-03/23_myco_models.jpg: Culture bench, bioreactor, mycodiesel generator, stormcap)*

`tests/myco_test.gd`: what opens what; culturing, breeding and splitting
strains; a bioreactor seeded, fed, watered and filling over two hours (feed,
fuel and water accounted for), drawn off; the generator charging a stormcap
50 m away (a lithium bank there is out of reach); the diesel generator
taking mycodiesel; the stormcap's spores and glow.
