/**
 * play name
 * how many acts
 * how many scenes
 * play type?
 */

const fs = require('fs');
const path = require('path');
const toc = require('../data/plays/toc.json');

const makeOverview = playArr => {
  const play_name = playArr[0].play_name.replace(/\s/g, "-");
  const acts = {}

  let lastAct = 0
  let lastScene = 0

  playArr.forEach((line, idx, arr) => {
    // increment lastAct num at beginning of new act
    if (line.text_entry.toLowerCase().includes("act") && !line.line_number) {
      lastAct += 1;
      lastScene = 1;
    }

    // increment scene if it's not the beginning of a new act
    if (arr[idx-1] && !arr[idx-1].text_entry.toLowerCase().includes("act") && line.text_entry.toLowerCase().includes("scene")) {
      lastScene += 1;
    }

    // push scene num to act arr
    if (!acts[lastAct]) acts[lastAct] = [];
    if (!acts[lastAct].includes(lastScene)) acts[lastAct].push(lastScene);
  })

  return {
    play_name,
    acts
  };
}

const writeOverviewToFile = (playArr) => {
  overview = makeOverview(playArr);

  const playPath = path.join(__dirname, '..', 'data', 'plays', overview.play_name);

  const err = fs.writeFileSync(path.join(playPath, `${overview.play_name}_overview.json`), JSON.stringify(overview));
  if (err) console.error(err);
  else console.log(`Finished writing overview for ${overview.play_name}.`)
}

toc.forEach(playName => {
  const playArr = require(`../data/plays/${playName}/${playName}.json`)
  writeOverviewToFile(playArr);
})

console.log("***** Finished writing all overviews! *****")
