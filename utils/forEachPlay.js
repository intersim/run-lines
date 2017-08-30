const fs = require('fs');
const path = require('path');
const toc = require('../data/plays/toc.json');

// callback function must expect to take an array of line objects, and return an array of line objects
function forEachPlay(callbackFn) {
  console.log('***** Updating all plays... *****')
  toc.forEach(playName => {
    let overview = fs.readFileSync(path.resolve(__dirname, `../data/plays/${playName}/${playName}_overview.json`), 'utf8');

    overview = JSON.parse(overview);
    const { acts } = overview;

    [1, 2, 3, 4, 5].forEach(actNum => {
       acts[actNum].forEach(sceneNum => {
        let lines = fs.readFileSync(path.resolve(__dirname, `../data/plays/${playName}/act_${actNum}/scene_${sceneNum}.json`), 'utf8');

        lines = JSON.parse(lines);

        lines = callbackFn(lines);

        const err = fs.writeFileSync(path.resolve(__dirname, `../data/plays/${playName}/act_${actNum}/scene_${sceneNum}.json`), JSON.stringify(lines));

        if (err) console.error(err);
       });
    });

    console.log(`Finished updating ${playName}`);
  });

  console.log('***** Finished updating all plays *****')
}

module.exports = forEachPlay;
