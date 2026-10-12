---
title: '136. The Glass Desert, step 8: the Broken Highway'
description: 'From the author''s overpass references (docs/concepts/): a highway that runs across the deep desert. DesertSites.highway (the solar farm''s class): one row of regions in six has a straight east-west line at a hashed z; along it, eve...'
section: development
kind: devlog
entry: 136
devlog_id: '136'
date: '2026-10-11'
session: Session 4 — The top rungs
tags:
  - desert
  - power
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-11__hwwreck_hw_wreck_wide_15.jpg
    alt: A wreck on the deck
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-11__hwbroken_hw_under_15.jpg
    alt: Broken, with its girders
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-136-the-glass-desert-step-8-the-broken-highway
source: Claude handoff · development/devlog-136-the-glass-desert-step-8-the-broken-highway.md
related: []
updated: '2026-10-11'
---

# The Glass Desert, step 8: the Broken Highway

From the author's overpass references (`docs/concepts/`): a highway that runs across the deep desert. `DesertSites.highway` (the
solar farm's class): one row of regions in six has a straight east-west line at a hashed z; along it, every 16 m, a **pier** (a column
with a 12-wide **T-shaped hammerhead cap**) and a 14 m deck 8 m over the ground (always at least 5 over the highest sand in its bay and
a little less over its neighbours', so it never steps far; bays on a cliff or a mesa's foot are left out, so it **ends ragged** where the
desert or the flat ground does). Groups of six bays share a mood: **whole** (asphalt, a dashed centre line, a rusted rail, a pothole
or two, now and then a wrecked car or a gas advert on the rail), **broken** (bites out of the slab, the Rustbelt's rusted girders
showing, weak grating and rebar at the torn edges, sometimes a slab leaning down to the sand with rubble), **bare** (the T-caps standing
alone with nothing on them) and **buried** (the author's idea: a dune climbs up to the deck over a whole stretch and covers it at its crest).
No ramps. The deck and piers use only the sand under them, levelling nothing (`nolevel` on its lot, which still keeps cacti off). On the test map
about 8 km of it in 61 pieces (`tools/highway_count.gd`). On the compass and in the journal as "Broken highway".
`tests/highway_test.gd`; `tools/desert_shots.gd` takes `DESERT_HIGHWAY=n|max` and `DESERT_HIGHWAY_STATE=broken|bare|buried`.
Not done: ramps. (The building doc has its section now: the four moods from above and from the side, built on flat ground by `DesertSites._bay`.)

**The wrecks are loot boxes** (the author's note): the highway's cars are their own props (`wreck_red`, `wreck_blue`, `wreck_white`, the same models, 18% of whole and broken bays), richer than the road cars in what the desert needs: **red** leans to electronics (parts, circuit boards, a precision circuit, lithium cells, batteries), **blue** to engineering (mechanical parts, an electric motor, scrap, a little gold wire), **white** to food (canned, boxed, preserved jars, dried mushrooms, a bandage); each also has a smaller chance of the others.

![A wreck on the deck](/images/encyclopedia/game/screenshots__2026-10-11__hwwreck_hw_wreck_wide_15.jpg)

*Development gameplay capture*

![Broken, with its girders](/images/encyclopedia/game/screenshots__2026-10-11__hwbroken_hw_under_15.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-11/highway_hw_side_15.png: Bare piers)*
*(image not bundled: docs/screenshots/2026-10-11/highwaymax_hw_along_15.png: A whole stretch, a dune climbing it)*
