const fs = require('fs');
const toc = require('../data/plays/toc.json');
const TwelfthNight = require('../data/plays/Twelfth-Night/Twelfth-Night.json');
const path = require('path');

// TO-DO: FIX THIS; IT IS BUGGY BUT ULTIMATELY WORKS IF YOU RUN IT MULTIPLE TIMES (often gets "file/directory doesn't exist?")

const splitPlayIntoActsAndScenes = play => {
	const splitPlay = {}

	let lastAct = 0
	let lastScene = 0
	let emptyLineNum = 0

	play.forEach((line, idx, arr) => {
		// increment lastAct num at beginning of new act
		if (line.text_entry.toLowerCase().includes("act")) {
			lastAct++;
			lastScene = 1;
		}

		// increment scene if it's not the beginning of a new act
		if (arr[idx-1] && !arr[idx-1].text_entry.toLowerCase().includes("act") && line.text_entry.toLowerCase().includes("scene")) {
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

		// make act obj
		if (!splitPlay[`act_${act}`]) {
			splitPlay[`act_${act}`] = {}
		}

		// make scene arr
		if (!splitPlay[`act_${act}`][`scene_${scene}`]) {
			splitPlay[`act_${act}`][`scene_${scene}`] = [];
		}

		// add line to scene arr
		splitPlay[`act_${act}`][`scene_${scene}`].push(line);

		lastAct = act;
		lastScene = scene;
	})

	return splitPlay;
}

// THIS IS WHAT'S NOT QUITE WORKING
const writePlayScenesToFile = (play) => {
	const playName = play[0].play_name.replace(/\s/g, "-");
	splitPlayObj = splitPlayIntoActsAndScenes(play);

	for (let act in splitPlayObj) {
		// make a folder for the current act
		const actPath = path.join(__dirname, '..', 'data', 'plays', playName, act);

		fs.mkdir(actPath, err => {
			if (err) console.log(`Something went wrong: ${err}`)
		})

		// write scenes to file in that folder
		for (let scene in splitPlayObj[act]) {
			const err = fs.writeFileSync(path.join(actPath, `${scene}.json`), JSON.stringify(splitPlayObj[act][scene]));
			if (err) console.error(err);
		}
	}
	console.log(`Finished writing ${playName}.`)
}

toc.forEach(play => {
	const playObj = require(`../data/plays/${play}/${play}.json`)
	writePlayScenesToFile(playObj);
})
console.log("***** Finished writing all plays! *****")
