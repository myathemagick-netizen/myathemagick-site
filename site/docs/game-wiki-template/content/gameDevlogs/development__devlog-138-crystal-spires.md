---
title: 138. Crystal spires
description: 'The author''s concept art had tall see-through crystals in the glass fields. Six blocks, appended: crystalclear and crystalblack (translucent, drawn like the glass block: a tinted body with long facet streaks, a hint of rainbow she...'
section: development
kind: devlog
entry: 138
devlog_id: '138'
date: '2026-10-11'
session: Session 4 — The top rungs
tags:
  - desert
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-11__spire2_clear_spire_a_15.jpg
    alt: A clear spire
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-11__spire2_black_spire_b_15.jpg
    alt: A black spire
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-138-crystal-spires
source: Claude handoff · development/devlog-138-crystal-spires.md
related: []
updated: '2026-10-11'
---

# Crystal spires

The author's concept art had tall see-through crystals in the glass fields. Six blocks, appended: `crystal_clear` and `crystal_black`
(translucent, drawn like the glass block: a tinted body with long facet streaks, a hint of rainbow sheen on the clear one and purple on
the black, bright glints), and `crystal_tip_clear` / `crystal_tip_black`, a **pointed tip** drawn on two crossed panes (the way plants
are: a block can't be pointy, so the last block of a spire is an upright spike). A `spire` is a feature like the fulgurite
(`SettlementLayout._spire`, a 29 m cell, 7% of cells, only on shard sand (clear) or blackglass (black), deep desert, not in a wash):
a plus-shaped foot, then a single column that **leans a block every three**, ending in the tip, with two to four smaller ones leaning round
it, and glass sand at its foot. About 6 a km² of the deep desert on the test map (20 clear, 5 black in 4 km²). They break into glass
shards (a use for clear and black ones is for later). The first try had a dark edge on every block that made a cage of cubes; the edge
is now a light seam. `tests/spire_test.gd`; `desert_shots.gd` takes `DESERT_SPIRE=clear|black`. Translucent and shiny: the block renderer
can do see-through (alpha) and bright glints in the texture, but not real reflection or refraction.

![A clear spire](/images/encyclopedia/game/screenshots__2026-10-11__spire2_clear_spire_a_15.jpg)

*Development gameplay capture*
![A black spire](/images/encyclopedia/game/screenshots__2026-10-11__spire2_black_spire_b_15.jpg)

*Development gameplay capture*
