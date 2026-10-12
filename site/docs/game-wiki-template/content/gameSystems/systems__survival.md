---
title: Survival
description: 'Game systems: survival.'
section: systems
kind: systems-group
slug: survival
updated: '2026-10-11'
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-08__cold_character.jpg
    alt: The Character screen on a peak
    kind: game_screenshot
sourceStatus: mixed
route: /game/systems/survival
source: Claude handoff · systems/survival.md
related: []
---

# Survival


## Hunger, health and food safety
<a id="hunger-health-and-food-safety"></a>

**Status:** Implemented

Hunger, health and sickness; food has quality tiers; which mushrooms are safe is learned by eating them.

**See also:** [Cooking](/game/systems/crafting#cooking)

**Development:** [s2:2](/game/development/devlog-s2-02-hunger-health-and-what-s-safe-to-eat), [22](/game/development/devlog-022-alpha-test-round-2-the-cutting-table-sleep-and-hunger-sounds)


## Cold and warmth
<a id="cold-and-warmth"></a>

**Status:** Implemented

The cold where you stand (height, night, roofs, fires) fills a slow chill meter (Chilly, Cold, Freezing); warm gear in five tiers reduces it; snow falls on the peaks.

**Limits:** Weather does not affect it yet.

**See also:** [Heat](/game/systems/survival#heat), [Tailoring and clothing](/game/systems/crafting#tailoring-and-clothing)

**Development:** [119](/game/development/devlog-119-snow-blowing-past-on-the-peaks), [120](/game/development/devlog-120-the-cold), [121](/game/development/devlog-121-the-warm-rung-gear-for-the-peaks)

![The Character screen on a peak](/images/encyclopedia/game/screenshots__2026-10-08__cold_character.jpg)

*Development gameplay capture*


## Heat
<a id="heat"></a>

**Status:** Implemented

The heat where you stand follows the sun in the desert; a heat meter (Warm, Hot, Scorching) is eased by cool gear, shade, water, a canteen or bottled water.

**Limits:** Numbers are untuned; no hot weather yet.

**See also:** [Cold and warmth](/game/systems/survival#cold-and-warmth), [Canteen and bottled water](/game/systems/survival#canteen-and-bottled-water)

**Development:** [122](/game/development/devlog-122-the-heat), [137](/game/development/devlog-137-the-canteen-bottled-water-and-three-sounds)


## Canteen and bottled water
<a id="canteen-and-bottled-water"></a>

**Status:** Experimental (new, untuned or partial)

A canteen is filled at open water and drunk by holding the use button; the blue bar shows what is left and each sip takes heat off. Bottled water is a single-use cool-down.

**Limits:** How much a sip cools and how fast it drains are guesses; there is no thirst meter.

**See also:** [Heat](/game/systems/survival#heat)

**Development:** [137](/game/development/devlog-137-the-canteen-bottled-water-and-three-sounds)


## Climate hazards of the lands
<a id="climate-hazards-of-the-lands"></a>

**Status:** Implemented

Rust cuts (tetanus), foul pools, shard dunes that cut unprotected feet, blackglass, deep cold on the peaks.

**See also:** [Cold and warmth](/game/systems/survival#cold-and-warmth), [Rustbelt and the works](/game/systems/world#rustbelt-and-the-works)

**Development:** [84](/game/development/devlog-084-the-rustbelt-step-3-of-3-hazards-life-and-a-way-to-heal-it), [124](/game/development/devlog-124-shard-fields)


## Swimming and breath
<a id="swimming-and-breath"></a>

**Status:** Implemented

Swimming with a breath meter; water in different looks by land.

**Development:** [s2:3](/game/development/devlog-s2-03-breath-and-a-reference-for-everything), [45](/game/development/devlog-045-more-variety-water-by-biome-and-columns)
