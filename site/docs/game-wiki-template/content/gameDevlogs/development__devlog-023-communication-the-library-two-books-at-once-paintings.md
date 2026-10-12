---
title: '23. Communication: the library, two books at once, paintings'
description: A new research topic, begun at the writing desk like the others; anything made at the desk (blank books, ink, notes, copies, transcriptions) teaches it, and so does taking apart a bookshelf.
section: development
kind: devlog
entry: 23
devlog_id: '23'
date: '2026-10-02'
session: Session 4 — The top rungs
tags:
  - research
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-02__10_library.jpg
    alt: Library
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-02__11_two_study_slots.jpg
    alt: Two study slots
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-023-communication-the-library-two-books-at-once-paintings
source: Claude handoff · development/devlog-023-communication-the-library-two-books-at-once-paintings.md
related: []
updated: '2026-10-11'
---

# Communication: the library, two books at once, paintings

A new research topic, begun at the writing desk like the others; anything
made at the desk (blank books, ink, notes, copies, transcriptions) teaches
it, and so does taking apart a bookshelf.

1. **Library** (Communication 1, workbench): a tall case of notebooks with a
   reading lamp that holds **18 research books, and only those**. Its own
   screen (`LibraryUI`) has three columns (on the shelves, studying, in your
   pack): A moves a book along (pack → shelf → studying, and the book it
   replaces goes back on the shelf), Y / right-click takes a shelved book.
2. **A second study slot** (Communication 2): `Research.STUDY_SLOTS` is now
   `study` and `study2` (`Research.slot_open()`); both books learn at double
   rate. LT with a second book in hand fills the free slot; the Research tab
   shows the second slot once it's open.
3. **Easel** (Communication 3, workbench): paint six pictures (Hills at Dawn,
   Still Life with Mushrooms, Town at Night, The Lake, Spores, Portrait of a
   Stranger) from cloth, a plank and ink (sometimes a mushroom for colour).
   The art is 14 × 12 pixel art in `asset_src/tools/paintings.py`, shared by
   the voxel canvas and the item icon. **Pictures hang on walls:** aim at the
   side of a block and LT (a new "wall" placement: `BlockInteraction._hang`);
   you walk past them, and hold X to take one down.
4. **Copying** a book takes half the time and ink (Communication 4).

![Library](/images/encyclopedia/game/screenshots__2026-10-02__10_library.jpg)

*Development gameplay capture*
![Two study slots](/images/encyclopedia/game/screenshots__2026-10-02__11_two_study_slots.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-02/12_painting_on_wall.jpg: A painting on the wall)*
*(image not bundled: docs/screenshots/2026-10-02/13_library_easel_paintings.jpg: Library, easel and the six paintings)*

`tests/round3_test.gd` walks all four levels: shelving, studying from the
shelf and swapping, the second slot's double rate, painting and hanging
(and not hanging on a floor), and the cheaper copy.
