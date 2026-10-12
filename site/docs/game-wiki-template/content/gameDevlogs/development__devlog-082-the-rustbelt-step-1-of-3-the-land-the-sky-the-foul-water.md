---
title: '82. The Rustbelt (step 1 of 3): the land, the sky, the foul water'
description: 'The Rustbelt (step 1 of 3): the land, the sky, the foul water'
section: development
kind: devlog
entry: 82
devlog_id: '82'
date: '2026-10-05'
session: Session 4 — The top rungs
tags:
  - rustbelt
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-05__10_rustbelt_day.jpg
    alt: The Rustbelt by day
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-05__11_rustbelt_dusk.jpg
    alt: The Rustbelt at dusk
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-082-the-rustbelt-step-1-of-3-the-land-the-sky-the-foul-water
source: Claude handoff · development/devlog-082-the-rustbelt-step-1-of-3-the-land-the-sky-the-foul-water.md
related: []
updated: '2026-10-11'
---

# The Rustbelt (step 1 of 3): the land, the sky, the foul water

- **The Rustbelt**: a new biome of dead industry, as large as a mountain
  range. It never sits under a range, and never within ~400 m of the home
  town (the spawn's land is kinder). The ground is levelled flat and low; its
  hollows sink below the water level and fill with **foul water**.
- **New ground**: `rust_soil` (black, oily, rust flakes; squishy underfoot),
  `slag` (glassy furnace slag in heaps), `oily_concrete` (old factory floors,
  oil and rust rings), `ballast` (railway stones). **Scrap heaps** stand where
  rocks would: rusted metal and `scrap_heap` blocks, which break into scrap
  metal and now and then wire or a pipe. Rust weeds, dead brush and fungal
  tufts grow on it; dead trees mostly. Shelf fungi and rust mushrooms are
  its fungi; the network spreads slowly (0.6). Its strain on the compass:
  lithotroph.
- **Its sky turns rust-red**: a new **palette** for each land
  (`world/biome_palette.gd`): five swatches (shown in the journal's Biomes
  page) and, for some lands, a colouring of the sky, the haze and the sun
  over it. It eases in over a few seconds as you cross in (the Sporelands
  get a faint teal; the rest keep the plain sky). Dusk there is blood red.
- **Foul water**: the Rustbelt's water is rust-orange sludge (the water
  tint map now holds tints up to 4x), and wading or swimming in it poisons
  you ("The water here is foul: it burns.").
- **Its sound**: `amb_rustbelt`, wind through rusted steel, creaks, a far
  chain (ElevenLabs); music requested in docs/music_requests.md
  (`music_rustbelt_day`, `music_rustbelt_night`; also `music_mountains_day`).
- Fix: a tint repaint still running could land after a forced one (tests
  teleporting about saw a stale map).
- `rustbelt_test` checks the ground, the flatness, the pools, scrap, the sky,
  the water's tint and the poison, and photographs it by day, at dusk, the
  pools and a scrap heap.

![The Rustbelt by day](/images/encyclopedia/game/screenshots__2026-10-05__10_rustbelt_day.jpg)

*Development gameplay capture*
![The Rustbelt at dusk](/images/encyclopedia/game/screenshots__2026-10-05__11_rustbelt_dusk.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-05/12_rustbelt_pool.png: A foul pool)*
*(image not bundled: docs/screenshots/2026-10-05/13_rustbelt_scrap.png: A scrap heap)*
