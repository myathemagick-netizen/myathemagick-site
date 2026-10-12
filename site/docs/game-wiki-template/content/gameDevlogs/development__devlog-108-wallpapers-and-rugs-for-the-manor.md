---
title: 108. Wallpapers and rugs for the manor
description: From the author's wallpaper sheet.
section: development
kind: devlog
entry: 108
devlog_id: '108'
date: '2026-10-07'
session: Session 4 — The top rungs
tags:
  - hollow wood
images:
  - src: /images/encyclopedia/game/manor__room_dining.jpg
    alt: The dining room
    kind: game_render
  - src: /images/encyclopedia/game/manor__wallpapers.jpg
    alt: The papers and rugs
    kind: game_render
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-108-wallpapers-and-rugs-for-the-manor
source: Claude handoff · development/devlog-108-wallpapers-and-rugs-for-the-manor.md
related: []
updated: '2026-10-11'
---

# Wallpapers and rugs for the manor

From the author's wallpaper sheet.

- **Ten wallpapers** (`wallpaper_...`): blood damask, mourning vine, faded
  fleur, funeral stripe, thorn trellis, widow's lace, gothic quatrefoil,
  pale ghost floral, dead chrysanthemum, autumn acanthus. Each is a block
  like any other (they're in the building editor's list).
- **A paper per kind of room**: every kind has two it may wear, and a manor
  picks one for all its rooms of that kind. Halls wear funeral stripe or
  blood damask. A wall between two rooms takes one room's paper on both
  faces (walls are one block thick).
- **Rugs** (`rug_crimson`, `rug_plum`, `rug_pale`): flat blocks like moss,
  two by two in the middle of three furnished rooms in four. You walk over
  them; picking one up gives cloth about half the time.
- The room's painting hangs clear of the corner furniture now; sealed rooms
  are any kind of room, not mostly storage.
- `docs/hollow_manor.md` regenerated with the papers and rugs.
- Not done from the sheet: the worn states (faded, stained, peeling, moldy,
  hyphal), crow and briar.

![The papers and rugs](/images/encyclopedia/game/manor__wallpapers.jpg)

*Engine structure render · not a player-view screenshot*
![The dining room in dead chrysanthemum](/images/encyclopedia/game/manor__room_dining.jpg)

*Engine structure render · not a player-view screenshot*
