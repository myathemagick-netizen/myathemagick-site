---
title: 1. A Character screen, and the first recipes
description: 'The View button (the two overlapping squares; C on the keyboard) now opens a Character screen. On the left is how you''re doing: the day and time, health, hunger, and every mushroom you''ve learned about by eating it, marked safe or...'
section: development
kind: devlog
entry: 1
devlog_id: '1'
date: '2026-10-01'
session: Session 3 — Crafting by hand
tags:
  - crafting
  - interface
  - survival
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-01__10_character_screen.jpg
    alt: Character screen
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-01__11_crafting_detail.jpg
    alt: A recipe you can't make yet
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-001-a-character-screen-and-the-first-recipes
source: Claude handoff · development/devlog-001-a-character-screen-and-the-first-recipes.md
related: []
updated: '2026-10-11'
---

# A Character screen, and the first recipes

The **View** button (the two overlapping squares; **C** on the keyboard) now
opens a Character screen. On the left is how you're doing: the day and time,
health, hunger, and every mushroom you've learned about by eating it, marked
safe or "made you sick". Beside that is **Crafting by hand**: simple things
you can make anywhere, without a workbench. Pick a recipe with the d-pad or
the mouse, see what it needs as "have / need" (missing ingredients turn
red), and press A to make one. It refuses rather than wasting anything if
you're short of something or your pack has no room for the result.

The GDD says the game never hands you a recipe book, so recipes start
hidden. One comes to mind the first time you hold any of its ingredients,
with a toast ("An idea: Spore Torch  [View] Craft"), and is remembered in
your save. Ingredients are matched whatever their tier, and the worst
quality is used up first.

The first four recipes are deliberately humble:

| Recipe | Needs | Makes |
|---|---|---|
| Tear up clothes | 1 Clothes | 3 Cloth Scrap |
| Split a log | 1 Log | 4 Planks |
| Torch | 1 Planks + 1 Cloth Scrap | 2 Torches |
| Bandage | 2 Cloth Scrap | 1 Bandage |

![Character screen](/images/encyclopedia/game/screenshots__2026-10-01__10_character_screen.jpg)

*Development gameplay capture*
![A recipe you can't make yet](/images/encyclopedia/game/screenshots__2026-10-01__11_crafting_detail.jpg)

*Development gameplay capture*
