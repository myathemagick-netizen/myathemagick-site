---
title: 3. Into Godot
description: 'Godot was driven from the command line: a headless run dumped the Voxel Tools API straight from the installed build, so the scripts matched this exact version rather than documentation. A screenshot test then rendered every block ...'
section: development
kind: devlog
entry: 3
devlog_id: s1:3
date: '2026-09-30'
session: Session 1 — From one brown cube to a ruined town
tags:
  - interface
  - creatures
  - tools and tests
images:
  - src: /images/encyclopedia/game/screenshots__2026-09-30__05_first_godot_import.jpg
    alt: First Godot import
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-09-30__06_main_world_textured_unlit.jpg
    alt: Textured but unlit
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-s1-03-into-godot
source: Claude handoff · development/devlog-s1-03-into-godot.md
related: []
updated: '2026-10-11'
---

# Into Godot

Godot was driven from the command line: a headless run dumped the Voxel Tools
API straight from the installed build, so the scripts matched this exact
version rather than documentation. A screenshot test then rendered every block
and prop in the real engine for the first time.

![First Godot import](/images/encyclopedia/game/screenshots__2026-09-30__05_first_godot_import.jpg)

*Development gameplay capture*

The main world switched from one brown cube to the textured library — and the
hills turned black. The sun pointed almost straight down and there was no sky
light, so every vertical face was in shadow.

![Textured but unlit](/images/encyclopedia/game/screenshots__2026-09-30__06_main_world_textured_unlit.jpg)

*Development gameplay capture*

An angled sun, an overcast procedural sky and a little fog fixed it, and set
the post-collapse mood.

*(image not bundled: docs/screenshots/2026-09-30/07_main_world_lit.jpg: Lit main world)*

Housekeeping in between: the project went under **git**, and all asset sources
moved into the project as `asset_src/` (hidden from Godot), so generators now
write straight into `assets/` and everything is versioned together.
