---
title: '30. Mining, part A: what''s under your feet'
description: 'The ground used to be endless stone. Now (world/worldgenerator.gd):'
section: development
kind: devlog
entry: 30
devlog_id: '30'
date: '2026-10-03'
session: Session 4 — The top rungs
tags:
  - creatures
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-03__07_copper_seam.jpg
    alt: A copper seam in the deep stone, in a room dug out at y −16
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-03__08_ore_samples.jpg
    alt: 'The new blocks: stone, deep stone, bedrock, coal, copper, tin, iron, gold, rare earth'
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-030-mining-part-a-what-s-under-your-feet
source: Claude handoff · development/devlog-030-mining-part-a-what-s-under-your-feet.md
related: []
updated: '2026-10-11'
---

# Mining, part A: what's under your feet

The ground used to be endless stone. Now (`world/world_generator.gd`):

- **Strata:** a few blocks of dirt, stone, then darker **deep stone** below
  about y −8, and **bedrock** from y −48 down: the bottom of the world.
  Nothing breaks it. Both boundaries are ragged, a block or two either way.
- **Ore veins** (`WorldGenerator.ORES`), short random walks through the
  stone, seeded by position (the same every time):

  | Ore | Depth (y) | |
  |---|---|---|
  | Coal | −12 to 40 | common; shows in highland outcrops |
  | Copper | −22 to 24 | |
  | Tin | −30 to 6 | |
  | Iron | −44 to −4 | in the deep stone |
  | Gold | −47 to −26 | rare |
  | Rare earths | −48 to −38 | rarest, just above the bedrock; violet glints that glow |

- **Breaking ore:** an ore block drops itself (coal ore drops coal); ore is
  slow by hand and with a pry bar, and teaches **Mining** (deep stone a
  little). Mining 2: one ore in four comes out double.
- **Picks:** scrap pickaxe (workbench, from the start), iron (Mining 1),
  steel (Mining 3).
- **Rock drill** (Mining 4 + Engineering 2, electronics bench: a motor,
  steel, two batteries, mechanical parts): seven times faster than your
  hands on ore. It runs on **charge**, not wear: 200 uses' worth; when it's
  flat it doesn't break, it's just a heavy lump. Hold it and X on a battery
  bank, accumulator rack or tesla tower to charge it. New drill sound.
- **Smelting** (furnace): iron ore gives two iron ingots (scrap needs three
  for one); copper, tin and gold ore smelt to ingots. **Copper wire**: a
  copper ingot draws six wires at the workbench.
- Mining is a new field (begin the notes at the writing desk) and a column
  on the Knowledge map, next to Masonry.

Still to come (part B): Metallurgy and alloys (bronze, solder), gold wire
and what rare earths are for, caves, quarries and old mines along the
roads, and darkness underground (§31).

![A copper seam in the deep stone, in a room dug out at y −16](/images/encyclopedia/game/screenshots__2026-10-03__07_copper_seam.jpg)

*Development gameplay capture*
![The new blocks: stone, deep stone, bedrock, coal, copper, tin, iron, gold, rare earth](/images/encyclopedia/game/screenshots__2026-10-03__08_ore_samples.jpg)

*Development gameplay capture*

`tests/mining_test.gd`: generates sixty underground blocks straight from the
generator and checks the bedrock floor, the deep stone and every ore inside
its depth band (rare earths rarer than iron); breaking ore and coal;
bedrock; tool speeds; the drill going flat and charging at a bank; the
Mining recipes; smelting and copper wire. Photographs a seam and the
blocks.
