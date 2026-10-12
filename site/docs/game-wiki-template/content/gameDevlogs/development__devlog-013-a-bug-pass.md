---
title: 13. A bug pass
description: 'Working through the known-issues list:'
section: development
kind: devlog
entry: 13
devlog_id: '13'
date: '2026-10-01'
session: Session 3 — Crafting by hand
tags: []
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-01__55_smaller_prompt.jpg
    alt: The smaller prompt
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-01__56_house_stairs_from_landing.jpg
    alt: From the landing at the foot of the stairs
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-013-a-bug-pass
source: Claude handoff · development/devlog-013-a-bug-pass.md
related: []
updated: '2026-10-11'
---

# A bug pass

Working through the known-issues list:

- **Blocks floating in ruined buildings: fixed.** The ruin pass removes
  blocks by height and noise, which can cut a piece of wall or roof off from
  everything below it. A new check (`tests/ruin_test.gd`) builds every
  building template at every ruin level over 16 seeds and counts solid
  blocks with no path down to the foundation or the ground: **271** before
  the fix. Now, after the ruin damage, a flood fill from the foundation keeps
  whatever is still connected and drops the rest: **0**.
- **"Furniture and props aren't saved in areas you haven't visited since
  they changed": not a bug (any more).** A new test (`tests/save_far_test.gd`)
  breaks a block, places a chair, searches a container and dismantles a
  piece of furniture, walks 420 m away until that area has unloaded, saves
  there, quits, loads and walks back: all four survive. It stays as a guard.
- **Oversized interaction prompts: fixed.** The prompt under the crosshair
  was 20 px and listed every action on one line. Now the main action is
  15 px, and the others ("[hold X] Pick up", "[hold RT] Dismantle") sit on
  a smaller, dimmer second line.
- **House stair placement: fixed.** The designer's complaint: the
  two-storey house's stairs started flush against the corner, with nowhere
  to stand in front of them, and ended at a wall. Both true: the flight ran
  along the back wall from the very corner and arrived exactly where the
  upstairs partition stood. The house couldn't get longer (15 m lots are
  already full that way), so it got **deeper** (9 to 12 blocks, filling the
  lot). The flight now climbs the left side wall toward the back, with a
  **clear landing at its foot** and an **open landing at the top**, and
  **railings** upstairs along the opening and across its near end. The step
  test now starts each house lane on the landing and walks up from there,
  in a plain and a rotated house; the apartments' switchback stairs are
  unchanged.

![The smaller prompt](/images/encyclopedia/game/screenshots__2026-10-01__55_smaller_prompt.jpg)

*Development gameplay capture*
![From the landing at the foot of the stairs](/images/encyclopedia/game/screenshots__2026-10-01__56_house_stairs_from_landing.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-01/57_house_stairs_top_landing.jpg: The top landing, railings round the opening)*
