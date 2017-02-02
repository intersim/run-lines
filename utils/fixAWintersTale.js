const fs = require('fs');
const path = require('path');

(function() {
  // 4 scenes in act 4
  let fixNum = 1;
  for (let i = 1; i <=4; i++) {
    const scenePath = path.join(__dirname, '..', 'data', 'plays', 'A-Winters-Tale', 'act_4', `scene_${i}.json`)
    const scene = JSON.parse(fs.readFileSync(scenePath, 'utf8'));

    scene.map(line => {
      let lineNum = line.line_number.split('.')[2]
      let sceneNum;

      if (line.line_id >= 109548 && line.line_id <= 109584) {
        sceneNum = 1;
        if (Number(lineNum)) {
          lineNum = fixNum++;
        }
      }
      if (line.line_id >= 109585 && line.line_id <= 109641) {
        sceneNum = 2;
      }
      if (line.line_id >= 109642 && line.line_id <= 109774) {
        sceneNum = 3;
      }
      if (line.line_id >= 109775 && line.line_id <= 110737) {
        sceneNum = 4;
      }

      line.line_number = `4.${sceneNum}.${lineNum}`;
      return line;
    })

    const err = fs.writeFileSync(scenePath, JSON.stringify(scene));
    if (err) console.log(`There was an error: ${err}`)
    else console.log(`Wrote scene ${i}.`)
  }
})();
