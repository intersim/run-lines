const fs = require('fs');
const path = require('path');
const { expect } = require('chai');
const mkdirp = require('mkdirp');
const rimraf = require('rimraf');

describe('forEachPlay', () => {
  beforeEach(() => {
    const testLines = [
  {"line_id":102953,"play_name":"Twelfth Night","speech_number":1,"line_number":"1.2.1","speaker":"VIOLA","text_entry":"What country, friends, is this?"},
  {"line_id":102954,"play_name":"Twelfth Night","speech_number":2,"line_number":"1.2.2","speaker":"Captain","text_entry":"This is Illyria, lady."},
  {"line_id":102955,"play_name":"Twelfth Night","speech_number":3,"line_number":"1.2.3","speaker":"VIOLA","text_entry":"And what should I do in Illyria?"},
  {"line_id":102956,"play_name":"Twelfth Night","speech_number":3,"line_number":"1.2.4","speaker":"VIOLA","text_entry":"My brother he is in Elysium."},
  {"line_id":102957,"play_name":"Twelfth Night","speech_number":3,"line_number":"1.2.5","speaker":"VIOLA","text_entry":"Perchance he is not drown'd: what think you, sailors?"},
  {"line_id":102958,"play_name":"Twelfth Night","speech_number":4,"line_number":"1.2.6","speaker":"Captain","text_entry":"It is perchance that you yourself were saved."}
];

    fs.mkdirSync(path.resolve(__dirname, '../data/plays/TEST'));
    // fs.mkdirSync('../data/plays/TEST/act_1/');
    // fs.writeFileSync(`../data/plays/TEST/act_1/scene_1.json`, JSON.stringify(testLines));
  });

  afterEach(() => {

  });

  it('executes a callback function for all the lines in a play', () => {

    // spy on callback function; it should get called x number of times
    //

  });
});
