---
title: World
description: 'Game systems: world.'
section: systems
kind: systems-group
slug: world
updated: '2026-10-11'
images:
  - src: /images/encyclopedia/game/screenshots__2026-09-30__01_block_atlas.jpg
    alt: Block atlas (01 block atlas)
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-01__58_biome_map.jpg
    alt: 'The biome map: plains, woodland (dark), wetland (teal-green), highlands (grey), bloom (pale)'
    kind: game_screenshot
  - src: /images/encyclopedia/game/buildings__apartment.jpg
    alt: (apartment)
    kind: game_render
  - src: /images/encyclopedia/game/buildings__museum.jpg
    alt: (museum)
    kind: game_render
  - src: /images/encyclopedia/game/buildings__roadside_dressing.jpg
    alt: (roadside dressing)
    kind: game_render
  - src: /images/encyclopedia/game/buildings__roadside_dressing.jpg
    alt: (roadside dressing)
    kind: game_render
  - src: /images/encyclopedia/game/screenshots__2026-10-05__01_mountain_range.jpg
    alt: A mountain range
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-05__10_rustbelt_day.jpg
    alt: The Rustbelt by day
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-06__09_hollow_day.jpg
    alt: The wood by day
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-06__52_motes_spores.jpg
    alt: Spores over the Sporelands
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-08__desert_blackglass_close.jpg
    alt: Closer (desert blackglass close)
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-11__station_doc_variants.jpg
    alt: (station doc variants)
    kind: game_screenshot
  - src: /images/encyclopedia/game/screenshots__2026-10-01__48_building_after_spread.jpg
    alt: ...and after the vines have had a while (sped up)
    kind: game_screenshot
sourceStatus: mixed
route: /game/systems/world
source: Claude handoff · systems/world.md
related: []
---

# World


## Voxel world and terrain
<a id="voxel-world-and-terrain"></a>

**Status:** Implemented

A destructible, rebuildable voxel world (1 block = 1 m): hills, lakes, rivers with bridges, caves, deep stone and ores, all generated from the world seed.

**Limits:** Generation is single-seed; no multiplayer. A compiled (C++) generator is filed as a performance idea.

**See also:** [Ten biomes (lands)](/game/systems/world#ten-biomes-lands), [Mining and metallurgy](/game/systems/engineering#mining-and-metallurgy)

**Development:** [s1:1](/game/development/devlog-s1-01-a-block-palette-for-the-end-of-the-world), [s1:3](/game/development/devlog-s1-03-into-godot), [s1:8](/game/development/devlog-s1-08-water-and-the-start-of-biomes), [30](/game/development/devlog-030-mining-part-a-what-s-under-your-feet), [31](/game/development/devlog-031-mining-part-b-metallurgy-caves-the-dark-quarries-and-old-mines)

![Block atlas (01 block atlas)](/images/encyclopedia/game/screenshots__2026-09-30__01_block_atlas.jpg)

*Development gameplay capture*


## Ten biomes (lands)
<a id="ten-biomes-lands"></a>

**Status:** Implemented

Ten lands, each with its own ground, plants, sky, sound and music: Overgrown Plains, Autumn Fields, Woodland, Wetland, Rocky Highlands, Mountains, Rustbelt, Hollow Wood, Sporelands, Glass Desert.

**Limits:** The first five are the baseline lands, with less hand-made content than the last five. No weather yet.

**See also:** [Country roads](/game/systems/world#country-roads), [Towns and buildings](/game/systems/world#towns-and-buildings)

**Development:** [14](/game/development/devlog-014-biomes), [59](/game/development/devlog-059-the-sporelands-a-title-slideshow-music-by-hand-over), [64](/game/development/devlog-064-the-autumn-fields-drive-ins-and-squirrels), [77](/game/development/devlog-077-the-mountains-step-1-of-3-terrain-snow-caves-ore-plants), [82](/game/development/devlog-082-the-rustbelt-step-1-of-3-the-land-the-sky-the-foul-water), [94](/game/development/devlog-094-the-hollow-wood-step-1-the-wood-itself), [123](/game/development/devlog-123-the-glass-desert-step-1-the-land)

![The biome map: plains, woodland (dark), wetland (teal-green), highlands (grey), bloom (pale)](/images/encyclopedia/game/screenshots__2026-10-01__58_biome_map.jpg)

*Development gameplay capture*


## Towns and buildings
<a id="towns-and-buildings"></a>

**Status:** Implemented

Procedural towns on a road grid, stamped from authored building templates (houses, apartments, offices, data centres, shops, post office, hospital, museum, library, farmhouses, barns, factory halls, warehouses...). Every building can roll a ruin stage and a mycelial growth stage, so no two feel alike.

**Limits:** Ruin and growth are applied per building at generation; buildings do not change as you watch.

**See also:** [Landmarks: museum, library, hospital](/game/systems/world#landmarks-museum-library-hospital), [Furniture, containers and loot](/game/systems/world#furniture-containers-and-loot)

**Development:** [s1:4](/game/development/devlog-s1-04-buildings-templates-themes-ruin-and-growth), [s1:6](/game/development/devlog-s1-06-a-world-with-towns), [39](/game/development/devlog-039-themed-shops-with-signs), [40](/game/development/devlog-040-landmarks-the-museum-and-the-library), [41](/game/development/devlog-041-hospitals-offices-data-centres-more-dinosaurs-and-the-buildings-doc), [42](/game/development/devlog-042-streets-and-the-lived-in-touches), [43](/game/development/devlog-043-parks-fences-graffiti-aerials)

![(apartment)](/images/encyclopedia/game/buildings__apartment.jpg)

*Engine structure render · not a player-view screenshot*


## Furniture, containers and loot
<a id="furniture-containers-and-loot"></a>

**Status:** Implemented

Furniture and containers can be searched for what people left (food, cloth, parts, batteries, books, field notes), opened, dismantled for parts, or picked up; loot depends on what the furniture is and the building around it; better variants and food quality vary by container.

**Limits:** Loot tables are tuned by feel and may change.

**See also:** [Towns and buildings](/game/systems/world#towns-and-buildings)

**Development:** [s1:5](/game/development/devlog-s1-05-furniture-and-doors), [s1:10](/game/development/devlog-s1-10-foraging-and-scavenging), [19](/game/development/devlog-019-furniture-that-opens-better-furniture-and-a-better-reference), [38](/game/development/devlog-038-field-notes-hidden-recipes-and-a-lot-more-to-scavenge)


## Landmarks: museum, library, hospital
<a id="landmarks-museum-library-hospital"></a>

**Status:** Implemented

Each town has a museum and/or library on a whole city block (skeleton atrium, glass cases, three floors of stacks, rare books) and a hospital with wards and a pharmacy.

**Limits:** Skeletons are a fixed set of four dinosaurs.

**See also:** [Research books and knowledge](/game/systems/research#research-books-and-knowledge), [Furniture, containers and loot](/game/systems/world#furniture-containers-and-loot)

**Development:** [40](/game/development/devlog-040-landmarks-the-museum-and-the-library), [41](/game/development/devlog-041-hospitals-offices-data-centres-more-dinosaurs-and-the-buildings-doc)

![(museum)](/images/encyclopedia/game/buildings__museum.jpg)

*Engine structure render · not a player-view screenshot*


## Country roads
<a id="country-roads"></a>

**Status:** Implemented

Roads between neighbouring towns that follow the land, decay with distance, cross rivers on bridges and carry car lines, signposts, roadside lots (farmsteads, quarries, old mines, drive-ins, service stations) and gas adverts.

**Limits:** Roads never enter the deep Glass Desert.

**See also:** [Roadside places](/game/systems/world#roadside-places)

**Development:** [15](/game/development/devlog-015-country-roads), [26](/game/development/devlog-026-farmsteads-along-the-roads), [64](/game/development/devlog-064-the-autumn-fields-drive-ins-and-squirrels), [133](/game/development/devlog-133-the-glass-desert-step-6-the-service-station), [134](/game/development/devlog-134-gas-signs-and-billboards)

![(roadside dressing)](/images/encyclopedia/game/buildings__roadside_dressing.jpg)

*Engine structure render · not a player-view screenshot*


## Roadside places
<a id="roadside-places"></a>

**Status:** Implemented

Farmsteads with a wild field, quarries, old mines, drive-in cinemas, pumpkin stands, and service stations at the edge of the desert.

**Limits:** Station count depends on how many roads meet the desert's margin.

**See also:** [Country roads](/game/systems/world#country-roads)

**Development:** [26](/game/development/devlog-026-farmsteads-along-the-roads), [31](/game/development/devlog-031-mining-part-b-metallurgy-caves-the-dark-quarries-and-old-mines), [64](/game/development/devlog-064-the-autumn-fields-drive-ins-and-squirrels), [133](/game/development/devlog-133-the-glass-desert-step-6-the-service-station)

![(roadside dressing)](/images/encyclopedia/game/buildings__roadside_dressing.jpg)

*Engine structure render · not a player-view screenshot*


## Mountains
<a id="mountains"></a>

**Status:** Implemented

Ranges with snow above the snowline, caves, ore seams, fire lookouts on summits with trails, stone huts, cairns, and mountain goats.

**See also:** [Cold and warmth](/game/systems/survival#cold-and-warmth), [Mining and metallurgy](/game/systems/engineering#mining-and-metallurgy)

**Development:** [77](/game/development/devlog-077-the-mountains-step-1-of-3-terrain-snow-caves-ore-plants), [78](/game/development/devlog-078-the-mountains-step-2-of-3-lookouts-cairns-trails-huts), [79](/game/development/devlog-079-the-mountains-step-3-of-3-mountain-goats), [80](/game/development/devlog-080-sounds-for-the-mountains)

![A mountain range](/images/encyclopedia/game/screenshots__2026-10-05__01_mountain_range.jpg)

*Development gameplay capture*


## Rustbelt and the works
<a id="rustbelt-and-the-works"></a>

**Status:** Implemented

Mile on mile of dead industry: levelled black soil, slag, foul pools that burn the skin, rail yards, and the works with factory halls, warehouses, ironworks, tank farms and catwalks across the streets. Rust rats come out at night; rust gives tetanus unless you wrap your hands.

**See also:** [Weathering](/game/systems/world#weathering), [Mining and metallurgy](/game/systems/engineering#mining-and-metallurgy)

**Development:** [82](/game/development/devlog-082-the-rustbelt-step-1-of-3-the-land-the-sky-the-foul-water), [83](/game/development/devlog-083-the-rustbelt-step-2-of-3-the-works), [84](/game/development/devlog-084-the-rustbelt-step-3-of-3-hazards-life-and-a-way-to-heal-it), [88](/game/development/devlog-088-the-rustbelt-green-against-the-rust-and-what-s-left-standing)

![The Rustbelt by day](/images/encyclopedia/game/screenshots__2026-10-05__10_rustbelt_day.jpg)

*Development gameplay capture*


## Hollow Wood and Hollow Manor
<a id="hollow-wood-and-hollow-manor"></a>

**Status:** Implemented

A twilight forest of wine-red trees, ground mist and an oversized moon, with crows and owls, graveyards, and a generated walled estate whose manor has halls and rooms on a 5 m grid, a grand stair, a conservatory, a cellar, a panic vault, wallpapers, rugs and an organ.

**Limits:** Not every wood has room for an estate. Upper walkways and secret passages are not built.

**See also:** [Building and base furniture](/game/systems/building#building-and-base-furniture)

**Development:** [94](/game/development/devlog-094-the-hollow-wood-step-1-the-wood-itself), [95](/game/development/devlog-095-the-hollow-wood-great-trees-roots-bitterroot), [96](/game/development/devlog-096-the-hollow-wood-step-2-the-estate), [97](/game/development/devlog-097-the-hollow-wood-step-3-hollow-manor), [98](/game/development/devlog-098-hollow-manor-generated), [102](/game/development/devlog-102-hollow-manor-the-wide-hall-doors-the-cellar-and-the-panic-vault), [105](/game/development/devlog-105-hollow-manor-a-pointier-house), [106](/game/development/devlog-106-the-wood-s-music-the-organ-s-piece-rolling-mist-roof-stairs), [107](/game/development/devlog-107-a-page-for-hollow-manor), [108](/game/development/devlog-108-wallpapers-and-rugs-for-the-manor), [115](/game/development/devlog-115-the-manor-s-entrance-hall-and-the-wallpapers)

![The wood by day](/images/encyclopedia/game/screenshots__2026-10-06__09_hollow_day.jpg)

*Development gameplay capture*


## Sporelands
<a id="sporelands"></a>

**Status:** Implemented

The network's heartland: teal mycelium soil, giant glowing mushrooms (up to 24 blocks tall), spore blooms, and a growth rate twice the normal.

**Limits:** Fewer dedicated screenshots than other lands.

**See also:** [Mycelium spread and ground cover](/game/systems/world#mycelium-spread-and-ground-cover)

**Development:** [59](/game/development/devlog-059-the-sporelands-a-title-slideshow-music-by-hand-over)

![Spores over the Sporelands](/images/encyclopedia/game/screenshots__2026-10-06__52_motes_spores.jpg)

*Development gameplay capture*


## Glass Desert
<a id="glass-desert"></a>

**Status:** Implemented

A vast hot desert that follows the sun: shard dunes, blackglass flats, fulgurite towers, dry washes, cacti, scrub, crystal spires, a very large sun, drifting sand and glints, heat shimmer; and a service-station, solar-farm and broken-highway landmark each.

**Limits:** Newest land: counts and sizes of landmarks, glass coverage and loot generosity are untuned until playtested.

**See also:** [Heat](/game/systems/survival#heat), [Canteen and bottled water](/game/systems/survival#canteen-and-bottled-water), [Dune Hopper](/game/systems/creatures#dune-hopper), [Glassback Beetle](/game/systems/creatures#glassback-beetle)

**Development:** [123](/game/development/devlog-123-the-glass-desert-step-1-the-land), [124](/game/development/devlog-124-shard-fields), [127](/game/development/devlog-127-glass-in-the-ground-finished-blackglass-fulgurites-washes-the-crunch), [128](/game/development/devlog-128-the-glass-desert-step-3-the-air-and-the-sound), [129](/game/development/devlog-129-a-big-sun-for-the-glass-desert), [130](/game/development/devlog-130-the-glass-desert-step-4-life), [133](/game/development/devlog-133-the-glass-desert-step-6-the-service-station), [135](/game/development/devlog-135-the-glass-desert-step-7-the-solar-farm), [136](/game/development/devlog-136-the-glass-desert-step-8-the-broken-highway), [138](/game/development/devlog-138-crystal-spires), [140](/game/development/devlog-140-heat-shimmer-a-first-look)

![Closer (desert blackglass close)](/images/encyclopedia/game/screenshots__2026-10-08__desert_blackglass_close.jpg)

*Development gameplay capture*


## Glass Desert landmarks
<a id="glass-desert-landmarks"></a>

**Status:** Experimental (new, untuned or partial)

Service stations (six wall looks, canopy, pumps, gas mascots), solar farms (a field of old panels round a control house), and the broken highway (piers with T-shaped caps; stretches whole, broken, bare, or buried by a dune; wrecks with loot).

**Limits:** New and unplayed by anyone but the author; frequencies are knobs in code.

**See also:** [Glass Desert](/game/systems/world#glass-desert)

**Development:** [133](/game/development/devlog-133-the-glass-desert-step-6-the-service-station), [134](/game/development/devlog-134-gas-signs-and-billboards), [135](/game/development/devlog-135-the-glass-desert-step-7-the-solar-farm), [136](/game/development/devlog-136-the-glass-desert-step-8-the-broken-highway)

![(station doc variants)](/images/encyclopedia/game/screenshots__2026-10-11__station_doc_variants.jpg)

*Development gameplay capture*


## Day, night and sky
<a id="day-night-and-sky"></a>

**Status:** Implemented

A day/night cycle with graded skies, stars, and per-land skies (an amber haze for the desert, a huge red moon in the Hollow Wood, a large sun in the desert).

**See also:** [Heat](/game/systems/survival#heat), [Cold and warmth](/game/systems/survival#cold-and-warmth)

**Development:** [s2:1](/game/development/devlog-s2-01-a-day-night-cycle), [129](/game/development/devlog-129-a-big-sun-for-the-glass-desert)


## Mycelium spread and ground cover
<a id="mycelium-spread-and-ground-cover"></a>

**Status:** Implemented

Fungal ground and vines creep onto nearby blocks over time, grass grows back, and the Sporelands spread twice as fast; rot-proof building materials (sealed brick, treated planks) resist it.

**Limits:** It is ambient, not a mechanic with stakes yet: the network has no goals of its own.

**See also:** [Masonry, kiln and rot-proof building](/game/systems/building#masonry-kiln-and-rot-proof-building)

**Development:** [10](/game/development/devlog-010-trees-stone-and-a-world-that-grows-over), [47](/game/development/devlog-047-plants-grass-that-grows-back-a-texture-pass), [48](/game/development/devlog-048-fungal-undergrowth-moss-lichen-and-shelf-fungus)

![...and after the vines have had a while (sped up)](/images/encyclopedia/game/screenshots__2026-10-01__48_building_after_spread.jpg)

*Development gameplay capture*


## Weathering
<a id="weathering"></a>

**Status:** Implemented

Blocks show age and what happened to them: sooted brick, rusted and flaking metal, spalled concrete, scorched walls.

**See also:** [Rustbelt and the works](/game/systems/world#rustbelt-and-the-works)

**Development:** [87](/game/development/devlog-087-weathering-that-tells-you-what-happened-step-1-of-gpt-s-rustbelt-notes), [88](/game/development/devlog-088-the-rustbelt-green-against-the-rust-and-what-s-left-standing)
