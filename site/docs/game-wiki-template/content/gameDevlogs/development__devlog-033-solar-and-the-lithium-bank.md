---
title: 33. Solar, and the lithium bank
description: Phase 4 of the power plan.
section: development
kind: devlog
entry: 33
devlog_id: '33'
date: '2026-10-03'
session: Session 4 — The top rungs
tags:
  - power
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-03__18_solar_array.jpg
    alt: A solar array at noon
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-03__19_old_rooftop_panels.jpg
    alt: Old panels on an apartment roof
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-033-solar-and-the-lithium-bank
source: Claude handoff · development/devlog-033-solar-and-the-lithium-bank.md
related: []
updated: '2026-10-11'
---

# Solar, and the lithium bank

Phase 4 of the power plan.

- **Solar panels** (Engineering 4, electronics bench: four solar cells,
  glass, iron, wire): set one under open sky and it charges the stores in
  reach by daylight, **30 an hour at full sun**, less as the sun lowers,
  nothing at night. Anything solid above it (within 24 blocks) shades it;
  glass and water don't. Its label says which: so much an hour, no sun, or
  shaded. Free power, no fuel; build an array.
- **Solar cells:**
  - **Salvaged:** old, grimy, mossy panels sit on the flat roofs of shops
    and apartment blocks (three to a roof, when the roof's still there).
    Take one apart for three solar cells, a shard of glass, wire, and the
    lithium cell from the storage pack bolted under it. Teaches Engineering.
  - **Made** (Glassworking 2 + Metallurgy 3): glass, rare earth oxide and
    gold wire into two cells.
- **The lithium bank** (Engineering 4 + Metallurgy 2: six lithium cells,
  two precision circuits, iron, wire): the fourth store. It holds **1500**
  and **reaches 40 m**. A column of five green **charge lights** on its
  front shows how full it is.
  - **Lithium cells:** from old rooftop packs, from flatscreen televisions
    (two each), or rebuilt from two car batteries, rare earth oxide and
    solder (Metallurgy 3).

The stores now run battery bank (100, 10 m), accumulator rack (250, 20 m),
tesla tower (600, 30 m), lithium bank (1500, 40 m); the generators crank
and water wheel, steam (20/h), biodiesel (40/h), solar (30/h a panel, free).
Phase 5 is mycodiesel.

![A solar array at noon](/images/encyclopedia/game/screenshots__2026-10-03__18_solar_array.jpg)

*Development gameplay capture*
![Old panels on an apartment roof](/images/encyclopedia/game/screenshots__2026-10-03__19_old_rooftop_panels.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-03/20_solar_models.jpg: Solar panel, an old rooftop panel, the lithium bank with its charge lights)*

`tests/solar_test.gd`: the recipes and what opens them; reach (a lithium
bank 35 m away charges, a tesla tower there doesn't); a noon hour from four
panels; the charge lights; nothing at night; a shaded panel making nothing
while the others carry on; old panels on a flat roof in the home town,
taken apart.
