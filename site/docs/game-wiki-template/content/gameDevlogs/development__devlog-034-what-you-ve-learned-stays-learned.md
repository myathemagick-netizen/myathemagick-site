---
title: 34. What you've learned stays learned
description: 'From a playthrough: the second study slot (Communication 2) only opened while the Communication book was carried or studied. That wasn''t the slot: every unlock worked that way: recipes, hints, station ladders all asked "what level...'
section: development
kind: devlog
entry: 34
devlog_id: '34'
date: '2026-10-03'
session: Session 4 — The top rungs
tags:
  - research
  - crafting
images: []
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-034-what-you-ve-learned-stays-learned
source: Claude handoff · development/devlog-034-what-you-ve-learned-stays-learned.md
related: []
updated: '2026-10-11'
---

# What you've learned stays learned

From a playthrough: the second study slot (Communication 2) only opened
while the Communication book was carried or studied. That wasn't the slot:
**every** unlock worked that way: recipes, hints, station ladders all asked
"what level are the books you have on you?", so a book left on a library
shelf took its knowledge with it. The Knowledge tab, meanwhile, counted every
book you own, so it said one thing and the game did another.

Now `Research.level_of()` is the best level any of your books on a field has
reached, wherever the book is (carried, studied, shelved at home), and the
Knowledge tab uses the same. Books are where knowledge is written down (you
still study one to fill it), but once a book reaches a level, you know it.
`tests/library_test.gd` checks the second slot stays open with the
Communication book on the shelf.
