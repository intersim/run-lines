const forEachPlay = require('./forEachPlay');

function stripStageDirectionSpeakers(lines) {
  const updatedLines = lines.map(line => {
    const [, , isStageDirection] = line.line_number.split('.').map(str => !+str);
    const newLine = Object.assign({}, line);

    if (isStageDirection) newLine.speaker = "";
    return newLine;
  });

  return updatedLines;
}

forEachPlay(stripStageDirectionSpeakers);

module.exports = stripStageDirectionSpeakers;
