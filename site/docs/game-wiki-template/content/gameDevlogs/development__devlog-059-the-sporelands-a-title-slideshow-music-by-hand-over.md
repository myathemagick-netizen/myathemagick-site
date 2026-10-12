---
title: 59. The Sporelands; a title slideshow; music by hand-over
description: The Sporelands; a title slideshow; music by hand-over
section: development
kind: devlog
entry: 59
devlog_id: '59'
date: '2026-10-04'
session: Session 4 — The top rungs
tags:
  - sporelands
  - audio
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-04__43_title_slideshow.jpg
    alt: Title screen
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-059-the-sporelands-a-title-slideshow-music-by-hand-over
source: Claude handoff · development/devlog-059-the-sporelands-a-title-slideshow-music-by-hand-over.md
related: []
updated: '2026-10-11'
---

# The Sporelands; a title slideshow; music by hand-over

- The Mycelial Bloom is now shown as **the Sporelands** (`BIOME_NAMES`; its
  id stays `bloom`). The radio now says "do not breathe the spores". Docs
  updated.
- **Title screen:** a slideshow of seven pictures from the real world
  (`tests/title_shots.gd` photographs them into `assets/ui/title/`): giant
  mushrooms in the Sporelands at dusk, the museum's dinosaur, a farmstead, a
  quarry, the town from above, a street at dusk, woodland in the morning.
  Starts on a random one, 9 s each, slowly drifting and zooming, cross-fading.
  `title_test` checks it. The old single background is gone.
- **Tests never see your worlds:** with MYCELIUM_TEST=1, `SaveGame.DIR` is
  always `user://test_saves/` (the title test had been listing the real
  saves; it only read them).
- **Music:** no Suno connector exists, so songs come by hand:
  `docs/music_requests.md` has the keys and Suno prompts, and
  `asset_src/music_inbox/` is the drop folder. The game now plays a land's
  own music (`music_<land>_<day|night>` or `music_<land>`) when there is
  some, seven times in ten.

![Title screen](/images/encyclopedia/game/screenshots__2026-10-04__43_title_slideshow.jpg)

*Development gameplay capture*
