---
title: '22. Alpha-test round 2: the cutting table, sleep and hunger sounds'
description: 'tests/round2test.gd: the table needs Tailoring 2; a Fruiting jacket unpicks to 2 cloth, 2 fabric and a yarn; worn gear isn''t offered; the stomach growls and then waits.'
section: development
kind: devlog
entry: 22
devlog_id: '22'
date: '2026-10-02'
session: Session 4 — The top rungs
tags:
  - audio
  - survival
  - creatures
  - tools and tests
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-02__09_cutting_table.jpg
    alt: Cutting table
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-022-alpha-test-round-2-the-cutting-table-sleep-and-hunger-sounds
source: Claude handoff · development/devlog-022-alpha-test-round-2-the-cutting-table-sleep-and-hunger-sounds.md
related: []
updated: '2026-10-11'
---

# Alpha-test round 2: the cutting table, sleep and hunger sounds

- **Cutting table** (Tailoring 2, made at the workbench; a cutting mat,
  big shears, a dressmaker's dummy): an "Unpick" entry for each kind of gear
  you carry (not what you're wearing) gives back about half of the cloth,
  yarn and fabric it was made from (`Crafting.unpick_yield`; found clothes
  give the cloth tearing them would). It also cuts clothes into 4 cloth and
  carpet into 3, cleaner than by hand.
- **Sounds:** gentle breathing as you fall asleep, and a hungry stomach that
  growls every 25–50 seconds under 25 hunger (twice as often, and louder,
  when you're starving). Two more ElevenLabs sounds (a 30-second sleep take
  was left out: it would snore on long after you wake).

![Cutting table](/images/encyclopedia/game/screenshots__2026-10-02__09_cutting_table.jpg)

*Development gameplay capture*

`tests/round2_test.gd`: the table needs Tailoring 2; a Fruiting jacket
unpicks to 2 cloth, 2 fabric and a yarn; worn gear isn't offered; the
stomach growls and then waits.
