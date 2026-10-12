---
title: 17. Tailoring, Cooking and five-level books
description: 'Writing the beginner''s guide showed there was no cooking or sewing knowledge, and that better gear just came from more cloth. Now:'
section: development
kind: devlog
entry: 17
devlog_id: '17'
date: '2026-10-01'
session: Session 3 — Crafting by hand
tags:
  - research
  - creatures
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-01__76_tailoring_cooking_stations.jpg
    alt: The Tailoring and Cooking stations at dusk
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-01__77_tailoring_cooking_models.jpg
    alt: The models
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-017-tailoring-cooking-and-five-level-books
source: Claude handoff · development/devlog-017-tailoring-cooking-and-five-level-books.md
related: []
updated: '2026-10-11'
---

# Tailoring, Cooking and five-level books

Writing the beginner's guide showed there was no cooking or sewing
knowledge, and that better gear just came from more cloth. Now:

- **Books have five levels**, and each is a tier: a new book is **Spent**,
  then Spore (8 pages), Sprout (20), Mycelial (40), Fruiting (70). Pages are
  kept in the book, so older books simply re-tier.
- **Two new topics, Cooking and Tailoring**, begun at the writing desk.
  Cooking anything teaches Cooking (the campfire used to teach Mycology);
  sewing, tearing clothes and taking apart sofas, beds and armchairs teach
  Tailoring; taking apart a kitchen counter teaches a little Cooking.
- **Station ladders.** Higher tiers come from better equipment, and each rung
  needs a better book:
  - Tailoring: **sewing table** (now a cutting table with shears and pins:
    sewing by hand) → **sewing machine** (Spore notes; the old treadle
    model) → **spinning wheel** (Sprout) → **loom** (Mycelial). Yarn is spun
    from plant fiber, hyphal felt or rags (or twisted slowly by hand); the
    loom weaves it into fabric; the machine sews Sprout gear with yarn and
    Mycelial clothes and a Fruiting padded jacket from fabric.
  - Cooking: **campfire** → **hearth** (Spore; brick, built at the masonry
    bench, lights a room) → **iron stove** (Sprout; burns fuel). Mushroom
    soup, forager's stew, a slow-cooked Mycelial stew, puffball bread, dried
    mushrooms, mushroom pie (Cooking 3).
- **Hearty meals** leave a lasting effect, like a brew: forager's stew gives
  Endurance for 5 minutes, mushroom pie Regeneration for 2 (`buff` in
  items.json).

New models: sewing table (redone), sewing machine, spinning wheel, loom,
hearth, iron stove; new items: yarn, woven fabric and five foods.

![The Tailoring and Cooking stations at dusk](/images/encyclopedia/game/screenshots__2026-10-01__76_tailoring_cooking_stations.jpg)

*Development gameplay capture*
![The models](/images/encyclopedia/game/screenshots__2026-10-01__77_tailoring_cooking_models.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-01/78_sewing_machine.jpg: Sewing machine: Sprout gear with yarn)*
*(image not bundled: docs/screenshots/2026-10-01/79_hearth.jpg: Hearth)*

`tests/tailoring_cooking_test.gd` climbs both ladders from a Spent book:
each station is hidden until the notes reach its level, then made, placed
and used; it eats a forager's stew for Endurance and photographs the lot.

Next (phase 2): the top rungs (textile machine, range, smokehouse), and
ladders for Masonry (furnace, blast furnace: metal), Carpentry, Electronics
and Mycology.
