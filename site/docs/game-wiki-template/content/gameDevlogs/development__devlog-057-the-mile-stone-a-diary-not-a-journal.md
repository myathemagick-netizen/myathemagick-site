---
title: 57. The Mile Stone; a diary, not a journal
description: The Mile Stone; a diary, not a journal
section: development
kind: devlog
entry: 57
devlog_id: '57'
date: '2026-10-04'
session: Session 4 — The top rungs
tags:
  - interface
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-04__41_mile_stone_icons.png
    alt: Milestone symbol and the Mile Stone
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-057-the-mile-stone-a-diary-not-a-journal
source: Claude handoff · development/devlog-057-the-mile-stone-a-diary-not-a-journal.md
related: []
updated: '2026-10-11'
---

# The Mile Stone; a diary, not a journal

- **Mile Stone** (a milestone, first on the list): walk a kilometre (on the
  ground, not swimming; counted in `WorldState.counters.walked`, shown on the
  Journal's Found out page). The reward is a Mile Stone, a grey pebble with
  teal light in its cracks. "Use: unknown."
- The found item **Weathered Journal** is now a **Weathered Diary**
  ("Transcribe a Diary" at the writing desk), so it doesn't share a name
  with the Journal tab. Its id is still `journal` (saves keep working).
- Fixed: the Lore page tried to load a picture file for blocks it had no
  picture for (an error in the log each time).

![Milestone symbol and the Mile Stone](/images/encyclopedia/game/screenshots__2026-10-04__41_mile_stone_icons.png)

*Development gameplay capture*
