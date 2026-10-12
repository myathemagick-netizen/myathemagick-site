---
title: 75. Shelves done properly; the brewing pot uses storage
description: Shelves done properly; the brewing pot uses storage
section: development
kind: devlog
entry: 75
devlog_id: '75'
date: '2026-10-05'
session: Session 4 — The top rungs
tags: []
images: []
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-075-shelves-done-properly-the-brewing-pot-uses-storage
source: Claude handoff · development/devlog-075-shelves-done-properly-the-brewing-pot-uses-storage.md
related: []
updated: '2026-10-11'
---

# Shelves done properly; the brewing pot uses storage

- **What rests on what** is now exact: a thing rests on a shelf, crate or
  table only if it stands right on its top under it (`resting_on_me`,
  `resting_on`), not merely within its height. Taking the lower-bay crate no
  longer drops the upper one; a crate on a crate comes down onto the floor
  (with whatever's stacked on it).
- **A shelf with anything on it stays put**: no pick up, no taking apart
  ("Empty the shelf first.").
- **Prompts:** a crate (or bag) in hand, looking at a shelf: "[E] Shelve the
  crate" puts it in the bay you're looking at. A shelved crate: "[E] Open",
  "[hold E] Take off the shelf".
- **Shelved crates are drawn a little small** (86%) so they sit inside the
  shelf's posts: no flicker. Saved with the world.
- **The brewing pot uses what's near it** like the stations: your pack, the
  bag on your back, and storage in reach of the pot (its list of mushrooms
  includes what's in them).
- `storage_qol_test` runs the playtest's own steps (a crate in each bay,
  take the lower out; try to take an occupied shelf; stacks; the pot).
