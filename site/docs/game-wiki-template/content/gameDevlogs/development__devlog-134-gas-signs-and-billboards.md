---
title: 134. Gas signs and billboards
description: 'Four gas mascots, each on a canopy sign (a 4-block plaque like the museum''s, "GAS" in big letters beside the mascot, on the canopy''s road edge facing the road) and on a billboard ("GAS 24H", faded and peeling): Flame (a smiling fl...'
section: development
kind: devlog
entry: 134
devlog_id: '134'
date: '2026-10-11'
session: Session 4 — The top rungs
tags: []
images:
  - src: /images/encyclopedia/game/buildings__roadside_station_brick_sooted.jpg
    alt: A station with its sign
    kind: game_render
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-134-gas-signs-and-billboards
source: Claude handoff · development/devlog-134-gas-signs-and-billboards.md
related: []
updated: '2026-10-11'
---

# Gas signs and billboards

Four gas mascots, each on a **canopy sign** (a 4-block plaque like the museum's, "GAS" in big letters beside the mascot, on the
canopy's road edge facing the road) and on a **billboard** ("GAS 24H", faded and peeling): **Flame** (a smiling flame), **Droppy**
(a fuel droplet), **Tiger** and **Dilly** (an armadillo), 8 new voxel props (`gas_sign_*`, `gas_billboard_*`; the pixel art is
`MASCOTS` and `FONT` in `gen_furniture_props.py`, so a new mascot is twelve strings). A road's mascot is chosen by its key
(no dice), so a station, its canopy sign and its adverts agree. A station's road has an advert a hundred metres before it, and one
road in twelve anywhere has one somewhere along it (also by key, so no other road's dressing moves). The station section of
`docs/buildings.md` shows the signs and lists all eight. `tests/service_station_test.gd` checks the sign and billboard are there.
`road_test`, `furniture_test`, `old_land_test`, `quarry_test`, `streets_test` and `desert_test` pass; the full suite hasn't been
re-run since.

*(image not bundled: ../asset_src/renders/gas_signs_preview.png: The signs)*
![A station with its sign](/images/encyclopedia/game/buildings__roadside_station_brick_sooted.jpg)

*Engine structure render · not a player-view screenshot*
