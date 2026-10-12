---
title: '16. Alpha-test fixes: screens that hold still'
description: 'From the first play-through on real hardware:'
section: development
kind: devlog
entry: 16
devlog_id: '16'
date: '2026-10-01'
session: Session 3 — Crafting by hand
tags:
  - interface
  - tools and tests
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-01__72_masonry_bench_fixed.jpg
    alt: 'Masonry bench: long names end in "..."'
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-01__73_writing_desk_fixed.jpg
    alt: Writing desk
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-016-alpha-test-fixes-screens-that-hold-still
source: Claude handoff · development/devlog-016-alpha-test-fixes-screens-that-hold-still.md
related: []
updated: '2026-10-11'
---

# Alpha-test fixes: screens that hold still

From the first play-through on real hardware:

- **Screens jumped under the mouse.** Station screens, the gear and study
  pop-ups resized to fit whatever was focused (a long name like *Scrape
  Overgrown Concrete* or *Copy Sprout Mycology Notes*, a taller detail). A
  `CenterContainer` then re-centred them, so the row under a still pointer
  changed, took the focus, resized the screen again... Now the recipe list
  and the detail column are **fixed boxes** (long names end in "...", details
  wrap and scroll if ever needed), the pop-up columns are fixed too, and
  **the mouse only takes the focus when it actually moves**
  (`CraftingPanel.hover_focus`, used by every screen), so a layout shift can
  never steal it.
- **The d-pad stopped at "Grind a Knife"** on the workbench: the list didn't
  scroll with the focus, and Godot's focus search won't move to a row that's
  scrolled out of sight, so the last visible row was a dead end. The lists
  now follow the focus (`follow_focus`), so the d-pad walks the whole list.
- **Slot tooltips fade** as soon as the pointer leaves a slot (they used to
  stay until something else took the focus); the d-pad still keeps them up.
- **Mycelium patches** (the pale mats on floors indoors and out) can now be
  scraped up (X) as **hyphal felt**; three press into a cloth by hand.
- **Settings have categories:** Controls, Display (field of view, plus new
  fullscreen and V-Sync) and Sound, switched with LB / RB, Q / E or a click.

`tests/ui_layout_test.gd` focuses every recipe at every station and every
pop-up choice and checks the screen never moves (it fails on the old code in
exactly the reported places), wheels the workbench list to its end, checks
the tooltip fades, and the felt. `ui_test` also switches settings category.

![Masonry bench: long names end in "..."](/images/encyclopedia/game/screenshots__2026-10-01__72_masonry_bench_fixed.jpg)

*Development gameplay capture*
![Writing desk](/images/encyclopedia/game/screenshots__2026-10-01__73_writing_desk_fixed.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-01/74_study_popup_fixed.jpg: Study pop-up, fixed columns)*
*(image not bundled: docs/screenshots/2026-10-01/75_settings_categories.jpg: Settings categories)*
