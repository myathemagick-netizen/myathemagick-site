---
title: '4. Buildings: templates, themes, ruin and growth'
description: 'Buildings work like Minecraft structures: a template is stored, and world generation stamps it into the terrain. The twist is that templates store roles ("outer wall", "floor", "roof"), not blocks. A theme decides what each role i...'
section: development
kind: devlog
entry: 4
devlog_id: s1:4
date: '2026-09-30'
session: Session 1 — From one brown cube to a ruined town
tags:
  - crafting
  - creatures
images:
  - src: /images/encyclopedia/game/screenshots__2026-09-30__09_structures_themes.jpg
    alt: Themes
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-09-30__10_structures_ruin_stages.jpg
    alt: Ruin stages
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-s1-04-buildings-templates-themes-ruin-and-growth
source: Claude handoff · development/devlog-s1-04-buildings-templates-themes-ruin-and-growth.md
related: []
updated: '2026-10-11'
---

# Buildings: templates, themes, ruin and growth

Buildings work like Minecraft structures: a template is stored, and world
generation stamps it into the terrain. The twist is that templates store
**roles** ("outer wall", "floor", "roof"), not blocks. A **theme** decides
what each role is made of, so one house can be brick, painted siding or
timber. Exterior walls are two layers thick: brick or siding outside, drywall
or wallpaper inside, so damage can expose the inner layer's wiring.

![Themes](/images/encyclopedia/game/screenshots__2026-09-30__09_structures_themes.jpg)

*Development gameplay capture*

The design doc's two independent axes are applied at stamp time. **Ruin
0–3** removes voxels (upper floors first), breaks glass, cracks concrete and
leaves rubble. **Growth 0–3** swaps blocks for fungal versions from the
ground up.

![Ruin stages](/images/encyclopedia/game/screenshots__2026-09-30__10_structures_ruin_stages.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-09-30/11_structures_growth_stages.jpg: Growth stages)*

The first attempt had roofs at 45° that made little houses look top-heavy,
and "totally ruined" apartments turned into a solid block of rubble, because
every column dumped debris into three-metre rooms. Shallower roofs, sparse
debris that only settles on floors, and ruin that spares ground-floor wall
stubs fixed both. Now "collapsed but clean" and "standing but overgrown" both
exist, which the design doc calls out as storytelling in itself.

*(image not bundled: docs/screenshots/2026-09-30/12_structures_ruin_vs_growth.jpg: Ruin vs growth)*
*(image not bundled: docs/screenshots/2026-09-30/08_structures_overview.jpg: Overview)*
