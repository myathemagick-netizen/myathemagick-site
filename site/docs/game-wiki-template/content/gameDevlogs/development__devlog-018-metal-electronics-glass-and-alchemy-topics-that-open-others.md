---
title: 18. Metal, electronics, glass and alchemy; topics that open others
description: 'Phase two of the station ladders, plus the user''s notes: there was no electronics bench and few electronics items, glassworking and alchemy could sit behind higher Masonry, and later levels can open whole new topics.'
section: development
kind: devlog
entry: 18
devlog_id: '18'
date: '2026-10-02'
session: Session 4 — The top rungs
tags:
  - desert
  - crafting
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-02__01_phase2_stations.jpg
    alt: The eight new stations
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-02__02_phase2_models.jpg
    alt: The models
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-018-metal-electronics-glass-and-alchemy-topics-that-open-others
source: Claude handoff · development/devlog-018-metal-electronics-glass-and-alchemy-topics-that-open-others.md
related: []
updated: '2026-10-11'
---

# Metal, electronics, glass and alchemy; topics that open others

Phase two of the station ladders, plus the user's notes: there was no
electronics bench and few electronics items, glassworking and alchemy could
sit behind higher Masonry, and later levels can open whole new topics.

- **Masonry → metal:** **furnace** (Masonry 2): scrap or pipes into **iron
  ingots** (fuel). **Blast furnace** (Masonry 4, Fruiting): iron and
  charcoal into **steel**. **Steel tools** at the workbench: 1.6× faster
  than scrap and 300-400 uses (`speed` in a tool's data).
- **Electronics bench** (Electronics 1): salvage circuit boards into
  **electronic parts** (TVs and car dashboards drop a few too); battery lamp
  (moved here) and **heating element** (2); **electric motor** (3).
- **The top rungs:** **textile machine** (Tailoring 4 + a motor): fabric by
  the three and Fruiting gear. **Smokehouse** (Cooking 3): smoked mushrooms
  and preserves in glass jars. **Kitchen range** (Cooking 4: heating
  elements, iron, car batteries): no fuel; a **forager's feast** (Strength).
- **Topics that open from others** (`Research.TOPIC_NEEDS`, and `needs` on
  the desk's "Begin ... Notes"): **Glassworking** opens at Masonry 3;
  **Alchemy** at Glassworking 2 + Mycology 2. The Research tab lists these
  as unlocks of the level that opens them.
- **Glassblower's bench** (Glassworking 1): jars, bottles; flasks, a ground
  lens and a **magnifier** (2): carried, it makes everything teach 25% more.
- **Alembic** (Alchemy 1, made at the glassblower's bench): a "Distil" entry
  for each kind of brew you carry makes a **tincture** (`tincture#<mix>`):
  a tier higher, effects ×1.5 and lasting ×2.5. **Antidote** (Alchemy 2):
  cures poison, dizziness and sickness.

Eight new station models, 25 new items.

![The eight new stations](/images/encyclopedia/game/screenshots__2026-10-02__01_phase2_stations.jpg)

*Development gameplay capture*
![The models](/images/encyclopedia/game/screenshots__2026-10-02__02_phase2_models.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-02/03_electronics_bench.jpg: Electronics bench)*
*(image not bundled: docs/screenshots/2026-10-02/04_alembic.jpg: Alembic)*

`tests/phase2_test.gd` checks each topic opens only when the books allow,
climbs every new rung through the station screens, compares steel to scrap,
measures the magnifier, distils a brew and drinks the tincture (2.5× as
long), cures poison with an antidote, eats a feast for Strength, places a
glowing furnace, and photographs the eight stations.
