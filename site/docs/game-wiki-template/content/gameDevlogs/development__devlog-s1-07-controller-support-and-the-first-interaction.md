---
title: 7. Controller support and the first interaction
description: 'Playtesting on an Xbox controller showed that only the left stick worked. The game now has proper input actions (all rebindable in Project Settings):'
section: development
kind: devlog
entry: 7
devlog_id: s1:7
date: '2026-09-30'
session: Session 1 — From one brown cube to a ruined town
tags:
  - interface
  - tools and tests
images:
  - src: /images/encyclopedia/game/screenshots__2026-09-30__23_controls_door_prompt.jpg
    alt: Door prompt
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-09-30__24_controls_door_open.jpg
    alt: Door open
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-s1-07-controller-support-and-the-first-interaction
source: Claude handoff · development/devlog-s1-07-controller-support-and-the-first-interaction.md
related: []
updated: '2026-10-11'
---

# Controller support and the first interaction

Playtesting on an Xbox controller showed that only the left stick worked. The
game now has proper input actions (all rebindable in Project Settings):

| Action | Controller | Keyboard / mouse |
|---|---|---|
| Move | Left stick | WASD / arrows |
| Look | Right stick (fine aim near centre) | Mouse |
| Jump | A | Space |
| Sprint | Click left stick (toggle) or hold LB | Shift |
| Interact | X | E |
| Release mouse (future pause) | Start | Esc |

Doors became the first thing you can interact with: they block the doorway,
a crosshair prompt appears when you look at one, and they swing open *away*
from you. An automated test walks up to the nearest door, checks the prompt,
opens it, and drives the right stick and jump through the same input actions
a controller uses.

![Door prompt](/images/encyclopedia/game/screenshots__2026-09-30__23_controls_door_prompt.jpg)

*Development gameplay capture*
![Door open](/images/encyclopedia/game/screenshots__2026-09-30__24_controls_door_open.jpg)

*Development gameplay capture*

First controller playtest: the doors opened, but the player couldn't fit
through them. The collision capsule was Godot's default, 1 m wide and 2 m
tall, going through doorways exactly 1 × 2 m. It's now person-sized
(0.6 m × 1.8 m), with the camera raised from the capsule's middle to eye
height (~1.6 m), which also makes the world feel the right scale. The door
test now walks through the doorway, and to prove the check works it was run
once against the old capsule, which got stuck 1 m short of the door.

*(image not bundled: docs/screenshots/2026-09-30/25_fit_eye_height_door.jpg: Eye height at a door)*
*(image not bundled: docs/screenshots/2026-09-30/26_fit_walked_through_door.jpg: Walked through)*

Next, ledges. Building floors sit one block above the street, and the hills
are made of one-block terraces, so the player now **auto-steps** up ledges of
up to one block. When they walk into a ledge on the ground with headroom
above and space on top, they're lifted onto it and the camera eases up
rather than snapping. Walls two blocks tall and closed doors still stop you.

Buildings also got a **stoop**: a half-height slab, then a full landing, up
to the door. That needed the first non-cube blocks, concrete and plank slabs
half a block tall with matching collision. Brick houses get concrete steps;
siding and timber houses get wooden ones.

A step test builds a small course on flat ground with the real player: a
one-block ledge that must be climbed, a two-block wall that must stop them,
and a house whose stoop and door they must walk up and through. On its first
run the player fell through the world. The test had placed the course
before that part of the terrain finished loading, and Godot quietly
re-enables physics on nodes entering the scene tree. Both fixed, both lanes
pass, and a control run with auto-step switched off fails at the ledge and
at the foot of the stoop, as it should.

*(image not bundled: docs/screenshots/2026-09-30/27_stoop_plank_steps.jpg: Plank stoop)*
*(image not bundled: docs/screenshots/2026-09-30/28_stoop_player_view_door_open.jpg: Up the stoop)*
*(image not bundled: docs/screenshots/2026-09-30/29_town_street_with_stoop.jpg: Street with a stoop)*
*(image not bundled: docs/screenshots/2026-09-30/30_town_block_with_stoops.jpg: Town block with stoops)*

Playtesting found the next snag: you couldn't climb the stairs inside
houses. The stairwell hole in the ceiling only covered the second and third
steps, and auto-step checks for head room *before* moving forward. Standing
on the first step puts your head three blocks under the solid ceiling, so the
check hit the block above that step and refused. The hole now spans all
three steps. A third test lane stands the player on the first stair and walks
them up. It failed first, stuck at step one exactly as in the playtest, and
passes after the fix, arriving on the upper floor.

*(image not bundled: docs/screenshots/2026-09-30/31_stairwell_from_first_step.jpg: Stairwell)*
*(image not bundled: docs/screenshots/2026-09-30/32_stairs_reached_upper_floor.jpg: Upper floor)*

Then the stairs themselves got an upgrade: real **stair blocks**, with a
half step and a full step inside one block, in place of stacked cubes. They
are the first custom-shaped blocks, meshes generated in code with the atlas
texture projected per face so the wood grain lines up with neighbouring
blocks, and matching two-box collision. A stair has a direction, so there's a
block per facing, and when a building is rotated the stamper turns its stairs
with it. The front stoops became a row of stair blocks with a short concrete
path in front.

Half steps exposed a subtle movement bug. The step-up lifted the player just
far enough to land on the rounded *edge* of the next step, where the capsule
slid back off and retried, so climbing looked like stuttering. Carrying the
player slightly past the edge fixed that but made stairs twice as fast as
walking (10 m/s). The fix was to "pay back" the extra distance over the next
frames, which brings climbing to 5.2 m/s against 5.0 m/s on flat ground.
The step test now has four lanes, including climbing the stairs of a house
rotated 90°, and all pass.

*(image not bundled: docs/screenshots/2026-09-30/33_stair_block_stoop.jpg: Stair-block stoop)*
*(image not bundled: docs/screenshots/2026-09-30/34_stair_blocks_indoors.jpg: Stair blocks indoors)*
*(image not bundled: docs/screenshots/2026-09-30/35_stair_blocks_rotated_house.jpg: Rotated house stairs)*

The three-storey apartments had their own stair bug: every flight was built
in the same place, so the second flight's solid base sat exactly where the
first one arrived, and you walked into a concrete block at the top. The stairs
are now a **switchback**, like a real stairwell: odd flights rise the other
way in the row beside the one below, starting right where the last one ends.
Furniture keeps out of the whole stairwell.

Climbing it in the test exposed one more thing: stepping into the second
flight slightly off-centre, the player's head clipped the edge of the ceiling
beside the stairwell opening by a few centimetres, and the step-up refused.
Players cut corners all the time, so step-up now does *corner correction*
(a platformer staple): if only the edge of an opening is in the way, it nudges
you sideways into the opening instead of stopping you. A fifth test lane
climbs an apartment from the ground floor to the top.

*(image not bundled: docs/screenshots/2026-09-30/36_apartment_switchback_second_flight.jpg: Apartment switchback)*

Playtesting the switchback showed the real problem was design, not
geometry: there were no **landings**. You went straight from the floor onto a
stair, and at the top had to climb over the next flight to get into the room.
Stairs need flat ground at the bottom, a landing at the top, and room to turn.

The apartment block was redesigned around an **enclosed stairwell**, which is
also more interesting to explore. The street door opens onto a ground-floor
landing. Each storey is a short flight up to a mid-landing (a flat
turnaround), then a flight back the other way to the next floor's landing, and
every landing has a door into that floor's own flat. The stairwell is drawn as
shared space (painted drywall, concrete floors) so it reads differently from
the carpeted, wallpapered flats. The building grew from 13 to 15 m wide to fit
a two-wide stairwell beside a two-room flat. Every stand point was checked for
head room so no flight sits under the next one. The test lane now walks the
building like a player: up, across the mid-landing, up, across the landing,
repeat, to the top floor.

*(image not bundled: docs/screenshots/2026-09-30/37_stairwell_landing_flight_midlanding.jpg: Stairwell from the street door)*
*(image not bundled: docs/screenshots/2026-09-30/38_stairwell_looking_up_the_well.jpg: Up the stairwell)*

A polish round: railings, furniture collision and a pause menu.

**Railings** are thin panels on one edge of a block, metal in apartments
and wood on houses. Working out where they were needed meant tracing every
drop in the stairwell, and the only real fall turned out to be beside the
top of the last flight, where no stairs continue upward. Elsewhere the
"drop" is just the next flight going up. Stoops got railings on both sides,
which turned them into little porches. A test caught the player stepping
*over* a railing. Godot's voxel collision comes from a block's visible mesh,
so a railing can't be taller than one block for physics. Auto-step now
simply refuses to climb railings.

**Furniture collision**: every furniture piece gets a box fitted to its
model, so you can no longer walk through sofas. The first test run had the
player climbing onto kitchen counters by walking into them, so auto-step now
ignores furniture and doors (you can still jump up if you want).

**Pause menu** (Start / Esc): Resume, Settings, Quit. Settings has mouse
sensitivity, stick look speed, field of view and invert-Y, saved between
sessions. It's fully usable with a controller. There's no UI design yet, so
it's a deliberately plain placeholder in the game's palette, with all its
styling in one function for an easy restyle later. One lesson: the menu test
quietly saved its changed settings into the real game's settings file
(tests and the game share Godot's user folder). The test now restores
whatever was there.

*(image not bundled: docs/screenshots/2026-09-30/39_stoop_with_railings.jpg: Stoop with railings)*
*(image not bundled: docs/screenshots/2026-09-30/40_pause_menu.jpg: Pause menu)*
*(image not bundled: docs/screenshots/2026-09-30/41_pause_settings.jpg: Settings)*

Controller playtest of the pause menu: you could open it and move between
buttons, but **A did nothing**. Godot's built-in "accept" action has no
gamepad binding by default, and the menu test had sent the action directly,
so it never noticed. A and B are now bound, and the test sends real gamepad
button presses. Resuming with A also no longer makes you jump.

The railings got rethought after a look at Macaw's Stairs for Minecraft:
railings on stairs should run **diagonally with the steps**, not float above
them. There's now a family of stair blocks with built-in handrails on the
left, right or both sides (wood and metal, every facing). The rail is
voxel-stepped to follow the slope, with posts and balusters down to the
treads, and it joins up across a flight. Horizontal railings gained corner
pieces for balconies, which malls and other big multi-storey buildings will
need. Stoops and the stairwell use the new rail stairs.

Making them work took three fixes. Building the stair and its rail as one
mesh at first silently dropped the rail. Rail parts above the block sampled
the neighbouring texture tile (sand-coloured rails). And the voxel engine
only builds collision *inside* a block's cell, so the handrail rising above
its step was see-through to physics: the test player walked straight
through it. The fix is an invisible collision-only "guard" block in the cell
above, which makes the rail solid where you'd lean on it.

*(image not bundled: docs/screenshots/2026-09-30/42_railing_set_overview.jpg: Railing set)*
*(image not bundled: docs/screenshots/2026-09-30/43_railing_balcony_corners.jpg: Balcony corners)*
*(image not bundled: docs/screenshots/2026-09-30/44_stoop_diagonal_handrails.jpg: Stoop handrails)*
*(image not bundled: docs/screenshots/2026-09-30/45_stairwell_flight_handrail.jpg: Stairwell handrail)*
