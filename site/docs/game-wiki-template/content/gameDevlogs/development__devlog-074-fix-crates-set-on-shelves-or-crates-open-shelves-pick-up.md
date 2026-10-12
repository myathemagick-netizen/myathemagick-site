---
title: '74. Fix: crates set on shelves (or crates) open; shelves pick up'
description: 'Fix: crates set on shelves (or crates) open; shelves pick up'
section: development
kind: devlog
entry: 74
devlog_id: '74'
date: '2026-10-05'
session: Session 4 — The top rungs
tags:
  - creatures
images: []
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-074-fix-crates-set-on-shelves-or-crates-open-shelves-pick-up
source: Claude handoff · development/devlog-074-fix-crates-set-on-shelves-or-crates-open-shelves-pick-up.md
related: []
updated: '2026-10-11'
---

# Fix: crates set on shelves (or crates) open; shelves pick up

- A crate set on a shelf or on another crate could only be picked up, not
  opened: it joined the "placed" group after going into the world, and a
  container only makes its storage as it goes in (if it's placed). Ones from
  a save were fine. It joins the group first now.
- The storage shelf had no entry for what it does, so it couldn't be picked
  up or taken apart (4 planks, a scrap of metal).
- `storage_qol_test` checks both.
