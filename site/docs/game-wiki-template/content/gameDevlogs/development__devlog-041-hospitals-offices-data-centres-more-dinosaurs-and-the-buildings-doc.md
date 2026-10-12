---
title: 41. Hospitals, offices, data centres, more dinosaurs, and the buildings doc
description: 'tests/civictest.gd: towns have all three new kinds; museums have different dinosaurs; the hospital''s sign, compass mark, beds, two MRI scanners (magnets), operating tables; an office''s sign, desks, servers on the top floor, photoc...'
section: development
kind: devlog
entry: 41
devlog_id: '41'
date: '2026-10-03'
session: Session 4 — The top rungs
tags:
  - interface
  - creatures
  - tools and tests
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-03__51_triceratops.jpg
    alt: The triceratops
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-03__52_stegosaurus.jpg
    alt: The stegosaurus
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-041-hospitals-offices-data-centres-more-dinosaurs-and-the-buildings-doc
source: Claude handoff · development/devlog-041-hospitals-offices-data-centres-more-dinosaurs-and-the-buildings-doc.md
related: []
updated: '2026-10-11'
---

# Hospitals, offices, data centres, more dinosaurs, and the buildings doc

**Hospitals** are the third landmark (a whole city block, the same
three-storey building round a skylit atrium, in pale concrete with a red
cross over the doors). A town has one landmark, two from six blocks, all
three (museum, library, hospital) from nine.

- Ground floor: the reception desk, rows of waiting-room chairs under the
  skylight, a vending machine, the **pharmacy** (medicine shelves down the
  east wing, cabinets on the wall), wheelchairs left about.
- First floor: the **wards**, beds all round the walls with drip stands
  beside them, medicine cabinets.
- Second floor: **imaging and surgery**: two **MRI scanners** (rusted;
  strip one, five seconds, for **2 rare-earth magnets**, wire, copper and
  parts) and three **operating tables** (search the instrument trays:
  dressings, a scalpel, antidotes, now and then a salve).
- **X-rays** on lightboxes on the walls everywhere (take them down: glass,
  wire, parts).

**Office blocks** (a town lot; 30% of apartment lots become one): four
storeys of concrete and glass. A reception with armchairs, a water cooler
and a vending machine; two floors of desks, filing cabinets, photocopiers
(ink, parts, a lens); the **server room** at the top, racks and cooling
units. A briefcase sign over the door.

**Data centres** (15% of apartment lots): one windowless hall of **server
racks** in two rows (gold wire when you take them apart), cooling units
along the back, the dead **backup generator** (old biodiesel, parts, a
motor), a desk. Green-on-black sign.

**More dinosaurs.** A museum's skeleton is one of four, by its seed:
the tyrannosaur, a **triceratops** (frill and three horns, 16 bones), a
**stegosaurus** (plates and tail spikes, 14), or a **brachiosaurus**, the
long-neck, whose head reaches the second-floor galleries (24 bones, eight
seconds to take down).

**The buildings doc** (`docs/buildings.md`, made by
`tools/gen_buildings_doc.gd`): every building stamped clean on a flat world
and photographed outside and floor by floor with everything above cut
away; its sign, where it turns up, what it's built of, and a table of its
furniture with how many, what each does, what you can find in it (with
chances) and what it comes apart into, all read from the game's own data.

![The triceratops](/images/encyclopedia/game/screenshots__2026-10-03__51_triceratops.jpg)

*Development gameplay capture*
![The stegosaurus](/images/encyclopedia/game/screenshots__2026-10-03__52_stegosaurus.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-03/53_brachiosaurus.jpg: The brachiosaurus)*
*(image not bundled: docs/screenshots/2026-10-03/54_hospital.jpg: The hospital)*
*(image not bundled: docs/screenshots/2026-10-03/55_hospital_wards.jpg: The wards, from the buildings doc)*
*(image not bundled: docs/screenshots/2026-10-03/56_hospital_ward_inside.jpg: A ward)*
*(image not bundled: docs/screenshots/2026-10-03/57_hospital_props.jpg: MRI scanner, operating table, X-ray, wheelchair, drip stand, the hospital's sign)*
*(image not bundled: docs/screenshots/2026-10-03/58_office.jpg: An office block)*
*(image not bundled: docs/screenshots/2026-10-03/59_datacentre.jpg: A data centre, roof off)*
*(image not bundled: docs/screenshots/2026-10-03/60_office_props.jpg: Photocopier, water cooler, cooling unit, backup generator, office and data-centre signs)*

`tests/civic_test.gd`: towns have all three new kinds; museums have
different dinosaurs; the hospital's sign, compass mark, beds, two MRI
scanners (magnets), operating tables; an office's sign, desks, servers on
the top floor, photocopier; a data centre's racks (gold wire), cooling and
generator.
