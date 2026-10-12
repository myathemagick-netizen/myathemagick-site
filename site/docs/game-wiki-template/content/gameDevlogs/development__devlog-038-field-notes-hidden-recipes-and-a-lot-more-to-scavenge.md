---
title: 38. Field notes, hidden recipes, and a lot more to scavenge
description: Notes turn up (seeded by where, so the same each time) in filing cabinets (15%), tractors (10%), computer desks, fireplaces, mine carts and medicine cabinets (8%), bookshelves and broken stations (6%), dumpsters and hospital beds ...
section: development
kind: devlog
entry: 38
devlog_id: '38'
date: '2026-10-03'
session: Session 4 — The top rungs
tags:
  - research
  - crafting
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-03__31_scavenge_a.jpg
    alt: Computer desk, filing cabinet, server rack, broken oven, broken workbench, broken sewing machine, bin
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-03__32_scavenge_b.jpg
    alt: Dumpster, medicine cabinet, vending machine, hospital bed, marker flag, spore lantern, rain barrel
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-038-field-notes-hidden-recipes-and-a-lot-more-to-scavenge
source: Claude handoff · development/devlog-038-field-notes-hidden-recipes-and-a-lot-more-to-scavenge.md
related: []
updated: '2026-10-11'
---

# Field notes, hidden recipes, and a lot more to scavenge

**Field notes** (`Crafting.FIELD_NOTES`): rare finds, each teaching one
**hidden recipe** that nothing else teaches (holding its ingredients doesn't,
and it isn't listed at any station until you've read it). Hold one and press
LT ("Read" in the corner hints): the recipe is yours for good, and its field
teaches you a little. A second copy of a note you've read is kept. The
Knowledge map counts how many you've read, and names what they taught.

| Note | Teaches | Where you make it |
|---|---|---|
| Surveyor's notes | **Marker flag**: plant it and it's on your compass with its distance (your waypoints) | by hand |
| Miner's notes | **Miner's headlamp**: worn on your head, a light with your hands free | electronics bench |
| Spore-lamp notes | **Spore lantern**: a jar of spore bloom that glows teal for ever, no fuel | by hand |
| Medic's notes | **Field dressing kit**: heals 80, clears poison and dizziness | by hand |
| Recipe card | **Pickled mushrooms**: filling, and Endurance for 15 minutes | hearth |
| Allotment notes | **Rain barrel**: fills itself slowly under open sky; pipes draw on it like a tank (10 buckets) | workbench |
| Hiker's notes | **Rucksack**: carries more than a satchel | sewing table |
| Apothecary's notes | **Night-eye drops**: night sight for 10 minutes | alembic |

Notes turn up (seeded by where, so the same each time) in filing cabinets
(15%), tractors (10%), computer desks, fireplaces, mine carts and medicine
cabinets (8%), bookshelves and broken stations (6%), dumpsters and hospital
beds (5%), dressers (4%) and bins (3%).

**New things to scavenge**, most with drawers, doors or lids that open when
searched, each teaching its field when taken apart:

- **Computer desk** (a beige monitor, a tower, a drawer of papers): circuit
  boards and parts. In houses.
- **Filing cabinet** (four drawers of folders): books, journals, field notes.
  In houses and shops.
- **Server rack**: circuit boards, parts, and a little **gold wire**. For the
  data centres and offices to come.
- **Broken oven** (its door hanging open): old food, a heating element. Now
  and then in place of a kitchen counter.
- **Broken workbench, broken sewing machine** (the player's own stations,
  rotted and rusted): parts, and Carpentry / Tailoring. In barns and
  farmhouses.
- **Trash can, dumpster** (lids that swing up): junk, the odd find. Bins in
  shops; a dumpster and a bin beside roadside shops.
- **Medicine cabinet** (a mirrored door, a red cross): bandages, poultices,
  the odd antidote. In bedrooms.
- **Vending machine**: canned and boxed food, a motor. In shops.
- **Hospital bed**: bandages and cloth. For the hospitals to come.

![Computer desk, filing cabinet, server rack, broken oven, broken workbench, broken sewing machine, bin](/images/encyclopedia/game/screenshots__2026-10-03__31_scavenge_a.jpg)

*Development gameplay capture*
![Dumpster, medicine cabinet, vending machine, hospital bed, marker flag, spore lantern, rain barrel](/images/encyclopedia/game/screenshots__2026-10-03__32_scavenge_b.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-03/33_new_furniture_in_town.jpg: Searched in town (the flag 40 m north on the compass))*
*(image not bundled: docs/screenshots/2026-10-03/34_field_notes_and_finds.jpg: The eight field notes, and what they teach)*

`tests/notes_test.gd`: hidden until read (holding ingredients doesn't teach
them), reading teaches and keeps the duplicate, notes from searched
cabinets, every hidden recipe makes, the flag on the compass, the
headlamp's light, night drops, a rain barrel filling and piped, the
Knowledge map's count, every new piece searches and opens, the server
rack's gold wire, and the town templates carrying them.
