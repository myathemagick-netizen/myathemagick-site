---
title: 100. Fixes from a half-hour playthrough (the author's notes)
description: 'Not changed: "Transcribe a Diary" (the code does add the 30 pages it says); things in mid-air in ruined towns (not reproduced); a town in a Hollow Wood with no manor (estates need room: see §96).'
section: development
kind: devlog
entry: 100
devlog_id: '100'
date: '2026-10-06'
session: Session 4 — The top rungs
tags:
  - hollow wood
images: []
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-100-fixes-from-a-half-hour-playthrough-the-author-s-notes
source: Claude handoff · development/devlog-100-fixes-from-a-half-hour-playthrough-the-author-s-notes.md
related: []
updated: '2026-10-11'
---

# Fixes from a half-hour playthrough (the author's notes)

| Note | What changed |
|---|---|
| Sitting at a picnic table put you inside it | you sit on its near bench, facing the table, and stand up clear of it |
| Crushing stone | masonry bench: Crush Stone into Gravel (x2), Crush Gravel into Sand (x2, Masonry 1) |
| Office: no landing at the foot of the stairs | the switchback stairs in tall buildings start one cell in from the wall |
| M for the map | M opens the Journal at its Map page; M again closes it |
| Standing on a campfire did nothing | it burns: 4 health every half second while you stand in it |
| Door too loud | door-open takes levelled (one was clipping at 1.3), and the door plays 7 dB quieter |
| Apartments: furniture blocked the way in | the cells inside each flat's door, and a path through to the far room, are kept clear |
| A squirrel noise too loud | the chatter takes levelled to the same peak |
| Library: key hints on the panel, not in the corner | its hints are in the corner with every other screen's |
| Crude maps taught too much Cartography | 10 a map down to 3 |
| A night sound that's one long tone | `amb_night_2` was a steady 10 kHz whine (half its energy in one tone): dropped. `amb_night_1` was nearly silent: brought up |

Not changed: "Transcribe a Diary" (the code does add the 30 pages it says);
things in mid-air in ruined towns (not reproduced); a town in a Hollow Wood
with no manor (estates need room: see §96).
