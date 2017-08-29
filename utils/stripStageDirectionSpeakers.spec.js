const stripStateDirectionSpeakers = require('./stripStateDirectionSpeakers');
const expect = require('chai').expect;

const testLines = [
  {"line_id":102951,"play_name":"Twelfth Night","speech_number":7,"line_number":"1.2.0","speaker":"DUKE ORSINO","text_entry":"SCENE II. The sea-coast."},
  {"line_id":102952,"play_name":"Twelfth Night","speech_number":7,"line_number":"1.2.0","speaker":"DUKE ORSINO","text_entry":"Enter VIOLA, a Captain, and Sailors"},
  {"line_id":102953,"play_name":"Twelfth Night","speech_number":1,"line_number":"1.2.1","speaker":"VIOLA","text_entry":"What country, friends, is this?"}
]

describe('stripStateDirectionSpeakers', () => {
  it('sets the speaker property of stage direction lines to empty strings', () => {
    const newLines = stripStateDirectionSpeakers(testLines);

    expect(newLines[0].speaker).to.be.empty;
    expect(newLines[1].speaker).to.be.empty;
    expect(newLines[2].speaker).to.not.be.empty;
    expect(newLines[2].speaker).to.equal('VIOLA');
  });
});
