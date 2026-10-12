---
title: '3. Room to breathe: dropping, storage, stacks and gear'
description: 'The first real playtest of crafting stopped dead: a full pack, and no way to get rid of anything. So the inventory grew up.'
section: development
kind: devlog
entry: 3
devlog_id: '3'
date: '2026-10-01'
session: Session 3 — Crafting by hand
tags:
  - crafting
  - tools and tests
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-01__14_crate_and_pack.jpg
    alt: A crate open above the pack
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-01__15_dropped_stack.jpg
    alt: A dropped stack on the road
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-003-room-to-breathe-dropping-storage-stacks-and-gear
source: Claude handoff · development/devlog-003-room-to-breathe-dropping-storage-stacks-and-gear.md
related: []
updated: '2026-10-11'
---

# Room to breathe: dropping, storage, stacks and gear

The first real playtest of crafting stopped dead: a full pack, and no way
to get rid of anything. So the inventory grew up.

- **Dropping.** In the inventory, LB (or Q) drops the stack under the
  cursor. It doesn't vanish (the GDD's rule is that things never just
  disappear): it lies on the ground as its icon, bobbing gently, and X picks
  it up again. Q in the world drops one of what you're holding. Dropped
  stacks are saved with the world.
- **Nothing lost to a full pack.** Breaking blocks, foraging, searching and
  dismantling used to silently throw away whatever didn't fit. Now it spills
  onto the ground at your feet, with a "Your pack is full" note.
- **Storage.** A crate you set down yourself is storage: 18 slots. X opens it
  above your own pack on the same screen. Crates are now a hand recipe
  (6 planks), and you can only pick one up once it's empty; dismantling it
  spills what's inside. Contents are saved.
- **Stacks.** X (or right-click) splits a stack in half. Picking a stack and
  dropping it on the same item tops that stack up instead of swapping. RB
  (or shift-click) moves a whole stack across: crate to pack and back, or
  between hotbar and backpack when no crate is open.
- **Gear.** The Character screen has six gear slots: head, body, hands,
  legs, feet, back. A on a slot lists what you carry that goes there (items
  say which slot in their data); B backs out. Clothes are the first thing
  you can wear. Gear has no effect yet, but warmth, armour and a bigger
  pack now have somewhere to go. Worn gear is saved.

`tests/storage_test.gd` covers all of this with gamepad input, and the save
test now also checks crate contents, dropped stacks and worn gear.

![A crate open above the pack](/images/encyclopedia/game/screenshots__2026-10-01__14_crate_and_pack.jpg)

*Development gameplay capture*
![A dropped stack on the road](/images/encyclopedia/game/screenshots__2026-10-01__15_dropped_stack.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-01/17_gear_worn.jpg: Clothes worn)*
