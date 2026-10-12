---
title: 124. Shard fields
description: 'One small step at a time (the author is rationing credits until Sunday): only the shard dunes, of the desert''s ground (the rest of step 2: blackglass flats, dry washes, fulgurites, are not started).'
section: development
kind: devlog
entry: 124
devlog_id: '124'
date: '2026-10-08'
session: Session 4 — The top rungs
tags:
  - desert
  - creatures
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-08__desert_shards_view.jpg
    alt: 'A shard dune: sand with glass in it, loose slivers in the foreground'
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-08__desert_shards_close.jpg
    alt: Closer
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-124-shard-fields
source: Claude handoff · development/devlog-124-shard-fields.md
related: []
updated: '2026-10-11'
---

# Shard fields

One small step at a time (the author is rationing credits until Sunday): only
the shard dunes, of the desert's ground (the rest of step 2: blackglass flats,
dry washes, fulgurites, are not started).

- **Two blocks, appended at the end** (255 in all): **shard sand** (sand with
  bright glints, dark chips) and **glass shards**, a flat plant like the
  pebbles (dark slivers with a bright edge, lying on the ground).
- **Where.** In the desert only, in **clusters**: the sand has glass in it where
  the peaks noise (a wavelength of about 110 m) is above 0.22, which is about
  **a quarter of the deep desert's surface** (25% of the sampled points) in patches
  tens of metres across; a third of those cells have loose shards lying on them.
  The glass is not on every dune: shard dunes are the places to find.
- **What it does to you.** Each step on shard sand or among loose shards costs
  **0.4 health unless your footwear has any `protection`**: rag boots and mountain
  boots have; sandals and bare feet don't. (A hundred metres is about 19
  health.) A message at most every 25 seconds; no grunt or flash (`hurt()` would
  make the sound on every step). So in the desert the sandals (cool 1, no
  protection) now trade against boots (protection 1, hot): the
  `protection` stat has its first job, and the Character screen's gear note and the
  stat's hint say so.
- **What you get.** Breaking shard sand gives sand; picking the loose shards gives a
  glass shard (nine times in ten): glass for the kiln, from the desert. The footsteps
  use the gravel crunch (a proper glass crunch is a sound for later).
- `desert_test` checks the share (a tenth to a third), that it comes in
  clusters (6 in 10 have another 4 m away) and only in the desert, the footwear
  rule for bare feet, sandals, rag boots and mountain boots, and that the plants
  table puts shards on shard sand; and photographs a shard dune.

- **Numbers to judge in the playtest** (not retuned: that would be another full suite).
  Shard sand is about **25% of the desert**, more than the plan's "glass at most a fifth",
  and blackglass flats are not even in yet. Crossing a 3 km desert is then about
  750 m of glass; at 0.4 health per 2.1 m step that is roughly **140 health for bare feet or
  sandals**. In the morning regeneration nearly pays for it; in the afternoon the Hot
  stage stops regeneration, so in the light kit (sandals) a crossing could kill. That
  may be the danger the design wants, but it is a number to see in play. The knobs:
  `SettlementLayout.SHARD_MASK` (0.22; about 0.3 for less coverage) and
  `CharacterBody3D.SHARD_CUT` (0.4; 0.2 for gentler cuts).
- **Known gaps:** dying of cuts has no last line (the generic "Everything goes dark", or the
  heat's if you are scorching too); and only the rule is tested (`shard_cut()` against each
  kind of footwear), not a walk across shard sand watching health fall.

![A shard dune: sand with glass in it, loose slivers in the foreground](/images/encyclopedia/game/screenshots__2026-10-08__desert_shards_view.jpg)

*Development gameplay capture*
![Closer](/images/encyclopedia/game/screenshots__2026-10-08__desert_shards_close.jpg)

*Development gameplay capture*
