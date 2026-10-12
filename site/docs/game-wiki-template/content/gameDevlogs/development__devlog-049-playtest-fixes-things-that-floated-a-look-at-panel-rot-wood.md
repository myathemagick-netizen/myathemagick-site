---
title: '49. Playtest fixes: things that floated, a look-at panel, rot wood'
description: 'From playing World 1:'
section: development
kind: devlog
entry: 49
devlog_id: '49'
date: '2026-10-04'
session: Session 4 — The top rungs
tags:
  - tools and tests
images: []
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-049-playtest-fixes-things-that-floated-a-look-at-panel-rot-wood
source: Claude handoff · development/devlog-049-playtest-fixes-things-that-floated-a-look-at-panel-rot-wood.md
related: []
updated: '2026-10-11'
---

# Playtest fixes: things that floated, a look-at panel, rot wood

From playing World 1:

- **Floating dots by benches** (and statues, picnic tables, fences): their
  moss was sprinkled at random spots, some in the air beside the model. Moss
  now only recolours voxels that are there (`_weather` in the prop
  generator).
- **Posters, calendars and graffiti couldn't be removed.** Posters and
  calendars now come down (a little fibre); graffiti scrubs off.
- **Things kept floating when their wall or floor was broken.** Breaking a
  block now brings down whatever hung on it (pictures, posters, calendars,
  clocks, signs, X-rays...) or stood on it (furniture): it goes to you if it
  can be carried, else what it's made of (`FurnitureProp.unsupported`).
- **Look-at panel** (like Minecraft's WAILA): a small box under the compass
  names what's under the crosshair, block, plant, prop or mushroom, with a
  line on what it gives or whether it's been searched. You know a thing once
  you've had it in hand, taken it apart or searched it (or its skill is at
  level 1); before that it's "some kind of wood", "something to search", "a
  mushroom you don't know". What you've come to know is saved with the
  world. Settings > Interface turns it off.
- **Rot wood** redone: boards gone dark and spongy, splitting along the
  grain, damp running down, punky holes, faint white rot, a bracket or two,
  moss creeping up from below.

`tests/playtest_fixes_test.gd` checks all of it.
