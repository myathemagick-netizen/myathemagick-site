---
title: 92. Toasts you can read
description: Toasts you can read
section: development
kind: devlog
entry: 92
devlog_id: '92'
date: '2026-10-06'
session: Session 4 — The top rungs
tags: []
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-06__08_toasts.jpg
    alt: Toasts by kind
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-092-toasts-you-can-read
source: Claude handoff · development/devlog-092-toasts-you-can-read.md
related: []
updated: '2026-10-11'
---

# Toasts you can read

- **Smaller type** (14, was 18) and smaller icons, so a run of messages
  takes less of the screen. Up to 8 show at once.
- **Sorted by kind** (`InventoryUI.toast_kind`, from what the message says;
  callers can name the kind). Each has a bar of its colour down the left,
  and an icon where there is one:

| Kind | Stays | Look |
|---|---|---|
| pickup | 2.2 s | the item's own icon |
| skill gain ("Masonry +0.4") | 2.2 s | teal, a book |
| general | 4 s and up | grey |
| a place or a land found | 6.5 s and up | gold, a map |
| important (a level, a milestone, a new idea, something read) | 7 s and up | gold, a trophy |
| warning (you can't, it's full, you're hurt) | 6 s and up | red |

- The longer kinds get extra time for every character, so a long message
  stays long enough to read.
- When there are too many, the quick ones (pickups, skill gains) make room
  first; the important ones are never pushed out by a pile of pickups.
- `toast_test`.

![Toasts by kind](/images/encyclopedia/game/screenshots__2026-10-06__08_toasts.jpg)

*Development gameplay capture*
