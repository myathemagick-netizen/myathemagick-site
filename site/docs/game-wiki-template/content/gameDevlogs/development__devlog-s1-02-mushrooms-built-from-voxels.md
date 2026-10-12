---
title: 2. Mushrooms, built from voxels
description: 'Props follow the same scale as blocks: 16 voxels per metre, so a mushroom''s pixels line up with the ground''s. A Blender script builds each one from voxels, merges same-coloured faces ("greedy meshing") to keep them cheap to draw b...'
section: development
kind: devlog
entry: 2
devlog_id: s1:2
date: '2026-09-30'
session: Session 1 — From one brown cube to a ruined town
tags:
  - tools and tests
images:
  - src: /images/encyclopedia/game/screenshots__2026-09-30__03_fungi_props.jpg
    alt: Fungi props
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-09-30__04_fungi_props_closeup.jpg
    alt: Fungi close-up
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-s1-02-mushrooms-built-from-voxels
source: Claude handoff · development/devlog-s1-02-mushrooms-built-from-voxels.md
related: []
updated: '2026-10-11'
---

# Mushrooms, built from voxels

Props follow the same scale as blocks: **16 voxels per metre**, so a mushroom's
pixels line up with the ground's. A Blender script builds each one from voxels,
merges same-coloured faces ("greedy meshing") to keep them cheap to draw by the
thousand, and exports `.glb` files for Godot. Every colour comes from a single
pixel of a tiny palette image, so the props stay crisp at any distance.

The first render came out **completely black**. Two bugs were stacked: writing
pixels into an image Blender had already saved silently did nothing, and
changing the image's colour-space *after* writing the pixels wiped them. The
exporter also quietly packed Blender's default cube into every file until it
was told to export only the active scene.

![Fungi props](/images/encyclopedia/game/screenshots__2026-09-30__03_fungi_props.jpg)

*Development gameplay capture*

The four cap colours (tan, rust, teal, violet) stand in for the strain colour
wheel from the design doc. The close-up pass fixed inkcaps that merged into
one blob and puffballs hiding inside each other.

![Fungi close-up](/images/encyclopedia/game/screenshots__2026-09-30__04_fungi_props_closeup.jpg)

*Development gameplay capture*
