---
title: 26. Farmsteads along the roads
description: 'In open country (plains and woodland) a roadside lot can be a farmstead: a farmhouse, a barn further along, and on the other side a fenced field gone wild. They''re less ruined than other roadside houses.'
section: development
kind: devlog
entry: 26
devlog_id: '26'
date: '2026-10-02'
session: Session 4 — The top rungs
tags: []
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-02__21_farmhouse_chimney.jpg
    alt: A farmhouse with its chimney
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-02__22_farmhouse_fireplace.jpg
    alt: 'By the fire: the fireplace and a painting'
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-026-farmsteads-along-the-roads
source: Claude handoff · development/devlog-026-farmsteads-along-the-roads.md
related: []
updated: '2026-10-11'
---

# Farmsteads along the roads

In open country (plains and woodland) a roadside lot can be a **farmstead**:
a **farmhouse**, a **barn** further along, and on the other side a
**fenced field gone wild**. They're less ruined than other roadside houses.

- **Farmhouse** (timber or sided): two rooms, a **brick chimney** up the
  gable end (break it for bricks) and a **fireplace** against it inside:
  search it for **coal** (a new fuel, burns in any station that takes fuel),
  take it apart for bricks (and a little Masonry). A kitchen, a bed, and a
  **painting** on the wall: one of the six, take it home.
- **Barn**: a timber barn with a rusted tin roof, a wide open doorway, and
  inside hay bales (plant fiber, the odd seed), crates and a workbench.
- **The field**: a broken wooden fence with a gateway toward the road, rows
  of one crop gone feral (**wild potatoes, beans or greens**, weeds through
  them). X picks one for produce and seed, and teaches Cultivation; it's
  gone for good after.
- A **rusted tractor** stands in the field: search it for scrap, mechanical
  parts, seeds and a seed merchant's almanac under the seat (Cultivation);
  take it apart for **mechanical parts** (new: generators and water wheels
  need them; cars give one too) and Engineering.
- Roadside lots now come up every 80 m of road (other features used to skip
  past their turn), so there are more houses along the roads too. Roads in
  worlds made before this lay out differently from here on (places you've
  changed are kept).

![A farmhouse with its chimney](/images/encyclopedia/game/screenshots__2026-10-02__21_farmhouse_chimney.jpg)

*Development gameplay capture*
![By the fire: the fireplace and a painting](/images/encyclopedia/game/screenshots__2026-10-02__22_farmhouse_fireplace.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-02/23_farm_field_tractor.jpg: The field: a broken fence, feral beans and greens, the tractor)*
*(image not bundled: docs/screenshots/2026-10-02/24_farm_models.jpg: Fireplace, hay bale, tractor, wild potatoes, beans, greens)*

`tests/farm_test.gd` finds the nearest farmstead the road network laid out,
goes there, and checks the chimney, the fireplace (coal) and painting, hay
in the barn, the field's crops (picked: produce, gone, Cultivation) and the
tractor (almanac, mechanical parts, Engineering).
