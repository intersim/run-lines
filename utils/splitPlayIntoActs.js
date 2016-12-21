// const fs = require('fs');
// const _ = require('lodash');

// // NOT DONE HERE YET

// const splitPlaysIntoActs = playArr => {
// 	console.log("Getting ready to split up this JSON...");

// 	const playObj = {};
// 	let lastActNum = 1;

// 	playArr.forEach(line => {
// 		let lineNum = line.line_number;

// 		if (line_number) {
// 			lastActNum = line_number.split('.')[0]
// 		}

// 		if (!playObj[lastActNum]) playObj[lastActNum] = [];
// 		playObj[lastActNum].push(line);
// 	});

// 	const err = fs.writeFileSync(`./data/play-in-acts.json`, JSON.stringify(playsObj[title]))
// 	if (err) console.error(err);
// 	console.log(`Wrote ${title}.`)

// 	console.log("All done splitting JSON!");
// }