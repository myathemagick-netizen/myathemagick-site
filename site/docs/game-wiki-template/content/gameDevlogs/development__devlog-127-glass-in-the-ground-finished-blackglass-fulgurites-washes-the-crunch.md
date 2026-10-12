---
title: '127. Glass in the ground, finished: blackglass, fulgurites, washes, the crunch'
description: The rest of step 2 of the Glass Desert (the shard dunes were §124). Four small pieces, each tested and committed on its own, so a stop between them loses nothing.
section: development
kind: devlog
entry: 127
devlog_id: '127'
date: '2026-10-11'
session: Session 4 — The top rungs
tags:
  - desert
  - tools and tests
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-08__desert_blackglass_view.jpg
    alt: 'A flat of blackglass: charcoal plates, pale seams and glints'
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-08__desert_blackglass_close.jpg
    alt: Closer
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-127-glass-in-the-ground-finished-blackglass-fulgurites-washes-the-crunch
source: Claude handoff · development/devlog-127-glass-in-the-ground-finished-blackglass-fulgurites-washes-the-crunch.md
related: []
updated: '2026-10-11'
---

# Glass in the ground, finished: blackglass, fulgurites, washes, the crunch

The rest of step 2 of the Glass Desert (the shard dunes were §124). Four small
pieces, each tested and committed on its own, so a stop between them loses nothing.

- **Blackglass flats.** Two new blocks (258 in all): **blackglass** (charcoal, a
  faint diagonal sheen, a few pale glints) and **cracked blackglass** (pale seams).
  Smooth plates: they **don't cut** (the cut is for shard sand and loose shards), they
  break into glass, make the glass sound and are as hard as stone. Flats tens of metres
  across, **about a tenth of the deep desert** (its own noise: `_glass`, level 0.84;
  10.8% by measurement), and they take priority over the shard sand. **Surface only**: no
  flattening, so no height seams in worlds that already have desert saved.
- **Fulgurite towers.** A new block and a new feature kind, in a 97 m cell (so the
  extra lookup in `features_in` is cheap), only in the deep desert, on level wild
  ground, off the roads (8 m) and **never in or beside a wash**. **About one a
  quarter of a square kilometre** (one per 0.21-0.26 km2 on six seeds; my first try, in
  a 47 m cell, put one every 80 m: 2,000 a map) and **one in eight monumental**
  (17-24 high, three across at the foot). A tube of fused sand that wanders a little
  as it climbs: a plus-shaped shaft, a single spike at the top, two to four branches, a skirt
  of blackglass round the foot. It breaks into glass. A thin first version read as a dead
  cactus: the shaft is now plus-shaped for two thirds of its height.
- **Dry washes.** Channels where a noise (`_wash`) is near zero, in the desert only:
  **2.5 blocks deep at the middle, about 13 m across (median)**, **about 13% of the
  deep desert**, bedded in gravel with sand banks, **never wet** (the lowest floor is 13; the
  beach starts at 9). Measured on the plateau: the channel middle is a median 2.7 blocks
  below the dunes beside it, and none of 300 lines through washes has a step over 2
  blocks (my first, 3-deep, 0.045-wide setting had a step of 3 now and then). The noise is
  only called inside the existing desert branch of `natural_height`, so ordinary land
  pays nothing. **Roads and washes**: country roads only touch the desert's fringe (see
  below); the few road points in a wash (3 on the test seed) keep their height from
  point to point.
- **`step_glass`**, the crunch for shard sand and loose shards (three takes, 150
  ElevenLabs credits, 3.3 cents; levelled and trimmed to 0.6 s; logged in
  `audio_sources.json`; the gravel's crunch is the fallback). Nobody here has heard
  it: the first take is sent for a listen. Added to `audio_check` and the wishlist.
- **Glass in all** (the deep desert, by measurement over six seeds): **shard sand
  21.6%, blackglass 10.8%, about 32% in all**. That is over the plan's "glass at most a
  fifth"; the shard share was left alone (it is the playtest's call: `SHARD_MASK`
  0.22 is what to raise, to about 0.3 for a fifth in all). Blackglass was set to be about
  a tenth so that the total is not worse than it had to be.
- **Found on the way: no road crosses the deep desert.** Roads join towns, and no town
  stands in the desert, so the country roads reach only its margin and fringe (thousands
  of points a seed at the margin; none in the deep). So **the Service Station would stand at
  the desert's edge, on a road that ends or turns back there**, and a **highway through the
  middle needs a road laid on purpose** (a link between two towns on either side that is
  allowed to cross). For step 6.
- **The test that "hung".** `desert_test` did minutes of layout work on the main thread
  right after the player spawned, so the window sat frozen with no output. It now gives the
  window a frame every 40 ms of work and prints the part it is in; the slowest part
  (comparing estates and towns with the desert on and off) uses two seeds. A full headless
  run takes about six minutes.
- **Not done**: the washes don't yet funnel you toward shade, buried resources or
  water (the doc's phrase); that needs the resources and ruins that aren't in yet.
  Saved worlds: a wash is a height change, so an already explored bit of desert can show a
  seam where it meets new ground (blackglass and fulgurites don't).

![A flat of blackglass: charcoal plates, pale seams and glints](/images/encyclopedia/game/screenshots__2026-10-08__desert_blackglass_view.jpg)

*Development gameplay capture*
![Closer](/images/encyclopedia/game/screenshots__2026-10-08__desert_blackglass_close.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-08/desert_fulgurite_tower.png: A fulgurite tower)*
*(image not bundled: docs/screenshots/2026-10-08/desert_fulgurite_monument.png: A monumental one)*
*(image not bundled: docs/screenshots/2026-10-08/desert_wash_view.png: A dry wash: gravel bed, sand banks, cut into the dunes)*
*(image not bundled: docs/screenshots/2026-10-08/desert_wash_road.png: The desert's fringe, where a country road (the dark line across the middle distance) meets a wash: a gravel channel, autumn fields beyond. A clearer road shot isn't to be had: only three road points on the test seed touch a wash)*
