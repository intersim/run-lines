const fs = require('fs');

// read toc.json, and for each play:
const getAllCharacters = playNames => {
	playNames.forEach(playName => {
		const characters = [];

		let playLines = fs.readFileSync(`../data/plays/${playName}.json`, 'utf8');

		playLines = JSON.parse(playLines);

		playLines.forEach(line => {
			const character = line.speaker.split(' ').map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()).join(' ');

			if (line.line_number && !characters.includes(character) && character !== 'All') {
				characters.push(character);
			}
		});

		const err = fs.writeFileSync(`../data/characters/${playName}-characters.json`, JSON.stringify(characters.sort()));
		if (err) console.error(err);

		console.log(`Wrote characters for ${playName}`);
	});
	
	console.log('All done getting characters!');
}

const playNames = require('../data/plays/toc.json');
getAllCharacters(playNames);


