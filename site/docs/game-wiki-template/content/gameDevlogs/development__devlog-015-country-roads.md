---
title: 15. Country roads
description: 'Step two of the biome plan: towns are no longer islands. Every town links to the towns in its neighbouring regions by a country road (world/roads.gd): it leaves straight out of a street on the facing side, then curves and wanders ...'
section: development
kind: devlog
entry: 15
devlog_id: '15'
date: '2026-10-01'
session: Session 3 — Crafting by hand
tags: []
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-01__67_road_map.jpg
    alt: Roads linking the towns (1 km map)
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-01__68_road_bridge.jpg
    alt: A bridge out of town
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-015-country-roads
source: Claude handoff · development/devlog-015-country-roads.md
related: []
updated: '2026-10-11'
---

# Country roads

Step two of the biome plan: towns are no longer islands. Every town links
to the towns in its neighbouring regions by a **country road**
(`world/roads.gd`): it leaves straight out of a street on the facing side,
then curves and wanders (a hashed meander) to the other town. Its height is
the ground smoothed along the way and limited to **one block of climb per
4 m**, so it's cut into hills and built up across dips, with the land
blending into it over the shoulders.

- **Decay with distance from town:** asphalt, then cracked asphalt and
  gravel, then gravel, then a grassy track with two dirt wheel ruts.
- **Bridges** where the ground is under water: concrete deck with metal
  railings near town, **planks on log piers with wooden railings** out in
  the wild. Some cross whole lakes.
- **Biome flavour:** **plank boardwalks** over wetland marsh; in the bloom
  the mycelium takes the road back; on highland tracks gravel replaces grass.
- **Along the way:** a **signpost** where each road leaves town;
  **abandoned cars** (new voxel models: red, blue and white sedans, and a
  moss-and-fungus overgrown one): lines of evacuation traffic nose to tail on
  plains roads, single wrecks on the verge elsewhere (overgrown ones in the
  bloom and often in woodland). Search the glovebox and boot; strip one for
  scrap, wire, glass and a battery (which teaches electronics). **Fallen
  logs** on woodland verges, **rockfalls** and **cairns** in the highlands,
  **fungal mounds** heaving up through bloom roads.
- **Roadside buildings:** now and then a lone house or a small shop beside
  the road, levelled into the land, stamped and furnished like a town lot.

Trees, outcrops and giant mushroom stems keep off the roads (caps may
overhang them). The world map tool draws the roads by surface.

![Roads linking the towns (1 km map)](/images/encyclopedia/game/screenshots__2026-10-01__67_road_map.jpg)

*Development gameplay capture*
![A bridge out of town](/images/encyclopedia/game/screenshots__2026-10-01__68_road_bridge.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-01/69_cars_along_road.jpg: Cars on a road cut through a hill)*
*(image not bundled: docs/screenshots/2026-10-01/70_roadside_building.jpg: A roadside house)*
*(image not bundled: docs/screenshots/2026-10-01/71_cars_and_signpost.jpg: The cars and the signpost)*

`tests/road_test.gd`: 51 roads within 500 m of spawn, every one ending at a
town, none steeper than a block per 4 m, paved by town and wilder further
out, bridges over water, signposts at every end, cars, logs, rockfalls and
fungal mounds along them; then in game it stands on a bridge, searches and
strips a car (it stays gone), and photographs a car line and a roadside house.

---
