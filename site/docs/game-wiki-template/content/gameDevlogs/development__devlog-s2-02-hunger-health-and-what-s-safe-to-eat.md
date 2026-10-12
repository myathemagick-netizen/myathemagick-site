---
title: 2. Hunger, health, and what's safe to eat
description: Health and hunger bars sit beside the hotbar. Hunger drains over about forty minutes (faster when sprinting or sick), starving hurts, and health returns slowly when you're well fed. If health runs out you collapse and wake back at...
section: development
kind: devlog
entry: 2
devlog_id: s2:2
date: '2026-09-30'
session: Session 2 — Days, nights and an appetite
tags:
  - survival
  - creatures
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-01__07_sick_after_agaric.jpg
    alt: Sick
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-01__08_food_tooltip_hud.jpg
    alt: Food tooltip and HUD
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-s2-02-hunger-health-and-what-s-safe-to-eat
source: Claude handoff · development/devlog-s2-02-hunger-health-and-what-s-safe-to-eat.md
related: []
updated: '2026-10-11'
---

# Hunger, health, and what's safe to eat

Health and hunger bars sit beside the hotbar. Hunger drains over about forty
minutes (faster when sprinting or sick), starving hurts, and health returns
slowly when you're well fed. If health runs out you collapse and wake back at
the start with your things, a placeholder until death is designed properly.
Hold LT with food selected to eat.

This is where the GDD's tiers start to mean something. Food found in the
world now rolls its own quality, so one fridge gives *Rot Canned Food* and
the next *Sprout*. Rot restores a third as much and will probably make you
sick; Spent restores less and might be off; Sprout and above restore more.
Fridges, unpowered for years, lean towards rot. Different qualities stack
separately, and crafting will later be able to cook or preserve its way up.

Mushrooms follow the GDD's discovery-first rule: their edibility is never
shown up front. Tan buttons, inkcaps and puffballs are fine, teal buttons
even heal a little, rust buttons are bitter and sometimes disagree with you,
violet buttons and every agaric are poisonous, and spore blooms do something
strange. The tooltip says "You don't know if this is safe to eat" until you
try one, then remembers: "Edible · restores about 12" or "Made you sick last
time". Being sick drains health and tints the screen a queasy green. The
clock, hunger, health and everything you've learned are saved with the world.

![Sick](/images/encyclopedia/game/screenshots__2026-10-01__07_sick_after_agaric.jpg)

*Development gameplay capture*
![Food tooltip and HUD](/images/encyclopedia/game/screenshots__2026-10-01__08_food_tooltip_hud.jpg)

*Development gameplay capture*
