const fs = require('fs');
const toc = require('../data/plays/toc.json');
const TwelfthNight = require('../data/plays/Twelfth-Night/Twelfth-Night.json');
const path = require('path');

// const makeFolders = () => {
// 	toc.forEach(play => fs.mkdir(
// 		path.join(__dirname, '..', 'data', 'plays', play, 'acts'),
// 		err => {
// 			if (err) console.log(`Something went wrong: ${err}\n`)
// 		})
// 	)
//
// for (var i = 1; i <= 5; i++) {
// 	toc.forEach(play => fs.mkdir(
// 		path.join(__dirname, '..', 'data', 'plays', play, 'acts', i),
// 		err => {
// 			if (err) console.log(`Something went wrong: ${err}\n`)
// 		})
// 	)
// }
//
// 	toc.forEach(play => fs.mkdir(
// 		path.join(__dirname, '..', 'data', 'plays', play, 'acts', 'scenes'),
// 		err => {
// 			if (err) console.log(`Something went wrong: ${err}\n`)
// 		})
// 	)
// }

const splitPlayIntoActsAndScenes = play => {
	const splitPlay = {}

	let lastAct = 0
	let lastScene = 0
	let emptyLineNum = 0

	play.forEach(line => {
		// increment last
		if (line.text_entry.toLowerCase().includes("act")) {
			lastAct++;
		}

		if (line.text_entry.toLowerCase().includes("scene")) {
			lastScene++;
		}

		// for stage directions that don't have a line number:
		let act, scene;
		if (!line.line_number) {
			line.line_number = [lastAct, lastScene, emptyLineNum].join('.')
			act = lastAct;
			scene = lastScene;
		} else {
			[act, scene] = line.line_number.split(".").map(str => Number(str));
		}

		if (!splitPlay[`act_${act}`]) {
			splitPlay[`act_${act}`] = {}
		}

		if (!splitPlay[`act_${act}`][`scene_${scene}`]) {
			splitPlay[`act_${act}`][`scene_${scene}`] = [];
		}

		splitPlay[`act_${act}`][`scene_${scene}`].push(line);

		lastAct = act;
		lastScene = scene;
	})

	return splitPlay;
}

console.log(JSON.stringify(splitPlayIntoActsAndScenes(TwelfthNight)[`act_1`][`scene_2`]));

const writePlayScenesToFile = (playObj) => {
	const playName = playObj.act_1.scene_1[0].play_name.replace(/\s/g, "-");

	for (let act in play) {
		// make a folder for the current act
		const actPath = path.join(__dirname, '..', 'data', 'plays', playName, act);

		fs.mkdir(actPath, err => {
			if (err) console.log(`Something went wrong: ${err}\n`)
		})

		// write scenes to file in that folder
		for (let scene in act) {
			const err = fs.writeFileSync(`../data/plays/${playName}/${act}/${scene}.json`)
			if (err) console.error(err);
			console.log(`Wrote ${scene}.`)
		}
		console.log(`Finished with ${act}`!)
	}
	console.log(`All done with ${playName}`)
}
