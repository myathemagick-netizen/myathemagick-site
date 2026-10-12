---
title: 32. The library, and a symbol for every field
description: 'From a playthrough: the library screen didn''t redraw after a move (the shelves column lagged, the studying column could vanish; leaving and coming back showed it had worked), and choosing what to study just swapped things round wi...'
section: development
kind: devlog
entry: 32
devlog_id: '32'
date: '2026-10-03'
session: Session 4 — The top rungs
tags:
  - interface
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-03__14_library_picking.jpg
    alt: 'The library: a study slot picked (gold), choosing what goes in it'
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-03__15_hud_studying.jpg
    alt: 'The status bar: Communication and Mining being studied, bordered by tier'
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-032-the-library-and-a-symbol-for-every-field
source: Claude handoff · development/devlog-032-the-library-and-a-symbol-for-every-field.md
related: []
updated: '2026-10-11'
---

# The library, and a symbol for every field

From a playthrough: the library screen didn't redraw after a move (the
shelves column lagged, the studying column could vanish; leaving and coming
back showed it had worked), and choosing what to study just swapped things
round without asking.

- **Why it lagged:** the screen rebuilt itself while the button you'd
  pressed was still handling the press, so the old buttons couldn't be
  freed. Every move now redraws on the next frame instead.
- **Choosing what to study** (`ui/library_ui.gd`):
  - A on a book you're studying (or an empty study slot) **picks that
    slot**: it's outlined in gold and the heading says "choose a book".
    The next book you choose, from the shelves or from your pack, is studied
    in its place, and the old one goes where the new one came from. A on it
    again puts it back on the shelf; B cancels.
  - A on a shelved book studies it in an empty slot; if both are full, it
    asks which one it should replace.
  - A on a book in your pack shelves it; Y / right-click takes a shelved
    book into your pack, as before.
- **A symbol for every field of knowledge** (`assets/ui/knowledge_icons.png`,
  drawn by gen_items.py): a mushroom for Mycology, a lightning bolt for
  Electronics, a hammer, a cross, bricks, a cooking pot, scissors, a flask,
  the alchemical triangle, a speech bubble, a sprout, a gear, a cut gem for
  Mining and an anvil for Metallurgy, each on its own colour.
  - **Research books** wear their field's colour with its symbol on the
    cover, so you can tell them apart in your pack at a glance.
  - **The status bar** shows each book you're studying as its symbol,
    **bordered in the book's tier colour** (Spore white, Sprout green,
    Mycelial blue, Fruiting purple), so you can see when a level comes up;
    hover for the field, level and pages. No timer.
  - **The library** and **the Knowledge map**'s column heads show the
    symbols too.

![The library: a study slot picked (gold), choosing what goes in it](/images/encyclopedia/game/screenshots__2026-10-03__14_library_picking.jpg)

*Development gameplay capture*
![The status bar: Communication and Mining being studied, bordered by tier](/images/encyclopedia/game/screenshots__2026-10-03__15_hud_studying.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-03/16_knowledge_icons.jpg: The Knowledge map with the symbols)*
*(image not bundled: docs/screenshots/2026-10-03/17_knowledge_symbols.jpg: Every field's book and symbol)*

`tests/library_test.gd` drives the library through its own buttons and
checks the columns match what happened after every press (shelving,
studying from the shelf, the which-slot question, picking a slot then a
pack book, putting one back), then the book icons, the status bar's
studying icons and their tier border, and the Knowledge map's symbols.
