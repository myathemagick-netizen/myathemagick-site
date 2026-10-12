---
title: 8. Crafting takes a moment; tools, and wearing them out
description: 'Crafting was instant. Now A starts making and a progress bar fills first: 0.6 s for something simple, up to 3 s for a big build (half a second plus a fifth per ingredient). Hold A to keep making more; B stops a craft without closi...'
section: development
kind: devlog
entry: 8
devlog_id: '8'
date: '2026-10-01'
session: Session 3 — Crafting by hand
tags:
  - crafting
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-01__33_crafting_progress.jpg
    alt: A craft in progress
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-01__34_workbench_timed.jpg
    alt: Making a pry bar at the workbench
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-008-crafting-takes-a-moment-tools-and-wearing-them-out
source: Claude handoff · development/devlog-008-crafting-takes-a-moment-tools-and-wearing-them-out.md
related: []
updated: '2026-10-11'
---

# Crafting takes a moment; tools, and wearing them out

Crafting was instant. Now **A starts making** and a progress bar fills
first: 0.6 s for something simple, up to 3 s for a big build (half a second
plus a fifth per ingredient). **Hold A** to keep making more; **B stops** a
craft without closing the screen.

**Tools**, made at the workbench:

| Tool | Made from | Good for | Uses | Wears out into |
|---|---|---|---|---|
| Scrap Hatchet | 3 scrap, 1 plank | wood, 3x faster; dismantling 1.5x | 80 | 2 scrap |
| Pry Bar | 1 rusted pipe, 1 scrap | stone, concrete, brick, metal 2.5x; dismantling 2x | 120 | the pipe |
| Scrap Spade | 2 scrap, 1 plank | soil, sand, gravel 3x | 80 | 1 scrap, 1 plank |
| Kitchen Knife | found, or ground from scrap + cloth | an extra mushroom when foraging | 40 | 1 scrap |

A tool wears by one use each time it actually helps, so a hatchet on
concrete doesn't wear. Slots show a **durability bar** (green to red) and
the tooltip says how many uses are left. At zero the tool **breaks into
scrap** ("Your Spore Pry Bar gives out."): nothing just vanishes (GDD §6).
The workbench lists a **repair** for each worn tool you carry, which
restores it for one scrap metal. Uses left are stored in the item itself
(`pry_bar~37`), so they're saved with no extra work.

![A craft in progress](/images/encyclopedia/game/screenshots__2026-10-01__33_crafting_progress.jpg)

*Development gameplay capture*
![Making a pry bar at the workbench](/images/encyclopedia/game/screenshots__2026-10-01__34_workbench_timed.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-01/35_tool_durability.jpg: A worn hatchet: durability bar and uses left)*

`tests/tools_test.gd`: timed crafting with cancel, planks broken by hand
(35 frames) vs with the hatchet (12), no wear on the wrong material, a
pry bar worn out into its pipe, the knife bonus, the durability bar and
tooltip, and a repair.
