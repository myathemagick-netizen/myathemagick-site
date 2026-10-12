---
title: 116. Furniture that never arrived
description: 'A bug from §113-§114 (building plans made on a worker thread): each plan in progress held one of two places until its furniture came in, so walking away first lost the place for good, and after two no building got its furniture ag...'
section: development
kind: devlog
entry: 116
devlog_id: '116'
date: '2026-10-07'
session: Session 4 — The top rungs
tags: []
images: []
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-116-furniture-that-never-arrived
source: Claude handoff · development/devlog-116-furniture-that-never-arrived.md
related: []
updated: '2026-10-11'
---

# Furniture that never arrived

A bug from §113-§114 (building plans made on a worker thread): each plan
in progress held one of two places until its furniture came in, so walking
away first lost the place for good, and after two no building got its
furniture again. And when the generator was busy, its cache could drop a
finished plan before the spawner looked. Now the place frees when the plan
is done, and the spawner keeps its own copy of the plan until it's used.
(`old_land_test` caught it, under load only.)
