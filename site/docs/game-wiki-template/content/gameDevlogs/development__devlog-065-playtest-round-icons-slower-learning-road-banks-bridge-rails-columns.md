---
title: '65. Playtest round: icons, slower learning, road banks, bridge rails, columns'
description: 'From a fresh save: - Things you pick up all have items and flat icons now. Wheelchair, X-ray light box, drip stand, stanchion and water cooler were missing (they showed as "Block" with no icon). furnituretest now checks that every...'
section: development
kind: devlog
entry: 65
devlog_id: '65'
date: '2026-10-04'
session: Session 4 — The top rungs
tags:
  - tools and tests
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-04__57_curved_bridge_rails.jpg
    alt: Curved bridge
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-04__58_road_cutting_banks.jpg
    alt: Road cutting
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-065-playtest-round-icons-slower-learning-road-banks-bridge-rails-columns
source: Claude handoff · development/devlog-065-playtest-round-icons-slower-learning-road-banks-bridge-rails-columns.md
related: []
updated: '2026-10-11'
---

# Playtest round: icons, slower learning, road banks, bridge rails, columns

From a fresh save:
- **Things you pick up all have items and flat icons now.** Wheelchair,
  X-ray light box, drip stand, stanchion and water cooler were missing (they
  showed as "Block" with no icon). `furniture_test` now checks that every
  prop you can pick up has an item and an icon.
- **Learning is slower** (Mycology 3 inside ten minutes was far too quick):
  75 pages more for each level (75 / 150 / 225 / 300, was 8 / 20 / 40 / 70);
  everything you notice teaches 45% of what it did (`Research.GAIN`);
  studying the topic adds a quarter, not double (`STUDY_BONUS` 1.25). Rare
  books (60 x the gain, a third of a level) and diaries (30 pages) give more,
  to stay worth finding. Tests use the constants.
- **Running makes you hungry twice as fast** (was 1.5x).
- **Beds say they're beds**, and using any furniture teaches you its name.
- **Glass** takes 0.45 s to break by hand (was 0.15).
- **Road cuttings and embankments slope back** (about 40 degrees, out to 14 m)
  instead of standing as sheer walls where a road leaves a town on high
  ground.
- **Bridge railings follow the deck's edge:** a rail on every side of a deck
  cell that faces open air, a corner piece where two meet, so curved bridges
  have no gaps or jogs. (`tests/bridge_shots.gd`)
- **The hospital's atrium columns** (and its portico) are stone columns now.

![Curved bridge](/images/encyclopedia/game/screenshots__2026-10-04__57_curved_bridge_rails.jpg)

*Development gameplay capture*
![Road cutting](/images/encyclopedia/game/screenshots__2026-10-04__58_road_cutting_banks.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-04/59_hospital_columns.png: Hospital columns)*
