---
title: 10. Foraging and scavenging
description: 'Should broken blocks fall into the world as items? It''s a real cost: every dropped item is a physics object to simulate and draw, and knocking down a wall would make hundreds. Going straight into the inventory avoids that. Drops m...'
section: development
kind: devlog
entry: 10
devlog_id: s1:10
date: '2026-09-30'
session: Session 1 — From one brown cube to a ruined town
tags: []
images:
  - src: /images/encyclopedia/game/screenshots__2026-09-30__57_item_icons.jpg
    alt: Item icons
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-09-30__58_forage_wild_mushroom.jpg
    alt: Foraging
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-s1-10-foraging-and-scavenging
source: Claude handoff · development/devlog-s1-10-foraging-and-scavenging.md
related: []
updated: '2026-10-11'
---

# Foraging and scavenging

Should broken blocks fall into the world as items? It's a real cost: every
dropped item is a physics object to simulate and draw, and knocking down a
wall would make hundreds. Going straight into the inventory avoids that.
Drops may come back later, but only when your pockets are full.

The interaction scheme:

| Input | What it does |
|---|---|
| **X** (tap) | The object's own action: search a fridge, bookshelf, dresser, shelf or crate; sit on a chair or sofa; sleep in a bed; pick a mushroom; open a door |
| **X** (hold) | Pick it up whole: chairs, tables, crates, TVs, armchairs, which LT places again |
| **RT** (hold) | Dismantle for parts: a chair gives planks, a TV a circuit board, wire and glass, a fridge scrap metal |

The prompt lists what's possible, for example "[X] Search  [hold RT]
Dismantle". There are 31 new items with pixel icons: food, books and a rare
**Weathered Journal** (the seed of research books), clothes and cloth, parts,
foraged mushrooms in each strain colour, and furniture. Names follow the
GDD's tier format ("Spent Rusted Pipe", "Spore Tan Button Mushroom"), and
every slot carries a small tier-coloured pip. Toasts show what you picked up.
Bedrooms gained a **dresser** (one drawer left ajar, clothes peeking out).
Loot is rolled once per piece, seeded by where it stands. Searched containers
stay empty, and picked, picked-up or dismantled things stay gone for the
session. Wild mushrooms are drawn in bulk without colliders, so aiming at one
is a quick ray-versus-sphere test against the nearby instances.

The test plays through it all with controller presses: pick a mushroom,
search a bookshelf, pick up a chair, place it, sit, stand, dismantle a TV,
sleep. Its first run failed on the chair: chairs in a table set face the
table, so the test had parked the player inside the table. The test now
tries each side of a prop until the crosshair is actually on it.

![Item icons](/images/encyclopedia/game/screenshots__2026-09-30__57_item_icons.jpg)

*Development gameplay capture*
![Foraging](/images/encyclopedia/game/screenshots__2026-09-30__58_forage_wild_mushroom.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-09-30/59_search_bookshelf.jpg: Searching a bookshelf)*
*(image not bundled: docs/screenshots/2026-09-30/60_sitting.jpg: Sitting)*
*(image not bundled: docs/screenshots/2026-09-30/61_inventory_after_scavenging.jpg: Inventory after scavenging)*

Playtest feedback: exploring and finding things is fun, but in the
inventory you can't tell what anything is. Slots now show a **tooltip** on
mouse-over or controller selection: the name in its tier colour, the tier,
and a one-line description. Every item got one ("Handwritten, dated entries
that end abruptly. The last pages are stuck together with spores."), with
room left for stats and uses later. Pickup toasts and the hotbar's name
label use tier colours too. The over-large interaction prompts went into a
new UI design notes (source document) file, which collects everything to
revisit in the proper UI pass.

*(image not bundled: docs/screenshots/2026-09-30/62_inventory_tooltip.jpg: Inventory tooltip)*
