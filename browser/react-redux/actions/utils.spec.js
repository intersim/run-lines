import { expect } from 'chai';
import { getNextLine, getNextSpeakerLine } from './utils';

describe('Helper functions', () => {
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
});
