---
title: 86. Fashion milestones (a secret chain)
description: Fashion milestones (a secret chain)
section: development
kind: devlog
entry: 86
devlog_id: '86'
date: '2026-10-05'
session: Session 4 — The top rungs
tags: []
images: []
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-086-fashion-milestones-a-secret-chain
source: Claude handoff · development/devlog-086-fashion-milestones-a-secret-chain.md
related: []
updated: '2026-10-11'
---

# Fashion milestones (a secret chain)

- Five new milestones for dressing head to toe, with a bag on your back.
  All six gear slots must hold gear of the tier or better; a higher tier
  counts for a lower one.

| Milestone | Tier | Reward |
|---|---|---|
| **Spore Couture** | Spore | a wardrobe |
| **Sprout and About** | Sprout | a sewing machine and cloth |
| **Mycelial Fashion** | Mycelial | a portrait of someone very well dressed |
| **Fruiting Fashionista** | Fruiting | a textile machine |
| **In Bloomers** | Bloom | a statue and spore lanterns |

- Only Spore Couture shows at first. Each of the others stays hidden
  (`Milestones.HIDDEN_UNTIL`) until the one before is earned. Wear Fruiting
  gear straight away and three come at once.
- The Journal's "Found out" page counts only the milestones you can see.
- Icons: a tunic on a hanger in each tier's colour. `journal_test` checks
  the chain.
- Milestone ideas from the playtests: thanks to the player.
