import { expect } from 'chai';
import { getNextLine, getNextSpeakerLine } from './utils';

describe('Frontend Helper functions', () => {
  describe('getNextLine', () => {
    const testLines = [
      {
        "line_id":22431,
        "play_name":"A Comedy of Errors",
        "speech_number":1,
        "line_number":"1.1.1",
        "speaker":"AEGEON",
        "text_entry":"Proceed, Solinus, to procure my fall",
        "index": 0
      },
      {
        "line_id":22432,
        "play_name":"A Comedy of Errors",
        "speech_number":1,
        "line_number":"1.1.2",
        "speaker":"AEGEON",
        "text_entry":"And by the doom of death end woes and all.",
        "index": 1
      }
    ]

    it('takes in a line object that has an index property', () => {
      const currentLine = {
        "line_id":22431,
        "play_name":"A Comedy of Errors",
        "speech_number":1,
        "line_number":"1.1.1",
        "speaker":"AEGEON",
        "text_entry":"Proceed, Solinus, to procure my fall"
      };

      try {
        getNextLine(currentLine)
      } catch(err) {
        expect(err).to.be.an('error');
        expect(err.message).to.equal('Lines should have an index property.')
      }
    });

    it('returns the next line in a given array of lines in a scene', () => {
      const nextLine = getNextLine({
        "line_id":22431,
        "play_name":"A Comedy of Errors",
        "speech_number":1,
        "line_number":"1.1.1",
        "speaker":"AEGEON",
        "text_entry":"Proceed, Solinus, to procure my fall",
        "index": 0
      }, testLines);

      expect(nextLine).to.deep.equal({
        "line_id":22432,
        "play_name":"A Comedy of Errors",
        "speech_number":1,
        "line_number":"1.1.2",
        "speaker":"AEGEON",
        "text_entry":"And by the doom of death end woes and all.",
        "index": 1
      });
    });
  });

  describe('getNextSpeakerLine', () => {
    const testLines = [
      {"line_id":102956,"play_name":"Twelfth Night","speech_number":3,"line_number":"1.2.4","speaker":"VIOLA","text_entry":"My brother he is in Elysium.", "index": 0},
      {"line_id":102957,"play_name":"Twelfth Night","speech_number":3,"line_number":"1.2.5","speaker":"VIOLA","text_entry":"Perchance he is not drown'd: what think you, sailors?", "index": 1},
      {"line_id":102958,"play_name":"Twelfth Night","speech_number":4,"line_number":"1.2.6","speaker":"Captain","text_entry":"It is perchance that you yourself were saved.", "index": 2}
    ]
    const [ line1 ] = testLines;

    it('returns the next line in the scene spoken by a different character than the passed-in line.', () => {
      const nextSpeakerLine = getNextSpeakerLine(line1, testLines);

      expect(nextSpeakerLine.speaker).to.not.equal(line1.speaker);
      expect(nextSpeakerLine.speaker).to.equal("Captain");
    });
  });
});
