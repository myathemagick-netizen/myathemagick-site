---
title: '102. Hollow Manor: the wide hall, doors, the cellar and the panic vault'
description: 'Hollow Manor: the wide hall, doors, the cellar and the panic vault'
section: development
kind: devlog
entry: 102
devlog_id: '102'
date: '2026-10-06'
session: Session 4 — The top rungs
tags:
  - hollow wood
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-06__42_manor_hall_wide.jpg
    alt: The entrance hall
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-06__43_manor_gallery.jpg
    alt: From the gallery
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-102-hollow-manor-the-wide-hall-doors-the-cellar-and-the-panic-vault
source: Claude handoff · development/devlog-102-hollow-manor-the-wide-hall-doors-the-cellar-and-the-panic-vault.md
related: []
updated: '2026-10-11'
---

# Hollow Manor: the wide hall, doors, the cellar and the panic vault

- **Entrance hall**: three bays wide and two deep (14 by 9 m), open through
  the first floor. The grand stair is four wide with stone newel posts; a
  rail runs along the gallery each side of the stair head.
- **Doors** hang in six doorways in ten (real doors: they open and shut).
  The front door stands open.
- **Cellar**: a stone stair goes down from the hall behind the grand stair
  (east side) to three or four bays of low stone cellar: crates, hay, a
  candelabra, fungal mat creeping over the floor, a bloom or two.
- **Panic vault**: an old door in the cellar's east wall opens on a
  concrete corridor 13 m long, out under the lawn, to a six-by-six
  concrete vault: bed, strongbox, shelves, medicine cabinet, reinforced
  crate, desk, battery bank, lamp. The network has got in there too.
- **The other way out**: a concrete stair from the vault's far side up to
  an open well with a kerb in the lawn east of the house (so the vault can
  be found from outside).
- **Clocks tick**: `clock_tick` (ElevenLabs; one tick a second, a 6 s loop)
  plays from every grandfather clock, quietly, within about 12 m.
- **Music**: inside the house or under it, `music_manor` plays if it
  exists (prompts in `docs/music_requests.md`).
- Not yet: upper walkways, porch and bay windows, the roadside graveyards.
  The vault lamp is dark until its battery bank has charge.

![The entrance hall](/images/encyclopedia/game/screenshots__2026-10-06__42_manor_hall_wide.jpg)

*Development gameplay capture*
![From the gallery](/images/encyclopedia/game/screenshots__2026-10-06__43_manor_gallery.jpg)

*Development gameplay capture*
