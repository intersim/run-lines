const fs = require('fs');
const _ = require('lodash');

const splitJSON = (a) => {
	console.log("Getting ready to split up this JSON...");
	const playsObj = _.groupBy(a, 'play_name');

	for (title in playsObj) {
		console.log(`Writing ${title}...`)
		const filename = title.replace(/\s/g, "-");
		const err = fs.writeFileSync(`./data/${filename}.json`, JSON.stringify(playsObj[title]))
		if (err) console.error(err);
		console.log(`Wrote ${title}.`)
	}

	console.log("All done splitting JSON!");
}
 
const playArray = require('./data/will_play_text.fixed.json');
splitJSON(playArray);
