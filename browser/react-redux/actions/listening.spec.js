import { expect } from 'chai';

// called in LineContainer in toggleLine method
describe('listenToLine', () => {


  // detects if there's no browser speech recognition support

  // recognition onerror callback
  // recognition onresult callback

  // if isListening,
    // dispatches stopListening and setCurrentLine
    // calls recognition.stop

  // if !isListening,
    // dispatches startListening
    // calls recognition.start
});
