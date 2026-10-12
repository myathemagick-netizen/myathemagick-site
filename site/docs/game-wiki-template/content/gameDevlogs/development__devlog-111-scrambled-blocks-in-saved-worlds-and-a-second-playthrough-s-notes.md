---
title: 111. Scrambled blocks in saved worlds, and a second playthrough's notes
description: Scrambled blocks in saved worlds, and a second playthrough's notes
section: development
kind: devlog
entry: 111
devlog_id: '111'
date: '2026-10-07'
session: Session 4 — The top rungs
tags: []
images: []
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-111-scrambled-blocks-in-saved-worlds-and-a-second-playthrough-s-notes
source: Claude handoff · development/devlog-111-scrambled-blocks-in-saved-worlds-and-a-second-playthrough-s-notes.md
related: []
updated: '2026-10-11'
---

# Scrambled blocks in saved worlds, and a second playthrough's notes

- **The scramble** (sidewalks turned to shelf fungus, mushroom stems to roof
  stairs, columns and ore in the plains): the roof-stair blocks of §106
  were put in the middle of the block list, which renumbered every block
  after them, and saved land stores numbers. The list is back in its old
  order with everything new at the end, and `block_order.lock.json` now
  makes the texture generator refuse any order change. Land changed while
  playing the build of 7 Oct (§106-§109) was saved with the shifted numbers
  and will show wrong blocks in places.
- Crows and owls have wings that beat in flight.
- Music follows you between lands on both music settings: after about six
  seconds in a new land, another land's piece fades out and this land's
  comes in (also in and out of the manor). Day turning to night doesn't
  cut a piece short.
- The sarcophagus lid is shut until searched, then pushed askew.
- Manor: at most one organ room, one chapel, one music room, two
  nurseries; the organ stands against a wall with no door; hall furniture
  only against real walls with no door, and never in the spine hall (the
  stairs); chandeliers hang from the ceiling; the gate gargoyles sit on
  their posts.
- Rugs are named, and roll up into your pack when picked up; cobwebs,
  puddles and pumpkins have sensible names before you know them.
- The giant mushrooms scattered in the Sporelands can be cut down (3-5
  cap blocks).
