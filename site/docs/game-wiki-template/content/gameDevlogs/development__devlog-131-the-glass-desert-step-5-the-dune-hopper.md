---
title: '131. The Glass Desert, step 5: the Dune Hopper'
description: 'The desert''s first creature: a sand-coloured jerboa with tall ears, big dark eyes, long hind legs and a long tail with a dark tuft (dunehopper, a voxel prop built with the others). Critters.Hopper is the rat''s shape with a hop arc...'
section: development
kind: devlog
entry: 131
devlog_id: '131'
date: '2026-10-11'
session: Session 4 — The top rungs
tags:
  - desert
  - creatures
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-11__hopper_hopper_wide.jpg
    alt: A hopper at night
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-131-the-glass-desert-step-5-the-dune-hopper
source: Claude handoff · development/devlog-131-the-glass-desert-step-5-the-dune-hopper.md
related: []
updated: '2026-10-11'
---

# The Glass Desert, step 5: the Dune Hopper

The desert's first creature: a sand-coloured jerboa with tall ears, big dark eyes, long hind legs and a
long tail with a dark tuft (`dune_hopper`, a voxel prop built with the others). `Critters.Hopper` is the
rat's shape with a hop arc: it sits with its ears turning, makes two to five hops (1.6 m, a 0.6 m arc), and
if you come within 8 m it bolts in 3.4 m leaps and goes down its burrow, hidden for 10-20 s. It is
**nocturnal**: by day there's no hopper at all (only the burrow spot, with nothing to mark it yet), at night
about 40% of 20 m cells in open deep desert (desert field above 0.7, plain or bleached sand, not a wash) have
one. Its squeak is the rat's for now, at a lower volume and wider pitch; a proper squeak and thump are on
the sound wishlist. `tests/hopper_test.gd` checks burrows (open sand, none outside the desert), asleep by day,
out at night, hops in arcs, bolts and goes to ground, and photographs it.

![A hopper at night](/images/encyclopedia/game/screenshots__2026-10-11__hopper_hopper_wide.jpg)

*Development gameplay capture*
