---
title: '130. The Glass Desert, step 4: life'
description: 'Three new blocks (ids 258-260, appended) and one item. Desert scrub is a grey, thorny crossed-pane bush (like dead brush; 10% of plain sand, 7% of bleached sand), cut for plant fibre. Cacti are a feature: where the desert used to ...'
section: development
kind: devlog
entry: 130
devlog_id: '130'
date: '2026-10-11'
session: Session 4 — The top rungs
tags:
  - desert
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-11__cactus_cactus_low_15.jpg
    alt: A cactus in the scrub
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-11__truffle_thing_low_15.jpg
    alt: A truffle mound in a wash
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-130-the-glass-desert-step-4-life
source: Claude handoff · development/devlog-130-the-glass-desert-step-4-life.md
related: []
updated: '2026-10-11'
---

# The Glass Desert, step 4: life

Three new blocks (ids 258-260, appended) and one item. **Desert scrub** is a grey, thorny
crossed-pane bush (like dead brush; 10% of plain sand, 7% of bleached sand), cut for plant
fibre. **Cacti** are a feature: where the desert used to roll a tree it now rolls a cactus
(`SettlementLayout._cactus`, chance 0.8% per 7 m cell, about 80 a km² measured on a
240x240-cell grid), a ribbed column 3-6 tall with up to two arms, only on plain or bleached
sand, never in a wash or on a road. Breaking one gives plant fibre; there's no hazard and
no placeable cactus yet (options for later). The **Sand Truffle** is a flat "mound" block in
the gravel of the washes (about 1 gravel column in 50): dig it, get a truffle (sometimes
two). Food 14, a fungus (journal/mycology), and it brews `endurance`. The journal's desert
finds now mention scrub, cacti and truffles. `tools/desert_shots.gd` can now go to the
nearest cactus (`DESERT_CACTUS=1`) or truffle mound (`DESERT_TRUFFLE=1`); `tools/cactus_count.gd`
measures density. The sand puff (footsteps) is parked in `docs/ideas.md` until there's a
character model and a third-person view. `desert_test`, `plants_test`, `forage_test`,
`block_look_test`, `brew_test`, `craft_test`, `journal_test` pass; the full suite is run once at the end.

![A cactus in the scrub](/images/encyclopedia/game/screenshots__2026-10-11__cactus_cactus_low_15.jpg)

*Development gameplay capture*
![A truffle mound in a wash](/images/encyclopedia/game/screenshots__2026-10-11__truffle_thing_low_15.jpg)

*Development gameplay capture*
