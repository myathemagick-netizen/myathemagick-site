---
title: 11. Saving, and a title screen
description: 'The game now starts on a title screen, over a shot of the canal bridge from earlier in this log: Continue (straight back into your last world), New World (a name, plus an optional seed; words work too, so "mushroom" is a valid see...'
section: development
kind: devlog
entry: 11
devlog_id: s1:11
date: '2026-09-30'
session: Session 1 — From one brown cube to a ruined town
tags:
  - interface
images:
  - src: /images/encyclopedia/game/screenshots__2026-09-30__63_title_screen.jpg
    alt: Title screen
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-09-30__64_load_world.jpg
    alt: Load world
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-s1-11-saving-and-a-title-screen
source: Claude handoff · development/devlog-s1-11-saving-and-a-title-screen.md
related: []
updated: '2026-10-11'
---

# Saving, and a title screen

The game now starts on a **title screen**, over a shot of the canal bridge
from earlier in this log: **Continue** (straight back into your last world),
**New World** (a name, plus an optional seed; words work too, so "mushroom"
is a valid seed), **Load World** (each world with when it was last played and
for how long, and a delete that asks twice), **Settings** and **Quit**. It's
all controller-friendly and uses the same placeholder styling as the pause
menu.

Each world is a folder holding two files. The voxel engine's own SQLite store
keeps only the chunks you've changed; untouched ground is regenerated from
the seed, so saves stay small. A JSON file holds everything else: your
position, facing, inventory and selected slot; the world's memory (searched
containers, picked mushrooms, taken or dismantled furniture); furniture
you've placed; and the name, seed, dates and play time. It's written to a
temporary file and then renamed, so a crash mid-save can't corrupt it. The
game autosaves every two minutes and whenever you pause. The pause menu
gained **Save & quit to title**, and quitting to desktop saves first.

A round-trip test makes a throwaway world, places a brick, digs a hole, fills
the inventory, picks something, places a chair and walks off. It then saves,
returns to the title, loads the world, and checks every one of those came
back before deleting the world. The first run poured out engine errors on
the way back to the title: the terrain was still finishing chunk updates for
a scene that had already gone, and it held the save database open, so the
world couldn't be deleted. The terrain is now shut down on its own before
the scene changes. All the earlier tests pass with the new loading path.

Writing this entry also turned up a quiet bug in the tooling: some earlier
edits to this log had been saved in Windows' legacy text encoding rather
than UTF-8, which would have garbled characters like "×" on GitHub. It's
UTF-8 throughout now.

![Title screen](/images/encyclopedia/game/screenshots__2026-09-30__63_title_screen.jpg)

*Development gameplay capture*
![Load world](/images/encyclopedia/game/screenshots__2026-09-30__64_load_world.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-09-30/65_reloaded_world.jpg: Back in a reloaded world)*

**Where it stands:** you spawn on a street of a procedurally generated,
partly ruined, partly overgrown town, can walk into furnished buildings and
open doors, and mushrooms grow across the land around it. Next up: breaking
and placing blocks, more building types (pharmacy, hardware store, hospital),
designing the biome list, and fixing ruin damage that can leave a block floating in mid-air.

---
