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
      notes: ['test note']
    }));

    notesClient.createNote((returnedDataFromApi) => {
      expect(returnedDataFromApi.notes[0]).toBe('test note');

      done();
    })
  });
  it('calls fetch and resets the notes', (done) => {
   
    const notesClient = new NotesClient();
    
    fetch.mockResponseOnce(JSON.stringify({
      notes: []
    }));

    notesClient.resetNotes((returnedDataFromApi) => {
      expect(returnedDataFromApi.notes.length).toBe(0);

      done();
    });
  });
   
  it('adds a new note and loads all notes', (done) => {
    const client = new NotesClient();

    fetch.mockResponseOnce(JSON.stringify({
      content: "This is a note"
    }));
    
    let newNoteFromAPI = 'This is a note'
    client.createNote(newNoteFromAPI, (returnedDataFromApi) => {
      expect(returnedDataFromApi).toEqual({
        content: "This is a note"
      });

      done();
    })
  });
});