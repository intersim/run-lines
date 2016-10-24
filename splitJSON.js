// write line obj to file with same name as "play_name"

const fs = require('fs');

const splitJSON = (a) => {
	a.forEach(lineObj => {
		console.log(`Writing ${lineObj.play_name}...`)
		const err = fs.writeFileSync(`./data/${lineObj.play_name}.json`, JSON.stringify(lineObj))
		if (err) console.error(err);
		console.log(`Wrote ${lineObj.play_name}.`)
	});
	console.log("all done splitting JSON!");
}

console.log("Getting ready to split up this JSON...");

splitJSON(
  JSON.parse(
  fs.readFileSync('./data/will_play_text.json')
     .toString()
     .replace(/\\'/g, '')
     .replace(/\t/g, ' ')))
 
//const playArray = require('./data/will_play_text.fixed.json');
//splitJSON(playArray);
