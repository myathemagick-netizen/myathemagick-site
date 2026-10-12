---
title: '7. Research: knowledge from doing, written into books'
description: 'The GDD replaces a tech tree with research books (§10). The rules, as settled in this session:'
section: development
kind: devlog
entry: 7
devlog_id: '7'
date: '2026-10-01'
session: Session 3 — Crafting by hand
tags:
  - research
  - creatures
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-01__28_writing_desk.jpg
    alt: The writing desk
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-01__29_desk_menu.jpg
    alt: At the desk
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-007-research-knowledge-from-doing-written-into-books
source: Claude handoff · development/devlog-007-research-knowledge-from-doing-written-into-books.md
related: []
updated: '2026-10-11'
---

# Research: knowledge from doing, written into books

The GDD replaces a tech tree with research books (§10). The rules, as
settled in this session:

- **Everything you do teaches something about its topic**, whatever you're
  studying. Taking a television apart teaches Electronics; picking and
  eating mushrooms, Mycology; taking furniture apart or building at the
  workbench, Carpentry; dressing wounds or getting over being sick, First
  Aid.
- **Knowledge only goes into a book of that topic.** Until you have one in
  your **study slot**, it waits as *unwritten notes*. The moment you study
  a book on that topic, everything you'd noticed is written up.
- **What you study, you learn twice as fast.** Other topics still collect
  notes, without the bonus.
- **Repeats teach less, variety teaches most.** The second television
  teaches less than the first, the third less again (never below a fifth).
- **The study slot works like a gear slot**, on the Research tab: A opens a
  pop-up of the books you carry, with how many unwritten notes each would
  write up. You can carry any number of books; only the studied one grows.
  (More study slots can be unlocked later.)
- **Knowledge lives in the book.** Pages raise its level, and its tier
  (Spore → Sprout → Mycelial → Fruiting). While you carry or study a book,
  its level unlocks things:

| Topic | Level 1 | Level 2 |
|---|---|---|
| Mycology | your notes hint whether an unknown mushroom is safe | Healing Broth (cures sickness) |
| Electronics | Strip Circuit Board (into wire) | Battery Lamp (a steady white light) |
| Carpentry | Bookshelf (12-slot storage) | — |
| First Aid | Poultice | bandages heal half as much again |

The **writing desk** (made at the workbench; a new model with a hutch of
books, an open book, an inkwell and quill, and a lit candle) is where books
happen: rebind a found book into a **Blank Book**, dissolve inkcaps into
**Ink**, **begin notes** on a topic, **transcribe** a found journal into the
book you study (+15 pages: whose handwriting is this?), and **copy** any
book you carry. Copying takes time and ink that grow with the book's level
(1 hour for a new book, 5 at level 2), so hard-won knowledge stays scarce,
as the GDD wants.

Research books are the first items with their own data: each has an
instance id (`research_book#3`) whose topic and pages live in
`player/research.gd`, saved with the world.

![The writing desk](/images/encyclopedia/game/screenshots__2026-10-01__28_writing_desk.jpg)

*Development gameplay capture*
![At the desk](/images/encyclopedia/game/screenshots__2026-10-01__29_desk_menu.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-01/30_study_popup.jpg: Choosing a book to study)*
*(image not bundled: docs/screenshots/2026-10-01/31_research_tab.jpg: Studying electronics, level 1)*
*(image not bundled: docs/screenshots/2026-10-01/32_battery_lamp.jpg: The battery lamp at night)*

`tests/research_test.gd` runs the whole loop: two televisions taken apart
with no book (unwritten notes, the second teaching less), the desk, a new
Electronics book studied from the Research tab (notes written up, level 1),
a third television at double rate, a journal transcribed (level 2), a copy
made (5 hours pass), and the battery lamp lit at night.
