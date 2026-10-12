---
title: '76. Fix: a full crate on a shelf can''t be taken off (nothing lost)'
description: 'Fix: a full crate on a shelf can''t be taken off (nothing lost)'
section: development
kind: devlog
entry: 76
devlog_id: '76'
date: '2026-10-05'
session: Session 4 — The top rungs
tags:
  - creatures
images: []
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-076-fix-a-full-crate-on-a-shelf-can-t-be-taken-off-nothing-lost
source: Claude handoff · development/devlog-076-fix-a-full-crate-on-a-shelf-can-t-be-taken-off-nothing-lost.md
related: []
updated: '2026-10-11'
---

# Fix: a full crate on a shelf can't be taken off (nothing lost)

- "Take off the shelf" came before the "empty it first" rule, so a crate with
  things in it could be picked up from a shelf and its contents were lost.
  Crates with anything in them can't be picked up anywhere now ("Empty it
  first."); bags still can (they keep what's in them). Tested.
