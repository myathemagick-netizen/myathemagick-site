---
title: 19. Furniture that opens, better furniture, and a better reference
description: 'tests/furnituretest.gd: every searchable kind has moving parts and opens when searched; drawers slide toward you; a searched fridge comes back open; a placed crate opens with its screen and shuts after; about 30% of sofas are patt...'
section: development
kind: devlog
entry: 19
devlog_id: '19'
date: '2026-10-02'
session: Session 4 — The top rungs
tags:
  - interface
  - creatures
  - tools and tests
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-02__05_furniture_opened.jpg
    alt: 'Opened: fridges, cupboard, drawers, wardrobe, crates, strongbox'
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-02__06_furniture_tiers.jpg
    alt: Ordinary and better furniture side by side
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-019-furniture-that-opens-better-furniture-and-a-better-reference
source: Claude handoff · development/devlog-019-furniture-that-opens-better-furniture-and-a-better-reference.md
related: []
updated: '2026-10-11'
---

# Furniture that opens, better furniture, and a better reference

- **Searching opens things.** Doors, lids and drawers are now separate parts
  of the models (`split()` in `gen_furniture_props.py` makes a child mesh
  named `<prop>__hinge0_-100`, `__lid1_-105` or `__slide2_7`, its origin on
  the hinge). `FurnitureProp` finds them and swings or slides them open when
  you search: fridges (shelves of cans and jars inside, frost in the
  freezer), kitchen cupboards (pans, or the pipes under a sink), the dresser
  (two drawers slide out, folded clothes in them), crates and car boots (a
  spare wheel and junk). Searched things **stay open**, also after they're
  respawned, so you can see at a glance what you've been through. Your own
  crates and chests lift their lids while their screen is up.
- **Better furniture, found now and then** in place of the ordinary kind
  (`StructureStamper.VARIANTS`, hashed per spot so it's stable): a
  **flatscreen TV** (better parts, more Electronics), a **side-by-side
  fridge** (more and better food: `tier_bias`), a **wardrobe** (Sprout
  clothes, now and then a padded jacket), a **patterned sofa** (woven fabric
  when taken apart) and an **upholstered armchair**.
- **Carpentry 2** makes a wardrobe (27 stacks of storage once set down) and an
  upholstered armchair at the workbench.
- **Item reference:** names carry their tier's colour and a little square;
  mushrooms show their model beside the description (the fungi generator now
  renders thumbnails too).
- **Sounds:** sound_wishlist.md (source document) lists what the new
  features still borrow `rummage` / `pickup` / `ui_click` for, with
  ElevenLabs prompts in the style of the originals.

![Opened: fridges, cupboard, drawers, wardrobe, crates, strongbox](/images/encyclopedia/game/screenshots__2026-10-02__05_furniture_opened.jpg)

*Development gameplay capture*
![Ordinary and better furniture side by side](/images/encyclopedia/game/screenshots__2026-10-02__06_furniture_tiers.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-02/07_searched_in_town.jpg: Searched things left open in town)*

`tests/furniture_test.gd`: every searchable kind has moving parts and opens
when searched; drawers slide toward you; a searched fridge comes back open;
a placed crate opens with its screen and shuts after; about 30% of sofas are
patterned; the side-by-side fridge keeps better food; Carpentry 2 recipes.
