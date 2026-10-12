---
title: 42. Streets and the lived-in touches
description: 'Towns had buildings and bare roads. Now the streets have what streets have (SettlementLayout.townprops, the same every time; RoadProps spawns them, nearest first, with the country roads'' cars and signposts):'
section: development
kind: devlog
entry: 42
devlog_id: '42'
date: '2026-10-03'
session: Session 4 — The top rungs
tags: []
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-03__61_street.jpg
    alt: 'A street: lamps, the bus stop, a mailbox, a poster'
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-03__62_yard_and_kerb.jpg
    alt: 'At the kerb: a phone box and a mailbox'
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-042-streets-and-the-lived-in-touches
source: Claude handoff · development/devlog-042-streets-and-the-lived-in-touches.md
related: []
updated: '2026-10-11'
---

# Streets and the lived-in touches

Towns had buildings and bare roads. Now the streets have what streets have
(`SettlementLayout.town_props`, the same every time; RoadProps spawns them,
nearest first, with the country roads' cars and signposts):

- **Street lamps** along every kerb, dead, rust up their poles.
- **Traffic lights** on some crossings; a car or two left in the lanes.
- **A bus stop** in every town: a shelter, its glass mostly gone, a
  timetable and a washed-out advert, a bench to sit on.
- **Benches** in front of the landmarks.
- Here and there at the kerb: **fire hydrants**, red **post boxes**
  (letters nobody collected: old newspapers, journals, field notes),
  **phone boxes** (wire, a battery), **newspaper boxes**, bins, and
  **shopping carts** (more of them outside the shops).
- **Billboards** out past the edge of town, facing in, their adverts
  peeling.
- **Yards:** small houses have a **mailbox** at the front gate, and maybe a
  **barbecue grill** (coal), a **washing line** (clothes never brought in),
  a **kid's bike** or a **garden gnome** down the side.

**Posters** on the street walls of houses, shops, flats and offices: a
missing woman, the evacuation notice, a concert that never happened.
**Calendars** and **wall clocks** in homes and offices, all stopped. Look at
them ("Read" / "Look") and they say what they say: a new "look" use for
props, which shows the prop's text every time.

**Old newspapers** (newspaper boxes, post boxes, mailboxes, phone boxes):
hold one and press LT to read the front page, one of fourteen headlines
from the last weeks, from the strange bloom in the river valley to the last
edition; a little Communication, and then it's pulp.

The buildings doc has a **Streets and yards** section listing all of it.

![A street: lamps, the bus stop, a mailbox, a poster](/images/encyclopedia/game/screenshots__2026-10-03__61_street.jpg)

*Development gameplay capture*
![At the kerb: a phone box and a mailbox](/images/encyclopedia/game/screenshots__2026-10-03__62_yard_and_kerb.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-03/63_poster.jpg: A poster on a shop front, read)*
*(image not bundled: docs/screenshots/2026-10-03/64_street_props_a.jpg: Street lamp, traffic light, bus stop, bench, hydrant, post box, phone box)*
*(image not bundled: docs/screenshots/2026-10-03/65_street_props_b.jpg: Newspaper box, shopping cart, billboard, mailbox)*
*(image not bundled: docs/screenshots/2026-10-03/66_yards_posters_clocks.jpg: Grill, washing line, bike, gnome, three posters, calendar, clock)*

`tests/streets_test.gd`: the home town's plan (lamps on the road and never
in the water, one bus stop, lights, billboards, benches, the small things,
mailboxes; the same every time); walking in, they're standing there; a
newspaper box, reading a newspaper; a mailbox; posters on a shop front that
read; calendars and clocks.
