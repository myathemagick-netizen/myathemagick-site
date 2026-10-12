---
title: Interface
description: 'Game systems: interface.'
section: systems
kind: systems-group
slug: interface
updated: '2026-10-11'
images: []
sourceStatus: mixed
route: /game/systems/interface
source: Claude handoff · systems/interface.md
related: []
---

# Interface


## Controller support and hints
<a id="controller-support-and-hints"></a>

**Status:** Implemented

Gamepad and keyboard/mouse with hints that follow the device last used.

**Development:** [s1:7](/game/development/devlog-s1-07-controller-support-and-the-first-interaction), [37](/game/development/devlog-037-control-hints-that-follow-your-device)


## Hide the interface (F10)
<a id="hide-the-interface-f10"></a>

**Status:** Implemented

F10 hides the HUD for clean screenshots; F12 takes one.

**Development:** [125](/game/development/devlog-125-hide-the-interface-f10)


## Graphics settings
<a id="graphics-settings"></a>

**Status:** Experimental (new, untuned or partial)

Settings > Graphics: anti-aliasing (Off or FXAA), ambient occlusion (Off, Low, High), bloom strength, shadow softness, render scale, heat shimmer, and an everything-off preset.

**Limits:** TAA and MSAA were removed after playtest (ghosting, seams between blocks); they may return.

**Development:** [132](/game/development/devlog-132-graphics-settings), [140](/game/development/devlog-140-heat-shimmer-a-first-look), [142](/game/development/devlog-142-playtest-notes-sounds-and-anti-aliasing)


## Saves and title screen
<a id="saves-and-title-screen"></a>

**Status:** Implemented

World saves (including furniture state), a title screen with a slideshow of the world.

**Development:** [s1:11](/game/development/devlog-s1-11-saving-and-a-title-screen), [59](/game/development/devlog-059-the-sporelands-a-title-slideshow-music-by-hand-over)
