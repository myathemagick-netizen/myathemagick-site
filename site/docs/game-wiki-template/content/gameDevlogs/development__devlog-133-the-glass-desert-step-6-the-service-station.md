---
title: '133. The Glass Desert, step 6: the Service Station'
description: 'A finding first: only 4 of 1,337 roads on the test map ever touch a desert-biome point (66 points, all just inside the edge), so a station can''t sit "in" the desert; it goes at the margin, where the desert field is 0.22 to 0.6 and...'
section: development
kind: devlog
entry: 133
devlog_id: '133'
date: '2026-10-11'
session: Session 4 — The top rungs
tags:
  - desert
  - crafting
  - cartography
  - tools and tests
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-11__stationv2_station_cut_15.jpg
    alt: Cutaway
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-11__stationv2_station_plan_15.jpg
    alt: Plan
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-133-the-glass-desert-step-6-the-service-station
source: Claude handoff · development/devlog-133-the-glass-desert-step-6-the-service-station.md
related: []
updated: '2026-10-11'
---

# The Glass Desert, step 6: the Service Station

A finding first: only 4 of 1,337 roads on the test map ever touch a desert-biome point (66 points, all just
inside the edge), so a station can't sit "in" the desert; it goes at the margin, where the desert field is
0.22 to 0.6 and the land is part sand, part scrub. `Roads._service_station` runs for every road point there
(no random number is drawn unless a station is tried, so no other road's dressing moves), once to a road, and
gives **5 stations on the 9 km test map** (3 at 0.28, 8 at 0.15; the threshold is the knob). It rejects a site over a
dry wash (the apron would float) or over water or a town.

The site is 27 m square: a cracked-asphalt and concrete apron with sand at its edges and a few drifts; a concrete
**canopy** (a slab four up on six posts, holes in it, one corner fallen) over **two fuel pumps** (a new
`fuel_pump` prop, searchable: biodiesel, scrap, pipe, wire); a **kiosk** with a door and windows, its shelves
(`store_shelf`, parts, tools), a vending machine, a counter and a crate; a **cistern** (`water_tank`), three drums,
a car and a billboard by the road. The canopy and the kiosk are roofs, so the climate's shade counts them: the
only shade for a long way. It shows on the compass and in the journal as "Service station". The truffle mounds
now grow only in the washes' own gravel (`_plant` checks the wash), so a station's or a road's gravel doesn't
sprout them. `tests/service_station_test.gd` (layout, 2 s) and `tools/desert_shots.gd` (`DESERT_STATION=1`).

**Walls, redesigned after the author's notes**: the main courses are brick or concrete (concrete, spalled concrete, brick or sooted
brick, one per station); **rusted sheet metal** is only the shop's four corner columns and the canopy's posts; a **half-slab trim**
runs round the roof's edge (a low parapet) and round the canopy; **sidewalk blocks** run along the shop's front; and two or three
things sit on the roof (a TV aerial, satellite dish, roof AC or AC unit, or an old solar panel). Pictures: a cutaway of the kiosk (roof and
one wall off), a plan from above and four stations side by side. `tools/desert_shots.gd` takes `DESERT_STATION=n`
for the nth nearest station.

![Cutaway](/images/encyclopedia/game/screenshots__2026-10-11__stationv2_station_cut_15.jpg)

*Development gameplay capture*
![Plan](/images/encyclopedia/game/screenshots__2026-10-11__stationv2_station_plan_15.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-11/stationv2_variants.png: Four stations)*

The author's idea of a **broken solar panel field with a collection area in the middle** is in the plan as a
candidate step 7 and in `docs/ideas.md`.

*(image not bundled: docs/screenshots/2026-10-11/station_station_c_15.png: The station from the corner)*
*(image not bundled: docs/screenshots/2026-10-11/station_station_in_15.png: Under the canopy)*
