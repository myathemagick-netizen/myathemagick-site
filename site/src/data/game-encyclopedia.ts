export const sections = [
 {id:'atlas',title:'World Atlas',description:'Ten lands, inherited places, and the structures within them.'},
 {id:'field-guide',title:'Field Guide',description:'Objects, materials, fungi, wildlife, and equipment.'},
 {id:'systems',title:'Game Systems',description:'What works in the development build, with its known limits.'},
 {id:'future',title:'Future Systems',description:'Planned features and concepts, clearly separated from playable systems.'},
 {id:'development',title:'Development',description:'The journal, changelog, and technical history of the game.'},
 {id:'play',title:'Play & Support',description:'Preview availability, controls, beginner guidance, and testing.'}
];
export const collectionNames = ['gameBiomes','gameItems','gameOrganisms','gameSystems','gameFuture','gameDevlogs','gameGuides','gamePlaces'] as const;
export const imageLabels: Record<string,string> = {game_screenshot:'Development gameplay capture',game_render:'Engine structure render',concept_art:'Concept art · not gameplay',illustration:'Illustration / asset reference',unknown:'Unverified image provenance'};
