---
title: 85. Gear tooltips compare with what you wear; playtest fixes
description: Gear tooltips compare with what you wear; playtest fixes
section: development
kind: devlog
entry: 85
devlog_id: '85'
date: '2026-10-05'
session: Session 4 — The top rungs
tags:
  - interface
  - tools and tests
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-05__26_gear_compare_tip.jpg
    alt: Comparing gear in the pack
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-085-gear-tooltips-compare-with-what-you-wear-playtest-fixes
source: Claude handoff · development/devlog-085-gear-tooltips-compare-with-what-you-wear-playtest-fixes.md
related: []
updated: '2026-10-11'
---

# Gear tooltips compare with what you wear; playtest fixes

- **Hovering gear in the pack** (or moving onto it with the d-pad):
  - Its tooltip lists the gear's stats (warmth, protection, storage reach),
    each with the change against what you wear in that slot, green for
    better and red for worse.
  - Beside it, MMO style, a second tip: **Currently equipped**, with what
    you wear there and its stats.
  - Nothing worn: just the stats. Not gear: neither.
  - (The character screen's gear picker already compared stats.)
- From the AI playtests (`docs/ai_playtest_smoke_00*.md`):
  - PT-002: recipes you can't make yet stay readable, at full brightness
    when selected.
  - PT-004: placing a prop where it can't go says why ("step back to place
    it", "needs solid ground", "something's in the way") instead of doing
    nothing.
- `gear_tip_test`.

![Comparing gear in the pack](/images/encyclopedia/game/screenshots__2026-10-05__26_gear_compare_tip.jpg)

*Development gameplay capture*
