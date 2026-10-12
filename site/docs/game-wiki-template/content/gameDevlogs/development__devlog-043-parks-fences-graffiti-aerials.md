---
title: 43. Parks, fences, graffiti, aerials
description: 'More of what makes a town look lived in:'
section: development
kind: devlog
entry: 43
devlog_id: '43'
date: '2026-10-03'
session: Session 4 — The top rungs
tags: []
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-03__67_playground.jpg
    alt: A playground
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-03__68_park_props.jpg
    alt: Swings, slide, see-saw, sandpit, picnic table, fountain
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-043-parks-fences-graffiti-aerials
source: Claude handoff · development/devlog-043-parks-fences-graffiti-aerials.md
related: []
updated: '2026-10-11'
---

# Parks, fences, graffiti, aerials

More of what makes a town look lived in:

- **Parks:** about half the empty town lots are now a **playground** (swing
  set, one swing left; a slide; a see-saw; a sandpit with a bucket and
  spade in it; a bench and a bin) or a **fountain garden** (a dry fountain,
  moss in the basin, benches round it, a picnic table, flower beds). Search
  the sandpit for sand and the odd bucket; sit on the swings.
- **Yards:** a white **picket fence** along the front of the small houses
  (gaps for the path and the mailbox, a few panels down), and **flower beds**
  gone to seed down the side (seeds, fibre; a little Cultivation).
- **Shops:** a **till** on the counter, its drawer open (parts, a battery).
- **On the walls:** **graffiti** (a teal mushroom with eyes; someone's
  tag; "WE WENT NORTH", and under it, mum + kids), **air conditioners**
  under the windows of flats and offices, **satellite dishes**.
- **On the roofs:** **TV aerials** on the ridges of houses, shops and the
  farmhouse; **water tanks** on the roofs of flats and offices.

These touches come and go between copies of a building: each has a chance
(`"chance"` on a template prop, rolled by the lot's seed), so one street's
houses don't all wear the same aerial and the same tag. The buildings doc
shows them all (`StructureStamper.all_touches`).

![A playground](/images/encyclopedia/game/screenshots__2026-10-03__67_playground.jpg)

*Development gameplay capture*
![Swings, slide, see-saw, sandpit, picnic table, fountain](/images/encyclopedia/game/screenshots__2026-10-03__68_park_props.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-03/69_touches.jpg: Fence, flower bed, till, three graffiti, air conditioner, dish, aerial, water tank)*
*(image not bundled: docs/screenshots/2026-10-03/70_apartment_touches.jpg: Flats with air conditioners, a tag and a water tank)*
*(image not bundled: docs/screenshots/2026-10-03/71_house_aerial.jpg: A house's aerial)*

`tests/streets_test.gd` now also checks the parks and fences across towns,
that aerials turn up on some houses and not all, and visits a park.
