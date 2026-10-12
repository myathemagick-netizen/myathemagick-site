---
title: 37. Control hints that follow your device
description: 'tests/hintstest.gd: keyboard names after a key, controller names after a button (and the crosshair prompt with them), back again; break when aiming at a block; place / eat / wear by what''s held; hidden in menus; the setting.'
section: development
kind: devlog
entry: 37
devlog_id: '37'
date: '2026-10-03'
session: Session 4 — The top rungs
tags:
  - interface
  - tools and tests
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-03__29_hints_keyboard.jpg
    alt: Keyboard and mouse
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-03__30_hints_controller.jpg
    alt: Controller
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-037-control-hints-that-follow-your-device
source: Claude handoff · development/devlog-037-control-hints-that-follow-your-device.md
related: []
updated: '2026-10-11'
---

# Control hints that follow your device

- **Control hints** in the lower right (`ui/hints_panel.gd`): the controls
  you can use right now, as small key chips: break (or dismantle) when
  you're aiming at something, what the place button does with what you
  hold (place, eat, drink, use, wear, study, listen, lay pipe, fill at
  water), jump (swim up in water), sprint, hotbar, pack, character. The
  thing under the crosshair keeps its own prompt in the middle. They hide
  while a menu is open. Off in Interface settings.
- **They follow your device.** `ui/input_hints.gd` reads the button names
  from the input map for whichever you touched last: a key, a mouse button
  or moving the mouse means keyboard and mouse; a controller button or
  stick means the controller. The prompt under the crosshair and the "An
  idea..." notes use it too, so everything switches together the moment you
  change (and stays right if the bindings are ever changed).
- A diesel or mycodiesel generator now says "out of fuel" the moment it
  runs dry, not a second later.

![Keyboard and mouse](/images/encyclopedia/game/screenshots__2026-10-03__29_hints_keyboard.jpg)

*Development gameplay capture*
![Controller](/images/encyclopedia/game/screenshots__2026-10-03__30_hints_controller.jpg)

*Development gameplay capture*

`tests/hints_test.gd`: keyboard names after a key, controller names after a
button (and the crosshair prompt with them), back again; break when aiming at
a block; place / eat / wear by what's held; hidden in menus; the setting.
