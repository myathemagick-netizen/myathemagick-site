---
title: '128. The Glass Desert, step 3: the air and the sound'
description: 'The desert had no air of its own and no sound: it borrowed the plains'' birds. Now it has both. (The answer to "are there particles in the desert yet": until now, none.)'
section: development
kind: devlog
entry: 128
devlog_id: '128'
date: '2026-10-11'
session: Session 4 — The top rungs
tags:
  - desert
  - audio
images:
  - src: /images/encyclopedia/game/screenshots__2026-10-08__desert_sand_wind.jpg
    alt: Sand on the wind, low over the dunes, 3 in the afternoon
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-08__desert_sand_into_wind.jpg
    alt: 'Looking into the wind: the grains come at you'
    kind: game_screenshot
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-128-the-glass-desert-step-3-the-air-and-the-sound
source: Claude handoff · development/devlog-128-the-glass-desert-step-3-the-air-and-the-sound.md
related: []
updated: '2026-10-11'
---

# The Glass Desert, step 3: the air and the sound

The desert had no air of its own and no sound: it borrowed the plains' birds. Now it has
both. (The answer to "are there particles in the desert yet": until now, none.)

- **Sand on the wind** (a new `BiomeMotes` kind, like the Rustbelt's rust and the
  Sporelands' spores): 560 pale grains in a box 20 m square and 2 m deep that sits
  low over the ground (a new optional `box` and `y` for things that belong near the
  floor), carried east at 3.4 m/s on a wind that never drops, living 3 seconds each.
  My first version (170 grains, a 3 m box) was a dozen faint dots in a whole frame;
  the second hung too high and read as dust in the sky. Now it reads as sand hissing
  past low over the ground. On at all hours (the sand blows at night too), off indoors
  and underground.
- **A glint of sun on glass**: ten bright points at a time, each lasting a moment and
  appearing near the ground, **by day only (8:00-17:30)** and only in the desert
  (`BiomeMotes.set_sun()`, fed by the world once a second): sparse, never a screen
  full of sparkle, as the design says.
- **`amb_desert`**, the desert's ambience loop (it replaces the plains' day sound there, day
  and night). **The first version was wrong, and the way it was found is worth keeping.**
  I generated two 22 s takes (wind over sand, a creaking sheet of metal, a sign; 440
  ElevenLabs credits, 9.7 cents) and, since nobody here can hear, only matched their level.
  The author heard a buzz and a robotic quality. A spectrum check showed why: **a steady
  199 Hz tone (and its harmonics) in the generated audio itself**, before any processing, and
  the energy mostly in the hiss above 4 kHz where real wind sits low. A re-roll (660 credits)
  with a prompt that dropped the creak and the grain hiss came out as almost pure sub-200 Hz
  rumble. The author then tried the same prompts on ElevenLabs' own site and found that most of
  what it makes there has the same buzz or isn't the sound asked for: **the fault is on their
  end** (the sound-effects model is poor at ambient wind). So the author made some takes
  themselves, picked five by ear ("Soft dry desert wind" 1-4, "light desert breeze") and put them
  in `asset_src/music_inbox/`; those are what the game uses now, **10.9 s and 9.1 s** (shorter than
  the others'). They weren't made as loops, so each has its end crossfaded into its start
  (1.5 s, equal power) and a gain to the level of the other lands' ambience (rms 0.014);
  the step at the loop point went from 10-30 times an ordinary one to about the same as
  one. About 1,100 credits went on the two rejected generations (about 24 cents).
  **For next time: judge generated ambience by ear (send it, and trust "it buzzes"),
  not by level; or let the author pick takes from the website.**
- **Music**: two requests in `docs/music_requests.md` for the author's Suno, `music_desert_
  day` and `music_desert_night`, with style prompts. The desert plays the general music until
  they arrive.
- **A picture tool**: `tools/desert_shots.gd` goes to the middle of the nearest desert on
  the test seed and photographs the air at the hours you give it, in about a minute, so
  the look of a particle cloud doesn't need the whole of `desert_test`.
- `desert_test` checks the sand (low box, the desert only), the glint (ten, by day, gone at
  night while the sand blows on), nothing else in the air with them, none of it indoors,
  and that the ambience exists. `motes_test` counts six clouds; `audio_check` lists
  `amb_desert`.
- **Not done**: heat shimmer on the horizon, dust devils and storms (they want
  weather), footsteps raising a puff of sand. The ambience is the author's pick by ear; I
  haven't heard it.

![Sand on the wind, low over the dunes, 3 in the afternoon](/images/encyclopedia/game/screenshots__2026-10-08__desert_sand_wind.jpg)

*Development gameplay capture*
![Looking into the wind: the grains come at you](/images/encyclopedia/game/screenshots__2026-10-08__desert_sand_into_wind.jpg)

*Development gameplay capture*
