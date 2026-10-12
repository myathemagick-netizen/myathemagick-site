---
title: 4. A gear pop-up, with stats
description: 'Playtest: picking clothes worked with the d-pad, but with the mouse you had to cross the recipe list to reach them, and each recipe you passed grabbed the focus and closed the list. Choosing gear is now a pop-up over the Character...'
section: development
kind: devlog
entry: 4
devlog_id: '4'
date: '2026-10-01'
session: Session 3 — Crafting by hand
tags:
  - crafting
  - tools and tests
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-01__16_gear_popup.jpg
    alt: The gear pop-up
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-01__18_gear_compare.jpg
    alt: Comparing a warmer set
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-004-a-gear-pop-up-with-stats
source: Claude handoff · development/devlog-004-a-gear-pop-up-with-stats.md
related: []
updated: '2026-10-11'
---

# A gear pop-up, with stats

Playtest: picking clothes worked with the d-pad, but with the mouse you had
to cross the recipe list to reach them, and each recipe you passed grabbed
the focus and closed the list. Choosing gear is now a **pop-up** over the
Character screen. The dim layer behind it swallows the mouse, and the d-pad
wraps inside it, so nothing below can steal the focus. It lists a "Wear"
row for each kind of item you carry that goes in the slot, then "Take off"
and "Cancel"; B backs out.

The pop-up's right side shows what you're **wearing now** and, for the
highlighted choice, its tier, description and **stats with the change from
what you have on**: "Warmth 3 (+1)" in green, or "(-3)" in red for taking
something off. Gear stats scale with tier the way food does, so Sprout
clothes are warmer than Spore ones. Highlighting a gear slot shows what's
worn there in the detail column. Warmth is the only stat so far, and
nothing uses it yet; the pop-up says so.

![The gear pop-up](/images/encyclopedia/game/screenshots__2026-10-01__16_gear_popup.jpg)

*Development gameplay capture*
![Comparing a warmer set](/images/encyclopedia/game/screenshots__2026-10-01__18_gear_compare.jpg)

*Development gameplay capture*
