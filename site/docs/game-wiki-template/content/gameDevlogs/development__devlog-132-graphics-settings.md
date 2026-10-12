---
title: 132. Graphics settings
description: 'The pause menu''s Settings has a new Graphics tab (last, so the other tabs keep their places): anti-aliasing (Off, FXAA, TAA, MSAA 2x, MSAA 4x by default), ambient occlusion (Off, Low, High), bloom strength (0.8; 0 turns it off), s...'
section: development
kind: devlog
entry: 132
devlog_id: '132'
date: '2026-10-11'
session: Session 4 — The top rungs
tags:
  - interface
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-11__gfx_page.jpg
    alt: The Graphics tab
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-11__gfx_town_compare.jpg
    alt: Four ways
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-132-graphics-settings
source: Claude handoff · development/devlog-132-graphics-settings.md
related: []
updated: '2026-10-11'
---

# Graphics settings

The pause menu's Settings has a new **Graphics** tab (last, so the other tabs keep their places): anti-aliasing
(Off, FXAA, TAA, MSAA 2x, **MSAA 4x** by default), ambient occlusion (Off, **Low**, High), bloom strength
(0.8; 0 turns it off), shadow edges (Hard to Soft: high; medium by default), and render scale (0.5 to 1.5),
with "Everything off" (for testing or a slow machine) and "Back to the defaults" buttons. They save with the
other settings. `GraphicsSettings` (`game/graphics_settings.gd`) applies them to the window's viewport and the
world's environment, and does nothing in test mode or headless, so other tests' pictures don't change.
`tests/gfx_settings_test.gd` covers it; `tools/gfx_shots.gd` makes the 4-way comparison pictures and
`tools/gfx_apply_check.gd` applies them for real. The comparison (devlog pictures below): MSAA clearly smooths
silhouettes without blurring the textures; ambient occlusion darkens creases; TAA is smoothest but softer.
Speed hasn't been measured. A blur-in-the-distance option (depth of field / a distance haze) is in `docs/ideas.md`.

![The Graphics tab](/images/encyclopedia/game/screenshots__2026-10-11__gfx_page.jpg)

*Development gameplay capture*
![Four ways](/images/encyclopedia/game/screenshots__2026-10-11__gfx_town_compare.jpg)

*Development gameplay capture*
