---
title: '103. The Hollow Wood, step 4: crows and owls'
description: 'The Hollow Wood, step 4: crows and owls'
section: development
kind: devlog
entry: 103
devlog_id: '103'
date: '2026-10-06'
session: Session 4 — The top rungs
tags:
  - hollow wood
  - creatures
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-06__44_crow.jpg
    alt: A crow in the canopy
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-06__45_owl.jpg
    alt: An owl at night
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-103-the-hollow-wood-step-4-crows-and-owls
source: Claude handoff · development/devlog-103-the-hollow-wood-step-4-crows-and-owls.md
related: []
updated: '2026-10-11'
---

# The Hollow Wood, step 4: crows and owls

- **Perches**: one spot per 20 m cell all through the wood (`Critters.perch_spot`),
  on top of whatever stands there: a branch, a wall, a pier, the ground.
- **Crows** by day, on nearly half the perches. They look about and caw
  now and then. Come within 7.5 m and one takes off cawing, up and away
  over the trees; it's back on its perch when you've gone.
- **Owls** by night, on about a third of the perches that are at least 3
  blocks up. An owl turns to keep you in view (its yellow eyes glow), hoots
  now and then, and leaves without a sound if you come within 4 m.
- The day's birds go at dusk and the night's at dawn. Up to ten at once.
- Models `crow`, `owl` (Blender); sounds `crow_caw`, `owl_hoot`
  (ElevenLabs, two takes each).
- `birds_test`.
- Not yet: the fox, the hare, the lantern moth, the ironhart, the headless
  horseman. Flight is a straight climb with a rocking body, not wings.

![A crow in the canopy](/images/encyclopedia/game/screenshots__2026-10-06__44_crow.jpg)

*Development gameplay capture*
![An owl at night](/images/encyclopedia/game/screenshots__2026-10-06__45_owl.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-06/46_birds_models.png: Crow and owl models)*
