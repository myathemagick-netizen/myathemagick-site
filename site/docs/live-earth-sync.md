# Future Live Earth Sync feature

## Current state

The homepage Earth Sync strip was removed on October 6, 2026 because its displayed values were static, not a live feed. It showed 7.83 Hz, Kp 2, 412 km/s, and 4 Ajaw. These should not be restored as current readings. Audio Shear Zone remains discoverable in the homepage tools section.

## Intended return

Consider a compact Earth conditions panel on the Tools page or a dedicated Earth Sync page, with an optional homepage summary once it is reliable. Placement should complement Audio Shear Zone rather than repeat its link.

## Data and presentation requirements

- Choose and verify a legitimate source and permitted use for every measurement before implementation.
- Investigate NOAA space-weather feeds for geomagnetic Kp and solar-wind data. Verify endpoint availability, timestamps, units, CORS, and refresh limits when building the feature.
- Schumann 7.83 Hz is a nominal reference frequency, not proof of a current measured resonance. A genuine Schumann feed needs an identified monitoring station, timestamps, measurement definitions, and permission to use its data. Otherwise show a clearly labelled reference value or omit it.
- Tzolkin would be a date-based calculation rather than a sensor feed. Confirm the intended calendar correlation and date/time convention with the owner before displaying it.
- Every live value needs its source, observation time, units, and freshness state. Distinguish loading, current, delayed/stale, and unavailable states.
- Failed requests must never silently fall back to plausible-looking fixed values. Show unavailable or a clearly dated cached reading.
- Keep body text and freshness information readable, and support keyboard and mobile use.

## Implementation considerations

The site is static Astro. First assess whether browser requests are supported by the chosen data provider. If a proxy or cache is needed, design it separately using the existing hosting context, with bounded refreshes and no credentials in frontend code. Avoid rebuilding/deploying the whole site on each data refresh. Keep the preview local until the owner approves publication.

## Acceptance checklist

Before restoring the feature, verify real data across successful requests, missing fields, old timestamps, offline connections, and provider failures. Confirm source attribution, date handling, accessibility, and any ongoing service costs. A working live feed—not a decorative status indicator—is the prerequisite.
