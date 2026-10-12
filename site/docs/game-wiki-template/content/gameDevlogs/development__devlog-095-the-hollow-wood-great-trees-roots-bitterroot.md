---
title: '95. The Hollow Wood: great trees, roots, bitterroot'
description: 'The Hollow Wood: great trees, roots, bitterroot'
section: development
kind: devlog
entry: 95
devlog_id: '95'
date: '2026-10-06'
session: Session 4 — The top rungs
tags:
  - hollow wood
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-06__15_hollow_great_tree.jpg
    alt: A great tree
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-06__16_hollow_roots.jpg
    alt: Roots round its foot
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-095-the-hollow-wood-great-trees-roots-bitterroot
source: Claude handoff · development/devlog-095-the-hollow-wood-great-trees-roots-bitterroot.md
related: []
updated: '2026-10-11'
---

# The Hollow Wood: great trees, roots, bitterroot

- **Great trees**: about one ancient tree in five is five across and
  16-21 high, with a canopy 20 across. Seven in ten of those are hollow: a
  room three by three and four high, a doorway two high. Trees keep 9 m
  clear of them.
- Ancient trees no longer stand on beaches.
- **Roots** (`tree_roots_a`, `tree_roots_b`: Blender, voxel-built like the
  fungi, in the log's bark colours with a little litter and moss): 5-8 lie
  round each ancient tree's foot, running out from the trunk. "Dig up"
  gives bitterroot (1-2) half the time, plant fibre otherwise.
- **Root patches** (`root_patch`, a flat block like moss): thick round the
  ancient trees, thinning with distance, and here and there across the
  wood's floor. One in four gives a bitterroot.
- **Bitterroot**: a little food (3), and two with a cloth make a poultice
  (First Aid 1), so there's a way to one without teal caps.
- `hollow_test` covers all of it.

![A great tree](/images/encyclopedia/game/screenshots__2026-10-06__15_hollow_great_tree.jpg)

*Development gameplay capture*
![Roots round its foot](/images/encyclopedia/game/screenshots__2026-10-06__16_hollow_roots.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-06/17_hollow_room.png: The room inside)*
