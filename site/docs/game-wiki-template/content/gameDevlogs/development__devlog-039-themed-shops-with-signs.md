---
title: 39. Themed shops, with signs
description: 'Every shop used to be the same corner shop. Now a shop lot (in town or by the road) is one of seven, picked by where it stands, leaning toward what the land around it needed (SettlementLayout.shopat, SHOPLEAN):'
section: development
kind: devlog
entry: 39
devlog_id: '39'
date: '2026-10-03'
session: Session 4 — The top rungs
tags: []
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-03__35_shop_pharmacy.jpg
    alt: A pharmacy
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-03__36_shop_furniture.jpg
    alt: A furniture shop
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-039-themed-shops-with-signs
source: Claude handoff · development/devlog-039-themed-shops-with-signs.md
related: []
updated: '2026-10-11'
---

# Themed shops, with signs

Every shop used to be the same corner shop. Now a shop lot (in town or
by the road) is one of seven, picked by where it stands, leaning toward
what the land around it needed (`SettlementLayout.shop_at`, `SHOP_LEAN`):

| Shop | What's in it | Sign |
|---|---|---|
| General store | food shelves, crates, a vending machine, a bin, a filing cabinet | a basket |
| Furniture | sofas, armchairs, a wardrobe, a bed, a table and chairs, a dresser, a bookshelf (the fancier versions turn up here as anywhere) | an armchair |
| Electronics | shelves of parts, batteries, wire and boards; TVs; computer desks | a television |
| Grocery | food shelves, fridges, a vending machine | an apple |
| Hardware | shelves of tools (hatchets, pry bars, spades, picks, the odd wrench), pipes, wire, parts; a broken workbench | a hammer |
| Clothing | racks of clothes, trousers, hoods, boots and wraps; a wardrobe; a broken sewing machine | a shirt |
| Pharmacy | shelves of bandages, poultices, antidotes (and now and then a salve, or a medic's field note); medicine cabinets | a green cross |

Plains lean to groceries and hardware, woodland to furniture and
hardware, wetland to pharmacies and groceries, the highlands to hardware
and clothing, the bloom to pharmacies and electronics. Only shops changed:
every other building in a town stays where it was, but untouched shops in
an existing world refit as their new kind.

Each has a **sign over its door**, a weathered board with a picture of what
it sold, hung on the outside of the front wall. Wall props in a building
template now hang rather than needing floor under them (the stamper reads
`"wall"` from `FurnitureProp.ACTIONS`). All shops have the old rooftop solar
panels now, not just the general store.

![A pharmacy](/images/encyclopedia/game/screenshots__2026-10-03__35_shop_pharmacy.jpg)

*Development gameplay capture*
![A furniture shop](/images/encyclopedia/game/screenshots__2026-10-03__36_shop_furniture.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-03/37_shop_hardware.jpg: A hardware shop)*
*(image not bundled: docs/screenshots/2026-10-03/38_inside_pharmacy.jpg: Inside the pharmacy)*
*(image not bundled: docs/screenshots/2026-10-03/39_shop_signs.jpg: The seven signs)*
*(image not bundled: docs/screenshots/2026-10-03/40_shop_shelves.jpg: Parts, tools and medicine shelves; a clothes rack)*

`tests/shops_test.gd`: every kind turns up across the towns; each template
has its sign and its stock; visiting four, the right sign hangs over each
door; a pharmacy's shelves give medicine.
