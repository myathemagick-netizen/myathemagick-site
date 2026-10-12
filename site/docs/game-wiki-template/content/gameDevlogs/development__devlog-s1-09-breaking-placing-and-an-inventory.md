---
title: 9. Breaking, placing and an inventory
description: 'The first piece of actual gameplay. Aim at a block and a thin outline shows it. Hold RT (left mouse) to break it: a small bar fills, fast for dirt and glass, slow for concrete and metal. The block goes into your inventory (grass g...'
section: development
kind: devlog
entry: 9
devlog_id: s1:9
date: '2026-09-30'
session: Session 1 — From one brown cube to a ruined town
tags:
  - desert
images:
  - src: /images/encyclopedia/game/screenshots__2026-09-30__54_breaking_outline_progress.jpg
    alt: Breaking
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-09-30__55_hotbar_placed_stairs.jpg
    alt: Hotbar and a placed stair
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-s1-09-breaking-placing-and-an-inventory
source: Claude handoff · development/devlog-s1-09-breaking-placing-and-an-inventory.md
related: []
updated: '2026-10-11'
---

# Breaking, placing and an inventory

The first piece of actual gameplay. Aim at a block and a thin outline shows
it. **Hold RT** (left mouse) to break it: a small bar fills, fast for dirt
and glass, slow for concrete and metal. The block goes into your inventory
(grass gives dirt; stairs and railings come back as one item whichever way
they faced). **LT** (right mouse) places the selected item against the face
you're aiming at. Stairs and railings turn to face the way you're looking,
so stairs you place rise away from you.

A simple **hotbar** of nine slots sits at the bottom: icons, counts, a teal
highlight on the selection and the item's name for a moment when it
changes. **RB / LB** cycle it (mouse wheel or 1–9 on keyboard); LB moved off
sprint to match Minecraft's controller layout. **Y** (Tab / I) opens the
inventory: 27 more slots above the hotbar row. Pick a slot with A or a click,
then another, and they swap. Aiming skips water and the invisible rail guards.
Like everything UI so far, it's deliberately plain, with its styling in one
place for the design pass.

A test drives all of it with real controller inputs: it breaks a road block
with RT and puts it back with LT, cycles with RB, places a stair and checks
it faces the right way, then opens the inventory with Y, swaps two slots with
A and closes with B. Every check passed on the first run.

![Breaking](/images/encyclopedia/game/screenshots__2026-09-30__54_breaking_outline_progress.jpg)

*Development gameplay capture*
![Hotbar and a placed stair](/images/encyclopedia/game/screenshots__2026-09-30__55_hotbar_placed_stairs.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-09-30/56_inventory_screen.jpg: Inventory)*
