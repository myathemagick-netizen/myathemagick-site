---
title: 9. Brewing, and status icons
description: 'The first magick (GDD §4: "consumed, embodied, perceptual"). A Brewing Pot (made at the workbench: an iron pot on a tripod over coals, teal brew with glowing bubbles) takes a bucket of water and one to three mushrooms. After a sho...'
section: development
kind: devlog
entry: 9
devlog_id: '9'
date: '2026-10-01'
session: Session 3 — Crafting by hand
tags: []
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-01__36_brewing_pot.jpg
    alt: The brewing pot
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-01__37_pot_screen.jpg
    alt: The pot screen
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-009-brewing-and-status-icons
source: Claude handoff · development/devlog-009-brewing-and-status-icons.md
related: []
updated: '2026-10-11'
---

# Brewing, and status icons

The first magick (GDD §4: "consumed, embodied, perceptual"). A **Brewing
Pot** (made at the workbench: an iron pot on a tripod over coals, teal brew
with glowing bubbles) takes a **bucket of water** and one to three
mushrooms. After a short simmer you get **two brews** and the bucket back.
Buckets are riveted from scrap; hold LT at open water to fill one.

Nothing tells you what a new mix does. **You find out by drinking it**;
after that the brew carries a name ("Brew of Endurance & Night Sight") and
appears on the Research tab. Mycology notes help: at level 2 they say what
each mushroom leans toward, and at level 3 they warn you off a mix that will
go bad.

| Mushroom | In a brew |
|---|---|
| Tan button | Endurance: hunger drains slower |
| Teal button | Regeneration |
| Rust button | Strength: break and dismantle faster |
| Violet button | Luck: more from searching |
| Inkcap | Night Sight |
| Puffball | Deep Lungs: breath lasts longer |
| Spore Bloom | Seeing the Unseen (the effect exists; what it reveals comes later) |
| Shelf fungus | makes any brew last half as long again |
| Agarics (poison) | double the effect of the matching button mushroom |

More of the same mushroom makes an effect stronger. Settled with the
designer: **no addiction for now**, and **bad trips only come from poison
in a wrong mix**: an agaric with no matching button mushroom, or two
agarics. A bad brew makes you **poisoned** (losing health) and **dizzy**
(the view lurches and tints).

**Status icons** sit above the health bar: green-edged for buffs, red for
debuffs, with seconds left. Debuffs now have icons too: holding your
breath, drowning, hungry, starving, sick, poisoned, dizzy. The Character tab
lists what's affecting you.

![The brewing pot](/images/encyclopedia/game/screenshots__2026-10-01__36_brewing_pot.jpg)

*Development gameplay capture*
![The pot screen](/images/encyclopedia/game/screenshots__2026-10-01__37_pot_screen.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-01/38_brew_drunk_status_icons.jpg: After drinking: status icons)*
*(image not bundled: docs/screenshots/2026-10-01/39_bad_trip.jpg: A bad trip)*
*(image not bundled: docs/screenshots/2026-10-01/40_pot_mycology_notes.jpg: Mycology notes at the pot)*
*(image not bundled: docs/screenshots/2026-10-01/41_status_icons.jpg: Status icons)*

`tests/brew_test.gd` checks the rules, makes a bucket and pot, fills the
bucket at water, brews, drinks at night, brews and drinks a foul mix, and
reads the Mycology notes at the pot.
