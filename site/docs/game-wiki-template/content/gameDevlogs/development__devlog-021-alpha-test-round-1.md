---
title: 21. Alpha-test round 1
description: 'From playing it:'
section: development
kind: devlog
entry: 21
devlog_id: '21'
date: '2026-10-02'
session: Session 4 — The top rungs
tags:
  - tools and tests
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-02__08_gear_tier_pips.jpg
    alt: Worn gear with its tier pip
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-021-alpha-test-round-1
source: Claude handoff · development/devlog-021-alpha-test-round-1.md
related: []
updated: '2026-10-11'
---

# Alpha-test round 1

From playing it:

- **Jumping isn't floaty any more:** gravity 24 (was 9.8), jump speed 7.4,
  and falling pulls 35% harder than rising: about 1.2 m up and 0.6 s in the
  air.
- **Fall damage:** drops over 4 m cost 9 health per metre past that (a 9 m
  fall takes about half your health), with a red flash. Water breaks a fall.
- **LT with gear in hand wears it**, and what you wore goes back in your pack
  (a research book goes in the study slot). `player.wear()` does it for the
  Character screen too.
- **Worn gear shows its tier** on the Character screen: a tier-coloured
  outline and a pip in the slot's corner (also on the study slot).
- **Blocks break into sensible things:** glass into glass shards (glass
  itself is made, at the kiln), rubble into stone, and exposed walls now and
  then give a rusted pipe or wire (`Items.BREAK_EXTRAS`).
- **Carpet** takes longer to tear up, and cuts into two cloth scraps (by hand
  or at the sewing table).
- **The sewing table does the hand cloth-work** too: tearing clothes,
  cutting carpet, pressing felt, twisting yarn. **Yarn by hand needs
  Tailoring 1** (nothing uses it before the sewing machine).
- **Knowledge has to be earned:** doing the same thing again teaches 80% of
  the time before, and nothing once that's under 5% (about 14 times), where
  it used to bottom out at 20% for ever. **Blocks you placed teach nothing
  when you break them** (`WorldState.placed`, saved with the world), so
  breaking and re-placing a brick is no way to learn masonry.
- **Screenshots:** F12 (or a controller's Share button) saves a PNG to
  `user://screenshots/` and says so; Settings → Display has "Open screenshots
  folder".

![Worn gear with its tier pip](/images/encyclopedia/game/screenshots__2026-10-02__08_gear_tier_pips.jpg)

*Development gameplay capture*

`tests/round1_test.gd` covers each of these (a jump measured at 1.20 m and
0.58 s; a 3 m drop free, a 9 m fall costing 45).
