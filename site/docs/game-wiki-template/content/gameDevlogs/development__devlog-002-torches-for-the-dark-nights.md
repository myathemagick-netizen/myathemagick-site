---
title: 2. Torches for the dark nights
description: A torch in your hand lights the way with a warm, flickering light. Placed with LT, it stands in a little ring of stones and lights the street around it, and you can pick it up again by holding X. It's a new voxel prop in the furni...
section: development
kind: devlog
entry: 2
devlog_id: '2'
date: '2026-10-01'
session: Session 3 — Crafting by hand
tags: []
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-01__12_night_held_torch.jpg
    alt: Holding a torch at night
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-01__13_night_placed_torch.jpg
    alt: A placed torch lighting the street
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-002-torches-for-the-dark-nights
source: Claude handoff · development/devlog-002-torches-for-the-dark-nights.md
related: []
updated: '2026-10-11'
---

# Torches for the dark nights

A **torch** in your hand lights the way with a warm, flickering light.
Placed with LT, it stands in a little ring of stones and lights the street
around it, and you can pick it up again by holding X. It's a new voxel prop
in the furniture generator with an emissive flame. Furniture and torches now
go down once per press of LT, so holding the trigger no longer scatters a
row of them; blocks still repeat.

The first placed torch was oddly dim: its light sat inside the flame model
with shadows on, so the torch shadowed its own light. Now the light sits
just above the flame and the model casts no shadow.

A **bandage** works like food: hold LT to bind a wound for 25 health.

![Holding a torch at night](/images/encyclopedia/game/screenshots__2026-10-01__12_night_held_torch.jpg)

*Development gameplay capture*
![A placed torch lighting the street](/images/encyclopedia/game/screenshots__2026-10-01__13_night_placed_torch.jpg)

*Development gameplay capture*

`tests/craft_test.gd` drives all of it with real gamepad input (View, d-pad,
A, LT): learning, crafting, missing ingredients, a full pack, the bandage,
and placing a torch at night. The save test now checks that known recipes
survive a reload.
