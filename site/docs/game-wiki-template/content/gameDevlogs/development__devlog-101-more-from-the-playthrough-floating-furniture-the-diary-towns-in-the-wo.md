---
title: '101. More from the playthrough: floating furniture, the diary, towns in the wood'
description: 'More from the playthrough: floating furniture, the diary, towns in the wood'
section: development
kind: devlog
entry: 101
devlog_id: '101'
date: '2026-10-06'
session: Session 4 — The top rungs
tags: []
images: []
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-101-more-from-the-playthrough-floating-furniture-the-diary-towns-in-the-wo
source: Claude handoff · development/devlog-101-more-from-the-playthrough-floating-furniture-the-diary-towns-in-the-wo.md
related: []
updated: '2026-10-11'
---

# More from the playthrough: floating furniture, the diary, towns in the wood

- **Furniture hanging in the air** over ruined buildings: a world saved
  before a building's plan changed keeps the old walls and floors, while
  the furniture came from the new plan. `StructureProps` now checks each
  prop against the land as it is: floor things need a block under them,
  wall and hanging things a block beside or above. What has nothing to
  stand on is left out.
- **Transcribe a Diary** did add its 30 pages, but silently: the only
  number shown was the Communication gain (0.5, then 0.4). It now says
  "+30 pages: <book>", and the recipe text says what goes where.
- **The Hollow Wood has no towns**: a town whose ground (with 40 m round
  it) touches a wood isn't built. Only the estate stands there.
- **More woods get their estate**: the grounds no longer have to lie wholly
  inside the wood's own biome, and rougher or lower ground is levelled for
  them. On the test seed 21 of 54 wood cells now hold one (8 before);
  the rest are the same wood as a neighbour's estate, or cut by a road or
  a river.
- `music_night_2` (one held 156 Hz note for its first minute) dropped; a
  replacement is asked for in `docs/music_requests.md`.
- These change where towns and estates stand: in an existing save, land
  already visited keeps what it had.
