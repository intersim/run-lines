const fs = require('fs');
const path = require('path');
const toc = require('../data/plays/toc.json');

function forEachPlay(callbackFn) {
  toc.forEach(play => {
    // get number of act directories in play file
    // get number of scene files in each directory
    let lines = fs.readFileSync(`../data/plays/${playName}/`, 'utf8');

    lines = JSON.parse(lines);

    lines = callbackFn(lines);

    const err = fs.writeFileSync(`../data/plays/${playName}.json`, JSON.stringify(lines));

    if (err) console.error(err);
    else console.log("All done!");
  });
}

module.exports = forEachPlay;
