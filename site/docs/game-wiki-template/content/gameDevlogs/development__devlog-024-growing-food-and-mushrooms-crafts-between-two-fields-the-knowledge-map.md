---
title: 24. Growing food and mushrooms, crafts between two fields, the Knowledge map
description: tests/cultivationtest.gd grows potatoes (half grown at 20 of 40 hours, fed with compost, harvested sooner and with one more), greens (seeds back), a mushroom log (flushes again), checks a save keeps what's growing, Cultivation 3's...
section: development
kind: devlog
entry: 24
devlog_id: '24'
date: '2026-10-02'
session: Session 4 — The top rungs
tags:
  - research
  - crafting
  - cartography
  - creatures
  - tools and tests
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-02__14_garden.jpg
    alt: 'A small garden: potatoes, beans, greens, teal and inkcap logs'
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-02__15_knowledge_tab.jpg
    alt: The Knowledge tab
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-024-growing-food-and-mushrooms-crafts-between-two-fields-the-knowledge-map
source: Claude handoff · development/devlog-024-growing-food-and-mushrooms-crafts-between-two-fields-the-knowledge-map.md
related: []
updated: '2026-10-11'
---

# Growing food and mushrooms, crafts between two fields, the Knowledge map

**Cultivation** (a new field; `player/farming.gd`):
- **Planters** (by hand: planks and dirt) grow **potatoes, beans and greens**
  from a potato, beans or greens seeds (wild seeds in the grass; potatoes and
  beans in kitchens and shops). Hold it, X on the planter. Crops grow in game
  time through three stages you can see (seedlings, bushes, ripe with
  flowers), then X harvests. Greens give a seed back.
- **Compost** (Cultivation 1, by hand from fiber or felt and dirt) and
  **mycorrhizal compost** (Cultivation 2 + Mycology 2: compost woven with
  living mycelium) feed a crop: half as fast again / twice as fast, and more
  at harvest. Feeding mid-growth keeps how far it has grown.
- **Mushroom logs** (Cultivation 1 + Mycology 1): plant a tan or teal button,
  inkcap or puffball on an inoculated log; it flushes again and again.
- Levels: compost; everything grows a quarter faster; crops come up Sprout;
  one more at every harvest. New food: baked potato, bean stew.
- What's growing is saved with the world (`FurnitureProp.grow_state`).

**Crafts that need two fields** (`needs` with two topics):
vacuum tube (Glassworking 2 + Electronics 2), **crank radio** (Electronics 2
+ Communication 2: static, a scrap of a broadcast, and which way the
nearest other town lies), mycelium leather and leather boots / gloves
(Mycology 2 + Tailoring 2), healing salve (First Aid 2 + Alchemy 1), the
mushroom log and mycorrhizal compost.

**The Knowledge tab** (Character screen, 4th tab; `ui/knowledge_tree.gd`):
read-only. A column per field you've come across, a box per level: reached
levels say what they gave, the next is "???" with the pages still to go,
nothing beyond. Fields opened by others and two-field crafts hang below,
linked to both parents, gold and named once you know enough of both, "???"
before; fields you haven't met are "???" even in the links.

![A small garden: potatoes, beans, greens, teal and inkcap logs](/images/encyclopedia/game/screenshots__2026-10-02__14_garden.jpg)

*Development gameplay capture*
![The Knowledge tab](/images/encyclopedia/game/screenshots__2026-10-02__15_knowledge_tab.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-02/16_knowledge_links.jpg: Its links: known crafts named, the rest ???)*
*(image not bundled: docs/screenshots/2026-10-02/17_crop_stages.jpg: Every crop at each stage)*

`tests/cultivation_test.gd` grows potatoes (half grown at 20 of 40 hours,
fed with compost, harvested sooner and with one more), greens (seeds back),
a mushroom log (flushes again), checks a save keeps what's growing,
Cultivation 3's better crops, each two-field recipe, the radio, and the
Knowledge tab's reveal rules.
