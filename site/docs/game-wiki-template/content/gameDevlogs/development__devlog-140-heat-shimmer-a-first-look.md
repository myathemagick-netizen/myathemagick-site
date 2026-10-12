---
title: 140. Heat shimmer (a first look)
description: 'HeatShimmer (world/heatshimmer.gd + .gdshader): a full-screen layer over the 3D view that re-reads the finished picture with a band along the horizon (worked out from the camera''s pitch and field of view) nudged sideways by a slow...'
section: development
kind: devlog
entry: 140
devlog_id: '140'
date: '2026-10-11'
session: Session 4 — The top rungs
tags:
  - interface
  - survival
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-11__shimmer_compare.jpg
    alt: Off above, on below
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-140-heat-shimmer-a-first-look
source: Claude handoff · development/devlog-140-heat-shimmer-a-first-look.md
related: []
updated: '2026-10-11'
---

# Heat shimmer (a first look)

`HeatShimmer` (`world/heat_shimmer.gd` + `.gdshader`): a full-screen layer over the 3D view that re-reads the finished picture with a band along
the **horizon** (worked out from the camera's pitch and field of view) nudged sideways by a slow wave, strongest at the horizon and fading
toward the viewer; the sky is left alone. It switches on with the heat where you stand when you are in the open (`Climate`'s heat, full at about
8 points: the desert from late morning to the evening), and is a setting on the Graphics page ("Heat shimmer", on by default; "Everything off"
turns it off; tests and headless runs never show it). A first version drew the effect from the depth buffer, but a 3D quad that re-reads the
screen drops everything transparent (the sand on the wind, glass), so it is now a screen layer; the cost is that it works by screen position, not
distance, so nearer things at the horizon's height wobble too (a second pass with real depth would need a Compositor effect). `desert_shots.gd`
takes `DESERT_SHIMMER=1`. Pictures: `shimmer_compare.png` (off above, on below) and `shimmer_on.gif`.

![Off above, on below](/images/encyclopedia/game/screenshots__2026-10-11__shimmer_compare.jpg)

*Development gameplay capture*
