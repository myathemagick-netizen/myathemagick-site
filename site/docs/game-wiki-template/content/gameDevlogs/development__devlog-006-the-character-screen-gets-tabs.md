---
title: 6. The Character screen gets tabs
description: 'With research books on the way (GDD §10), one screen was getting crowded. The Character screen is now three tabs, built so more can slot in later:'
section: development
kind: devlog
entry: 6
devlog_id: '6'
date: '2026-10-01'
session: Session 3 — Crafting by hand
tags:
  - research
  - interface
  - creatures
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-01__25_tab_character.jpg
    alt: Character tab
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-01__26_tab_crafting.jpg
    alt: Crafting tab
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-006-the-character-screen-gets-tabs
source: Claude handoff · development/devlog-006-the-character-screen-gets-tabs.md
related: []
updated: '2026-10-11'
---

# The Character screen gets tabs

With research books on the way (GDD §10), one screen was getting crowded.
The Character screen is now three tabs, built so more can slot in later:

- **Character**: day, health, hunger and the six gear slots, with what's
  worn shown beside them.
- **Crafting**: crafting by hand, as before.
- **Research**: what you've learned. For now that's the mushrooms you've
  eaten (safe or not), plus a page waiting for the first research book.

LB / RB (Q / E on the keyboard) step through the tabs and wrap around.
Clicking a tab works too. With the d-pad you can also go up off the top of
a page onto the tab bar, then left and right along it. The first try at
that landed on whichever tab was nearest, not the one you were on, so
arriving on the bar from below now always lands on the current tab. The
screen remembers the last tab you used.

![Character tab](/images/encyclopedia/game/screenshots__2026-10-01__25_tab_character.jpg)

*Development gameplay capture*
![Crafting tab](/images/encyclopedia/game/screenshots__2026-10-01__26_tab_crafting.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-01/27_tab_research.jpg: Research tab)*
