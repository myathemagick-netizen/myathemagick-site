---
title: 99. The building editor
description: 'A dev tool for building pieces by hand (tools/buildingeditor.tscn, run with tools/buildingeditor.bat; how-to in docs/buildingeditor.md): an empty box of a chosen size, every block and every prop in lists with a search, place / rem...'
section: development
kind: devlog
entry: 99
devlog_id: '99'
date: '2026-10-06'
session: Session 4 — The top rungs
tags: []
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-06__40_editor_shop_cut.jpg
    alt: A shop brought in, cut at the fourth layer
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-06__41_editor_house_cut.jpg
    alt: A house, cut
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-099-the-building-editor
source: Claude handoff · development/devlog-099-the-building-editor.md
related: []
updated: '2026-10-11'
---

# The building editor

A dev tool for building pieces by hand (`tools/building_editor.tscn`, run
with `tools/building_editor.bat`; how-to in `docs/building_editor.md`): an
empty box of a chosen size, every block and every prop in lists with a
search, place / remove / pick / box-fill / undo, a layer cut to work
inside, Save and Open. It draws with the game's own block library and prop
models, so a piece looks as it will in the world.

- Pieces save to `assets/structures/pieces/<name>.json` as exact blocks and
  props (`world/pieces.gd`, `Pieces`).
- **Bring in building** loads any existing building through a theme as a
  starting point.
- **Hollow Manor uses them already**: a one-bay room of kind K is built from
  a piece named `manor_K_1x1_...` if there is one (picked among several by
  the room's seed), otherwise from the old furniture list.
- `editor_test`.

![A shop brought in, cut at the fourth layer](/images/encyclopedia/game/screenshots__2026-10-06__40_editor_shop_cut.jpg)

*Development gameplay capture*
![A house, cut](/images/encyclopedia/game/screenshots__2026-10-06__41_editor_house_cut.jpg)

*Development gameplay capture*
