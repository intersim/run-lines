const fs = require('fs');
const toc = require('../data/plays/toc.json');
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

	let lastAct = 1
	let lastScene = 1
	let emptyLineNum = 0

	play.forEach(line => {

	// for stage directions that don't have a line number:
		if (!line.line_number) line.line_number = [lastAct, lastScene, emptyLineNum]
		if (line.text_entry.includes("ACT")) lastAct++, lastScene++

		const [act, scene] = line.line_number.split(".").map(str => Number(str))
		if (!splitPlay[`act_${act}`]) splitPlay[`act_${act}`] = {}
		if (!splitPlay[`act_${act}`][`scene_${scene}`]) splitPlay[`act_${act}`][`scene_${scene}`] = []
		splitPlay[`act_${act}`][`scene_${scene}`].push(line)
	})
}

const writeSceneToFile = (sceneArr, sceneNum) => {

}

const writeActToFile = (actObj, actNum) => {

}

const splitAllPlays