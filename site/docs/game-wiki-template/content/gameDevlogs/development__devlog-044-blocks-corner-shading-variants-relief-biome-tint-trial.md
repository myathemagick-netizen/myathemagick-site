---
title: '44. Blocks: corner shading, variants, relief, biome tint (trial)'
description: The props are built at 16 voxels a metre and the blocks painted at 16 pixels a metre, so they share a grain; what the blocks lacked beside the props was depth, shadow in their corners, and variety. A block shader (assets/blocks/bl...
section: development
kind: devlog
entry: 44
devlog_id: '44'
date: '2026-10-03'
session: Session 4 — The top rungs
tags: []
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-03__74_blocks_border_before_after.jpg
    alt: A biome border, before and after
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-03__75_blocks_brick_closeup.jpg
    alt: 'Brick close up: before, variants, relief'
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-044-blocks-corner-shading-variants-relief-biome-tint-trial
source: Claude handoff · development/devlog-044-blocks-corner-shading-variants-relief-biome-tint-trial.md
related: []
updated: '2026-10-11'
---

# Blocks: corner shading, variants, relief, biome tint (trial)

The props are built at 16 voxels a metre and the blocks painted at 16
pixels a metre, so they share a grain; what the blocks lacked beside the
props was depth, shadow in their corners, and variety. A block shader
(`assets/blocks/block_common.gdshaderinc`) adds, each a global shader
switch (`block_ao`, `block_variants`, `block_relief`, `block_tint`):

1. **Corner shading:** the mesher's ambient occlusion (it was being
   computed all along, but the old material ignored it), plus Godot's
   screen-space AO.
2. **Variants:** four versions of every tile (`blocks_atlas_wide.png`),
   one picked per block face by its position; natural tiles also turned
   (tops) or mirrored (sides); every block a touch lighter or darker.
3. **Relief:** a normal map from each tile's light and dark, so mortar,
   cracks, planks and grain catch the sun (strength per tile, `RELIEF` in
   gen_block_textures.py).
4. **Biome tint:** grass, leaves and vines take their biome's colour, like
   Minecraft's: sun-bleached plains, lush woodland, olive wetland, cool
   highlands, teal bloom; blended across borders (`BiomeTint` paints a 512
   m map round the player on a worker thread).

![A biome border, before and after](/images/encyclopedia/game/screenshots__2026-10-03__74_blocks_border_before_after.jpg)

*Development gameplay capture*
![Brick close up: before, variants, relief](/images/encyclopedia/game/screenshots__2026-10-03__75_blocks_brick_closeup.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-03/73_blocks_country_stages.jpg: Open country, stage by stage)*
*(image not bundled: docs/screenshots/2026-10-03/72_blocks_street_stages.jpg: A street, stage by stage)*

`tests/block_look_test.gd` photographs a street, open country and a
biome border at each stage.
