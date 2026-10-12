---
title: '51. Screens: controls in the corner, notes as symbols, a Journal tab'
description: 'Screens: controls in the corner, notes as symbols, a Journal tab'
section: development
kind: devlog
entry: 51
devlog_id: '51'
date: '2026-10-04'
session: Session 4 — The top rungs
tags:
  - interface
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-04__19_crafting_fits.jpg
    alt: Crafting
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-04__20_research_notes_icons.jpg
    alt: Unwritten notes as symbols
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-051-screens-controls-in-the-corner-notes-as-symbols-a-journal-tab
source: Claude handoff · development/devlog-051-screens-controls-in-the-corner-notes-as-symbols-a-journal-tab.md
related: []
updated: '2026-10-11'
---

# Screens: controls in the corner, notes as symbols, a Journal tab

- **Each screen's controls show in the corner hints** (lower right, the
  same place as in the world, and switching with keyboard or controller):
  the character screen per tab, stations, the pack and containers, the
  settings page. The help lines inside the screens are hidden while the
  corner hints are on (they come back if you turn the hints off). The corner
  hints sit above every screen now (`screen_hints()` on each screen).
- **The skill line only shows at stations with more than one skill**
  (the masonry bench has only Masonry).
- **The crafting list fits its tab** at any interface size (it ran into the
  help line at smaller sizes).
- **Unwritten notes are the fields' symbols**, each bordered in the colour of
  how far you've got in it, with the pages waiting under it; point at one for
  its name. (A long list used to run off the screen.)
- **Journal tab**: mushrooms you've learned and brews you've drunk (moved
  here from Research), places you've found (by kind), and what you've found
  out: field notes read, rare books found, dinosaurs taken apart, things you
  know by sight. A first step toward achievements.

![Crafting](/images/encyclopedia/game/screenshots__2026-10-04__19_crafting_fits.jpg)

*Development gameplay capture*
![Unwritten notes as symbols](/images/encyclopedia/game/screenshots__2026-10-04__20_research_notes_icons.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-04/21_journal.jpg: The Journal)*
*(image not bundled: docs/screenshots/2026-10-04/22_masonry_hints.jpg: The masonry bench: no skill line)*
