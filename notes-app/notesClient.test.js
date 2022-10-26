const NotesClient = require('./notesclient.js');
require('jest-fetch-mock').enableMocks()

describe('NotesClient class', () => {
  it('calls fetch and loads data', (done) => {
   
    const notesClient = new NotesClient();
    
    fetch.mockResponseOnce(JSON.stringify({
      notes: ['This note is coming from the server']
    }));

    notesClient.loadNotes((returnedDataFromApi) => {
      expect(returnedDataFromApi.notes[0]).toBe('This note is coming from the server');

      done();
    });
  });
  it('calls fetch and adds a new note', (done) => {
    const notesClient = new NotesClient();
    
    fetch.mockResponseOnce(JSON.stringify({
      notes: ['This note is coming from the server', 'test note']
    }));

    notesClient.createNote((returnedDataFromApi) => {
      expect(returnedDataFromApi.notes[1]).toBe('test note');

      done();
    })
  });
});