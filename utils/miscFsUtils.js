const toc = require('../data/plays/toc.json');
const fs = require('fs');

// // Remove empty 'acts' folders
// toc.forEach(play => {
// 	if (fs.existsSync(`./data/plays/${play}/acts`)) {
// 		const err = fs.rmdirSync(`./data/plays/${play}/acts`);
// 		if (err) console.log(err);
// 		else console.log('deleted one folder...');
// 	} else {
// 		console.log(`${play} doesn't have that folder.`);
// 	}
// });

// // Rename all complete play files
// toc.forEach(play => { 
// 	const err = fs.renameSync(`./data/plays/${play}/${play}.json`, `./data/plays/${play}/${play}_complete.json`);
// 	if (err) console.log(`Something went wrong: ${err}`);
// 	else console.log(`Renamed "${play}.json" to "${play}_complete.json"`);
// });

// console.log(`Renamed all files.`);