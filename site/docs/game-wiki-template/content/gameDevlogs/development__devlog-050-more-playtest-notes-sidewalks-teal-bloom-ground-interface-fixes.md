---
title: '50. More playtest notes: sidewalks, teal bloom ground, interface fixes'
description: 'More playtest notes: sidewalks, teal bloom ground, interface fixes'
section: development
kind: devlog
entry: 50
devlog_id: '50'
date: '2026-10-04'
session: Session 4 — The top rungs
tags:
  - tools and tests
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-04__14_sidewalks.jpg
    alt: Sidewalks
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-04__15_bloom_ground_teal.jpg
    alt: Teal fungal ground in the bloom
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-050-more-playtest-notes-sidewalks-teal-bloom-ground-interface-fixes
source: Claude handoff · development/devlog-050-more-playtest-notes-sidewalks-teal-bloom-ground-interface-fixes.md
related: []
updated: '2026-10-11'
---

# More playtest notes: sidewalks, teal bloom ground, interface fixes

- **Sidewalks**: the outer row each side of a town street is paving now
  (`sidewalk`, and a cracked one with a sunk slab and weeds in the joints,
  more of them the more ruined the town); the lamps, hydrants, post and
  phone boxes stand on it; crossings stay road. The network takes paving
  back like concrete.
- **The bloom's fungal ground goes teal** (mycelium soil, hyphal mat), to go
  with its undergrowth and giant mushrooms: the biome tint map's alpha says
  how much, the normal map's alpha marks fungal ground (`TINT_FUNGAL`).
- **Settings pages scroll**, and the "LB / RB: category" line sits under
  them instead of on the last option.
- **Interface size** slider (Settings > Interface, 0.7 to 1.4): scales every
  screen and the HUD.
- **Long toasts wrap** instead of running across the screen.
- **The look-at panel is smaller**.
- **The pack sits centred** under a wider container (a strongbox).
- Vines can climb over a grass tuft at the foot of a wall (a tuft used to
  stop them starting).

![Sidewalks](/images/encyclopedia/game/screenshots__2026-10-04__14_sidewalks.jpg)

*Development gameplay capture*
![Teal fungal ground in the bloom](/images/encyclopedia/game/screenshots__2026-10-04__15_bloom_ground_teal.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-04/16_settings_scroll.jpg: Settings scroll, the size slider)*
*(image not bundled: docs/screenshots/2026-10-04/17_strongbox_centred.jpg: A strongbox, the pack centred)*
*(image not bundled: docs/screenshots/2026-10-04/18_toast_wraps.jpg: A long toast wrapping)*
