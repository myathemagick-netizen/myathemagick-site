---
title: '135. The Glass Desert, step 7: the solar farm'
description: 'The author''s idea: a broken solar panel field with a collection area at its centre. Since no road goes to the deep desert, this isn''t a roadside site: DesertSites (world/desertsites.gd, built like Summits and hooked in the same pl...'
section: development
kind: devlog
entry: 135
devlog_id: '135'
date: '2026-10-11'
session: Session 4 — The top rungs
tags:
  - desert
  - power
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-11__solar_solar_b_15.jpg
    alt: The farm
    kind: game_screenshot
  - src: /images/encyclopedia/game/buildings__outdoors_solar_farm.jpg
    alt: In the building doc
    kind: game_render
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-135-the-glass-desert-step-7-the-solar-farm
source: Claude handoff · development/devlog-135-the-glass-desert-step-7-the-solar-farm.md
related: []
updated: '2026-10-11'
---

# The Glass Desert, step 7: the solar farm

The author's idea: a broken solar panel field with a collection area at its centre. Since no road goes to the deep desert, this
isn't a roadside site: `DesertSites` (`world/desert_sites.gd`, built like `Summits` and hooked in the same places: `height()`
levels its ground, `lots_in`, the generator, the prop spawner, the compass) puts at most one in a region of the deep desert
(`CHANCE` 0.1 of regions, then it must find flat, wash-free, deep-desert ground 63 m square: **6 farms on the 9 km test map**).

A farm: a 63 m square on plain sand (even over a glass flat), an iron fence round it with more gaps than fence and a gateway, a
15 m concrete pad in the middle with concrete tracks out along both axes, and in the four blocks between them rows of old panels
(`solar_panel_old`, a panel every 2 m, a row every 5 m; 36% gone, a few knocked askew; about 100 left), shards and scrub on the
sand. On the pad the **control house**: the same look as the station (brick or concrete, rusted corner columns, half-slab trim)
with broken battery banks, a dead generator, a bench, a locker bank and a crate inside, lamp posts at the pad's corners (one may be
down) and drums by the door. A panel taken apart gives solar cells, glass, wire and a lithium cell, so a farm is a real prize;
the panel count and `CHANCE` are the knobs if it's too generous. It shows on the compass (a tilted-panel icon) and in the journal.
`tests/solar_farm_test.gd`; `tools/solar_count.gd` counts farms; `tools/desert_shots.gd` takes `DESERT_SOLAR=n`; the building doc has
a section (the farm from above, the plan, the control house with its roof off).

![The farm](/images/encyclopedia/game/screenshots__2026-10-11__solar_solar_b_15.jpg)

*Development gameplay capture*
![In the building doc](/images/encyclopedia/game/buildings__outdoors_solar_farm.jpg)

*Engine structure render · not a player-view screenshot*
