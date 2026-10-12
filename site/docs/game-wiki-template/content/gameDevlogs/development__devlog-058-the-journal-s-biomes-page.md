---
title: 58. The Journal's Biomes page
description: The Journal's Biomes page
section: development
kind: devlog
entry: 58
devlog_id: '58'
date: '2026-10-04'
session: Session 4 — The top rungs
tags:
  - interface
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-04__42_journal_biomes.jpg
    alt: Biomes page
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-058-the-journal-s-biomes-page
source: Claude handoff · development/devlog-058-the-journal-s-biomes-page.md
related: []
updated: '2026-10-11'
---

# The Journal's Biomes page

- A **Biomes** page in the Journal (after Places): all five lands listed,
  "???" until you've been there (`WorldState.counters["biome_<id>"]`, set as
  you cross into one). Each shows its name, a picture (`assets/ui/biomes/`),
  what it's like and what you'll find there, including which shops its towns
  have more of (read from `SettlementLayout.SHOP_LEAN`). Hand-drawn symbols
  for the page and each biome.
- The right-hand side of every Journal list page now scrolls, and the right
  stick scrolls it.
- Display names come from `SettlementLayout.BIOME_NAMES`; the Bloom's display
  name is up for a rename (its id stays `bloom`).
- journal_test: the front-page check was flaky (which page you read is
  chance); it now checks the count matches the pages actually read.

![Biomes page](/images/encyclopedia/game/screenshots__2026-10-04__42_journal_biomes.jpg)

*Development gameplay capture*
