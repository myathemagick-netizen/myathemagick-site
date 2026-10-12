---
title: '60. Menu fixes: two books, hints that follow your device, a map you can drag'
description: 'Menu fixes: two books, hints that follow your device, a map you can drag'
section: development
kind: devlog
entry: 60
devlog_id: '60'
date: '2026-10-04'
session: Session 4 — The top rungs
tags:
  - research
  - interface
  - cartography
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-04__44_research_two_books.jpg
    alt: Two books
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-060-menu-fixes-two-books-hints-that-follow-your-device-a-map-you-can-drag
source: Claude handoff · development/devlog-060-menu-fixes-two-books-hints-that-follow-your-device-a-map-you-can-drag.md
related: []
updated: '2026-10-11'
---

# Menu fixes: two books, hints that follow your device, a map you can drag

- **Research tab:** a second studied book now shows the same as the first:
  its name in its tier's colour, level and pages, a progress bar, and what
  it gives. With two books open each shows how many levels it has given and
  the next one (the full list is on the Knowledge tab).
- **Hints follow the device in menus:** which device you're using was only
  noted by the player, whose input stops while a menu pauses the game; the
  hints panel (always running) notes it now. The tab bar's LB / RB labels
  read Q / E on a keyboard.
- **Corner hints** for the Journal (scroll: wheel / right stick) and the
  Knowledge map (look around: drag / right stick).
- **Knowledge map:** click and drag to move it around (from a box or between
  them); the right stick moves it too.
- **Title slideshow, smoother:** the two layers take turns, each keeping its
  own steady motion (no more jolt when a slide changes: it lost its centre
  point and stopped dead), linear drift, and mipmapped pictures (no shimmer
  as they zoom).
- New `menu_input_test`; `title_test` checks the motion. The test runner no
  longer crashes printing a test's "✓" on Windows.

![Two books](/images/encyclopedia/game/screenshots__2026-10-04__44_research_two_books.jpg)

*Development gameplay capture*
