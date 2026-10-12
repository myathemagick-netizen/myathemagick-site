---
title: '83. The Rustbelt (step 2 of 3): the works'
description: 'The Rustbelt (step 2 of 3): the works'
section: development
kind: devlog
entry: 83
devlog_id: '83'
date: '2026-10-05'
session: Session 4 — The top rungs
tags:
  - rustbelt
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-05__14_works_aerial.jpg
    alt: The works from above
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-05__15_works_catwalk.jpg
    alt: On a catwalk over the street
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-083-the-rustbelt-step-2-of-3-the-works
source: Claude handoff · development/devlog-083-the-rustbelt-step-2-of-3-the-works.md
related: []
updated: '2026-10-11'
---

# The Rustbelt (step 2 of 3): the works

- **The works**: a town in the Rustbelt is the works. It keeps the same grid
  of streets, but each block holds one of these:
  - a **factory hall** or a **warehouse** to a side (31 x 15);
  - a **works office** and an **ironworks** (15 x 15 each), or one and an
    empty yard;
  - a **tank farm** (the whole block);
  - a **rail yard** (rows of track with rusted boxcars on them).
- **The buildings** (new templates, `gen_structures.py`):
  - **Factory hall**: a girder frame clad in rusted sheet, high windows, a
    gantry beam with a **crane hook** on its chain, **lathes** on the
    floor, a mezzanine along the back up a stair, and a front gallery joined
    to it by a bridge across the hall.
  - **Warehouse**: rows of empty shelving, crates, lockers and a tool rack,
    and a stair to the front gallery.
  - **Works office**: two storeys of brick, a breakroom below, a control
    room above.
  - **Ironworks**: a brick furnace house under a tall banded **smokestack**
    (a landmark from far off), with the furnace still in it.
  - **Tank farm**: four rusted tanks joined by big pipes on trestles.
- **The streets**:
  - Oil-soaked concrete, with **rails** down the middle on ballast.
  - Where two buildings face each other across a street, a **catwalk** of
    steel grating joins their upper floors: railed both sides, on girder
    posts at the kerbs, with the doorways cut through both walls. A big
    pipe runs beside some.
  - Hazard barrels stand on the kerbs, and now and then a boxcar is left in
    a street.
- **New blocks**: girder, steel grating (see-through), rail track (break
  it for scrap and planks), big pipe, hazard-striped plate.
- **New props** (Blender): hazard barrel, locker bank, tool rack, lathe,
  crane hook, boxcar. They're **salvage**:
  - Tool racks: mechanical parts, a wrench, solder, now and then a steel
    pry bar.
  - Lathes: parts and sometimes an electric motor, plus a machinist's
    notebook (teaches metallurgy).
  - Lockers: clothes, cloth, food, batteries.
  - Boxcars: scrap, coal, parts.
  - Barrels: now and then fuel.
  - Each one comes apart into steel and scrap.
- The works stand better than towns (little ruin). They go on the compass
  as **Works** (a new icon) and into the journal's Places; the Rustbelt's
  journal entry lists them.
- `generator`: the voxel lists of roads, summits and catwalks are laid by
  one shared `_lay`.
- buildings.md: each works building (outside and floor plans), and a
  section on the works (pictures from `works_test`, the props).
- `works_test` checks the layout (all five kinds, catwalks, rails), the
  built world (grating over the street, its doorway, rails, the hall's
  frame, boxcars in a yard), and photographs it all.

![The works from above](/images/encyclopedia/game/screenshots__2026-10-05__14_works_aerial.jpg)

*Development gameplay capture*
![On a catwalk over the street](/images/encyclopedia/game/screenshots__2026-10-05__15_works_catwalk.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-05/16_factory_inside.png: Inside a factory hall)*
*(image not bundled: docs/screenshots/2026-10-05/17_ironworks.png: An ironworks under its stack)*
*(image not bundled: docs/screenshots/2026-10-05/18_rail_yard.png: A rail yard)*
*(image not bundled: docs/screenshots/2026-10-05/19_tank_farm.png: A tank farm)*
*(image not bundled: docs/screenshots/2026-10-05/20_works_props.png: The works' props)*
