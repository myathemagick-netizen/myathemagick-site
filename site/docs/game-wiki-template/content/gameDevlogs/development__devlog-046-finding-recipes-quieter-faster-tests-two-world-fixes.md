---
title: 46. Finding recipes; quieter, faster tests; two world fixes
description: Finding recipes; quieter, faster tests; two world fixes
section: development
kind: devlog
entry: 46
devlog_id: '46'
date: '2026-10-04'
session: Session 4 — The top rungs
tags:
  - crafting
  - tools and tests
images: []
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-046-finding-recipes-quieter-faster-tests-two-world-fixes
source: Claude handoff · development/devlog-046-finding-recipes-quieter-faster-tests-two-world-fixes.md
related: []
updated: '2026-10-11'
---

# Finding recipes; quieter, faster tests; two world fixes

**Stations:** a **search box** over every recipe list (names, descriptions
and ingredients: "planks" finds everything made with planks), and a row of
**skill symbols** to show one skill's recipes (LB / RB at a station, Q on
the keyboard, or click). Each station remembers its filter. The writing
desk's "Begin ... Notes" now show each field's own book cover.

**Tests** were too much for the computer: several game windows at once,
in the player's own settings (fullscreen, sound on). Now:

- **Test mode** (`TestMode`, set by the runner): tests use their own
  settings file (they can never change yours), never go fullscreen, run
  muted; saved-world tests write to `test_saves/`, not among your worlds.
- **The show** (`tools/run_tests.sh`): one test at a time in a window, below
  normal priority. **Quiet** (`-q`): headless, no windows, no photographs;
  skips the four that need a window (scrolling and tooltips, F12, walking up
  steps, music). Headless runs are held to 60 fps so waits behave the same.
- A script error now stops a test in seconds (it used to sit until the
  10-minute timeout); stopping the runner closes its test windows.
- A **light world** (flat ground, nothing on it) for ten tests that don't
  need the land: they start at once (craft_filter_test: 12 s -> 2 s).
- A **test seed** (127, `tools/find_test_seed.gd`): its home town has the
  museum, library and hospital, with a farmstead, quarry and old mine on the
  roads close by, so world tests barely travel.

**World fixes** the new seed turned up:

- Roadside places (quarries, mines, farmsteads, lone houses) could be put
  where another road ran, or where their own road bent back across them: a
  quarry with a road through its pit. They now keep clear of every road
  (`RoadNetwork._off_roads`, using road courses only, so nothing recurses).
- Two roads leaving a town by the same street both parked cars in the
  shared lane, one inside the other; of things in the same spot, one is
  real now (always the same one, so a stripped car stays gone).
