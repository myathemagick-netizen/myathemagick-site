---
title: '117. Week 2: a grander entrance hall'
description: 'From the author''s list (with a concept picture of the hall): carpet up the stair, railing stairs, a runner to the door, wainscoting, a checkered kitchen floor, the museum''s cases and statues in a show room, a deer''s head on a wall...'
section: development
kind: devlog
entry: 117
devlog_id: '117'
date: '2026-10-07'
session: Session 4 — The top rungs
tags: []
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-07__manor_hall_great_rug.jpg
    alt: A great rug on tiles
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-07__manor_hall_runner_tiles.jpg
    alt: A runner on tiles
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-117-week-2-a-grander-entrance-hall
source: Claude handoff · development/devlog-117-week-2-a-grander-entrance-hall.md
related: []
updated: '2026-10-11'
---

# Week 2: a grander entrance hall

From the author's list (with a concept picture of the hall): carpet up the
stair, railing stairs, a runner to the door, wainscoting, a checkered
kitchen floor, the museum's cases and statues in a show room, a deer's head
on a wall.

- **The grand stair** is carpeted up its middle two blocks (crimson, a gold
  border down the outside edge, a brass rod in each angle) with the
  handrail stairs on the outer two. The handrail stairs were already in the
  game and used nowhere; the rail on a plank wall beside the stair is gone.
  New blocks `carpeted_l_stairs` / `carpeted_r_stairs`: the stair's shape
  with its treads and risers drawn from a second tile
  (`_carpet_stairs_mesh` in `tools/build_block_library.gd`).
- **The great rug in nine pieces** (`rug_crimson_nw` .. `_se`: corners,
  edges, a middle) lays out to any size. Per manor, from its seed: a
  **runner** two wide from the bottom step to just inside the front door
  (45 in 100), **one great rug** six by four at the foot of the stair (40),
  or bare floor (15). A piece taken up gives an ordinary crimson rug.
- **Floors**: the ground-floor halls are black and white tiles
  (`checker_floor`, 55 in 100) or boards, no longer wall-to-wall carpet.
  Kitchens are always tiled.
- **Wainscot** (a prop, like a painting: walls are one block thick, so a
  panelled block would show in the next room too): one piece covers a bay
  (5 m), on every entrance-hall wall with no door in it, in four manors of
  five. A wall with a door in it gets none for now.
- **Stags' heads** (`deer_head`): over the front door looking up the hall
  (60 in 100), and here and there in studies, dining and drawing rooms and
  libraries, one to a room.
- **The trophy room**: in about three manors of four a downstairs store
  room (or else a bedroom or a second study) is the collection instead:
  display cases, statues, a suit of armour, a stag's head on each side
  wall. The cases can be searched like the museum's.
- All the new rolls come from the house's seed, not the shared random
  stream, so nothing else about a manor moves. In a manor already visited
  in a saved world, blocks that were saved keep their old look (the old
  stair, the carpet) while the new props appear.
- `tools/manor_hall_shots.gd` builds real manors on a bare, lit stage and
  photographs each hall variant (the pictures below: stage lighting, not
  the game's). `estate_test` checks the stair, the rug and floor against
  what the house rolled, the kitchen tiles and the trophy room's cases.
- 18 blocks appended (252); two props. Mistake on the way: two of the
  stair's four carpet faces were listed in the wrong place, which left
  holes where the risers should be; seen in the first close-up.
- Not done: wainscot on walls with doors, a medallion for the great rug's
  middle, the stair carpet carried on along the gallery.

![A great rug on tiles](/images/encyclopedia/game/screenshots__2026-10-07__manor_hall_great_rug.jpg)

*Development gameplay capture*
![A runner on tiles](/images/encyclopedia/game/screenshots__2026-10-07__manor_hall_runner_tiles.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-07/manor_hall_runner.png: A runner on boards, from the gallery; the stag over the door)*
*(image not bundled: docs/screenshots/2026-10-07/manor_stair_carpet.png: The stair carpet and handrail stairs)*
*(image not bundled: docs/screenshots/2026-10-07/manor_trophy_room.png: A trophy room)*
*(image not bundled: docs/screenshots/2026-10-07/manor_kitchen_tiles.png: Kitchen tiles)*
*(image not bundled: docs/screenshots/2026-10-07/manor_rug_tiles.png: The rug's pieces, the stair carpet, the tiles)*
*(image not bundled: docs/screenshots/2026-10-07/manor_stag_wainscot.png: The stag's head and a bay of wainscot)*
