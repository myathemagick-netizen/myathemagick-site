---
title: 126. Alpha builds
description: 'For the in-house playtest weekend: a numbered Windows .exe to hand to friends.'
section: development
kind: devlog
entry: 126
devlog_id: '126'
date: '2026-10-08'
session: Session 4 — The top rungs
tags:
  - tools and tests
images: []
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-126-alpha-builds
source: Claude handoff · development/devlog-126-alpha-builds.md
related: []
updated: '2026-10-11'
---

# Alpha builds

For the in-house playtest weekend: a numbered Windows .exe to hand to friends.

- **`python tools/build_alpha.py`** (about two minutes): writes the commit count and
  the commit into `game/build_info.gd` (restored to "dev" after), exports the preset
  "Windows Alpha" (`export_presets.cfg`; release, x86_64, the data packed into the .exe,
  `docs`, `tests`, `tools`, `asset_src` left out) to **`D:/Claude Code/builds/
  mycelium_alpha_<n>/`**, adds a "READ ME FIRST.txt" for the friends, and zips the
  folder. Build 198: the .exe is 268 MB, the zip 196 MB. A "+" after the commit means the
  build had uncommitted changes in it.
- **The number shows**: the window's title ("Mycelium: Aftergrowth - alpha build 198
  (abcc0ab)") and a line at the bottom right of the title screen.
- **The folder must go together**: the voxel extension's `libvoxel.windows.template_
  release.x86_64.dll` sits next to the .exe (Godot does not embed extensions); the
  zip has both.
- **Smoke-tested** (the exported .exe, headless, in test mode so it cannot touch real
  saves or settings): the title screen starts clean and a world runs for 900 frames
  with no resource errors. (A release build can't be pointed at a scene on the command
  line, so a test-mode-only hook, `MYCELIUM_AUTOSTART=1`, sends the title screen into a world.)
  Not tested: playing it by hand, a second machine, a controller.
- **Things to know**: the .exe shares the author's saves folder (`%APPDATA%/Godot/
  app_userdata/mycelium`) on the machine that built it; the build is unsigned (Windows asks
  "Run anyway"); the journal's thumbnails of props come from `docs/` and fall back to
  the item icons in a build; the export templates (x86_32 and x86_64) are in
  `%APPDATA%/Godot/export_templates/4.7.2.stable`.
