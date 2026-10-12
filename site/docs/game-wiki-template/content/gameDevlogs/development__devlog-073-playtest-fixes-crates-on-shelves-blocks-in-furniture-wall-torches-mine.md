---
title: '73. Playtest fixes: crates on shelves, blocks in furniture, wall torches, mines'
description: 'Playtest fixes: crates on shelves, blocks in furniture, wall torches, mines'
section: development
kind: devlog
entry: 73
devlog_id: '73'
date: '2026-10-05'
session: Session 4 — The top rungs
tags:
  - creatures
  - tools and tests
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-04__67_wall_torch.jpg
    alt: A wall torch
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-073-playtest-fixes-crates-on-shelves-blocks-in-furniture-wall-torches-mine
source: Claude handoff · development/devlog-073-playtest-fixes-crates-on-shelves-blocks-in-furniture-wall-torches-mine.md
related: []
updated: '2026-10-11'
---

# Playtest fixes: crates on shelves, blocks in furniture, wall torches, mines

- **Crates on a shelf open.** The shelf's box was in the way of your aim;
  looking at a shelf or table, whatever's on it along your line of sight is
  what you're looking at now.
- **Blocks don't go into furniture** (a stone block in a crate's spot):
  placing a block checks for furniture there.
- **Torches on walls:** aim at the side of a block with a torch and it goes
  up in an iron bracket, leaning out (its own light); it falls if the wall
  goes, and picks up as a torch.
- **Old mines dig into the hill**: the tunnel heads whichever way (away from
  the road, or along it) keeps rock over it all the way down; if none does,
  there's no mine there. (One was found built out of the side of a mountain.)

![A wall torch](/images/encyclopedia/game/screenshots__2026-10-04__67_wall_torch.jpg)

*Development gameplay capture*
