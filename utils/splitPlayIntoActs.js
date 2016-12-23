const fs = require('fs');
const toc = require('../data/plays/toc.json');

const splitPlaysIntoActs = () => {
	toc.forEach(play => {
		const splitPlay = {
			I: [],
			II: [],
			III: [],
			IV: [],
			V: []
		}

		
	});

	console.log("All done splitting up plays!");
}

splitPlaysIntoActs();