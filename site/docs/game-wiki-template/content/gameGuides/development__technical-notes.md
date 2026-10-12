---
title: Technical notes
description: The tools and methods behind the game.
section: development
kind: technical
updated: '2026-10-11'
sourceStatus: published
route: /game/development/technical-notes
source: Claude handoff · development/technical-notes.md
related: []
images: []
---

# Technical notes

- **Engine and tools:** Godot 4.7.2 (GDScript, Forward+ renderer) with the Voxel Tools extension by Zylann (a blocky mesher on a `VoxelTerrain`). Blender for voxel prop models; Python scripts generate block textures, item icons and many props, so art is reproducible and block ids are append-only (saved worlds never shift).
- **World generation:** a layered pass: terrain (noise), a land cascade (mountains, Hollow Wood, desert, wetland and so on) with towns and roads as pure functions of position and seed, building stamping from authored templates, then decoration (plants, fungi, features). Landmarks outside roads (solar farms, the broken highway) use the same lazily built, cached per-region approach as mountain summits.
- **Tests:** about 90 automated tests, run in a headless mode in about 27 minutes (the last full run, 2026-10-11: 86 of 86 passed). Picture tests and tools photograph features into dated folders; the development journal has a section for each change with its pictures.
- **Performance work:** fungi and building plans are prepared on worker threads, furniture streams in over frames, lights fade with distance, there is a view-distance setting, and a stutter probe times a 40-second run (devlog entries 112 to 116).
- **Sound:** sound effects were generated with ElevenLabs (one prompt, several takes, the best kept); the author makes the music with Suno and the ambience on the sound site. The ElevenLabs effects carry a faint 200 Hz hum; a cleaning pass (spectral subtraction, a notch at the hum's pitch and its harmonics, high-pass where it is safe) reduces it. The author judges by ear: the developer's assistant can only measure.
- **Graphics:** blocky meshes with a shared block shader (corner shading, variants, relief, biome tint); settings for FXAA, ambient occlusion, bloom, shadow softness and render scale; a heat-shimmer layer. TAA and MSAA were tried and removed (ghosting; seams between blocks).
- **Builds:** `build_alpha.py` exports a numbered Windows build with its number in the window title; a publishing script for itch.io exists but has not been used (no page set up yet).
- **Reference documents:** see `source_docs/` (design document, handoff, plans for the Hollow Manor and the Glass Desert, ideas, and the generated building documentation).
