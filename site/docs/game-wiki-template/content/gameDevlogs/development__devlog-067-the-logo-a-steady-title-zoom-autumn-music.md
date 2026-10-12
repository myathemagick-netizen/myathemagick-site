---
title: 67. The logo, a steady title zoom, autumn music
description: The logo, a steady title zoom, autumn music
section: development
kind: devlog
entry: 67
devlog_id: '67'
date: '2026-10-05'
session: Session 4 — The top rungs
tags:
  - autumn fields
  - audio
images: []
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-067-the-logo-a-steady-title-zoom-autumn-music
source: Claude handoff · development/devlog-067-the-logo-a-steady-title-zoom-autumn-music.md
related: []
updated: '2026-10-11'
---

# The logo, a steady title zoom, autumn music

- **The logo** on the title screen (`assets/ui/title_logo.png`, made by the
  project's author: stone voxel letters, moss, tan and teal mushrooms,
  glowing hyphae), in place of the text title. It takes the column's width
  and keeps its shape, so the menu always fits.
- **The title backgrounds only zoom in now**, slowly and steadily, and
  cross-fade from one to the next. No drift. The judder came from moving and
  scaling the picture nodes by fractions of a pixel (the interface snaps
  nodes to whole pixels); the zoom is now done in a shader on the picture,
  timed by game time.
- **Autumn Fields music** from Suno: day (and its slow version) and two
  night takes.
- `asset_src/inbox/`: a drop folder for anything that isn't music.
