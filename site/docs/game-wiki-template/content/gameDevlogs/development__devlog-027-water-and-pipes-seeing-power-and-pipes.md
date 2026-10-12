---
title: 27. Water and pipes; seeing power and pipes
description: 'Phase 1 of the power-and-water plan (docs/ideas.md): restored pipes finally carry water (world/waternet.gd).'
section: development
kind: devlog
entry: 27
devlog_id: '27'
date: '2026-10-02'
session: Session 4 — The top rungs
tags:
  - power
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-02__25_water_line.jpg
    alt: 'A water line: water, pump, pipes, a brewing pot and alembic, the tank'
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-02__26_wrench_view.jpg
    alt: The wrench's view
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-027-water-and-pipes-seeing-power-and-pipes
source: Claude handoff · development/devlog-027-water-and-pipes-seeing-power-and-pipes.md
related: []
updated: '2026-10-11'
---

# Water and pipes; seeing power and pipes

Phase 1 of the power-and-water plan (`docs/ideas.md`): restored pipes
finally carry water (`world/water_net.gd`).

- **Pipes join up by themselves.** Set a pipe down (LT) anywhere there's
  room: no floor needed. It joins every neighbour that takes water: other
  pipes, a **pump**'s two ends, a **water tank**, a **brewing pot**, an
  **alembic**. Arms appear toward whatever it joins (the model's
  `pipe__arm_<dir>` children). Aim at the side of a pipe to add the next one
  there.
- **Through walls:** aim at the wall right behind the last pipe and the next
  one goes *into* the wall: it takes that block's place (you get the block
  back), shows a stone collar and is solid, so the hole stays sealed.
- **Electric pump** (Engineering 2): the only thing with a direction. Its
  back (intake) draws from a water block it touches, or one a pipe on that
  side touches; its front (outlet, toward you as you set it down) fills the
  tanks it's piped to: 6 buckets a game hour for 1.5 charge, from battery
  banks close by.
- **Water tank** (Engineering 1): 20 buckets. Fill or empty buckets at it
  by hand.
- **What uses it:** the brewing pot brews with piped water instead of a
  bucket; an alembic piped to water runs its condenser cool and distils in
  half the time (a quarter bucket each).
- **Wrench** (Engineering 1): hold it to see the pipes, through walls:
  every joint (blue with water, grey dry, a red cross for a shut valve),
  arrows from each pump's outlet the way the water goes, and labels on
  pumps ("running", "no water at the intake", "tanks full", "no power"),
  tanks and piped machines. X on a pipe shuts or opens its valve, which
  splits a line in two. It also takes things apart twice as fast.
- **Multimeter** (Engineering 1): hold it to see the power: a ring on the
  ground for how far each battery bank reaches, its charge, and a mark on
  everything that makes or uses power, green in reach, red not.

![A water line: water, pump, pipes, a brewing pot and alembic, the tank](/images/encyclopedia/game/screenshots__2026-10-02__25_water_line.jpg)

*Development gameplay capture*
![The wrench's view](/images/encyclopedia/game/screenshots__2026-10-02__26_wrench_view.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-02/27_multimeter_view.jpg: The multimeter's view: a battery bank's reach)*
*(image not bundled: docs/screenshots/2026-10-02/28_pipe_pump_tank.jpg: Pipe (every arm and collar showing), pump, tank)*

`tests/pipes_test.gd`: the recipes; a line from water through a pump and
pipes to a tank with a pot and an alembic beside it (who joins whom, which
arms show); an hour's pumping (water in, charge out); a shut valve and an
empty bank stopping it; brewing from piped water; the alembic running cool;
a bucket from the tank; a pipe going into a wall (block back, sealed,
joined, collar); and both tool views.
