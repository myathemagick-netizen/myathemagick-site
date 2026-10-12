---
title: 70. Item kinds and faint slot colours
description: Item kinds and faint slot colours
section: development
kind: devlog
entry: 70
devlog_id: '70'
date: '2026-10-05'
session: Session 4 — The top rungs
tags: []
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-04__63_tinted_slots.jpg
    alt: Tinted slots
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-070-item-kinds-and-faint-slot-colours
source: Claude handoff · development/devlog-070-item-kinds-and-faint-slot-colours.md
related: []
updated: '2026-10-11'
---

# Item kinds and faint slot colours

- **Every item has a kind** (`Items.category`): wood & fibre, stone & earth,
  metal & ore, electronics, cloth, mushrooms & fungal, food, medicine, brews
  & alchemy, books & paper; tools, furniture and gear worn for its use have
  none. Rules (ingots, ores, cultures, wild mushrooms, blocks by what they're
  made of) plus a short list for the rest. Wild mushrooms are fungal, cooked
  ones food.
- **Slots show it as a faint colour** behind the item (16%), in the pack, the
  hotbar and containers; the tooltip names it beside the tier. Settings >
  Interface "Colour slots by kind of item" turns it off.
- **Sort by kind uses the same list**, so a sorted pack comes out in bands of
  colour. The topic bags will hold these kinds.

![Tinted slots](/images/encyclopedia/game/screenshots__2026-10-04__63_tinted_slots.jpg)

*Development gameplay capture*
