---
title: 53. The Journal, and milestones
description: 'The Journal tab is now a book of pages, each with its symbol across the top:'
section: development
kind: devlog
entry: 53
devlog_id: '53'
date: '2026-10-04'
session: Session 4 — The top rungs
tags:
  - research
  - interface
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-04__23_milestone_claimed.jpg
    alt: A milestone claimed
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-04__24_milestone_locked.jpg
    alt: 'Not yet: ???'
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-053-the-journal-and-milestones
source: Claude handoff · development/devlog-053-the-journal-and-milestones.md
related: []
updated: '2026-10-11'
---

# The Journal, and milestones

The Journal tab is now a book of pages, each with its symbol across the top:

- **Mushrooms**: what each wild mushroom you've eaten did to you.
- **Brews**: the brews you've drunk.
- **Places**: each kind of place you've found, how many, and a little of
  what it was.
- **Lore**: everything you've had in hand, searched or taken apart, listed
  down the left with its picture; on the right what's known of it (items
  and blocks their descriptions; furniture what it holds and comes apart
  into; a few things, like the dinosaurs, a story of their own).
- **Milestones** (trophy): twelve things worth doing, each with its own
  symbol; progress always shown, the reward a padlock and ??? until it's
  earned. Earned, you're told once ("Claim your reward in the Journal"),
  and it waits there: **Claim** gives it only if it all fits in your pack
  ("No room in your pack. Make some, then claim it: it waits here"), so a
  full pack never drops it on the ground.
- **Found out**: the tallies.

| Milestone | To do | Reward |
|---|---|---|
| Palaeontologist | take apart all four dinosaurs | a mounted tyrannosaur |
| Bibliophile | find all 14 rare books | a rare-book case, a reading table |
| Field Naturalist | read all 8 field notes | a card catalogue, 10 marker flags |
| Cartographer | find a town, museum, library, hospital, farmstead, quarry, old mine | 2 signposts, a fountain |
| Mycologist | learn all 11 wild mushrooms | 4 spore lanterns, a garden gnome |
| Brewmaster | drink 12 different brews | 4 glass flasks |
| Reclaimer | seed 25 dirt with spores | 2 mushroom logs, 16 spores |
| Scavenger | search 200 things | a steel pry bar, a vending machine |
| Last Edition | read all 14 front pages | a newspaper box, a phone box |
| Lights On | make a Stormcap | 4 electric lamps |
| Scholar | reach Fruiting in any field | a stone bust |
| Master of All | Fruiting in every field | a statue and a fountain |

The trophy rewards are the world's own furniture made placeable (11 new
items, their icons drawn down from the props' pictures). Counters and
claimed milestones are saved with the world. Newspapers now favour front
pages you haven't read.

![A milestone claimed](/images/encyclopedia/game/screenshots__2026-10-04__23_milestone_claimed.jpg)

*Development gameplay capture*
![Not yet: ???](/images/encyclopedia/game/screenshots__2026-10-04__24_milestone_locked.jpg)

*Development gameplay capture*
*(image not bundled: docs/screenshots/2026-10-04/25_journal_lore.jpg: Lore)*
*(image not bundled: docs/screenshots/2026-10-04/26_journal_places.jpg: Places)*
*(image not bundled: docs/screenshots/2026-10-04/27_journal_found_out.jpg: Found out)*
*(image not bundled: docs/screenshots/2026-10-04/28_journal_icons.jpg: The Journal's symbols)*

`tests/journal_test.gd`: every milestone complete and real; progress counts;
told once; claiming; a full pack keeps it waiting (nothing dropped); the
Lore page; ??? before it's earned.
