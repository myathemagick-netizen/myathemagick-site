---
title: 71. Bags are containers you carry
description: Bags are containers you carry
section: development
kind: devlog
entry: 71
devlog_id: '71'
date: '2026-10-05'
session: Session 4 — The top rungs
tags: []
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-04__64_pack_with_bag.jpg
    alt: Pack with a bag open
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-04__65_bags.jpg
    alt: The bags
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-071-bags-are-containers-you-carry
source: Claude handoff · development/devlog-071-bags-are-containers-you-carry.md
related: []
updated: '2026-10-11'
---

# Bags are containers you carry

- **Satchel (9 slots), rucksack (18), frame pack (27, new: Tailoring 3,
  Carpentry 2).** A bag is a container with its own slots (`Bags`: each bag
  gets an id the first time it's used, "satchel#4"; its slots are saved with
  the world).
- **Open it with your pack:** hold the bag, or wear it, and opening your pack
  (Y / Tab / I, or **B**) shows the bag's slots above it ("Satchel (in your
  hand)" / "(on your back)"). On controller there's nothing new to learn:
  your pack button shows it.
- **Taking it off never spills anything**: what's in it stays in it. Bags
  don't go inside bags.
- **The bag on your back counts for crafting**, by hand and at stations.
- **Set down** (on the floor, or a storage shelf, which now takes bags too)
  it's storage like a crate, and stations near it can use it; pick it up,
  even full, and it's the same bag. Only bags open from your hands or your
  back: crates don't.
- Models for the three (Blender). The rucksack no longer uses up a satchel
  (it would have lost what was in it).
- build_test let go of the break button on a timer, and under load broke a
  second block; it lets go as soon as the block breaks now.

![Pack with a bag open](/images/encyclopedia/game/screenshots__2026-10-04__64_pack_with_bag.jpg)

*Development gameplay capture*
![The bags](/images/encyclopedia/game/screenshots__2026-10-04__65_bags.jpg)

*Development gameplay capture*
