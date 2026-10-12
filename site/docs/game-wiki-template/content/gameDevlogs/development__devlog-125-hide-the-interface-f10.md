---
title: 125. Hide the interface (F10)
description: For clean pictures and for the playtest. F10 hides the interface and brings back exactly what it hid (Screenshots.toggleui(); also a button in the pause menu's display page). It hides the player's HUD, the compass and the control ...
section: development
kind: devlog
entry: 125
devlog_id: '125'
date: '2026-10-08'
session: Session 4 — The top rungs
tags:
  - interface
  - tools and tests
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-08__ui_shown.jpg
    alt: Shown
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-08__ui_hidden.jpg
    alt: Hidden
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-125-hide-the-interface-f10
source: Claude handoff · development/devlog-125-hide-the-interface-f10.md
related: []
updated: '2026-10-11'
---

# Hide the interface (F10)

For clean pictures and for the playtest. **F10** hides the interface and brings back
exactly what it hid (`Screenshots.toggle_ui()`; also a button in the pause menu's
display page). It hides the player's HUD, the compass and the control hints, and the
hotbar, toasts, status row and tooltips in the inventory layer. It never touches the
menus (pause, character, stations, library, brewing), and the pack screen still opens
with the interface hidden; what comes back is only what was hidden, so a closed menu
can't pop up. F12 still takes the picture (a clean one, now). Keyboard only for now:
the controller's Share button is still just the screenshot.
`hide_ui_test`: hides and restores, a real key event, the menus and the pack screen.

![Shown](/images/encyclopedia/game/screenshots__2026-10-08__ui_shown.jpg)

*Development gameplay capture*
![Hidden](/images/encyclopedia/game/screenshots__2026-10-08__ui_hidden.jpg)

*Development gameplay capture*
