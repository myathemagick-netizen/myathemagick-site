---
title: '40. Landmarks: the museum and the library'
description: 'Every town now has a landmark, and a town of six city blocks or more has both: a museum and a library. Each takes a whole city block (31 x 31 m: both lots and the gap between), on a block no river runs through (SettlementLayout.la...'
section: development
kind: devlog
entry: 40
devlog_id: '40'
date: '2026-10-03'
session: Session 4 — The top rungs
tags: []
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-03__41_museum_front.jpg
    alt: 'The museum: portico, sign and doors'
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-03__42_museum_atrium.jpg
    alt: 'The atrium from the second floor: the tyrannosaur, roped off'
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-040-landmarks-the-museum-and-the-library
source: Claude handoff · development/devlog-040-landmarks-the-museum-and-the-library.md
related: []
updated: '2026-10-11'
---

# Landmarks: the museum and the library

Every town now has a **landmark**, and a town of six city blocks or more has
both: a **museum** and a **library**. Each takes a whole city block (31 x 31
m: both lots and the gap between), on a block no river runs through
(`SettlementLayout.landmark_blocks`). They're built of stone and stand up
well: never more than lightly ruined.

Both are the same big building (`landmark()` in gen_structures.py), made to
be explored from the front steps to the roof:

- **Three storeys round an atrium**, open from the ground floor to a glass
  **skylight**; galleries round it upstairs behind railings, stone columns at
  its corners and the middle of its sides.
- **Wide stairs** (three blocks wide) up the side walls: west to the first
  floor, east to the second, west again up onto the **roof**, which you can
  walk round behind its parapet and look down through the skylight.
- **Tall windows**, two blocks high, all the way round, on every floor.
- **A grand entrance**: three glass doors under a transom, wide steps with
  rails, a portico of two stone columns and a lintel, and a carved stone
  **sign** over the doors (a skull for the museum, an open book for the
  library). Signs are never lost to ruin now.

**The museum** (stone outside, plaster and tile inside):

- A **tyrannosaur skeleton** stands on a plinth under the skylight,
  roped off with brass posts and red rope, on iron rods. **Take it apart**
  (it takes a while, six seconds) for **14 old bones**, stone and iron.
  **Bones grind into bone meal** by hand (3 each), which feeds crops as well
  as mycorrhizal compost does.
- **Glass display cases** (their hoods lift when you search them) fill the
  galleries, two rows to a side, a floor to a theme: **minerals** on the
  ground floor (copper, iron, gold and rare-earth ore, coal; Mining),
  **history** on the first (journals, field notes, gold, bones, a rare
  book now and then; Communication), **technology** on the second (valves,
  motors, radios, boards; Electronics), with old computers, server racks
  and a vending machine up there too.
- **Stone busts** on plinths among the cases, pictures on every wall, a
  ticket desk by the doors.

**The library** (stone outside, panelled wood and carpet inside):

- **Stacks**: double-sided bookcases two blocks long, in rows with aisles
  between, across both wings and along the back of every floor (around 70 of
  them), with bookcases round the walls. Books, journals, field notes, and
  now and then a rare book.
- **Reading tables** with green-shaded lamps and chairs under the skylight;
  **card catalogues** by the doors (field notes are common in them); an
  issue desk.
- **Rare-book cases**: glass-fronted cabinets, two on the first floor and
  four in the special collections on the second. They nearly always hold a
  **rare book**.

**Rare books** (one for each of the fourteen fields: *A Natural History of
the Fungi*, *The Radio Amateur's Handbook*, *De Re Metallica*...): hold one
and press LT to read it cover to cover. It teaches a great deal of its
field (12 pages; 24 if you're studying that field), and then the old
binding gives out.

The compass finds both when you come within 60 m (a pediment and columns for
the museum, an open book for the library).

![The museum: portico, sign and doors](/images/encyclopedia/game/screenshots__2026-10-03__41_museum_front.jpg)

*Development gameplay capture*
![The atrium from the second floor: the tyrannosaur, roped off](/images/encyclopedia/game/screenshots__2026-10-03__42_museum_atrium.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-03/43_museum_gallery.jpg: A gallery of display cases)*
*(image not bundled: docs/screenshots/2026-10-03/44_library_front.jpg: The library)*
*(image not bundled: docs/screenshots/2026-10-03/45_library_reading_room.jpg: The reading room under the skylight, the galleries above)*
*(image not bundled: docs/screenshots/2026-10-03/46_library_stacks.jpg: An aisle in the stacks, second floor)*
*(image not bundled: docs/screenshots/2026-10-03/47_dinosaur.jpg: The tyrannosaur)*
*(image not bundled: docs/screenshots/2026-10-03/48_cases_opened.jpg: Display cases (minerals, history, technology), a rare-book case and a card catalogue, opened)*
*(image not bundled: docs/screenshots/2026-10-03/49_library_furniture.jpg: Card catalogue, stacks, rare-book case, reading table, the library's sign)*
*(image not bundled: docs/screenshots/2026-10-03/50_rare_books_and_bones.jpg: The fourteen rare books, a bone and bone meal)*

`tests/landmarks_test.gd`: every town has its landmarks (both from six
blocks, a city block each, lightly ruined at most); three furnished floors
in each template; visiting the nearest museum: stone walls three storeys
up, gallery floors, the open atrium, the sign, the compass, the dinosaur
(dismantled: 14 bones, and gone), cases on every floor, ores in the
mineral cases, bone meal; the library: its sign, the compass, six rare-book
cases with rare books in them, the stacks; reading a rare book.
