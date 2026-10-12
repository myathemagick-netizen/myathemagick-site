---
title: 36. A compass bar
description: 'From the ideas notes (and Hytale / Vintage Story): a small compass across the top of the screen (ui/compassbar.gd). Three designs were mocked up over a screenshot (24compassdesigns.jpg); the line-and-pill one won, and two others s...'
section: development
kind: devlog
entry: 36
devlog_id: '36'
date: '2026-10-03'
session: Session 4 — The top rungs
tags:
  - interface
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-03__25_compass_line_pill.jpg
    alt: 'Line and pill (the default): a farmstead 61 m ahead, the radio signal, towns'
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-03__26_compass_minimal_strip.jpg
    alt: Minimal strip
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-036-a-compass-bar
source: Claude handoff · development/devlog-036-a-compass-bar.md
related: []
updated: '2026-10-11'
---

# A compass bar

From the ideas notes (and Hytale / Vintage Story): a small compass across
the top of the screen (`ui/compass_bar.gd`). Three designs were mocked up
over a screenshot (`24_compass_designs.jpg`); the line-and-pill one won, and
two others stay as choices.

- **What it shows:** which way you face (letters every 45 degrees; north is
  gold), the **places you've found**, each a small icon (a house for a town,
  a barn for a farmstead, a pick for a quarry, a pick and lamp for an old
  mine) with its **distance**, and the **radio signal** (teal) for two minutes
  after you listen to the radio. Places go on it when you come within 60 m of
  them ("Found: farmstead. It's on your compass now.") and are saved with
  the world (`WorldState.discovered`); it shows those within 900 m.
- **The land you're in:** under the compass, its name in its **strain's
  colour** (a pill in the default look). The strain wheel isn't built yet,
  so the colours and roles are placeholders from the GDD's list: plains
  decomposer (tan), woodland mycorrhizal (green), wetland mycoremediator
  (violet), highlands parasitic (rust), the bloom network (teal).
- **Settings, Interface tab** (new): compass on/off; style (line and pill,
  minimal strip, floating letters); places on/off; distances on/off; land
  names when entering (fades after a few seconds), always, or off. With the
  compass off, entering a land shows the old toast instead.

![Line and pill (the default): a farmstead 61 m ahead, the radio signal, towns](/images/encyclopedia/game/screenshots__2026-10-03__25_compass_line_pill.jpg)

*Development gameplay capture*
![Minimal strip](/images/encyclopedia/game/screenshots__2026-10-03__26_compass_minimal_strip.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-03/27_compass_floating_letters.jpg: Floating letters)*
*(image not bundled: docs/screenshots/2026-10-03/28_settings_interface.jpg: The Interface settings)*

`tests/compass_test.gd`: the heading (north is -Z, east is +X), the home
town found at the start, a farmstead found by walking up to it and shown at
its distance, the radio signal, the land-name modes and the toast fallback,
and the Interface settings reaching the compass.
