---
title: 143. Nine sounds regenerated
description: 'More playtest notes: buzz in brushgrass1 and 2, sporespuff3, squirrelscamper2, stepfungal1 and 3; the two squirrel chatters were just a shrill tone; stepfungal2 sounded like digging, not squishy fungus. All regenerated with Eleven...'
section: development
kind: devlog
entry: 143
devlog_id: '143'
date: '2026-10-11'
session: Session 4 — The top rungs
tags:
  - audio
  - creatures
  - tools and tests
images: []
note: date is the commit date of the entry's heading in docs/devlog.md and may be later than the work itself
sourceStatus: published
route: /game/development/devlog-143-nine-sounds-regenerated
source: Claude handoff · development/devlog-143-nine-sounds-regenerated.md
related: []
updated: '2026-10-11'
---

# Nine sounds regenerated

More playtest notes: buzz in `brush_grass_1` and `_2`, `spores_puff_3`, `squirrel_scamper_2`, `step_fungal_1` and `_3`; the two squirrel chatters
were just a shrill tone; `step_fungal_2` sounded like digging, not squishy fungus. All regenerated with ElevenLabs with sharper prompts (the
squirrel as "rapid throaty chittering, ticking and clucking barks", the step as "a boot pressing a spongy, squishy mushroom: a wet squelch with a small
air pop, not digging"), each prompt asked for several takes and each take **measured** (loudest tone against the median, the 200 Hz band, the
noise in the gaps, how bright it is) before one was picked: one fungal take had a 200 Hz tone 81 times the median and was thrown out; the new chatters
are 2 to 3.5 kHz instead of 5.4 kHz bright. Every installed take is also **high-passed** (250 to 600 Hz, below where the sound lives), gated in the gaps,
trimmed and levelled to the old peak (`asset_src/tools/install_take.py`). About 950 credits. I can't hear them: the measurements say they're cleaner, not that they
sound right. The first squirrel prompt ('clucking') made it sound like a chicken, so the two chatters were done again from the author's wording, "scared squirrel noises", plus the quality cues from the ElevenLabs community ("clear, professional Foley recording, clean isolated cinematic quality"). The 'scared squirrel' takes were too loud and sounded tortured, so the chatters were done a third time with "a quiet, nervous little chirp... gently worried, not screaming" and levelled by loudness (rms 0.032, about half), not by their highest spike. **Removing the buzz**: `asset_src/tools/clean_hum.py` now has `denoise` (spectral subtraction: the steady background is learned from the quietest frames and taken away bin by bin), `comb` (finds the hum's pitch near 200 Hz and notches it and its multiples up to 4 kHz) and the high-pass and gate; `install_take.py` runs all of them. They measurably cut a pure 200 Hz tone (about 2x on a grass take) but on very short clips the background can't be learned well, so a broadband buzz isn't guaranteed gone: I can't hear it. Left alone because they weren't reported: `brush_grass_3`, `spores_puff_1`, `_2`, `squirrel_chatter_3`, `squirrel_scamper_1`, `_3`.
