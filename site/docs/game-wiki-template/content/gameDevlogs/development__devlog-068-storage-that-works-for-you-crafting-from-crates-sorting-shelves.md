---
title: '68. Storage that works for you: crafting from crates, sorting, shelves'
description: 'Storage that works for you: crafting from crates, sorting, shelves'
section: development
kind: devlog
entry: 68
devlog_id: '68'
date: '2026-10-05'
session: Session 4 — The top rungs
tags:
  - crafting
  - creatures
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-04__61_station_uses_crates.jpg
    alt: A station using a crate
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-04__62_storage_shelf.jpg
    alt: A storage shelf
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-068-storage-that-works-for-you-crafting-from-crates-sorting-shelves
source: Claude handoff · development/devlog-068-storage-that-works-for-you-crafting-from-crates-sorting-shelves.md
related: []
updated: '2026-10-11'
---

# Storage that works for you: crafting from crates, sorting, shelves

- **Stations use the storage near them.** Crafting at a placed station
  counts what's in your crates (and strongboxes, wardrobes...) within 4.5 m,
  and in any storage within 1.6 m of storage that counts, so a wall of
  shelves of crates reaches on (up to 24 containers). Ingredients come out of
  your pack first, then the containers, nearest first; what you make goes to
  your pack. (`InventoryPool`: your pack and the containers seen as one; the
  crafting panel uses it at a placed station.)
- The station screen shows a chest symbol for each container in reach, top
  right; point at one for what it is and how full ("crafting here uses
  what's in it").
- **Sorting:** a Sort button on your pack and on an open container, and
  middle click / the right stick anywhere in a grid. Each press sorts the
  next way: by kind (gear, tools, food and brews, mushrooms, materials,
  things to set down, blocks), by name, best first. Stacks of the same thing
  join up. Your hotbar stays as you set it.
- **Crates stack**, square and centred, and go on a **storage shelf** (new,
  at the workbench: 6 planks and a scrap of metal): two blocks high, two
  bays the size of a crate; aim at the bay you want. Shelves only take
  crates.
- Inventory tabs: held off for now. Sorting by kind keeps like with like
  without splitting the pack into small pages; filters can come later.
- `storage_qol_test` covers all of it.

![A station using a crate](/images/encyclopedia/game/screenshots__2026-10-04__61_station_uses_crates.jpg)

*Development gameplay capture*
![A storage shelf](/images/encyclopedia/game/screenshots__2026-10-04__62_storage_shelf.jpg)

*Development gameplay capture*
